import colrs from 'colors';
import { showMenu, pause, readInput, listTasksToDelete, confirm, showCheckList } from './helpers/inquirer.js';
import { saveDB, readDB } from './helpers/persist.js';
import { Tasks } from './models/tasks.js';

console.clear();

const main = async () => {

    let opt = '';
    const tasks = new Tasks();
    const tasksDB = readDB();
    if (tasksDB) {
        tasks.loadTasksFromArray(tasksDB);
    }

    do {
        opt = await showMenu();

        switch (opt) {
            case '1':
                // Create task
                const description = await readInput('Description: ');
                tasks.createTask(description);
                break;
            case '2':
                //List task
                console.log(tasks.listArr);
                break;
            case '3':
                //List completed tasks
                tasks.listPendingsOrCompleted(true);
                break;
            case '4':
                //List pending tasks
                tasks.listPendingsOrCompleted(false);
                break;
            case '5':
                //Completed task(s)
                const ids = await showCheckList( tasks.listArr );
                tasks.toggleTask(ids)
                break;
            case '6':
                //Delete task
                const id = await listTasksToDelete( tasks.listArr );
                if (id != '0') {
                    const ok = await confirm('Are you sure?');
                    if (ok) {
                        tasks.deleteTask( id );
                        console.log('Task deleted successfully.');
                    }
                }
                break;
        }

        saveDB(tasks.listArr);

        await pause();
    } while (opt !== '0');

}

main();