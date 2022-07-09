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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navbarTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navbarTabs */ \"./src/modules/navbarTabs.js\");\n/* harmony import */ var _modules_getCurrentFollowers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getCurrentFollowers */ \"./src/modules/getCurrentFollowers.js\");\n/* harmony import */ var _modules_notMutFollows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/notMutFollows */ \"./src/modules/notMutFollows.js\");\n/* harmony import */ var _modules_deletedUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/deletedUsers */ \"./src/modules/deletedUsers.js\");\n\n\n\n\n(0,_modules_navbarTabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_getCurrentFollowers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_notMutFollows__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_deletedUsers__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://server/./src/main.js?");

/***/ }),

/***/ "./src/modules/deletedUsers.js":
/*!*************************************!*\
  !*** ./src/modules/deletedUsers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar deletedOutput = document.querySelector('#deleted-accounts'); //Удалённые аккаунты\n\nvar getDeletedUsers = function getDeletedUsers() {\n  fetch('db/deleted.json').then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    deletedOutput.value = data.deleted.length;\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDeletedUsers);\n\n//# sourceURL=webpack://server/./src/modules/deletedUsers.js?");

/***/ }),

/***/ "./src/modules/getCurrentFollowers.js":
/*!********************************************!*\
  !*** ./src/modules/getCurrentFollowers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Поле вывода текущего количества подписчиков\nvar followersNumberOutput = document.querySelector('#current-followers'); //Текущее количество подписчиков\n\nvar getCurrentFollowers = function getCurrentFollowers() {\n  fetch('db/currentFollowers.json').then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    followersNumberOutput.value = data.currentFollowers.length;\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentFollowers);\n\n//# sourceURL=webpack://server/./src/modules/getCurrentFollowers.js?");

/***/ }),

/***/ "./src/modules/navbarTabs.js":
/*!***********************************!*\
  !*** ./src/modules/navbarTabs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar navbarTabs = function navbarTabs() {\n  /*Выбор всех переключателей меню*/\n  var tabItems = Array.from(document.querySelectorAll('.sidebar-list__item'));\n  /*Выбор всех панелей меню*/\n\n  var contentItems = Array.from(document.querySelectorAll('.dashboard-item'));\n\n  var clearActiveClass = function clearActiveClass(element) {\n    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'is-active';\n    element.find(function (item) {\n      return item.classList.remove(\"\".concat(className));\n    });\n  };\n\n  var setActiveClass = function setActiveClass(element, index) {\n    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is-active';\n    element[index].classList.add(\"\".concat(className));\n  };\n\n  var checkoutTabs = function checkoutTabs(item, index) {\n    item.addEventListener('click', function () {\n      if (item.classList.contains('is-active')) return;\n      clearActiveClass(tabItems);\n      clearActiveClass(contentItems);\n      setActiveClass(tabItems, index);\n      setActiveClass(contentItems, index);\n    });\n  };\n\n  tabItems.forEach(checkoutTabs);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbarTabs);\n\n//# sourceURL=webpack://server/./src/modules/navbarTabs.js?");

/***/ }),

/***/ "./src/modules/notMutFollows.js":
/*!**************************************!*\
  !*** ./src/modules/notMutFollows.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Поиск аккаунтов без взаимной подписки\nvar notMutFollowsSearch = function notMutFollowsSearch() {\n  // let notMutFollows = [];\n  // follows.forEach( function (element) {\n  //     if ( !~followersCurrent.indexOf(element) ) notMutFollows.push(element)\n  // });\n  // console.log('Без взаимной подписки: ' + notMutFollows.length + ' аккаунты: ' + notMutFollows);\n  fetch('db/follows.json').then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    console.log();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notMutFollowsSearch);\n\n//# sourceURL=webpack://server/./src/modules/notMutFollows.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;