/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(2);
var Site = (function () {
    function Site() {
    }
    Site.prototype.createTree = function () {
        var helpContainer = $('#helpContainer');
        var arrayData = decodeURIComponent($(location).attr('href')).split('?');
        var parameters = arrayData[arrayData.length - 1];
        var parametersArray = parameters.split("&");
        var lastPage = "";
        for (var i = 0; i < parametersArray.length; i++) {
            var parameterTokens = parametersArray[i].split("=");
            if (parameterTokens[0].toLowerCase() == "page") {
                lastPage = encodeURIComponent(parameterTokens[1]);
            }
        }
        //var lastPage = encodeURIComponent(array[array.length - 1]);
        var openedClass = 'fa fa-minus-square-o ';
        var closedClass = 'fa fa-plus-square-o ';
        // Initialize the behavior of the tree and its nodes
        var tree = $('#helpTree');
        tree.addClass("tree");
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            var span = branch.children("span:first");
            span.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
            span.addClass('branch');
            span.on('click', function (e) {
                var icon = $(this).children('i:first');
                icon.toggleClass(openedClass + " " + closedClass);
                $(this).parent().children("ul:first").toggle();
            });
            branch.children("ul:first").toggle();
        });
        // Save the position of the scrolling, so we can restore it after the page load.
        tree.find('.nav-link').each(function () {
            $(this).on('click', function (e) {
                localStorage.setItem("scrollPosition", helpContainer.scrollTop().toString());
            });
        });
        // Expand the nodes for the path from the URL  TODO: Persist this based on some localStorage save.
        var searchString = "a[href*=\"" + lastPage + "\"";
        var topicLink = $(searchString);
        topicLink.addClass("node-selected");
        topicLink.parents('li').each(function () {
            $(this).children("ul:first").show();
            var icon = $(this).children('span').children("i");
            icon.toggleClass(openedClass + " " + closedClass);
        });
        // The entire tree is hidden by default while we manipulate the DOM, and then we show it.
        $('#helpTree').show();
        // Try to scroll to the best position.
        if (localStorage.getItem("scrollPosition")) {
            helpContainer.scrollTop(parseInt(localStorage.getItem("scrollPosition")));
        }
        else if (topicLink.length > 0) {
            // Scroll to the linked topic using animation.
            helpContainer.animate({
                scrollTop: topicLink.offset().top - helpContainer.offset().top + helpContainer.scrollTop()
            });
        }
    };
    return Site;
}());
exports.Site = Site;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var site_1 = __webpack_require__(0);
var site = new site_1.Site();
site.createTree();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(0);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = vendor_d7e2d9f18c12cd6409bf;

/***/ })
/******/ ]);
//# sourceMappingURL=main-client.js.map