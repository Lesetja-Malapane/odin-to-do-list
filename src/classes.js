class Task {
    constructor(title, description, dueDate, priority, complete) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._complete = complete;
    }

    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }

    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }

    get dueDate() {
        return this._dueDate;
    }
    set dueDate(value) {
        this._dueDate = value;
    }

    get priority() {
        return this._priority;
    }
    set priority(value) {
        this._priority = value;
    }

    get complete() {
        return this.complete;
    }
    set complete(complete) {
        this._complete = complete;
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