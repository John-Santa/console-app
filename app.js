import colrs from 'colors';
import { showMenu, pause, readInput } from './helpers/inquirer.js';
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
                // List pending tasks
                break;
            case '5':
                // Complete task(s)
                break;
            case '6':
                // Delete task
                break;
        }

        saveDB(tasks.listArr);

        await pause();
    } while (opt !== '0');

}

main();