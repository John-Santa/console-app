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

        this.listArr.forEach(( task, i) => {
            let idx = `${i + 1}. `.green;
            let { description, completed } = task;
            let state = (completed) ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${idx} ${description} :: ${state}`);
        });

    }

}
