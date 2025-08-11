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

    // event.preventDefault();

    const title = document.createElement("input");
    const addPageButton = document.createElement("input");
    addPageButton.type = "submit";

    // addPageButton.textContent = "Add";
    addPageButton.id = "addPageButton";
    title.id = "title";
    title.name = "title";
    title.type = "text";

    formContent.appendChild(title)
    formContent.appendChild(addPageButton)
    contentDiv.appendChild(formContent)

    return formContent.elements["title"].value;
}

function createPage(title) {
    const dfsg = document.createElement("h1");
    dfsg.textContent(title)
    document.body.appendChild(dfsg)
}

export {createList, createTask, showForm, createPage}