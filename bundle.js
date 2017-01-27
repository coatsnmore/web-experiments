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
	
	var _routes = __webpack_require__(1);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = new Vue({
	  el: '#app',
	  data: {
	    currentRoute: window.location.pathname
	  },
	  computed: {
	    ViewComponent: function ViewComponent() {
	      var matchingView = _routes2.default[this.currentRoute];
	      return matchingView ? __webpack_require__(2)("./" + matchingView + '.vue') : __webpack_require__(3);
	    }
	  },
	  render: function render(h) {
	    return h(this.ViewComponent);
	  }
	});
	
	window.addEventListener('popstate', function () {
	  app.currentRoute = window.location.pathname;
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  '/': 'Home',
	  '/notification': 'Notification',
	  '/webgl': 'WebGL',
	  '/audio': 'Audio',
	  '/gamepad': 'Gamepad'
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./404.vue": 3,
		"./Audio.vue": 18,
		"./Gamepad.vue": 23,
		"./Home.vue": 31,
		"./Notification.vue": 34,
		"./WebGL.vue": 38
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(4)
	
	/* template */
	var __vue_template__ = __webpack_require__(17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\devl\\web-experiments\\es6\\pages\\404.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1bb7916f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1bb7916f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] 404.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Main = __webpack_require__(5);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    MainLayout: _Main2.default
	  }
	}; //
	//
	//
	//
	//
	//

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(6)
	
	/* script */
	__vue_exports__ = __webpack_require__(10)
	
	/* template */
	var __vue_template__ = __webpack_require__(16)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\devl\\web-experiments\\es6\\layouts\\Main.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5a5086cd"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5a5086cd", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5a5086cd", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Main.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5a5086cd&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Main.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5a5086cd&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Main.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.container ul[data-v-5a5086cd] {\n\t\t/*max-width: 600px;\n\t\tmargin: 0 auto;\n\t\tpadding: 15px 30px;\n\t\tbackground: #f9f7f5;*/\n    list-style: none;\n}\n", "", {"version":3,"sources":["/./es6/layouts/Main.vue?7ac7ba54"],"names":[],"mappings":";AA8BA;EACA;;;wBAGA;IACA,iBAAA;CACA","file":"Main.vue","sourcesContent":["<template>\r\n\t<div class=\"container\">\r\n\t\t<ul>\r\n\t\t\t<li>\r\n\t\t\t\t<v-link href=\"/\">Home</v-link>\r\n\t\t\t\t<v-link href=\"/notification\">Notification</v-link>\r\n\t\t\t\t<v-link href=\"/webgl\">Web GL</v-link>\r\n\t\t\t\t<v-link href=\"/audio\">Audio</v-link>\r\n\t\t\t\t<v-link href=\"/gamepad\">Gamepad</v-link>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\r\n\t\t<slot></slot>\r\n\r\n\t\t<div>♥ from coatsn</div>\r\n\t</div>\r\n</template>\r\n\r\n<script>\r\n  import VLink from '../components/VLink.vue'\r\n\r\n  export default {\r\n    components: {\r\n      VLink\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n\t\r\n\t.container ul {\r\n\t\t/*max-width: 600px;\r\n\t\tmargin: 0 auto;\r\n\t\tpadding: 15px 30px;\r\n\t\tbackground: #f9f7f5;*/\r\n    list-style: none;\r\n\t}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _VLink = __webpack_require__(11);
	
	var _VLink2 = _interopRequireDefault(_VLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    VLink: _VLink2.default
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(12)
	
	/* script */
	__vue_exports__ = __webpack_require__(14)
	
	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\devl\\web-experiments\\es6\\components\\VLink.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-200b592b"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-200b592b", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-200b592b", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] VLink.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-200b592b&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VLink.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-200b592b&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VLink.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.active[data-v-200b592b] {\n  color: cornflowerblue;\n}\n", "", {"version":3,"sources":["/./es6/components/VLink.vue?54a79c7a"],"names":[],"mappings":";AAsCA;EACA,sBAAA;CACA","file":"VLink.vue","sourcesContent":["<template>\r\n  <a\r\n    v-bind:href=\"href\"\r\n    v-bind:class=\"{ active: isActive }\"\r\n    v-on:click=\"go\"\r\n  >\r\n    <slot></slot>\r\n  </a>\r\n</template>\r\n\r\n<script>\r\n  import routes from '../routes'\r\n\r\n  export default {\r\n    props: {\r\n      href: String,\r\n      required: true\r\n    },\r\n    computed: {\r\n      isActive () {\r\n        return this.href === this.$root.currentRoute\r\n      }\r\n    },\r\n    methods: {\r\n      go (event) {\r\n        event.preventDefault()\r\n        this.$root.currentRoute = this.href\r\n        window.history.pushState(\r\n          null,\r\n          routes[this.href],\r\n          this.href\r\n        )\r\n      }\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n  .active {\r\n    color: cornflowerblue;\r\n  }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routes = __webpack_require__(1);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    href: String,
	    required: true
	  },
	  computed: {
	    isActive: function isActive() {
	      return this.href === this.$root.currentRoute;
	    }
	  },
	  methods: {
	    go: function go(event) {
	      event.preventDefault();
	      this.$root.currentRoute = this.href;
	      window.history.pushState(null, _routes2.default[this.href], this.href);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    class: {
	      active: _vm.isActive
	    },
	    attrs: {
	      "href": _vm.href
	    },
	    on: {
	      "click": _vm.go
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-200b592b", module.exports)
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('ul', [_c('li', [_c('v-link', {
	    attrs: {
	      "href": "/"
	    }
	  }, [_vm._v("Home")]), _vm._v(" "), _c('v-link', {
	    attrs: {
	      "href": "/notification"
	    }
	  }, [_vm._v("Notification")]), _vm._v(" "), _c('v-link', {
	    attrs: {
	      "href": "/webgl"
	    }
	  }, [_vm._v("Web GL")]), _vm._v(" "), _c('v-link', {
	    attrs: {
	      "href": "/audio"
	    }
	  }, [_vm._v("Audio")]), _vm._v(" "), _c('v-link', {
	    attrs: {
	      "href": "/gamepad"
	    }
	  }, [_vm._v("Gamepad")])], 1)]), _vm._v(" "), _vm._t("default"), _vm._v(" "), _c('div', [_vm._v("♥ from coatsn")])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5a5086cd", module.exports)
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('main-layout', [_c('p', [_vm._v("Page not found")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1bb7916f", module.exports)
	  }
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(19)
	
	/* template */
	var __vue_template__ = __webpack_require__(22)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\devl\\web-experiments\\es6\\pages\\Audio.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3acbcda6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3acbcda6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Audio.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Main = __webpack_require__(5);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _Synth = __webpack_require__(20);
	
	var _Synth2 = _interopRequireDefault(_Synth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  created: function created() {
	    // `this` points to the vm instance
	    //console.log('a is: ' + this.a)
	    this.synth = new _Synth2.default();
	  },
	  components: {
	    MainLayout: _Main2.default
	  },
	  methods: {
	    play: function play() {
	      this.synth.playSong();
	    }
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Notes = __webpack_require__(21);
	
	var _Notes2 = _interopRequireDefault(_Notes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Synth = function () {
	    function Synth() {
	        _classCallCheck(this, Synth);
	
	        this.notes = _Notes2.default.all();
	        // var context = {};
	        var ContextClass = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext;
	        if (ContextClass) {
	            // Web Audio API is available.
	            this.context = new ContextClass();
	        } else {
	            console.error('Browser does not support AudioContext, uh oh!');
	        }
	    }
	
	    _createClass(Synth, [{
	        key: 'playSong',
	        value: function playSong() {
	            var duration = 0.5,
	                startTime = this.context.currentTime,
	                song = ['G3', 'A#3/Bb3', 'D#4/Eb4', 'G3', 'A#3/Bb3', 'G#3/Ab3', 'G3'],
	
	            // song = ['G3', 'G3', 'G3', 'G3', 'G3', 'G#3/Ab3', 'G3'],
	            oscillatorType = 'sine',
	                masterVolume = 0.1;
	
	            for (var i = 0; i < song.length; i++) {
	                // controller.updateSpheresByNote(song[i]);
	                this.play(song[i], startTime + duration * i, duration, oscillatorType, masterVolume);
	            }
	        }
	    }, {
	        key: 'play',
	        value: function play(note, startTime, duration, type, volumeLevel) {
	            var osc1 = this.context.createOscillator(),
	                osc2 = this.context.createOscillator(),
	                volume = this.context.createGain(),
	                frequency = this.notes[note];
	
	            volume.gain.value = volumeLevel;
	
	            // Set oscillator wave type
	            osc1.type = type;
	            osc2.type = type;
	
	            // tune
	            osc1.frequency.value = frequency;
	            osc2.frequency.value = frequency - 3;
	
	            // wire em up
	            // osc1.connect(analyser);
	            // analyser.connect(freqAnalyser);
	            // freqAnalyser.connect(volume);
	            osc1.connect(volume);
	
	            osc2.connect(volume);
	            volume.connect(this.context.destination);
	
	            // Fade out
	            volume.gain.setValueAtTime(0.1, startTime + duration - 0.25);
	            volume.gain.linearRampToValueAtTime(0, startTime + duration);
	
	            // Start oscillators
	            osc1.start(startTime);
	            osc2.start(startTime);
	
	            // Stop oscillators
	            osc1.stop(startTime + duration);
	            osc2.stop(startTime + duration);
	        }
	    }]);
	
	    return Synth;
	}();
	
	exports.default = Synth;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Notes = function () {
	    function Notes() {
	        _classCallCheck(this, Notes);
	    }
	
	    _createClass(Notes, null, [{
	        key: 'all',
	        value: function all() {
	            return {
	                'C0': 16.35,
	                'C#0/Db0': 17.32,
	                'D0': 18.35,
	                'D#0/Eb0': 19.45,
	                'E0': 20.60,
	                'F0': 21.83,
	                'F#0/Gb0': 23.12,
	                'G0': 24.50,
	                'G#0/Ab0': 25.96,
	                'A0': 27.50,
	                'A#0/Bb0': 29.14,
	                'B0': 30.87,
	                'C1': 32.70,
	                'C#1/Db1': 34.65,
	                'D1': 36.71,
	                'D#1/Eb1': 38.89,
	                'E1': 41.20,
	                'F1': 43.65,
	                'F#1/Gb1': 46.25,
	                'G1': 49.00,
	                'G#1/Ab1': 51.91,
	                'A1': 55.00,
	                'A#1/Bb1': 58.27,
	                'B1': 61.74,
	                'C2': 65.41,
	                'C#2/Db2': 69.30,
	                'D2': 73.42,
	                'D#2/Eb2': 77.78,
	                'E2': 82.41,
	                'F2': 87.31,
	                'F#2/Gb2': 92.50,
	                'G2': 98.00,
	                'G#2/Ab2': 103.83,
	                'A2': 110.00,
	                'A#2/Bb2': 116.54,
	                'B2': 123.47,
	                'C3': 130.81,
	                'C#3/Db3': 138.59,
	                'D3': 146.83,
	                'D#3/Eb3': 155.56,
	                'E3': 164.81,
	                'F3': 174.61,
	                'F#3/Gb3': 185.00,
	                'G3': 196.00,
	                'G#3/Ab3': 207.65,
	                'A3': 220.00,
	                'A#3/Bb3': 233.08,
	                'B3': 246.94,
	                'C4': 261.63,
	                'C#4/Db4': 277.18,
	                'D4': 293.66,
	                'D#4/Eb4': 311.13,
	                'E4': 329.63,
	                'F4': 349.23,
	                'F#4/Gb4': 369.99,
	                'G4': 392.00,
	                'G#4/Ab4': 415.30,
	                'A4': 440.00,
	                'A#4/Bb4': 466.16,
	                'B4': 493.88,
	                'C5': 523.25,
	                'C#5/Db5': 554.37,
	                'D5': 587.33,
	                'D#5/Eb5': 622.25,
	                'E5': 659.25,
	                'F5': 698.46,
	                'F#5/Gb5': 739.99,
	                'G5': 783.99,
	                'G#5/Ab5': 830.61,
	                'A5': 880.00,
	                'A#5/Bb5': 932.33,
	                'B5': 987.77,
	                'C6': 1046.50,
	                'C#6/Db6': 1108.73,
	                'D6': 1174.66,
	                'D#6/Eb6': 1244.51,
	                'E6': 1318.51,
	                'F6': 1396.91,
	                'F#6/Gb6': 1479.98,
	                'G6': 1567.98,
	                'G#6/Ab6': 1661.22,
	                'A6': 1760.00,
	                'A#6/Bb6': 1864.66,
	                'B6': 1975.53,
	                'C7': 2093.00,
	                'C#7/Db7': 2217.46,
	                'D7': 2349.32,
	                'D#7/Eb7': 2489.02,
	                'E7': 2637.02,
	                'F7': 2793.83,
	                'F#7/Gb7': 2959.96,
	                'G7': 3135.96,
	                'G#7/Ab7': 3322.44,
	                'A7': 3520.00,
	                'A#7/Bb7': 3729.31,
	                'B7': 3951.07,
	                'C8': 4186.01,
	                'C#8/Db8': 4434.92,
	                'D8': 4698.63,
	                'D#8/Eb8': 4978.03,
	                'E8': 5274.04,
	                'F8': 5587.65,
	                'F#8/Gb8': 5919.91,
	                'G8': 6271.93,
	                'G#8/Ab8': 6644.88,
	                'A8': 7040.00,
	                'A#8/Bb8': 7458.62,
	                'B8': 7902.13
	            };
	        }
	    }]);
	
	    return Notes;
	}();
	
	exports.default = Notes;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('main-layout', [_c('h2', [_vm._v("Audio")]), _vm._v(" "), _c('p', [_vm._v("The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning)  and much more.")]), _vm._v(" "), _c('button', {
	    on: {
	      "click": _vm.play
	    }
	  }, [_vm._v("Play a Song!")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3acbcda6", module.exports)
	  }
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(24)
	
	/* template */
	var __vue_template__ = __webpack_require__(30)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\devl\\web-experiments\\es6\\pages\\Gamepad.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2dcad378", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2dcad378", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Gamepad.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Main = __webpack_require__(5);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _Scene = __webpack_require__(25);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  mounted: function mounted() {
	    this.scene = new _Scene2.default('scene', 600, 300);
	    this.scene.tick();
	  },
	  components: {
	    MainLayout: _Main2.default
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Player = __webpack_require__(26);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _Controls = __webpack_require__(27);
	
	var _Controls2 = _interopRequireDefault(_Controls);
	
	var _World = __webpack_require__(29);
	
	var _World2 = _interopRequireDefault(_World);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Scene = function () {
	        function Scene(domId, width, height) {
	                _classCallCheck(this, Scene);
	
	                this.controls = new _Controls2.default();
	                this.width = width;
	                this.height = height;
	
	                // builds the webgl renderer if available in browser
	                this.renderer = new PIXI.autoDetectRenderer(width, height);
	                this.renderer.view.setAttribute('class', 'renderer');
	
	                // attach the scene to the DOM
	                var sceneElement = document.getElementById(domId);
	                sceneElement.append(this.renderer.view);
	
	                // create stage
	                this.stage = new PIXI.Container();
	
	                // add new player to stage
	                this.player = new _Player2.default(50, 100, 100);
	                this.stage.addChild(this.player.graphics);
	
	                // create world and add physics
	                this.world = new _World2.default(60);
	                this.world.addBody(this.player.body);
	        }
	
	        _createClass(Scene, [{
	                key: 'tick',
	                value: function tick() {
	                        // draw
	                        this.renderer.render(this.stage);
	                        requestAnimationFrame(this.tick.bind(this));
	
	                        // step physics
	                        this.world.update();
	
	                        // update positions of objects in scene
	                        this.player.update(this.controls.getState(), this.width, this.height);
	                }
	        }]);
	
	        return Scene;
	}();
	
	exports.default = Scene;

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Player = function () {
	    function Player(size, x, y) {
	        _classCallCheck(this, Player);
	
	        this.size = size;
	        this.graphics(x, y);
	        this.body(x, y);
	        this.speed = 100;
	        this.turnSpeed = 2;
	        // this.shape();
	    }
	
	    _createClass(Player, [{
	        key: "graphics",
	        value: function graphics(x, y) {
	            this.graphics = new PIXI.Container();
	
	            var hull = new PIXI.Graphics();
	            this.hull = hull;
	            hull.beginFill(0xBAC6D6);
	            // player.graphics.lineStyle(5, 0xFF0000);
	            hull.moveTo(0, this.size);
	            hull.lineTo(0, this.size * (2 / 3));
	            hull.lineTo(this.size / 2, 0);
	            hull.lineTo(this.size, this.size * (2 / 3));
	            hull.lineTo(this.size, this.size);
	            hull.lineTo(this.size * (2 / 3), this.size * (2 / 3));
	            hull.lineTo(this.size * (1 / 3), this.size * (2 / 3));
	            hull.endFill();
	            this.graphics.addChildAt(hull, 0);
	
	            var engine = new PIXI.Graphics();
	            this.engine = engine;
	            engine.beginFill(0xF7ED60);
	            // player.graphics.lineStyle(5, 0xFF0000);
	            engine.moveTo(this.size * (1 / 3), this.size * (2 / 3));
	            engine.lineTo(this.size * (2 / 3), this.size * (2 / 3));
	            engine.lineTo(this.size * (1 / 2), this.size);
	            engine.endFill();
	            engine.alpha = 0;
	
	            this.graphics.addChildAt(engine, 1);
	
	            // position
	            this.graphics.x = x;
	            this.graphics.y = y;
	
	            // adjust graphics center
	            this.graphics.pivot.x = this.size / 2;
	            this.graphics.pivot.y = this.size / 2;
	
	            return this.graphics;
	        }
	    }, {
	        key: "body",
	        value: function body(x, y) {
	            this.body = new p2.Body({
	                mass: 1,
	                angularVelocity: 0,
	                damping: 0,
	                angularDamping: 0,
	                position: [x, y]
	            });
	
	            this.shape = new p2.Box({
	                width: this.size,
	                height: this.size
	            });
	            this.body.addShape(this.shape);
	            return this.body;
	        }
	    }, {
	        key: "update",
	        value: function update(controls, sceneWidth, sceneHeight) {
	            // basicContols(controls);
	
	            // player angles
	            if (controls.left) {
	                this.body.angularVelocity = -1 * this.turnSpeed;
	            } else if (controls.right) {
	                this.body.angularVelocity = this.turnSpeed;
	            } else {
	                this.body.angularVelocity = 0;
	            }
	
	            // console.log('this.body.angularVelocity: ' + this.body.angularVelocity);
	
	            // velocity
	            if (controls.up) {
	                var angle = this.body.angle + Math.PI / 2;
	                // console.log('angle: ' + angle);
	                this.body.force[0] -= this.speed * Math.cos(angle);
	                this.body.force[1] -= this.speed * Math.sin(angle);
	                this.engine.alpha = 1;
	            } else {
	                this.engine.alpha = 0;
	            }
	
	            // warp player on boundaries
	            this.warp(sceneWidth, sceneHeight);
	
	            //update graphics
	            this.graphics.x = this.body.position[0];
	            this.graphics.y = this.body.position[1];
	            this.graphics.rotation = this.body.angle;
	        }
	    }, {
	        key: "warp",
	        value: function warp(sceneWidth, sceneHeight) {
	
	            var x = this.body.position[0],
	                y = this.body.position[1];
	            if (x < 0) {
	                this.body.position[0] = sceneWidth;
	            } else if (x > sceneWidth) {
	                this.body.position[0] = 0;
	            }
	
	            if (y < 0) {
	                this.body.position[1] = sceneHeight;
	            } else if (y > sceneHeight) {
	                this.body.position[1] = 0;
	            }
	        }
	    }, {
	        key: "basicContols",
	        value: function basicContols(controls) {
	            if (controls.left) {
	                this.graphics.x--;
	            } else if (controls.right) {
	                this.graphics.x++;
	            } else if (controls.up) {
	                this.graphics.y--;
	            } else if (controls.down) {
	                this.graphics.y++;
	            }
	        }
	    }]);
	
	    return Player;
	}();
	
	exports.default = Player;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Gamepad = __webpack_require__(28);
	
	var _Gamepad2 = _interopRequireDefault(_Gamepad);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controls = function () {
	    function Controls() {
	        _classCallCheck(this, Controls);
	
	        this.state = {
	            left: false,
	            right: false,
	            up: false,
	            down: false
	        };
	
	        this.gamepad = new _Gamepad2.default();
	
	        // setup PC keyboard interaction
	        window.addEventListener('keydown', function (e) {
	            this.changeControls(e.keyCode, true);
	        }.bind(this), false);
	
	        window.addEventListener('keyup', function (e) {
	            this.changeControls(e.keyCode, false);
	        }.bind(this), false);
	    }
	
	    _createClass(Controls, [{
	        key: 'getState',
	        value: function getState() {
	
	            // gamepad will override keyboard if connected
	            if (this.gamepad.connected()) {
	                var gamepadState = this.gamepad.getState();
	                return gamepadState;
	            }
	
	            return this.state;
	        }
	    }, {
	        key: 'changeControls',
	        value: function changeControls(code, state) {
	
	            // console.log('key code: ' + code);
	            switch (code) {
	
	                // d-pad
	                case 37:
	                    this.state.left = state;
	                    break;
	                case 39:
	                    this.state.right = state;
	                    break;
	                case 38:
	                    this.state.up = state;
	                    break;
	                case 40:
	                    this.state.down = state;
	                    break;
	            }
	        }
	    }]);
	
	    return Controls;
	}();
	
	exports.default = Controls;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Gamepad = function () {
	    function Gamepad() {
	        _classCallCheck(this, Gamepad);
	
	        this.gamepads = {};
	        this.state = {
	            left: false,
	            right: false,
	            up: false,
	            down: false
	        };
	    }
	
	    _createClass(Gamepad, [{
	        key: "getState",
	        value: function getState() {
	            this.queryGamepad();
	            return this.state;
	        }
	    }, {
	        key: "queryGamepad",
	        value: function queryGamepad() {
	            var gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [];
	            // query all gamepads
	            for (var i = 0; i < gamepads.length; i++) {
	                var gp = gamepads[i];
	                if (gp) {
	                    this.state.up = gp.buttons[12].pressed ? true : false;
	                    this.state.down = gp.buttons[13].pressed ? true : false;
	                    this.state.right = gp.buttons[15].pressed ? true : false;
	                    this.state.left = gp.buttons[14].pressed ? true : false;
	                }
	            }
	        }
	    }, {
	        key: "connected",
	        value: function connected() {
	            var gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [];
	            // query all gamepads
	            for (var i = 0; i < gamepads.length; i++) {
	                var gp = gamepads[i];
	                if (gp) {
	                    return true;
	                }
	            }
	
	            return false;
	        }
	    }, {
	        key: "changeControls",
	        value: function changeControls(code, state) {
	
	            // console.log('key code: ' + code);
	            switch (code) {
	
	                // d-pad
	                case 37:
	                    this.state.left = state;
	                    break;
	                case 39:
	                    this.state.right = state;
	                    break;
	                case 38:
	                    this.state.up = state;
	                    break;
	                case 40:
	                    this.state.down = state;
	                    break;
	            }
	        }
	    }]);
	
	    return Gamepad;
	}();
	
	exports.default = Gamepad;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var World = function () {
	    function World(fps) {
	        _classCallCheck(this, World);
	
	        this.fps = fps || 60;
	        this.world = new p2.World({
	            gravity: [0, 0]
	        });
	    }
	
	    _createClass(World, [{
	        key: "addBody",
	        value: function addBody(body) {
	            this.world.addBody(body);
	        }
	    }, {
	        key: "update",
	        value: function update() {
	            this.world.step(1 / this.fps);
	        }
	    }]);
	
	    return World;
	}();
	
	exports.default = World;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('main-layout', [_c('h2', [_vm._v("Gamepad API")]), _vm._v(" "), _c('p', [_vm._v("The Gamepad API is a way for developers to access and respond to signals from gamepads and other game controllers in a simple, consistent way. It contains three interfaces, two events and one specialist function, to respond to gamepads being connected and disconnected, and to access other information about the gamepads themselves, and what buttons and other controls are currently being pressed.")]), _vm._v(" "), _c('div', {
	    attrs: {
	      "id": "scene"
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2dcad378", module.exports)
	  }
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(32)
	
	/* template */
	var __vue_template__ = __webpack_require__(33)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\devl\\web-experiments\\es6\\pages\\Home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3cb57350", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3cb57350", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Home.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Main = __webpack_require__(5);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    MainLayout: _Main2.default
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('main-layout', [_c('h2', [_vm._v("Welcome to the "), _c('em', [_vm._v("coatsn")]), _vm._v(" laboratory.")]), _vm._v(" "), _c('p', [_vm._v("There are many experiments waiting for those who dare to explore the modern web!")]), _vm._v(" "), _c('p', [_vm._v("Beware, though.  For those who enter are never heard from again!")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3cb57350", module.exports)
	  }
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(35)
	
	/* template */
	var __vue_template__ = __webpack_require__(37)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\devl\\web-experiments\\es6\\pages\\Notification.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-74160364", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-74160364", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Notification.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Main = __webpack_require__(5);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _EventNotification = __webpack_require__(36);
	
	var _EventNotification2 = _interopRequireDefault(_EventNotification);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  created: function created() {
	    // `this` points to the vm instance
	    //console.log('a is: ' + this.a)
	    this.eventNotification = new _EventNotification2.default();
	  },
	  components: {
	    MainLayout: _Main2.default
	  },
	  methods: {
	    meow: function meow() {
	      this.eventNotification.meow();
	    }
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventNotification = function () {
	    function EventNotification() {
	        _classCallCheck(this, EventNotification);
	
	        if (Notification.permission !== "granted") Notification.requestPermission();
	    }
	
	    _createClass(EventNotification, [{
	        key: "meow",
	        value: function meow() {
	            if (!Notification) {
	                alert('Desktop notifications not available in your browser. Try Chromium.');
	                return;
	            }
	
	            if (Notification.permission !== "granted") Notification.requestPermission();else {
	                var notification = new Notification('MEOW!!!', {
	                    icon: 'http://vignette2.wikia.nocookie.net/rblxofftopic/images/6/67/A_magical_kitten.png/revision/latest?cb=20130730065856',
	                    body: "Hey there! You've been notified! Meow!"
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

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('main-layout', [_c('h2', [_vm._v("Web Notifications")]), _vm._v(" "), _c('p', [_vm._v("The Notifications API allows web pages to control the display of system notifications to the end user — these are outside the top-level browsing context viewport, so therefore can be displayed even the user has switched tabs or moved to a different app. The API is designed to be compatible with existing notification systems across different platforms.")]), _vm._v(" "), _c('button', {
	    on: {
	      "click": _vm.meow
	    }
	  }, [_vm._v("Notify Me!")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-74160364", module.exports)
	  }
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(39)
	
	/* template */
	var __vue_template__ = __webpack_require__(40)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\devl\\web-experiments\\es6\\pages\\WebGL.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7caa6310", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7caa6310", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] WebGL.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Main = __webpack_require__(5);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _Scene = __webpack_require__(25);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  mounted: function mounted() {
	    this.scene = new _Scene2.default('scene', 600, 300);
	    this.scene.tick();
	  },
	  components: {
	    MainLayout: _Main2.default
	  }
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('main-layout', [_c('h2', [_vm._v("Web GL")]), _vm._v(" "), _c('p', [_vm._v("WebGL (Web Graphics Library) is a JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins. WebGL does so by introducing an API that closely conforms to OpenGL ES 2.0 that can be used in HTML5 canvas elements.")]), _vm._v(" "), _c('div', {
	    attrs: {
	      "id": "scene"
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7caa6310", module.exports)
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map