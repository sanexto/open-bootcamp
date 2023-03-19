export class Task {

    id = null;
    title = null;
    description = null;
    priority = null;
    completed = null;

    constructor(id, title, description, priority, completed) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = completed;
        
    }

}