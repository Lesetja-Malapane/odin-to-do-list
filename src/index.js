import { createList, createTask, showForm, changePage } from "./functions";
import "./styles.css";

let currentPage;
const tasks = createList("primary");

const pageButton = document.getElementById("createNewPage");
const taskButton = document.getElementById("createNewTask");
const taskSideBar = document.getElementById("pages");
let rightBar = document.querySelector(".tasks");

pageButton.addEventListener("click", () => {
    currentPage = showForm(taskSideBar);
});

taskButton.addEventListener("click", () => {
    console.log("called");
    createTask(tasks, currentPage);
});

changePage(tasks, rightBar);

//set current page to clicked page
taskSideBar.addEventListener("click", (e) => {
    if (e.target.className === "newPage") {
        currentPage = e.target.id;
        console.log("current page set to: ", currentPage);
        changePage(tasks, rightBar, currentPage);
    }
});
