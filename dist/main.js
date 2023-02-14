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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"outputProjectTasks\": () => (/* binding */ outputProjectTasks),\n/* harmony export */   \"outputTask\": () => (/* binding */ outputTask)\n/* harmony export */ });\nfunction outputTask (task) {\n    console.log(\n        `title: ${task.title}, description: ${task.description}, due date: ${task.duedate}, priority: ${task.priority}, done?: ${task.checkIfTaskDone()}`\n    );\n}\n\nfunction outputProjectTasks (project) {\n    console.log(`outputting all tasks in project: ${project.name}`);\n\n    const projectTasks = project.getAllTasks()\n    for (const taskName in projectTasks) {\n        let task = projectTasks[taskName];\n        outputTask(task);\n    };\n}\n\n\n\n//# sourceURL=webpack://odin-todolist/./src/domstuff.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storagestuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storagestuff */ \"./src/storagestuff.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domstuff */ \"./src/domstuff.js\");\n\n\n\n\nfunction main() {\n    const main_container = document.createElement('div');\n    let defaultProject = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.projectFactory)('default');\n    let current_project = _storagestuff__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.getCurrentProjectObject();\n    // console.log(current_project);\n    // console.log(getCurrentProject());\n\n    let task1 = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.taskFactory)('title 1', 'some description 1', new Date(2023, 4, 16), 'low');\n    let task2 = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.taskFactory)('title 2', 'some description 2', new Date(2023, 5, 16), 'high');\n    let task3 = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.taskFactory)('title 3', 'some description 3', new Date(2023, 5, 16), 'high');\n    // outputTask(task);\n\n    // defaultProject.addTask(task1);\n    // // defaultProject.addTask(task2);\n    // current_project.addTask(task2);\n    // defaultProject.addTask(task3);\n    (0,_domstuff__WEBPACK_IMPORTED_MODULE_2__.outputProjectTasks)(defaultProject);\n\n    console.log('after deleting a task');\n    (0,_storagestuff__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(task1.title);\n    current_project.editTask(task2.title ,'edited title 2', 'new and improved description 2', new Date(2023, 5, 16), 'high')\n    // outputProjectTasks(defaultProject);\n\n    console.log(current_project.getAllTasks())\n    // console.log(projectsContainer.getAllProjects());\n    return main_container;\n}\n\ndocument.body.appendChild(main());\n\n//# sourceURL=webpack://odin-todolist/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory),\n/* harmony export */   \"taskFactory\": () => (/* binding */ taskFactory)\n/* harmony export */ });\n/* harmony import */ var _storagestuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storagestuff */ \"./src/storagestuff.js\");\n\n\nfunction task (arg_title, arg_description, arg_duedate, arg_priority) {\n    let finished = false;\n    let title = arg_title;\n    let description = arg_description;\n    let duedate = arg_duedate;\n    let priority = arg_priority;\n\n    const done = () => {\n        finished = true;\n        return finished;\n    };\n    const checkIfTaskDone = () => {\n        return finished;\n    };\n\n    return {\n        title, description, duedate, priority, checkIfTaskDone, done,\n    };\n}\n\nfunction taskFactory (title, description, duedate, priority) {\n    if (typeof(title) === \"string\" && typeof(description) === \"string\" && typeof(priority) === \"string\" && typeof(duedate) === \"object\") {\n        let newTask = task(title, description, duedate, priority);\n        // storeTask(newTask);\n        _storagestuff__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.getCurrentProjectObject().addTask(newTask);\n\n        return newTask;\n    }\n    \n    console.error('Wrong argument types! make sure title, description and priority are strings and duedate a Date object');\n    return null;\n}\n\nfunction project (name) {\n    let tasks = {};\n    const addTask = (task) => {\n        tasks[task.title] = task;\n    }\n    const deleteTask = (taskTitle) => {\n        delete tasks[taskTitle];\n    }\n    const getTask = (taskTitle) => {\n        return tasks[taskTitle];\n    }\n    const editTask = (title, newTitle, newDescription, newDuedate, newPriority) => {\n        let newTask = taskFactory(newTitle, newDescription, newDuedate, newPriority);\n        tasks[newTitle] = newTask;\n        delete tasks[title];\n    }\n    const getAllTasks = () => {\n        return tasks;\n    }\n\n    return {\n        name, addTask, getTask, getAllTasks, deleteTask, editTask,\n    }\n}\n\nfunction projectFactory (name) {\n    let newProject = project(name);\n    _storagestuff__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.addProject(newProject);\n    (0,_storagestuff__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(newProject.name)\n    return newProject;\n}\n\n\n\n//# sourceURL=webpack://odin-todolist/./src/todo.js?");

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