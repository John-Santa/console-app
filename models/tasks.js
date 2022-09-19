import Task from './task.js';

export class Tasks {

    constructor() {
        this._tasks = {};
    }

    createTask(description = '') {
        const task = new Task(description);
        this._tasks[task.id] = task;
    }

    get listArr() {
        const list = [];
        Object.keys(this._tasks).forEach(key => {
            const task = this._tasks[key];
            list.push(task);
        });
        return list;
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(task => {
            this._tasks[task.id] = task;
        });
    }

    listCompleted() {

        console.log();
        this.listArr.forEach(( task, i) => {
            let idx = `${i + 1}. `.green;
            let { description, completedAt } = task;
            let state = (completedAt) ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${idx} ${description} :: ${state}`);
        });

    }

    listPendingsOrCompleted( completed = true ) {

        console.log();
        let count = 0;
        this.listArr.forEach(( task, i) => {
            let { description, completedAt } = task;

            if ( completed == Boolean(completedAt) ) {
                count += 1;
                console.log(`${(count + '.').green} ${description} :: ${completedAt}`);
            }
        });

    }

    deleteTask( id = '' ){
        if(this._tasks[id]) {
            delete this._tasks[id];
        }
    }

}
