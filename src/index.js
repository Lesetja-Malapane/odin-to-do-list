console.log("Hello, world");

class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const les = new ToDo("les", "hello World", new Date(), "top");
console.log(les);