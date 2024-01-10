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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/progress.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/progress.css ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.progress {\n  background-color: #d8d8d8;\n  border-radius: 20px;\n  position: relative;\n  margin: 15px 0;\n  height: 30px;\n  width: 90%;\n}\n\n.progress-done {\n  background: linear-gradient(to left, #16e0bd, #15ab91);\n  box-shadow: 0 3px 3px -5px #16e0bd, 0 2px 5px #15ab91;\n  border-radius: 20px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 0;\n  opacity: 0;\n  transition: 1s ease 0.3s;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/styles/progress.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/queries.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/queries.css ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --ff-primary: \"Source Sans Pro\", sans-serif;\n  --ff-secondary: \"Source Code Pro\", monospace;\n\n  --fw-reg: 300;\n  --fw-bold: 900;\n\n  --clr-light: #fff;\n  --clr-dark: #303030;\n  --clr-medium-dark: #494848;\n  --clr-accent: #16e0bd;\n\n  --fs-h1: 3rem;\n  --fs-h2: 2.25rem;\n  --fs-h3: 1.25rem;\n  --fs-body: 1rem;\n\n  --bs: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),\n    0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);\n}\n\n@media (min-width: 800px) {\n  :root {\n    --fs-h1: 4.5rem;\n    --fs-h2: 3.75rem;\n    --fs-h3: 1.5rem;\n    --fs-body: 1.125rem;\n  }\n\n  .service {\n    width: 33%;\n  }\n}\n\n@media (min-width: 600px) {\n  .about-me {\n    display: grid;\n    grid-template-columns: 1fr 325px;\n    grid-template-areas:\n      \"title img\"\n      \"subtitle img\"\n      \"text img\";\n    grid-column-gap: 2em;\n  }\n  .about-me__img {\n    grid-area: img;\n    position: relative;\n    z-index: 2;\n  }\n}\n\n\n@media (min-width: 769px) {\n\n  .section__title--about {\n    grid-area: title;\n  }\n\n  .section__subtitle--about {\n    grid-column: 1 / -1;\n    grid-row: 2;\n    position: relative;\n    left: -1em;\n    width: calc(100% + 2em);\n    padding-left: 1em;\n    padding-right: calc(200px + 4em);\n  }\n\n\n\n  .intro_text_area {\n    display: grid;\n    width: -moz-min-content;\n    width: min-content;\n    margin: 0 auto;\n    grid-column-gap: 1em;\n    grid-template-areas:\n      \"img title\"\n      \"img subtitle\";\n    grid-template-columns: min-content max-content;\n  }\n\n  .intro__img {\n    grid-area: img;\n    min-width: 490px;\n    position: relative;\n  }\n\n  .section__subtitle--intro {\n    align-self: start;\n    grid-column: -1 / 1;\n    grid-row: 2;\n    position: relative;\n    width: calc(100% + 1.5em);\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  .service > h3{\n    text-align: left;\n  }\n\n  .service {\n    margin-bottom: 50px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .card {\n    width: 25%;\n  }\n\n  .portfolio {\n    width: 100%;\n  }\n\n  .logo {\n    color: #303030;\n    color: var(--clr-dark);\n  }\n\n  header {\n    background-color: #fff;\n    background-color: var(--clr-light);\n    display: block;\n    position: relative;\n  }\n\n\n  .intro {\n    flex-direction: column;\n    background-color: #fff;\n    background-color: var(--clr-light);\n    color: #303030;\n    color: var(--clr-dark);\n    padding: 1em 2em 5em 2em;\n  }\n\n  .intro__img {\n    height: auto;\n    box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),\n    0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);\n    box-shadow: var(--bs);\n    max-width: 100%;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .card {\n    width: 39%;\n  }\n}\n\n@media (min-width: 800px) {\n  .services {\n    display: flex;\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .service + .service {\n    margin-left: 2em;\n  }\n}\n\n@media (max-width: 1100px) {\n  .into_bar {\n    display: none;\n  }\n}\n\n\n@media only screen and (max-width: 380px) {\n  .intro_text_area {\n    align-self: start;\n  }\n}\n\n@media only screen and (min-width: 380px) {\n  .intro_text_area {\n    align-self: center;\n  }\n}\n\n@media only screen and (max-height: 715px) and (orientation: landscape)  {\n  .intro__img {\n    min-width: 260px;\n  }\n\n}\n\n@media only screen and (max-height: 560px) and (max-width: 768px) and (orientation: landscape)  {\n  .intro__img {\n    display: none;\n  }\n\n}\n\n@media only screen and (max-width: 420px) {\n  .content > p{\n    font-size: 0.7rem;\n  }\n  .content > h3{\n    font-size: 0.9rem;\n  }\n\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/styles/queries.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/style.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/style.css ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/programming.jpg */ \"./src/images/programming.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Custom Properties, update these for your own design */\n\n:root {\n  --ff-primary: \"Source Sans Pro\", sans-serif;\n  --ff-secondary: \"Source Code Pro\", monospace;\n\n  --fw-reg: 300;\n  --fw-bold: 900;\n\n  --clr-light: #fff;\n  --clr-dark: #303030;\n  --clr-medium-dark: #494848;\n  --clr-accent: #16e0bd;\n\n  --fs-h1: 3.5rem;\n  --fs-h2: 2.25rem;\n  --fs-h3: 1.25rem;\n  --fs-body: 1rem;\n\n  --bs: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),\n    0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);\n}\n\nhtml {\n    scroll-behavior: smooth;\n}\n\nbody {\n  background: #fff;\n  background: var(--clr-light);\n  color: #303030;\n  color: var(--clr-dark);\n  margin: 0;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-family: var(--ff-primary);\n  font-size: 1rem;\n  font-size: var(--fs-body);\n  line-height: 1.6;\n}\n\nsection {\n  padding: 5em 2em;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n}\n\nstrong {\n  font-weight: 900;\n  font-weight: var(--fw-bold);\n}\n\n:focus {\n  outline: 3px solid #16e0bd;\n  outline: 3px solid var(--clr-accent);\n  outline-offset: 3px;\n}\n\n/* Buttons */\n\n.btn {\n  display: inline-block;\n  padding: 0.5em 2.5em;\n  background: #16e0bd;\n  background: var(--clr-accent);\n  color: #303030;\n  color: var(--clr-dark);\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-weight: 900;\n  font-weight: var(--fw-bold);\n  transition: transform 200ms ease-in-out;\n}\n\n.btn:hover {\n  transform: scale(1.1);\n}\n\n/* Typography */\n\nh1,\nh2,\nh3 {\n  line-height: 1;\n  margin: 0;\n}\n\nh1 {\n  font-size: 3.5rem;\n  font-size: var(--fs-h1);\n}\nh2 {\n  font-size: 2.25rem;\n  font-size: var(--fs-h2);\n}\nh3 {\n  font-size: 1.25rem;\n  font-size: var(--fs-h3);\n}\n\n.section__title {\n  margin-bottom: 0.25em;\n}\n\n.section__title--intro {\n  font-weight: 300;\n  font-weight: var(--fw-reg);\n}\n\n.section__title--intro strong {\n  display: block;\n}\n\n.section__subtitle {\n  margin: 0;\n  font-size: 1.25rem;\n  font-size: var(--fs-h3);\n}\n\n.section__subtitle--intro,\n.section__subtitle--about {\n  background: #16e0bd;\n  background: var(--clr-accent);\n  padding: 0.25em 1em;\n  font-family: \"Source Code Pro\", monospace;\n  font-family: var(--ff-secondary);\n}\n\n.section__subtitle--work {\n  color: #16e0bd;\n  color: var(--clr-accent);\n  font-weight: 900;\n  font-weight: var(--fw-bold);\n  margin-bottom: 2em;\n}\n\n/* header */\n\nheader {\n  display: block;\n  justify-content: space-between;\n  padding: 1em;\n  position: absolute;\n  width: 100%;\n  z-index: 99999;\n  top: 0;\n}\n\n.logo {\n  max-width: 190px;\n  font-family: Monaco, Lucida Console, monospace;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  color: #16e0bd;\n  color: var(--clr-accent);\n}\n\n.nav {\n  position: fixed;\n  background: #303030;\n  background: var(--clr-dark);\n  color: #fff;\n  color: var(--clr-light);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n\n  transform: translateX(100%);\n  transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);\n}\n\n.nav__list {\n  list-style: none;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n}\n\n.nav__link {\n  color: inherit;\n  font-weight: 900;\n  font-weight: var(--fw-bold);\n  font-size: 2.25rem;\n  font-size: var(--fs-h2);\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\n.nav__link:hover {\n  color: #16e0bd;\n  color: var(--clr-accent);\n}\n\n.nav-toggle {\n  padding: 0.5em;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  z-index: 1000;\n}\n\n.nav-open .nav {\n  transform: translateX(0);\n}\n\n.nav-open .nav-toggle {\n  position: fixed;\n}\n\n.nav-open .hamburger {\n  transform: rotate(0.625turn);\n}\n\n.nav-open .hamburger::before {\n  transform: rotate(90deg) translateX(-6px);\n}\n\n.nav-open .hamburger::after {\n  opacity: 0;\n}\n\n.hamburger {\n  display: block;\n  position: relative;\n}\n\n.hamburger,\n.hamburger::before,\n.hamburger::after {\n  background: #16e0bd;\n  background: var(--clr-accent);\n  width: 2em;\n  height: 3px;\n  border-radius: 1em;\n  transition: transform 250ms ease-in-out;\n}\n\n.hamburger::before,\n.hamburger::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.hamburger::before {\n  top: 6px;\n}\n.hamburger::after {\n  bottom: 6px;\n}\n\n/*  Intro section  */\n\n.intro {\n  display: flex;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  background-color: rgb(1, 95, 95);\n  color: #fff;\n  color: var(--clr-light);\n  padding: 0;\n}\n.intro_img_area {\n  height: 100%;\n  min-width: 315px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.intro__img {\n  box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),\n    0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);\n  box-shadow: var(--bs);\n}\n\n.intro_first_bar {\n  background-color: #16e0bd;\n  background-color: var(--clr-accent);\n}\n\n.intro_second_bar {\n  background-color: rgb(1, 128, 128);\n}\n\n.into_bar {\n  width: 8%;\n  min-width: 55px;\n  height: 120%;\n  display: -webkit-inline-box;\n  transform: rotate3d(1, 1, 1, -9deg);\n  transform-origin: left top;\n  z-index: 1;\n}\n\n.section__subtitle--intro {\n  display: inline-block;\n  margin-bottom: 1em;\n\n}\n\n/*  My services section  */\n\n.my-services {\n  background-color: #303030;\n  background-color: var(--clr-dark);\n  background-image: linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)),url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  color: #fff;\n  color: var(--clr-light);\n  text-align: center;\n}\n\n.section__title--services {\n  color: #16e0bd;\n  color: var(--clr-accent);\n  position: relative;\n}\n\n.section__title--services::after {\n  content: \"\";\n  display: block;\n  width: 2em;\n  height: 1px;\n  margin: 0.5em auto 1em;\n  background: #16e0bd;\n  background: var(--clr-accent);\n  opacity: 0.25;\n}\n\n.services {\n  margin-bottom: 4em;\n}\n\n.service {\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n.service > p{\n  text-align: justify;\n}\n\n.about-me {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.about-me__img {\n  box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),\n    0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);\n  box-shadow: var(--bs);\n}\n\n/* My Work */\n\n.my-work {\n  background-color: #303030;\n  background-color: var(--clr-dark);\n  color: #fff;\n  color: var(--clr-light);\n  text-align: center;\n  padding: 5em 0em;\n}\n\n.portfolio {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  width: 40%;\n  margin: 0 auto;\n}\n\n.portfolio__item {\n  background: #16e0bd;\n  background: var(--clr-accent);\n  overflow: hidden;\n}\n\n.portfolio__img {\n  transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1), opacity 250ms linear;\n}\n\n.portfolio__item:focus {\n  position: relative;\n  z-index: 2;\n}\n\n.portfolio__img:hover,\n.portfolio__item:focus .portfolio__img {\n  transform: scale(1.2);\n  opacity: 0.5;\n}\n\n/* footer */\n\n.footer {\n  background: #111;\n  color: #16e0bd;\n  color: var(--clr-accent);\n  text-align: center;\n  padding: 2.5em 0;\n  font-size: 1.25rem;\n  font-size: var(--fs-h3);\n}\n\n.footer a {\n  color: inherit;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\n.footer__link {\n  font-weight: 900;\n  font-weight: var(--fw-bold);\n}\n\n.footer__link:hover,\n.social-list__link:hover {\n  opacity: 0.7;\n}\n\n.footer__link:hover {\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n}\n\n.social-list {\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  margin: 2em 0 0;\n  padding: 0;\n}\n\n.social-list__item {\n  margin: 0 0.5em;\n}\n\n.social-list__link {\n  padding: 0.5em;\n}\n\n\n\n/* skills */\n.skill-section {\n  margin: 0 auto;\n  text-align: center;\n}\n.skills {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card {\n  border-radius: 2px;\n  display: inline-block;\n  margin: 1rem;\n  position: relative;\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n\n.parallax {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-blend-mode: multiply;\n}\n\n/* timeline */\n\n\n.container {\n  padding-bottom: 150px;\n  margin: 0 auto;\n  max-width: 800px;\n}\n.top-section {\n  text-align: center;\n  padding: 4rem 0;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.top-section > p{\n  word-wrap: break-word;\n}\n\n.timeline{\n  position: relative;\n  min-height: 150px;\n}\n\n.line{\n  position: absolute;\n  z-index: 2;\n  left: calc(50% + 7px);\n  width: 2px;\n  top: -50px;\n  bottom: -50px;\n  background-color: black;\n  display: none;\n}\n\n.line:before,\n.line:after{\n  position: absolute;\n  display: block;\n  content: '';\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  background-color: black;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.line:after{\n  bottom: 0;\n}\n\n.section{\n  display: flex;\n  opacity: 0;\n  /* transform: translateX(-100%); */\n  transition: 1000ms ease;\n  position: relative;\n  z-index: 1;\n  padding: 1rem;\n  border-radius: 1rem;\n  align-items: center;\n  min-height: 250px;\n}\n\n.section:nth-child(odd){\n  flex-direction: row-reverse;\n}\n\n.bead {\n  position: absolute;\n  display: block;\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  background-color: black;\n  left: 50%;\n  top: 20%;\n}\n\n.content{\n  width: calc(50% - 2rem);\n}\n\n\n.show-me:nth-child(n){\n  transform: none;\n  opacity: 1;\n}\n\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/progress.css":
/*!*********************************!*\
  !*** ./src/styles/progress.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./progress.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/progress.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_progress_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio/./src/styles/progress.css?");

/***/ }),

/***/ "./src/styles/queries.css":
/*!********************************!*\
  !*** ./src/styles/queries.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_queries_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./queries.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/queries.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_queries_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_queries_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_queries_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_queries_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio/./src/styles/queries.css?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_progress_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/progress.css */ \"./src/styles/progress.css\");\n/* harmony import */ var _styles_queries_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/queries.css */ \"./src/styles/queries.css\");\n/* harmony import */ var _images_daniel_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/daniel-1.jpg */ \"./src/images/daniel-1.jpg\");\n/* harmony import */ var _images_fav_icon_dk_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/fav-icon-dk.jpg */ \"./src/images/fav-icon-dk.jpg\");\n/* harmony import */ var _images_programming_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/programming.jpg */ \"./src/images/programming.jpg\");\n/* harmony import */ var _images_teide_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/teide.jpg */ \"./src/images/teide.jpg\");\n/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeline.js */ \"./src/timeline.js\");\n/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_timeline_js__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n// import './images/daniel-1.avif';\n// import './images/daniel-1.webp';\n\n\n\n\n// import './images/programming.avif';\n\n\n// import './images/teide.avif';\n// import './images/teide.webp';\n\n\n\n\nconst navToggle = document.querySelector(\".nav-toggle\");\nconst navLinks = document.querySelectorAll(\".nav__link\");\n\nif (navToggle && navLinks) {\n  navToggle.addEventListener(\"click\", () => {\n    document.body.classList.toggle(\"nav-open\");\n  });\n\n  navLinks.forEach((link) => {\n    link.addEventListener(\"click\", () => {\n      document.body.classList.remove(\"nav-open\");\n    });\n  });\n}\n\n// animated job title\nwindow.addEventListener(\"load\", function (event) {\n  let textWrapper = document.getElementsByClassName(\"ml3\")[0];\n  textWrapper.innerHTML = textWrapper.textContent.replace(\n      /\\S/g,\n      \"<span class='letter'>$&</span>\"\n  );\n\n  anime\n      .timeline({ loop: true })\n      .add({\n        targets: \".ml3 .letter\",\n        opacity: [0, 1],\n        easing: \"easeInOutQuad\",\n        duration: 200,\n        delay: (el, i) => 150 * (i + 1),\n      })\n      .add({\n        targets: \".ml3\",\n        opacity: 0,\n        duration: 200,\n        easing: \"easeOutExpo\",\n        delay: 1000000,\n      });\n});\n\n// fills progressbars\nlet initiated = false;\n\nfunction scrollListener() {\n  const element = document.getElementsByClassName(\"progress-done\")[0];\n  const position = element.getBoundingClientRect();\n  // checking for partial visibility\n  if (position.top < window.innerHeight && position.bottom >= 0) {\n    if (!initiated) {\n      const progress = document.getElementsByClassName(\"progress-done\");\n      for (const el of progress) {\n        el.style.width = el.getAttribute(\"data-done\") + \"%\";\n        el.style.opacity = 1;\n      }\n      initiated = true;\n      window.removeEventListener(\"scroll\", scrollListener);\n    }\n  }\n}\n\nwindow.addEventListener(\"scroll\", scrollListener);\n\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/timeline.js":
/*!*************************!*\
  !*** ./src/timeline.js ***!
  \*************************/
/***/ (() => {

eval("\n\n\nfunction qs(selector, all = false) {\n    return all ? document.querySelectorAll(selector) : document.querySelector(selector);\n}\n\n\n\nfunction scrollHandler() {\n\n    const sections = qs('.section', true);\n    const timeline = qs('.timeline');\n    const line = qs('.line');\n    line.style.bottom = `calc(100% - 20px)`;\n    let prevScrollY = window.scrollY;\n    let up, down;\n    let full = false;\n    let set = 0;\n    const targetY = window.innerHeight * .8;\n    const {\n        scrollY\n    } = window;\n    up = scrollY < prevScrollY;\n    down = !up;\n    const timelineRect = timeline.getBoundingClientRect();\n    const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;\n\n    const dist = targetY - timelineRect.top;\n\n    if (down && !full) {\n        set = Math.max(set, dist);\n        line.style.bottom = `calc(100% - ${set + 40}px)`;\n    }\n\n    if (dist > timeline.offsetHeight + 50 && !full) {\n        full = true;\n        line.style.bottom = `-50px`;\n    }\n\n    sections.forEach(item => {\n        // console.log(item);\n        const rect = item.getBoundingClientRect(); //     console.log(rect);\n\n        if (rect.top + item.offsetHeight / 15 < targetY) {\n            item.classList.add('show-me');\n        }\n    }); // console.log(up, down);\n\n    prevScrollY = window.scrollY;\n}\n\nwindow.addEventListener(\"load\", () => {\n    scrollHandler();\n});\n\ndocument.querySelector('.line').style.display = 'block';\nwindow.addEventListener('scroll', scrollHandler);\n\n//# sourceURL=webpack://portfolio/./src/timeline.js?");

/***/ }),

/***/ "./src/images/daniel-1.jpg":
/*!*********************************!*\
  !*** ./src/images/daniel-1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/daniel-1.jpg\";\n\n//# sourceURL=webpack://portfolio/./src/images/daniel-1.jpg?");

/***/ }),

/***/ "./src/images/fav-icon-dk.jpg":
/*!************************************!*\
  !*** ./src/images/fav-icon-dk.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/fav-icon-dk.jpg\";\n\n//# sourceURL=webpack://portfolio/./src/images/fav-icon-dk.jpg?");

/***/ }),

/***/ "./src/images/programming.jpg":
/*!************************************!*\
  !*** ./src/images/programming.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/programming.jpg\";\n\n//# sourceURL=webpack://portfolio/./src/images/programming.jpg?");

/***/ }),

/***/ "./src/images/teide.jpg":
/*!******************************!*\
  !*** ./src/images/teide.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/teide.jpg\";\n\n//# sourceURL=webpack://portfolio/./src/images/teide.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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