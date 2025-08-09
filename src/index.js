import {createList, createTask} from "./functions"
import "./styles.css"

const tasks = createList("primary");

const les = createTask("les", "hello World", new Date(), "top");
const kat = createTask("Story", "My Life", new Date(), "top");

tasks.addItem(les);
tasks.addItem(kat);

console.log(tasks.getList());