import { createList, createTask, showForm, showTasks } from "./functions";
import "./styles.css";

const tasks = createList("primary");

const les = createTask("les", "hello World", new Date(), "top");
const kat = createTask("Story", "My Life", new Date(), "top");

tasks.addItem(les);
tasks.addItem(kat);

const taskButton = document.getElementById("createNewPage");
const taskSideBar = document.getElementById("pages");
let rightBar = document.querySelector(".tasks");

taskButton.addEventListener("click", () => {
    showForm(taskSideBar);
});

showTasks(tasks, rightBar);