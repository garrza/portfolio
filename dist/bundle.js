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

/***/ "./src/functions/utility/ToggleModule.js":
/*!***********************************************!*\
  !*** ./src/functions/utility/ToggleModule.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToggleModule: () => (/* binding */ ToggleModule),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ToggleModule = {\n  calculateSettingAsThemeString: function calculateSettingAsThemeString(_ref) {\n    var localStorageTheme = _ref.localStorageTheme,\n      systemSettingDark = _ref.systemSettingDark;\n    if (localStorageTheme !== null) {\n      return localStorageTheme;\n    }\n    if (systemSettingDark.matches) {\n      return \"dark\";\n    }\n    return \"light\";\n  },\n  updateButton: function updateButton(_ref2) {\n    var buttonEl = _ref2.buttonEl,\n      isDark = _ref2.isDark;\n    var newCta = isDark ? \"Change to light theme\" : \"Change to dark theme\";\n    buttonEl.setAttribute(\"aria-label\", newCta);\n    buttonEl.innerText = newCta;\n  },\n  updateThemeOnHtmlEl: function updateThemeOnHtmlEl(_ref3) {\n    var theme = _ref3.theme;\n    document.querySelector(\"html\").setAttribute(\"data-theme\", theme);\n  },\n  initThemeToggle: function initThemeToggle() {\n    var button = document.querySelector(\"[data-theme-toggle]\");\n    var localStorageTheme = localStorage.getItem(\"theme\");\n    var systemSettingDark = window.matchMedia(\"(prefers-color-scheme: dark)\");\n    var currentThemeSetting = ToggleModule.calculateSettingAsThemeString({\n      localStorageTheme: localStorageTheme,\n      systemSettingDark: systemSettingDark\n    });\n    ToggleModule.updateButton({\n      buttonEl: button,\n      isDark: currentThemeSetting === \"dark\"\n    });\n    ToggleModule.updateThemeOnHtmlEl({\n      theme: currentThemeSetting\n    });\n    button.addEventListener(\"click\", function (event) {\n      var newTheme = currentThemeSetting === \"dark\" ? \"light\" : \"dark\";\n      localStorage.setItem(\"theme\", newTheme);\n      ToggleModule.updateButton({\n        buttonEl: button,\n        isDark: newTheme === \"dark\"\n      });\n      ToggleModule.updateThemeOnHtmlEl({\n        theme: newTheme\n      });\n      currentThemeSetting = newTheme;\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleModule);\n\n//# sourceURL=webpack://portfolio/./src/functions/utility/ToggleModule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_utility_ToggleModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/utility/ToggleModule */ \"./src/functions/utility/ToggleModule.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n_functions_utility_ToggleModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initThemeToggle();\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/styles.css?");

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