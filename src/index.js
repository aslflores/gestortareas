import { renderTasks} from"./ui";
import { addtask, deleteTask, toggleTask } from "./task";

document.addEventListener("DOMContentLoaded", () =>{
renderTasks();

document.getElementById("task-form" ).addEventListener("submit", (e) =>{
e.preventDefault();

const taskInput = document.getElementById("task-input").value;

if(taskInput !=="") {
    addtask(taskInput);
    renderTasks();
    // Limpiar el valor del imput
    document.getElementById("task-input").value = "";
}
});

document.getElementById("task-list").addEventListener("click", (e) =>{
    console.log("entra aqui")
    if(e.target.classList.contains("delete")){
        console.log("entra delete")
        const taskId = e.target.parentElement.getAttribute("data-id");
        deleteTask(taskId);
        renderTasks();
    }

    if(e.target.classList.contains("toggle")) {
        const taskId = e.target.parentElement.getAttribute("data-id");
        toggleTask(taskId);
        renderTasks();
    }
});
});