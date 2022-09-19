import colrs from 'colors';
import { showMenu, pause, readInput, listTasksToDelete, confirm } from './helpers/inquirer.js';
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
                // List tasks
                console.log(tasks.listArr);
                break;
            case '3':
                tasks.listCompleted();
                break;
            case '4':
                tasks.listPendingsOrCompleted(false);
                break;
            case '5':
                tasks.listPendingsOrCompleted(true);
                break;
            case '6':
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