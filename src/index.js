import { createList, createTask, showForm, createPage } from "./functions";
import "./styles.css";

const tasks = createList("primary");
let title;

const les = createTask("les", "hello World", new Date(), "top");
const kat = createTask("Story", "My Life", new Date(), "top");

tasks.addItem(les);
tasks.addItem(kat);

const taskButton = document.getElementById("createNewPage");
const taskSideBar = document.getElementById("pages");

taskButton.addEventListener("click", () => {
    showForm(taskSideBar);
    // createPage(title)
});

console.log(tasks.getList());
