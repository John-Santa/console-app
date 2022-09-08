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

}
