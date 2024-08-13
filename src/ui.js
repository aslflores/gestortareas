import { getTask } from "./task";

// Funcióm para ,mostrarle al usuario las tareas 
export const renderTasks =() =>{
const tasksList=document.getElementById ("task-list" );
tasksList.innerHTML= '';
const tasks = getTask();

tasks.forEach((task) => {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    //Añadir clase  solo si la tarea esta completada*/
    if(task.completed === true ){
        li.classList.add("completed");
    }

    li.innerHTML =`
      ${task.text}
<button class="delete"> eliminar</button>
<button class="toggle">${ task.completed === false ? "completar": "deshacer"} </button>
    `;

    tasksList.appendChild(li);
});
};

