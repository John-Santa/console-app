import colrs from 'colors';
import { showMenu, pause } from './helpers/inquirer.js';


console.clear();

const main = async () => {

    let opt = '';

    do {
        opt = await showMenu();
        console.log({ opt });
        await pause();
    } while (opt !== '0');

}

main();