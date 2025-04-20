/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  padding: 2rem;
  font-family: 'Courier New', monospace;
  background-color: #FFF3B0; 
  color: #335C67; 
}

#app {
  min-height: 100vh;
  padding: 1rem;
  background-color: #E09F3E; 
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(51, 92, 103, 0.3);
}

.controls {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1rem;
}

.car-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.car-item {
  background-color: #FFF3B0;
  border: 2px solid #9E2A2B;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.car-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 8px;
}

.car-box {
  width: 40px;
  height: 20px;
  border: 1px solid #333;
  border-radius: 4px;
}

.car-buttons,
.engine-buttons {
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
}

.car-buttons button,
.engine-buttons button,
button {
  background-color: #335C67;
  color: #FFF3B0;
  border: none;
  padding: 5px 10px;
  font-family: inherit;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.car-buttons button:hover,
.engine-buttons button:hover,
button:hover {
  background-color: #9E2A2B;
}

button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}

.car-track {
  height: 80px;
  background: #d9d9d9; 
  border-radius: 6px;
  margin-top: 10px;
  overflow: hidden;
  position: relative;
  border: 2px dashed #335C67; 
}

.car-track::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 3px;
  background-image: repeating-linear-gradient(
    to right,
    #9E2A2B 0 15px, 
    transparent 15px 30px
  );
  transform: translateY(-50%);
  opacity: 0.3;
}



.car-image {
  transition: left 0s linear;
}

.race-controls {
  display: flex;
  gap: 12px;
  margin: 10px 0;
  align-items: center;
}

.winner-banner {
  font-weight: bold;
  font-size: 1.2rem;
  color: #9E2A2B;
  padding: 0.5rem 1rem;
  background-color: #FFF3B0;
  border-left: 4px solid #335C67;
  border-radius: 4px;
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,aAAa;EACb,qCAAqC;EACrC,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,aAAa;EACb,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,WAAW;EACX,iBAAiB;AACnB;;AAEA;;;EAGE,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,4BAA4B;AAC9B;;AAEA;;;EAGE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,OAAO;EACP,WAAW;EACX,WAAW;EACX;;;;GAIC;EACD,2BAA2B;EAC3B,YAAY;AACd;;;;AAIA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,oBAAoB;EACpB,yBAAyB;EACzB,8BAA8B;EAC9B,kBAAkB;AACpB","sourcesContent":["body {\n  margin: 0;\n  padding: 2rem;\n  font-family: 'Courier New', monospace;\n  background-color: #FFF3B0; \n  color: #335C67; \n}\n\n#app {\n  min-height: 100vh;\n  padding: 1rem;\n  background-color: #E09F3E; \n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(51, 92, 103, 0.3);\n}\n\n.controls {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  margin: 1rem;\n}\n\n.car-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.car-item {\n  background-color: #FFF3B0;\n  border: 2px solid #9E2A2B;\n  padding: 10px;\n  border-radius: 8px;\n  box-shadow: 2px 2px 4px rgba(0,0,0,0.1);\n}\n\n.car-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 8px;\n}\n\n.car-box {\n  width: 40px;\n  height: 20px;\n  border: 1px solid #333;\n  border-radius: 4px;\n}\n\n.car-buttons,\n.engine-buttons {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: auto;\n}\n\n.car-buttons button,\n.engine-buttons button,\nbutton {\n  background-color: #335C67;\n  color: #FFF3B0;\n  border: none;\n  padding: 5px 10px;\n  font-family: inherit;\n  font-weight: bold;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n\n.car-buttons button:hover,\n.engine-buttons button:hover,\nbutton:hover {\n  background-color: #9E2A2B;\n}\n\nbutton:disabled {\n  background-color: #ccc;\n  color: #666;\n  cursor: not-allowed;\n}\n\n.car-track {\n  height: 80px;\n  background: #d9d9d9; \n  border-radius: 6px;\n  margin-top: 10px;\n  overflow: hidden;\n  position: relative;\n  border: 2px dashed #335C67; \n}\n\n.car-track::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-image: repeating-linear-gradient(\n    to right,\n    #9E2A2B 0 15px, \n    transparent 15px 30px\n  );\n  transform: translateY(-50%);\n  opacity: 0.3;\n}\n\n\n\n.car-image {\n  transition: left 0s linear;\n}\n\n.race-controls {\n  display: flex;\n  gap: 12px;\n  margin: 10px 0;\n  align-items: center;\n}\n\n.winner-banner {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: #9E2A2B;\n  padding: 0.5rem 1rem;\n  background-color: #FFF3B0;\n  border-left: 4px solid #335C67;\n  border-radius: 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api/engine.ts":
/*!***************************!*\
  !*** ./src/api/engine.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drive: () => (/* binding */ drive),
/* harmony export */   startEngine: () => (/* binding */ startEngine),
/* harmony export */   stopEngine: () => (/* binding */ stopEngine)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = 'http://localhost:3000';
function startEngine(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/engine?id=${id}&status=started`, {
            method: 'PATCH',
        });
        return response.json();
    });
}
function stopEngine(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/engine?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
        return response.json();
    });
}
function drive(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/engine?id=${id}&status=drive`, {
            method: 'PATCH',
        });
        if (response.status !== 200)
            throw new Error('Car broke down');
        return response.json();
    });
}


/***/ }),

/***/ "./src/api/garage.ts":
/*!***************************!*\
  !*** ./src/api/garage.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCar: () => (/* binding */ createCar),
/* harmony export */   deleteCar: () => (/* binding */ deleteCar),
/* harmony export */   getCar: () => (/* binding */ getCar),
/* harmony export */   getCars: () => (/* binding */ getCars),
/* harmony export */   getTotalCars: () => (/* binding */ getTotalCars),
/* harmony export */   updateCar: () => (/* binding */ updateCar)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const base = 'http://localhost:3000/garage';
function getCar(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${base}/${id}`);
        if (!response.ok)
            throw new Error(`Failed to fetch car with id ${id}`);
        return response.json();
    });
}
function getCars() {
    return __awaiter(this, arguments, void 0, function* (page = 1, limit = 7) {
        const response = yield fetch(`http://localhost:3000/garage?_page=${page}&_limit=${limit}`);
        return response.json();
    });
}
function getTotalCars() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${base}`);
        const allCars = yield res.json();
        return allCars.length;
    });
}
function createCar(name, color) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch('http://localhost:3000/garage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, color }),
        });
    });
}
function deleteCar(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`http://localhost:3000/garage/${id}`, {
            method: 'DELETE',
        });
    });
}
function updateCar(id, name, color) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`http://localhost:3000/garage/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, color }),
        });
    });
}


/***/ }),

/***/ "./src/api/winners.ts":
/*!****************************!*\
  !*** ./src/api/winners.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWinner: () => (/* binding */ createWinner),
/* harmony export */   deleteWinner: () => (/* binding */ deleteWinner),
/* harmony export */   getWinner: () => (/* binding */ getWinner),
/* harmony export */   getWinners: () => (/* binding */ getWinners),
/* harmony export */   getWinnersWithCars: () => (/* binding */ getWinnersWithCars),
/* harmony export */   updateWinner: () => (/* binding */ updateWinner)
/* harmony export */ });
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./garage */ "./src/api/garage.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const base = 'http://localhost:3000/winners';
function getWinners() {
    return __awaiter(this, arguments, void 0, function* (page = 1, limit = 10, sort = 'time', order = 'ASC') {
        const res = yield fetch(`${base}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
        return res.json();
    });
}
function getWinner(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${base}/${id}`);
        return res.ok ? res.json() : null;
    });
}
function createWinner(id, time) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(base, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, wins: 1, time }),
        });
    });
}
function updateWinner(id, wins, time) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`${base}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ wins, time }),
        });
    });
}
function deleteWinner(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`http://localhost:3000/winners/${id}`, {
            method: 'DELETE',
        });
    });
}
// This version returns both the enriched list and total count
function getWinnersWithCars() {
    return __awaiter(this, arguments, void 0, function* (page = 1, limit = 10, sort = 'time', order = 'ASC') {
        const res = yield fetch(`${base}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
        const total = Number(res.headers.get('X-Total-Count') || '0');
        const winners = yield res.json();
        const detailedWinners = yield Promise.all(winners.map((winner) => __awaiter(this, void 0, void 0, function* () {
            const car = yield (0,_garage__WEBPACK_IMPORTED_MODULE_0__.getCar)(winner.id);
            return {
                id: winner.id,
                wins: winner.wins,
                time: winner.time,
                name: car.name,
                color: car.color,
            };
        })));
        return { winners: detailedWinners, total };
    });
}


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderApp: () => (/* binding */ renderApp)
/* harmony export */ });
/* harmony import */ var _views_Garage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Garage */ "./src/views/Garage.ts");
/* harmony import */ var _views_Winners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/Winners */ "./src/views/Winners.ts");


function renderApp() {
    var _a, _b;
    const app = document.getElementById('app');
    if (!app)
        return;
    const nav = document.createElement('nav');
    nav.innerHTML = `
    <button id="garage-btn">Garage</button>
    <button id="winners-btn">Winners</button>
  `;
    const content = document.createElement('main');
    content.id = 'main-content';
    app.innerHTML = '';
    app.append(nav, content);
    const loadView = (view) => {
        content.innerHTML = '';
        content.append(view === 'garage' ? (0,_views_Garage__WEBPACK_IMPORTED_MODULE_0__.createGarageView)() : (0,_views_Winners__WEBPACK_IMPORTED_MODULE_1__.createWinnersView)());
    };
    (_a = nav.querySelector('#garage-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => loadView('garage'));
    (_b = nav.querySelector('#winners-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => loadView('winners'));
    loadView('garage'); // Default view
}


/***/ }),

/***/ "./src/components/Cars.ts":
/*!********************************!*\
  !*** ./src/components/Cars.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCarList: () => (/* binding */ createCarList)
/* harmony export */ });
/* harmony import */ var _api_garage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/garage */ "./src/api/garage.ts");
/* harmony import */ var _api_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/engine */ "./src/api/engine.ts");
/* harmony import */ var _api_winners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/winners */ "./src/api/winners.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function createCarList() {
    return __awaiter(this, arguments, void 0, function* (page = 1) {
        const container = document.createElement('div');
        container.className = 'car-list';
        const cars = yield (0,_api_garage__WEBPACK_IMPORTED_MODULE_0__.getCars)(page);
        for (const car of cars) {
            const carDiv = document.createElement('div');
            carDiv.className = 'car-item';
            const carBox = document.createElement('div');
            carBox.className = 'car-box';
            carBox.style.backgroundColor = car.color;
            const nameSpan = document.createElement('span');
            nameSpan.textContent = `${car.name} (ID: ${car.id})`;
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            const startBtn = document.createElement('button');
            startBtn.textContent = 'Start';
            const stopBtn = document.createElement('button');
            stopBtn.textContent = 'Stop';
            stopBtn.disabled = true; // start is enabled initially
            const buttonGroup = document.createElement('div');
            buttonGroup.className = 'car-buttons';
            buttonGroup.append(editBtn, deleteBtn);
            const engineGroup = document.createElement('div');
            engineGroup.className = 'engine-buttons';
            engineGroup.append(startBtn, stopBtn);
            const carWrapper = document.createElement('div');
            carWrapper.className = 'car-wrapper';
            carWrapper.append(carBox, nameSpan, buttonGroup, engineGroup);
            const carTrack = document.createElement('div');
            carTrack.className = 'car-track';
            carTrack.setAttribute('data-id', car.id.toString());
            carTrack.setAttribute('data-name', car.name);
            const carImg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            carImg.setAttribute('viewBox', '0 0 200 100');
            carImg.setAttribute('class', 'car-image');
            carImg.setAttribute('width', '120');
            carImg.setAttribute('height', '60');
            carImg.style.position = 'absolute';
            carImg.style.left = '0';
            carImg.style.top = '0';
            carImg.style.transition = 'left 0s linear';
            const carBody = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            carBody.setAttribute('x', '20');
            carBody.setAttribute('y', '20');
            carBody.setAttribute('width', '160');
            carBody.setAttribute('height', '40');
            carBody.setAttribute('rx', '12');
            carBody.setAttribute('fill', car.color);
            const frontWheel = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            frontWheel.setAttribute('cx', '50');
            frontWheel.setAttribute('cy', '70');
            frontWheel.setAttribute('r', '10');
            frontWheel.setAttribute('fill', '#333');
            const rearWheel = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            rearWheel.setAttribute('cx', '150');
            rearWheel.setAttribute('cy', '70');
            rearWheel.setAttribute('r', '10');
            rearWheel.setAttribute('fill', '#333');
            carImg.appendChild(carBody);
            carImg.appendChild(frontWheel);
            carImg.appendChild(rearWheel);
            carTrack.appendChild(carImg);
            // START ENGINE
            startBtn.onclick = () => __awaiter(this, void 0, void 0, function* () {
                startBtn.disabled = true;
                stopBtn.disabled = false;
                try {
                    const { velocity, distance } = yield (0,_api_engine__WEBPACK_IMPORTED_MODULE_1__.startEngine)(car.id);
                    const time = distance / velocity;
                    carImg.style.transition = `left ${time}ms linear`;
                    carImg.style.left = 'calc(100% - 120px)';
                    yield (0,_api_engine__WEBPACK_IMPORTED_MODULE_1__.drive)(car.id);
                }
                catch (e) {
                    console.warn(`Car ${car.name} failed to drive:`, e);
                    // If drive fails, reset button states
                    stopBtn.disabled = true;
                    startBtn.disabled = false;
                }
            });
            // STOP ENGINE
            stopBtn.onclick = () => __awaiter(this, void 0, void 0, function* () {
                stopBtn.disabled = true;
                startBtn.disabled = false;
                yield (0,_api_engine__WEBPACK_IMPORTED_MODULE_1__.stopEngine)(car.id);
                carImg.style.transition = 'left 0.3s ease-out';
                carImg.style.left = '0px';
            });
            // EDIT
            editBtn.onclick = () => {
                const nameInput = document.createElement('input');
                nameInput.type = 'text';
                nameInput.value = car.name;
                const colorInput = document.createElement('input');
                colorInput.type = 'color';
                colorInput.value = car.color;
                const saveBtn = document.createElement('button');
                saveBtn.textContent = 'Save';
                const cancelBtn = document.createElement('button');
                cancelBtn.textContent = 'Cancel';
                carWrapper.innerHTML = '';
                carWrapper.append(nameInput, colorInput, saveBtn, cancelBtn);
                saveBtn.onclick = () => __awaiter(this, void 0, void 0, function* () {
                    yield (0,_api_garage__WEBPACK_IMPORTED_MODULE_0__.updateCar)(car.id, nameInput.value, colorInput.value);
                    const refreshed = yield createCarList(page);
                    container.replaceWith(refreshed);
                });
                cancelBtn.onclick = () => __awaiter(this, void 0, void 0, function* () {
                    const refreshed = yield createCarList(page);
                    container.replaceWith(refreshed);
                });
            };
            // DELETE
            deleteBtn.onclick = () => __awaiter(this, void 0, void 0, function* () {
                if (confirm(`Delete car "${car.name}"?`)) {
                    yield (0,_api_garage__WEBPACK_IMPORTED_MODULE_0__.deleteCar)(car.id);
                    yield (0,_api_winners__WEBPACK_IMPORTED_MODULE_2__.deleteWinner)(car.id);
                    const refreshed = yield createCarList(page);
                    container.replaceWith(refreshed);
                }
            });
            carDiv.appendChild(carWrapper);
            carDiv.appendChild(carTrack);
            container.appendChild(carDiv);
        }
        return container;
    });
}


/***/ }),

/***/ "./src/components/CreateCarForm.ts":
/*!*****************************************!*\
  !*** ./src/components/CreateCarForm.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCarForm: () => (/* binding */ createCarForm)
/* harmony export */ });
/* harmony import */ var _api_garage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/garage */ "./src/api/garage.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function createCarForm(onCarCreated) {
    const form = document.createElement('form');
    form.className = 'create-car-form';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Car name';
    nameInput.required = true;
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = '#000000';
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Create Car';
    form.append(nameInput, colorInput, submitBtn);
    form.onsubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        yield (0,_api_garage__WEBPACK_IMPORTED_MODULE_0__.createCar)(nameInput.value, colorInput.value);
        nameInput.value = '';
        colorInput.value = '#000000';
        onCarCreated();
    });
    return form;
}


/***/ }),

/***/ "./src/components/Pagination.ts":
/*!**************************************!*\
  !*** ./src/components/Pagination.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPagination: () => (/* binding */ createPagination)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state.ts");

function createPagination(currentPage, onPageChange, totalPages) {
    const container = document.createElement('div');
    container.className = 'pagination';
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Prev';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        const newPage = currentPage - 1;
        _state__WEBPACK_IMPORTED_MODULE_0__.garageState.currentPage = newPage;
        onPageChange(newPage);
    };
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        const newPage = currentPage + 1;
        _state__WEBPACK_IMPORTED_MODULE_0__.garageState.currentPage = newPage;
        onPageChange(newPage);
    };
    container.appendChild(prevBtn);
    container.append(` Page ${currentPage} of ${totalPages} `);
    container.appendChild(nextBtn);
    return container;
}


/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   garageState: () => (/* binding */ garageState),
/* harmony export */   winnersState: () => (/* binding */ winnersState)
/* harmony export */ });
const garageState = {
    currentPage: 1,
};
const winnersState = {
    currentPage: 1,
    sortBy: 'wins',
    sortOrder: 'DESC',
};


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/utils/carGenerator.ts":
/*!***********************************!*\
  !*** ./src/utils/carGenerator.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateRandomCars: () => (/* binding */ generateRandomCars)
/* harmony export */ });
/* harmony import */ var _api_garage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/garage */ "./src/api/garage.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
function getRandomName() {
    const brands = ['Tesla', 'BMW', 'Ford', 'Audi', 'Honda', 'Chevy', 'Mazda', 'Kia', 'Lexus', 'Nissan'];
    const models = ['Model S', 'X5', 'Mustang', 'A4', 'Civic', 'Camaro', 'CX-5', 'Sportage', 'RX', 'Altima'];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const model = models[Math.floor(Math.random() * models.length)];
    return `${brand} ${model}`;
}
function generateRandomCars() {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = [];
        for (let i = 0; i < 100; i++) {
            const name = getRandomName();
            const color = getRandomColor();
            promises.push((0,_api_garage__WEBPACK_IMPORTED_MODULE_0__.createCar)(name, color));
        }
        yield Promise.all(promises);
    });
}


/***/ }),

/***/ "./src/views/Garage.ts":
/*!*****************************!*\
  !*** ./src/views/Garage.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGarageView: () => (/* binding */ createGarageView)
/* harmony export */ });
/* harmony import */ var _components_Cars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Cars */ "./src/components/Cars.ts");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Pagination */ "./src/components/Pagination.ts");
/* harmony import */ var _components_CreateCarForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CreateCarForm */ "./src/components/CreateCarForm.ts");
/* harmony import */ var _api_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/engine */ "./src/api/engine.ts");
/* harmony import */ var _api_garage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/garage */ "./src/api/garage.ts");
/* harmony import */ var _api_winners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/winners */ "./src/api/winners.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state */ "./src/state.ts");
/* harmony import */ var _utils_carGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/carGenerator */ "./src/utils/carGenerator.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








function createGarageView() {
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    heading.className = 'garage-title';
    section.appendChild(heading);
    const formContainer = document.createElement('div');
    const carContainer = document.createElement('div');
    const paginationContainer = document.createElement('div');
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'race-controls';
    let currentPage = _state__WEBPACK_IMPORTED_MODULE_6__.garageState.currentPage;
    const generateBtn = document.createElement('button');
    generateBtn.textContent = 'Generate Cars (100)';
    const winnerBanner = document.createElement('div');
    winnerBanner.className = 'winner-banner';
    const raceBtn = document.createElement('button');
    raceBtn.textContent = 'Race';
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.disabled = true;
    raceBtn.onclick = () => __awaiter(this, void 0, void 0, function* () {
        raceBtn.disabled = true;
        resetBtn.disabled = false;
        winnerBanner.textContent = '⏱️ Racing...';
        const cars = yield (0,_api_garage__WEBPACK_IMPORTED_MODULE_4__.getCars)(currentPage, 7);
        const results = [];
        yield Promise.all(cars.map((car) => __awaiter(this, void 0, void 0, function* () {
            const track = document.querySelector(`.car-track[data-id="${car.id}"]`);
            const carSvg = track === null || track === void 0 ? void 0 : track.querySelector('svg');
            if (!carSvg)
                return;
            try {
                const { velocity, distance } = yield (0,_api_engine__WEBPACK_IMPORTED_MODULE_3__.startEngine)(car.id);
                const expectedTime = distance / velocity;
                carSvg.style.transition = `left ${expectedTime}ms linear`;
                carSvg.style.left = 'calc(100% - 120px)';
                const startTime = performance.now();
                yield Promise.all([
                    (0,_api_engine__WEBPACK_IMPORTED_MODULE_3__.drive)(car.id),
                    new Promise((resolve) => carSvg.addEventListener('transitionend', () => resolve(), { once: true })),
                ]);
                const endTime = performance.now();
                results.push({
                    id: car.id,
                    name: car.name,
                    time: endTime - startTime,
                });
            }
            catch (_a) {
                console.warn(`❌ ${car.name} failed`);
                const computedLeft = window.getComputedStyle(carSvg).left;
                carSvg.style.transition = 'none';
                carSvg.style.left = computedLeft;
                yield (0,_api_engine__WEBPACK_IMPORTED_MODULE_3__.stopEngine)(car.id);
            }
        })));
        if (results.length === 0) {
            winnerBanner.textContent = '💥 No winner! All cars broke.';
        }
        else {
            const winner = results.reduce((best, curr) => curr.time < best.time ? curr : best);
            winnerBanner.textContent = `🏆 ${winner.name} wins in ${(winner.time / 1000).toFixed(2)}s!`;
            const existing = yield (0,_api_winners__WEBPACK_IMPORTED_MODULE_5__.getWinner)(winner.id);
            const bestTime = existing ? Math.min(winner.time, existing.time) : winner.time;
            if (existing) {
                yield (0,_api_winners__WEBPACK_IMPORTED_MODULE_5__.updateWinner)(winner.id, existing.wins + 1, bestTime);
            }
            else {
                yield (0,_api_winners__WEBPACK_IMPORTED_MODULE_5__.createWinner)(winner.id, winner.time);
            }
        }
    });
    resetBtn.onclick = () => __awaiter(this, void 0, void 0, function* () {
        const tracks = Array.from(document.querySelectorAll('.car-track'));
        yield Promise.all(tracks.map((track) => __awaiter(this, void 0, void 0, function* () {
            const id = +track.dataset.id;
            const carSvg = track === null || track === void 0 ? void 0 : track.querySelector('svg');
            if (!(carSvg instanceof SVGSVGElement))
                return;
            yield (0,_api_engine__WEBPACK_IMPORTED_MODULE_3__.stopEngine)(id);
            carSvg.style.transition = 'left 0.3s ease-out';
            carSvg.style.left = '0px';
        })));
        raceBtn.disabled = false;
        resetBtn.disabled = true;
        winnerBanner.textContent = '';
    });
    controlsContainer.append(raceBtn, resetBtn, winnerBanner);
    const renderPage = (page) => __awaiter(this, void 0, void 0, function* () {
        _state__WEBPACK_IMPORTED_MODULE_6__.garageState.currentPage = page;
        currentPage = page;
        carContainer.innerHTML = '';
        paginationContainer.innerHTML = '';
        const carList = yield (0,_components_Cars__WEBPACK_IMPORTED_MODULE_0__.createCarList)(page);
        carContainer.appendChild(carList);
        const totalCars = yield (0,_api_garage__WEBPACK_IMPORTED_MODULE_4__.getTotalCars)();
        const totalPages = Math.ceil(totalCars / 7);
        heading.textContent = `Garage (${totalCars} cars)`;
        paginationContainer.appendChild((0,_components_Pagination__WEBPACK_IMPORTED_MODULE_1__.createPagination)(page, renderPage, totalPages));
    });
    generateBtn.onclick = () => __awaiter(this, void 0, void 0, function* () {
        yield (0,_utils_carGenerator__WEBPACK_IMPORTED_MODULE_7__.generateRandomCars)();
        const total = yield (0,_api_garage__WEBPACK_IMPORTED_MODULE_4__.getTotalCars)();
        const totalPages = Math.ceil(total / 7);
        currentPage = totalPages;
        yield renderPage(currentPage);
    });
    const form = (0,_components_CreateCarForm__WEBPACK_IMPORTED_MODULE_2__.createCarForm)(() => renderPage(currentPage));
    formContainer.appendChild(form);
    formContainer.appendChild(generateBtn);
    renderPage(currentPage);
    section.appendChild(formContainer);
    section.appendChild(controlsContainer);
    section.appendChild(paginationContainer);
    section.appendChild(carContainer);
    return section;
}


/***/ }),

/***/ "./src/views/Winners.ts":
/*!******************************!*\
  !*** ./src/views/Winners.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWinnersView: () => (/* binding */ createWinnersView)
/* harmony export */ });
/* harmony import */ var _api_winners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/winners */ "./src/api/winners.ts");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Pagination */ "./src/components/Pagination.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let sortBy = 'wins';
let sortOrder = 'DESC';
let currentPage = 1;
function createWinnersView() {
    var _a, _b;
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    heading.className = 'winners-title';
    section.appendChild(heading);
    const table = document.createElement('table');
    table.className = 'winners-table';
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
    <th>#</th>
    <th>Car</th>
    <th>Name</th>
    <th id="sort-wins" style="cursor: pointer;">Wins ⬇</th>
    <th id="sort-time" style="cursor: pointer;">Best Time (s)</th>
  `;
    table.appendChild(headerRow);
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    const paginationContainer = document.createElement('div');
    function renderPage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            currentPage = page;
            tbody.innerHTML = '';
            paginationContainer.innerHTML = '';
            const { winners, total } = yield (0,_api_winners__WEBPACK_IMPORTED_MODULE_0__.getWinnersWithCars)(page, 7, sortBy, sortOrder);
            heading.textContent = `🏁 Winners (${total})`;
            winners.forEach((winner, index) => {
                const row = document.createElement('tr');
                const carSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                carSVG.setAttribute('viewBox', '0 0 200 100');
                carSVG.setAttribute('width', '60');
                carSVG.setAttribute('height', '30');
                const body = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                body.setAttribute('x', '20');
                body.setAttribute('y', '20');
                body.setAttribute('width', '160');
                body.setAttribute('height', '40');
                body.setAttribute('rx', '12');
                body.setAttribute('fill', winner.color);
                const wheel1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                wheel1.setAttribute('cx', '50');
                wheel1.setAttribute('cy', '70');
                wheel1.setAttribute('r', '10');
                wheel1.setAttribute('fill', '#333');
                const wheel2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                wheel2.setAttribute('cx', '150');
                wheel2.setAttribute('cy', '70');
                wheel2.setAttribute('r', '10');
                wheel2.setAttribute('fill', '#333');
                carSVG.append(body, wheel1, wheel2);
                row.innerHTML = `
        <td>${(page - 1) * 7 + index + 1}</td>
        <td></td>
        <td>${winner.name}</td>
        <td>${winner.wins}</td>
        <td>${(winner.time / 1000).toFixed(2)}</td>
      `;
                row.children[1].appendChild(carSVG);
                tbody.appendChild(row);
            });
            paginationContainer.appendChild((0,_components_Pagination__WEBPACK_IMPORTED_MODULE_1__.createPagination)(page, renderPage, Math.ceil(total / 7)));
        });
    }
    section.appendChild(table);
    section.appendChild(paginationContainer);
    (_a = table.querySelector('#sort-wins')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        sortBy = 'wins';
        sortOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC';
        renderPage(1);
    });
    (_b = table.querySelector('#sort-time')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        sortBy = 'time';
        sortOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC';
        renderPage(1);
    });
    renderPage(currentPage);
    return section;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.ts");


(0,_app__WEBPACK_IMPORTED_MODULE_1__.renderApp)();
console.log("🚀 index.ts loaded");
const app = document.getElementById('app');
(0,_app__WEBPACK_IMPORTED_MODULE_1__.renderApp)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7QUFDYiw0Q0FBNEMsd0VBQWdCO0FBQzVELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7VUM1RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBMkI7QUFDTztBQUNsQywrQ0FBUztBQUNUO0FBQ0E7QUFDQSwrQ0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL2FwaS9lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvYXBpL2dhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9hcGkvd2lubmVycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvY29tcG9uZW50cy9DYXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlQ2FyRm9ybS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvdXRpbHMvY2FyR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL3ZpZXdzL0dhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy92aWV3cy9XaW5uZXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAycmVtO1xuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGM0IwOyBcbiAgY29sb3I6ICMzMzVDNjc7IFxufVxuXG4jYXBwIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMDlGM0U7IFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDUxLCA5MiwgMTAzLCAwLjMpO1xufVxuXG4uY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuLmNhci1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uY2FyLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGM0IwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjOUUyQTJCO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuLmNhci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5jYXItYm94IHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY2FyLWJ1dHRvbnMsXG4uZW5naW5lLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5jYXItYnV0dG9ucyBidXR0b24sXG4uZW5naW5lLWJ1dHRvbnMgYnV0dG9uLFxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNUM2NztcbiAgY29sb3I6ICNGRkYzQjA7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXItYnV0dG9ucyBidXR0b246aG92ZXIsXG4uZW5naW5lLWJ1dHRvbnMgYnV0dG9uOmhvdmVyLFxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlFMkEyQjtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgY29sb3I6ICM2NjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5jYXItdHJhY2sge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7IFxuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggZGFzaGVkICMzMzVDNjc7IFxufVxuXG4uY2FyLXRyYWNrOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICM5RTJBMkIgMCAxNXB4LCBcbiAgICB0cmFuc3BhcmVudCAxNXB4IDMwcHhcbiAgKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cblxuXG4uY2FyLWltYWdlIHtcbiAgdHJhbnNpdGlvbjogbGVmdCAwcyBsaW5lYXI7XG59XG5cbi5yYWNlLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndpbm5lci1iYW5uZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjOUUyQTJCO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjNCMDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMzM1QzY3O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUVBOzs7RUFHRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYOzs7O0dBSUM7RUFDRCwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOzs7O0FBSUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkYzQjA7IFxcbiAgY29sb3I6ICMzMzVDNjc7IFxcbn1cXG5cXG4jYXBwIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMDlGM0U7IFxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoNTEsIDkyLCAxMDMsIDAuMyk7XFxufVxcblxcbi5jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmNhci1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2FyLWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjNCMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5RTJBMkI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xcbn1cXG5cXG4uY2FyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5jYXItYm94IHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmNhci1idXR0b25zLFxcbi5lbmdpbmUtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmNhci1idXR0b25zIGJ1dHRvbixcXG4uZW5naW5lLWJ1dHRvbnMgYnV0dG9uLFxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM1QzY3O1xcbiAgY29sb3I6ICNGRkYzQjA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY2FyLWJ1dHRvbnMgYnV0dG9uOmhvdmVyLFxcbi5lbmdpbmUtYnV0dG9ucyBidXR0b246aG92ZXIsXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5RTJBMkI7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgY29sb3I6ICM2NjY7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uY2FyLXRyYWNrIHtcXG4gIGhlaWdodDogODBweDtcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7IFxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDJweCBkYXNoZWQgIzMzNUM2NzsgXFxufVxcblxcbi5jYXItdHJhY2s6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgIzlFMkEyQiAwIDE1cHgsIFxcbiAgICB0cmFuc3BhcmVudCAxNXB4IDMwcHhcXG4gICk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcblxcblxcbi5jYXItaW1hZ2Uge1xcbiAgdHJhbnNpdGlvbjogbGVmdCAwcyBsaW5lYXI7XFxufVxcblxcbi5yYWNlLWNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEycHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53aW5uZXItYmFubmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogIzlFMkEyQjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjNCMDtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzMzNUM2NztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEVuZ2luZShpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7QkFTRV9VUkx9L2VuZ2luZT9pZD0ke2lkfSZzdGF0dXM9c3RhcnRlZGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3RvcEVuZ2luZShpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7QkFTRV9VUkx9L2VuZ2luZT9pZD0ke2lkfSZzdGF0dXM9c3RvcHBlZGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZHJpdmUoaWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfS9lbmdpbmU/aWQ9JHtpZH0mc3RhdHVzPWRyaXZlYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYXIgYnJva2UgZG93bicpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jb25zdCBiYXNlID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9nYXJhZ2UnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldENhcihpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7YmFzZX0vJHtpZH1gKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIGNhciB3aXRoIGlkICR7aWR9YCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FycygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKHBhZ2UgPSAxLCBsaW1pdCA9IDcpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZT9fcGFnZT0ke3BhZ2V9Jl9saW1pdD0ke2xpbWl0fWApO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdGFsQ2FycygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaChgJHtiYXNlfWApO1xuICAgICAgICBjb25zdCBhbGxDYXJzID0geWllbGQgcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGFsbENhcnMubGVuZ3RoO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcihuYW1lLCBjb2xvcikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FyYWdlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSwgY29sb3IgfSksXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNhcihpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FyYWdlLyR7aWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2FyKGlkLCBuYW1lLCBjb2xvcikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FyYWdlLyR7aWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBjb2xvciB9KSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldENhciB9IGZyb20gJy4vZ2FyYWdlJztcbmNvbnN0IGJhc2UgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3dpbm5lcnMnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbm5lcnMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChwYWdlID0gMSwgbGltaXQgPSAxMCwgc29ydCA9ICd0aW1lJywgb3JkZXIgPSAnQVNDJykge1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaChgJHtiYXNlfT9fcGFnZT0ke3BhZ2V9Jl9saW1pdD0ke2xpbWl0fSZfc29ydD0ke3NvcnR9Jl9vcmRlcj0ke29yZGVyfWApO1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5uZXIoaWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaChgJHtiYXNlfS8ke2lkfWApO1xuICAgICAgICByZXR1cm4gcmVzLm9rID8gcmVzLmpzb24oKSA6IG51bGw7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV2lubmVyKGlkLCB0aW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmV0Y2goYmFzZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQsIHdpbnM6IDEsIHRpbWUgfSksXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdpbm5lcihpZCwgd2lucywgdGltZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZldGNoKGAke2Jhc2V9LyR7aWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB3aW5zLCB0aW1lIH0pLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVXaW5uZXIoaWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3dpbm5lcnMvJHtpZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIFRoaXMgdmVyc2lvbiByZXR1cm5zIGJvdGggdGhlIGVucmljaGVkIGxpc3QgYW5kIHRvdGFsIGNvdW50XG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lubmVyc1dpdGhDYXJzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAocGFnZSA9IDEsIGxpbWl0ID0gMTAsIHNvcnQgPSAndGltZScsIG9yZGVyID0gJ0FTQycpIHtcbiAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2goYCR7YmFzZX0/X3BhZ2U9JHtwYWdlfSZfbGltaXQ9JHtsaW1pdH0mX3NvcnQ9JHtzb3J0fSZfb3JkZXI9JHtvcmRlcn1gKTtcbiAgICAgICAgY29uc3QgdG90YWwgPSBOdW1iZXIocmVzLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50JykgfHwgJzAnKTtcbiAgICAgICAgY29uc3Qgd2lubmVycyA9IHlpZWxkIHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IGRldGFpbGVkV2lubmVycyA9IHlpZWxkIFByb21pc2UuYWxsKHdpbm5lcnMubWFwKCh3aW5uZXIpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhciA9IHlpZWxkIGdldENhcih3aW5uZXIuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogd2lubmVyLmlkLFxuICAgICAgICAgICAgICAgIHdpbnM6IHdpbm5lci53aW5zLFxuICAgICAgICAgICAgICAgIHRpbWU6IHdpbm5lci50aW1lLFxuICAgICAgICAgICAgICAgIG5hbWU6IGNhci5uYW1lLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjYXIuY29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSkpO1xuICAgICAgICByZXR1cm4geyB3aW5uZXJzOiBkZXRhaWxlZFdpbm5lcnMsIHRvdGFsIH07XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVHYXJhZ2VWaWV3IH0gZnJvbSAnLi92aWV3cy9HYXJhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlV2lubmVyc1ZpZXcgfSBmcm9tICcuL3ZpZXdzL1dpbm5lcnMnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckFwcCgpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgICBpZiAoIWFwcClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbiBpZD1cImdhcmFnZS1idG5cIj5HYXJhZ2U8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGlkPVwid2lubmVycy1idG5cIj5XaW5uZXJzPC9idXR0b24+XG4gIGA7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBjb250ZW50LmlkID0gJ21haW4tY29udGVudCc7XG4gICAgYXBwLmlubmVySFRNTCA9ICcnO1xuICAgIGFwcC5hcHBlbmQobmF2LCBjb250ZW50KTtcbiAgICBjb25zdCBsb2FkVmlldyA9ICh2aWV3KSA9PiB7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKHZpZXcgPT09ICdnYXJhZ2UnID8gY3JlYXRlR2FyYWdlVmlldygpIDogY3JlYXRlV2lubmVyc1ZpZXcoKSk7XG4gICAgfTtcbiAgICAoX2EgPSBuYXYucXVlcnlTZWxlY3RvcignI2dhcmFnZS1idG4nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9hZFZpZXcoJ2dhcmFnZScpKTtcbiAgICAoX2IgPSBuYXYucXVlcnlTZWxlY3RvcignI3dpbm5lcnMtYnRuJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGxvYWRWaWV3KCd3aW5uZXJzJykpO1xuICAgIGxvYWRWaWV3KCdnYXJhZ2UnKTsgLy8gRGVmYXVsdCB2aWV3XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldENhcnMsIGRlbGV0ZUNhciwgdXBkYXRlQ2FyIH0gZnJvbSAnLi4vYXBpL2dhcmFnZSc7XG5pbXBvcnQgeyBzdGFydEVuZ2luZSwgc3RvcEVuZ2luZSwgZHJpdmUgfSBmcm9tICcuLi9hcGkvZW5naW5lJztcbmltcG9ydCB7IGRlbGV0ZVdpbm5lciB9IGZyb20gJy4uL2FwaS93aW5uZXJzJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJMaXN0KCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAocGFnZSA9IDEpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY2FyLWxpc3QnO1xuICAgICAgICBjb25zdCBjYXJzID0geWllbGQgZ2V0Q2FycyhwYWdlKTtcbiAgICAgICAgZm9yIChjb25zdCBjYXIgb2YgY2Fycykge1xuICAgICAgICAgICAgY29uc3QgY2FyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJEaXYuY2xhc3NOYW1lID0gJ2Nhci1pdGVtJztcbiAgICAgICAgICAgIGNvbnN0IGNhckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyQm94LmNsYXNzTmFtZSA9ICdjYXItYm94JztcbiAgICAgICAgICAgIGNhckJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjYXIuY29sb3I7XG4gICAgICAgICAgICBjb25zdCBuYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gYCR7Y2FyLm5hbWV9IChJRDogJHtjYXIuaWR9KWA7XG4gICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdGFydEJ0bi50ZXh0Q29udGVudCA9ICdTdGFydCc7XG4gICAgICAgICAgICBjb25zdCBzdG9wQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdG9wQnRuLnRleHRDb250ZW50ID0gJ1N0b3AnO1xuICAgICAgICAgICAgc3RvcEJ0bi5kaXNhYmxlZCA9IHRydWU7IC8vIHN0YXJ0IGlzIGVuYWJsZWQgaW5pdGlhbGx5XG4gICAgICAgICAgICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gJ2Nhci1idXR0b25zJztcbiAgICAgICAgICAgIGJ1dHRvbkdyb3VwLmFwcGVuZChlZGl0QnRuLCBkZWxldGVCdG4pO1xuICAgICAgICAgICAgY29uc3QgZW5naW5lR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVuZ2luZUdyb3VwLmNsYXNzTmFtZSA9ICdlbmdpbmUtYnV0dG9ucyc7XG4gICAgICAgICAgICBlbmdpbmVHcm91cC5hcHBlbmQoc3RhcnRCdG4sIHN0b3BCdG4pO1xuICAgICAgICAgICAgY29uc3QgY2FyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyV3JhcHBlci5jbGFzc05hbWUgPSAnY2FyLXdyYXBwZXInO1xuICAgICAgICAgICAgY2FyV3JhcHBlci5hcHBlbmQoY2FyQm94LCBuYW1lU3BhbiwgYnV0dG9uR3JvdXAsIGVuZ2luZUdyb3VwKTtcbiAgICAgICAgICAgIGNvbnN0IGNhclRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJUcmFjay5jbGFzc05hbWUgPSAnY2FyLXRyYWNrJztcbiAgICAgICAgICAgIGNhclRyYWNrLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGNhci5pZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGNhclRyYWNrLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgY2FyLm5hbWUpO1xuICAgICAgICAgICAgY29uc3QgY2FySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgICAgIGNhckltZy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDIwMCAxMDAnKTtcbiAgICAgICAgICAgIGNhckltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nhci1pbWFnZScpO1xuICAgICAgICAgICAgY2FySW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTIwJyk7XG4gICAgICAgICAgICBjYXJJbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnNjAnKTtcbiAgICAgICAgICAgIGNhckltZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICBjYXJJbWcuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgICAgIGNhckltZy5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgICAgICBjYXJJbWcuc3R5bGUudHJhbnNpdGlvbiA9ICdsZWZ0IDBzIGxpbmVhcic7XG4gICAgICAgICAgICBjb25zdCBjYXJCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdyZWN0Jyk7XG4gICAgICAgICAgICBjYXJCb2R5LnNldEF0dHJpYnV0ZSgneCcsICcyMCcpO1xuICAgICAgICAgICAgY2FyQm9keS5zZXRBdHRyaWJ1dGUoJ3knLCAnMjAnKTtcbiAgICAgICAgICAgIGNhckJvZHkuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxNjAnKTtcbiAgICAgICAgICAgIGNhckJvZHkuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnNDAnKTtcbiAgICAgICAgICAgIGNhckJvZHkuc2V0QXR0cmlidXRlKCdyeCcsICcxMicpO1xuICAgICAgICAgICAgY2FyQm9keS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBjYXIuY29sb3IpO1xuICAgICAgICAgICAgY29uc3QgZnJvbnRXaGVlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnY2lyY2xlJyk7XG4gICAgICAgICAgICBmcm9udFdoZWVsLnNldEF0dHJpYnV0ZSgnY3gnLCAnNTAnKTtcbiAgICAgICAgICAgIGZyb250V2hlZWwuc2V0QXR0cmlidXRlKCdjeScsICc3MCcpO1xuICAgICAgICAgICAgZnJvbnRXaGVlbC5zZXRBdHRyaWJ1dGUoJ3InLCAnMTAnKTtcbiAgICAgICAgICAgIGZyb250V2hlZWwuc2V0QXR0cmlidXRlKCdmaWxsJywgJyMzMzMnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlYXJXaGVlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnY2lyY2xlJyk7XG4gICAgICAgICAgICByZWFyV2hlZWwuc2V0QXR0cmlidXRlKCdjeCcsICcxNTAnKTtcbiAgICAgICAgICAgIHJlYXJXaGVlbC5zZXRBdHRyaWJ1dGUoJ2N5JywgJzcwJyk7XG4gICAgICAgICAgICByZWFyV2hlZWwuc2V0QXR0cmlidXRlKCdyJywgJzEwJyk7XG4gICAgICAgICAgICByZWFyV2hlZWwuc2V0QXR0cmlidXRlKCdmaWxsJywgJyMzMzMnKTtcbiAgICAgICAgICAgIGNhckltZy5hcHBlbmRDaGlsZChjYXJCb2R5KTtcbiAgICAgICAgICAgIGNhckltZy5hcHBlbmRDaGlsZChmcm9udFdoZWVsKTtcbiAgICAgICAgICAgIGNhckltZy5hcHBlbmRDaGlsZChyZWFyV2hlZWwpO1xuICAgICAgICAgICAgY2FyVHJhY2suYXBwZW5kQ2hpbGQoY2FySW1nKTtcbiAgICAgICAgICAgIC8vIFNUQVJUIEVOR0lORVxuICAgICAgICAgICAgc3RhcnRCdG4ub25jbGljayA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3RvcEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdmVsb2NpdHksIGRpc3RhbmNlIH0gPSB5aWVsZCBzdGFydEVuZ2luZShjYXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gZGlzdGFuY2UgLyB2ZWxvY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgY2FySW1nLnN0eWxlLnRyYW5zaXRpb24gPSBgbGVmdCAke3RpbWV9bXMgbGluZWFyYDtcbiAgICAgICAgICAgICAgICAgICAgY2FySW1nLnN0eWxlLmxlZnQgPSAnY2FsYygxMDAlIC0gMTIwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZHJpdmUoY2FyLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYXIgJHtjYXIubmFtZX0gZmFpbGVkIHRvIGRyaXZlOmAsIGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBkcml2ZSBmYWlscywgcmVzZXQgYnV0dG9uIHN0YXRlc1xuICAgICAgICAgICAgICAgICAgICBzdG9wQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFNUT1AgRU5HSU5FXG4gICAgICAgICAgICBzdG9wQnRuLm9uY2xpY2sgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgc3RvcEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB5aWVsZCBzdG9wRW5naW5lKGNhci5pZCk7XG4gICAgICAgICAgICAgICAgY2FySW1nLnN0eWxlLnRyYW5zaXRpb24gPSAnbGVmdCAwLjNzIGVhc2Utb3V0JztcbiAgICAgICAgICAgICAgICBjYXJJbWcuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBFRElUXG4gICAgICAgICAgICBlZGl0QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSBjYXIubmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBjb2xvcklucHV0LnR5cGUgPSAnY29sb3InO1xuICAgICAgICAgICAgICAgIGNvbG9ySW5wdXQudmFsdWUgPSBjYXIuY29sb3I7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgICAgICAgICAgY2FyV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBjYXJXcmFwcGVyLmFwcGVuZChuYW1lSW5wdXQsIGNvbG9ySW5wdXQsIHNhdmVCdG4sIGNhbmNlbEJ0bik7XG4gICAgICAgICAgICAgICAgc2F2ZUJ0bi5vbmNsaWNrID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB1cGRhdGVDYXIoY2FyLmlkLCBuYW1lSW5wdXQudmFsdWUsIGNvbG9ySW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZyZXNoZWQgPSB5aWVsZCBjcmVhdGVDYXJMaXN0KHBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVwbGFjZVdpdGgocmVmcmVzaGVkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjYW5jZWxCdG4ub25jbGljayA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmcmVzaGVkID0geWllbGQgY3JlYXRlQ2FyTGlzdChwYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJlcGxhY2VXaXRoKHJlZnJlc2hlZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gREVMRVRFXG4gICAgICAgICAgICBkZWxldGVCdG4ub25jbGljayA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybShgRGVsZXRlIGNhciBcIiR7Y2FyLm5hbWV9XCI/YCkpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZGVsZXRlQ2FyKGNhci5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGRlbGV0ZVdpbm5lcihjYXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZyZXNoZWQgPSB5aWVsZCBjcmVhdGVDYXJMaXN0KHBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVwbGFjZVdpdGgocmVmcmVzaGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhckRpdi5hcHBlbmRDaGlsZChjYXJXcmFwcGVyKTtcbiAgICAgICAgICAgIGNhckRpdi5hcHBlbmRDaGlsZChjYXJUcmFjayk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyRGl2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBjcmVhdGVDYXIgfSBmcm9tICcuLi9hcGkvZ2FyYWdlJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJGb3JtKG9uQ2FyQ3JlYXRlZCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnY3JlYXRlLWNhci1mb3JtJztcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdDYXIgbmFtZSc7XG4gICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBjb25zdCBjb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb2xvcklucHV0LnR5cGUgPSAnY29sb3InO1xuICAgIGNvbG9ySW5wdXQudmFsdWUgPSAnIzAwMDAwMCc7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQ3JlYXRlIENhcic7XG4gICAgZm9ybS5hcHBlbmQobmFtZUlucHV0LCBjb2xvcklucHV0LCBzdWJtaXRCdG4pO1xuICAgIGZvcm0ub25zdWJtaXQgPSAoZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHlpZWxkIGNyZWF0ZUNhcihuYW1lSW5wdXQudmFsdWUsIGNvbG9ySW5wdXQudmFsdWUpO1xuICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgY29sb3JJbnB1dC52YWx1ZSA9ICcjMDAwMDAwJztcbiAgICAgICAgb25DYXJDcmVhdGVkKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm07XG59XG4iLCJpbXBvcnQgeyBnYXJhZ2VTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uKGN1cnJlbnRQYWdlLCBvblBhZ2VDaGFuZ2UsIHRvdGFsUGFnZXMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3BhZ2luYXRpb24nO1xuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcmV2QnRuLnRleHRDb250ZW50ID0gJ1ByZXYnO1xuICAgIHByZXZCdG4uZGlzYWJsZWQgPSBjdXJyZW50UGFnZSA9PT0gMTtcbiAgICBwcmV2QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhZ2UgPSBjdXJyZW50UGFnZSAtIDE7XG4gICAgICAgIGdhcmFnZVN0YXRlLmN1cnJlbnRQYWdlID0gbmV3UGFnZTtcbiAgICAgICAgb25QYWdlQ2hhbmdlKG5ld1BhZ2UpO1xuICAgIH07XG4gICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5leHRCdG4udGV4dENvbnRlbnQgPSAnTmV4dCc7XG4gICAgbmV4dEJ0bi5kaXNhYmxlZCA9IGN1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzO1xuICAgIG5leHRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFnZSA9IGN1cnJlbnRQYWdlICsgMTtcbiAgICAgICAgZ2FyYWdlU3RhdGUuY3VycmVudFBhZ2UgPSBuZXdQYWdlO1xuICAgICAgICBvblBhZ2VDaGFuZ2UobmV3UGFnZSk7XG4gICAgfTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJldkJ0bik7XG4gICAgY29udGFpbmVyLmFwcGVuZChgIFBhZ2UgJHtjdXJyZW50UGFnZX0gb2YgJHt0b3RhbFBhZ2VzfSBgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV4dEJ0bik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBjb25zdCBnYXJhZ2VTdGF0ZSA9IHtcbiAgICBjdXJyZW50UGFnZTogMSxcbn07XG5leHBvcnQgY29uc3Qgd2lubmVyc1N0YXRlID0ge1xuICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgIHNvcnRCeTogJ3dpbnMnLFxuICAgIHNvcnRPcmRlcjogJ0RFU0MnLFxufTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBjcmVhdGVDYXIgfSBmcm9tICcuLi9hcGkvZ2FyYWdlJztcbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCkge1xuICAgIHJldHVybiBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCg2LCAnMCcpfWA7XG59XG5mdW5jdGlvbiBnZXRSYW5kb21OYW1lKCkge1xuICAgIGNvbnN0IGJyYW5kcyA9IFsnVGVzbGEnLCAnQk1XJywgJ0ZvcmQnLCAnQXVkaScsICdIb25kYScsICdDaGV2eScsICdNYXpkYScsICdLaWEnLCAnTGV4dXMnLCAnTmlzc2FuJ107XG4gICAgY29uc3QgbW9kZWxzID0gWydNb2RlbCBTJywgJ1g1JywgJ011c3RhbmcnLCAnQTQnLCAnQ2l2aWMnLCAnQ2FtYXJvJywgJ0NYLTUnLCAnU3BvcnRhZ2UnLCAnUlgnLCAnQWx0aW1hJ107XG4gICAgY29uc3QgYnJhbmQgPSBicmFuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYnJhbmRzLmxlbmd0aCldO1xuICAgIGNvbnN0IG1vZGVsID0gbW9kZWxzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vZGVscy5sZW5ndGgpXTtcbiAgICByZXR1cm4gYCR7YnJhbmR9ICR7bW9kZWx9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUNhcnMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGdldFJhbmRvbU5hbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gZ2V0UmFuZG9tQ29sb3IoKTtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goY3JlYXRlQ2FyKG5hbWUsIGNvbG9yKSk7XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBjcmVhdGVDYXJMaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJzJztcbmltcG9ydCB7IGNyZWF0ZVBhZ2luYXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlQ2FyRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlQ2FyRm9ybSc7XG5pbXBvcnQgeyBzdGFydEVuZ2luZSwgc3RvcEVuZ2luZSwgZHJpdmUgfSBmcm9tICcuLi9hcGkvZW5naW5lJztcbmltcG9ydCB7IGdldENhcnMsIGdldFRvdGFsQ2FycyB9IGZyb20gJy4uL2FwaS9nYXJhZ2UnO1xuaW1wb3J0IHsgZ2V0V2lubmVyLCBjcmVhdGVXaW5uZXIsIHVwZGF0ZVdpbm5lciB9IGZyb20gJy4uL2FwaS93aW5uZXJzJztcbmltcG9ydCB7IGdhcmFnZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21DYXJzIH0gZnJvbSAnLi4vdXRpbHMvY2FyR2VuZXJhdG9yJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYXJhZ2VWaWV3KCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy5jbGFzc05hbWUgPSAnZ2FyYWdlLXRpdGxlJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwYWdpbmF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udHJvbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250cm9sc0NvbnRhaW5lci5jbGFzc05hbWUgPSAncmFjZS1jb250cm9scyc7XG4gICAgbGV0IGN1cnJlbnRQYWdlID0gZ2FyYWdlU3RhdGUuY3VycmVudFBhZ2U7XG4gICAgY29uc3QgZ2VuZXJhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBnZW5lcmF0ZUJ0bi50ZXh0Q29udGVudCA9ICdHZW5lcmF0ZSBDYXJzICgxMDApJztcbiAgICBjb25zdCB3aW5uZXJCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5uZXJCYW5uZXIuY2xhc3NOYW1lID0gJ3dpbm5lci1iYW5uZXInO1xuICAgIGNvbnN0IHJhY2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByYWNlQnRuLnRleHRDb250ZW50ID0gJ1JhY2UnO1xuICAgIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSAnUmVzZXQnO1xuICAgIHJlc2V0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByYWNlQnRuLm9uY2xpY2sgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJhY2VCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICByZXNldEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB3aW5uZXJCYW5uZXIudGV4dENvbnRlbnQgPSAn4o+x77iPIFJhY2luZy4uLic7XG4gICAgICAgIGNvbnN0IGNhcnMgPSB5aWVsZCBnZXRDYXJzKGN1cnJlbnRQYWdlLCA3KTtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChjYXJzLm1hcCgoY2FyKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXItdHJhY2tbZGF0YS1pZD1cIiR7Y2FyLmlkfVwiXWApO1xuICAgICAgICAgICAgY29uc3QgY2FyU3ZnID0gdHJhY2sgPT09IG51bGwgfHwgdHJhY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRyYWNrLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuICAgICAgICAgICAgaWYgKCFjYXJTdmcpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHZlbG9jaXR5LCBkaXN0YW5jZSB9ID0geWllbGQgc3RhcnRFbmdpbmUoY2FyLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBleHBlY3RlZFRpbWUgPSBkaXN0YW5jZSAvIHZlbG9jaXR5O1xuICAgICAgICAgICAgICAgIGNhclN2Zy5zdHlsZS50cmFuc2l0aW9uID0gYGxlZnQgJHtleHBlY3RlZFRpbWV9bXMgbGluZWFyYDtcbiAgICAgICAgICAgICAgICBjYXJTdmcuc3R5bGUubGVmdCA9ICdjYWxjKDEwMCUgLSAxMjBweCknO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgZHJpdmUoY2FyLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGNhclN2Zy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4gcmVzb2x2ZSgpLCB7IG9uY2U6IHRydWUgfSkpLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogY2FyLmlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjYXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogZW5kVGltZSAtIHN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg4p2MICR7Y2FyLm5hbWV9IGZhaWxlZGApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkTGVmdCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNhclN2ZykubGVmdDtcbiAgICAgICAgICAgICAgICBjYXJTdmcuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgICAgICAgICBjYXJTdmcuc3R5bGUubGVmdCA9IGNvbXB1dGVkTGVmdDtcbiAgICAgICAgICAgICAgICB5aWVsZCBzdG9wRW5naW5lKGNhci5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSk7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgd2lubmVyQmFubmVyLnRleHRDb250ZW50ID0gJ/CfkqUgTm8gd2lubmVyISBBbGwgY2FycyBicm9rZS4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgd2lubmVyID0gcmVzdWx0cy5yZWR1Y2UoKGJlc3QsIGN1cnIpID0+IGN1cnIudGltZSA8IGJlc3QudGltZSA/IGN1cnIgOiBiZXN0KTtcbiAgICAgICAgICAgIHdpbm5lckJhbm5lci50ZXh0Q29udGVudCA9IGDwn4+GICR7d2lubmVyLm5hbWV9IHdpbnMgaW4gJHsod2lubmVyLnRpbWUgLyAxMDAwKS50b0ZpeGVkKDIpfXMhYDtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0geWllbGQgZ2V0V2lubmVyKHdpbm5lci5pZCk7XG4gICAgICAgICAgICBjb25zdCBiZXN0VGltZSA9IGV4aXN0aW5nID8gTWF0aC5taW4od2lubmVyLnRpbWUsIGV4aXN0aW5nLnRpbWUpIDogd2lubmVyLnRpbWU7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB1cGRhdGVXaW5uZXIod2lubmVyLmlkLCBleGlzdGluZy53aW5zICsgMSwgYmVzdFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeWllbGQgY3JlYXRlV2lubmVyKHdpbm5lci5pZCwgd2lubmVyLnRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmVzZXRCdG4ub25jbGljayA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdHJhY2tzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLXRyYWNrJykpO1xuICAgICAgICB5aWVsZCBQcm9taXNlLmFsbCh0cmFja3MubWFwKCh0cmFjaykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSArdHJhY2suZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IGNhclN2ZyA9IHRyYWNrID09PSBudWxsIHx8IHRyYWNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0cmFjay5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgICAgICAgICAgIGlmICghKGNhclN2ZyBpbnN0YW5jZW9mIFNWR1NWR0VsZW1lbnQpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHlpZWxkIHN0b3BFbmdpbmUoaWQpO1xuICAgICAgICAgICAgY2FyU3ZnLnN0eWxlLnRyYW5zaXRpb24gPSAnbGVmdCAwLjNzIGVhc2Utb3V0JztcbiAgICAgICAgICAgIGNhclN2Zy5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIH0pKSk7XG4gICAgICAgIHJhY2VCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmVzZXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB3aW5uZXJCYW5uZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICB9KTtcbiAgICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmQocmFjZUJ0biwgcmVzZXRCdG4sIHdpbm5lckJhbm5lcik7XG4gICAgY29uc3QgcmVuZGVyUGFnZSA9IChwYWdlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGdhcmFnZVN0YXRlLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICAgICAgY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgICBjYXJDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHBhZ2luYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGNhckxpc3QgPSB5aWVsZCBjcmVhdGVDYXJMaXN0KHBhZ2UpO1xuICAgICAgICBjYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyTGlzdCk7XG4gICAgICAgIGNvbnN0IHRvdGFsQ2FycyA9IHlpZWxkIGdldFRvdGFsQ2FycygpO1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsQ2FycyAvIDcpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYEdhcmFnZSAoJHt0b3RhbENhcnN9IGNhcnMpYDtcbiAgICAgICAgcGFnaW5hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQYWdpbmF0aW9uKHBhZ2UsIHJlbmRlclBhZ2UsIHRvdGFsUGFnZXMpKTtcbiAgICB9KTtcbiAgICBnZW5lcmF0ZUJ0bi5vbmNsaWNrID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBnZW5lcmF0ZVJhbmRvbUNhcnMoKTtcbiAgICAgICAgY29uc3QgdG90YWwgPSB5aWVsZCBnZXRUb3RhbENhcnMoKTtcbiAgICAgICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbCAvIDcpO1xuICAgICAgICBjdXJyZW50UGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgIHlpZWxkIHJlbmRlclBhZ2UoY3VycmVudFBhZ2UpO1xuICAgIH0pO1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVDYXJGb3JtKCgpID0+IHJlbmRlclBhZ2UoY3VycmVudFBhZ2UpKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVCdG4pO1xuICAgIHJlbmRlclBhZ2UoY3VycmVudFBhZ2UpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChwYWdpbmF0aW9uQ29udGFpbmVyKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNhckNvbnRhaW5lcik7XG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldFdpbm5lcnNXaXRoQ2FycyB9IGZyb20gJy4uL2FwaS93aW5uZXJzJztcbmltcG9ydCB7IGNyZWF0ZVBhZ2luYXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xubGV0IHNvcnRCeSA9ICd3aW5zJztcbmxldCBzb3J0T3JkZXIgPSAnREVTQyc7XG5sZXQgY3VycmVudFBhZ2UgPSAxO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdpbm5lcnNWaWV3KCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLmNsYXNzTmFtZSA9ICd3aW5uZXJzLXRpdGxlJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YWJsZS5jbGFzc05hbWUgPSAnd2lubmVycy10YWJsZSc7XG4gICAgY29uc3QgaGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBoZWFkZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgIDx0aD4jPC90aD5cbiAgICA8dGg+Q2FyPC90aD5cbiAgICA8dGg+TmFtZTwvdGg+XG4gICAgPHRoIGlkPVwic29ydC13aW5zXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCI+V2lucyDirIc8L3RoPlxuICAgIDx0aCBpZD1cInNvcnQtdGltZVwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPkJlc3QgVGltZSAocyk8L3RoPlxuICBgO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XG4gICAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcbiAgICBjb25zdCBwYWdpbmF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnVuY3Rpb24gcmVuZGVyUGFnZShwYWdlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB0Ym9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHBhZ2luYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb25zdCB7IHdpbm5lcnMsIHRvdGFsIH0gPSB5aWVsZCBnZXRXaW5uZXJzV2l0aENhcnMocGFnZSwgNywgc29ydEJ5LCBzb3J0T3JkZXIpO1xuICAgICAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IGDwn4+BIFdpbm5lcnMgKCR7dG90YWx9KWA7XG4gICAgICAgICAgICB3aW5uZXJzLmZvckVhY2goKHdpbm5lciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhclNWRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgICAgICAgICAgICAgY2FyU1ZHLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjAwIDEwMCcpO1xuICAgICAgICAgICAgICAgIGNhclNWRy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzYwJyk7XG4gICAgICAgICAgICAgICAgY2FyU1ZHLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzMwJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncmVjdCcpO1xuICAgICAgICAgICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCd4JywgJzIwJyk7XG4gICAgICAgICAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ3knLCAnMjAnKTtcbiAgICAgICAgICAgICAgICBib2R5LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTYwJyk7XG4gICAgICAgICAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICc0MCcpO1xuICAgICAgICAgICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdyeCcsICcxMicpO1xuICAgICAgICAgICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdmaWxsJywgd2lubmVyLmNvbG9yKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aGVlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2NpcmNsZScpO1xuICAgICAgICAgICAgICAgIHdoZWVsMS5zZXRBdHRyaWJ1dGUoJ2N4JywgJzUwJyk7XG4gICAgICAgICAgICAgICAgd2hlZWwxLnNldEF0dHJpYnV0ZSgnY3knLCAnNzAnKTtcbiAgICAgICAgICAgICAgICB3aGVlbDEuc2V0QXR0cmlidXRlKCdyJywgJzEwJyk7XG4gICAgICAgICAgICAgICAgd2hlZWwxLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjMzMzJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2hlZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdjaXJjbGUnKTtcbiAgICAgICAgICAgICAgICB3aGVlbDIuc2V0QXR0cmlidXRlKCdjeCcsICcxNTAnKTtcbiAgICAgICAgICAgICAgICB3aGVlbDIuc2V0QXR0cmlidXRlKCdjeScsICc3MCcpO1xuICAgICAgICAgICAgICAgIHdoZWVsMi5zZXRBdHRyaWJ1dGUoJ3InLCAnMTAnKTtcbiAgICAgICAgICAgICAgICB3aGVlbDIuc2V0QXR0cmlidXRlKCdmaWxsJywgJyMzMzMnKTtcbiAgICAgICAgICAgICAgICBjYXJTVkcuYXBwZW5kKGJvZHksIHdoZWVsMSwgd2hlZWwyKTtcbiAgICAgICAgICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICA8dGQ+JHsocGFnZSAtIDEpICogNyArIGluZGV4ICsgMX08L3RkPlxuICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgPHRkPiR7d2lubmVyLm5hbWV9PC90ZD5cbiAgICAgICAgPHRkPiR7d2lubmVyLndpbnN9PC90ZD5cbiAgICAgICAgPHRkPiR7KHdpbm5lci50aW1lIC8gMTAwMCkudG9GaXhlZCgyKX08L3RkPlxuICAgICAgYDtcbiAgICAgICAgICAgICAgICByb3cuY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQoY2FyU1ZHKTtcbiAgICAgICAgICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwYWdpbmF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2luYXRpb24ocGFnZSwgcmVuZGVyUGFnZSwgTWF0aC5jZWlsKHRvdGFsIC8gNykpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocGFnaW5hdGlvbkNvbnRhaW5lcik7XG4gICAgKF9hID0gdGFibGUucXVlcnlTZWxlY3RvcignI3NvcnQtd2lucycpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNvcnRCeSA9ICd3aW5zJztcbiAgICAgICAgc29ydE9yZGVyID0gc29ydE9yZGVyID09PSAnQVNDJyA/ICdERVNDJyA6ICdBU0MnO1xuICAgICAgICByZW5kZXJQYWdlKDEpO1xuICAgIH0pO1xuICAgIChfYiA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LXRpbWUnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzb3J0QnkgPSAndGltZSc7XG4gICAgICAgIHNvcnRPcmRlciA9IHNvcnRPcmRlciA9PT0gJ0FTQycgPyAnREVTQycgOiAnQVNDJztcbiAgICAgICAgcmVuZGVyUGFnZSgxKTtcbiAgICB9KTtcbiAgICByZW5kZXJQYWdlKGN1cnJlbnRQYWdlKTtcbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyQXBwIH0gZnJvbSAnLi9hcHAnO1xucmVuZGVyQXBwKCk7XG5jb25zb2xlLmxvZyhcIvCfmoAgaW5kZXgudHMgbG9hZGVkXCIpO1xuY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xucmVuZGVyQXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=