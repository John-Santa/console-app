import Task from './task.js';

export class Tasks {

    constructor() {
        this._tasks = {};
    }

    createTask(description = '') {
        const task = new Task(description);
        this._tasks[task.id] = task;
    }


}
