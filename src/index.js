import { createList, createTask, showForm, changePage } from "./functions";
import "./styles.css";

const tasks = createList("primary");

const pageButton = document.getElementById("createNewPage");
const taskButton = document.getElementById("createNewTask");
const taskSideBar = document.getElementById("pages");
let rightBar = document.querySelector(".tasks");

pageButton.addEventListener("click", () => {
    showForm(taskSideBar);
});

taskButton.addEventListener("click", () => {
    console.log("called");
    createTask(tasks, rightBar);
});

changePage(tasks, rightBar)