/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("var inputEl = document.querySelector(\"input\");\nvar buttonEl = document.querySelector(\"button\");\nvar timerEl = document.querySelector(\"span\");\nvar interval;\nvar defaultTimerElValue = \"hh:mm:ss - enter number of seconds\";\ntimerEl.textContent = defaultTimerElValue;\n\n// Напишите реализацию createTimerAnimator\n// который будет анимировать timerEl\nvar parseStr = function parseStr(number) {\n  return number <= 9 ? \"0\".concat(number) : \"\".concat(number);\n};\nvar createTimerAnimator = function createTimerAnimator() {\n  return function (seconds) {\n    return setInterval(function () {\n      var hrs = parseStr(Math.floor(seconds / 3600));\n      var min = parseStr(Math.floor((seconds - hrs * 3600) / 60));\n      var sec = parseStr(seconds % 60);\n      timerEl.textContent = \"\".concat(hrs, \":\").concat(min, \":\").concat(sec, \" - timer started\");\n      seconds--;\n      if (seconds < 0) {\n        clearInterval(interval);\n        timerEl.textContent = \"\".concat(hrs, \":\").concat(min, \":\").concat(sec, \" - timer stopped\");\n      }\n    }, 999);\n  };\n};\nvar animateTimer = createTimerAnimator();\ninputEl.removeEventListener(\"input\", onChangeInput);\ninputEl.addEventListener(\"input\", onChangeInput);\nfunction onChangeInput() {\n  // Очистите input так, чтобы в значении\n  // оставались только числа\n  inputEl.value = inputEl.value.replace(/[^0-9.]/g, \"\");\n}\nbuttonEl.removeEventListener(\"click\", startTimer);\nbuttonEl.addEventListener(\"click\", startTimer);\nfunction startTimer() {\n  clearInterval(interval);\n  var seconds = Number(inputEl.value);\n  seconds !== 0 ? interval = animateTimer(seconds) : timerEl.textContent = defaultTimerElValue;\n  inputEl.value = \"\";\n}\n\n//# sourceURL=webpack://timer/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;