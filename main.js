/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domstuff.js":
/*!*************************!*\
  !*** ./src/domstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewTaskForm\": () => (/* binding */ createNewTaskForm),\n/* harmony export */   \"createTaskContainer\": () => (/* binding */ createTaskContainer),\n/* harmony export */   \"outputProjectTasks\": () => (/* binding */ outputProjectTasks),\n/* harmony export */   \"outputTask\": () => (/* binding */ outputTask)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _storagestuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storagestuff */ \"./src/storagestuff.js\");\n\n\n\nfunction createTaskContainer (task) {\n    let container = document.createElement('div');\n\n    let title = document.createElement('div');\n    title.className = 'task-title';\n    title.innerText = `${task.title}`;\n\n    let description = document.createElement('div');\n    description.className = 'task-description';\n    description.innerText = `${task.description}`;\n\n    let duedate = document.createElement('div');\n    duedate.className = 'task-duedate';\n    duedate.innerText = `${task.duedate}`;\n\n    let priority = document.createElement('div');\n    priority.className = 'task-priority';\n    priority.innerText = `${task.priority}`;\n    // title, description, due date and priority\n\n    let deleteBtn = document.createElement('button');\n    deleteBtn.innerText = 'Delete';\n    deleteBtn.addEventListener('click', () => {\n        (0,_storagestuff__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(task.title);\n        outputProjectTasks(_storagestuff__WEBPACK_IMPORTED_MODULE_1__.projectsContainer.getCurrentProjectObject());\n    });\n\n    container.appendChild(title);\n    container.appendChild(description);\n    container.appendChild(duedate);\n    container.appendChild(priority);\n    container.appendChild(deleteBtn);\n    \n    return container;\n}\n\nfunction createNewTaskForm () {\n    let container = document.createElement('div');\n    container.className = 'new-task-form';\n\n    let titleField = document.createElement('input');\n    titleField.className = 'task-form-title-field';\n\n    let descriptionField = document.createElement('input');\n    descriptionField.className = 'task-form-description-field';\n\n    let duedateField = document.createElement('input');\n    duedateField.setAttribute('type', 'date');\n    duedateField.className = 'task-form-duedate-field';\n\n    let priorityField = document.createElement('select');\n    priorityField.className = 'task-form-priority-field';\n\n    let priority1 = document.createElement('option');\n    priority1.innerText = 'High';\n    let priority2 = document.createElement('option');\n    priority2.innerText = 'Moderate';\n    let priority3 = document.createElement('option');\n    priority3.innerText = 'Low';\n    priorityField.appendChild(priority1);\n    priorityField.appendChild(priority2);\n    priorityField.appendChild(priority3);\n\n    let submitBtn = document.createElement('button');\n    submitBtn.innerText = 'create';\n    submitBtn.addEventListener('click', () => {\n        let newTask = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.taskFactory)(titleField.value, descriptionField.value, duedateField.value, priorityField.value);\n        outputProjectTasks(_storagestuff__WEBPACK_IMPORTED_MODULE_1__.projectsContainer.getCurrentProjectObject());\n    });\n\n    container.appendChild(titleField);\n    container.appendChild(descriptionField);\n    container.appendChild(duedateField);\n    container.appendChild(priorityField);\n    container.appendChild(submitBtn);\n\n    return container;\n}\n\nfunction outputTask (task) {\n    console.log(\n        `title: ${task.title}, description: ${task.description}, due date: ${task.duedate}, priority: ${task.priority}, done?: ${task.checkIfTaskDone()}`\n    );\n    let taskContainer = createTaskContainer(task);\n    document.querySelector('#tasks-container').appendChild(taskContainer);\n}\n\nfunction outputProjectTasks (project) {\n    console.log(`outputting all tasks in project: ${project.name}`);\n    \n    document.querySelector('#tasks-container').innerHTML = '';\n    const projectTasks = project.getAllTasks()\n    for (const taskName in projectTasks) {\n        let task = projectTasks[taskName];\n        outputTask(task);\n    };\n}\n\n\n\n//# sourceURL=webpack://odin-todolist/./src/domstuff.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storagestuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storagestuff */ \"./src/storagestuff.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domstuff */ \"./src/domstuff.js\");\n\n\n\n\nfunction main() {\n    const main_container = document.createElement('div');\n    main_container.id = 'main';\n\n    const tasksContainer = document.createElement('div');\n    tasksContainer.id = 'tasks-container';\n\n    // let project1 = projectFactory('project1');\n    let defaultProject = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.projectFactory)('default');\n    let current_project = _storagestuff__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.getCurrentProjectObject();\n\n    let taskform = (0,_domstuff__WEBPACK_IMPORTED_MODULE_2__.createNewTaskForm)();\n\n    // let task1 = taskFactory('title 1', 'some description 1', new Date(2023, 4, 16), 'low');\n    // let task1DOM = createTaskContainer(task1);\n    // main_container.appendChild(task1DOM);\n \n    // outputProjectTasks(current_project);\n\n    main_container.appendChild(taskform);\n    main_container.appendChild(tasksContainer);\n\n    return main_container;\n}\n\ndocument.body.appendChild(main());\n\n//# sourceURL=webpack://odin-todolist/./src/index.js?");

/***/ }),

/***/ "./src/storagestuff.js":
/*!*****************************!*\
  !*** ./src/storagestuff.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"getCurrentProject\": () => (/* binding */ getCurrentProject),\n/* harmony export */   \"projectsContainer\": () => (/* binding */ projectsContainer),\n/* harmony export */   \"retrieveTask\": () => (/* binding */ retrieveTask),\n/* harmony export */   \"setCurrentProject\": () => (/* binding */ setCurrentProject),\n/* harmony export */   \"storeTask\": () => (/* binding */ storeTask)\n/* harmony export */ });\nlet projectsContainer = (() => {\n    let projects = {};\n    const addProject = (project) => {\n        projects[project.name] = project;\n    }\n    const getProject = (projectTitle) => {\n        return projects[projectTitle];\n    }\n    const getAllProjects = () => {\n        return projects;\n    }\n    const getCurrentProjectObject = () => {\n        return projects[getCurrentProject()];\n    }\n\n    return {projects, addProject, getProject, getAllProjects, getCurrentProjectObject}\n})();\n\nfunction storeTask(task) {\n    // localStorage.setItem(task.title, JSON.stringify(task));\n    projectsContainer.getCurrentProjectObject().addTask(task);\n}\n\nfunction retrieveTask(taskTitle) {\n    // return JSON.parse(localStorage.getItem(taskTitle));\n    return projectsContainer.getCurrentProjectObject().getTask(taskTitle);\n}\n\nfunction deleteTask(taskTitle) {\n    return projectsContainer.getCurrentProjectObject().deleteTask(taskTitle);\n}\n\nfunction setCurrentProject(projectTitle) {\n    localStorage.setItem('currentProject', projectTitle);\n}\n\nfunction getCurrentProject() {\n    return localStorage.getItem('currentProject');\n}\n\n\n\n//# sourceURL=webpack://odin-todolist/./src/storagestuff.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory),\n/* harmony export */   \"taskFactory\": () => (/* binding */ taskFactory)\n/* harmony export */ });\n/* harmony import */ var _storagestuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storagestuff */ \"./src/storagestuff.js\");\n\n\nfunction task (arg_title, arg_description, arg_duedate, arg_priority) {\n    let finished = false;\n    let title = arg_title;\n    let description = arg_description;\n    let duedate = arg_duedate;\n    let priority = arg_priority;\n\n    const done = () => {\n        finished = true;\n        return finished;\n    };\n    const checkIfTaskDone = () => {\n        return finished;\n    };\n\n    return {\n        title, description, duedate, priority, checkIfTaskDone, done,\n    };\n}\n\nfunction taskFactory (title, description, duedate, priority, projectName) {\n    // if (typeof(title) === \"string\" && typeof(description) === \"string\" && typeof(priority) === \"string\" && typeof(duedate) === \"object\") {\n        let newTask = task(title, description, duedate, priority);\n        // storeTask(newTask);\n        if (projectName === undefined) {\n            _storagestuff__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.getCurrentProjectObject().addTask(newTask);\n        } else {\n            _storagestuff__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.getProject(projectName).addTask(newTask);\n        }\n\n        return newTask;\n    // }\n    \n    // console.error('Wrong argument types! make sure title, description and priority are strings and duedate a Date object');\n    // return null;\n}\n\nfunction project (name) {\n    let tasks = {};\n    const addTask = (task) => {\n        tasks[task.title] = task;\n    }\n    const deleteTask = (taskTitle) => {\n        delete tasks[taskTitle];\n    }\n    const getTask = (taskTitle) => {\n        return tasks[taskTitle];\n    }\n    const editTask = (title, newTitle, newDescription, newDuedate, newPriority) => {\n        let newTask = taskFactory(newTitle, newDescription, newDuedate, newPriority);\n        tasks[newTitle] = newTask;\n        delete tasks[title];\n    }\n    const getAllTasks = () => {\n        return tasks;\n    }\n\n    return {\n        name, addTask, getTask, getAllTasks, deleteTask, editTask,\n    }\n}\n\nfunction projectFactory (name) {\n    let newProject = project(name);\n    _storagestuff__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.addProject(newProject);\n    (0,_storagestuff__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(newProject.name)\n    return newProject;\n}\n\n\n\n//# sourceURL=webpack://odin-todolist/./src/todo.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;