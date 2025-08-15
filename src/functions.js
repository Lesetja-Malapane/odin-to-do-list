import {List, Task} from "./classes";

function createList(listId) {
    return new List(listId);
}

function createTask(title, description, dueDate, priority, completion) {
    return new Task(
        title, description, dueDate, priority, completion
    )
}

function showForm(contentDiv) {
    const formContent = document.createElement("form");

    const title = document.createElement("input");
    const submit = document.createElement("input");
    submit.type = "submit";

    // submit.textContent = "Add";
    submit.id = "submit";
    title.id = "title";
    title.name = "title";
    title.type = "text";

    formContent.appendChild(title)
    formContent.appendChild(submit)
    contentDiv.appendChild(formContent)

    submit.addEventListener("click", () => {
        event.preventDefault();
        createPage(title.value, contentDiv);
        formContent.remove();
    })
}

function createPage(title, contentDiv) {
    const dfsg = document.createElement("button");
    dfsg.id = "newPage";
    dfsg.textContent = title;

    contentDiv.appendChild(dfsg);
}

function showTasks(myTasks, myDiv) {
    myTasks.getList().forEach(task => {
        myDiv.textContent = "";
        const taskElement = document.createElement('div');
        taskElement.id = "task";

        const title = document.createElement("h2");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        let completion = document.createElement("input");
        completion.type = "checkbox";
        completion.name = task.completion;
        completion.id = "completion";

        const del = document.createElement("button");
        del.textContent = "Delete";
        del.id = "delete";

        // taskElement.textContent = task.title; // Using the getter
        // taskElement.classList.add('task-item');

        taskElement.appendChild(title);
        taskElement.appendChild(description);
        taskElement.appendChild(del);
        taskElement.appendChild(completion);

        myDiv.appendChild(taskElement);
    });
}

function changePage(contentDiv, myDiv) {
    const pages = document.querySelectorAll("#pages");
    pages.forEach(element => {
        element.addEventListener("click", () => {
            showForm(contentDiv, myDiv)
        })
    });
}

export {createList, createTask, showForm, createPage, showTasks, changePage}