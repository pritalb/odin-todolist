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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n:root {\\n    --background-color: #f0f0f0;\\n    --foreground-color: #04030F;\\n    --accent-color: #f2542d;\\n}\\n\\n#main {\\n    display: flex;\\n    flex-direction: row;\\n    width: 100vw;\\n    height: 100vh;\\n    padding-right: 20px;\\n    background-color: var(--background-color);\\n}\\n\\n.sidebar {\\n    width: 18vw;\\n    display: flex;\\n    flex-direction: column;\\n    padding-left: 2vw;\\n    padding-top: 20px;\\n    /* padding-right: 20px; */\\n    background-color: var(--foreground-color);\\n    color: var(--background-color);\\n}\\n\\n.content-section {\\n    padding-top: 20px;\\n}\\n\\n.sitename {\\n    color: var(--accent-color);\\n    font-size: 32px;\\n    font-weight: bolder;\\n}\\n\\n.project-form {\\n    display: flex;\\n    flex-direction: column;\\n    margin-top: 30px;\\n    padding-right: 2vw;\\n    gap: 1vh;\\n}\\n\\n.project-form-name-field {\\n    /* width: max(15vw, 140px); */\\n    height: max(3vh, 16px);\\n    padding-left: 10px;\\n    font-size: 1rem;\\n    background-color: transparent;\\n    color: var(--background-color);\\n    border-style: solid;\\n}\\n\\n.project-form-create-button {\\n    width: max(6vw, 75px);\\n    height: max(3vh, 16px);\\n    background-color: transparent;\\n    border-style: solid;\\n    color: var(--background-color);\\n    align-self: flex-end;\\n}\\n\\n.projects-tab-projects-section {\\n    display: flex;\\n    flex-direction: column;\\n    margin-top: 5vh;\\n    gap: 1vh;\\n}\\n\\n.projects-tab-projects-section-heading {\\n    font-size: 1.75rem;\\n    margin-bottom: 1vh;\\n}\\n\\n.projects-tab-projects-container {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.5vh;\\n    font-size: 1.25rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todolist/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todolist/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domstuff.js":
/*!*************************!*\
  !*** ./src/domstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMainDOMContainer\": () => (/* binding */ createMainDOMContainer),\n/* harmony export */   \"outputProjectTasks\": () => (/* binding */ outputProjectTasks),\n/* harmony export */   \"showProjectsInProjectsTab\": () => (/* binding */ showProjectsInProjectsTab)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _storagestuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storagestuff */ \"./src/storagestuff.js\");\n\n\n\nfunction createTaskContainer (task) {\n    let container = document.createElement('div');\n\n    let title = document.createElement('div');\n    title.className = 'task-title';\n    title.innerText = `${task.title}`;\n\n    let description = document.createElement('div');\n    description.className = 'task-description';\n    description.innerText = `${task.description}`;\n\n    let duedate = document.createElement('div');\n    duedate.className = 'task-duedate';\n    duedate.innerText = `${task.duedate}`;\n\n    let priority = document.createElement('div');\n    priority.className = 'task-priority';\n    priority.innerText = `${task.priority}`;\n    // title, description, due date and priority\n\n    let deleteBtn = document.createElement('button');\n    deleteBtn.innerText = 'Delete';\n    deleteBtn.addEventListener('click', () => {\n        (0,_storagestuff__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(task.title);\n        outputProjectTasks(_storagestuff__WEBPACK_IMPORTED_MODULE_1__.projectsContainer.getCurrentProjectObject());\n    });\n\n    container.appendChild(title);\n    container.appendChild(description);\n    container.appendChild(duedate);\n    container.appendChild(priority);\n    container.appendChild(deleteBtn);\n    \n    return container;\n}\n\nfunction createNewTaskForm () {\n    let container = document.createElement('div');\n    container.className = 'new-task-form';\n    \n    let titleLabel = document.createElement('div');\n    titleLabel.innerText = 'Title:';\n    let titleField = document.createElement('input');\n    titleField.className = 'task-form-title-field';\n\n    let descriptionLabel = document.createElement('div');\n    descriptionLabel.innerText = 'Description:';\n    let descriptionField = document.createElement('input');\n    descriptionField.className = 'task-form-description-field';\n\n    let duedateLabel = document.createElement('div');\n    duedateLabel.innerText = 'Due Date:';\n    let duedateField = document.createElement('input');\n    duedateField.setAttribute('type', 'date');\n    duedateField.className = 'task-form-duedate-field';\n\n    let priorityLabel = document.createElement('div');\n    priorityLabel.innerText = 'Priority:';\n    let priorityField = document.createElement('select');\n    priorityField.className = 'task-form-priority-field';\n\n    let priority1 = document.createElement('option');\n    priority1.innerText = 'High';\n    let priority2 = document.createElement('option');\n    priority2.innerText = 'Moderate';\n    let priority3 = document.createElement('option');\n    priority3.innerText = 'Low';\n    priorityField.appendChild(priority1);\n    priorityField.appendChild(priority2);\n    priorityField.appendChild(priority3);\n\n    let submitBtn = document.createElement('button');\n    submitBtn.innerText = 'create';\n    submitBtn.addEventListener('click', () => {\n        let newTask = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.taskFactory)(titleField.value, descriptionField.value, duedateField.value, priorityField.value);\n        outputProjectTasks(_storagestuff__WEBPACK_IMPORTED_MODULE_1__.projectsContainer.getCurrentProjectObject());\n    });\n\n    let titleFieldContainer = document.createElement('div');\n    titleFieldContainer.appendChild(titleLabel);\n    titleFieldContainer.appendChild(titleField);\n\n    let descriptionFieldContainer = document.createElement('div');\n    descriptionFieldContainer.appendChild(descriptionLabel);\n    descriptionFieldContainer.appendChild(descriptionField);\n\n    let duedateFieldContainer = document.createElement('div');\n    duedateFieldContainer.appendChild(duedateLabel);\n    duedateFieldContainer.appendChild(duedateField);\n\n    let priorityFieldContainer = document.createElement('div');\n    priorityFieldContainer.appendChild(priorityLabel);\n    priorityFieldContainer.appendChild(priorityField);\n\n    container.appendChild(titleFieldContainer);\n    container.appendChild(descriptionFieldContainer);\n    container.appendChild(duedateFieldContainer);\n    container.appendChild(priorityFieldContainer);\n    container.appendChild(submitBtn);\n\n    return container;\n}\n\nfunction createProjectForm () {\n    let container = document.createElement('div');\n    container.className = 'project-form';\n\n    let projectNameField = document.createElement('input');\n    projectNameField.className = 'project-form-name-field';\n\n    let projectNameLabel = document.createElement('div');\n    projectNameLabel.innerText = 'New Project Name:';\n    projectNameLabel.className = 'project-form-name-label';\n\n    let projectCreateBtn = document.createElement('button');\n    projectCreateBtn.className = 'project-form-create-button';\n    projectCreateBtn.innerText = 'Create';\n    projectCreateBtn.addEventListener('click', () => {\n        let newProject = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(projectNameField.value);\n        showProjectsInProjectsTab();\n        outputProjectTasks(newProject);\n    })\n\n    container.appendChild(projectNameLabel);\n    container.appendChild(projectNameField);\n    container.appendChild(projectCreateBtn);\n\n    return container;\n}\n\nfunction createProjectsTab () {\n    let container = document.createElement('div');\n    container.className = 'projects-tab';\n\n    const projectForm = createProjectForm();\n    container.appendChild(projectForm);\n\n    const projectsSection = document.createElement('div');\n    projectsSection.className = 'projects-tab-projects-section';\n\n    const projectsSectionHeading = document.createElement('div');\n    projectsSectionHeading.className = 'projects-tab-projects-section-heading';\n    projectsSectionHeading.innerText = 'Projects';\n\n    const projectsContainer_DOM = document.createElement('div');\n    projectsContainer_DOM.className = 'projects-tab-projects-container';\n    \n    projectsSection.appendChild(projectsSectionHeading);\n    projectsSection.appendChild(projectsContainer_DOM);\n    container.appendChild(projectForm);\n    container.appendChild(projectsSection);\n\n    return container;\n}\n\nfunction outputTask (task) {\n    console.log(\n        `title: ${task.title}, description: ${task.description}, due date: ${task.duedate}, priority: ${task.priority}, done?: ${task.checkIfTaskDone()}`\n    );\n    let taskContainer = createTaskContainer(task);\n    document.querySelector('#tasks-container').appendChild(taskContainer);\n}\n\nfunction outputProjectTasks (project) {\n    console.log(`outputting all tasks in project: ${project.name}`);\n    \n    document.querySelector('.current-project-name').innerText = `${(0,_storagestuff__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)()}`;\n    document.querySelector('#tasks-container').innerHTML = '';\n    const projectTasks = project.getAllTasks()\n    for (const taskName in projectTasks) {\n        let task = projectTasks[taskName];\n        outputTask(task);\n    };\n}\n\nfunction showProjectsInProjectsTab () {\n    let projectsContainer_DOM = document.querySelector('.projects-tab-projects-container');\n    projectsContainer_DOM.innerHTML = '';\n\n    let allProjects = _storagestuff__WEBPACK_IMPORTED_MODULE_1__.projectsContainer.getAllProjects();\n\n    for (let project in allProjects) {\n        const projectDiv = document.createElement('div');\n        projectDiv.innerText = `${project}`;\n\n        projectDiv.addEventListener('click', () => {\n            (0,_storagestuff__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)(project);\n            outputProjectTasks(_storagestuff__WEBPACK_IMPORTED_MODULE_1__.projectsContainer.getProject(project));\n        })\n\n        projectsContainer_DOM.appendChild(projectDiv);\n    }\n}\n\nfunction createSidebar () {\n    const container = document.createElement('div');\n    const SiteName = document.createElement('div');\n    const projectsTab = createProjectsTab();\n\n    container.className = 'sidebar';\n    SiteName.className = 'sitename';\n\n    SiteName.innerText = 'ToDo App';\n    \n    container.appendChild(SiteName);\n    container.appendChild(projectsTab);\n    return container;\n}\n\nfunction createContentArea () {\n    const container = document.createElement('div');\n    container.className = 'content-section'\n\n    const currentProjectName = document.createElement('div');\n    currentProjectName.className = 'current-project-name';\n\n    const tasksContainer = document.createElement('div');\n    tasksContainer.id = 'tasks-container';\n    \n    const taskform = createNewTaskForm();\n\n    container.appendChild(currentProjectName);\n    container.appendChild(taskform);\n    container.appendChild(tasksContainer);\n\n    return container;\n}\n\nfunction createMainDOMContainer () {\n    const main_container = document.createElement('div');\n    main_container.id = 'main';\n\n    const sidebar = createSidebar();\n    const content = createContentArea();\n\n    main_container.appendChild(sidebar);\n    main_container.appendChild(content);\n\n    return main_container;\n}\n\n\n\n//# sourceURL=webpack://odin-todolist/./src/domstuff.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storagestuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storagestuff */ \"./src/storagestuff.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domstuff */ \"./src/domstuff.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\nfunction main() {\n    document.addEventListener('DOMContentLoaded', () => {\n        const defaultProject = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.projectFactory)('Default');\n        const tempTask = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.taskFactory)('Task title', 'This is some task description', '2023/12/12', 'High');\n        (0,_domstuff__WEBPACK_IMPORTED_MODULE_2__.showProjectsInProjectsTab)();\n        (0,_domstuff__WEBPACK_IMPORTED_MODULE_2__.outputProjectTasks)(_storagestuff__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.getCurrentProjectObject());\n    })\n    const main_container = (0,_domstuff__WEBPACK_IMPORTED_MODULE_2__.createMainDOMContainer)();\n        \n    return main_container;\n}\n\ndocument.body.appendChild(main());\n\n//# sourceURL=webpack://odin-todolist/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory),\n/* harmony export */   \"taskFactory\": () => (/* binding */ taskFactory)\n/* harmony export */ });\n/* harmony import */ var _storagestuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storagestuff */ \"./src/storagestuff.js\");\n/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domstuff */ \"./src/domstuff.js\");\n\n\n\nfunction task (arg_title, arg_description, arg_duedate, arg_priority) {\n    let finished = false;\n    let title = arg_title;\n    let description = arg_description;\n    let duedate = arg_duedate;\n    let priority = arg_priority;\n\n    const done = () => {\n        finished = true;\n        return finished;\n    };\n    const checkIfTaskDone = () => {\n        return finished;\n    };\n\n    return {\n        title, description, duedate, priority, checkIfTaskDone, done,\n    };\n}\n\nfunction taskFactory (title, description, duedate, priority, projectName) {\n    // if (typeof(title) === \"string\" && typeof(description) === \"string\" && typeof(priority) === \"string\" && typeof(duedate) === \"object\") {\n        let newTask = task(title, description, duedate, priority);\n        // storeTask(newTask);\n        if (projectName === undefined) {\n            _storagestuff__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.getCurrentProjectObject().addTask(newTask);\n        } else {\n            _storagestuff__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.getProject(projectName).addTask(newTask);\n        }\n\n        return newTask;\n    // }\n    \n    // console.error('Wrong argument types! make sure title, description and priority are strings and duedate a Date object');\n    // return null;\n}\n\nfunction project (name) {\n    let tasks = {};\n    const addTask = (task) => {\n        tasks[task.title] = task;\n    }\n    const deleteTask = (taskTitle) => {\n        delete tasks[taskTitle];\n    }\n    const getTask = (taskTitle) => {\n        return tasks[taskTitle];\n    }\n    const editTask = (title, newTitle, newDescription, newDuedate, newPriority) => {\n        let newTask = taskFactory(newTitle, newDescription, newDuedate, newPriority);\n        tasks[newTitle] = newTask;\n        delete tasks[title];\n    }\n    const getAllTasks = () => {\n        return tasks;\n    }\n\n    return {\n        name, addTask, getTask, getAllTasks, deleteTask, editTask,\n    }\n}\n\nfunction projectFactory (name) {\n    let newProject = project(name);\n    _storagestuff__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.addProject(newProject);\n    (0,_storagestuff__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(newProject.name);\n    (0,_domstuff__WEBPACK_IMPORTED_MODULE_1__.outputProjectTasks)(newProject);\n    \n    return newProject;\n}\n\n\n\n//# sourceURL=webpack://odin-todolist/./src/todo.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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