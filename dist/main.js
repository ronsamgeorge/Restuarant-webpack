/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactContent)
/* harmony export */ });
function contactContent(){
    console.log("printing from inside contactContent");

    if(document.contains(document.getElementById('content-info-div'))){
        document.getElementById('content-info-div').remove();
    }
    
    
    const contactContent = document.createElement("div");
    contactContent.textContent = "Contact us at";
    contactContent.id = 'content-info-div'

    document.body.appendChild(contactContent);
    return;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeContent)
/* harmony export */ });


function homeContent(){

    //checks if content available on the page, if yes it removes it and updates content
    if(document.contains(document.getElementById('content-info-div'))){
        document.getElementById('content-info-div').remove();
    }
    
    
    const homeContent = document.createElement("div");
    homeContent.textContent = "Welcome to the home of Summer Salt";
    homeContent.id = 'content-info-div'

    document.body.appendChild(homeContent);
    return;

}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuContent)
/* harmony export */ });
function menuContent(){
    if(document.contains(document.getElementById('content-info-div'))){
        document.getElementById('content-info-div').remove();
    }
    
    
    const menuContent = document.createElement("div");
    menuContent.textContent = "Check out our menu";
    menuContent.id = 'content-info-div'

    document.body.appendChild(menuContent);
    return;
}

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





//initialize the intro page, HOME PAGE will open by default
const initializeHome = () =>{

    const contentDiv = document.getElementById('content');
    const mainHeader = document.createElement('h1');
    mainHeader.textContent = "SummerSalt Bakery";
    contentDiv.appendChild(mainHeader);

    const tabElementDiv = createTabMenu();
    contentDiv.appendChild(tabElementDiv);
    return;

}

function createTabMenu(){
    const tabElementDiv = document.createElement('div');
    tabElementDiv.id = 'tabs-div';

    //Create the element for the three tab sections 
    const homeTab = createTabElement('home-div', 'HOME');
    const menuTab = createTabElement('menu-div','MENU');
    const contactTab = createTabElement('contact-div', 'CONTACT US');

    //adds the 
    tabElementDiv.appendChild(homeTab);
    tabElementDiv.appendChild(menuTab);
    tabElementDiv.appendChild(contactTab);

    return tabElementDiv;
}


function createTabElement(idName, content){
    const tab = document.createElement('div');
    tab.id = idName;
    tab.textContent = content;
    tab.classList.add("tab-element");

    return tab;
}

function updateCurrentTab(newSelectedId){
    console.log("update current tab");

    console.log(currentTabId);
    document.getElementById(currentTabId).classList.remove('tab-selected');
    document.getElementById(newSelectedId).classList.add('tab-selected');
    currentTabId = newSelectedId;
    console.log(currentTabId);
    return;

    // remove .tab-selected class from the previous selected tab 
    // add .tab-selected class to new selected id.
}

let currentTabId = "home-div";
initializeHome();


const homeBtn = document.querySelector('#home-div');
homeBtn.addEventListener('click',() => {
    updateCurrentTab("home-div")
    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

const menuBtn = document.querySelector('#menu-div');
menuBtn.addEventListener('click',() =>{
    updateCurrentTab("menu-div")
    ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

const contactBtn = document.querySelector('#contact-div');
contactBtn.addEventListener('click',()=>{
    updateCurrentTab("contact-div")
    ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNqQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0M7QUFDTTs7O0FBRzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVc7QUFDZixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVc7QUFDZixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWM7QUFDbEIsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVhcmFudC13ZWJwYWNrLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC13ZWJwYWNrLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC13ZWJwYWNrLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1YXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RDb250ZW50KCl7XG4gICAgY29uc29sZS5sb2coXCJwcmludGluZyBmcm9tIGluc2lkZSBjb250YWN0Q29udGVudFwiKTtcblxuICAgIGlmKGRvY3VtZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWluZm8tZGl2JykpKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtaW5mby1kaXYnKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RDb250ZW50LnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzIGF0XCI7XG4gICAgY29udGFjdENvbnRlbnQuaWQgPSAnY29udGVudC1pbmZvLWRpdidcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpO1xuICAgIHJldHVybjtcbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUNvbnRlbnQoKXtcblxuICAgIC8vY2hlY2tzIGlmIGNvbnRlbnQgYXZhaWxhYmxlIG9uIHRoZSBwYWdlLCBpZiB5ZXMgaXQgcmVtb3ZlcyBpdCBhbmQgdXBkYXRlcyBjb250ZW50XG4gICAgaWYoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtaW5mby1kaXYnKSkpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1pbmZvLWRpdicpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZUNvbnRlbnQudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gdGhlIGhvbWUgb2YgU3VtbWVyIFNhbHRcIjtcbiAgICBob21lQ29udGVudC5pZCA9ICdjb250ZW50LWluZm8tZGl2J1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XG4gICAgcmV0dXJuO1xuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUNvbnRlbnQoKXtcbiAgICBpZihkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1pbmZvLWRpdicpKSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWluZm8tZGl2JykucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q29udGVudC50ZXh0Q29udGVudCA9IFwiQ2hlY2sgb3V0IG91ciBtZW51XCI7XG4gICAgbWVudUNvbnRlbnQuaWQgPSAnY29udGVudC1pbmZvLWRpdidcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuICAgIHJldHVybjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBob21lQ29udGVudCBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgbWVudUNvbnRlbnQgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0Q29udGVudCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5cbi8vaW5pdGlhbGl6ZSB0aGUgaW50cm8gcGFnZSwgSE9NRSBQQUdFIHdpbGwgb3BlbiBieSBkZWZhdWx0XG5jb25zdCBpbml0aWFsaXplSG9tZSA9ICgpID0+e1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9IFwiU3VtbWVyU2FsdCBCYWtlcnlcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuXG4gICAgY29uc3QgdGFiRWxlbWVudERpdiA9IGNyZWF0ZVRhYk1lbnUoKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhYkVsZW1lbnREaXYpO1xuICAgIHJldHVybjtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWJNZW51KCl7XG4gICAgY29uc3QgdGFiRWxlbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYkVsZW1lbnREaXYuaWQgPSAndGFicy1kaXYnO1xuXG4gICAgLy9DcmVhdGUgdGhlIGVsZW1lbnQgZm9yIHRoZSB0aHJlZSB0YWIgc2VjdGlvbnMgXG4gICAgY29uc3QgaG9tZVRhYiA9IGNyZWF0ZVRhYkVsZW1lbnQoJ2hvbWUtZGl2JywgJ0hPTUUnKTtcbiAgICBjb25zdCBtZW51VGFiID0gY3JlYXRlVGFiRWxlbWVudCgnbWVudS1kaXYnLCdNRU5VJyk7XG4gICAgY29uc3QgY29udGFjdFRhYiA9IGNyZWF0ZVRhYkVsZW1lbnQoJ2NvbnRhY3QtZGl2JywgJ0NPTlRBQ1QgVVMnKTtcblxuICAgIC8vYWRkcyB0aGUgXG4gICAgdGFiRWxlbWVudERpdi5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICB0YWJFbGVtZW50RGl2LmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICAgIHRhYkVsZW1lbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cbiAgICByZXR1cm4gdGFiRWxlbWVudERpdjtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVUYWJFbGVtZW50KGlkTmFtZSwgY29udGVudCl7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFiLmlkID0gaWROYW1lO1xuICAgIHRhYi50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWItZWxlbWVudFwiKTtcblxuICAgIHJldHVybiB0YWI7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRUYWIobmV3U2VsZWN0ZWRJZCl7XG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGUgY3VycmVudCB0YWJcIik7XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFiSWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRUYWJJZCkuY2xhc3NMaXN0LnJlbW92ZSgndGFiLXNlbGVjdGVkJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3U2VsZWN0ZWRJZCkuY2xhc3NMaXN0LmFkZCgndGFiLXNlbGVjdGVkJyk7XG4gICAgY3VycmVudFRhYklkID0gbmV3U2VsZWN0ZWRJZDtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFiSWQpO1xuICAgIHJldHVybjtcblxuICAgIC8vIHJlbW92ZSAudGFiLXNlbGVjdGVkIGNsYXNzIGZyb20gdGhlIHByZXZpb3VzIHNlbGVjdGVkIHRhYiBcbiAgICAvLyBhZGQgLnRhYi1zZWxlY3RlZCBjbGFzcyB0byBuZXcgc2VsZWN0ZWQgaWQuXG59XG5cbmxldCBjdXJyZW50VGFiSWQgPSBcImhvbWUtZGl2XCI7XG5pbml0aWFsaXplSG9tZSgpO1xuXG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1kaXYnKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICB1cGRhdGVDdXJyZW50VGFiKFwiaG9tZS1kaXZcIilcbiAgICBob21lQ29udGVudCgpO1xufSk7XG5cbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1kaXYnKTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+e1xuICAgIHVwZGF0ZUN1cnJlbnRUYWIoXCJtZW51LWRpdlwiKVxuICAgIG1lbnVDb250ZW50KCk7XG59KTtcblxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0LWRpdicpO1xuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICB1cGRhdGVDdXJyZW50VGFiKFwiY29udGFjdC1kaXZcIilcbiAgICBjb250YWN0Q29udGVudCgpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9