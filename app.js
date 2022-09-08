import colrs from 'colors';
import { showMenu, pause, readInput } from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';

console.clear();

const main = async () => {

    let opt = '';
    const tasks = new Tasks();

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
                console.log(tasks._tasks);
                break;
            case '3':
                // List completed tasks
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

        await pause();
    } while (opt !== '0');

}

main();