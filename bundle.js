/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _EventNotification = __webpack_require__(1);
	
	var _EventNotification2 = _interopRequireDefault(_EventNotification);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// request permission on page load
	document.addEventListener('DOMContentLoaded', function () {
	  if (Notification.permission !== "granted") Notification.requestPermission();
	});
	
	// var Controller = {};
	Controller.notify = function () {
	  _EventNotification2.default.hello();
	};
	
	// Test.test();
	
	// asdf

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventNotification = function () {
	    function EventNotification() {
	        _classCallCheck(this, EventNotification);
	    }
	
	    _createClass(EventNotification, null, [{
	        key: 'hello',
	        value: function hello() {
	            // if (Notification.permission !== "granted")
	            //     Notification.requestPermission();
	            console.log('hello');
	            if (!Notification) {
	                alert('Desktop notifications not available in your browser. Try Chromium.');
	                return;
	            }
	
	            if (Notification.permission !== "granted") Notification.requestPermission();else {
	                var notification = new Notification('Notification title', {
	                    icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
	                    body: "Hey there! You've been notified!"
	                });
	
	                notification.onclick = function () {
	                    window.open("http://stackoverflow.com/a/13328397/1269037");
	                };
	            }
	        }
	    }]);
	
	    return EventNotification;
	}();
	
	exports.default = EventNotification;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map