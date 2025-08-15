import {List, Task} from "./classes";

function createList(listId) {
    return new List(listId);
}

const myList = createList("hi");

function createTask(taskList, currentPage) {
    // title, description, dueDate, priority, completion
    const contentDiv = document.querySelector(".tasks");
    const formContent = document.createElement("form");

    const title = document.createElement("input");
    const description = document.createElement("input");
    const dueDate = document.createElement("input");
    const priority = document.createElement("input");
    const complete = document.createElement("input");
    
    title.id = "title";
    title.name = "title";
    title.type = "text";

    description.id = "description";
    description.name = "description";
    description.type = "text";

    dueDate.id = "dueDate";
    dueDate.name = "dueDate";
    dueDate.type = "date";

    priority.id = "priority";
    priority.name = "priority";
    priority.type = "date";

    complete.id = "complete";
    complete.name = "complete";
    complete.type = "checkbox";
    
    const submit = document.createElement("input");
    submit.type = "submit";
    submit.id = "submit";

    // submit.textContent = "Add";

    formContent.appendChild(title)
    formContent.appendChild(description)
    formContent.appendChild(dueDate)
    formContent.appendChild(complete)
    formContent.appendChild(submit)
    contentDiv.appendChild(formContent)

    submit.addEventListener("click", () => {
        event.preventDefault();
        taskList.addItem(new Task(title.value, description.value, dueDate.value, priority.value, complete.value, currentPage));
        formContent.remove();
    })
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
    const newPage = document.createElement("button");
    newPage.id = title;
    newPage.className = "newPage";
    newPage.textContent = title;

    contentDiv.appendChild(newPage);
}

function showTasks(myTasks, myDiv, currentPage) {
    let tasks = myTasks.getList();

    tasks = tasks.filter(task => task.page === currentPage);

    tasks.forEach(task => {
        if (task.page !== currentPage) return; // Only show tasks for the current page
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

function changePage(contentDiv, myDiv, currentPage) {
    const pages = document.querySelectorAll("#pages");
    pages.forEach(element => {
        element.addEventListener("click", () => {
            myDiv.textContent = "";
            showTasks(contentDiv, myDiv, currentPage)
        })
    });
}

export {createList, createTask, showForm, createPage, showTasks, changePage}