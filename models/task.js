import { v4 as uuidv4 } from 'uuid';

class Task {

    constructor( description, completed) {
        this.id = uuidv4();
        this.description = description;
        this.completed = null;
    }


}

export default Task;