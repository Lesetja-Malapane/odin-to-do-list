import { createList, createTask } from "./functions"
import "./styles.css"

const tasks = createList("primary");

const les = createTask("les", "hello World", new Date(), "top");
const kat = createTask("Story", "My Life", new Date(), "top");

tasks.addItem(les);
tasks.addItem(kat);


const taskButton = document.getElementById("createNewPage");
const taskSideBar = document.getElementById("pages");

taskButton.addEventListener("click", () => {
    const formContent = document.createElement("form");
    const title = document.createElement("input");
    const addPageButton = document.createElement("button");

    addPageButton.textContent = "Add";
    addPageButton.id = "addPageButton";
    title.id = "title";
    title.name = "title";
    title.type = "text";

    formContent.appendChild(title)
    formContent.appendChild(addPageButton)
    taskSideBar.appendChild(formContent)
})

console.log(tasks.getList());