import { createList, createTask, showForm, showTasks } from "./functions";
import "./styles.css";

const tasks = createList("primary");

const kat = createTask(
    "Lorem Ipsum2",
    "1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, eum sunt itaque quia expedita vitae. Saepe aliquid veritatis quaerat illo nam iure pariatur, veniam eos quis perferendis nulla corporis magni.",
    new Date(),
    "top"
);
const ya = createTask(
    "Lorem Ipsum2",
    "1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, eum sunt itaque quia expedita vitae. Saepe aliquid veritatis quaerat illo nam iure pariatur, veniam eos quis perferendis nulla corporis magni.",
    new Date(),
    "top"
);
const kn = createTask(
    "Lorem Ipsum2",
    "1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, eum sunt itaque quia expedita vitae. Saepe aliquid veritatis quaerat illo nam iure pariatur, veniam eos quis perferendis nulla corporis magni.",
    new Date(),
    "top"
);
const les = createTask("Lorem Ipsum1", "2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, eum sunt itaque quia expedita vitae. Saepe aliquid veritatis quaerat illo nam iure pariatur, veniam eos quis perferendis nulla corporis magni.", new Date(), "top");

tasks.addItem(les);
tasks.addItem(kat);
tasks.addItem(ya);
tasks.addItem(kn);

const taskButton = document.getElementById("createNewPage");
const taskSideBar = document.getElementById("pages");
let rightBar = document.querySelector(".tasks");

taskButton.addEventListener("click", () => {
    showForm(taskSideBar);
});

showTasks(tasks, rightBar);
