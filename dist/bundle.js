/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addtask: () => (/* binding */ addtask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   getTask: () => (/* binding */ getTask),
/* harmony export */   toggleTask: () => (/* binding */ toggleTask)
/* harmony export */ });
//Obtener la lista de tareas del almacenamaiento del navegador "localstorage"
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Funcion  para poder llevar las tareas de la lista 
var getTask = function getTask() {
  return tasks;
};

// Función para agregar una tarea a la lista de tareas 
var addtask = function addtask(task) {
  var newtask = {
    id: Date.now(),
    text: task,
    completed: false
  };
  tasks.push(newtask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Funcion para eliminar una tarea de la lista 
var deleteTask = function deleteTask(id) {
  console.log("entra a funcion delete");
  console.log("id, ", id);
  console.log("tasks antes, ", tasks);
  tasks = tasks.filter(function (task) {
    return task.id !== parseInt(id);
  });
  console.log("tasks, despues,  ", tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Función para actualizar una tarea de la lista
var toggleTask = function toggleTask(id) {
  tasks = tasks.map(function (task) {
    if (task.id === parseInt(id)) {
      task.completed = !task.completed;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


// Funcióm para ,mostrarle al usuario las tareas 
var renderTasks = function renderTasks() {
  var tasksList = document.getElementById("task-list");
  tasksList.innerHTML = '';
  var tasks = (0,_task__WEBPACK_IMPORTED_MODULE_0__.getTask)();
  tasks.forEach(function (task) {
    var li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    //Añadir clase  solo si la tarea esta completada*/
    if (task.completed === true) {
      li.classList.add("completed");
    }
    li.innerHTML = "\n      ".concat(task.text, "\n<button class=\"delete\"> eliminar</button>\n<button class=\"toggle\">").concat(task.completed === false ? "completar" : "deshacer", " </button>\n    ");
    tasksList.appendChild(li);
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");


document.addEventListener("DOMContentLoaded", function () {
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
  document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var taskInput = document.getElementById("task-input").value;
    if (taskInput !== "") {
      (0,_task__WEBPACK_IMPORTED_MODULE_1__.addtask)(taskInput);
      (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
      // Limpiar el valor del imput
      document.getElementById("task-input").value = "";
    }
  });
  document.getElementById("task-list").addEventListener("click", function (e) {
    console.log("entra aqui");
    if (e.target.classList.contains("delete")) {
      console.log("entra delete");
      var taskId = e.target.parentElement.getAttribute("data-id");
      (0,_task__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(taskId);
      (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
    }
    if (e.target.classList.contains("toggle")) {
      var _taskId = e.target.parentElement.getAttribute("data-id");
      (0,_task__WEBPACK_IMPORTED_MODULE_1__.toggleTask)(_taskId);
      (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
    }
  });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map