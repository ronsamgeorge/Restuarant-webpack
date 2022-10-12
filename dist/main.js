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
    
    //checks if content available on the page, if yes it removes it and updates content
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

    //checks if content available on the page, if yes it removes it and updates content
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
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    updateCurrentTab(currentTabId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWmU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDakJlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNDO0FBQ007OztBQUcxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9EQUFXO0FBQ2Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFXO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFXO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFjO0FBQ2xCLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtd2VicGFjay8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtd2VicGFjay8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtd2VicGFjay8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1YXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQtd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0Q29udGVudCgpe1xuICAgIGNvbnNvbGUubG9nKFwicHJpbnRpbmcgZnJvbSBpbnNpZGUgY29udGFjdENvbnRlbnRcIik7XG4gICAgXG4gICAgLy9jaGVja3MgaWYgY29udGVudCBhdmFpbGFibGUgb24gdGhlIHBhZ2UsIGlmIHllcyBpdCByZW1vdmVzIGl0IGFuZCB1cGRhdGVzIGNvbnRlbnRcbiAgICBpZihkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1pbmZvLWRpdicpKSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWluZm8tZGl2JykucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0Q29udGVudC50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1cyBhdFwiO1xuICAgIGNvbnRhY3RDb250ZW50LmlkID0gJ2NvbnRlbnQtaW5mby1kaXYnXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KTtcbiAgICByZXR1cm47XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVDb250ZW50KCl7XG5cbiAgICAvL2NoZWNrcyBpZiBjb250ZW50IGF2YWlsYWJsZSBvbiB0aGUgcGFnZSwgaWYgeWVzIGl0IHJlbW92ZXMgaXQgYW5kIHVwZGF0ZXMgY29udGVudFxuICAgIGlmKGRvY3VtZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWluZm8tZGl2JykpKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtaW5mby1kaXYnKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVDb250ZW50LnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIHRoZSBob21lIG9mIFN1bW1lciBTYWx0XCI7XG4gICAgaG9tZUNvbnRlbnQuaWQgPSAnY29udGVudC1pbmZvLWRpdidcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xuICAgIHJldHVybjtcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVDb250ZW50KCl7XG5cbiAgICAvL2NoZWNrcyBpZiBjb250ZW50IGF2YWlsYWJsZSBvbiB0aGUgcGFnZSwgaWYgeWVzIGl0IHJlbW92ZXMgaXQgYW5kIHVwZGF0ZXMgY29udGVudFxuICAgIGlmKGRvY3VtZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWluZm8tZGl2JykpKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtaW5mby1kaXYnKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDb250ZW50LnRleHRDb250ZW50ID0gXCJDaGVjayBvdXQgb3VyIG1lbnVcIjtcbiAgICBtZW51Q29udGVudC5pZCA9ICdjb250ZW50LWluZm8tZGl2J1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7XG4gICAgcmV0dXJuO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWVDb250ZW50IGZyb20gJy4vaG9tZS5qcydcbmltcG9ydCBtZW51Q29udGVudCBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3RDb250ZW50IGZyb20gJy4vY29udGFjdC5qcyc7XG5cblxuLy9pbml0aWFsaXplIHRoZSBpbnRybyBwYWdlLCBIT01FIFBBR0Ugd2lsbCBvcGVuIGJ5IGRlZmF1bHRcbmNvbnN0IGluaXRpYWxpemVIb21lID0gKCkgPT57XG5cbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJTdW1tZXJTYWx0IEJha2VyeVwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG5cbiAgICBjb25zdCB0YWJFbGVtZW50RGl2ID0gY3JlYXRlVGFiTWVudSgpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFiRWxlbWVudERpdik7XG4gICAgaG9tZUNvbnRlbnQoKTtcbiAgICB1cGRhdGVDdXJyZW50VGFiKGN1cnJlbnRUYWJJZCk7XG4gICAgcmV0dXJuO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYk1lbnUoKXtcbiAgICBjb25zdCB0YWJFbGVtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFiRWxlbWVudERpdi5pZCA9ICd0YWJzLWRpdic7XG5cbiAgICAvL0NyZWF0ZSB0aGUgZWxlbWVudCBmb3IgdGhlIHRocmVlIHRhYiBzZWN0aW9ucyBcbiAgICBjb25zdCBob21lVGFiID0gY3JlYXRlVGFiRWxlbWVudCgnaG9tZS1kaXYnLCAnSE9NRScpO1xuICAgIGNvbnN0IG1lbnVUYWIgPSBjcmVhdGVUYWJFbGVtZW50KCdtZW51LWRpdicsJ01FTlUnKTtcbiAgICBjb25zdCBjb250YWN0VGFiID0gY3JlYXRlVGFiRWxlbWVudCgnY29udGFjdC1kaXYnLCAnQ09OVEFDVCBVUycpO1xuXG4gICAgLy9hZGRzIHRoZSBcbiAgICB0YWJFbGVtZW50RGl2LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICAgIHRhYkVsZW1lbnREaXYuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gICAgdGFiRWxlbWVudERpdi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICAgIHJldHVybiB0YWJFbGVtZW50RGl2O1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYkVsZW1lbnQoaWROYW1lLCBjb250ZW50KXtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWIuaWQgPSBpZE5hbWU7XG4gICAgdGFiLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICB0YWIuY2xhc3NMaXN0LmFkZChcInRhYi1lbGVtZW50XCIpO1xuXG4gICAgcmV0dXJuIHRhYjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudFRhYihuZXdTZWxlY3RlZElkKXtcbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBjdXJyZW50IHRhYlwiKTtcblxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYWJJZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudFRhYklkKS5jbGFzc0xpc3QucmVtb3ZlKCd0YWItc2VsZWN0ZWQnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdTZWxlY3RlZElkKS5jbGFzc0xpc3QuYWRkKCd0YWItc2VsZWN0ZWQnKTtcbiAgICBjdXJyZW50VGFiSWQgPSBuZXdTZWxlY3RlZElkO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYWJJZCk7XG4gICAgcmV0dXJuO1xuXG4gICAgLy8gcmVtb3ZlIC50YWItc2VsZWN0ZWQgY2xhc3MgZnJvbSB0aGUgcHJldmlvdXMgc2VsZWN0ZWQgdGFiIFxuICAgIC8vIGFkZCAudGFiLXNlbGVjdGVkIGNsYXNzIHRvIG5ldyBzZWxlY3RlZCBpZC5cbn1cblxubGV0IGN1cnJlbnRUYWJJZCA9IFwiaG9tZS1kaXZcIjtcbmluaXRpYWxpemVIb21lKCk7XG5cblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWRpdicpO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgIHVwZGF0ZUN1cnJlbnRUYWIoXCJob21lLWRpdlwiKVxuICAgIGhvbWVDb250ZW50KCk7XG59KTtcblxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWRpdicpO1xubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT57XG4gICAgdXBkYXRlQ3VycmVudFRhYihcIm1lbnUtZGl2XCIpXG4gICAgbWVudUNvbnRlbnQoKTtcbn0pO1xuXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QtZGl2Jyk7XG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIHVwZGF0ZUN1cnJlbnRUYWIoXCJjb250YWN0LWRpdlwiKVxuICAgIGNvbnRhY3RDb250ZW50KCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=