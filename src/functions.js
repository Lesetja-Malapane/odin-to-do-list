import {List, Task} from "./classes";

function createList(listId) {
    return new List(listId);
}

function createTask(title, description, dueDate, priority) {
    return new Task(
        title, description, dueDate, priority
    )
}
export {createList, createTask}