import {List, Task} from "./classes";

function createList(listId) {
    return new List(listId);
}

function createTask(title, description, dueDate, priority) {
    return new Task(
        title, description, dueDate, priority
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

    let newContent = document.getElementById("pages")
    newContent.appendChild(dfsg);
}

export {createList, createTask, showForm, createPage}