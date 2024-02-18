/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extra modules/about.js":
/*!************************************!*\
  !*** ./src/extra modules/about.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutPg: () => (/* binding */ aboutPg)
/* harmony export */ });
function aboutPg() {
  var content = document.querySelector("#content");
  content.innerHTML = '';
  var menuTitle = document.createElement('h1');
  content.appendChild(menuTitle);
  menuTitle.textContent = "Contact us";
  var articleOne = document.createElement('p');
  content.appendChild(articleOne);
  articleOne.textContent = "At Urban Bites, we're more than just a restaurant – we're a culinary experience. Nestled in the heart of the city, our cozy yet vibrant space welcomes guests to indulge in a fusion of flavors from around the world.";
  var iframe = document.createElement('iframe');
  iframe.setAttribute('id', 'map');
  iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6159.572460581201!2d-79.38687309608002!3d43.65126715809759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sco!4v1707443919432!5m2!1sen!2sco';
  content.appendChild(iframe);
}

/***/ }),

/***/ "./src/extra modules/home.js":
/*!***********************************!*\
  !*** ./src/extra modules/home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePg: () => (/* binding */ homePg)
/* harmony export */ });
function homePg() {
  var content = document.querySelector("#content");
  content.innerHTML = "";
  var menuTitle = document.createElement('h1');
  content.appendChild(menuTitle);
  menuTitle.textContent = "Urban Bites";
  var articleOne = document.createElement('p');
  content.appendChild(articleOne);
  articleOne.textContent = "Urban Bites draws its inspiration from the vibrant energy of city life, where diverse cultures, flavors, and experiences converge. The name 'Urban Bites' reflects the dynamic fusion of urban living with culinary delights. It's a place where people can come together to savor the flavors of the city, whether it's a quick bite on the go or a leisurely meal shared with friends. The concept celebrates the hustle and bustle of urban living while offering a culinary journey that tantalizes the taste buds and leaves a lasting impression.";
}

/***/ }),

/***/ "./src/extra modules/menu.js":
/*!***********************************!*\
  !*** ./src/extra modules/menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPg: () => (/* binding */ menuPg)
/* harmony export */ });
function menuPg() {
  var content = document.querySelector("#content");
  content.innerHTML = "";
  var menuTitle = document.createElement('h1');
  content.appendChild(menuTitle);
  menuTitle.textContent = "Menu";
  var articleOne = document.createElement('p');
  content.appendChild(articleOne);
  articleOne.textContent = "Our menu is a culinary masterpiece, carefully crafted to tantalize your taste buds and satisfy your cravings. From the moment you take your first bite of our crispy calamari, you'll be transported to a realm of unparalleled flavor and delight.";
  function menuItem(imgBox, textBox, srcText, nutrText, itemName, nutrValue, img, imgText, price, priceTxt, imgHeader) {
    imgBox = document.createElement('div');
    imgBox.setAttribute('class', 'menuBox');
    textBox = document.createElement('div');
    textBox.setAttribute('class', 'textBox');
    nutrValue = document.createElement('div');
    nutrValue.setAttribute('class', 'nutrValue');
    img = document.createElement('img');
    img.setAttribute('class', 'size');
    img.src = srcText;
    imgText = document.createElement('p');
    imgText.textContent = nutrText;
    price = document.createElement('p');
    price.textContent = priceTxt;
    price.setAttribute('class', 'priceTag');
    imgHeader = document.createElement('h1');
    imgHeader.textContent = itemName;
    imgBox.addEventListener('mouseover', function () {
      nutrValue.classList.add('nutriVisibile');
    });
    imgBox.addEventListener('mouseleave', function () {
      nutrValue.classList.remove('nutriVisibile');
    });
    content.appendChild(imgBox);
    imgBox.appendChild(img);
    imgBox.appendChild(nutrValue);
    imgBox.appendChild(textBox);
    imgBox.appendChild(price);
    textBox.appendChild(imgHeader);
    nutrValue.appendChild(imgText);
  }
  //burger
  var srcText1 = "./src/assets/food/burger.png";
  var nutrText1 = "Calories: 895 , Carbs: 52g, Fat: 60g , Protein: 38g";
  var itemName1 = "Max burger";
  var priceTxt1 = '$10';
  var imgBox1, textBox1, nutrValue1, img1, imgText1, price1, imgHeader1;
  menuItem(imgBox1, textBox1, srcText1, nutrText1, itemName1, nutrValue1, img1, imgText1, price1, priceTxt1, imgHeader1);

  //French Fries

  var srcText2 = "./src/assets/food/Hotdog.png";
  var nutrText2 = "Calories: 186 , Carbs: 2g, Fat: 17 g , Protein: 7g";
  var itemName2 = "Hotdog";
  var priceTxt2 = '$5';
  var imgBox2, textBox2, nutrValue2, img2, imgText2, price2, imgHeader2;
  menuItem(imgBox2, textBox2, srcText2, nutrText2, itemName2, nutrValue2, img2, imgText2, price2, priceTxt2, imgHeader2);

  //Hotdog
  var srcText3 = "./src/assets/food/French_Fries.png";
  var nutrText3 = "Calories: 413 , Carbs: 56.1g, Fat: 19.6g , Protein: 5.7g";
  var itemName3 = "French Fries";
  var priceTxt3 = '$11';
  var imgBox3, textBox3, nutrValue3, img3, imgText3, price3, imgHeader3;
  menuItem(imgBox3, textBox3, srcText3, nutrText3, itemName3, nutrValue3, img3, imgText3, price3, priceTxt3, imgHeader3);

  //Nuggets
  var srcText4 = "./src/assets/food/Nuggets.png";
  var nutrText4 = "Calories: 417 , Carbs: 25g, Fat: 27g , Protein: 19g";
  var itemName4 = "Nuggets";
  var priceTxt4 = '$15';
  var imgBox4, textBox4, nutrValue4, img4, imgText4, price4, imgHeader4;
  menuItem(imgBox4, textBox4, srcText4, nutrText4, itemName4, nutrValue4, img4, imgText4, price4, priceTxt4, imgHeader4);

  //Mexicana
  var srcText5 = "./src/assets/food/pizza.png";
  var nutrText5 = "Calories: 1839 , Carbs: 111g, Fat: 105g , Protein: 111g";
  var itemName5 = "Mexicana";
  var priceTxt5 = '$40';
  var imgBox5, textBox5, nutrValue5, img5, imgText5, price5, imgHeader5;
  menuItem(imgBox5, textBox5, srcText5, nutrText5, itemName5, nutrValue5, img5, imgText5, price5, priceTxt5, imgHeader5);

  //Taco
  var srcText6 = "./src/assets/food/taco.png";
  var nutrText6 = "Calories: 210 , Carbs: 21g, Fat: 9.9g , Protein: 9.4g";
  var itemName6 = "Taco";
  var priceTxt6 = '$5';
  var imgBox6, textBox6, nutrValue6, img6, imgText6, price6, imgHeader6;
  menuItem(imgBox6, textBox6, srcText6, nutrText6, itemName6, nutrValue6, img6, imgText6, price6, priceTxt6, imgHeader6);
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _extra_modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extra modules/home */ "./src/extra modules/home.js");
/* harmony import */ var _extra_modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extra modules/menu */ "./src/extra modules/menu.js");
/* harmony import */ var _extra_modules_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extra modules/about */ "./src/extra modules/about.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");




var homePage = document.querySelector('#homeBtn');
var menuPage = document.querySelector('#menuBtn');
var aboutPage = document.querySelector('#aboutBtn');
(0,_extra_modules_home__WEBPACK_IMPORTED_MODULE_0__.homePg)();

//add home elements
homePage.addEventListener('click', function () {
  console.log('clicked');
  (0,_extra_modules_home__WEBPACK_IMPORTED_MODULE_0__.homePg)();
});

//fix adding menu elemets every time the button is clicked
menuPage.addEventListener('click', function () {
  console.log('clicked');
  (0,_extra_modules_menu__WEBPACK_IMPORTED_MODULE_1__.menuPg)();
});

//add about elements

aboutPage.addEventListener('click', function () {
  console.log('clicked');
  (0,_extra_modules_about__WEBPACK_IMPORTED_MODULE_2__.aboutPg)();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle98cabdd77da1aa37fff8.js.map