//Obtener la lista de tareas del almacenamaiento del navegador "localstorage"
let tasks =JSON.parse(localStorage.getItem('tasks')) || [];

//Funcion  para poder llevar las tareas de la lista 
export const getTask = ()=> tasks;

// Función para agregar una tarea a la lista de tareas 
export const addtask = ( task)=>{
    const newtask ={
        id:Date.now(),
        text:task,
        completed:false,
    };
    tasks.push(newtask);
    localStorage.setItem("tasks", JSON.stringify (tasks));
};

// Funcion para eliminar una tarea de la lista 
export const deleteTask =(id) =>{
    console.log("entra a funcion delete")
    console.log("id, ", id)
    console.log("tasks antes, ", tasks)
tasks= tasks.filter((task) => task.id !== parseInt(id));
console.log("tasks, despues,  ", tasks)
localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Función para actualizar una tarea de la lista
export const toggleTask = (id)=>{
tasks =tasks.map ((task) =>{
if (task.id === parseInt(id)) {
    task.completed = !task.completed;
}
return task ;
});
localStorage.setItem("tasks",JSON .stringify(tasks));
};