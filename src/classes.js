class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class List {
    constructor(listId) {
        this.id = listId;
        this.list = [];
    }

    addItem(item) {
        this.list.push(item)
    }

    getList() {
        return this.list;
    }

    getId() {
        return this.id;
    }
}
export {Task, List}