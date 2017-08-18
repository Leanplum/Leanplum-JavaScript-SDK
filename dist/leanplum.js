(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Leanplum"] = factory();
	else
		root["Leanplum"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Constants = mod.exports;
  }
})(this, function (module) {
  'use strict';

  /*
   *
   *  Copyright 2017 Leanplum Inc. All rights reserved.
   *
   *  Licensed under the Apache License, Version 2.0 (the "License");
   *  you may not use this file except in compliance with the License.
   *  You may obtain a copy of the License at
   *
   *      https://www.apache.org/licenses/LICENSE-2.0
   *
   *  Unless required by applicable law or agreed to in writing, software
   *  distributed under the License is distributed on an "AS IS" BASIS,
   *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *  See the License for the specific language governing permissions and
   *  limitations under the License
   *
   */
  module.exports = {
    METHODS: {
      START: 'start',
      STOP: 'stop',
      ADVANCE: 'advance',
      TRACK: 'track',
      PAUSE_SESSION: 'pauseSession',
      RESUME_SESSION: 'resumeSession',
      PAUSE_STATE: 'pauseState',
      RESUME_STATE: 'resumeState',
      DOWNLOAD_FILE: 'downloadFile',
      MULTI: 'multi',
      SET_VARS: 'setVars',
      GET_VARS: 'getVars',
      SET_USER_ATTRIBUTES: 'setUserAttributes',
      SET_DEVICE_ATTRIBUTES: 'setDeviceAttributes',
      UPLOAD_FILE: 'uploadFile',
      REGISTER_DEVICE: 'registerDevice'
    },

    SDK_VERSION: '1.2.3',

    CLIENT: 'js',

    PARAMS: {
      ACTION: 'action',
      APP_ID: 'appId',
      CLIENT: 'client',
      CLIENT_KEY: 'clientKey',
      DEVICE_ID: 'deviceId',
      SDK_VERSION: 'sdkVersion',
      USER_ID: 'userId',
      NEW_USER_ID: 'newUserId',
      DEV_MODE: 'devMode',
      VERSION_NAME: 'versionName',
      SYSTEM_NAME: 'systemName',
      SYSTEM_VERSION: 'systemVersion',
      BROWSER_NAME: 'browserName',
      BROWSER_VERSION: 'browserVersion',
      DEVICE_NAME: 'deviceName',
      DEVICE_MODEL: 'deviceModel',
      USER_ATTRIBUTES: 'userAttributes',
      LOCALE: 'locale',
      COUNTRY: 'country',
      REGION: 'region',
      CITY: 'city',
      LOCATION: 'location',
      STATE: 'state',
      INFO: 'info',
      EVENT: 'event',
      VALUE: 'value',
      FILENAME: 'filename',
      TIME: 'time',
      DATA: 'data',
      VARS: 'vars',
      FILE: 'file',
      SIZE: 'size',
      VARIATION: 'variation',
      HASH: 'hash',
      EMAIL: 'email',
      VARIABLES: 'vars',
      PARAMS: 'params',
      INCLUDE_DEFAULTS: 'includeDefaults',
      WEB_PUSH_SUBSCRIPTION: 'webPushSubscription'
    },

    KEYS: {
      IS_REGISTERED: 'isRegistered',
      LATEST_VERSION: 'latestVersion',
      VARS: 'vars',
      VARIANTS: 'variants',
      ACTION_METADATA: 'actionMetadata',
      TOKEN: 'token'
    },

    DEFAULT_KEYS: {
      COUNT: '__leanplum_unsynced',
      ITEM: '__leanplum_unsynced_',
      VARIABLES: '__leanplum_variables',
      VARIANTS: '__leanplum_variants',
      ACTION_METADATA: '__leanplum_action_metadata',
      TOKEN: '__leanplum_token',
      DEVICE_ID: '__leanplum_device_id',
      USER_ID: '__leanplum_user_id',
      PUSH_SUBSCRIPTION: '__leanplum_push_subscription'
    },

    VALUES: {
      DETECT: '(detect)'
    }
  };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Request = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _requestQueue = [];
  var _networkTimeoutSeconds = 10;

  /**
   * Ajax functions from:
   *
   * Parse JavaScript SDK
   * Version: 1.1.5
   * Built: Mon Oct 01 2012 17:57:13
   * http://parse.com
   *
   * Copyright 2012 Parse, Inc.
   * The Parse JavaScript SDK is freely distributable under the MIT license.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
   * DEALINGS IN THE SOFTWARE.
   */

  var Request = function () {
    function Request() {
      _classCallCheck(this, Request);
    }

    _createClass(Request, null, [{
      key: 'setNetworkTimeout',
      value: function setNetworkTimeout(seconds) {
        _networkTimeoutSeconds = seconds;
      }
    }, {
      key: 'ajax',
      value: function ajax(method, url, data, success, error, queued, plainText) {
        if (queued) {
          if (Request._runningRequest) {
            // eslint-disable-next-line prefer-rest-params
            return Request._enqueueRequest(arguments);
          }
          Request._runningRequest = true;
        }

        if (typeof XDomainRequest !== 'undefined') {
          if (location.protocol === 'http:' && url.indexOf('https:') == 0) {
            url = 'http:' + url.substring(6);
          }
          // eslint-disable-next-line prefer-rest-params
          return Request._ajaxIE8.apply(null, arguments);
        }

        var handled = false;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (handled) {
              return;
            }
            handled = true;

            var response = void 0;
            var ranCallback = false;
            if (plainText) {
              response = xhr.responseText;
            } else {
              try {
                response = JSON.parse(xhr.responseText);
              } catch (e) {
                setTimeout(function () {
                  if (error) {
                    error(null, xhr);
                  }
                }, 0);
                ranCallback = true;
              }
            }

            if (!ranCallback) {
              if (xhr.status >= 200 && xhr.status < 300) {
                setTimeout(function () {
                  if (success) {
                    success(response, xhr);
                  }
                }, 0);
              } else {
                setTimeout(function () {
                  if (error) {
                    error(response, xhr);
                  }
                }, 0);
              }
            }

            if (queued) {
              Request._runningRequest = false;
              Request._dequeueRequest();
            }
          }
        };
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'text/plain'); // Avoid pre-flight.
        xhr.send(data);
        setTimeout(function () {
          if (!handled) {
            xhr.abort();
          }
        }, _networkTimeoutSeconds * 1000);
      }
    }, {
      key: '_ajaxIE8',
      value: function _ajaxIE8(method, url, data, success, error, queued, plainText) {
        var xdr = new XDomainRequest();
        xdr.onload = function () {
          var response = void 0;
          var ranCallback = false;
          if (plainText) {
            response = xdr.responseText;
          } else {
            try {
              response = JSON.parse(xdr.responseText);
            } catch (e) {
              setTimeout(function () {
                if (error) {
                  error(null, xdr);
                }
              }, 0);
              ranCallback = true;
            }
          }
          if (!ranCallback) {
            setTimeout(function () {
              if (success) {
                success(response, xdr);
              }
            }, 0);
          }
          if (queued) {
            Request._runningRequest = false;
            Request._dequeueRequest();
          }
        };
        xdr.onerror = xdr.ontimeout = function () {
          setTimeout(function () {
            if (error) {
              error(null, xdr);
            }
          }, 0);
          if (queued) {
            Request._runningRequest = false;
            Request._dequeueRequest();
          }
        };
        xdr.onprogress = function () {};
        xdr.open(method, url);
        xdr.timeout = _networkTimeoutSeconds * 1000;
        xdr.send(data);
      }
    }, {
      key: '_enqueueRequest',
      value: function _enqueueRequest(args) {
        _requestQueue.push(args);
      }
    }, {
      key: '_dequeueRequest',
      value: function _dequeueRequest() {
        var args = _requestQueue.shift();
        if (args) {
          Request.ajax.apply(null, args);
        }
      }
    }]);

    return Request;
  }();

  module.exports = Request;
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.underscore = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  //     Underscore.js 1.4.2
  //     http://underscorejs.org
  //     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
  //     Underscore may be freely distributed under the MIT license.
  //       
  // Internal recursive comparison function for `isEqual`.
  function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal:
    // http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = Object.prototype.toString.call(a);
    if (className != Object.prototype.toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent;
        // thus, `"5"` is equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is
        // performed for other numeric values.
        return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are
        // compared by their millisecond representations. Note that invalid
        // dates with millisecond representations of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
    }
    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation
    // `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0;
    var result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor;
      var bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor)) {
        return false;
      }
      // Deep compare objects.
      for (var _key in a) {
        if (_.has(a, _key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, _key) && eq(a[_key], b[_key], aStack, bStack))) {
            break;
          }
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !size--) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  var _ = function () {
    function _() {
      _classCallCheck(this, _);
    }

    _createClass(_, null, [{
      key: 'iextend',
      value: function iextend(obj) {
        // eslint-disable-next-line prefer-rest-params
        each(slice.call(arguments, 1), function (source) {
          for (var prop in source) {
            if ({}.hasOwnProperty.call(source, prop)) {
              obj[prop] = source[prop];
            }
          }
        });
        return obj;
      }
    }, {
      key: 'isFunction',
      value: function isFunction(obj) {
        return typeof obj === 'function';
      }
    }, {
      key: 'has',
      value: function has(obj, key) {
        return hasOwnProperty.call(obj, key);
      }
    }, {
      key: 'isEqual',
      value: function isEqual(a, b) {
        return eq(a, b, [], []);
      }
    }]);

    return _;
  }();

  exports.default = _;
  module.exports = exports['default'];
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Constants'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Constants);
    global.ArgsBuilder = mod.exports;
  }
})(this, function (module, _Constants) {
  'use strict';

  var _Constants2 = _interopRequireDefault(_Constants);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var ArgsBuilder = function () {
    /**
     * Create a new empty request argument.
     */
    function ArgsBuilder() {
      _classCallCheck(this, ArgsBuilder);

      this.argString = '';
      this.argValues = {};
    }

    /**
     * Add given key, value to the payload.
     * @param {string} key The key for the value.
     * @param {string} value The value for given key.
     * @return {ArgsBuilder} Returns an object of ArgsBuilder.
     */


    _createClass(ArgsBuilder, [{
      key: 'add',
      value: function add(key, value) {
        if (typeof value === 'undefined') {
          return this;
        }
        if (this.argString) {
          this.argString += '&';
        }
        this.argString += key + '=' + encodeURIComponent(value);
        this.argValues[key] = value;
        return this;
      }
    }, {
      key: 'body',
      value: function body(_body) {
        if (_body) {
          this._body = _body;
          return this;
        }
        return this._body;
      }
    }, {
      key: 'attachApiKeys',
      value: function attachApiKeys(appId, clientKey) {
        return this.add(_Constants2.default.PARAMS.APP_ID, appId).add(_Constants2.default.PARAMS.CLIENT, _Constants2.default.CLIENT).add(_Constants2.default.PARAMS.CLIENT_KEY, clientKey);
      }
    }, {
      key: 'build',
      value: function build() {
        return this.argString;
      }
    }, {
      key: 'buildDict',
      value: function buildDict() {
        return this.argValues;
      }
    }]);

    return ArgsBuilder;
  }();

  ;

  module.exports = ArgsBuilder;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.BrowserDetector = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  /*
   *
   *  Copyright 2017 Leanplum Inc. All rights reserved.
   *
   *  Licensed under the Apache License, Version 2.0 (the "License");
   *  you may not use this file except in compliance with the License.
   *  You may obtain a copy of the License at
   *
   *      https://www.apache.org/licenses/LICENSE-2.0
   *
   *  Unless required by applicable law or agreed to in writing, software
   *  distributed under the License is distributed on an "AS IS" BASIS,
   *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *  See the License for the specific language governing permissions and
   *  limitations under the License
   *
   */
  var dataBrowser = [{
    string: navigator.userAgent,
    subString: 'Chrome',
    identity: 'Chrome'
  }, {
    string: navigator.userAgent,
    subString: 'OmniWeb',
    versionSearch: 'OmniWeb/',
    identity: 'OmniWeb'
  }, {
    string: navigator.vendor,
    subString: 'Apple',
    identity: 'Safari',
    versionSearch: 'Version'
  }, {
    prop: window.opera,
    identity: 'Opera',
    versionSearch: 'Version'
  }, {
    string: navigator.vendor,
    subString: 'iCab',
    identity: 'iCab'
  }, {
    string: navigator.vendor,
    subString: 'KDE',
    identity: 'Konqueror'
  }, {
    string: navigator.userAgent,
    subString: 'Firefox',
    identity: 'Firefox'
  }, {
    string: navigator.vendor,
    subString: 'Camino',
    identity: 'Camino'
  }, { // for newer Netscapes (6+)
    string: navigator.userAgent,
    subString: 'Netscape',
    identity: 'Netscape'
  }, {
    string: navigator.userAgent,
    subString: 'MSIE',
    identity: 'Explorer',
    versionSearch: 'MSIE'
  }, {
    string: navigator.userAgent,
    subString: 'Gecko',
    identity: 'Mozilla',
    versionSearch: 'rv'
  }, { // for older Netscapes (4-)
    string: navigator.userAgent,
    subString: 'Mozilla',
    identity: 'Netscape',
    versionSearch: 'Mozilla'
  }];

  var dataOS = [{
    string: navigator.platform,
    subString: 'Win',
    identity: 'Windows'
  }, {
    string: navigator.platform,
    subString: 'Mac',
    identity: 'Mac OS'
  }, {
    string: navigator.userAgent,
    subString: 'iPhone',
    identity: 'iOS'
  }, {
    string: navigator.platform,
    subString: 'Linux',
    identity: 'Linux'
  }];

  // Browser detection. Source: http://www.quirksmode.org/js/detect.html

  var BrowserDetector = function () {
    function BrowserDetector() {
      _classCallCheck(this, BrowserDetector);

      this.browser = this.searchString(dataBrowser) || 'An unknown browser';
      this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'an unknown version';
      this.OS = this.searchString(dataOS) || 'an unknown OS';
    }

    _createClass(BrowserDetector, [{
      key: 'searchString',
      value: function searchString(data) {
        for (var i = 0; i < data.length; i++) {
          var dataString = data[i].string;
          var dataProp = data[i].prop;
          this.versionSearchString = data[i].versionSearch || data[i].identity;
          if (dataString) {
            if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
          } else if (dataProp) return data[i].identity;
        }
      }
    }, {
      key: 'searchVersion',
      value: function searchVersion(dataString) {
        if (!dataString) {
          return;
        }
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) {
          return;
        }
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
      }
    }]);

    return BrowserDetector;
  }();

  module.exports = BrowserDetector;
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(2), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("./underscore"), require("./Constants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.underscore, global.Constants);
    global.PushManager = mod.exports;
  }
})(this, function (module, exports, _underscore, _Constants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _underscore2 = _interopRequireDefault(_underscore);

  var _Constants2 = _interopRequireDefault(_Constants);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var APPLICATION_SERVER_PUBLIC_KEY = 'BInWPpWntfR39rgXSP04pqdmEdDGa50z6zqbMvxyxJCwzXIuSpSh8C888-CfJ82WELl7Xe8cjA' + 'nfCt-3vK0Ci68';

  var self = void 0;
  var _leanplum = void 0;
  var isSupported = false;
  var isSubscribed = false;
  var serviceWorkerRegistration = null;

  /**
   * Push Manager handles the registration and subscription for web push.
   */

  var PushManager = function () {
    /**
     * Creates a new PushManager object.
     * @param  {[type]} leanplum Reference to the main class to
     *                           avoid circle import.
     */
    function PushManager(leanplum) {
      _classCallCheck(this, PushManager);

      _leanplum = leanplum;
      self = this;
      if (navigator && navigator.serviceWorker && 'serviceWorker' in navigator && 'PushManager' in window) {
        isSupported = true;
        self.register();
      }
    }

    /**
     * Whether or not web push is supported in the browser.
     * @return {Boolean} True if supported, else false.
     */


    _createClass(PushManager, [{
      key: "isWebPushSupported",
      value: function isWebPushSupported() {
        return isSupported;
      }
    }, {
      key: "isWebPushSubscribed",
      value: function isWebPushSubscribed() {
        if (!isSupported) {
          return new Promise(function (resolve, reject) {
            reject('Leanplum: Push messaging is not supported.');
          });
        }
        return this._getServiceWorkerRegistration().then(function (registration) {
          return new Promise(function (resolve) {
            if (!registration) {
              resolve(false);
            } else {
              registration.pushManager.getSubscription().then(function (subscription) {
                isSubscribed = subscription !== null;
                if (isSubscribed) {
                  self._updateNewSubscriptionOnServer(subscription);
                }
                resolve(isSubscribed);
              });
            }
          });
        });
      }
    }, {
      key: "register",
      value: function register(serviceWorkerUrl, callback) {
        if (!isSupported) {
          console.log('Leanplum: Push messaging is not supported.');
          callback(false);
        }
        navigator.serviceWorker.register(serviceWorkerUrl ? serviceWorkerUrl : '/sw.min.js').then(function (registration) {
          serviceWorkerRegistration = registration;

          // Set the initial subscription value
          serviceWorkerRegistration.pushManager.getSubscription().then(function (subscription) {
            isSubscribed = !(subscription === null);
            if (isSubscribed) {
              self._updateNewSubscriptionOnServer(subscription);
            }
            if (callback) {
              callback(isSubscribed);
            }
          });
        }).catch(function (error) {
          console.log('Leanplum: Service Worker Error: ', error);
        });
      }
    }, {
      key: "subscribeUser",
      value: function subscribeUser() {
        var applicationServerKey = this._urlB64ToUint8Array(APPLICATION_SERVER_PUBLIC_KEY);
        return new Promise(function (resolve, reject) {
          return serviceWorkerRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerKey
          }).then(function (subscription) {
            if (subscription) {
              self._updateNewSubscriptionOnServer(subscription);
              isSubscribed = true;
              return resolve(isSubscribed);
            }
            isSubscribed = false;
            return reject();
          }).catch(function (err) {
            return reject('Leanplum: Failed to subscribe the user: ' + err);
          });
        });
      }
    }, {
      key: "unsubscribeUser",
      value: function unsubscribeUser() {
        return new Promise(function (resolve, reject) {
          serviceWorkerRegistration.pushManager.getSubscription().then(function (subscription) {
            if (subscription) {
              return subscription.unsubscribe();
            }
            return reject();
          }).catch(function (error) {
            reject('Leanplum: Error unsubscribing: ' + error);
          }).then(function (success) {
            if (success) {
              isSubscribed = false;
              return resolve();
            }
            return reject();
          });
        });
      }
    }, {
      key: "_getServiceWorkerRegistration",
      value: function _getServiceWorkerRegistration() {
        return new Promise(function (resolve) {
          if (serviceWorkerRegistration) {
            resolve(serviceWorkerRegistration);
          } else {
            navigator.serviceWorker.getRegistration().then(function (registration) {
              resolve(registration);
            });
          }
        });
      }
    }, {
      key: "_urlB64ToUint8Array",
      value: function _urlB64ToUint8Array(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
      }
    }, {
      key: "_prepareSubscription",
      value: function _prepareSubscription(subscription) {
        var key = subscription.getKey ? subscription.getKey('p256dh') : '';
        var auth = subscription.getKey ? subscription.getKey('auth') : '';
        var keyAscii = btoa(String.fromCharCode.apply(null, new Uint8Array(key)));
        var authAscii = btoa(String.fromCharCode.apply(null, new Uint8Array(auth)));
        return {
          endpoint: subscription.endpoint,
          key: keyAscii,
          auth: authAscii
        };
      }
    }, {
      key: "_updateNewSubscriptionOnServer",
      value: function _updateNewSubscriptionOnServer(subscription) {
        if (subscription) {
          var preparedSubscription = this._prepareSubscription(subscription);
          var preparedSubscriptionString = JSON.stringify(preparedSubscription);
          var existingSubscriptionString = _leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.PUSH_SUBSCRIPTION);
          if (!_underscore2.default.isEqual(existingSubscriptionString, preparedSubscriptionString)) {
            _leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.PUSH_SUBSCRIPTION, preparedSubscriptionString);
            _leanplum._setSubscription(preparedSubscriptionString);
          }
        }
      }
    }]);

    return PushManager;
  }();

  exports.default = PushManager;
  module.exports = exports["default"];
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Request'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Request);
    global.SocketIoClient = mod.exports;
  }
})(this, function (module, _Request) {
  'use strict';

  var _Request2 = _interopRequireDefault(_Request);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var SocketIoClient = function () {
    /**
     * Initializes a new SocketIoClient, not connected by default.
     */
    function SocketIoClient() {
      _classCallCheck(this, SocketIoClient);

      this.connected = false;
      this.connecting = false;
    }

    /**
     * Connects to the given socketHost.
     * @param  {string} socketHost The host to connect to.
     */


    _createClass(SocketIoClient, [{
      key: 'connect',
      value: function connect(socketHost) {
        var self = this;
        self.connecting = true;
        _Request2.default.ajax('POST', 'https://' + socketHost + '/socket.io/1', '', function (line) {
          var parts = line.split(':');
          var session = parts[0];
          var heartbeat = parseInt(parts[1]) / 2 * 1000;
          self.socket = new WebSocket('wss://' + socketHost + '/socket.io/1/websocket/' + session);
          var heartbeatInterval = null;
          self.socket.onopen = function () {
            self.connected = true;
            self.connecting = false;
            if (self.onopen) {
              self.onopen();
            }
            heartbeatInterval = setInterval(function () {
              self.socket.send('2:::');
            }, heartbeat);
          };
          self.socket.onclose = function () {
            self.connected = false;
            clearInterval(heartbeatInterval);
            if (self.onclose) {
              self.onclose();
            }
          };
          self.socket.onmessage = function (event) {
            var parts = event.data.split(':');
            var code = parseInt(parts[0]);
            if (code == 2) {
              self.socket.send('2::');
            } else if (code == 5) {
              var messageId = parts[1];
              var data = JSON.parse(parts.slice(3).join(':'));
              var _event = data['name'];
              var args = data['args'];
              if (messageId) {
                self.socket.send('6:::' + messageId);
              }
              if (self.onmessage) {
                self.onmessage(_event, args);
              }
            } else if (code == 7) {
              console.log('Socket error: ' + event.data);
            }
          };
          self.socket.onerror = function (event) {
            self.socket.close();
            if (self.onerror) {
              self.onerror(event);
            }
          };
        }, null, false, true // nullm, queued, plainText
        );
      }
    }, {
      key: 'send',
      value: function send(name, args) {
        if (!this.connected) {
          console.log('Leanplum: Socket is not connected.');
          return;
        }
        this.socket.send('5:::' + JSON.stringify({
          'name': name,
          'args': args
        }));
      }
    }]);

    return SocketIoClient;
  }();

  module.exports = SocketIoClient;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(0), __webpack_require__(3), __webpack_require__(4), __webpack_require__(6), __webpack_require__(1), __webpack_require__(5), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, require("./Constants"), require("./ArgsBuilder"), require("./BrowserDetector"), require("./SocketIoClient"), require("./Request"), require("./PushManager"), require("./underscore.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Constants, global.ArgsBuilder, global.BrowserDetector, global.SocketIoClient, global.Request, global.PushManager, global.underscore);
    global.Leanplum = mod.exports;
  }
})(this, function (module, _Constants, _ArgsBuilder, _BrowserDetector, _SocketIoClient, _Request, _PushManager, _underscore) {
  "use strict";

  var _Constants2 = _interopRequireDefault(_Constants);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _BrowserDetector2 = _interopRequireDefault(_BrowserDetector);

  var _SocketIoClient2 = _interopRequireDefault(_SocketIoClient);

  var _Request2 = _interopRequireDefault(_Request);

  var _PushManager2 = _interopRequireDefault(_PushManager);

  var _underscore2 = _interopRequireDefault(_underscore);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _variablesChangedHandlers = [];
  var _variants = [];
  var _startHandlers = [];
  var _actionMetadata = {};
  var _token = '';
  var _batchEnabled = true;
  var _batchCooldown = 5;
  var _apiPath = 'https://www.leanplum.com/api';
  var _socketHost = 'dev.leanplum.com';
  var _localStorageEnabled = undefined;
  var _alternateLocalStorage = {};
  var _browserDetector = new _BrowserDetector2.default();

  /**
   * @preserve Leanplum Javascript SDK.
   * Copyright 2016, Leanplum, Inc. All rights reserved.
   *
   * You may not distribute this source code without prior written permission
   * from Leanplum.
   */

  var Leanplum = function () {
    function Leanplum() {
      _classCallCheck(this, Leanplum);
    }

    _createClass(Leanplum, null, [{
      key: "setApiPath",
      value: function setApiPath(apiPath) {
        if (!apiPath) {
          return;
        }
        _apiPath = apiPath;
      }
    }, {
      key: "setEmail",
      value: function setEmail(email) {
        Leanplum._email = email;
      }
    }, {
      key: "setNetworkTimeout",
      value: function setNetworkTimeout(seconds) {
        _Request2.default.setNetworkTimeout(seconds);
      }
    }, {
      key: "setAppIdForDevelopmentMode",
      value: function setAppIdForDevelopmentMode(appId, accessKey) {
        Leanplum._appId = appId;
        Leanplum._clientKey = accessKey;
        Leanplum._devMode = true;
      }
    }, {
      key: "setAppIdForProductionMode",
      value: function setAppIdForProductionMode(appId, accessKey) {
        Leanplum._appId = appId;
        Leanplum._clientKey = accessKey;
        Leanplum._devMode = false;
      }
    }, {
      key: "setSocketHost",
      value: function setSocketHost(host) {
        _socketHost = host;
      }
    }, {
      key: "setDeviceId",
      value: function setDeviceId(deviceId) {
        Leanplum._deviceId = deviceId;
      }
    }, {
      key: "setAppVersion",
      value: function setAppVersion(versionName) {
        Leanplum._versionName = versionName;
      }
    }, {
      key: "setDeviceName",
      value: function setDeviceName(deviceName) {
        Leanplum._deviceName = deviceName;
      }
    }, {
      key: "setDeviceModel",
      value: function setDeviceModel(deviceModel) {
        Leanplum._deviceModel = deviceModel;
      }
    }, {
      key: "setSystemName",
      value: function setSystemName(systemName) {
        Leanplum._systemName = systemName;
      }
    }, {
      key: "setSystemVersion",
      value: function setSystemVersion(systemVersion) {
        Leanplum._systemVersion = systemVersion;
      }
    }, {
      key: "setVariables",
      value: function setVariables(variables) {
        Leanplum._variables = variables;
      }
    }, {
      key: "setRequestBatching",
      value: function setRequestBatching(batchEnabled, cooldownSeconds) {
        _batchEnabled = batchEnabled;
        _batchCooldown = cooldownSeconds;
      }
    }, {
      key: "getVariables",
      value: function getVariables(variables) {
        return Leanplum._merged !== undefined ? Leanplum._merged : Leanplum._variables;
      }
    }, {
      key: "getVariable",
      value: function getVariable(args) {
        var current = Leanplum.getVariables();
        for (var i = 0; i < arguments.length; i++) {
          current = current[arguments.i];
        }
        return current;
      }
    }, {
      key: "getVariants",
      value: function getVariants() {
        return _variants || [];
      }
    }, {
      key: "addStartResponseHandler",
      value: function addStartResponseHandler(handler) {
        _startHandlers.push(handler);
        if (Leanplum._hasStarted) {
          handler(Leanplum._startSuccessful);
        }
      }
    }, {
      key: "addVariablesChangedHandler",
      value: function addVariablesChangedHandler(handler) {
        _variablesChangedHandlers.push(handler);
        if (Leanplum._hasReceivedDiffs) {
          handler();
        }
      }
    }, {
      key: "removeStartResponseHandler",
      value: function removeStartResponseHandler(handler) {
        var idx = _startHandlers.indexOf(handler);
        if (idx >= 0) {
          _startHandlers.splice(idx, 1);
        }
      }
    }, {
      key: "removeVariablesChangedHandler",
      value: function removeVariablesChangedHandler(handler) {
        var idx = _variablesChangedHandlers.indexOf(handler);
        if (idx >= 0) {
          _variablesChangedHandlers.splice(idx, 1);
        }
      }
    }, {
      key: "start",
      value: function start(userId, userAttributes, callback) {
        // Overloads.
        if (typeof userId == 'function') {
          callback = userId;
          userAttributes = {};
          userId = null;
        } else if ((typeof userId === "undefined" ? "undefined" : _typeof(userId)) == 'object' && userId !== null && userId !== undefined) {
          callback = userAttributes;
          userAttributes = userId;
          userId = null;
        } else if (typeof userAttributes == 'function') {
          callback = userAttributes;
          userAttributes = {};
        }
        Leanplum._userId = userId;
        if (callback) {
          Leanplum.addStartResponseHandler(callback);
        }

        // TODO: Add referer.
        var args = new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.USER_ATTRIBUTES, JSON.stringify(userAttributes)).add(_Constants2.default.PARAMS.COUNTRY, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.REGION, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.CITY, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.LOCATION, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.SYSTEM_NAME, Leanplum._systemName || _browserDetector.OS).add(_Constants2.default.PARAMS.SYSTEM_VERSION, '' + (Leanplum._systemVersion || '')).add(_Constants2.default.PARAMS.BROWSER_NAME, _browserDetector.browser).add(_Constants2.default.PARAMS.BROWSER_VERSION, '' + _browserDetector.version).add(_Constants2.default.PARAMS.LOCALE, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.DEVICE_NAME, Leanplum._deviceName || _browserDetector.browser + ' ' + _browserDetector.version).add(_Constants2.default.PARAMS.DEVICE_MODEL, Leanplum._deviceModel || 'Web Browser').add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false);

        // Issue request.
        Leanplum._request(_Constants2.default.METHODS.START, args, {
          queued: true,
          sendNow: true,
          response: function response(_response) {
            Leanplum._hasStarted = true;
            var startResponse = Leanplum._getLastResponse(_response);
            if (Leanplum._isResponseSuccess(startResponse)) {
              Leanplum._startSuccessful = true;

              if (Leanplum._devMode) {
                var latestVersion = startResponse[_Constants2.default.KEYS.LATEST_VERSION];
                if (latestVersion) {
                  console.log('A newer version of Leanplum, ' + latestVersion + ', is available. ' + 'Go to leanplum.com to download it.');
                }
                if (WebSocket) {
                  Leanplum._socketIOConnect();
                } else {
                  console.log('Your browser doesn\'t support WebSockets.');
                }
              }

              Leanplum._setContent(startResponse[_Constants2.default.KEYS.VARS], startResponse[_Constants2.default.KEYS.VARIANTS], startResponse[_Constants2.default.KEYS.ACTION_METADATA]);
              _token = startResponse[_Constants2.default.KEYS.TOKEN];
            } else {
              Leanplum._startSuccessful = false;
              Leanplum._loadDiffs();
            }
            for (var i = 0; i < _startHandlers.length; i++) {
              _startHandlers[i](Leanplum._startSuccessful);
            }
          }
        });
      }
    }, {
      key: "startFromCache",
      value: function startFromCache(userId, userAttributes, callback) {
        // Overloads.
        if (typeof userId == 'function') {
          callback = userId;
          userAttributes = {};
          userId = null;
        } else if ((typeof userId === "undefined" ? "undefined" : _typeof(userId)) == 'object' && userId !== null && userId !== undefined) {
          callback = userAttributes;
          userAttributes = userId;
          userId = null;
        } else if (typeof userAttributes == 'function') {
          callback = userAttributes;
          userAttributes = {};
        }
        Leanplum._userId = userId;
        if (callback) {
          Leanplum.addStartResponseHandler(callback);
        }

        Leanplum._hasStarted = true;
        Leanplum._startSuccessful = true;
        if (Leanplum._devMode) {
          if (WebSocket) {
            Leanplum._socketIOConnect();
          } else {
            console.log('Your browser doesn\'t support WebSockets.');
          }
        }
        Leanplum._loadDiffs();
        for (var i = 0; i < _startHandlers.length; i++) {
          _startHandlers[i](Leanplum._startSuccessful);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        Leanplum._request(_Constants2.default.METHODS.STOP, undefined, {
          sendNow: true,
          queued: true
        });
      }
    }, {
      key: "pauseSession",
      value: function pauseSession() {
        Leanplum._request(_Constants2.default.METHODS.PAUSE_SESSION, undefined, {
          sendNow: true,
          queued: true
        });
      }
    }, {
      key: "resumeSession",
      value: function resumeSession() {
        Leanplum._request(_Constants2.default.METHODS.RESUME_SESSION, undefined, {
          sendNow: true,
          queued: true
        });
      }
    }, {
      key: "pauseState",
      value: function pauseState() {
        Leanplum._request(_Constants2.default.METHODS.PAUSE_STATE, undefined, {
          queued: true
        });
      }
    }, {
      key: "resumeState",
      value: function resumeState() {
        Leanplum._request(_Constants2.default.METHODS.RESUME_STATE, undefined, {
          queued: true
        });
      }
    }, {
      key: "setUserId",
      value: function setUserId(userId) {
        Leanplum.setUserAttributes(userId);
      }
    }, {
      key: "setUserAttributes",
      value: function setUserAttributes(userId, userAttributes) {
        if (userAttributes === undefined) {
          if ((typeof userId === "undefined" ? "undefined" : _typeof(userId)) == 'object') {
            userAttributes = userId;
            userId = undefined;
          } else if (typeof userId != 'string') {
            console.log('Leanplum: setUserAttributes expects a string or an ' + 'object');
            return;
          }
        }
        Leanplum._request(_Constants2.default.METHODS.SET_USER_ATTRIBUTES, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.USER_ATTRIBUTES, userAttributes ? JSON.stringify(userAttributes) : undefined).add(_Constants2.default.PARAMS.NEW_USER_ID, userId), {
          queued: true
        });
        if (userId) {
          Leanplum._userId = userId;
          Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID, Leanplum._userId);
        }
      }
    }, {
      key: "track",
      value: function track(event, value, info, params) {
        // Overloads.
        // object && !null && !undefined -> params
        // string -> info, params
        // *, object && !null && !undefined -> value, params
        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object' && value !== null && value !== undefined) {
          params = value;
          info = undefined;
          value = undefined;
        } else if (typeof value == 'string') {
          params = info;
          info = value;
          value = undefined;
        } else if ((typeof info === "undefined" ? "undefined" : _typeof(info)) == 'object' && info !== null && info !== undefined) {
          params = info;
          info = undefined;
        }
        Leanplum._request(_Constants2.default.METHODS.TRACK, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.EVENT, event).add(_Constants2.default.PARAMS.VALUE, value || 0.0).add(_Constants2.default.PARAMS.INFO, info).add(_Constants2.default.PARAMS.PARAMS, JSON.stringify(params)), {
          queued: true
        });
      }
    }, {
      key: "advanceTo",
      value: function advanceTo(state, info, params) {
        // Overloads.
        // string|null|undefined, * -> info, params
        // object && !null && !undefined -> params
        if ((typeof info === "undefined" ? "undefined" : _typeof(info)) == 'object' && info !== null && info !== undefined) {
          params = info;
          info = undefined;
        }

        Leanplum._request(_Constants2.default.METHODS.ADVANCE, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.STATE, state).add(_Constants2.default.PARAMS.INFO, info).add(_Constants2.default.PARAMS.PARAMS, JSON.stringify(params)), {
          queued: true
        });
      }
    }, {
      key: "isWebPushSupported",
      value: function isWebPushSupported() {
        if (_pushManager) {
          return _pushManager.isWebPushSupported();
        }
        return false;
      }
    }, {
      key: "isWebPushSubscribed",
      value: function isWebPushSubscribed() {
        return _pushManager.isWebPushSubscribed();
      }
    }, {
      key: "registerForWebPush",
      value: function registerForWebPush(serviceWorkerUrl) {
        return new Promise(function (resolve, reject) {
          if (_pushManager && _pushManager.isWebPushSupported()) {
            return _pushManager.register(serviceWorkerUrl, function (isSubscribed) {
              if (isSubscribed) {
                return resolve(true);
              }
              return _pushManager.subscribeUser();
            });
          } else {
            return reject('Leanplum: WebPush is not supported.');
          }
        });
      }
    }, {
      key: "unregisterFromWebPush",
      value: function unregisterFromWebPush() {
        return _pushManager.unsubscribeUser();
      }
    }, {
      key: "_setSubscription",
      value: function _setSubscription(subscription) {
        if (!subscription) {
          return;
        }
        Leanplum._request(_Constants2.default.METHODS.SET_DEVICE_ATTRIBUTES, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.WEB_PUSH_SUBSCRIPTION, subscription), {
          queued: false,
          sendNow: true
        });
      }
    }, {
      key: "_socketIOConnect",
      value: function _socketIOConnect() {
        var client = new _SocketIoClient2.default();
        var authSent = false;
        client.onopen = function () {
          if (!authSent) {
            console.log('Leanplum: Connected to development server.');
            var args = {};
            args[_Constants2.default.PARAMS.APP_ID] = Leanplum._appId;
            args[_Constants2.default.PARAMS.DEVICE_ID] = Leanplum._deviceId;
            client.send('auth', args);
            authSent = true;
          }
        };
        client.onerror = function (event) {
          console.log('Leanplum: Socket error', event);
        };
        client.onmessage = function (event, args) {
          if (event == 'updateVars') {
            Leanplum._request(_Constants2.default.METHODS.GET_VARS, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false), {
              queued: false,
              sendNow: true,
              response: function response(_response2) {
                var getVarsResponse = Leanplum._getLastResponse(_response2);
                var values = getVarsResponse[_Constants2.default.KEYS.VARS];
                var variants = getVarsResponse[_Constants2.default.KEYS.VARIANTS];
                var actionMetadata = getVarsResponse[_Constants2.default.KEYS.ACTION_METADATA];
                if (!_underscore2.default.isEqual(values, Leanplum._diffs)) {
                  Leanplum._setContent(values, variants, actionMetadata);
                }
              }
            });
          } else if (event == 'getVariables') {
            Leanplum._sendVariables();
            client.send('getContentResponse', {
              'updated': true
            });
          } else if (event == 'getActions') {
            // Unsupported in JavaScript SDK.
            client.send('getContentResponse', {
              'updated': false
            });
          } else if (event == 'registerDevice') {
            alert('Your device has been registered to ' + args[0]['email'] + '.');
          }
        };
        client.onclose = function () {
          console.log('Leanplum: Disconnected to development server.');
          authSent = false;
        };
        client.connect(_socketHost);
        setInterval(function () {
          if (!client.connected && !client.connecting) {
            client.connect(_socketHost);
          }
        }, 5000);
      }
    }, {
      key: "_setContent",
      value: function _setContent(diffs, variants, actionMetadata) {
        Leanplum._diffs = diffs;
        _variants = variants;
        _actionMetadata = actionMetadata;
        Leanplum._hasReceivedDiffs = true;
        Leanplum._merged = Leanplum._mergeHelper(Leanplum._variables, diffs);
        Leanplum._saveDiffs();
        for (var i = 0; i < _variablesChangedHandlers.length; i++) {
          _variablesChangedHandlers[i]();
        }
      }
    }, {
      key: "_mergeHelper",
      value: function _mergeHelper(vars, diff) {
        if (typeof diff == 'number' || typeof diff == 'boolean' || typeof diff == 'string') {
          return diff;
        }
        if (diff === null || diff === undefined) {
          return vars;
        }

        var objIterator = function objIterator(obj) {
          return function (f) {
            if (obj instanceof Array) {
              for (var i = 0; i < obj.length; i++) {
                f(obj[i]);
              }
            } else {
              for (var attr in obj) {
                if ({}.hasOwnProperty.call(obj, attr)) {
                  f(attr);
                }
              }
            }
          };
        };
        var varsIterator = objIterator(vars);
        var diffIterator = objIterator(diff);

        // Infer that the diffs is an array if the vars value doesn't exist to tell
        // us the type.
        var isArray = false;
        if (vars == null) {
          if (!(diff instanceof Array)) {
            isArray = null;
            for (var attr in diff) {
              if (isArray === null) {
                isArray = true;
              }
              if (!(typeof attr == 'string')) {
                isArray = false;
                break;
              }
              if (attr.length < 3 || attr.charAt(0) != '[' || attr.charAt(attr.length - 1) != ']') {
                isArray = false;
                break;
              }
              var varSubscript = attr.substring(1, attr.length - 1);
              if (!('' + parseInt(varSubscript)) == varSubscript) {
                isArray = false;
                break;
              }
            }
          }
        }

        // Merge arrays.
        if (vars instanceof Array || isArray) {
          var _merged = [];
          varsIterator(function (attr) {
            _merged.push(attr);
          });
          diffIterator(function (varSubscript) {
            var subscript = parseInt(varSubscript.substring(1, varSubscript.length - 1));
            var diffValue = diff[varSubscript];
            while (subscript >= _merged.length) {
              _merged.push(null);
            }
            _merged[subscript] = Leanplum._mergeHelper(_merged[subscript], diffValue);
          });
          return _merged;
        }

        // Merge dictionaries.
        var merged = {};
        varsIterator(function (attr) {
          if (diff[attr] === null || diff[attr] === undefined) {
            merged[attr] = vars[attr];
          }
        });
        diffIterator(function (attr) {
          merged[attr] = Leanplum._mergeHelper(vars != null ? vars[attr] : null, diff[attr]);
        });
        return merged;
      }
    }, {
      key: "_sendVariables",
      value: function _sendVariables() {
        var body = {};
        body[_Constants2.default.PARAMS.VARIABLES] = Leanplum._variables;
        Leanplum._request(_Constants2.default.METHODS.SET_VARS, new _ArgsBuilder2.default().body(JSON.stringify(body)), {
          sendNow: true
        });
      }
    }, {
      key: "_loadDiffs",
      value: function _loadDiffs() {
        try {
          Leanplum._setContent(JSON.parse(Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIABLES) || null), JSON.parse(Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANTS) || null), JSON.parse(Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.ACTION_METADATA) || null));
          _token = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.TOKEN);
        } catch (e) {
          console.log('Leanplum: Invalid diffs: ' + e);
        }
      }
    }, {
      key: "_saveDiffs",
      value: function _saveDiffs() {
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIABLES, JSON.stringify(Leanplum._diffs || {}));
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANTS, JSON.stringify(_variants || []));
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.ACTION_METADATA, JSON.stringify(_actionMetadata || {}));
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.TOKEN, _token);
      }
    }, {
      key: "_saveRequestForLater",
      value: function _saveRequestForLater(args) {
        var count = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT) || 0;
        var itemKey = _Constants2.default.DEFAULT_KEYS.ITEM + count;
        Leanplum._saveToLocalStorage(itemKey, JSON.stringify(args));
        count++;
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT, count);
      }
    }, {
      key: "_popUnsentRequests",
      value: function _popUnsentRequests() {
        var requestData = [];
        var count = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT) || 0;
        Leanplum._removeFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT);
        for (var i = 0; i < count; i++) {
          var itemKey = _Constants2.default.DEFAULT_KEYS.ITEM + i;
          try {
            var requestArgs = JSON.parse(Leanplum._getFromLocalStorage(itemKey));
            requestData.push(requestArgs);
          } catch (e) {}
          Leanplum._removeFromLocalStorage(itemKey);
        }
        return requestData;
      }
    }, {
      key: "_request",
      value: function _request(action, params, options) {
        options = options || {};
        params = params || new _ArgsBuilder2.default();

        // Get or create device ID and user ID.
        if (!Leanplum._deviceId) {
          Leanplum._deviceId = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID);
        }
        if (!Leanplum._deviceId) {
          var id = '';
          var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + '0123456789';
          for (var i = 0; i < 16; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          Leanplum._deviceId = id;
          Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID, id);
        }
        if (!Leanplum._userId) {
          Leanplum._userId = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID);
          if (!Leanplum._userId) {
            Leanplum._userId = Leanplum._deviceId;
          }
        }
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID, Leanplum._userId);

        var argsBuilder = params.attachApiKeys(Leanplum._appId, Leanplum._clientKey).add(_Constants2.default.PARAMS.SDK_VERSION, _Constants2.default.SDK_VERSION).add(_Constants2.default.PARAMS.DEVICE_ID, Leanplum._deviceId).add(_Constants2.default.PARAMS.USER_ID, Leanplum._userId).add(_Constants2.default.PARAMS.ACTION, action).add(_Constants2.default.PARAMS.VERSION_NAME, Leanplum._versionName).add(_Constants2.default.PARAMS.DEV_MODE, Leanplum._devMode).add(_Constants2.default.PARAMS.TIME, '' + new Date().getTime() / 1000);
        var success = options.success || options.response;
        var error = options.error || options.response;

        if (!Leanplum._appId || !Leanplum._clientKey) {
          var err = 'Leanplum App ID and client key are not set. Make sure you ' + 'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' + 'before issuing API calls.';
          console.error(err);
          if (error) error(err);
          return;
        }

        if (params.body()) {
          _Request2.default.ajax('POST', _apiPath + '?' + argsBuilder.build(), params.body(), success, error, options.queued);
          return;
        }

        var sendNow = Leanplum._devMode || options.sendNow || !_batchEnabled;

        var sendUnsentRequests = function sendUnsentRequests() {
          var requestsToSend = Leanplum._popUnsentRequests();
          if (requestsToSend.length > 0) {
            var requestData = JSON.stringify({
              'data': requestsToSend
            });
            var multiRequestArgs = new _ArgsBuilder2.default().attachApiKeys(Leanplum._appId, Leanplum._clientKey).add(_Constants2.default.PARAMS.SDK_VERSION, _Constants2.default.SDK_VERSION).add(_Constants2.default.PARAMS.ACTION, _Constants2.default.METHODS.MULTI).add(_Constants2.default.PARAMS.TIME, '' + new Date().getTime() / 1000).build();
            _Request2.default.ajax('POST', _apiPath + '?' + multiRequestArgs, requestData, success, error, options.queued);
          }
        };

        // Deal with cooldown.
        if (!sendNow && _batchCooldown) {
          var now = new Date().getTime() / 1000;
          if (!Leanplum._lastRequestTime || now - Leanplum._lastRequestTime >= _batchCooldown) {
            sendNow = true;
            Leanplum._lastRequestTime = now;
          } else {
            if (!Leanplum._cooldownTimeout) {
              Leanplum._cooldownTimeout = setTimeout(function () {
                Leanplum._cooldownTimeout = null;
                Leanplum._lastRequestTime = new Date().getTime() / 1000;
                sendUnsentRequests();
              }, (_batchCooldown - (now - Leanplum._lastRequestTime)) * 1000);
            }
          }
        }

        Leanplum._saveRequestForLater(argsBuilder.buildDict());
        if (sendNow) {
          sendUnsentRequests();
        }
      }
    }, {
      key: "_numResponses",
      value: function _numResponses(response) {
        if (!response || !response['response']) {
          return 0;
        }
        return response['response'].length;
      }
    }, {
      key: "_getResponseAt",
      value: function _getResponseAt(response, index) {
        if (!response || !response['response']) {
          return null;
        }
        return response['response'][index];
      }
    }, {
      key: "_getLastResponse",
      value: function _getLastResponse(response) {
        var count = Leanplum._numResponses(response);
        if (count > 0) {
          return Leanplum._getResponseAt(response, count - 1);
        } else {
          return null;
        }
      }
    }, {
      key: "_isResponseSuccess",
      value: function _isResponseSuccess(response) {
        if (!response) {
          return false;
        }
        return response['success'] ? true : false;
      }
    }, {
      key: "_getResponseError",
      value: function _getResponseError(response) {
        if (!response) {
          return null;
        }
        var error = response['error'];
        if (!error) {
          return null;
        }
        return error['message'];
      }
    }, {
      key: "_getFromLocalStorage",
      value: function _getFromLocalStorage(key) {
        if (_localStorageEnabled === false) {
          return _alternateLocalStorage[key];
        }
        return localStorage[key];
      }
    }, {
      key: "_saveToLocalStorage",
      value: function _saveToLocalStorage(key, value) {
        if (_localStorageEnabled === false) {
          _alternateLocalStorage[key] = value;
          return;
        }
        try {
          localStorage[key] = value;
        } catch (e) {
          _localStorageEnabled = false;
          Leanplum._saveToLocalStorage(key, value);
        }
      }
    }, {
      key: "_removeFromLocalStorage",
      value: function _removeFromLocalStorage(key) {
        if (_localStorageEnabled === false) {
          delete _alternateLocalStorage[key];
          return;
        }
        try {
          localStorage.removeItem(key);
        } catch (e) {
          _localStorageEnabled = false;
          Leanplum._removeFromLocalStorage(key);
        }
      }
    }]);

    return Leanplum;
  }();

  var _pushManager = new _PushManager2.default(Leanplum);

  module.exports = Leanplum;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZDdkNTY3MzUzMjdhMTZkZTAxOCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy91bmRlcnNjb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9BcmdzQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQnJvd3NlckRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9QdXNoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU29ja2V0SW9DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlYW5wbHVtLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJNRVRIT0RTIiwiU1RBUlQiLCJTVE9QIiwiQURWQU5DRSIsIlRSQUNLIiwiUEFVU0VfU0VTU0lPTiIsIlJFU1VNRV9TRVNTSU9OIiwiUEFVU0VfU1RBVEUiLCJSRVNVTUVfU1RBVEUiLCJET1dOTE9BRF9GSUxFIiwiTVVMVEkiLCJTRVRfVkFSUyIsIkdFVF9WQVJTIiwiU0VUX1VTRVJfQVRUUklCVVRFUyIsIlNFVF9ERVZJQ0VfQVRUUklCVVRFUyIsIlVQTE9BRF9GSUxFIiwiUkVHSVNURVJfREVWSUNFIiwiU0RLX1ZFUlNJT04iLCJDTElFTlQiLCJQQVJBTVMiLCJBQ1RJT04iLCJBUFBfSUQiLCJDTElFTlRfS0VZIiwiREVWSUNFX0lEIiwiVVNFUl9JRCIsIk5FV19VU0VSX0lEIiwiREVWX01PREUiLCJWRVJTSU9OX05BTUUiLCJTWVNURU1fTkFNRSIsIlNZU1RFTV9WRVJTSU9OIiwiQlJPV1NFUl9OQU1FIiwiQlJPV1NFUl9WRVJTSU9OIiwiREVWSUNFX05BTUUiLCJERVZJQ0VfTU9ERUwiLCJVU0VSX0FUVFJJQlVURVMiLCJMT0NBTEUiLCJDT1VOVFJZIiwiUkVHSU9OIiwiQ0lUWSIsIkxPQ0FUSU9OIiwiU1RBVEUiLCJJTkZPIiwiRVZFTlQiLCJWQUxVRSIsIkZJTEVOQU1FIiwiVElNRSIsIkRBVEEiLCJWQVJTIiwiRklMRSIsIlNJWkUiLCJWQVJJQVRJT04iLCJIQVNIIiwiRU1BSUwiLCJWQVJJQUJMRVMiLCJJTkNMVURFX0RFRkFVTFRTIiwiV0VCX1BVU0hfU1VCU0NSSVBUSU9OIiwiS0VZUyIsIklTX1JFR0lTVEVSRUQiLCJMQVRFU1RfVkVSU0lPTiIsIlZBUklBTlRTIiwiQUNUSU9OX01FVEFEQVRBIiwiVE9LRU4iLCJERUZBVUxUX0tFWVMiLCJDT1VOVCIsIklURU0iLCJQVVNIX1NVQlNDUklQVElPTiIsIlZBTFVFUyIsIkRFVEVDVCIsIl9yZXF1ZXN0UXVldWUiLCJfbmV0d29ya1RpbWVvdXRTZWNvbmRzIiwiUmVxdWVzdCIsInNlY29uZHMiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwicXVldWVkIiwicGxhaW5UZXh0IiwiX3J1bm5pbmdSZXF1ZXN0IiwiX2VucXVldWVSZXF1ZXN0IiwiYXJndW1lbnRzIiwiWERvbWFpblJlcXVlc3QiLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaW5kZXhPZiIsInN1YnN0cmluZyIsIl9hamF4SUU4IiwiYXBwbHkiLCJoYW5kbGVkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwicmVzcG9uc2UiLCJyYW5DYWxsYmFjayIsInJlc3BvbnNlVGV4dCIsIkpTT04iLCJwYXJzZSIsImUiLCJzZXRUaW1lb3V0Iiwic3RhdHVzIiwiX2RlcXVldWVSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiYWJvcnQiLCJ4ZHIiLCJvbmxvYWQiLCJvbmVycm9yIiwib250aW1lb3V0Iiwib25wcm9ncmVzcyIsInRpbWVvdXQiLCJhcmdzIiwicHVzaCIsInNoaWZ0IiwiYWpheCIsImVxIiwiYSIsImIiLCJhU3RhY2siLCJiU3RhY2siLCJfIiwiX3dyYXBwZWQiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJTdHJpbmciLCJzb3VyY2UiLCJnbG9iYWwiLCJtdWx0aWxpbmUiLCJpZ25vcmVDYXNlIiwibGVuZ3RoIiwic2l6ZSIsInJlc3VsdCIsImFDdG9yIiwiY29uc3RydWN0b3IiLCJiQ3RvciIsImlzRnVuY3Rpb24iLCJrZXkiLCJoYXMiLCJwb3AiLCJvYmoiLCJlYWNoIiwic2xpY2UiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJBcmdzQnVpbGRlciIsImFyZ1N0cmluZyIsImFyZ1ZhbHVlcyIsInZhbHVlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYm9keSIsIl9ib2R5IiwiYXBwSWQiLCJjbGllbnRLZXkiLCJhZGQiLCJkYXRhQnJvd3NlciIsInN0cmluZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInN1YlN0cmluZyIsImlkZW50aXR5IiwidmVyc2lvblNlYXJjaCIsInZlbmRvciIsIndpbmRvdyIsIm9wZXJhIiwiZGF0YU9TIiwicGxhdGZvcm0iLCJCcm93c2VyRGV0ZWN0b3IiLCJicm93c2VyIiwic2VhcmNoU3RyaW5nIiwidmVyc2lvbiIsInNlYXJjaFZlcnNpb24iLCJhcHBWZXJzaW9uIiwiT1MiLCJpIiwiZGF0YVN0cmluZyIsImRhdGFQcm9wIiwidmVyc2lvblNlYXJjaFN0cmluZyIsImluZGV4IiwicGFyc2VGbG9hdCIsIkFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZIiwic2VsZiIsIl9sZWFucGx1bSIsImlzU3VwcG9ydGVkIiwiaXNTdWJzY3JpYmVkIiwic2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsIlB1c2hNYW5hZ2VyIiwibGVhbnBsdW0iLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIl9nZXRTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uIiwidGhlbiIsInJlZ2lzdHJhdGlvbiIsInB1c2hNYW5hZ2VyIiwiZ2V0U3Vic2NyaXB0aW9uIiwic3Vic2NyaXB0aW9uIiwiX3VwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyIiwic2VydmljZVdvcmtlclVybCIsImNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiYXBwbGljYXRpb25TZXJ2ZXJLZXkiLCJfdXJsQjY0VG9VaW50OEFycmF5Iiwic3Vic2NyaWJlIiwidXNlclZpc2libGVPbmx5IiwiZXJyIiwidW5zdWJzY3JpYmUiLCJnZXRSZWdpc3RyYXRpb24iLCJiYXNlNjRTdHJpbmciLCJwYWRkaW5nIiwicmVwZWF0IiwiYmFzZTY0IiwicmVwbGFjZSIsInJhd0RhdGEiLCJhdG9iIiwib3V0cHV0QXJyYXkiLCJVaW50OEFycmF5IiwiY2hhckNvZGVBdCIsImdldEtleSIsImF1dGgiLCJrZXlBc2NpaSIsImJ0b2EiLCJmcm9tQ2hhckNvZGUiLCJhdXRoQXNjaWkiLCJlbmRwb2ludCIsInByZXBhcmVkU3Vic2NyaXB0aW9uIiwiX3ByZXBhcmVTdWJzY3JpcHRpb24iLCJwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZyIsInN0cmluZ2lmeSIsImV4aXN0aW5nU3Vic2NyaXB0aW9uU3RyaW5nIiwiX2dldEZyb21Mb2NhbFN0b3JhZ2UiLCJpc0VxdWFsIiwiX3NhdmVUb0xvY2FsU3RvcmFnZSIsIl9zZXRTdWJzY3JpcHRpb24iLCJTb2NrZXRJb0NsaWVudCIsImNvbm5lY3RlZCIsImNvbm5lY3RpbmciLCJzb2NrZXRIb3N0IiwibGluZSIsInBhcnRzIiwic3BsaXQiLCJzZXNzaW9uIiwiaGVhcnRiZWF0IiwicGFyc2VJbnQiLCJzb2NrZXQiLCJXZWJTb2NrZXQiLCJoZWFydGJlYXRJbnRlcnZhbCIsIm9ub3BlbiIsInNldEludGVydmFsIiwib25jbG9zZSIsImNsZWFySW50ZXJ2YWwiLCJvbm1lc3NhZ2UiLCJldmVudCIsImNvZGUiLCJtZXNzYWdlSWQiLCJqb2luIiwiY2xvc2UiLCJuYW1lIiwiX3ZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycyIsIl92YXJpYW50cyIsIl9zdGFydEhhbmRsZXJzIiwiX2FjdGlvbk1ldGFkYXRhIiwiX3Rva2VuIiwiX2JhdGNoRW5hYmxlZCIsIl9iYXRjaENvb2xkb3duIiwiX2FwaVBhdGgiLCJfc29ja2V0SG9zdCIsIl9sb2NhbFN0b3JhZ2VFbmFibGVkIiwidW5kZWZpbmVkIiwiX2FsdGVybmF0ZUxvY2FsU3RvcmFnZSIsIl9icm93c2VyRGV0ZWN0b3IiLCJMZWFucGx1bSIsImFwaVBhdGgiLCJlbWFpbCIsIl9lbWFpbCIsInNldE5ldHdvcmtUaW1lb3V0IiwiYWNjZXNzS2V5IiwiX2FwcElkIiwiX2NsaWVudEtleSIsIl9kZXZNb2RlIiwiaG9zdCIsImRldmljZUlkIiwiX2RldmljZUlkIiwidmVyc2lvbk5hbWUiLCJfdmVyc2lvbk5hbWUiLCJkZXZpY2VOYW1lIiwiX2RldmljZU5hbWUiLCJkZXZpY2VNb2RlbCIsIl9kZXZpY2VNb2RlbCIsInN5c3RlbU5hbWUiLCJfc3lzdGVtTmFtZSIsInN5c3RlbVZlcnNpb24iLCJfc3lzdGVtVmVyc2lvbiIsInZhcmlhYmxlcyIsIl92YXJpYWJsZXMiLCJiYXRjaEVuYWJsZWQiLCJjb29sZG93blNlY29uZHMiLCJfbWVyZ2VkIiwiY3VycmVudCIsImdldFZhcmlhYmxlcyIsImhhbmRsZXIiLCJfaGFzU3RhcnRlZCIsIl9zdGFydFN1Y2Nlc3NmdWwiLCJfaGFzUmVjZWl2ZWREaWZmcyIsImlkeCIsInNwbGljZSIsInVzZXJJZCIsInVzZXJBdHRyaWJ1dGVzIiwiX3VzZXJJZCIsImFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyIiwiX3JlcXVlc3QiLCJzZW5kTm93Iiwic3RhcnRSZXNwb25zZSIsIl9nZXRMYXN0UmVzcG9uc2UiLCJfaXNSZXNwb25zZVN1Y2Nlc3MiLCJsYXRlc3RWZXJzaW9uIiwiX3NvY2tldElPQ29ubmVjdCIsIl9zZXRDb250ZW50IiwiX2xvYWREaWZmcyIsInNldFVzZXJBdHRyaWJ1dGVzIiwiaW5mbyIsInBhcmFtcyIsInN0YXRlIiwiX3B1c2hNYW5hZ2VyIiwiaXNXZWJQdXNoU3VwcG9ydGVkIiwiaXNXZWJQdXNoU3Vic2NyaWJlZCIsInN1YnNjcmliZVVzZXIiLCJ1bnN1YnNjcmliZVVzZXIiLCJjbGllbnQiLCJhdXRoU2VudCIsImdldFZhcnNSZXNwb25zZSIsInZhbHVlcyIsInZhcmlhbnRzIiwiYWN0aW9uTWV0YWRhdGEiLCJfZGlmZnMiLCJfc2VuZFZhcmlhYmxlcyIsImFsZXJ0IiwiY29ubmVjdCIsImRpZmZzIiwiX21lcmdlSGVscGVyIiwiX3NhdmVEaWZmcyIsInZhcnMiLCJkaWZmIiwib2JqSXRlcmF0b3IiLCJmIiwiQXJyYXkiLCJhdHRyIiwidmFyc0l0ZXJhdG9yIiwiZGlmZkl0ZXJhdG9yIiwiaXNBcnJheSIsImNoYXJBdCIsInZhclN1YnNjcmlwdCIsIm1lcmdlZCIsInN1YnNjcmlwdCIsImRpZmZWYWx1ZSIsImNvdW50IiwiaXRlbUtleSIsInJlcXVlc3REYXRhIiwiX3JlbW92ZUZyb21Mb2NhbFN0b3JhZ2UiLCJyZXF1ZXN0QXJncyIsImFjdGlvbiIsIm9wdGlvbnMiLCJpZCIsInBvc3NpYmxlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXJnc0J1aWxkZXIiLCJhdHRhY2hBcGlLZXlzIiwiRGF0ZSIsImdldFRpbWUiLCJidWlsZCIsInNlbmRVbnNlbnRSZXF1ZXN0cyIsInJlcXVlc3RzVG9TZW5kIiwiX3BvcFVuc2VudFJlcXVlc3RzIiwibXVsdGlSZXF1ZXN0QXJncyIsIm5vdyIsIl9sYXN0UmVxdWVzdFRpbWUiLCJfY29vbGRvd25UaW1lb3V0IiwiX3NhdmVSZXF1ZXN0Rm9yTGF0ZXIiLCJidWlsZERpY3QiLCJfbnVtUmVzcG9uc2VzIiwiX2dldFJlc3BvbnNlQXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBQSxTQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLGFBQVM7QUFDUEMsYUFBTyxPQURBO0FBRVBDLFlBQU0sTUFGQztBQUdQQyxlQUFTLFNBSEY7QUFJUEMsYUFBTyxPQUpBO0FBS1BDLHFCQUFlLGNBTFI7QUFNUEMsc0JBQWdCLGVBTlQ7QUFPUEMsbUJBQWEsWUFQTjtBQVFQQyxvQkFBYyxhQVJQO0FBU1BDLHFCQUFlLGNBVFI7QUFVUEMsYUFBTyxPQVZBO0FBV1BDLGdCQUFVLFNBWEg7QUFZUEMsZ0JBQVUsU0FaSDtBQWFQQywyQkFBcUIsbUJBYmQ7QUFjUEMsNkJBQXVCLHFCQWRoQjtBQWVQQyxtQkFBYSxZQWZOO0FBZ0JQQyx1QkFBaUI7QUFoQlYsS0FETTs7QUFvQmZDLGlCQUFhLE9BcEJFOztBQXNCZkMsWUFBUSxJQXRCTzs7QUF3QmZDLFlBQVE7QUFDTkMsY0FBUSxRQURGO0FBRU5DLGNBQVEsT0FGRjtBQUdOSCxjQUFRLFFBSEY7QUFJTkksa0JBQVksV0FKTjtBQUtOQyxpQkFBVyxVQUxMO0FBTU5OLG1CQUFhLFlBTlA7QUFPTk8sZUFBUyxRQVBIO0FBUU5DLG1CQUFhLFdBUlA7QUFTTkMsZ0JBQVUsU0FUSjtBQVVOQyxvQkFBYyxhQVZSO0FBV05DLG1CQUFhLFlBWFA7QUFZTkMsc0JBQWdCLGVBWlY7QUFhTkMsb0JBQWMsYUFiUjtBQWNOQyx1QkFBaUIsZ0JBZFg7QUFlTkMsbUJBQWEsWUFmUDtBQWdCTkMsb0JBQWMsYUFoQlI7QUFpQk5DLHVCQUFpQixnQkFqQlg7QUFrQk5DLGNBQVEsUUFsQkY7QUFtQk5DLGVBQVMsU0FuQkg7QUFvQk5DLGNBQVEsUUFwQkY7QUFxQk5DLFlBQU0sTUFyQkE7QUFzQk5DLGdCQUFVLFVBdEJKO0FBdUJOQyxhQUFPLE9BdkJEO0FBd0JOQyxZQUFNLE1BeEJBO0FBeUJOQyxhQUFPLE9BekJEO0FBMEJOQyxhQUFPLE9BMUJEO0FBMkJOQyxnQkFBVSxVQTNCSjtBQTRCTkMsWUFBTSxNQTVCQTtBQTZCTkMsWUFBTSxNQTdCQTtBQThCTkMsWUFBTSxNQTlCQTtBQStCTkMsWUFBTSxNQS9CQTtBQWdDTkMsWUFBTSxNQWhDQTtBQWlDTkMsaUJBQVcsV0FqQ0w7QUFrQ05DLFlBQU0sTUFsQ0E7QUFtQ05DLGFBQU8sT0FuQ0Q7QUFvQ05DLGlCQUFXLE1BcENMO0FBcUNObEMsY0FBUSxRQXJDRjtBQXNDTm1DLHdCQUFrQixpQkF0Q1o7QUF1Q05DLDZCQUF1QjtBQXZDakIsS0F4Qk87O0FBa0VmQyxVQUFNO0FBQ0pDLHFCQUFlLGNBRFg7QUFFSkMsc0JBQWdCLGVBRlo7QUFHSlgsWUFBTSxNQUhGO0FBSUpZLGdCQUFVLFVBSk47QUFLSkMsdUJBQWlCLGdCQUxiO0FBTUpDLGFBQU87QUFOSCxLQWxFUzs7QUEyRWZDLGtCQUFjO0FBQ1pDLGFBQU8scUJBREs7QUFFWkMsWUFBTSxzQkFGTTtBQUdaWCxpQkFBVyxzQkFIQztBQUlaTSxnQkFBVSxxQkFKRTtBQUtaQyx1QkFBaUIsNEJBTEw7QUFNWkMsYUFBTyxrQkFOSztBQU9adEMsaUJBQVcsc0JBUEM7QUFRWkMsZUFBUyxvQkFSRztBQVNaeUMseUJBQW1CO0FBVFAsS0EzRUM7O0FBdUZmQyxZQUFRO0FBQ05DLGNBQVE7QUFERjtBQXZGTyxHQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSxNQUFJQyxnQkFBZ0IsRUFBcEI7QUFDQSxNQUFJQyx5QkFBeUIsRUFBN0I7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbUJNQyxPOzs7Ozs7O3dDQUtxQkMsTyxFQUFTO0FBQ2hDRixpQ0FBeUJFLE9BQXpCO0FBQ0Q7OzsyQkFFV0MsTSxFQUFRQyxHLEVBQUtDLEksRUFBTUMsTyxFQUFTQyxLLEVBQU9DLE0sRUFBUUMsUyxFQUFXO0FBQ2hFLFlBQUlELE1BQUosRUFBWTtBQUNWLGNBQUlQLFFBQVFTLGVBQVosRUFBNkI7QUFDM0I7QUFDQSxtQkFBT1QsUUFBUVUsZUFBUixDQUF3QkMsU0FBeEIsQ0FBUDtBQUNEO0FBQ0RYLGtCQUFRUyxlQUFSLEdBQTBCLElBQTFCO0FBQ0Q7O0FBRUQsWUFBSSxPQUFPRyxjQUFQLEtBQTJCLFdBQS9CLEVBQTRDO0FBQzFDLGNBQUlDLFNBQVNDLFFBQVQsS0FBc0IsT0FBdEIsSUFBaUNYLElBQUlZLE9BQUosQ0FBWSxRQUFaLEtBQXlCLENBQTlELEVBQWlFO0FBQy9EWixrQkFBTSxVQUFVQSxJQUFJYSxTQUFKLENBQWMsQ0FBZCxDQUFoQjtBQUNEO0FBQ0Q7QUFDQSxpQkFBT2hCLFFBQVFpQixRQUFSLENBQWlCQyxLQUFqQixDQUF1QixJQUF2QixFQUE2QlAsU0FBN0IsQ0FBUDtBQUNEOztBQUVELFlBQUlRLFVBQVUsS0FBZDs7QUFFQSxZQUFJQyxNQUFNLElBQUlDLGNBQUosRUFBVjtBQUNBRCxZQUFJRSxrQkFBSixHQUF5QixZQUFZO0FBQ25DLGNBQUlGLElBQUlHLFVBQUosS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsZ0JBQUlKLE9BQUosRUFBYTtBQUNYO0FBQ0Q7QUFDREEsc0JBQVUsSUFBVjs7QUFFQSxnQkFBSUssaUJBQUo7QUFDQSxnQkFBSUMsY0FBYyxLQUFsQjtBQUNBLGdCQUFJakIsU0FBSixFQUFlO0FBQ2JnQix5QkFBV0osSUFBSU0sWUFBZjtBQUNELGFBRkQsTUFFTztBQUNMLGtCQUFJO0FBQ0ZGLDJCQUFXRyxLQUFLQyxLQUFMLENBQVdSLElBQUlNLFlBQWYsQ0FBWDtBQUNELGVBRkQsQ0FFRSxPQUFPRyxDQUFQLEVBQVU7QUFDVkMsMkJBQVcsWUFBWTtBQUNyQixzQkFBSXhCLEtBQUosRUFBVztBQUNUQSwwQkFBTSxJQUFOLEVBQVljLEdBQVo7QUFDRDtBQUNGLGlCQUpELEVBSUcsQ0FKSDtBQUtBSyw4QkFBYyxJQUFkO0FBQ0Q7QUFDRjs7QUFFRCxnQkFBSSxDQUFDQSxXQUFMLEVBQWtCO0FBQ2hCLGtCQUFJTCxJQUFJVyxNQUFKLElBQWMsR0FBZCxJQUFxQlgsSUFBSVcsTUFBSixHQUFhLEdBQXRDLEVBQTJDO0FBQ3pDRCwyQkFBVyxZQUFZO0FBQ3JCLHNCQUFJekIsT0FBSixFQUFhO0FBQ1hBLDRCQUFRbUIsUUFBUixFQUFrQkosR0FBbEI7QUFDRDtBQUNGLGlCQUpELEVBSUcsQ0FKSDtBQUtELGVBTkQsTUFNTztBQUNMVSwyQkFBVyxZQUFZO0FBQ3JCLHNCQUFJeEIsS0FBSixFQUFXO0FBQ1RBLDBCQUFNa0IsUUFBTixFQUFnQkosR0FBaEI7QUFDRDtBQUNGLGlCQUpELEVBSUcsQ0FKSDtBQUtEO0FBQ0Y7O0FBRUQsZ0JBQUliLE1BQUosRUFBWTtBQUNWUCxzQkFBUVMsZUFBUixHQUEwQixLQUExQjtBQUNBVCxzQkFBUWdDLGVBQVI7QUFDRDtBQUNGO0FBQ0YsU0E3Q0Q7QUE4Q0FaLFlBQUlhLElBQUosQ0FBUy9CLE1BQVQsRUFBaUJDLEdBQWpCLEVBQXNCLElBQXRCO0FBQ0FpQixZQUFJYyxnQkFBSixDQUFxQixjQUFyQixFQUFxQyxZQUFyQyxFQW5FZ0UsQ0FtRVo7QUFDcERkLFlBQUllLElBQUosQ0FBUy9CLElBQVQ7QUFDQTBCLG1CQUFXLFlBQVk7QUFDckIsY0FBSSxDQUFDWCxPQUFMLEVBQWM7QUFDWkMsZ0JBQUlnQixLQUFKO0FBQ0Q7QUFDRixTQUpELEVBSUdyQyx5QkFBeUIsSUFKNUI7QUFLRDs7OytCQUVlRyxNLEVBQVFDLEcsRUFBS0MsSSxFQUFNQyxPLEVBQVNDLEssRUFBT0MsTSxFQUFRQyxTLEVBQVc7QUFDcEUsWUFBSTZCLE1BQU0sSUFBSXpCLGNBQUosRUFBVjtBQUNBeUIsWUFBSUMsTUFBSixHQUFhLFlBQVk7QUFDdkIsY0FBSWQsaUJBQUo7QUFDQSxjQUFJQyxjQUFjLEtBQWxCO0FBQ0EsY0FBSWpCLFNBQUosRUFBZTtBQUNiZ0IsdUJBQVdhLElBQUlYLFlBQWY7QUFDRCxXQUZELE1BRU87QUFDTCxnQkFBSTtBQUNGRix5QkFBV0csS0FBS0MsS0FBTCxDQUFXUyxJQUFJWCxZQUFmLENBQVg7QUFDRCxhQUZELENBRUUsT0FBT0csQ0FBUCxFQUFVO0FBQ1ZDLHlCQUFXLFlBQVk7QUFDckIsb0JBQUl4QixLQUFKLEVBQVc7QUFDVEEsd0JBQU0sSUFBTixFQUFZK0IsR0FBWjtBQUNEO0FBQ0YsZUFKRCxFQUlHLENBSkg7QUFLQVosNEJBQWMsSUFBZDtBQUNEO0FBQ0Y7QUFDRCxjQUFJLENBQUNBLFdBQUwsRUFBa0I7QUFDaEJLLHVCQUFXLFlBQVk7QUFDckIsa0JBQUl6QixPQUFKLEVBQWE7QUFDWEEsd0JBQVFtQixRQUFSLEVBQWtCYSxHQUFsQjtBQUNEO0FBQ0YsYUFKRCxFQUlHLENBSkg7QUFLRDtBQUNELGNBQUk5QixNQUFKLEVBQVk7QUFDVlAsb0JBQVFTLGVBQVIsR0FBMEIsS0FBMUI7QUFDQVQsb0JBQVFnQyxlQUFSO0FBQ0Q7QUFDRixTQTVCRDtBQTZCQUssWUFBSUUsT0FBSixHQUFjRixJQUFJRyxTQUFKLEdBQWdCLFlBQVk7QUFDeENWLHFCQUFXLFlBQVk7QUFDckIsZ0JBQUl4QixLQUFKLEVBQVc7QUFDVEEsb0JBQU0sSUFBTixFQUFZK0IsR0FBWjtBQUNEO0FBQ0YsV0FKRCxFQUlHLENBSkg7QUFLQSxjQUFJOUIsTUFBSixFQUFZO0FBQ1ZQLG9CQUFRUyxlQUFSLEdBQTBCLEtBQTFCO0FBQ0FULG9CQUFRZ0MsZUFBUjtBQUNEO0FBQ0YsU0FWRDtBQVdBSyxZQUFJSSxVQUFKLEdBQWlCLFlBQVksQ0FDNUIsQ0FERDtBQUVBSixZQUFJSixJQUFKLENBQVMvQixNQUFULEVBQWlCQyxHQUFqQjtBQUNBa0MsWUFBSUssT0FBSixHQUFjM0MseUJBQXlCLElBQXZDO0FBQ0FzQyxZQUFJRixJQUFKLENBQVMvQixJQUFUO0FBQ0Q7OztzQ0FFc0J1QyxJLEVBQU07QUFDM0I3QyxzQkFBYzhDLElBQWQsQ0FBbUJELElBQW5CO0FBQ0Q7Ozt3Q0FFd0I7QUFDdkIsWUFBSUEsT0FBTzdDLGNBQWMrQyxLQUFkLEVBQVg7QUFDQSxZQUFJRixJQUFKLEVBQVU7QUFDUjNDLGtCQUFROEMsSUFBUixDQUFhNUIsS0FBYixDQUFtQixJQUFuQixFQUF5QnlCLElBQXpCO0FBQ0Q7QUFDRjs7Ozs7O0FBR0huSCxTQUFPQyxPQUFQLEdBQWlCdUUsT0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVMrQyxFQUFULENBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFFBQUlILE1BQU1DLENBQVYsRUFBYSxPQUFPRCxNQUFNLENBQU4sSUFBVyxJQUFJQSxDQUFKLElBQVMsSUFBSUMsQ0FBL0I7QUFDYjtBQUNBLFFBQUlELEtBQUssSUFBTCxJQUFhQyxLQUFLLElBQXRCLEVBQTRCLE9BQU9ELE1BQU1DLENBQWI7QUFDNUI7QUFDQSxRQUFJRCxhQUFhSSxDQUFqQixFQUFvQkosSUFBSUEsRUFBRUssUUFBTjtBQUNwQixRQUFJSixhQUFhRyxDQUFqQixFQUFvQkgsSUFBSUEsRUFBRUksUUFBTjtBQUNwQjtBQUNBLFFBQUlDLFlBQVlDLE9BQU9DLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQlYsQ0FBL0IsQ0FBaEI7QUFDQSxRQUFJTSxhQUFhQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JULENBQS9CLENBQWpCLEVBQW9ELE9BQU8sS0FBUDtBQUNwRCxZQUFRSyxTQUFSO0FBQ0k7QUFDRixXQUFLLGlCQUFMO0FBQ0U7QUFDQTtBQUNBLGVBQU9OLEtBQUtXLE9BQU9WLENBQVAsQ0FBWjtBQUNGLFdBQUssaUJBQUw7QUFDRTtBQUNBO0FBQ0EsZUFBT0QsS0FBSyxDQUFDQSxDQUFOLEdBQVVDLEtBQUssQ0FBQ0EsQ0FBaEIsR0FBcUJELEtBQUssQ0FBTCxHQUFTLElBQUlBLENBQUosSUFBUyxJQUFJQyxDQUF0QixHQUEwQkQsS0FBSyxDQUFDQyxDQUE1RDtBQUNGLFdBQUssZUFBTDtBQUNBLFdBQUssa0JBQUw7QUFDRTtBQUNBO0FBQ0E7QUFDQSxlQUFPLENBQUNELENBQUQsSUFBTSxDQUFDQyxDQUFkO0FBQ0E7QUFDRixXQUFLLGlCQUFMO0FBQ0UsZUFBT0QsRUFBRVksTUFBRixJQUFZWCxFQUFFVyxNQUFkLElBQ0haLEVBQUVhLE1BQUYsSUFBWVosRUFBRVksTUFEWCxJQUVIYixFQUFFYyxTQUFGLElBQWViLEVBQUVhLFNBRmQsSUFHSGQsRUFBRWUsVUFBRixJQUFnQmQsRUFBRWMsVUFIdEI7QUFsQko7QUF1QkEsUUFBSSxRQUFPZixDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBWixJQUF3QixRQUFPQyxDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBeEMsRUFBa0QsT0FBTyxLQUFQO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFFBQUllLFNBQVNkLE9BQU9jLE1BQXBCO0FBQ0EsV0FBT0EsUUFBUCxFQUFpQjtBQUNmO0FBQ0E7QUFDQSxVQUFJZCxPQUFPYyxNQUFQLEtBQWtCaEIsQ0FBdEIsRUFBeUIsT0FBT0csT0FBT2EsTUFBUCxLQUFrQmYsQ0FBekI7QUFDMUI7QUFDRDtBQUNBQyxXQUFPTixJQUFQLENBQVlJLENBQVo7QUFDQUcsV0FBT1AsSUFBUCxDQUFZSyxDQUFaO0FBQ0EsUUFBSWdCLE9BQU8sQ0FBWDtBQUNBLFFBQUlDLFNBQVMsSUFBYjtBQUNBO0FBQ0EsUUFBSVosYUFBYSxnQkFBakIsRUFBbUM7QUFDakM7QUFDQVcsYUFBT2pCLEVBQUVnQixNQUFUO0FBQ0FFLGVBQVNELFFBQVFoQixFQUFFZSxNQUFuQjtBQUNBLFVBQUlFLE1BQUosRUFBWTtBQUNWO0FBQ0EsZUFBT0QsTUFBUCxFQUFlO0FBQ2IsY0FBSSxFQUFFQyxTQUFTbkIsR0FBR0MsRUFBRWlCLElBQUYsQ0FBSCxFQUFZaEIsRUFBRWdCLElBQUYsQ0FBWixFQUFxQmYsTUFBckIsRUFBNkJDLE1BQTdCLENBQVgsQ0FBSixFQUFzRDtBQUN2RDtBQUNGO0FBQ0YsS0FWRCxNQVVPO0FBQ0w7QUFDQTtBQUNBLFVBQUlnQixRQUFRbkIsRUFBRW9CLFdBQWQ7QUFDQSxVQUFJQyxRQUFRcEIsRUFBRW1CLFdBQWQ7QUFDQSxVQUFJRCxVQUFVRSxLQUFWLElBQW1CLEVBQUVqQixFQUFFa0IsVUFBRixDQUFhSCxLQUFiLEtBQ3BCQSxpQkFBaUJBLEtBREcsSUFDT2YsRUFBRWtCLFVBQUYsQ0FBYUQsS0FBYixDQURQLElBRXBCQSxpQkFBaUJBLEtBRkMsQ0FBdkIsRUFFK0I7QUFDN0IsZUFBTyxLQUFQO0FBQ0Q7QUFDRDtBQUNBLFdBQUssSUFBSUUsSUFBVCxJQUFnQnZCLENBQWhCLEVBQW1CO0FBQ2pCLFlBQUlJLEVBQUVvQixHQUFGLENBQU14QixDQUFOLEVBQVN1QixJQUFULENBQUosRUFBbUI7QUFDakI7QUFDQU47QUFDQTtBQUNBLGNBQUksRUFBRUMsU0FBU2QsRUFBRW9CLEdBQUYsQ0FBTXZCLENBQU4sRUFBU3NCLElBQVQsS0FBaUJ4QixHQUFHQyxFQUFFdUIsSUFBRixDQUFILEVBQVd0QixFQUFFc0IsSUFBRixDQUFYLEVBQW1CckIsTUFBbkIsRUFBMkJDLE1BQTNCLENBQTVCLENBQUosRUFBcUU7QUFDbkU7QUFDRDtBQUNGO0FBQ0Y7QUFDRDtBQUNBLFVBQUllLE1BQUosRUFBWTtBQUNWLGFBQUtLLEdBQUwsSUFBWXRCLENBQVosRUFBZTtBQUNiLGNBQUlHLEVBQUVvQixHQUFGLENBQU12QixDQUFOLEVBQVNzQixHQUFULEtBQWlCLENBQUVOLE1BQXZCLEVBQWdDO0FBQ2pDO0FBQ0RDLGlCQUFTLENBQUNELElBQVY7QUFDRDtBQUNGO0FBQ0Q7QUFDQWYsV0FBT3VCLEdBQVA7QUFDQXRCLFdBQU9zQixHQUFQO0FBQ0EsV0FBT1AsTUFBUDtBQUNEOztNQUVLZCxDOzs7Ozs7OzhCQUVXc0IsRyxFQUFLO0FBQ2xCO0FBQ0FDLGFBQUtDLE1BQU1sQixJQUFOLENBQVcvQyxTQUFYLEVBQXNCLENBQXRCLENBQUwsRUFBK0IsVUFBVWlELE1BQVYsRUFBa0I7QUFDL0MsZUFBSyxJQUFJaUIsSUFBVCxJQUFpQmpCLE1BQWpCLEVBQXlCO0FBQ3ZCLGdCQUFJLEdBQUdrQixjQUFILENBQWtCcEIsSUFBbEIsQ0FBdUJFLE1BQXZCLEVBQStCaUIsSUFBL0IsQ0FBSixFQUEwQztBQUN4Q0gsa0JBQUlHLElBQUosSUFBWWpCLE9BQU9pQixJQUFQLENBQVo7QUFDRDtBQUNGO0FBQ0YsU0FORDtBQU9BLGVBQU9ILEdBQVA7QUFDRDs7O2lDQUVpQkEsRyxFQUFLO0FBQ3JCLGVBQU8sT0FBT0EsR0FBUCxLQUFlLFVBQXRCO0FBQ0Q7OzswQkFFVUEsRyxFQUFLSCxHLEVBQUs7QUFDbkIsZUFBT08sZUFBZXBCLElBQWYsQ0FBb0JnQixHQUFwQixFQUF5QkgsR0FBekIsQ0FBUDtBQUNEOzs7OEJBR2N2QixDLEVBQUdDLEMsRUFBRztBQUNuQixlQUFPRixHQUFHQyxDQUFILEVBQU1DLENBQU4sRUFBUyxFQUFULEVBQWEsRUFBYixDQUFQO0FBQ0Q7Ozs7OztvQkFHWUcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQzdHVDJCLFc7QUFDSjs7O0FBR0EsMkJBQWM7QUFBQTs7QUFDWixXQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNEOztBQUVEOzs7Ozs7Ozs7OzBCQU1JVixHLEVBQUtXLEssRUFBTztBQUNkLFlBQUksT0FBT0EsS0FBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRCxZQUFJLEtBQUtGLFNBQVQsRUFBb0I7QUFDbEIsZUFBS0EsU0FBTCxJQUFrQixHQUFsQjtBQUNEO0FBQ0QsYUFBS0EsU0FBTCxJQUFrQlQsTUFBTSxHQUFOLEdBQVlZLG1CQUFtQkQsS0FBbkIsQ0FBOUI7QUFDQSxhQUFLRCxTQUFMLENBQWVWLEdBQWYsSUFBc0JXLEtBQXRCO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7OzsyQkFRSUUsSyxFQUFNO0FBQ1QsWUFBSUEsS0FBSixFQUFVO0FBQ1IsZUFBS0MsS0FBTCxHQUFhRCxLQUFiO0FBQ0EsaUJBQU8sSUFBUDtBQUNEO0FBQ0QsZUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OztvQ0FRYUMsSyxFQUFPQyxTLEVBQVc7QUFDOUIsZUFBTyxLQUFLQyxHQUFMLENBQVMsb0JBQVUzSSxNQUFWLENBQWlCRSxNQUExQixFQUFrQ3VJLEtBQWxDLEVBQ0ZFLEdBREUsQ0FDRSxvQkFBVTNJLE1BQVYsQ0FBaUJELE1BRG5CLEVBQzJCLG9CQUFVQSxNQURyQyxFQUVGNEksR0FGRSxDQUVFLG9CQUFVM0ksTUFBVixDQUFpQkcsVUFGbkIsRUFFK0J1SSxTQUYvQixDQUFQO0FBR0Q7Ozs4QkFNTztBQUNOLGVBQU8sS0FBS1AsU0FBWjtBQUNEOzs7a0NBTVc7QUFDVixlQUFPLEtBQUtDLFNBQVo7QUFDRDs7Ozs7O0FBRUg7O0FBRUF6SixTQUFPQyxPQUFQLEdBQWlCc0osV0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE1BQU1VLGNBQWMsQ0FBQztBQUNuQkMsWUFBUUMsVUFBVUMsU0FEQztBQUVuQkMsZUFBVyxRQUZRO0FBR25CQyxjQUFVO0FBSFMsR0FBRCxFQUlqQjtBQUNESixZQUFRQyxVQUFVQyxTQURqQjtBQUVEQyxlQUFXLFNBRlY7QUFHREUsbUJBQWUsVUFIZDtBQUlERCxjQUFVO0FBSlQsR0FKaUIsRUFTakI7QUFDREosWUFBUUMsVUFBVUssTUFEakI7QUFFREgsZUFBVyxPQUZWO0FBR0RDLGNBQVUsUUFIVDtBQUlEQyxtQkFBZTtBQUpkLEdBVGlCLEVBY2pCO0FBQ0RsQixVQUFNb0IsT0FBT0MsS0FEWjtBQUVESixjQUFVLE9BRlQ7QUFHREMsbUJBQWU7QUFIZCxHQWRpQixFQWtCakI7QUFDREwsWUFBUUMsVUFBVUssTUFEakI7QUFFREgsZUFBVyxNQUZWO0FBR0RDLGNBQVU7QUFIVCxHQWxCaUIsRUFzQmpCO0FBQ0RKLFlBQVFDLFVBQVVLLE1BRGpCO0FBRURILGVBQVcsS0FGVjtBQUdEQyxjQUFVO0FBSFQsR0F0QmlCLEVBMEJqQjtBQUNESixZQUFRQyxVQUFVQyxTQURqQjtBQUVEQyxlQUFXLFNBRlY7QUFHREMsY0FBVTtBQUhULEdBMUJpQixFQThCakI7QUFDREosWUFBUUMsVUFBVUssTUFEakI7QUFFREgsZUFBVyxRQUZWO0FBR0RDLGNBQVU7QUFIVCxHQTlCaUIsRUFrQ2pCLEVBQUU7QUFDSEosWUFBUUMsVUFBVUMsU0FEakI7QUFFREMsZUFBVyxVQUZWO0FBR0RDLGNBQVU7QUFIVCxHQWxDaUIsRUFzQ2pCO0FBQ0RKLFlBQVFDLFVBQVVDLFNBRGpCO0FBRURDLGVBQVcsTUFGVjtBQUdEQyxjQUFVLFVBSFQ7QUFJREMsbUJBQWU7QUFKZCxHQXRDaUIsRUEyQ2pCO0FBQ0RMLFlBQVFDLFVBQVVDLFNBRGpCO0FBRURDLGVBQVcsT0FGVjtBQUdEQyxjQUFVLFNBSFQ7QUFJREMsbUJBQWU7QUFKZCxHQTNDaUIsRUFnRGpCLEVBQUU7QUFDSEwsWUFBUUMsVUFBVUMsU0FEakI7QUFFREMsZUFBVyxTQUZWO0FBR0RDLGNBQVUsVUFIVDtBQUlEQyxtQkFBZTtBQUpkLEdBaERpQixDQUFwQjs7QUF1REEsTUFBTUksU0FBUyxDQUFDO0FBQ2RULFlBQVFDLFVBQVVTLFFBREo7QUFFZFAsZUFBVyxLQUZHO0FBR2RDLGNBQVU7QUFISSxHQUFELEVBSVo7QUFDREosWUFBUUMsVUFBVVMsUUFEakI7QUFFRFAsZUFBVyxLQUZWO0FBR0RDLGNBQVU7QUFIVCxHQUpZLEVBUVo7QUFDREosWUFBUUMsVUFBVUMsU0FEakI7QUFFREMsZUFBVyxRQUZWO0FBR0RDLGNBQVU7QUFIVCxHQVJZLEVBWVo7QUFDREosWUFBUUMsVUFBVVMsUUFEakI7QUFFRFAsZUFBVyxPQUZWO0FBR0RDLGNBQVU7QUFIVCxHQVpZLENBQWY7O0FBa0JBOztNQUNNTyxlO0FBQ0osK0JBQWM7QUFBQTs7QUFDWixXQUFLQyxPQUFMLEdBQWUsS0FBS0MsWUFBTCxDQUFrQmQsV0FBbEIsS0FDWCxvQkFESjtBQUVBLFdBQUtlLE9BQUwsR0FBZSxLQUFLQyxhQUFMLENBQW1CZCxVQUFVQyxTQUE3QixLQUNYLEtBQUthLGFBQUwsQ0FBbUJkLFVBQVVlLFVBQTdCLENBRFcsSUFDaUMsb0JBRGhEO0FBRUEsV0FBS0MsRUFBTCxHQUFVLEtBQUtKLFlBQUwsQ0FBa0JKLE1BQWxCLEtBQTZCLGVBQXZDO0FBQ0Q7Ozs7bUNBRVkvRixJLEVBQU07QUFDakIsYUFBSyxJQUFJd0csSUFBSSxDQUFiLEVBQWdCQSxJQUFJeEcsS0FBSzRELE1BQXpCLEVBQWlDNEMsR0FBakMsRUFBc0M7QUFDcEMsY0FBSUMsYUFBYXpHLEtBQUt3RyxDQUFMLEVBQVFsQixNQUF6QjtBQUNBLGNBQUlvQixXQUFXMUcsS0FBS3dHLENBQUwsRUFBUS9CLElBQXZCO0FBQ0EsZUFBS2tDLG1CQUFMLEdBQTJCM0csS0FBS3dHLENBQUwsRUFBUWIsYUFBUixJQUF5QjNGLEtBQUt3RyxDQUFMLEVBQVFkLFFBQTVEO0FBQ0EsY0FBSWUsVUFBSixFQUFnQjtBQUNkLGdCQUFJQSxXQUFXOUYsT0FBWCxDQUFtQlgsS0FBS3dHLENBQUwsRUFBUWYsU0FBM0IsS0FBeUMsQ0FBQyxDQUE5QyxFQUNFLE9BQU96RixLQUFLd0csQ0FBTCxFQUFRZCxRQUFmO0FBQ0gsV0FIRCxNQUdPLElBQUlnQixRQUFKLEVBQ0wsT0FBTzFHLEtBQUt3RyxDQUFMLEVBQVFkLFFBQWY7QUFDSDtBQUNGOzs7b0NBRWFlLFUsRUFBWTtBQUN4QixZQUFJLENBQUNBLFVBQUwsRUFBaUI7QUFDZjtBQUNEO0FBQ0QsWUFBSUcsUUFBUUgsV0FBVzlGLE9BQVgsQ0FBbUIsS0FBS2dHLG1CQUF4QixDQUFaO0FBQ0EsWUFBSUMsU0FBUyxDQUFDLENBQWQsRUFBaUI7QUFDZjtBQUNEO0FBQ0QsZUFBT0MsV0FBV0osV0FBVzdGLFNBQVgsQ0FBcUJnRyxRQUNuQyxLQUFLRCxtQkFBTCxDQUF5Qi9DLE1BRFUsR0FDRCxDQURwQixDQUFYLENBQVA7QUFFRDs7Ozs7O0FBR0h4SSxTQUFPQyxPQUFQLEdBQWlCNEssZUFBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHQSxNQUFNYSxnQ0FDRiwrRUFDQSxlQUZKOztBQUlBLE1BQUlDLGFBQUo7QUFDQSxNQUFJQyxrQkFBSjtBQUNBLE1BQUlDLGNBQWMsS0FBbEI7QUFDQSxNQUFJQyxlQUFlLEtBQW5CO0FBQ0EsTUFBSUMsNEJBQTRCLElBQWhDOztBQUVBOzs7O01BR01DLFc7QUFDSjs7Ozs7QUFLQSx5QkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQkwsa0JBQVlLLFFBQVo7QUFDQU4sYUFBTyxJQUFQO0FBQ0EsVUFBSXhCLGFBQWFBLFVBQVUrQixhQUF2QixJQUNBLG1CQUFtQi9CLFNBRG5CLElBQ2dDLGlCQUFpQk0sTUFEckQsRUFDNkQ7QUFDM0RvQixzQkFBYyxJQUFkO0FBQ0FGLGFBQUtRLFFBQUw7QUFDRDtBQUNGOztBQUVEOzs7Ozs7OzsyQ0FJcUI7QUFDbkIsZUFBT04sV0FBUDtBQUNEOzs7NENBTXFCO0FBQ3BCLFlBQUksQ0FBQ0EsV0FBTCxFQUFrQjtBQUNoQixpQkFBTyxJQUFJTyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQSxtQkFBTyw0Q0FBUDtBQUNELFdBRk0sQ0FBUDtBQUdEO0FBQ0QsZUFBTyxLQUFLQyw2QkFBTCxHQUNGQyxJQURFLENBQ0csVUFBQ0MsWUFBRCxFQUFrQjtBQUN0QixpQkFBTyxJQUFJTCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzlCLGdCQUFJLENBQUNJLFlBQUwsRUFBbUI7QUFDakJKLHNCQUFRLEtBQVI7QUFDRCxhQUZELE1BRU87QUFDTEksMkJBQWFDLFdBQWIsQ0FBeUJDLGVBQXpCLEdBQ0tILElBREwsQ0FDVSxVQUFVSSxZQUFWLEVBQXdCO0FBQzVCZCwrQkFBZWMsaUJBQWlCLElBQWhDO0FBQ0Esb0JBQUlkLFlBQUosRUFBa0I7QUFDaEJILHVCQUFLa0IsOEJBQUwsQ0FBb0NELFlBQXBDO0FBQ0Q7QUFDRFAsd0JBQVFQLFlBQVI7QUFDRCxlQVBMO0FBUUQ7QUFDRixXQWJNLENBQVA7QUFjRCxTQWhCRSxDQUFQO0FBaUJEOzs7K0JBUVFnQixnQixFQUFrQkMsUSxFQUFVO0FBQ25DLFlBQUksQ0FBQ2xCLFdBQUwsRUFBa0I7QUFDaEJtQixrQkFBUUMsR0FBUixDQUFZLDRDQUFaO0FBQ0FGLG1CQUFTLEtBQVQ7QUFDRDtBQUNENUMsa0JBQVUrQixhQUFWLENBQXdCQyxRQUF4QixDQUNJVyxtQkFBbUJBLGdCQUFuQixHQUFzQyxZQUQxQyxFQUVLTixJQUZMLENBRVUsVUFBVUMsWUFBVixFQUF3QjtBQUM1QlYsc0NBQTRCVSxZQUE1Qjs7QUFFQTtBQUNBVixvQ0FBMEJXLFdBQTFCLENBQXNDQyxlQUF0QyxHQUNLSCxJQURMLENBQ1UsVUFBVUksWUFBVixFQUF3QjtBQUM1QmQsMkJBQWUsRUFBRWMsaUJBQWlCLElBQW5CLENBQWY7QUFDQSxnQkFBSWQsWUFBSixFQUFrQjtBQUNoQkgsbUJBQUtrQiw4QkFBTCxDQUFvQ0QsWUFBcEM7QUFDRDtBQUNELGdCQUFJRyxRQUFKLEVBQWM7QUFDWkEsdUJBQVNqQixZQUFUO0FBQ0Q7QUFDRixXQVRMO0FBVUQsU0FoQkwsRUFpQktvQixLQWpCTCxDQWlCVyxVQUFVcEksS0FBVixFQUFpQjtBQUN0QmtJLGtCQUFRQyxHQUFSLENBQVksa0NBQVosRUFBZ0RuSSxLQUFoRDtBQUNELFNBbkJMO0FBb0JEOzs7c0NBTWU7QUFDZCxZQUFNcUksdUJBQ0YsS0FBS0MsbUJBQUwsQ0FBeUIxQiw2QkFBekIsQ0FESjtBQUVBLGVBQU8sSUFBSVUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxpQkFBT1AsMEJBQTBCVyxXQUExQixDQUFzQ1csU0FBdEMsQ0FBZ0Q7QUFDckRDLDZCQUFpQixJQURvQztBQUVyREgsa0NBQXNCQTtBQUYrQixXQUFoRCxFQUlGWCxJQUpFLENBSUcsVUFBVUksWUFBVixFQUF3QjtBQUM1QixnQkFBSUEsWUFBSixFQUFrQjtBQUNoQmpCLG1CQUFLa0IsOEJBQUwsQ0FBb0NELFlBQXBDO0FBQ0FkLDZCQUFlLElBQWY7QUFDQSxxQkFBT08sUUFBUVAsWUFBUixDQUFQO0FBQ0Q7QUFDREEsMkJBQWUsS0FBZjtBQUNBLG1CQUFPUSxRQUFQO0FBQ0QsV0FaRSxFQWFGWSxLQWJFLENBYUksVUFBVUssR0FBVixFQUFlO0FBQ3BCLG1CQUFPakIsT0FBTyw2Q0FBNkNpQixHQUFwRCxDQUFQO0FBQ0QsV0FmRSxDQUFQO0FBZ0JELFNBakJNLENBQVA7QUFrQkQ7Ozt3Q0FNaUI7QUFDaEIsZUFBTyxJQUFJbkIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1Asb0NBQTBCVyxXQUExQixDQUFzQ0MsZUFBdEMsR0FDS0gsSUFETCxDQUNVLFVBQVVJLFlBQVYsRUFBd0I7QUFDNUIsZ0JBQUlBLFlBQUosRUFBa0I7QUFDaEIscUJBQU9BLGFBQWFZLFdBQWIsRUFBUDtBQUNEO0FBQ0QsbUJBQU9sQixRQUFQO0FBQ0QsV0FOTCxFQU9LWSxLQVBMLENBT1csVUFBVXBJLEtBQVYsRUFBaUI7QUFDdEJ3SCxtQkFBTyxvQ0FBb0N4SCxLQUEzQztBQUNELFdBVEwsRUFVSzBILElBVkwsQ0FVVSxVQUFVM0gsT0FBVixFQUFtQjtBQUN2QixnQkFBSUEsT0FBSixFQUFhO0FBQ1hpSCw2QkFBZSxLQUFmO0FBQ0EscUJBQU9PLFNBQVA7QUFDRDtBQUNELG1CQUFPQyxRQUFQO0FBQ0QsV0FoQkw7QUFpQkQsU0FsQk0sQ0FBUDtBQW1CRDs7O3NEQU0rQjtBQUM5QixlQUFPLElBQUlGLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUIsY0FBSU4seUJBQUosRUFBK0I7QUFDN0JNLG9CQUFRTix5QkFBUjtBQUNELFdBRkQsTUFFTztBQUNMNUIsc0JBQVUrQixhQUFWLENBQXdCdUIsZUFBeEIsR0FBMENqQixJQUExQyxDQUErQyxVQUFDQyxZQUFELEVBQWtCO0FBQy9ESixzQkFBUUksWUFBUjtBQUNELGFBRkQ7QUFHRDtBQUNGLFNBUk0sQ0FBUDtBQVNEOzs7MENBT21CaUIsWSxFQUFjO0FBQ2hDLFlBQU1DLFVBQVUsSUFBSUMsTUFBSixDQUFXLENBQUMsSUFBSUYsYUFBYWxGLE1BQWIsR0FBc0IsQ0FBM0IsSUFBZ0MsQ0FBM0MsQ0FBaEI7QUFDQSxZQUFNcUYsU0FBUyxDQUFDSCxlQUFlQyxPQUFoQixFQUNWRyxPQURVLENBQ0YsS0FERSxFQUNLLEdBREwsRUFFVkEsT0FGVSxDQUVGLElBRkUsRUFFSSxHQUZKLENBQWY7O0FBSUEsWUFBTUMsVUFBVXRELE9BQU91RCxJQUFQLENBQVlILE1BQVosQ0FBaEI7QUFDQSxZQUFNSSxjQUFjLElBQUlDLFVBQUosQ0FBZUgsUUFBUXZGLE1BQXZCLENBQXBCOztBQUVBLGFBQUssSUFBSTRDLElBQUksQ0FBYixFQUFnQkEsSUFBSTJDLFFBQVF2RixNQUE1QixFQUFvQyxFQUFFNEMsQ0FBdEMsRUFBeUM7QUFDdkM2QyxzQkFBWTdDLENBQVosSUFBaUIyQyxRQUFRSSxVQUFSLENBQW1CL0MsQ0FBbkIsQ0FBakI7QUFDRDtBQUNELGVBQU82QyxXQUFQO0FBQ0Q7OzsyQ0FPb0JyQixZLEVBQWM7QUFDakMsWUFBSTdELE1BQU02RCxhQUFhd0IsTUFBYixHQUFzQnhCLGFBQWF3QixNQUFiLENBQW9CLFFBQXBCLENBQXRCLEdBQXNELEVBQWhFO0FBQ0EsWUFBSUMsT0FBT3pCLGFBQWF3QixNQUFiLEdBQXNCeEIsYUFBYXdCLE1BQWIsQ0FBb0IsTUFBcEIsQ0FBdEIsR0FBb0QsRUFBL0Q7QUFDQSxZQUFJRSxXQUFXQyxLQUFLcEcsT0FBT3FHLFlBQVAsQ0FBb0I5SSxLQUFwQixDQUEwQixJQUExQixFQUFnQyxJQUFJd0ksVUFBSixDQUFlbkYsR0FBZixDQUFoQyxDQUFMLENBQWY7QUFDQSxZQUFJMEYsWUFBWUYsS0FBS3BHLE9BQU9xRyxZQUFQLENBQW9COUksS0FBcEIsQ0FBMEIsSUFBMUIsRUFBZ0MsSUFBSXdJLFVBQUosQ0FBZUcsSUFBZixDQUFoQyxDQUFMLENBQWhCO0FBQ0EsZUFBTztBQUNMSyxvQkFBVTlCLGFBQWE4QixRQURsQjtBQUVMM0YsZUFBS3VGLFFBRkE7QUFHTEQsZ0JBQU1JO0FBSEQsU0FBUDtBQUtEOzs7cURBTThCN0IsWSxFQUFjO0FBQzNDLFlBQUlBLFlBQUosRUFBa0I7QUFDaEIsY0FBSStCLHVCQUF1QixLQUFLQyxvQkFBTCxDQUEwQmhDLFlBQTFCLENBQTNCO0FBQ0EsY0FBSWlDLDZCQUE2QjFJLEtBQUsySSxTQUFMLENBQWVILG9CQUFmLENBQWpDO0FBQ0EsY0FBSUksNkJBQTZCbkQsVUFBVW9ELG9CQUFWLENBQzdCLG9CQUFVaEwsWUFBVixDQUF1QkcsaUJBRE0sQ0FBakM7QUFFQSxjQUFJLENBQUMscUJBQUU4SyxPQUFGLENBQVVGLDBCQUFWLEVBQXNDRiwwQkFBdEMsQ0FBTCxFQUF3RTtBQUN0RWpELHNCQUFVc0QsbUJBQVYsQ0FBOEIsb0JBQVVsTCxZQUFWLENBQXVCRyxpQkFBckQsRUFDSTBLLDBCQURKO0FBRUFqRCxzQkFBVXVELGdCQUFWLENBQTJCTiwwQkFBM0I7QUFDRDtBQUNGO0FBQ0Y7Ozs7OztvQkFHWTdDLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUM5TlRvRCxjO0FBQ0o7OztBQUdBLDhCQUFjO0FBQUE7O0FBQ1osV0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFdBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDRDs7QUFFRDs7Ozs7Ozs7OEJBSVFDLFUsRUFBWTtBQUNsQixZQUFJNUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUsyRCxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsMEJBQVFoSSxJQUFSLENBQWEsTUFBYixFQUFxQixhQUFhaUksVUFBYixHQUEwQixjQUEvQyxFQUErRCxFQUEvRCxFQUNJLFVBQVVDLElBQVYsRUFBZ0I7QUFDZCxjQUFJQyxRQUFRRCxLQUFLRSxLQUFMLENBQVcsR0FBWCxDQUFaO0FBQ0EsY0FBSUMsVUFBVUYsTUFBTSxDQUFOLENBQWQ7QUFDQSxjQUFJRyxZQUFZQyxTQUFTSixNQUFNLENBQU4sQ0FBVCxJQUFxQixDQUFyQixHQUF5QixJQUF6QztBQUNBOUQsZUFBS21FLE1BQUwsR0FBYyxJQUFJQyxTQUFKLENBQWMsV0FBV1IsVUFBWCxHQUN4Qix5QkFEd0IsR0FDSUksT0FEbEIsQ0FBZDtBQUVBLGNBQUlLLG9CQUFvQixJQUF4QjtBQUNBckUsZUFBS21FLE1BQUwsQ0FBWUcsTUFBWixHQUFxQixZQUFZO0FBQy9CdEUsaUJBQUswRCxTQUFMLEdBQWlCLElBQWpCO0FBQ0ExRCxpQkFBSzJELFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxnQkFBSTNELEtBQUtzRSxNQUFULEVBQWlCO0FBQ2Z0RSxtQkFBS3NFLE1BQUw7QUFDRDtBQUNERCxnQ0FBb0JFLFlBQVksWUFBWTtBQUMxQ3ZFLG1CQUFLbUUsTUFBTCxDQUFZbkosSUFBWixDQUFpQixNQUFqQjtBQUNELGFBRm1CLEVBRWpCaUosU0FGaUIsQ0FBcEI7QUFHRCxXQVREO0FBVUFqRSxlQUFLbUUsTUFBTCxDQUFZSyxPQUFaLEdBQXNCLFlBQVk7QUFDaEN4RSxpQkFBSzBELFNBQUwsR0FBaUIsS0FBakI7QUFDQWUsMEJBQWNKLGlCQUFkO0FBQ0EsZ0JBQUlyRSxLQUFLd0UsT0FBVCxFQUFrQjtBQUNoQnhFLG1CQUFLd0UsT0FBTDtBQUNEO0FBQ0YsV0FORDtBQU9BeEUsZUFBS21FLE1BQUwsQ0FBWU8sU0FBWixHQUF3QixVQUFVQyxLQUFWLEVBQWlCO0FBQ3ZDLGdCQUFJYixRQUFRYSxNQUFNMUwsSUFBTixDQUFXOEssS0FBWCxDQUFpQixHQUFqQixDQUFaO0FBQ0EsZ0JBQUlhLE9BQU9WLFNBQVNKLE1BQU0sQ0FBTixDQUFULENBQVg7QUFDQSxnQkFBSWMsUUFBUSxDQUFaLEVBQWU7QUFDYjVFLG1CQUFLbUUsTUFBTCxDQUFZbkosSUFBWixDQUFpQixLQUFqQjtBQUNELGFBRkQsTUFFTyxJQUFJNEosUUFBUSxDQUFaLEVBQWU7QUFDcEIsa0JBQUlDLFlBQVlmLE1BQU0sQ0FBTixDQUFoQjtBQUNBLGtCQUFJN0ssT0FBT3VCLEtBQUtDLEtBQUwsQ0FBV3FKLE1BQU1yRyxLQUFOLENBQVksQ0FBWixFQUFlcUgsSUFBZixDQUFvQixHQUFwQixDQUFYLENBQVg7QUFDQSxrQkFBSUgsU0FBUTFMLEtBQUssTUFBTCxDQUFaO0FBQ0Esa0JBQUl1QyxPQUFPdkMsS0FBSyxNQUFMLENBQVg7QUFDQSxrQkFBSTRMLFNBQUosRUFBZTtBQUNiN0UscUJBQUttRSxNQUFMLENBQVluSixJQUFaLENBQWlCLFNBQVM2SixTQUExQjtBQUNEO0FBQ0Qsa0JBQUk3RSxLQUFLMEUsU0FBVCxFQUFvQjtBQUNsQjFFLHFCQUFLMEUsU0FBTCxDQUFlQyxNQUFmLEVBQXNCbkosSUFBdEI7QUFDRDtBQUNGLGFBWE0sTUFXQSxJQUFJb0osUUFBUSxDQUFaLEVBQWU7QUFDcEJ2RCxzQkFBUUMsR0FBUixDQUFZLG1CQUFtQnFELE1BQU0xTCxJQUFyQztBQUNEO0FBQ0YsV0FuQkQ7QUFvQkErRyxlQUFLbUUsTUFBTCxDQUFZL0ksT0FBWixHQUFzQixVQUFVdUosS0FBVixFQUFpQjtBQUNyQzNFLGlCQUFLbUUsTUFBTCxDQUFZWSxLQUFaO0FBQ0EsZ0JBQUkvRSxLQUFLNUUsT0FBVCxFQUFrQjtBQUNoQjRFLG1CQUFLNUUsT0FBTCxDQUFhdUosS0FBYjtBQUNEO0FBQ0YsV0FMRDtBQU1ELFNBbkRMLEVBbURPLElBbkRQLEVBbURhLEtBbkRiLEVBbURvQixJQW5EcEIsQ0FtRHlCO0FBbkR6QjtBQXFERDs7OzJCQU9JSyxJLEVBQU14SixJLEVBQU07QUFDZixZQUFJLENBQUMsS0FBS2tJLFNBQVYsRUFBcUI7QUFDbkJyQyxrQkFBUUMsR0FBUixDQUFZLG9DQUFaO0FBQ0E7QUFDRDtBQUNELGFBQUs2QyxNQUFMLENBQVluSixJQUFaLENBQWlCLFNBQVNSLEtBQUsySSxTQUFMLENBQWU7QUFDbkMsa0JBQVE2QixJQUQyQjtBQUVuQyxrQkFBUXhKO0FBRjJCLFNBQWYsQ0FBMUI7QUFJRDs7Ozs7O0FBSUhuSCxTQUFPQyxPQUFQLEdBQWlCbVAsY0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQSxNQUFJd0IsNEJBQTRCLEVBQWhDO0FBQ0EsTUFBSUMsWUFBWSxFQUFoQjtBQUNBLE1BQUlDLGlCQUFpQixFQUFyQjtBQUNBLE1BQUlDLGtCQUFrQixFQUF0QjtBQUNBLE1BQUlDLFNBQVMsRUFBYjtBQUNBLE1BQUlDLGdCQUFnQixJQUFwQjtBQUNBLE1BQUlDLGlCQUFpQixDQUFyQjtBQUNBLE1BQUlDLFdBQVcsOEJBQWY7QUFDQSxNQUFJQyxjQUFjLGtCQUFsQjtBQUNBLE1BQUlDLHVCQUF1QkMsU0FBM0I7QUFDQSxNQUFJQyx5QkFBeUIsRUFBN0I7QUFDQSxNQUFJQyxtQkFBbUIsK0JBQXZCOztBQUVBOzs7Ozs7OztNQU9NQyxROzs7Ozs7O2lDQUljQyxPLEVBQVM7QUFDekIsWUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWjtBQUNEO0FBQ0RQLG1CQUFXTyxPQUFYO0FBQ0Q7OzsrQkFFZUMsSyxFQUFPO0FBQ3JCRixpQkFBU0csTUFBVCxHQUFrQkQsS0FBbEI7QUFDRDs7O3dDQU13QmxOLE8sRUFBUztBQUNoQywwQkFBUW9OLGlCQUFSLENBQTBCcE4sT0FBMUI7QUFDRDs7O2lEQUVpQ3FGLEssRUFBT2dJLFMsRUFBVztBQUNsREwsaUJBQVNNLE1BQVQsR0FBa0JqSSxLQUFsQjtBQUNBMkgsaUJBQVNPLFVBQVQsR0FBc0JGLFNBQXRCO0FBQ0FMLGlCQUFTUSxRQUFULEdBQW9CLElBQXBCO0FBQ0Q7OztnREFFZ0NuSSxLLEVBQU9nSSxTLEVBQVc7QUFDakRMLGlCQUFTTSxNQUFULEdBQWtCakksS0FBbEI7QUFDQTJILGlCQUFTTyxVQUFULEdBQXNCRixTQUF0QjtBQUNBTCxpQkFBU1EsUUFBVCxHQUFvQixLQUFwQjtBQUNEOzs7b0NBRW9CQyxJLEVBQU07QUFDekJkLHNCQUFjYyxJQUFkO0FBQ0Q7OztrQ0FFa0JDLFEsRUFBVTtBQUMzQlYsaUJBQVNXLFNBQVQsR0FBcUJELFFBQXJCO0FBQ0Q7OztvQ0FFb0JFLFcsRUFBYTtBQUNoQ1osaUJBQVNhLFlBQVQsR0FBd0JELFdBQXhCO0FBQ0Q7OztvQ0FFb0JFLFUsRUFBWTtBQUMvQmQsaUJBQVNlLFdBQVQsR0FBdUJELFVBQXZCO0FBQ0Q7OztxQ0FFcUJFLFcsRUFBYTtBQUNqQ2hCLGlCQUFTaUIsWUFBVCxHQUF3QkQsV0FBeEI7QUFDRDs7O29DQUVvQkUsVSxFQUFZO0FBQy9CbEIsaUJBQVNtQixXQUFULEdBQXVCRCxVQUF2QjtBQUNEOzs7dUNBRXVCRSxhLEVBQWU7QUFDckNwQixpQkFBU3FCLGNBQVQsR0FBMEJELGFBQTFCO0FBQ0Q7OzttQ0FFbUJFLFMsRUFBVztBQUM3QnRCLGlCQUFTdUIsVUFBVCxHQUFzQkQsU0FBdEI7QUFDRDs7O3lDQUV5QkUsWSxFQUFjQyxlLEVBQWlCO0FBQ3ZEakMsd0JBQWdCZ0MsWUFBaEI7QUFDQS9CLHlCQUFpQmdDLGVBQWpCO0FBQ0Q7OzttQ0FFbUJILFMsRUFBVztBQUM3QixlQUFPdEIsU0FBUzBCLE9BQVQsS0FBcUI3QixTQUFyQixHQUFpQ0csU0FBUzBCLE9BQTFDLEdBQ0gxQixTQUFTdUIsVUFEYjtBQUVEOzs7a0NBRWtCN0wsSSxFQUFNO0FBQ3ZCLFlBQUlpTSxVQUFVM0IsU0FBUzRCLFlBQVQsRUFBZDtBQUNBLGFBQUssSUFBSWpJLElBQUksQ0FBYixFQUFnQkEsSUFBSWpHLFVBQVVxRCxNQUE5QixFQUFzQzRDLEdBQXRDLEVBQTJDO0FBQ3pDZ0ksb0JBQVVBLFFBQVFqTyxVQUFVaUcsQ0FBbEIsQ0FBVjtBQUNEO0FBQ0QsZUFBT2dJLE9BQVA7QUFDRDs7O29DQUVvQjtBQUNuQixlQUFPdkMsYUFBYSxFQUFwQjtBQUNEOzs7OENBRThCeUMsTyxFQUFTO0FBQ3RDeEMsdUJBQWUxSixJQUFmLENBQW9Ca00sT0FBcEI7QUFDQSxZQUFJN0IsU0FBUzhCLFdBQWIsRUFBMEI7QUFDeEJELGtCQUFRN0IsU0FBUytCLGdCQUFqQjtBQUNEO0FBQ0Y7OztpREFFaUNGLE8sRUFBUztBQUN6QzFDLGtDQUEwQnhKLElBQTFCLENBQStCa00sT0FBL0I7QUFDQSxZQUFJN0IsU0FBU2dDLGlCQUFiLEVBQWdDO0FBQzlCSDtBQUNEO0FBQ0Y7OztpREFFaUNBLE8sRUFBUztBQUN6QyxZQUFJSSxNQUFNNUMsZUFBZXZMLE9BQWYsQ0FBdUIrTixPQUF2QixDQUFWO0FBQ0EsWUFBSUksT0FBTyxDQUFYLEVBQWM7QUFDWjVDLHlCQUFlNkMsTUFBZixDQUFzQkQsR0FBdEIsRUFBMkIsQ0FBM0I7QUFDRDtBQUNGOzs7b0RBRW9DSixPLEVBQVM7QUFDNUMsWUFBSUksTUFBTTlDLDBCQUEwQnJMLE9BQTFCLENBQWtDK04sT0FBbEMsQ0FBVjtBQUNBLFlBQUlJLE9BQU8sQ0FBWCxFQUFjO0FBQ1o5QyxvQ0FBMEIrQyxNQUExQixDQUFpQ0QsR0FBakMsRUFBc0MsQ0FBdEM7QUFDRDtBQUNGOzs7NEJBRVlFLE0sRUFBUUMsYyxFQUFnQjlHLFEsRUFBVTtBQUM3QztBQUNBLFlBQUksT0FBTzZHLE1BQVAsSUFBa0IsVUFBdEIsRUFBa0M7QUFDaEM3RyxxQkFBVzZHLE1BQVg7QUFDQUMsMkJBQWlCLEVBQWpCO0FBQ0FELG1CQUFTLElBQVQ7QUFDRCxTQUpELE1BSU8sSUFBSSxRQUFPQSxNQUFQLHlDQUFPQSxNQUFQLE1BQWtCLFFBQWxCLElBQThCQSxXQUFXLElBQXpDLElBQ1BBLFdBQVd0QyxTQURSLEVBQ21CO0FBQ3hCdkUscUJBQVc4RyxjQUFYO0FBQ0FBLDJCQUFpQkQsTUFBakI7QUFDQUEsbUJBQVMsSUFBVDtBQUNELFNBTE0sTUFLQSxJQUFJLE9BQU9DLGNBQVAsSUFBMEIsVUFBOUIsRUFBMEM7QUFDL0M5RyxxQkFBVzhHLGNBQVg7QUFDQUEsMkJBQWlCLEVBQWpCO0FBQ0Q7QUFDRHBDLGlCQUFTcUMsT0FBVCxHQUFtQkYsTUFBbkI7QUFDQSxZQUFJN0csUUFBSixFQUFjO0FBQ1owRSxtQkFBU3NDLHVCQUFULENBQWlDaEgsUUFBakM7QUFDRDs7QUFFRDtBQUNBLFlBQUk1RixPQUFPLDRCQUNONkMsR0FETSxDQUNGLG9CQUFVM0ksTUFBVixDQUFpQmUsZUFEZixFQUNnQytELEtBQUsySSxTQUFMLENBQWUrRSxjQUFmLENBRGhDLEVBRU43SixHQUZNLENBRUYsb0JBQVUzSSxNQUFWLENBQWlCaUIsT0FGZixFQUV3QixvQkFBVThCLE1BQVYsQ0FBaUJDLE1BRnpDLEVBR04yRixHQUhNLENBR0Ysb0JBQVUzSSxNQUFWLENBQWlCa0IsTUFIZixFQUd1QixvQkFBVTZCLE1BQVYsQ0FBaUJDLE1BSHhDLEVBSU4yRixHQUpNLENBSUYsb0JBQVUzSSxNQUFWLENBQWlCbUIsSUFKZixFQUlxQixvQkFBVTRCLE1BQVYsQ0FBaUJDLE1BSnRDLEVBS04yRixHQUxNLENBS0Ysb0JBQVUzSSxNQUFWLENBQWlCb0IsUUFMZixFQUt5QixvQkFBVTJCLE1BQVYsQ0FBaUJDLE1BTDFDLEVBTU4yRixHQU5NLENBTUYsb0JBQVUzSSxNQUFWLENBQWlCUyxXQU5mLEVBTTRCMlAsU0FBU21CLFdBQVQsSUFBd0JwQixpQkFBaUJyRyxFQU5yRSxFQU9ObkIsR0FQTSxDQU9GLG9CQUFVM0ksTUFBVixDQUFpQlUsY0FQZixFQU8rQixNQUFNMFAsU0FBU3FCLGNBQVQsSUFBMkIsRUFBakMsQ0FQL0IsRUFRTjlJLEdBUk0sQ0FRRixvQkFBVTNJLE1BQVYsQ0FBaUJXLFlBUmYsRUFRNkJ3UCxpQkFBaUIxRyxPQVI5QyxFQVNOZCxHQVRNLENBU0Ysb0JBQVUzSSxNQUFWLENBQWlCWSxlQVRmLEVBU2dDLEtBQUt1UCxpQkFBaUJ4RyxPQVR0RCxFQVVOaEIsR0FWTSxDQVVGLG9CQUFVM0ksTUFBVixDQUFpQmdCLE1BVmYsRUFVdUIsb0JBQVUrQixNQUFWLENBQWlCQyxNQVZ4QyxFQVdOMkYsR0FYTSxDQVdGLG9CQUFVM0ksTUFBVixDQUFpQmEsV0FYZixFQVc0QnVQLFNBQVNlLFdBQVQsSUFBeUJoQixpQkFBaUIxRyxPQUFqQixHQUN4RCxHQUR3RCxHQUNsRDBHLGlCQUFpQnhHLE9BWnBCLEVBYU5oQixHQWJNLENBYUYsb0JBQVUzSSxNQUFWLENBQWlCYyxZQWJmLEVBYTZCc1AsU0FBU2lCLFlBQVQsSUFBeUIsYUFidEQsRUFjTjFJLEdBZE0sQ0FjRixvQkFBVTNJLE1BQVYsQ0FBaUJtQyxnQkFkZixFQWNpQyxLQWRqQyxDQUFYOztBQWdCQTtBQUNBaU8saUJBQVN1QyxRQUFULENBQWtCLG9CQUFVOVQsT0FBVixDQUFrQkMsS0FBcEMsRUFBMkNnSCxJQUEzQyxFQUFpRDtBQUMvQ3BDLGtCQUFRLElBRHVDO0FBRS9Da1AsbUJBQVMsSUFGc0M7QUFHL0NqTyxvQkFBVSxrQkFBVUEsU0FBVixFQUFvQjtBQUM1QnlMLHFCQUFTOEIsV0FBVCxHQUF1QixJQUF2QjtBQUNBLGdCQUFJVyxnQkFBZ0J6QyxTQUFTMEMsZ0JBQVQsQ0FBMEJuTyxTQUExQixDQUFwQjtBQUNBLGdCQUFJeUwsU0FBUzJDLGtCQUFULENBQTRCRixhQUE1QixDQUFKLEVBQWdEO0FBQzlDekMsdUJBQVMrQixnQkFBVCxHQUE0QixJQUE1Qjs7QUFFQSxrQkFBSS9CLFNBQVNRLFFBQWIsRUFBdUI7QUFDckIsb0JBQUlvQyxnQkFBZ0JILGNBQWMsb0JBQVV4USxJQUFWLENBQWVFLGNBQTdCLENBQXBCO0FBQ0Esb0JBQUl5USxhQUFKLEVBQW1CO0FBQ2pCckgsMEJBQVFDLEdBQVIsQ0FBWSxrQ0FBa0NvSCxhQUFsQyxHQUNSLGtCQURRLEdBQ2Esb0NBRHpCO0FBRUQ7QUFDRCxvQkFBSXRFLFNBQUosRUFBZTtBQUNiMEIsMkJBQVM2QyxnQkFBVDtBQUNELGlCQUZELE1BRU87QUFDTHRILDBCQUFRQyxHQUFSLENBQVksMkNBQVo7QUFDRDtBQUNGOztBQUVEd0UsdUJBQVM4QyxXQUFULENBQ0lMLGNBQWMsb0JBQVV4USxJQUFWLENBQWVULElBQTdCLENBREosRUFFSWlSLGNBQWMsb0JBQVV4USxJQUFWLENBQWVHLFFBQTdCLENBRkosRUFHSXFRLGNBQWMsb0JBQVV4USxJQUFWLENBQWVJLGVBQTdCLENBSEo7QUFJQWtOLHVCQUFTa0QsY0FBYyxvQkFBVXhRLElBQVYsQ0FBZUssS0FBN0IsQ0FBVDtBQUNELGFBckJELE1BcUJPO0FBQ0wwTix1QkFBUytCLGdCQUFULEdBQTRCLEtBQTVCO0FBQ0EvQix1QkFBUytDLFVBQVQ7QUFDRDtBQUNELGlCQUFLLElBQUlwSixJQUFJLENBQWIsRUFBZ0JBLElBQUkwRixlQUFldEksTUFBbkMsRUFBMkM0QyxHQUEzQyxFQUFnRDtBQUM5QzBGLDZCQUFlMUYsQ0FBZixFQUFrQnFHLFNBQVMrQixnQkFBM0I7QUFDRDtBQUNGO0FBbEM4QyxTQUFqRDtBQW9DRDs7O3FDQUVxQkksTSxFQUFRQyxjLEVBQWdCOUcsUSxFQUFVO0FBQ3REO0FBQ0EsWUFBSSxPQUFPNkcsTUFBUCxJQUFrQixVQUF0QixFQUFrQztBQUNoQzdHLHFCQUFXNkcsTUFBWDtBQUNBQywyQkFBaUIsRUFBakI7QUFDQUQsbUJBQVMsSUFBVDtBQUNELFNBSkQsTUFJTyxJQUFJLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsTUFBa0IsUUFBbEIsSUFBOEJBLFdBQVcsSUFBekMsSUFDUEEsV0FBV3RDLFNBRFIsRUFDbUI7QUFDeEJ2RSxxQkFBVzhHLGNBQVg7QUFDQUEsMkJBQWlCRCxNQUFqQjtBQUNBQSxtQkFBUyxJQUFUO0FBQ0QsU0FMTSxNQUtBLElBQUksT0FBT0MsY0FBUCxJQUEwQixVQUE5QixFQUEwQztBQUMvQzlHLHFCQUFXOEcsY0FBWDtBQUNBQSwyQkFBaUIsRUFBakI7QUFDRDtBQUNEcEMsaUJBQVNxQyxPQUFULEdBQW1CRixNQUFuQjtBQUNBLFlBQUk3RyxRQUFKLEVBQWM7QUFDWjBFLG1CQUFTc0MsdUJBQVQsQ0FBaUNoSCxRQUFqQztBQUNEOztBQUVEMEUsaUJBQVM4QixXQUFULEdBQXVCLElBQXZCO0FBQ0E5QixpQkFBUytCLGdCQUFULEdBQTRCLElBQTVCO0FBQ0EsWUFBSS9CLFNBQVNRLFFBQWIsRUFBdUI7QUFDckIsY0FBSWxDLFNBQUosRUFBZTtBQUNiMEIscUJBQVM2QyxnQkFBVDtBQUNELFdBRkQsTUFFTztBQUNMdEgsb0JBQVFDLEdBQVIsQ0FBWSwyQ0FBWjtBQUNEO0FBQ0Y7QUFDRHdFLGlCQUFTK0MsVUFBVDtBQUNBLGFBQUssSUFBSXBKLElBQUksQ0FBYixFQUFnQkEsSUFBSTBGLGVBQWV0SSxNQUFuQyxFQUEyQzRDLEdBQTNDLEVBQWdEO0FBQzlDMEYseUJBQWUxRixDQUFmLEVBQWtCcUcsU0FBUytCLGdCQUEzQjtBQUNEO0FBQ0Y7Ozs2QkFFYTtBQUNaL0IsaUJBQVN1QyxRQUFULENBQWtCLG9CQUFVOVQsT0FBVixDQUFrQkUsSUFBcEMsRUFBMENrUixTQUExQyxFQUFxRDtBQUNuRDJDLG1CQUFTLElBRDBDO0FBRW5EbFAsa0JBQVE7QUFGMkMsU0FBckQ7QUFJRDs7O3FDQUVxQjtBQUNwQjBNLGlCQUFTdUMsUUFBVCxDQUFrQixvQkFBVTlULE9BQVYsQ0FBa0JLLGFBQXBDLEVBQW1EK1EsU0FBbkQsRUFBOEQ7QUFDNUQyQyxtQkFBUyxJQURtRDtBQUU1RGxQLGtCQUFRO0FBRm9ELFNBQTlEO0FBSUQ7OztzQ0FFc0I7QUFDckIwTSxpQkFBU3VDLFFBQVQsQ0FBa0Isb0JBQVU5VCxPQUFWLENBQWtCTSxjQUFwQyxFQUFvRDhRLFNBQXBELEVBQStEO0FBQzdEMkMsbUJBQVMsSUFEb0Q7QUFFN0RsUCxrQkFBUTtBQUZxRCxTQUEvRDtBQUlEOzs7bUNBRW1CO0FBQ2xCME0saUJBQVN1QyxRQUFULENBQWtCLG9CQUFVOVQsT0FBVixDQUFrQk8sV0FBcEMsRUFBaUQ2USxTQUFqRCxFQUE0RDtBQUMxRHZNLGtCQUFRO0FBRGtELFNBQTVEO0FBR0Q7OztvQ0FFb0I7QUFDbkIwTSxpQkFBU3VDLFFBQVQsQ0FBa0Isb0JBQVU5VCxPQUFWLENBQWtCUSxZQUFwQyxFQUFrRDRRLFNBQWxELEVBQTZEO0FBQzNEdk0sa0JBQVE7QUFEbUQsU0FBN0Q7QUFHRDs7O2dDQUVnQjZPLE0sRUFBUTtBQUN2Qm5DLGlCQUFTZ0QsaUJBQVQsQ0FBMkJiLE1BQTNCO0FBQ0Q7Ozt3Q0FFd0JBLE0sRUFBUUMsYyxFQUFnQjtBQUMvQyxZQUFJQSxtQkFBbUJ2QyxTQUF2QixFQUFrQztBQUNoQyxjQUFJLFFBQU9zQyxNQUFQLHlDQUFPQSxNQUFQLE1BQWlCLFFBQXJCLEVBQStCO0FBQzdCQyw2QkFBaUJELE1BQWpCO0FBQ0FBLHFCQUFTdEMsU0FBVDtBQUNELFdBSEQsTUFHTyxJQUFJLE9BQU9zQyxNQUFQLElBQWlCLFFBQXJCLEVBQStCO0FBQ3BDNUcsb0JBQVFDLEdBQVIsQ0FBWSx3REFDUixRQURKO0FBRUE7QUFDRDtBQUNGO0FBQ0R3RSxpQkFBU3VDLFFBQVQsQ0FBa0Isb0JBQVU5VCxPQUFWLENBQWtCYSxtQkFBcEMsRUFDSSw0QkFDS2lKLEdBREwsQ0FDUyxvQkFBVTNJLE1BQVYsQ0FBaUJlLGVBRDFCLEVBRVF5UixpQkFBaUIxTixLQUFLMkksU0FBTCxDQUFlK0UsY0FBZixDQUFqQixHQUFrRHZDLFNBRjFELEVBR0t0SCxHQUhMLENBR1Msb0JBQVUzSSxNQUFWLENBQWlCTSxXQUgxQixFQUd1Q2lTLE1BSHZDLENBREosRUFJb0Q7QUFDOUM3TyxrQkFBUTtBQURzQyxTQUpwRDtBQU9BLFlBQUk2TyxNQUFKLEVBQVk7QUFDVm5DLG1CQUFTcUMsT0FBVCxHQUFtQkYsTUFBbkI7QUFDQW5DLG1CQUFTdkMsbUJBQVQsQ0FBNkIsb0JBQVVsTCxZQUFWLENBQXVCdEMsT0FBcEQsRUFBNkQrUCxTQUFTcUMsT0FBdEU7QUFDRDtBQUNGOzs7NEJBRVl4RCxLLEVBQU81RyxLLEVBQU9nTCxJLEVBQU1DLE0sRUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUksUUFBT2pMLEtBQVAseUNBQU9BLEtBQVAsTUFBaUIsUUFBakIsSUFBNkJBLFVBQVUsSUFBdkMsSUFBK0NBLFVBQVU0SCxTQUE3RCxFQUF3RTtBQUN0RXFELG1CQUFTakwsS0FBVDtBQUNBZ0wsaUJBQU9wRCxTQUFQO0FBQ0E1SCxrQkFBUTRILFNBQVI7QUFDRCxTQUpELE1BSU8sSUFBSSxPQUFPNUgsS0FBUCxJQUFpQixRQUFyQixFQUErQjtBQUNwQ2lMLG1CQUFTRCxJQUFUO0FBQ0FBLGlCQUFPaEwsS0FBUDtBQUNBQSxrQkFBUTRILFNBQVI7QUFDRCxTQUpNLE1BSUEsSUFBSSxRQUFPb0QsSUFBUCx5Q0FBT0EsSUFBUCxNQUFnQixRQUFoQixJQUE0QkEsU0FBUyxJQUFyQyxJQUNQQSxTQUFTcEQsU0FETixFQUNpQjtBQUN0QnFELG1CQUFTRCxJQUFUO0FBQ0FBLGlCQUFPcEQsU0FBUDtBQUNEO0FBQ0RHLGlCQUFTdUMsUUFBVCxDQUFrQixvQkFBVTlULE9BQVYsQ0FBa0JJLEtBQXBDLEVBQ0ksNEJBQ0swSixHQURMLENBQ1Msb0JBQVUzSSxNQUFWLENBQWlCdUIsS0FEMUIsRUFDaUMwTixLQURqQyxFQUVLdEcsR0FGTCxDQUVTLG9CQUFVM0ksTUFBVixDQUFpQndCLEtBRjFCLEVBRWlDNkcsU0FBUyxHQUYxQyxFQUdLTSxHQUhMLENBR1Msb0JBQVUzSSxNQUFWLENBQWlCc0IsSUFIMUIsRUFHZ0MrUixJQUhoQyxFQUlLMUssR0FKTCxDQUlTLG9CQUFVM0ksTUFBVixDQUFpQkEsTUFKMUIsRUFJa0M4RSxLQUFLMkksU0FBTCxDQUFlNkYsTUFBZixDQUpsQyxDQURKLEVBSytEO0FBQ3pENVAsa0JBQVE7QUFEaUQsU0FML0Q7QUFRRDs7O2dDQUVnQjZQLEssRUFBT0YsSSxFQUFNQyxNLEVBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsWUFBSSxRQUFPRCxJQUFQLHlDQUFPQSxJQUFQLE1BQWdCLFFBQWhCLElBQTRCQSxTQUFTLElBQXJDLElBQTZDQSxTQUFTcEQsU0FBMUQsRUFBcUU7QUFDbkVxRCxtQkFBU0QsSUFBVDtBQUNBQSxpQkFBT3BELFNBQVA7QUFDRDs7QUFFREcsaUJBQVN1QyxRQUFULENBQWtCLG9CQUFVOVQsT0FBVixDQUFrQkcsT0FBcEMsRUFDSSw0QkFDSzJKLEdBREwsQ0FDUyxvQkFBVTNJLE1BQVYsQ0FBaUJxQixLQUQxQixFQUNpQ2tTLEtBRGpDLEVBRUs1SyxHQUZMLENBRVMsb0JBQVUzSSxNQUFWLENBQWlCc0IsSUFGMUIsRUFFZ0MrUixJQUZoQyxFQUdLMUssR0FITCxDQUdTLG9CQUFVM0ksTUFBVixDQUFpQkEsTUFIMUIsRUFHa0M4RSxLQUFLMkksU0FBTCxDQUFlNkYsTUFBZixDQUhsQyxDQURKLEVBSStEO0FBQ3pENVAsa0JBQVE7QUFEaUQsU0FKL0Q7QUFPRDs7OzJDQU0yQjtBQUMxQixZQUFJOFAsWUFBSixFQUFrQjtBQUNoQixpQkFBT0EsYUFBYUMsa0JBQWIsRUFBUDtBQUNEO0FBQ0QsZUFBTyxLQUFQO0FBQ0Q7Ozs0Q0FNNEI7QUFDM0IsZUFBT0QsYUFBYUUsbUJBQWIsRUFBUDtBQUNEOzs7eUNBV3lCakksZ0IsRUFBa0I7QUFDMUMsZUFBTyxJQUFJVixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLGNBQUl1SSxnQkFBZ0JBLGFBQWFDLGtCQUFiLEVBQXBCLEVBQXVEO0FBQ3JELG1CQUFPRCxhQUFhMUksUUFBYixDQUFzQlcsZ0JBQXRCLEVBQXdDLFVBQUNoQixZQUFELEVBQWtCO0FBQy9ELGtCQUFJQSxZQUFKLEVBQWtCO0FBQ2hCLHVCQUFPTyxRQUFRLElBQVIsQ0FBUDtBQUNEO0FBQ0QscUJBQU93SSxhQUFhRyxhQUFiLEVBQVA7QUFDRCxhQUxNLENBQVA7QUFNRCxXQVBELE1BT087QUFDTCxtQkFBTzFJLE9BQU8scUNBQVAsQ0FBUDtBQUNEO0FBQ0YsU0FYTSxDQUFQO0FBWUQ7Ozs4Q0FNOEI7QUFDN0IsZUFBT3VJLGFBQWFJLGVBQWIsRUFBUDtBQUNEOzs7dUNBTXVCckksWSxFQUFjO0FBQ3BDLFlBQUksQ0FBQ0EsWUFBTCxFQUFtQjtBQUNqQjtBQUNEO0FBQ0Q2RSxpQkFBU3VDLFFBQVQsQ0FBa0Isb0JBQVU5VCxPQUFWLENBQWtCYyxxQkFBcEMsRUFDSSw0QkFBa0JnSixHQUFsQixDQUFzQixvQkFBVTNJLE1BQVYsQ0FBaUJvQyxxQkFBdkMsRUFDSW1KLFlBREosQ0FESixFQUV1QjtBQUNqQjdILGtCQUFRLEtBRFM7QUFFakJrUCxtQkFBUztBQUZRLFNBRnZCO0FBT0Q7Ozt5Q0FNeUI7QUFDeEIsWUFBSWlCLFNBQVMsOEJBQWI7QUFDQSxZQUFJQyxXQUFXLEtBQWY7QUFDQUQsZUFBT2pGLE1BQVAsR0FBZ0IsWUFBWTtBQUMxQixjQUFJLENBQUNrRixRQUFMLEVBQWU7QUFDYm5JLG9CQUFRQyxHQUFSLENBQVksNENBQVo7QUFDQSxnQkFBSTlGLE9BQU8sRUFBWDtBQUNBQSxpQkFBSyxvQkFBVTlGLE1BQVYsQ0FBaUJFLE1BQXRCLElBQWdDa1EsU0FBU00sTUFBekM7QUFDQTVLLGlCQUFLLG9CQUFVOUYsTUFBVixDQUFpQkksU0FBdEIsSUFBbUNnUSxTQUFTVyxTQUE1QztBQUNBOEMsbUJBQU92TyxJQUFQLENBQVksTUFBWixFQUFvQlEsSUFBcEI7QUFDQWdPLHVCQUFXLElBQVg7QUFDRDtBQUNGLFNBVEQ7QUFVQUQsZUFBT25PLE9BQVAsR0FBaUIsVUFBVXVKLEtBQVYsRUFBaUI7QUFDaEN0RCxrQkFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDcUQsS0FBdEM7QUFDRCxTQUZEO0FBR0E0RSxlQUFPN0UsU0FBUCxHQUFtQixVQUFVQyxLQUFWLEVBQWlCbkosSUFBakIsRUFBdUI7QUFDeEMsY0FBSW1KLFNBQVMsWUFBYixFQUEyQjtBQUN6Qm1CLHFCQUFTdUMsUUFBVCxDQUFrQixvQkFBVTlULE9BQVYsQ0FBa0JZLFFBQXBDLEVBQ0ksNEJBQ0trSixHQURMLENBQ1Msb0JBQVUzSSxNQUFWLENBQWlCbUMsZ0JBRDFCLEVBQzRDLEtBRDVDLENBREosRUFFd0Q7QUFDbER1QixzQkFBUSxLQUQwQztBQUVsRGtQLHVCQUFTLElBRnlDO0FBR2xEak8sd0JBQVUsa0JBQVVBLFVBQVYsRUFBb0I7QUFDNUIsb0JBQUlvUCxrQkFBa0IzRCxTQUFTMEMsZ0JBQVQsQ0FBMEJuTyxVQUExQixDQUF0QjtBQUNBLG9CQUFJcVAsU0FBU0QsZ0JBQWdCLG9CQUFVMVIsSUFBVixDQUFlVCxJQUEvQixDQUFiO0FBQ0Esb0JBQUlxUyxXQUFXRixnQkFBZ0Isb0JBQVUxUixJQUFWLENBQWVHLFFBQS9CLENBQWY7QUFDQSxvQkFBSTBSLGlCQUFpQkgsZ0JBQWdCLG9CQUFVMVIsSUFBVixDQUFlSSxlQUEvQixDQUFyQjtBQUNBLG9CQUFJLENBQUMscUJBQUVtTCxPQUFGLENBQVVvRyxNQUFWLEVBQWtCNUQsU0FBUytELE1BQTNCLENBQUwsRUFBeUM7QUFDdkMvRCwyQkFBUzhDLFdBQVQsQ0FBcUJjLE1BQXJCLEVBQTZCQyxRQUE3QixFQUF1Q0MsY0FBdkM7QUFDRDtBQUNGO0FBWGlELGFBRnhEO0FBZ0JELFdBakJELE1BaUJPLElBQUlqRixTQUFTLGNBQWIsRUFBNkI7QUFDbENtQixxQkFBU2dFLGNBQVQ7QUFDQVAsbUJBQU92TyxJQUFQLENBQVksb0JBQVosRUFBa0M7QUFDaEMseUJBQVc7QUFEcUIsYUFBbEM7QUFHRCxXQUxNLE1BS0EsSUFBSTJKLFNBQVMsWUFBYixFQUEyQjtBQUNoQztBQUNBNEUsbUJBQU92TyxJQUFQLENBQVksb0JBQVosRUFBa0M7QUFDaEMseUJBQVc7QUFEcUIsYUFBbEM7QUFHRCxXQUxNLE1BS0EsSUFBSTJKLFNBQVMsZ0JBQWIsRUFBK0I7QUFDcENvRixrQkFBTSx3Q0FBd0N2TyxLQUFLLENBQUwsRUFBUSxPQUFSLENBQXhDLEdBQTJELEdBQWpFO0FBQ0Q7QUFDRixTQS9CRDtBQWdDQStOLGVBQU8vRSxPQUFQLEdBQWlCLFlBQVk7QUFDM0JuRCxrQkFBUUMsR0FBUixDQUFZLCtDQUFaO0FBQ0FrSSxxQkFBVyxLQUFYO0FBQ0QsU0FIRDtBQUlBRCxlQUFPUyxPQUFQLENBQWV2RSxXQUFmO0FBQ0FsQixvQkFBWSxZQUFZO0FBQ3RCLGNBQUksQ0FBQ2dGLE9BQU83RixTQUFSLElBQXFCLENBQUM2RixPQUFPNUYsVUFBakMsRUFBNkM7QUFDM0M0RixtQkFBT1MsT0FBUCxDQUFldkUsV0FBZjtBQUNEO0FBQ0YsU0FKRCxFQUlHLElBSkg7QUFLRDs7O2tDQUlrQndFLEssRUFBT04sUSxFQUFVQyxjLEVBQWdCO0FBQ2xEOUQsaUJBQVMrRCxNQUFULEdBQWtCSSxLQUFsQjtBQUNBL0Usb0JBQVl5RSxRQUFaO0FBQ0F2RSwwQkFBa0J3RSxjQUFsQjtBQUNBOUQsaUJBQVNnQyxpQkFBVCxHQUE2QixJQUE3QjtBQUNBaEMsaUJBQVMwQixPQUFULEdBQW1CMUIsU0FBU29FLFlBQVQsQ0FBc0JwRSxTQUFTdUIsVUFBL0IsRUFBMkM0QyxLQUEzQyxDQUFuQjtBQUNBbkUsaUJBQVNxRSxVQUFUO0FBQ0EsYUFBSyxJQUFJMUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJd0YsMEJBQTBCcEksTUFBOUMsRUFBc0Q0QyxHQUF0RCxFQUEyRDtBQUN6RHdGLG9DQUEwQnhGLENBQTFCO0FBQ0Q7QUFDRjs7O21DQUVtQjJLLEksRUFBTUMsSSxFQUFNO0FBQzlCLFlBQUksT0FBT0EsSUFBUCxJQUFlLFFBQWYsSUFBMkIsT0FBT0EsSUFBUCxJQUFlLFNBQTFDLElBQ0EsT0FBT0EsSUFBUCxJQUFlLFFBRG5CLEVBQzZCO0FBQzNCLGlCQUFPQSxJQUFQO0FBQ0Q7QUFDRCxZQUFJQSxTQUFTLElBQVQsSUFBaUJBLFNBQVMxRSxTQUE5QixFQUF5QztBQUN2QyxpQkFBT3lFLElBQVA7QUFDRDs7QUFFRCxZQUFJRSxjQUFjLFNBQWRBLFdBQWMsQ0FBVS9NLEdBQVYsRUFBZTtBQUMvQixpQkFBTyxVQUFVZ04sQ0FBVixFQUFhO0FBQ2xCLGdCQUFJaE4sZUFBZWlOLEtBQW5CLEVBQTBCO0FBQ3hCLG1CQUFLLElBQUkvSyxJQUFJLENBQWIsRUFBZ0JBLElBQUlsQyxJQUFJVixNQUF4QixFQUFnQzRDLEdBQWhDLEVBQXFDO0FBQ25DOEssa0JBQUVoTixJQUFJa0MsQ0FBSixDQUFGO0FBQ0Q7QUFDRixhQUpELE1BSU87QUFDTCxtQkFBSyxJQUFJZ0wsSUFBVCxJQUFpQmxOLEdBQWpCLEVBQXNCO0FBQ3BCLG9CQUFJLEdBQUdJLGNBQUgsQ0FBa0JwQixJQUFsQixDQUF1QmdCLEdBQXZCLEVBQTRCa04sSUFBNUIsQ0FBSixFQUF1QztBQUNyQ0Ysb0JBQUVFLElBQUY7QUFDRDtBQUNGO0FBQ0Y7QUFDRixXQVpEO0FBYUQsU0FkRDtBQWVBLFlBQUlDLGVBQWVKLFlBQVlGLElBQVosQ0FBbkI7QUFDQSxZQUFJTyxlQUFlTCxZQUFZRCxJQUFaLENBQW5COztBQUVBO0FBQ0E7QUFDQSxZQUFJTyxVQUFVLEtBQWQ7QUFDQSxZQUFJUixRQUFRLElBQVosRUFBa0I7QUFDaEIsY0FBSSxFQUFFQyxnQkFBZ0JHLEtBQWxCLENBQUosRUFBOEI7QUFDNUJJLHNCQUFVLElBQVY7QUFDQSxpQkFBSyxJQUFJSCxJQUFULElBQWlCSixJQUFqQixFQUF1QjtBQUNyQixrQkFBSU8sWUFBWSxJQUFoQixFQUFzQjtBQUNwQkEsMEJBQVUsSUFBVjtBQUNEO0FBQ0Qsa0JBQUksRUFBRSxPQUFPSCxJQUFQLElBQWUsUUFBakIsQ0FBSixFQUFnQztBQUM5QkcsMEJBQVUsS0FBVjtBQUNBO0FBQ0Q7QUFDRCxrQkFBSUgsS0FBSzVOLE1BQUwsR0FBYyxDQUFkLElBQW1CNE4sS0FBS0ksTUFBTCxDQUFZLENBQVosS0FBa0IsR0FBckMsSUFDQUosS0FBS0ksTUFBTCxDQUFZSixLQUFLNU4sTUFBTCxHQUFjLENBQTFCLEtBQWdDLEdBRHBDLEVBQ3lDO0FBQ3ZDK04sMEJBQVUsS0FBVjtBQUNBO0FBQ0Q7QUFDRCxrQkFBSUUsZUFBZUwsS0FBSzVRLFNBQUwsQ0FBZSxDQUFmLEVBQWtCNFEsS0FBSzVOLE1BQUwsR0FBYyxDQUFoQyxDQUFuQjtBQUNBLGtCQUFJLEVBQUUsS0FBS3FILFNBQVM0RyxZQUFULENBQVAsS0FBa0NBLFlBQXRDLEVBQW9EO0FBQ2xERiwwQkFBVSxLQUFWO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBLFlBQUlSLGdCQUFnQkksS0FBaEIsSUFBeUJJLE9BQTdCLEVBQXNDO0FBQ3BDLGNBQUlHLFVBQVMsRUFBYjtBQUNBTCx1QkFBYSxVQUFVRCxJQUFWLEVBQWdCO0FBQzNCTSxvQkFBT3RQLElBQVAsQ0FBWWdQLElBQVo7QUFDRCxXQUZEO0FBR0FFLHVCQUFhLFVBQVVHLFlBQVYsRUFBd0I7QUFDbkMsZ0JBQUlFLFlBQ0E5RyxTQUFTNEcsYUFBYWpSLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEJpUixhQUFhak8sTUFBYixHQUFzQixDQUFoRCxDQUFULENBREo7QUFFQSxnQkFBSW9PLFlBQVlaLEtBQUtTLFlBQUwsQ0FBaEI7QUFDQSxtQkFBT0UsYUFBYUQsUUFBT2xPLE1BQTNCLEVBQW1DO0FBQ2pDa08sc0JBQU90UCxJQUFQLENBQVksSUFBWjtBQUNEO0FBQ0RzUCxvQkFBT0MsU0FBUCxJQUFvQmxGLFNBQVNvRSxZQUFULENBQXNCYSxRQUFPQyxTQUFQLENBQXRCLEVBQXlDQyxTQUF6QyxDQUFwQjtBQUNELFdBUkQ7QUFTQSxpQkFBT0YsT0FBUDtBQUNEOztBQUVEO0FBQ0EsWUFBSUEsU0FBUyxFQUFiO0FBQ0FMLHFCQUFhLFVBQVVELElBQVYsRUFBZ0I7QUFDM0IsY0FBSUosS0FBS0ksSUFBTCxNQUFlLElBQWYsSUFBdUJKLEtBQUtJLElBQUwsTUFBZTlFLFNBQTFDLEVBQXFEO0FBQ25Eb0YsbUJBQU9OLElBQVAsSUFBZUwsS0FBS0ssSUFBTCxDQUFmO0FBQ0Q7QUFDRixTQUpEO0FBS0FFLHFCQUFhLFVBQVVGLElBQVYsRUFBZ0I7QUFDM0JNLGlCQUFPTixJQUFQLElBQWUzRSxTQUFTb0UsWUFBVCxDQUFzQkUsUUFBUSxJQUFSLEdBQWVBLEtBQUtLLElBQUwsQ0FBZixHQUE0QixJQUFsRCxFQUNYSixLQUFLSSxJQUFMLENBRFcsQ0FBZjtBQUVELFNBSEQ7QUFJQSxlQUFPTSxNQUFQO0FBQ0Q7Ozt1Q0FFdUI7QUFDdEIsWUFBSTlNLE9BQU8sRUFBWDtBQUNBQSxhQUFLLG9CQUFVdkksTUFBVixDQUFpQmtDLFNBQXRCLElBQW1Da08sU0FBU3VCLFVBQTVDO0FBQ0F2QixpQkFBU3VDLFFBQVQsQ0FBa0Isb0JBQVU5VCxPQUFWLENBQWtCVyxRQUFwQyxFQUNJLDRCQUFrQitJLElBQWxCLENBQXVCekQsS0FBSzJJLFNBQUwsQ0FBZWxGLElBQWYsQ0FBdkIsQ0FESixFQUNrRDtBQUM1Q3FLLG1CQUFTO0FBRG1DLFNBRGxEO0FBSUQ7OzttQ0FFbUI7QUFDbEIsWUFBSTtBQUNGeEMsbUJBQVM4QyxXQUFULENBQ0lwTyxLQUFLQyxLQUFMLENBQVdxTCxTQUFTekMsb0JBQVQsQ0FDSCxvQkFBVWhMLFlBQVYsQ0FBdUJULFNBRHBCLEtBQ2tDLElBRDdDLENBREosRUFHSTRDLEtBQUtDLEtBQUwsQ0FBV3FMLFNBQVN6QyxvQkFBVCxDQUNILG9CQUFVaEwsWUFBVixDQUF1QkgsUUFEcEIsS0FDaUMsSUFENUMsQ0FISixFQUtJc0MsS0FBS0MsS0FBTCxDQUFXcUwsU0FBU3pDLG9CQUFULENBQ0gsb0JBQVVoTCxZQUFWLENBQXVCRixlQURwQixLQUN3QyxJQURuRCxDQUxKO0FBT0FrTixtQkFBU1MsU0FBU3pDLG9CQUFULENBQThCLG9CQUFVaEwsWUFBVixDQUF1QkQsS0FBckQsQ0FBVDtBQUNELFNBVEQsQ0FTRSxPQUFPc0MsQ0FBUCxFQUFVO0FBQ1YyRyxrQkFBUUMsR0FBUixDQUFZLDhCQUE4QjVHLENBQTFDO0FBQ0Q7QUFDRjs7O21DQUVtQjtBQUNsQm9MLGlCQUFTdkMsbUJBQVQsQ0FDSSxvQkFBVWxMLFlBQVYsQ0FBdUJULFNBRDNCLEVBQ3NDNEMsS0FBSzJJLFNBQUwsQ0FBZTJDLFNBQVMrRCxNQUFULElBQW1CLEVBQWxDLENBRHRDO0FBRUEvRCxpQkFBU3ZDLG1CQUFULENBQ0ksb0JBQVVsTCxZQUFWLENBQXVCSCxRQUQzQixFQUNxQ3NDLEtBQUsySSxTQUFMLENBQWUrQixhQUFhLEVBQTVCLENBRHJDO0FBR0FZLGlCQUFTdkMsbUJBQVQsQ0FBNkIsb0JBQVVsTCxZQUFWLENBQXVCRixlQUFwRCxFQUNJcUMsS0FBSzJJLFNBQUwsQ0FBZWlDLG1CQUFtQixFQUFsQyxDQURKO0FBRUFVLGlCQUFTdkMsbUJBQVQsQ0FBNkIsb0JBQVVsTCxZQUFWLENBQXVCRCxLQUFwRCxFQUEyRGlOLE1BQTNEO0FBQ0Q7OzsyQ0FFMkI3SixJLEVBQU07QUFDaEMsWUFBSTBQLFFBQVFwRixTQUFTekMsb0JBQVQsQ0FBOEIsb0JBQVVoTCxZQUFWLENBQXVCQyxLQUFyRCxLQUErRCxDQUEzRTtBQUNBLFlBQUk2UyxVQUFVLG9CQUFVOVMsWUFBVixDQUF1QkUsSUFBdkIsR0FBOEIyUyxLQUE1QztBQUNBcEYsaUJBQVN2QyxtQkFBVCxDQUE2QjRILE9BQTdCLEVBQXNDM1EsS0FBSzJJLFNBQUwsQ0FBZTNILElBQWYsQ0FBdEM7QUFDQTBQO0FBQ0FwRixpQkFBU3ZDLG1CQUFULENBQTZCLG9CQUFVbEwsWUFBVixDQUF1QkMsS0FBcEQsRUFBMkQ0UyxLQUEzRDtBQUNEOzs7MkNBRTJCO0FBQzFCLFlBQUlFLGNBQWMsRUFBbEI7QUFDQSxZQUFJRixRQUFRcEYsU0FBU3pDLG9CQUFULENBQThCLG9CQUFVaEwsWUFBVixDQUF1QkMsS0FBckQsS0FBK0QsQ0FBM0U7QUFDQXdOLGlCQUFTdUYsdUJBQVQsQ0FBaUMsb0JBQVVoVCxZQUFWLENBQXVCQyxLQUF4RDtBQUNBLGFBQUssSUFBSW1ILElBQUksQ0FBYixFQUFnQkEsSUFBSXlMLEtBQXBCLEVBQTJCekwsR0FBM0IsRUFBZ0M7QUFDOUIsY0FBSTBMLFVBQVUsb0JBQVU5UyxZQUFWLENBQXVCRSxJQUF2QixHQUE4QmtILENBQTVDO0FBQ0EsY0FBSTtBQUNGLGdCQUFJNkwsY0FBYzlRLEtBQUtDLEtBQUwsQ0FBV3FMLFNBQVN6QyxvQkFBVCxDQUE4QjhILE9BQTlCLENBQVgsQ0FBbEI7QUFDQUMsd0JBQVkzUCxJQUFaLENBQWlCNlAsV0FBakI7QUFDRCxXQUhELENBR0UsT0FBTzVRLENBQVAsRUFBVSxDQUNYO0FBQ0RvTCxtQkFBU3VGLHVCQUFULENBQWlDRixPQUFqQztBQUNEO0FBQ0QsZUFBT0MsV0FBUDtBQUNEOzs7K0JBRWVHLE0sRUFBUXZDLE0sRUFBUXdDLE8sRUFBUztBQUN2Q0Esa0JBQVVBLFdBQVcsRUFBckI7QUFDQXhDLGlCQUFTQSxVQUFVLDJCQUFuQjs7QUFFQTtBQUNBLFlBQUksQ0FBQ2xELFNBQVNXLFNBQWQsRUFBeUI7QUFDdkJYLG1CQUFTVyxTQUFULEdBQ0lYLFNBQVN6QyxvQkFBVCxDQUE4QixvQkFBVWhMLFlBQVYsQ0FBdUJ2QyxTQUFyRCxDQURKO0FBRUQ7QUFDRCxZQUFJLENBQUNnUSxTQUFTVyxTQUFkLEVBQXlCO0FBQ3ZCLGNBQUlnRixLQUFLLEVBQVQ7QUFDQSxjQUFJQyxXQUFXLHlEQUNYLFlBREo7QUFFQSxlQUFLLElBQUlqTSxJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO0FBQzNCZ00sa0JBQU1DLFNBQVNiLE1BQVQsQ0FBZ0JjLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQkgsU0FBUzdPLE1BQXBDLENBQWhCLENBQU47QUFDRDtBQUNEaUosbUJBQVNXLFNBQVQsR0FBcUJnRixFQUFyQjtBQUNBM0YsbUJBQVN2QyxtQkFBVCxDQUE2QixvQkFBVWxMLFlBQVYsQ0FBdUJ2QyxTQUFwRCxFQUErRDJWLEVBQS9EO0FBQ0Q7QUFDRCxZQUFJLENBQUMzRixTQUFTcUMsT0FBZCxFQUF1QjtBQUNyQnJDLG1CQUFTcUMsT0FBVCxHQUFtQnJDLFNBQVN6QyxvQkFBVCxDQUE4QixvQkFBVWhMLFlBQVYsQ0FBdUJ0QyxPQUFyRCxDQUFuQjtBQUNBLGNBQUksQ0FBQytQLFNBQVNxQyxPQUFkLEVBQXVCO0FBQ3JCckMscUJBQVNxQyxPQUFULEdBQW1CckMsU0FBU1csU0FBNUI7QUFDRDtBQUNGO0FBQ0RYLGlCQUFTdkMsbUJBQVQsQ0FBNkIsb0JBQVVsTCxZQUFWLENBQXVCdEMsT0FBcEQsRUFBNkQrUCxTQUFTcUMsT0FBdEU7O0FBRUEsWUFBSTJELGNBQWM5QyxPQUNiK0MsYUFEYSxDQUNDakcsU0FBU00sTUFEVixFQUNrQk4sU0FBU08sVUFEM0IsRUFFYmhJLEdBRmEsQ0FFVCxvQkFBVTNJLE1BQVYsQ0FBaUJGLFdBRlIsRUFFcUIsb0JBQVVBLFdBRi9CLEVBR2I2SSxHQUhhLENBR1Qsb0JBQVUzSSxNQUFWLENBQWlCSSxTQUhSLEVBR21CZ1EsU0FBU1csU0FINUIsRUFJYnBJLEdBSmEsQ0FJVCxvQkFBVTNJLE1BQVYsQ0FBaUJLLE9BSlIsRUFJaUIrUCxTQUFTcUMsT0FKMUIsRUFLYjlKLEdBTGEsQ0FLVCxvQkFBVTNJLE1BQVYsQ0FBaUJDLE1BTFIsRUFLZ0I0VixNQUxoQixFQU1ibE4sR0FOYSxDQU1ULG9CQUFVM0ksTUFBVixDQUFpQlEsWUFOUixFQU1zQjRQLFNBQVNhLFlBTi9CLEVBT2J0SSxHQVBhLENBT1Qsb0JBQVUzSSxNQUFWLENBQWlCTyxRQVBSLEVBT2tCNlAsU0FBU1EsUUFQM0IsRUFRYmpJLEdBUmEsQ0FRVCxvQkFBVTNJLE1BQVYsQ0FBaUIwQixJQVJSLEVBUWMsS0FBTSxJQUFJNFUsSUFBSixHQUFXQyxPQUFYLEtBQXVCLElBUjNDLENBQWxCO0FBU0EsWUFBSS9TLFVBQVVzUyxRQUFRdFMsT0FBUixJQUFtQnNTLFFBQVFuUixRQUF6QztBQUNBLFlBQUlsQixRQUFRcVMsUUFBUXJTLEtBQVIsSUFBaUJxUyxRQUFRblIsUUFBckM7O0FBRUEsWUFBSSxDQUFDeUwsU0FBU00sTUFBVixJQUFvQixDQUFDTixTQUFTTyxVQUFsQyxFQUE4QztBQUM1QyxjQUFJekUsTUFBTSwrREFDTixzRUFETSxHQUVOLDJCQUZKO0FBR0FQLGtCQUFRbEksS0FBUixDQUFjeUksR0FBZDtBQUNBLGNBQUl6SSxLQUFKLEVBQVdBLE1BQU15SSxHQUFOO0FBQ1g7QUFDRDs7QUFFRCxZQUFJb0gsT0FBTy9LLElBQVAsRUFBSixFQUFtQjtBQUNqQiw0QkFBUXRDLElBQVIsQ0FBYSxNQUFiLEVBQXFCNkosV0FBVyxHQUFYLEdBQWlCc0csWUFBWUksS0FBWixFQUF0QyxFQUNJbEQsT0FBTy9LLElBQVAsRUFESixFQUNtQi9FLE9BRG5CLEVBQzRCQyxLQUQ1QixFQUNtQ3FTLFFBQVFwUyxNQUQzQztBQUVBO0FBQ0Q7O0FBRUQsWUFBSWtQLFVBQVd4QyxTQUFTUSxRQUFULElBQXFCa0YsUUFBUWxELE9BQTdCLElBQ2YsQ0FBQ2hELGFBREQ7O0FBR0EsWUFBSTZHLHFCQUFxQixTQUFyQkEsa0JBQXFCLEdBQVk7QUFDbkMsY0FBSUMsaUJBQWlCdEcsU0FBU3VHLGtCQUFULEVBQXJCO0FBQ0EsY0FBSUQsZUFBZXZQLE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFDN0IsZ0JBQUl1TyxjQUFjNVEsS0FBSzJJLFNBQUwsQ0FBZTtBQUMvQixzQkFBUWlKO0FBRHVCLGFBQWYsQ0FBbEI7QUFHQSxnQkFBSUUsbUJBQW1CLDRCQUNsQlAsYUFEa0IsQ0FDSmpHLFNBQVNNLE1BREwsRUFDYU4sU0FBU08sVUFEdEIsRUFFbEJoSSxHQUZrQixDQUVkLG9CQUFVM0ksTUFBVixDQUFpQkYsV0FGSCxFQUVnQixvQkFBVUEsV0FGMUIsRUFHbEI2SSxHQUhrQixDQUdkLG9CQUFVM0ksTUFBVixDQUFpQkMsTUFISCxFQUdXLG9CQUFVcEIsT0FBVixDQUFrQlUsS0FIN0IsRUFJbEJvSixHQUprQixDQUlkLG9CQUFVM0ksTUFBVixDQUFpQjBCLElBSkgsRUFJUyxLQUFNLElBQUk0VSxJQUFKLEdBQVdDLE9BQVgsS0FBdUIsSUFKdEMsRUFLbEJDLEtBTGtCLEVBQXZCO0FBTUEsOEJBQVF2USxJQUFSLENBQWEsTUFBYixFQUFxQjZKLFdBQVcsR0FBWCxHQUFpQjhHLGdCQUF0QyxFQUF3RGxCLFdBQXhELEVBQ0lsUyxPQURKLEVBQ2FDLEtBRGIsRUFDb0JxUyxRQUFRcFMsTUFENUI7QUFFRDtBQUNGLFNBZkQ7O0FBaUJBO0FBQ0EsWUFBSSxDQUFDa1AsT0FBRCxJQUFZL0MsY0FBaEIsRUFBZ0M7QUFDOUIsY0FBSWdILE1BQU0sSUFBSVAsSUFBSixHQUFXQyxPQUFYLEtBQXVCLElBQWpDO0FBQ0EsY0FBSSxDQUFDbkcsU0FBUzBHLGdCQUFWLElBQ0FELE1BQU16RyxTQUFTMEcsZ0JBQWYsSUFBbUNqSCxjQUR2QyxFQUN1RDtBQUNyRCtDLHNCQUFVLElBQVY7QUFDQXhDLHFCQUFTMEcsZ0JBQVQsR0FBNEJELEdBQTVCO0FBQ0QsV0FKRCxNQUlPO0FBQ0wsZ0JBQUksQ0FBQ3pHLFNBQVMyRyxnQkFBZCxFQUFnQztBQUM5QjNHLHVCQUFTMkcsZ0JBQVQsR0FBNEI5UixXQUFXLFlBQVk7QUFDakRtTCx5QkFBUzJHLGdCQUFULEdBQTRCLElBQTVCO0FBQ0EzRyx5QkFBUzBHLGdCQUFULEdBQTRCLElBQUlSLElBQUosR0FBV0MsT0FBWCxLQUF1QixJQUFuRDtBQUNBRTtBQUNELGVBSjJCLEVBSXpCLENBQUM1RyxrQkFDQ2dILE1BQU16RyxTQUFTMEcsZ0JBRGhCLENBQUQsSUFDc0MsSUFMYixDQUE1QjtBQU1EO0FBQ0Y7QUFDRjs7QUFFRDFHLGlCQUFTNEcsb0JBQVQsQ0FBOEJaLFlBQVlhLFNBQVosRUFBOUI7QUFDQSxZQUFJckUsT0FBSixFQUFhO0FBQ1g2RDtBQUNEO0FBQ0Y7OztvQ0FJb0I5UixRLEVBQVU7QUFDN0IsWUFBSSxDQUFDQSxRQUFELElBQWEsQ0FBQ0EsU0FBUyxVQUFULENBQWxCLEVBQXdDO0FBQ3RDLGlCQUFPLENBQVA7QUFDRDtBQUNELGVBQU9BLFNBQVMsVUFBVCxFQUFxQndDLE1BQTVCO0FBQ0Q7OztxQ0FFcUJ4QyxRLEVBQVV3RixLLEVBQU87QUFDckMsWUFBSSxDQUFDeEYsUUFBRCxJQUFhLENBQUNBLFNBQVMsVUFBVCxDQUFsQixFQUF3QztBQUN0QyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRCxlQUFPQSxTQUFTLFVBQVQsRUFBcUJ3RixLQUFyQixDQUFQO0FBQ0Q7Ozt1Q0FFdUJ4RixRLEVBQVU7QUFDaEMsWUFBSTZRLFFBQVFwRixTQUFTOEcsYUFBVCxDQUF1QnZTLFFBQXZCLENBQVo7QUFDQSxZQUFJNlEsUUFBUSxDQUFaLEVBQWU7QUFDYixpQkFBT3BGLFNBQVMrRyxjQUFULENBQXdCeFMsUUFBeEIsRUFBa0M2USxRQUFRLENBQTFDLENBQVA7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBTyxJQUFQO0FBQ0Q7QUFDRjs7O3lDQUV5QjdRLFEsRUFBVTtBQUNsQyxZQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNiLGlCQUFPLEtBQVA7QUFDRDtBQUNELGVBQU9BLFNBQVMsU0FBVCxJQUFzQixJQUF0QixHQUE2QixLQUFwQztBQUNEOzs7d0NBRXdCQSxRLEVBQVU7QUFDakMsWUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYixpQkFBTyxJQUFQO0FBQ0Q7QUFDRCxZQUFJbEIsUUFBUWtCLFNBQVMsT0FBVCxDQUFaO0FBQ0EsWUFBSSxDQUFDbEIsS0FBTCxFQUFZO0FBQ1YsaUJBQU8sSUFBUDtBQUNEO0FBQ0QsZUFBT0EsTUFBTSxTQUFOLENBQVA7QUFDRDs7OzJDQUUyQmlFLEcsRUFBSztBQUMvQixZQUFJc0kseUJBQXlCLEtBQTdCLEVBQW9DO0FBQ2xDLGlCQUFPRSx1QkFBdUJ4SSxHQUF2QixDQUFQO0FBQ0Q7QUFDRCxlQUFPMFAsYUFBYTFQLEdBQWIsQ0FBUDtBQUNEOzs7MENBRTBCQSxHLEVBQUtXLEssRUFBTztBQUNyQyxZQUFJMkgseUJBQXlCLEtBQTdCLEVBQW9DO0FBQ2xDRSxpQ0FBdUJ4SSxHQUF2QixJQUE4QlcsS0FBOUI7QUFDQTtBQUNEO0FBQ0QsWUFBSTtBQUNGK08sdUJBQWExUCxHQUFiLElBQW9CVyxLQUFwQjtBQUNELFNBRkQsQ0FFRSxPQUFPckQsQ0FBUCxFQUFVO0FBQ1ZnTCxpQ0FBdUIsS0FBdkI7QUFDQUksbUJBQVN2QyxtQkFBVCxDQUE2Qm5HLEdBQTdCLEVBQWtDVyxLQUFsQztBQUNEO0FBQ0Y7Ozs4Q0FFOEJYLEcsRUFBSztBQUNsQyxZQUFJc0kseUJBQXlCLEtBQTdCLEVBQW9DO0FBQ2xDLGlCQUFPRSx1QkFBdUJ4SSxHQUF2QixDQUFQO0FBQ0E7QUFDRDtBQUNELFlBQUk7QUFDRjBQLHVCQUFhQyxVQUFiLENBQXdCM1AsR0FBeEI7QUFDRCxTQUZELENBRUUsT0FBTzFDLENBQVAsRUFBVTtBQUNWZ0wsaUNBQXVCLEtBQXZCO0FBQ0FJLG1CQUFTdUYsdUJBQVQsQ0FBaUNqTyxHQUFqQztBQUNEO0FBQ0Y7Ozs7OztBQUdILE1BQUk4TCxlQUFlLDBCQUFnQnBELFFBQWhCLENBQW5COztBQUVBelIsU0FBT0MsT0FBUCxHQUFpQndSLFFBQWpCIiwiZmlsZSI6ImxlYW5wbHVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTGVhbnBsdW1cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTGVhbnBsdW1cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2Q3ZDU2NzM1MzI3YTE2ZGUwMTgiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1FVEhPRFM6IHtcbiAgICBTVEFSVDogJ3N0YXJ0JyxcbiAgICBTVE9QOiAnc3RvcCcsXG4gICAgQURWQU5DRTogJ2FkdmFuY2UnLFxuICAgIFRSQUNLOiAndHJhY2snLFxuICAgIFBBVVNFX1NFU1NJT046ICdwYXVzZVNlc3Npb24nLFxuICAgIFJFU1VNRV9TRVNTSU9OOiAncmVzdW1lU2Vzc2lvbicsXG4gICAgUEFVU0VfU1RBVEU6ICdwYXVzZVN0YXRlJyxcbiAgICBSRVNVTUVfU1RBVEU6ICdyZXN1bWVTdGF0ZScsXG4gICAgRE9XTkxPQURfRklMRTogJ2Rvd25sb2FkRmlsZScsXG4gICAgTVVMVEk6ICdtdWx0aScsXG4gICAgU0VUX1ZBUlM6ICdzZXRWYXJzJyxcbiAgICBHRVRfVkFSUzogJ2dldFZhcnMnLFxuICAgIFNFVF9VU0VSX0FUVFJJQlVURVM6ICdzZXRVc2VyQXR0cmlidXRlcycsXG4gICAgU0VUX0RFVklDRV9BVFRSSUJVVEVTOiAnc2V0RGV2aWNlQXR0cmlidXRlcycsXG4gICAgVVBMT0FEX0ZJTEU6ICd1cGxvYWRGaWxlJyxcbiAgICBSRUdJU1RFUl9ERVZJQ0U6ICdyZWdpc3RlckRldmljZScsXG4gIH0sXG5cbiAgU0RLX1ZFUlNJT046ICcxLjIuMycsXG5cbiAgQ0xJRU5UOiAnanMnLFxuXG4gIFBBUkFNUzoge1xuICAgIEFDVElPTjogJ2FjdGlvbicsXG4gICAgQVBQX0lEOiAnYXBwSWQnLFxuICAgIENMSUVOVDogJ2NsaWVudCcsXG4gICAgQ0xJRU5UX0tFWTogJ2NsaWVudEtleScsXG4gICAgREVWSUNFX0lEOiAnZGV2aWNlSWQnLFxuICAgIFNES19WRVJTSU9OOiAnc2RrVmVyc2lvbicsXG4gICAgVVNFUl9JRDogJ3VzZXJJZCcsXG4gICAgTkVXX1VTRVJfSUQ6ICduZXdVc2VySWQnLFxuICAgIERFVl9NT0RFOiAnZGV2TW9kZScsXG4gICAgVkVSU0lPTl9OQU1FOiAndmVyc2lvbk5hbWUnLFxuICAgIFNZU1RFTV9OQU1FOiAnc3lzdGVtTmFtZScsXG4gICAgU1lTVEVNX1ZFUlNJT046ICdzeXN0ZW1WZXJzaW9uJyxcbiAgICBCUk9XU0VSX05BTUU6ICdicm93c2VyTmFtZScsXG4gICAgQlJPV1NFUl9WRVJTSU9OOiAnYnJvd3NlclZlcnNpb24nLFxuICAgIERFVklDRV9OQU1FOiAnZGV2aWNlTmFtZScsXG4gICAgREVWSUNFX01PREVMOiAnZGV2aWNlTW9kZWwnLFxuICAgIFVTRVJfQVRUUklCVVRFUzogJ3VzZXJBdHRyaWJ1dGVzJyxcbiAgICBMT0NBTEU6ICdsb2NhbGUnLFxuICAgIENPVU5UUlk6ICdjb3VudHJ5JyxcbiAgICBSRUdJT046ICdyZWdpb24nLFxuICAgIENJVFk6ICdjaXR5JyxcbiAgICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgICBTVEFURTogJ3N0YXRlJyxcbiAgICBJTkZPOiAnaW5mbycsXG4gICAgRVZFTlQ6ICdldmVudCcsXG4gICAgVkFMVUU6ICd2YWx1ZScsXG4gICAgRklMRU5BTUU6ICdmaWxlbmFtZScsXG4gICAgVElNRTogJ3RpbWUnLFxuICAgIERBVEE6ICdkYXRhJyxcbiAgICBWQVJTOiAndmFycycsXG4gICAgRklMRTogJ2ZpbGUnLFxuICAgIFNJWkU6ICdzaXplJyxcbiAgICBWQVJJQVRJT046ICd2YXJpYXRpb24nLFxuICAgIEhBU0g6ICdoYXNoJyxcbiAgICBFTUFJTDogJ2VtYWlsJyxcbiAgICBWQVJJQUJMRVM6ICd2YXJzJyxcbiAgICBQQVJBTVM6ICdwYXJhbXMnLFxuICAgIElOQ0xVREVfREVGQVVMVFM6ICdpbmNsdWRlRGVmYXVsdHMnLFxuICAgIFdFQl9QVVNIX1NVQlNDUklQVElPTjogJ3dlYlB1c2hTdWJzY3JpcHRpb24nLFxuICB9LFxuXG4gIEtFWVM6IHtcbiAgICBJU19SRUdJU1RFUkVEOiAnaXNSZWdpc3RlcmVkJyxcbiAgICBMQVRFU1RfVkVSU0lPTjogJ2xhdGVzdFZlcnNpb24nLFxuICAgIFZBUlM6ICd2YXJzJyxcbiAgICBWQVJJQU5UUzogJ3ZhcmlhbnRzJyxcbiAgICBBQ1RJT05fTUVUQURBVEE6ICdhY3Rpb25NZXRhZGF0YScsXG4gICAgVE9LRU46ICd0b2tlbicsXG4gIH0sXG5cbiAgREVGQVVMVF9LRVlTOiB7XG4gICAgQ09VTlQ6ICdfX2xlYW5wbHVtX3Vuc3luY2VkJyxcbiAgICBJVEVNOiAnX19sZWFucGx1bV91bnN5bmNlZF8nLFxuICAgIFZBUklBQkxFUzogJ19fbGVhbnBsdW1fdmFyaWFibGVzJyxcbiAgICBWQVJJQU5UUzogJ19fbGVhbnBsdW1fdmFyaWFudHMnLFxuICAgIEFDVElPTl9NRVRBREFUQTogJ19fbGVhbnBsdW1fYWN0aW9uX21ldGFkYXRhJyxcbiAgICBUT0tFTjogJ19fbGVhbnBsdW1fdG9rZW4nLFxuICAgIERFVklDRV9JRDogJ19fbGVhbnBsdW1fZGV2aWNlX2lkJyxcbiAgICBVU0VSX0lEOiAnX19sZWFucGx1bV91c2VyX2lkJyxcbiAgICBQVVNIX1NVQlNDUklQVElPTjogJ19fbGVhbnBsdW1fcHVzaF9zdWJzY3JpcHRpb24nLFxuICB9LFxuXG4gIFZBTFVFUzoge1xuICAgIERFVEVDVDogJyhkZXRlY3QpJyxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzLmpzIiwibGV0IF9yZXF1ZXN0UXVldWUgPSBbXTtcbmxldCBfbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gMTA7XG5cbi8qKlxuICogQWpheCBmdW5jdGlvbnMgZnJvbTpcbiAqXG4gKiBQYXJzZSBKYXZhU2NyaXB0IFNES1xuICogVmVyc2lvbjogMS4xLjVcbiAqIEJ1aWx0OiBNb24gT2N0IDAxIDIwMTIgMTc6NTc6MTNcbiAqIGh0dHA6Ly9wYXJzZS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxMiBQYXJzZSwgSW5jLlxuICogVGhlIFBhcnNlIEphdmFTY3JpcHQgU0RLIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuY2xhc3MgUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBuZXR3b3JrIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIFRoZSB0aW1lb3V0IGluIHNlY29uZHMuXG4gICAqL1xuICBzdGF0aWMgc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcykge1xuICAgIF9uZXR3b3JrVGltZW91dFNlY29uZHMgPSBzZWNvbmRzO1xuICB9O1xuXG4gIHN0YXRpYyBhamF4KG1ldGhvZCwgdXJsLCBkYXRhLCBzdWNjZXNzLCBlcnJvciwgcXVldWVkLCBwbGFpblRleHQpIHtcbiAgICBpZiAocXVldWVkKSB7XG4gICAgICBpZiAoUmVxdWVzdC5fcnVubmluZ1JlcXVlc3QpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICByZXR1cm4gUmVxdWVzdC5fZW5xdWV1ZVJlcXVlc3QoYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIFJlcXVlc3QuX3J1bm5pbmdSZXF1ZXN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mKFhEb21haW5SZXF1ZXN0KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHA6JyAmJiB1cmwuaW5kZXhPZignaHR0cHM6JykgPT0gMCkge1xuICAgICAgICB1cmwgPSAnaHR0cDonICsgdXJsLnN1YnN0cmluZyg2KTtcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgIHJldHVybiBSZXF1ZXN0Ll9hamF4SUU4LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZWQgPSBmYWxzZTtcblxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgbGV0IHJhbkNhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIGlmIChwbGFpblRleHQpIHtcbiAgICAgICAgICByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IobnVsbCwgeGhyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICByYW5DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyYW5DYWxsYmFjaykge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlLCB4aHIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yKHJlc3BvbnNlLCB4aHIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVldWVkKSB7XG4gICAgICAgICAgUmVxdWVzdC5fcnVubmluZ1JlcXVlc3QgPSBmYWxzZTtcbiAgICAgICAgICBSZXF1ZXN0Ll9kZXF1ZXVlUmVxdWVzdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluJyk7IC8vIEF2b2lkIHByZS1mbGlnaHQuXG4gICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWhhbmRsZWQpIHtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICB9XG4gICAgfSwgX25ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDApO1xuICB9O1xuXG4gIHN0YXRpYyBfYWpheElFOChtZXRob2QsIHVybCwgZGF0YSwgc3VjY2VzcywgZXJyb3IsIHF1ZXVlZCwgcGxhaW5UZXh0KSB7XG4gICAgbGV0IHhkciA9IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgIHhkci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICBsZXQgcmFuQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgIGlmIChwbGFpblRleHQpIHtcbiAgICAgICAgcmVzcG9uc2UgPSB4ZHIucmVzcG9uc2VUZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoeGRyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcihudWxsLCB4ZHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIHJhbkNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFyYW5DYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgc3VjY2VzcyhyZXNwb25zZSwgeGRyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgICAgaWYgKHF1ZXVlZCkge1xuICAgICAgICBSZXF1ZXN0Ll9ydW5uaW5nUmVxdWVzdCA9IGZhbHNlO1xuICAgICAgICBSZXF1ZXN0Ll9kZXF1ZXVlUmVxdWVzdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgeGRyLm9uZXJyb3IgPSB4ZHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGVycm9yKG51bGwsIHhkcik7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgICAgaWYgKHF1ZXVlZCkge1xuICAgICAgICBSZXF1ZXN0Ll9ydW5uaW5nUmVxdWVzdCA9IGZhbHNlO1xuICAgICAgICBSZXF1ZXN0Ll9kZXF1ZXVlUmVxdWVzdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgeGRyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICB4ZHIub3BlbihtZXRob2QsIHVybCk7XG4gICAgeGRyLnRpbWVvdXQgPSBfbmV0d29ya1RpbWVvdXRTZWNvbmRzICogMTAwMDtcbiAgICB4ZHIuc2VuZChkYXRhKTtcbiAgfTtcblxuICBzdGF0aWMgX2VucXVldWVSZXF1ZXN0KGFyZ3MpIHtcbiAgICBfcmVxdWVzdFF1ZXVlLnB1c2goYXJncyk7XG4gIH07XG5cbiAgc3RhdGljIF9kZXF1ZXVlUmVxdWVzdCgpIHtcbiAgICBsZXQgYXJncyA9IF9yZXF1ZXN0UXVldWUuc2hpZnQoKTtcbiAgICBpZiAoYXJncykge1xuICAgICAgUmVxdWVzdC5hamF4LmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcXVlc3QuanMiLCIvLyAgICAgVW5kZXJzY29yZS5qcyAxLjQuMlxuLy8gICAgIGh0dHA6Ly91bmRlcnNjb3JlanMub3JnXG4vLyAgICAgKGMpIDIwMDktMjAxMiBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgSW5jLlxuLy8gICAgIFVuZGVyc2NvcmUgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4vLyAgICAgICBcbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG5mdW5jdGlvbiBlcShhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gIC8vIFNlZSB0aGUgSGFybW9ueSBgZWdhbGAgcHJvcG9zYWw6XG4gIC8vIGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbC5cbiAgaWYgKGEgPT09IGIpIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09IDEgLyBiO1xuICAvLyBBIHN0cmljdCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGBudWxsID09IHVuZGVmaW5lZGAuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gYSA9PT0gYjtcbiAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gIGlmIChhIGluc3RhbmNlb2YgXykgYSA9IGEuX3dyYXBwZWQ7XG4gIGlmIChiIGluc3RhbmNlb2YgXykgYiA9IGIuX3dyYXBwZWQ7XG4gIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gIGxldCBjbGFzc05hbWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSk7XG4gIGlmIChjbGFzc05hbWUgIT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG4gIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7XG4gICAgICAvLyB0aHVzLCBgXCI1XCJgIGlzIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgIHJldHVybiBhID09IFN0cmluZyhiKTtcbiAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS4gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXNcbiAgICAgIC8vIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICByZXR1cm4gYSAhPSArYSA/IGIgIT0gK2IgOiAoYSA9PSAwID8gMSAvIGEgPT0gMSAvIGIgOiBhID09ICtiKTtcbiAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmVcbiAgICAgIC8vIGNvbXBhcmVkIGJ5IHRoZWlyIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWRcbiAgICAgIC8vIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgIHJldHVybiArYSA9PSArYjtcbiAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyIHNvdXJjZSBwYXR0ZXJucyBhbmQgZmxhZ3MuXG4gICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgIHJldHVybiBhLnNvdXJjZSA9PSBiLnNvdXJjZSAmJlxuICAgICAgICAgIGEuZ2xvYmFsID09IGIuZ2xvYmFsICYmXG4gICAgICAgICAgYS5tdWx0aWxpbmUgPT0gYi5tdWx0aWxpbmUgJiZcbiAgICAgICAgICBhLmlnbm9yZUNhc2UgPT0gYi5pZ25vcmVDYXNlO1xuICB9XG4gIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvblxuICAvLyBgSk9gLlxuICBsZXQgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PSBhKSByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT0gYjtcbiAgfVxuICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gIGFTdGFjay5wdXNoKGEpO1xuICBiU3RhY2sucHVzaChiKTtcbiAgbGV0IHNpemUgPSAwO1xuICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gIGlmIChjbGFzc05hbWUgPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgIHNpemUgPSBhLmxlbmd0aDtcbiAgICByZXN1bHQgPSBzaXplID09IGIubGVuZ3RoO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgICAgIGlmICghKHJlc3VsdCA9IGVxKGFbc2l6ZV0sIGJbc2l6ZV0sIGFTdGFjaywgYlN0YWNrKSkpIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHNcbiAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgIGxldCBhQ3RvciA9IGEuY29uc3RydWN0b3I7XG4gICAgbGV0IGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoXy5pc0Z1bmN0aW9uKGFDdG9yKSAmJlxuICAgICAgICAoYUN0b3IgaW5zdGFuY2VvZiBhQ3RvcikgJiYgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJlxuICAgICAgICAoYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgIGZvciAobGV0IGtleSBpbiBhKSB7XG4gICAgICBpZiAoXy5oYXMoYSwga2V5KSkge1xuICAgICAgICAvLyBDb3VudCB0aGUgZXhwZWN0ZWQgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICAgIHNpemUrKztcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyLlxuICAgICAgICBpZiAoIShyZXN1bHQgPSBfLmhhcyhiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgZm9yIChrZXkgaW4gYikge1xuICAgICAgICBpZiAoXy5oYXMoYiwga2V5KSAmJiAhKHNpemUtLSkpIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gIXNpemU7XG4gICAgfVxuICB9XG4gIC8vIFJlbW92ZSB0aGUgZmlyc3Qgb2JqZWN0IGZyb20gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICBhU3RhY2sucG9wKCk7XG4gIGJTdGFjay5wb3AoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNsYXNzIF8ge1xuICAvLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbiAgc3RhdGljIGlleHRlbmQob2JqKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIGVhY2goc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICBmb3IgKGxldCBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIHByb3ApKSB7XG4gICAgICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBzdGF0aWMgaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbiAgfTtcblxuICBzdGF0aWMgaGFzKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuICBzdGF0aWMgaXNFcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIsIFtdLCBbXSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IF87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdW5kZXJzY29yZS5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG4vKipcbiAqIExlYW5wbHVtIEFyZ3NCdWlsZGVyLCB1c2UgdG8gY29uc3RydWN0IHJlcXVlc3QgcGF5bG9hZC5cbiAqL1xuY2xhc3MgQXJnc0J1aWxkZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGVtcHR5IHJlcXVlc3QgYXJndW1lbnQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFyZ1N0cmluZyA9ICcnO1xuICAgIHRoaXMuYXJnVmFsdWVzID0ge307XG4gIH1cblxuICAvKipcbiAgICogQWRkIGdpdmVuIGtleSwgdmFsdWUgdG8gdGhlIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIHZhbHVlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIGZvciBnaXZlbiBrZXkuXG4gICAqIEByZXR1cm4ge0FyZ3NCdWlsZGVyfSBSZXR1cm5zIGFuIG9iamVjdCBvZiBBcmdzQnVpbGRlci5cbiAgICovXG4gIGFkZChrZXksIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZih2YWx1ZSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuYXJnU3RyaW5nKSB7XG4gICAgICB0aGlzLmFyZ1N0cmluZyArPSAnJic7XG4gICAgfVxuICAgIHRoaXMuYXJnU3RyaW5nICs9IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgdGhpcy5hcmdWYWx1ZXNba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWNoZSB0aGUgZ2l2ZW4gYm9keS5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBib2R5IEEgZ2l2ZW4gYm9keS5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXIvU3RyaW5nfSBSZXR1cm5zIEFyZ3NidWlsZGVyIGlmIGJvZHkgZ2l2ZW4sIGVsc2UgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5cbiAgICovXG4gIGJvZHkoYm9keSkge1xuICAgIGlmIChib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5ID0gYm9keTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIGF0dGFjaCBnaXZlbiBhcHBJZCBhbmQgYXBwS2V5IHRvIHJlcXVlc3QuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXBwSWQgVGhlIGFwcElkIHRvIGF0dGFjaC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBjbGllbnRLZXkgVGhlIGFwcEtleSB0byBhdHRhY2guXG4gICAqIEByZXR1cm4ge0FyZ3NCdWlsZGVyfSBSZXR1cm5zIGFuIG9iamVjdCBvZiBBcmdzQnVpbGRlci5cbiAgICovXG4gIGF0dGFjaEFwaUtleXMoYXBwSWQsIGNsaWVudEtleSkge1xuICAgIHJldHVybiB0aGlzLmFkZChDb25zdGFudHMuUEFSQU1TLkFQUF9JRCwgYXBwSWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DTElFTlQsIENvbnN0YW50cy5DTElFTlQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DTElFTlRfS0VZLCBjbGllbnRLZXkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGFyZ3VtZW50cy5cbiAgICogQHJldHVybiB7U3RyaW5nfSBBcmd1bWVudHMgc3RyaW5nLlxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJnU3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGFyZ3VtZW50IHZhbHVlcy5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgYXJndW1lbnQgdmFsdWVzLlxuICAgKi9cbiAgYnVpbGREaWN0KCkge1xuICAgIHJldHVybiB0aGlzLmFyZ1ZhbHVlcztcbiAgfTtcbn1cbjtcblxubW9kdWxlLmV4cG9ydHMgPSBBcmdzQnVpbGRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BcmdzQnVpbGRlci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5jb25zdCBkYXRhQnJvd3NlciA9IFt7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnQ2hyb21lJyxcbiAgaWRlbnRpdHk6ICdDaHJvbWUnLFxufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ09tbmlXZWInLFxuICB2ZXJzaW9uU2VhcmNoOiAnT21uaVdlYi8nLFxuICBpZGVudGl0eTogJ09tbmlXZWInLFxufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ0FwcGxlJyxcbiAgaWRlbnRpdHk6ICdTYWZhcmknLFxuICB2ZXJzaW9uU2VhcmNoOiAnVmVyc2lvbicsXG59LCB7XG4gIHByb3A6IHdpbmRvdy5vcGVyYSxcbiAgaWRlbnRpdHk6ICdPcGVyYScsXG4gIHZlcnNpb25TZWFyY2g6ICdWZXJzaW9uJyxcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdpQ2FiJyxcbiAgaWRlbnRpdHk6ICdpQ2FiJyxcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdLREUnLFxuICBpZGVudGl0eTogJ0tvbnF1ZXJvcicsXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnRmlyZWZveCcsXG4gIGlkZW50aXR5OiAnRmlyZWZveCcsXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnZlbmRvcixcbiAgc3ViU3RyaW5nOiAnQ2FtaW5vJyxcbiAgaWRlbnRpdHk6ICdDYW1pbm8nLFxufSwgeyAvLyBmb3IgbmV3ZXIgTmV0c2NhcGVzICg2KylcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdOZXRzY2FwZScsXG4gIGlkZW50aXR5OiAnTmV0c2NhcGUnLFxufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ01TSUUnLFxuICBpZGVudGl0eTogJ0V4cGxvcmVyJyxcbiAgdmVyc2lvblNlYXJjaDogJ01TSUUnLFxufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ0dlY2tvJyxcbiAgaWRlbnRpdHk6ICdNb3ppbGxhJyxcbiAgdmVyc2lvblNlYXJjaDogJ3J2Jyxcbn0sIHsgLy8gZm9yIG9sZGVyIE5ldHNjYXBlcyAoNC0pXG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnTW96aWxsYScsXG4gIGlkZW50aXR5OiAnTmV0c2NhcGUnLFxuICB2ZXJzaW9uU2VhcmNoOiAnTW96aWxsYScsXG59XTtcblxuY29uc3QgZGF0YU9TID0gW3tcbiAgc3RyaW5nOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gIHN1YlN0cmluZzogJ1dpbicsXG4gIGlkZW50aXR5OiAnV2luZG93cycsXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnBsYXRmb3JtLFxuICBzdWJTdHJpbmc6ICdNYWMnLFxuICBpZGVudGl0eTogJ01hYyBPUycsXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnaVBob25lJyxcbiAgaWRlbnRpdHk6ICdpT1MnLFxufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgc3ViU3RyaW5nOiAnTGludXgnLFxuICBpZGVudGl0eTogJ0xpbnV4Jyxcbn1dO1xuXG4vLyBCcm93c2VyIGRldGVjdGlvbi4gU291cmNlOiBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2pzL2RldGVjdC5odG1sXG5jbGFzcyBCcm93c2VyRGV0ZWN0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLnNlYXJjaFN0cmluZyhkYXRhQnJvd3NlcikgfHxcbiAgICAgICAgJ0FuIHVua25vd24gYnJvd3Nlcic7XG4gICAgdGhpcy52ZXJzaW9uID0gdGhpcy5zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8XG4gICAgICAgIHRoaXMuc2VhcmNoVmVyc2lvbihuYXZpZ2F0b3IuYXBwVmVyc2lvbikgfHwgJ2FuIHVua25vd24gdmVyc2lvbic7XG4gICAgdGhpcy5PUyA9IHRoaXMuc2VhcmNoU3RyaW5nKGRhdGFPUykgfHwgJ2FuIHVua25vd24gT1MnO1xuICB9O1xuXG4gIHNlYXJjaFN0cmluZyhkYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YVN0cmluZyA9IGRhdGFbaV0uc3RyaW5nO1xuICAgICAgbGV0IGRhdGFQcm9wID0gZGF0YVtpXS5wcm9wO1xuICAgICAgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID0gZGF0YVtpXS52ZXJzaW9uU2VhcmNoIHx8IGRhdGFbaV0uaWRlbnRpdHk7XG4gICAgICBpZiAoZGF0YVN0cmluZykge1xuICAgICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKGRhdGFbaV0uc3ViU3RyaW5nKSAhPSAtMSlcbiAgICAgICAgICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVByb3ApXG4gICAgICAgIHJldHVybiBkYXRhW2ldLmlkZW50aXR5O1xuICAgIH1cbiAgfTtcblxuICBzZWFyY2hWZXJzaW9uKGRhdGFTdHJpbmcpIHtcbiAgICBpZiAoIWRhdGFTdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gZGF0YVN0cmluZy5pbmRleE9mKHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyk7XG4gICAgaWYgKGluZGV4ID09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGFTdHJpbmcuc3Vic3RyaW5nKGluZGV4ICtcbiAgICAgICAgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nLmxlbmd0aCArIDEpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJyb3dzZXJEZXRlY3RvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Ccm93c2VyRGV0ZWN0b3IuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuaW1wb3J0IF8gZnJvbSBcIi4vdW5kZXJzY29yZVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuY29uc3QgQVBQTElDQVRJT05fU0VSVkVSX1BVQkxJQ19LRVkgPVxuICAgICdCSW5XUHBXbnRmUjM5cmdYU1AwNHBxZG1FZERHYTUwejZ6cWJNdnh5eEpDd3pYSXVTcFNoOEM4ODgtQ2ZKODJXRUxsN1hlOGNqQScgK1xuICAgICduZkN0LTN2SzBDaTY4JztcblxubGV0IHNlbGY7XG5sZXQgX2xlYW5wbHVtO1xubGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG5sZXQgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5sZXQgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiA9IG51bGw7XG5cbi8qKlxuICogUHVzaCBNYW5hZ2VyIGhhbmRsZXMgdGhlIHJlZ2lzdHJhdGlvbiBhbmQgc3Vic2NyaXB0aW9uIGZvciB3ZWIgcHVzaC5cbiAqL1xuY2xhc3MgUHVzaE1hbmFnZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBQdXNoTWFuYWdlciBvYmplY3QuXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbGVhbnBsdW0gUmVmZXJlbmNlIHRvIHRoZSBtYWluIGNsYXNzIHRvXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZvaWQgY2lyY2xlIGltcG9ydC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGxlYW5wbHVtKSB7XG4gICAgX2xlYW5wbHVtID0gbGVhbnBsdW07XG4gICAgc2VsZiA9IHRoaXM7XG4gICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlciAmJlxuICAgICAgICAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yICYmICdQdXNoTWFuYWdlcicgaW4gd2luZG93KSB7XG4gICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICBzZWxmLnJlZ2lzdGVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHdlYiBwdXNoIGlzIHN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlci5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBzdXBwb3J0ZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBpc1dlYlB1c2hTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBicm93c2VyIGlzIHN1YnNjcmliZWQgdG8gd2ViIHB1c2ggbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBzdWJzY3JpYmVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgaXNXZWJQdXNoU3Vic2NyaWJlZCgpIHtcbiAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZWplY3QoJ0xlYW5wbHVtOiBQdXNoIG1lc3NhZ2luZyBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9nZXRTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKClcbiAgICAgICAgLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKClcbiAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gc3Vic2NyaXB0aW9uICE9PSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5fdXBkYXRlTmV3U3Vic2NyaXB0aW9uT25TZXJ2ZXIoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlzU3Vic2NyaWJlZCk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgZm9yIHdlYnB1c2guXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICBzZXJ2aWNlV29ya2VyVXJsIFRoZSB1cmwgdGhhdCBzZXJ2ZXMgdGhlIHNlcnZpY2V3b3JrZXJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24geW91ciBkb21haW4uXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgICAgICAgIFRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2l0aCByZXN1bHQuXG4gICAqL1xuICByZWdpc3RlcihzZXJ2aWNlV29ya2VyVXJsLCBjYWxsYmFjaykge1xuICAgIGlmICghaXNTdXBwb3J0ZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogUHVzaCBtZXNzYWdpbmcgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIGNhbGxiYWNrKGZhbHNlKTtcbiAgICB9XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXG4gICAgICAgIHNlcnZpY2VXb3JrZXJVcmwgPyBzZXJ2aWNlV29ya2VyVXJsIDogJy9zdy5taW4uanMnKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvbjtcblxuICAgICAgICAgIC8vIFNldCB0aGUgaW5pdGlhbCBzdWJzY3JpcHRpb24gdmFsdWVcbiAgICAgICAgICBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSAhKHN1YnNjcmlwdGlvbiA9PT0gbnVsbCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzU3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5fdXBkYXRlTmV3U3Vic2NyaXB0aW9uT25TZXJ2ZXIoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1N1YnNjcmliZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFNlcnZpY2UgV29ya2VyIEVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0aGUgdXNlcihicm93c2VyKSB0byBwdXNoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyBpZiBzdWJzY3JpcHRpb24gc3VjY2Vzc2Z1bCwgb3RoZXJ3aXNlIHJlamVjdHMuXG4gICAqL1xuICBzdWJzY3JpYmVVc2VyKCkge1xuICAgIGNvbnN0IGFwcGxpY2F0aW9uU2VydmVyS2V5ID1cbiAgICAgICAgdGhpcy5fdXJsQjY0VG9VaW50OEFycmF5KEFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuc3Vic2NyaWJlKHtcbiAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxuICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleTogYXBwbGljYXRpb25TZXJ2ZXJLZXksXG4gICAgICB9KVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgc2VsZi5fdXBkYXRlTmV3U3Vic2NyaXB0aW9uT25TZXJ2ZXIoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaXNTdWJzY3JpYmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoJ0xlYW5wbHVtOiBGYWlsZWQgdG8gc3Vic2NyaWJlIHRoZSB1c2VyOiAnICsgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSB0aGUgdXNlcihicm93c2VyKSBmcm9tIHB1c2guXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVzIGlmIHVuc3Vic2NyaWJlZCwgb3RoZXJ3aXNlIHJlamVjdHMuXG4gICAqL1xuICB1bnN1YnNjcmliZVVzZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKClcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdCgnTGVhbnBsdW06IEVycm9yIHVuc3Vic2NyaWJpbmc6ICcgKyBlcnJvcik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gb2JqZWN0IGZyb20gYnJvd3Nlci5cbiAgICogQHJldHVybiB7U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbn0gUmV0dXJucyB0aGUgcmVnaXN0cmF0aW9uIG9yIG51bGwuXG4gICAqL1xuICBfZ2V0U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKSB7XG4gICAgICAgIHJlc29sdmUoc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oKS50aGVuKChyZWdpc3RyYXRpb24pID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgYSBiYXNlNjQgdXJsIHN0cmluZyB0byBhbiB1aW50OGFycmFyeS5cbiAgICogQHBhcmFtICB7W3R5cGVdfSBiYXNlNjRTdHJpbmcgW2Rlc2NyaXB0aW9uXVxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBfdXJsQjY0VG9VaW50OEFycmF5KGJhc2U2NFN0cmluZykge1xuICAgIGNvbnN0IHBhZGRpbmcgPSAnPScucmVwZWF0KCg0IC0gYmFzZTY0U3RyaW5nLmxlbmd0aCAlIDQpICUgNCk7XG4gICAgY29uc3QgYmFzZTY0ID0gKGJhc2U2NFN0cmluZyArIHBhZGRpbmcpXG4gICAgICAgIC5yZXBsYWNlKC9cXC0vZywgJysnKVxuICAgICAgICAucmVwbGFjZSgvXy9nLCAnLycpO1xuXG4gICAgY29uc3QgcmF3RGF0YSA9IHdpbmRvdy5hdG9iKGJhc2U2NCk7XG4gICAgY29uc3Qgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0QXJyYXk7XG4gIH1cblxuICAvKipcbiAgICogW19wcmVwYXJlU3Vic2NyaXB0aW9uIGRlc2NyaXB0aW9uXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHN1YnNjcmlwdGlvbiBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIF9wcmVwYXJlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgIGxldCBrZXkgPSBzdWJzY3JpcHRpb24uZ2V0S2V5ID8gc3Vic2NyaXB0aW9uLmdldEtleSgncDI1NmRoJykgOiAnJztcbiAgICBsZXQgYXV0aCA9IHN1YnNjcmlwdGlvbi5nZXRLZXkgPyBzdWJzY3JpcHRpb24uZ2V0S2V5KCdhdXRoJykgOiAnJztcbiAgICBsZXQga2V5QXNjaWkgPSBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoa2V5KSkpO1xuICAgIGxldCBhdXRoQXNjaWkgPSBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoYXV0aCkpKTtcbiAgICByZXR1cm4ge1xuICAgICAgZW5kcG9pbnQ6IHN1YnNjcmlwdGlvbi5lbmRwb2ludCxcbiAgICAgIGtleToga2V5QXNjaWksXG4gICAgICBhdXRoOiBhdXRoQXNjaWksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgbmV3IHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gdGhlIExlYW5wbHVtIHNlcnZlci5cbiAgICogQHBhcmFtICB7W3R5cGVdfSBzdWJzY3JpcHRpb24gVGhlIHN1YnNjcmlwdGlvbi5cbiAgICovXG4gIF91cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICBsZXQgcHJlcGFyZWRTdWJzY3JpcHRpb24gPSB0aGlzLl9wcmVwYXJlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICBsZXQgcHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwcmVwYXJlZFN1YnNjcmlwdGlvbik7XG4gICAgICBsZXQgZXhpc3RpbmdTdWJzY3JpcHRpb25TdHJpbmcgPSBfbGVhbnBsdW0uX2dldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5QVVNIX1NVQlNDUklQVElPTik7XG4gICAgICBpZiAoIV8uaXNFcXVhbChleGlzdGluZ1N1YnNjcmlwdGlvblN0cmluZywgcHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmcpKSB7XG4gICAgICAgIF9sZWFucGx1bS5fc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuUFVTSF9TVUJTQ1JJUFRJT04sXG4gICAgICAgICAgICBwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZyk7XG4gICAgICAgIF9sZWFucGx1bS5fc2V0U3Vic2NyaXB0aW9uKHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHVzaE1hbmFnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUHVzaE1hbmFnZXIuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4vUmVxdWVzdFwiO1xuXG4vKipcbiAqIFNvY2tldC5pbyAxLjAgY2xpZW50IGNsYXNzLlxuICovXG5jbGFzcyBTb2NrZXRJb0NsaWVudCB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIG5ldyBTb2NrZXRJb0NsaWVudCwgbm90IGNvbm5lY3RlZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0cyB0byB0aGUgZ2l2ZW4gc29ja2V0SG9zdC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBzb2NrZXRIb3N0IFRoZSBob3N0IHRvIGNvbm5lY3QgdG8uXG4gICAqL1xuICBjb25uZWN0KHNvY2tldEhvc3QpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5jb25uZWN0aW5nID0gdHJ1ZTtcbiAgICBSZXF1ZXN0LmFqYXgoJ1BPU1QnLCAnaHR0cHM6Ly8nICsgc29ja2V0SG9zdCArICcvc29ja2V0LmlvLzEnLCAnJyxcbiAgICAgICAgZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgICBsZXQgcGFydHMgPSBsaW5lLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgbGV0IHNlc3Npb24gPSBwYXJ0c1swXTtcbiAgICAgICAgICBsZXQgaGVhcnRiZWF0ID0gcGFyc2VJbnQocGFydHNbMV0pIC8gMiAqIDEwMDA7XG4gICAgICAgICAgc2VsZi5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KCd3c3M6Ly8nICsgc29ja2V0SG9zdCArXG4gICAgICAgICAgICAgICcvc29ja2V0LmlvLzEvd2Vic29ja2V0LycgKyBzZXNzaW9uKTtcbiAgICAgICAgICBsZXQgaGVhcnRiZWF0SW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgIHNlbGYuc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHNlbGYub25vcGVuKSB7XG4gICAgICAgICAgICAgIHNlbGYub25vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFydGJlYXRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5zb2NrZXQuc2VuZCgnMjo6OicpO1xuICAgICAgICAgICAgfSwgaGVhcnRiZWF0KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHNlbGYuc29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChoZWFydGJlYXRJbnRlcnZhbCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5vbmNsb3NlKSB7XG4gICAgICAgICAgICAgIHNlbGYub25jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgc2VsZi5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgcGFydHMgPSBldmVudC5kYXRhLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICBsZXQgY29kZSA9IHBhcnNlSW50KHBhcnRzWzBdKTtcbiAgICAgICAgICAgIGlmIChjb2RlID09IDIpIHtcbiAgICAgICAgICAgICAgc2VsZi5zb2NrZXQuc2VuZCgnMjo6Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT0gNSkge1xuICAgICAgICAgICAgICBsZXQgbWVzc2FnZUlkID0gcGFydHNbMV07XG4gICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShwYXJ0cy5zbGljZSgzKS5qb2luKCc6JykpO1xuICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBkYXRhWyduYW1lJ107XG4gICAgICAgICAgICAgIGxldCBhcmdzID0gZGF0YVsnYXJncyddO1xuICAgICAgICAgICAgICBpZiAobWVzc2FnZUlkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zb2NrZXQuc2VuZCgnNjo6OicgKyBtZXNzYWdlSWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZWxmLm9ubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHNlbGYub25tZXNzYWdlKGV2ZW50LCBhcmdzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09IDcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NvY2tldCBlcnJvcjogJyArIGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgc2VsZi5zb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgc2VsZi5zb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgIGlmIChzZWxmLm9uZXJyb3IpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbmVycm9yKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9LCBudWxsLCBmYWxzZSwgdHJ1ZSAvLyBudWxsbSwgcXVldWVkLCBwbGFpblRleHRcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZW5kcyBnaXZlbiBldmVudCB3aXRoIGFyZ3VtZW50cyB0byB0aGUgc2VydmVyLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgZXZlbnQuXG4gICAqIEBwYXJhbSAge2FueX0gYXJncyBBcmd1bWVudHMgdG8gc2VuZC5cbiAgICovXG4gIHNlbmQobmFtZSwgYXJncykge1xuICAgIGlmICghdGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogU29ja2V0IGlzIG5vdCBjb25uZWN0ZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc29ja2V0LnNlbmQoJzU6OjonICsgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICduYW1lJzogbmFtZSxcbiAgICAgICAgICAnYXJncyc6IGFyZ3MsXG4gICAgICAgIH0pKTtcbiAgfTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNvY2tldElvQ2xpZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NvY2tldElvQ2xpZW50LmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgQXJnc0J1aWxkZXIgZnJvbSBcIi4vQXJnc0J1aWxkZXJcIjtcbmltcG9ydCBCcm93c2VyRGV0ZWN0b3IgZnJvbSBcIi4vQnJvd3NlckRldGVjdG9yXCI7XG5pbXBvcnQgU29ja2V0SW9DbGllbnQgZnJvbSBcIi4vU29ja2V0SW9DbGllbnRcIjtcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuL1JlcXVlc3RcIjtcbmltcG9ydCBQdXNoTWFuYWdlciBmcm9tIFwiLi9QdXNoTWFuYWdlclwiO1xuaW1wb3J0IF8gZnJvbSBcIi4vdW5kZXJzY29yZS5qc1wiO1xuXG5sZXQgX3ZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycyA9IFtdO1xubGV0IF92YXJpYW50cyA9IFtdO1xubGV0IF9zdGFydEhhbmRsZXJzID0gW107XG5sZXQgX2FjdGlvbk1ldGFkYXRhID0ge307XG5sZXQgX3Rva2VuID0gJyc7XG5sZXQgX2JhdGNoRW5hYmxlZCA9IHRydWU7XG5sZXQgX2JhdGNoQ29vbGRvd24gPSA1O1xubGV0IF9hcGlQYXRoID0gJ2h0dHBzOi8vd3d3LmxlYW5wbHVtLmNvbS9hcGknO1xubGV0IF9zb2NrZXRIb3N0ID0gJ2Rldi5sZWFucGx1bS5jb20nO1xubGV0IF9sb2NhbFN0b3JhZ2VFbmFibGVkID0gdW5kZWZpbmVkO1xubGV0IF9hbHRlcm5hdGVMb2NhbFN0b3JhZ2UgPSB7fTtcbmxldCBfYnJvd3NlckRldGVjdG9yID0gbmV3IEJyb3dzZXJEZXRlY3RvcigpO1xuXG4vKipcbiAqIEBwcmVzZXJ2ZSBMZWFucGx1bSBKYXZhc2NyaXB0IFNESy5cbiAqIENvcHlyaWdodCAyMDE2LCBMZWFucGx1bSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFlvdSBtYXkgbm90IGRpc3RyaWJ1dGUgdGhpcyBzb3VyY2UgY29kZSB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvblxuICogZnJvbSBMZWFucGx1bS5cbiAqL1xuY2xhc3MgTGVhbnBsdW0ge1xuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gUHVibGljIE1ldGhvZHNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIHN0YXRpYyBzZXRBcGlQYXRoKGFwaVBhdGgpIHtcbiAgICBpZiAoIWFwaVBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX2FwaVBhdGggPSBhcGlQYXRoO1xuICB9O1xuXG4gIHN0YXRpYyBzZXRFbWFpbChlbWFpbCkge1xuICAgIExlYW5wbHVtLl9lbWFpbCA9IGVtYWlsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBuZXR3b3JrIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIFRoZSB0aW1lb3V0IGluIHNlY29uZHMuXG4gICAqL1xuICBzdGF0aWMgc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcykge1xuICAgIFJlcXVlc3Quc2V0TmV0d29ya1RpbWVvdXQoc2Vjb25kcyk7XG4gIH07XG5cbiAgc3RhdGljIHNldEFwcElkRm9yRGV2ZWxvcG1lbnRNb2RlKGFwcElkLCBhY2Nlc3NLZXkpIHtcbiAgICBMZWFucGx1bS5fYXBwSWQgPSBhcHBJZDtcbiAgICBMZWFucGx1bS5fY2xpZW50S2V5ID0gYWNjZXNzS2V5O1xuICAgIExlYW5wbHVtLl9kZXZNb2RlID0gdHJ1ZTtcbiAgfTtcblxuICBzdGF0aWMgc2V0QXBwSWRGb3JQcm9kdWN0aW9uTW9kZShhcHBJZCwgYWNjZXNzS2V5KSB7XG4gICAgTGVhbnBsdW0uX2FwcElkID0gYXBwSWQ7XG4gICAgTGVhbnBsdW0uX2NsaWVudEtleSA9IGFjY2Vzc0tleTtcbiAgICBMZWFucGx1bS5fZGV2TW9kZSA9IGZhbHNlO1xuICB9O1xuXG4gIHN0YXRpYyBzZXRTb2NrZXRIb3N0KGhvc3QpIHtcbiAgICBfc29ja2V0SG9zdCA9IGhvc3Q7XG4gIH07XG5cbiAgc3RhdGljIHNldERldmljZUlkKGRldmljZUlkKSB7XG4gICAgTGVhbnBsdW0uX2RldmljZUlkID0gZGV2aWNlSWQ7XG4gIH07XG5cbiAgc3RhdGljIHNldEFwcFZlcnNpb24odmVyc2lvbk5hbWUpIHtcbiAgICBMZWFucGx1bS5fdmVyc2lvbk5hbWUgPSB2ZXJzaW9uTmFtZTtcbiAgfTtcblxuICBzdGF0aWMgc2V0RGV2aWNlTmFtZShkZXZpY2VOYW1lKSB7XG4gICAgTGVhbnBsdW0uX2RldmljZU5hbWUgPSBkZXZpY2VOYW1lO1xuICB9O1xuXG4gIHN0YXRpYyBzZXREZXZpY2VNb2RlbChkZXZpY2VNb2RlbCkge1xuICAgIExlYW5wbHVtLl9kZXZpY2VNb2RlbCA9IGRldmljZU1vZGVsO1xuICB9O1xuXG4gIHN0YXRpYyBzZXRTeXN0ZW1OYW1lKHN5c3RlbU5hbWUpIHtcbiAgICBMZWFucGx1bS5fc3lzdGVtTmFtZSA9IHN5c3RlbU5hbWU7XG4gIH07XG5cbiAgc3RhdGljIHNldFN5c3RlbVZlcnNpb24oc3lzdGVtVmVyc2lvbikge1xuICAgIExlYW5wbHVtLl9zeXN0ZW1WZXJzaW9uID0gc3lzdGVtVmVyc2lvbjtcbiAgfTtcblxuICBzdGF0aWMgc2V0VmFyaWFibGVzKHZhcmlhYmxlcykge1xuICAgIExlYW5wbHVtLl92YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gIH07XG5cbiAgc3RhdGljIHNldFJlcXVlc3RCYXRjaGluZyhiYXRjaEVuYWJsZWQsIGNvb2xkb3duU2Vjb25kcykge1xuICAgIF9iYXRjaEVuYWJsZWQgPSBiYXRjaEVuYWJsZWQ7XG4gICAgX2JhdGNoQ29vbGRvd24gPSBjb29sZG93blNlY29uZHM7XG4gIH07XG5cbiAgc3RhdGljIGdldFZhcmlhYmxlcyh2YXJpYWJsZXMpIHtcbiAgICByZXR1cm4gTGVhbnBsdW0uX21lcmdlZCAhPT0gdW5kZWZpbmVkID8gTGVhbnBsdW0uX21lcmdlZCA6XG4gICAgICAgIExlYW5wbHVtLl92YXJpYWJsZXM7XG4gIH07XG5cbiAgc3RhdGljIGdldFZhcmlhYmxlKGFyZ3MpIHtcbiAgICBsZXQgY3VycmVudCA9IExlYW5wbHVtLmdldFZhcmlhYmxlcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudFthcmd1bWVudHMuaV07XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9O1xuXG4gIHN0YXRpYyBnZXRWYXJpYW50cygpIHtcbiAgICByZXR1cm4gX3ZhcmlhbnRzIHx8IFtdO1xuICB9O1xuXG4gIHN0YXRpYyBhZGRTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgX3N0YXJ0SGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICBpZiAoTGVhbnBsdW0uX2hhc1N0YXJ0ZWQpIHtcbiAgICAgIGhhbmRsZXIoTGVhbnBsdW0uX3N0YXJ0U3VjY2Vzc2Z1bCk7XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBhZGRWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgX3ZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIGlmIChMZWFucGx1bS5faGFzUmVjZWl2ZWREaWZmcykge1xuICAgICAgaGFuZGxlcigpO1xuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgcmVtb3ZlU3RhcnRSZXNwb25zZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIGxldCBpZHggPSBfc3RhcnRIYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgX3N0YXJ0SGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyByZW1vdmVWYXJpYWJsZXNDaGFuZ2VkSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgbGV0IGlkeCA9IF92YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIF92YXJpYWJsZXNDaGFuZ2VkSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBzdGFydCh1c2VySWQsIHVzZXJBdHRyaWJ1dGVzLCBjYWxsYmFjaykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICBpZiAodHlwZW9mKHVzZXJJZCkgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VySWQ7XG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHt9O1xuICAgICAgdXNlcklkID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZih1c2VySWQpID09ICdvYmplY3QnICYmIHVzZXJJZCAhPT0gbnVsbCAmJlxuICAgICAgICB1c2VySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlcztcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0gdXNlcklkO1xuICAgICAgdXNlcklkID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZih1c2VyQXR0cmlidXRlcykgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlcztcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge307XG4gICAgfVxuICAgIExlYW5wbHVtLl91c2VySWQgPSB1c2VySWQ7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBMZWFucGx1bS5hZGRTdGFydFJlc3BvbnNlSGFuZGxlcihjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogQWRkIHJlZmVyZXIuXG4gICAgbGV0IGFyZ3MgPSBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVVNFUl9BVFRSSUJVVEVTLCBKU09OLnN0cmluZ2lmeSh1c2VyQXR0cmlidXRlcykpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DT1VOVFJZLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlJFR0lPTiwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5DSVRZLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkxPQ0FUSU9OLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNZU1RFTV9OQU1FLCBMZWFucGx1bS5fc3lzdGVtTmFtZSB8fCBfYnJvd3NlckRldGVjdG9yLk9TKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU1lTVEVNX1ZFUlNJT04sICcnICsgKExlYW5wbHVtLl9zeXN0ZW1WZXJzaW9uIHx8ICcnKSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkJST1dTRVJfTkFNRSwgX2Jyb3dzZXJEZXRlY3Rvci5icm93c2VyKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQlJPV1NFUl9WRVJTSU9OLCAnJyArIF9icm93c2VyRGV0ZWN0b3IudmVyc2lvbilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkxPQ0FMRSwgQ29uc3RhbnRzLlZBTFVFUy5ERVRFQ1QpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfTkFNRSwgTGVhbnBsdW0uX2RldmljZU5hbWUgfHwgKF9icm93c2VyRGV0ZWN0b3IuYnJvd3NlciArXG4gICAgICAgICAgICAnICcgKyBfYnJvd3NlckRldGVjdG9yLnZlcnNpb24pKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX01PREVMLCBMZWFucGx1bS5fZGV2aWNlTW9kZWwgfHwgJ1dlYiBCcm93c2VyJylcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklOQ0xVREVfREVGQVVMVFMsIGZhbHNlKTtcblxuICAgIC8vIElzc3VlIHJlcXVlc3QuXG4gICAgTGVhbnBsdW0uX3JlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU1RBUlQsIGFyZ3MsIHtcbiAgICAgIHF1ZXVlZDogdHJ1ZSxcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICByZXNwb25zZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIExlYW5wbHVtLl9oYXNTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgbGV0IHN0YXJ0UmVzcG9uc2UgPSBMZWFucGx1bS5fZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKExlYW5wbHVtLl9pc1Jlc3BvbnNlU3VjY2VzcyhzdGFydFJlc3BvbnNlKSkge1xuICAgICAgICAgIExlYW5wbHVtLl9zdGFydFN1Y2Nlc3NmdWwgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKExlYW5wbHVtLl9kZXZNb2RlKSB7XG4gICAgICAgICAgICBsZXQgbGF0ZXN0VmVyc2lvbiA9IHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuTEFURVNUX1ZFUlNJT05dO1xuICAgICAgICAgICAgaWYgKGxhdGVzdFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0EgbmV3ZXIgdmVyc2lvbiBvZiBMZWFucGx1bSwgJyArIGxhdGVzdFZlcnNpb24gK1xuICAgICAgICAgICAgICAgICAgJywgaXMgYXZhaWxhYmxlLiAnICsgJ0dvIHRvIGxlYW5wbHVtLmNvbSB0byBkb3dubG9hZCBpdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgICAgTGVhbnBsdW0uX3NvY2tldElPQ29ubmVjdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1lvdXIgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCBXZWJTb2NrZXRzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIExlYW5wbHVtLl9zZXRDb250ZW50KFxuICAgICAgICAgICAgICBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdLFxuICAgICAgICAgICAgICBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUklBTlRTXSxcbiAgICAgICAgICAgICAgc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdKTtcbiAgICAgICAgICBfdG9rZW4gPSBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlRPS0VOXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMZWFucGx1bS5fc3RhcnRTdWNjZXNzZnVsID0gZmFsc2U7XG4gICAgICAgICAgTGVhbnBsdW0uX2xvYWREaWZmcygpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3N0YXJ0SGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBfc3RhcnRIYW5kbGVyc1tpXShMZWFucGx1bS5fc3RhcnRTdWNjZXNzZnVsKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzdGFydEZyb21DYWNoZSh1c2VySWQsIHVzZXJBdHRyaWJ1dGVzLCBjYWxsYmFjaykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICBpZiAodHlwZW9mKHVzZXJJZCkgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VySWQ7XG4gICAgICB1c2VyQXR0cmlidXRlcyA9IHt9O1xuICAgICAgdXNlcklkID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZih1c2VySWQpID09ICdvYmplY3QnICYmIHVzZXJJZCAhPT0gbnVsbCAmJlxuICAgICAgICB1c2VySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlcztcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0gdXNlcklkO1xuICAgICAgdXNlcklkID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZih1c2VyQXR0cmlidXRlcykgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSB1c2VyQXR0cmlidXRlcztcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge307XG4gICAgfVxuICAgIExlYW5wbHVtLl91c2VySWQgPSB1c2VySWQ7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBMZWFucGx1bS5hZGRTdGFydFJlc3BvbnNlSGFuZGxlcihjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgTGVhbnBsdW0uX2hhc1N0YXJ0ZWQgPSB0cnVlO1xuICAgIExlYW5wbHVtLl9zdGFydFN1Y2Nlc3NmdWwgPSB0cnVlO1xuICAgIGlmIChMZWFucGx1bS5fZGV2TW9kZSkge1xuICAgICAgaWYgKFdlYlNvY2tldCkge1xuICAgICAgICBMZWFucGx1bS5fc29ja2V0SU9Db25uZWN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnWW91ciBicm93c2VyIGRvZXNuXFwndCBzdXBwb3J0IFdlYlNvY2tldHMuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIExlYW5wbHVtLl9sb2FkRGlmZnMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9zdGFydEhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfc3RhcnRIYW5kbGVyc1tpXShMZWFucGx1bS5fc3RhcnRTdWNjZXNzZnVsKTtcbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIHN0b3AoKSB7XG4gICAgTGVhbnBsdW0uX3JlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU1RPUCwgdW5kZWZpbmVkLCB7XG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcXVldWVkOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIHN0YXRpYyBwYXVzZVNlc3Npb24oKSB7XG4gICAgTGVhbnBsdW0uX3JlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUEFVU0VfU0VTU0lPTiwgdW5kZWZpbmVkLCB7XG4gICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgcXVldWVkOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIHN0YXRpYyByZXN1bWVTZXNzaW9uKCkge1xuICAgIExlYW5wbHVtLl9yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlJFU1VNRV9TRVNTSU9OLCB1bmRlZmluZWQsIHtcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICBxdWV1ZWQ6IHRydWUsXG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIHBhdXNlU3RhdGUoKSB7XG4gICAgTGVhbnBsdW0uX3JlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUEFVU0VfU1RBVEUsIHVuZGVmaW5lZCwge1xuICAgICAgcXVldWVkOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIHN0YXRpYyByZXN1bWVTdGF0ZSgpIHtcbiAgICBMZWFucGx1bS5fcmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5SRVNVTUVfU1RBVEUsIHVuZGVmaW5lZCwge1xuICAgICAgcXVldWVkOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIHN0YXRpYyBzZXRVc2VySWQodXNlcklkKSB7XG4gICAgTGVhbnBsdW0uc2V0VXNlckF0dHJpYnV0ZXModXNlcklkKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRVc2VyQXR0cmlidXRlcyh1c2VySWQsIHVzZXJBdHRyaWJ1dGVzKSB7XG4gICAgaWYgKHVzZXJBdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgdXNlcklkID09ICdvYmplY3QnKSB7XG4gICAgICAgIHVzZXJBdHRyaWJ1dGVzID0gdXNlcklkO1xuICAgICAgICB1c2VySWQgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB1c2VySWQgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBzZXRVc2VyQXR0cmlidXRlcyBleHBlY3RzIGEgc3RyaW5nIG9yIGFuICcgK1xuICAgICAgICAgICAgJ29iamVjdCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIExlYW5wbHVtLl9yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNFVF9VU0VSX0FUVFJJQlVURVMsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVVNFUl9BVFRSSUJVVEVTLFxuICAgICAgICAgICAgICAgIHVzZXJBdHRyaWJ1dGVzID8gSlNPTi5zdHJpbmdpZnkodXNlckF0dHJpYnV0ZXMpIDogdW5kZWZpbmVkKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLk5FV19VU0VSX0lELCB1c2VySWQpLCB7XG4gICAgICAgICAgcXVldWVkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICBMZWFucGx1bS5fdXNlcklkID0gdXNlcklkO1xuICAgICAgTGVhbnBsdW0uX3NhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlVTRVJfSUQsIExlYW5wbHVtLl91c2VySWQpO1xuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgdHJhY2soZXZlbnQsIHZhbHVlLCBpbmZvLCBwYXJhbXMpIHtcbiAgICAvLyBPdmVybG9hZHMuXG4gICAgLy8gb2JqZWN0ICYmICFudWxsICYmICF1bmRlZmluZWQgLT4gcGFyYW1zXG4gICAgLy8gc3RyaW5nIC0+IGluZm8sIHBhcmFtc1xuICAgIC8vICosIG9iamVjdCAmJiAhbnVsbCAmJiAhdW5kZWZpbmVkIC0+IHZhbHVlLCBwYXJhbXNcbiAgICBpZiAodHlwZW9mKHZhbHVlKSA9PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMgPSB2YWx1ZTtcbiAgICAgIGluZm8gPSB1bmRlZmluZWQ7XG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZih2YWx1ZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcyA9IGluZm87XG4gICAgICBpbmZvID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZihpbmZvKSA9PSAnb2JqZWN0JyAmJiBpbmZvICE9PSBudWxsICYmXG4gICAgICAgIGluZm8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gaW5mbztcbiAgICAgIGluZm8gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIExlYW5wbHVtLl9yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlRSQUNLLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkVWRU5ULCBldmVudClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5WQUxVRSwgdmFsdWUgfHwgMC4wKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklORk8sIGluZm8pXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuUEFSQU1TLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKSwge1xuICAgICAgICAgIHF1ZXVlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIGFkdmFuY2VUbyhzdGF0ZSwgaW5mbywgcGFyYW1zKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIC8vIHN0cmluZ3xudWxsfHVuZGVmaW5lZCwgKiAtPiBpbmZvLCBwYXJhbXNcbiAgICAvLyBvYmplY3QgJiYgIW51bGwgJiYgIXVuZGVmaW5lZCAtPiBwYXJhbXNcbiAgICBpZiAodHlwZW9mKGluZm8pID09ICdvYmplY3QnICYmIGluZm8gIT09IG51bGwgJiYgaW5mbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMgPSBpbmZvO1xuICAgICAgaW5mbyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBMZWFucGx1bS5fcmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5BRFZBTkNFLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNUQVRFLCBzdGF0ZSlcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkZPLCBpbmZvKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlBBUkFNUywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSksIHtcbiAgICAgICAgICBxdWV1ZWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHdlYiBwdXNoIGlzIHN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlci5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBzdXBwb3J0ZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3VwcG9ydGVkKCkge1xuICAgIGlmIChfcHVzaE1hbmFnZXIpIHtcbiAgICAgIHJldHVybiBfcHVzaE1hbmFnZXIuaXNXZWJQdXNoU3VwcG9ydGVkKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHdlYiBwdXNoIGlzIHN1YnNjcmliZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVzIGlmIHRydWUsIHJlamVjdHMgaWYgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNXZWJQdXNoU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gX3B1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1YnNjcmliZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgYnJvd3NlciBmb3Igd2VicHVzaC5cbiAgICogQHBhcmFtICB7W3R5cGVdfSAgIHNlcnZpY2VXb3JrZXJVcmwgVGhlIHVybCBvbiB5b3VyIHNlcnZlciB0aGF0IGhvc3RzIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3cubWluLmpzIHNlcnZpY2Ugd29ya2VyIGpzIGZpbGUuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgICAgICAgIEEgY2FsbGJhY2sgd2l0aCB0aGUgcmVnaXN0cmF0aW9uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgICAgICAgICAgICAgUmVzb2x2ZXMgaWYgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyd2lzZSBmYWlscy5cbiAgICovXG4gIHN0YXRpYyByZWdpc3RlckZvcldlYlB1c2goc2VydmljZVdvcmtlclVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoX3B1c2hNYW5hZ2VyICYmIF9wdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKSkge1xuICAgICAgICByZXR1cm4gX3B1c2hNYW5hZ2VyLnJlZ2lzdGVyKHNlcnZpY2VXb3JrZXJVcmwsIChpc1N1YnNjcmliZWQpID0+IHtcbiAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF9wdXNoTWFuYWdlci5zdWJzY3JpYmVVc2VyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdCgnTGVhbnBsdW06IFdlYlB1c2ggaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVycyB0aGUgYnJvd3NlciBmb3JtIHdlYnB1c2guXG4gICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgICAgICAgUmVzb2x2ZXMgb24gc3VjY2Vzcywgb3RoZXJ3aXNlIHJlamVjdHMuXG4gICAqL1xuICBzdGF0aWMgdW5yZWdpc3RlckZyb21XZWJQdXNoKCkge1xuICAgIHJldHVybiBfcHVzaE1hbmFnZXIudW5zdWJzY3JpYmVVc2VyKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCB0aGUgc3Vic2NyaXB0aW9uIHRvIHRoZSBMZWFucGx1bSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7U3RyaW5nL09iamVjdH0gc3Vic2NyaXB0aW9uIFRoZSBzdWJzY3JpcHRpb24gc3RyaW5nLlxuICAgKi9cbiAgc3RhdGljIF9zZXRTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgTGVhbnBsdW0uX3JlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU0VUX0RFVklDRV9BVFRSSUJVVEVTLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKS5hZGQoQ29uc3RhbnRzLlBBUkFNUy5XRUJfUFVTSF9TVUJTQ1JJUFRJT04sXG4gICAgICAgICAgICBzdWJzY3JpcHRpb24pLCB7XG4gICAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyBQcml2YXRlIE1ldGhvZHNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgc3RhdGljIF9zb2NrZXRJT0Nvbm5lY3QoKSB7XG4gICAgbGV0IGNsaWVudCA9IG5ldyBTb2NrZXRJb0NsaWVudCgpO1xuICAgIGxldCBhdXRoU2VudCA9IGZhbHNlO1xuICAgIGNsaWVudC5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWF1dGhTZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogQ29ubmVjdGVkIHRvIGRldmVsb3BtZW50IHNlcnZlci4nKTtcbiAgICAgICAgbGV0IGFyZ3MgPSB7fTtcbiAgICAgICAgYXJnc1tDb25zdGFudHMuUEFSQU1TLkFQUF9JRF0gPSBMZWFucGx1bS5fYXBwSWQ7XG4gICAgICAgIGFyZ3NbQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfSURdID0gTGVhbnBsdW0uX2RldmljZUlkO1xuICAgICAgICBjbGllbnQuc2VuZCgnYXV0aCcsIGFyZ3MpO1xuICAgICAgICBhdXRoU2VudCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgICBjbGllbnQub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBTb2NrZXQgZXJyb3InLCBldmVudCk7XG4gICAgfTtcbiAgICBjbGllbnQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50LCBhcmdzKSB7XG4gICAgICBpZiAoZXZlbnQgPT0gJ3VwZGF0ZVZhcnMnKSB7XG4gICAgICAgIExlYW5wbHVtLl9yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLkdFVF9WQVJTLFxuICAgICAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5DTFVERV9ERUZBVUxUUywgZmFsc2UpLCB7XG4gICAgICAgICAgICAgIHF1ZXVlZDogZmFsc2UsXG4gICAgICAgICAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICAgICAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2V0VmFyc1Jlc3BvbnNlID0gTGVhbnBsdW0uX2dldExhc3RSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJTXTtcbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFudHMgPSBnZXRWYXJzUmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVFNdO1xuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25NZXRhZGF0YSA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5BQ1RJT05fTUVUQURBVEFdO1xuICAgICAgICAgICAgICAgIGlmICghXy5pc0VxdWFsKHZhbHVlcywgTGVhbnBsdW0uX2RpZmZzKSkge1xuICAgICAgICAgICAgICAgICAgTGVhbnBsdW0uX3NldENvbnRlbnQodmFsdWVzLCB2YXJpYW50cywgYWN0aW9uTWV0YWRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT0gJ2dldFZhcmlhYmxlcycpIHtcbiAgICAgICAgTGVhbnBsdW0uX3NlbmRWYXJpYWJsZXMoKTtcbiAgICAgICAgY2xpZW50LnNlbmQoJ2dldENvbnRlbnRSZXNwb25zZScsIHtcbiAgICAgICAgICAndXBkYXRlZCc6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChldmVudCA9PSAnZ2V0QWN0aW9ucycpIHtcbiAgICAgICAgLy8gVW5zdXBwb3J0ZWQgaW4gSmF2YVNjcmlwdCBTREsuXG4gICAgICAgIGNsaWVudC5zZW5kKCdnZXRDb250ZW50UmVzcG9uc2UnLCB7XG4gICAgICAgICAgJ3VwZGF0ZWQnOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50ID09ICdyZWdpc3RlckRldmljZScpIHtcbiAgICAgICAgYWxlcnQoJ1lvdXIgZGV2aWNlIGhhcyBiZWVuIHJlZ2lzdGVyZWQgdG8gJyArIGFyZ3NbMF1bJ2VtYWlsJ10gKyAnLicpO1xuICAgICAgfVxuICAgIH07XG4gICAgY2xpZW50Lm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IERpc2Nvbm5lY3RlZCB0byBkZXZlbG9wbWVudCBzZXJ2ZXIuJyk7XG4gICAgICBhdXRoU2VudCA9IGZhbHNlO1xuICAgIH07XG4gICAgY2xpZW50LmNvbm5lY3QoX3NvY2tldEhvc3QpO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY2xpZW50LmNvbm5lY3RlZCAmJiAhY2xpZW50LmNvbm5lY3RpbmcpIHtcbiAgICAgICAgY2xpZW50LmNvbm5lY3QoX3NvY2tldEhvc3QpO1xuICAgICAgfVxuICAgIH0sIDUwMDApO1xuICB9O1xuXG4gIC8vIExlYW5wbHVtIHV0aWxpdHkgbWV0aG9kcy5cblxuICBzdGF0aWMgX3NldENvbnRlbnQoZGlmZnMsIHZhcmlhbnRzLCBhY3Rpb25NZXRhZGF0YSkge1xuICAgIExlYW5wbHVtLl9kaWZmcyA9IGRpZmZzO1xuICAgIF92YXJpYW50cyA9IHZhcmlhbnRzO1xuICAgIF9hY3Rpb25NZXRhZGF0YSA9IGFjdGlvbk1ldGFkYXRhO1xuICAgIExlYW5wbHVtLl9oYXNSZWNlaXZlZERpZmZzID0gdHJ1ZTtcbiAgICBMZWFucGx1bS5fbWVyZ2VkID0gTGVhbnBsdW0uX21lcmdlSGVscGVyKExlYW5wbHVtLl92YXJpYWJsZXMsIGRpZmZzKTtcbiAgICBMZWFucGx1bS5fc2F2ZURpZmZzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfdmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfdmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzW2ldKCk7XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBfbWVyZ2VIZWxwZXIodmFycywgZGlmZikge1xuICAgIGlmICh0eXBlb2YgZGlmZiA9PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGlmZiA9PSAnYm9vbGVhbicgfHxcbiAgICAgICAgdHlwZW9mIGRpZmYgPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBkaWZmO1xuICAgIH1cbiAgICBpZiAoZGlmZiA9PT0gbnVsbCB8fCBkaWZmID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB2YXJzO1xuICAgIH1cblxuICAgIGxldCBvYmpJdGVyYXRvciA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZikge1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZihvYmpbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBhdHRyKSkge1xuICAgICAgICAgICAgICBmKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIGxldCB2YXJzSXRlcmF0b3IgPSBvYmpJdGVyYXRvcih2YXJzKTtcbiAgICBsZXQgZGlmZkl0ZXJhdG9yID0gb2JqSXRlcmF0b3IoZGlmZik7XG5cbiAgICAvLyBJbmZlciB0aGF0IHRoZSBkaWZmcyBpcyBhbiBhcnJheSBpZiB0aGUgdmFycyB2YWx1ZSBkb2Vzbid0IGV4aXN0IHRvIHRlbGxcbiAgICAvLyB1cyB0aGUgdHlwZS5cbiAgICBsZXQgaXNBcnJheSA9IGZhbHNlO1xuICAgIGlmICh2YXJzID09IG51bGwpIHtcbiAgICAgIGlmICghKGRpZmYgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgaXNBcnJheSA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGF0dHIgaW4gZGlmZikge1xuICAgICAgICAgIGlmIChpc0FycmF5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBpc0FycmF5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEodHlwZW9mIGF0dHIgPT0gJ3N0cmluZycpKSB7XG4gICAgICAgICAgICBpc0FycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGF0dHIubGVuZ3RoIDwgMyB8fCBhdHRyLmNoYXJBdCgwKSAhPSAnWycgfHxcbiAgICAgICAgICAgICAgYXR0ci5jaGFyQXQoYXR0ci5sZW5ndGggLSAxKSAhPSAnXScpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgdmFyU3Vic2NyaXB0ID0gYXR0ci5zdWJzdHJpbmcoMSwgYXR0ci5sZW5ndGggLSAxKTtcbiAgICAgICAgICBpZiAoISgnJyArIHBhcnNlSW50KHZhclN1YnNjcmlwdCkpID09IHZhclN1YnNjcmlwdCkge1xuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgYXJyYXlzLlxuICAgIGlmICh2YXJzIGluc3RhbmNlb2YgQXJyYXkgfHwgaXNBcnJheSkge1xuICAgICAgbGV0IG1lcmdlZCA9IFtdO1xuICAgICAgdmFyc0l0ZXJhdG9yKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgIG1lcmdlZC5wdXNoKGF0dHIpO1xuICAgICAgfSk7XG4gICAgICBkaWZmSXRlcmF0b3IoZnVuY3Rpb24gKHZhclN1YnNjcmlwdCkge1xuICAgICAgICBsZXQgc3Vic2NyaXB0ID1cbiAgICAgICAgICAgIHBhcnNlSW50KHZhclN1YnNjcmlwdC5zdWJzdHJpbmcoMSwgdmFyU3Vic2NyaXB0Lmxlbmd0aCAtIDEpKTtcbiAgICAgICAgbGV0IGRpZmZWYWx1ZSA9IGRpZmZbdmFyU3Vic2NyaXB0XTtcbiAgICAgICAgd2hpbGUgKHN1YnNjcmlwdCA+PSBtZXJnZWQubGVuZ3RoKSB7XG4gICAgICAgICAgbWVyZ2VkLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VkW3N1YnNjcmlwdF0gPSBMZWFucGx1bS5fbWVyZ2VIZWxwZXIobWVyZ2VkW3N1YnNjcmlwdF0sIGRpZmZWYWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgZGljdGlvbmFyaWVzLlxuICAgIGxldCBtZXJnZWQgPSB7fTtcbiAgICB2YXJzSXRlcmF0b3IoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgIGlmIChkaWZmW2F0dHJdID09PSBudWxsIHx8IGRpZmZbYXR0cl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtZXJnZWRbYXR0cl0gPSB2YXJzW2F0dHJdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRpZmZJdGVyYXRvcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgbWVyZ2VkW2F0dHJdID0gTGVhbnBsdW0uX21lcmdlSGVscGVyKHZhcnMgIT0gbnVsbCA/IHZhcnNbYXR0cl0gOiBudWxsLFxuICAgICAgICAgIGRpZmZbYXR0cl0pO1xuICAgIH0pO1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH07XG5cbiAgc3RhdGljIF9zZW5kVmFyaWFibGVzKCkge1xuICAgIGxldCBib2R5ID0ge307XG4gICAgYm9keVtDb25zdGFudHMuUEFSQU1TLlZBUklBQkxFU10gPSBMZWFucGx1bS5fdmFyaWFibGVzO1xuICAgIExlYW5wbHVtLl9yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlNFVF9WQVJTLFxuICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKS5ib2R5KEpTT04uc3RyaW5naWZ5KGJvZHkpKSwge1xuICAgICAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICAgIH0pO1xuICB9O1xuXG4gIHN0YXRpYyBfbG9hZERpZmZzKCkge1xuICAgIHRyeSB7XG4gICAgICBMZWFucGx1bS5fc2V0Q29udGVudChcbiAgICAgICAgICBKU09OLnBhcnNlKExlYW5wbHVtLl9nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQUJMRVMpIHx8IG51bGwpLFxuICAgICAgICAgIEpTT04ucGFyc2UoTGVhbnBsdW0uX2dldEZyb21Mb2NhbFN0b3JhZ2UoXG4gICAgICAgICAgICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBTlRTKSB8fCBudWxsKSxcbiAgICAgICAgICBKU09OLnBhcnNlKExlYW5wbHVtLl9nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5BQ1RJT05fTUVUQURBVEEpIHx8IG51bGwpKTtcbiAgICAgIF90b2tlbiA9IExlYW5wbHVtLl9nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVE9LRU4pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogSW52YWxpZCBkaWZmczogJyArIGUpO1xuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgX3NhdmVEaWZmcygpIHtcbiAgICBMZWFucGx1bS5fc2F2ZVRvTG9jYWxTdG9yYWdlKFxuICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlZBUklBQkxFUywgSlNPTi5zdHJpbmdpZnkoTGVhbnBsdW0uX2RpZmZzIHx8IHt9KSk7XG4gICAgTGVhbnBsdW0uX3NhdmVUb0xvY2FsU3RvcmFnZShcbiAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UUywgSlNPTi5zdHJpbmdpZnkoX3ZhcmlhbnRzIHx8IFtdKVxuICAgICk7XG4gICAgTGVhbnBsdW0uX3NhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkFDVElPTl9NRVRBREFUQSxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoX2FjdGlvbk1ldGFkYXRhIHx8IHt9KSk7XG4gICAgTGVhbnBsdW0uX3NhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlRPS0VOLCBfdG9rZW4pO1xuICB9O1xuXG4gIHN0YXRpYyBfc2F2ZVJlcXVlc3RGb3JMYXRlcihhcmdzKSB7XG4gICAgbGV0IGNvdW50ID0gTGVhbnBsdW0uX2dldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVCkgfHwgMDtcbiAgICBsZXQgaXRlbUtleSA9IENvbnN0YW50cy5ERUZBVUxUX0tFWVMuSVRFTSArIGNvdW50O1xuICAgIExlYW5wbHVtLl9zYXZlVG9Mb2NhbFN0b3JhZ2UoaXRlbUtleSwgSlNPTi5zdHJpbmdpZnkoYXJncykpO1xuICAgIGNvdW50Kys7XG4gICAgTGVhbnBsdW0uX3NhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5ULCBjb3VudCk7XG4gIH07XG5cbiAgc3RhdGljIF9wb3BVbnNlbnRSZXF1ZXN0cygpIHtcbiAgICBsZXQgcmVxdWVzdERhdGEgPSBbXTtcbiAgICBsZXQgY291bnQgPSBMZWFucGx1bS5fZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKSB8fCAwO1xuICAgIExlYW5wbHVtLl9yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQ09VTlQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgbGV0IGl0ZW1LZXkgPSBDb25zdGFudHMuREVGQVVMVF9LRVlTLklURU0gKyBpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlcXVlc3RBcmdzID0gSlNPTi5wYXJzZShMZWFucGx1bS5fZ2V0RnJvbUxvY2FsU3RvcmFnZShpdGVtS2V5KSk7XG4gICAgICAgIHJlcXVlc3REYXRhLnB1c2gocmVxdWVzdEFyZ3MpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgICAgTGVhbnBsdW0uX3JlbW92ZUZyb21Mb2NhbFN0b3JhZ2UoaXRlbUtleSk7XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgfTtcblxuICBzdGF0aWMgX3JlcXVlc3QoYWN0aW9uLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwgbmV3IEFyZ3NCdWlsZGVyKCk7XG5cbiAgICAvLyBHZXQgb3IgY3JlYXRlIGRldmljZSBJRCBhbmQgdXNlciBJRC5cbiAgICBpZiAoIUxlYW5wbHVtLl9kZXZpY2VJZCkge1xuICAgICAgTGVhbnBsdW0uX2RldmljZUlkID1cbiAgICAgICAgICBMZWFucGx1bS5fZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRCk7XG4gICAgfVxuICAgIGlmICghTGVhbnBsdW0uX2RldmljZUlkKSB7XG4gICAgICBsZXQgaWQgPSAnJztcbiAgICAgIGxldCBwb3NzaWJsZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyArXG4gICAgICAgICAgJzAxMjM0NTY3ODknO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlkICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICAgIExlYW5wbHVtLl9kZXZpY2VJZCA9IGlkO1xuICAgICAgTGVhbnBsdW0uX3NhdmVUb0xvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkRFVklDRV9JRCwgaWQpO1xuICAgIH1cbiAgICBpZiAoIUxlYW5wbHVtLl91c2VySWQpIHtcbiAgICAgIExlYW5wbHVtLl91c2VySWQgPSBMZWFucGx1bS5fZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlVTRVJfSUQpO1xuICAgICAgaWYgKCFMZWFucGx1bS5fdXNlcklkKSB7XG4gICAgICAgIExlYW5wbHVtLl91c2VySWQgPSBMZWFucGx1bS5fZGV2aWNlSWQ7XG4gICAgICB9XG4gICAgfVxuICAgIExlYW5wbHVtLl9zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5VU0VSX0lELCBMZWFucGx1bS5fdXNlcklkKTtcblxuICAgIGxldCBhcmdzQnVpbGRlciA9IHBhcmFtc1xuICAgICAgICAuYXR0YWNoQXBpS2V5cyhMZWFucGx1bS5fYXBwSWQsIExlYW5wbHVtLl9jbGllbnRLZXkpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TREtfVkVSU0lPTiwgQ29uc3RhbnRzLlNES19WRVJTSU9OKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuREVWSUNFX0lELCBMZWFucGx1bS5fZGV2aWNlSWQpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0lELCBMZWFucGx1bS5fdXNlcklkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQUNUSU9OLCBhY3Rpb24pXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5WRVJTSU9OX05BTUUsIExlYW5wbHVtLl92ZXJzaW9uTmFtZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVl9NT0RFLCBMZWFucGx1bS5fZGV2TW9kZSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlRJTUUsICcnICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkpO1xuICAgIGxldCBzdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzIHx8IG9wdGlvbnMucmVzcG9uc2U7XG4gICAgbGV0IGVycm9yID0gb3B0aW9ucy5lcnJvciB8fCBvcHRpb25zLnJlc3BvbnNlO1xuXG4gICAgaWYgKCFMZWFucGx1bS5fYXBwSWQgfHwgIUxlYW5wbHVtLl9jbGllbnRLZXkpIHtcbiAgICAgIGxldCBlcnIgPSAnTGVhbnBsdW0gQXBwIElEIGFuZCBjbGllbnQga2V5IGFyZSBub3Qgc2V0LiBNYWtlIHN1cmUgeW91ICcgK1xuICAgICAgICAgICdhcmUgY2FsbGluZyBzZXRBcHBJZEZvckRldmVsb3BtZW50TW9kZSBvciBzZXRBcHBJZEZvclByb2R1Y3Rpb25Nb2RlICcgK1xuICAgICAgICAgICdiZWZvcmUgaXNzdWluZyBBUEkgY2FsbHMuJztcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIGlmIChlcnJvcikgZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmJvZHkoKSkge1xuICAgICAgUmVxdWVzdC5hamF4KCdQT1NUJywgX2FwaVBhdGggKyAnPycgKyBhcmdzQnVpbGRlci5idWlsZCgpLFxuICAgICAgICAgIHBhcmFtcy5ib2R5KCksIHN1Y2Nlc3MsIGVycm9yLCBvcHRpb25zLnF1ZXVlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNlbmROb3cgPSAoTGVhbnBsdW0uX2Rldk1vZGUgfHwgb3B0aW9ucy5zZW5kTm93IHx8XG4gICAgIV9iYXRjaEVuYWJsZWQpO1xuXG4gICAgbGV0IHNlbmRVbnNlbnRSZXF1ZXN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCByZXF1ZXN0c1RvU2VuZCA9IExlYW5wbHVtLl9wb3BVbnNlbnRSZXF1ZXN0cygpO1xuICAgICAgaWYgKHJlcXVlc3RzVG9TZW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICdkYXRhJzogcmVxdWVzdHNUb1NlbmQsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbXVsdGlSZXF1ZXN0QXJncyA9IG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAuYXR0YWNoQXBpS2V5cyhMZWFucGx1bS5fYXBwSWQsIExlYW5wbHVtLl9jbGllbnRLZXkpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU0RLX1ZFUlNJT04sIENvbnN0YW50cy5TREtfVkVSU0lPTilcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5BQ1RJT04sIENvbnN0YW50cy5NRVRIT0RTLk1VTFRJKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlRJTUUsICcnICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICAgICAgUmVxdWVzdC5hamF4KCdQT1NUJywgX2FwaVBhdGggKyAnPycgKyBtdWx0aVJlcXVlc3RBcmdzLCByZXF1ZXN0RGF0YSxcbiAgICAgICAgICAgIHN1Y2Nlc3MsIGVycm9yLCBvcHRpb25zLnF1ZXVlZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIERlYWwgd2l0aCBjb29sZG93bi5cbiAgICBpZiAoIXNlbmROb3cgJiYgX2JhdGNoQ29vbGRvd24pIHtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDA7XG4gICAgICBpZiAoIUxlYW5wbHVtLl9sYXN0UmVxdWVzdFRpbWUgfHxcbiAgICAgICAgICBub3cgLSBMZWFucGx1bS5fbGFzdFJlcXVlc3RUaW1lID49IF9iYXRjaENvb2xkb3duKSB7XG4gICAgICAgIHNlbmROb3cgPSB0cnVlO1xuICAgICAgICBMZWFucGx1bS5fbGFzdFJlcXVlc3RUaW1lID0gbm93O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFMZWFucGx1bS5fY29vbGRvd25UaW1lb3V0KSB7XG4gICAgICAgICAgTGVhbnBsdW0uX2Nvb2xkb3duVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgTGVhbnBsdW0uX2Nvb2xkb3duVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBMZWFucGx1bS5fbGFzdFJlcXVlc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwO1xuICAgICAgICAgICAgc2VuZFVuc2VudFJlcXVlc3RzKCk7XG4gICAgICAgICAgfSwgKF9iYXRjaENvb2xkb3duIC1cbiAgICAgICAgICAgICAgKG5vdyAtIExlYW5wbHVtLl9sYXN0UmVxdWVzdFRpbWUpKSAqIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgTGVhbnBsdW0uX3NhdmVSZXF1ZXN0Rm9yTGF0ZXIoYXJnc0J1aWxkZXIuYnVpbGREaWN0KCkpO1xuICAgIGlmIChzZW5kTm93KSB7XG4gICAgICBzZW5kVW5zZW50UmVxdWVzdHMoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLyBSZXNwb25zZSBwYXJzaW5nIC8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHN0YXRpYyBfbnVtUmVzcG9uc2VzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2VbJ3Jlc3BvbnNlJ10pIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2VbJ3Jlc3BvbnNlJ10ubGVuZ3RoO1xuICB9O1xuXG4gIHN0YXRpYyBfZ2V0UmVzcG9uc2VBdChyZXNwb25zZSwgaW5kZXgpIHtcbiAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZVsncmVzcG9uc2UnXSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZVsncmVzcG9uc2UnXVtpbmRleF07XG4gIH07XG5cbiAgc3RhdGljIF9nZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBsZXQgY291bnQgPSBMZWFucGx1bS5fbnVtUmVzcG9uc2VzKHJlc3BvbnNlKTtcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICByZXR1cm4gTGVhbnBsdW0uX2dldFJlc3BvbnNlQXQocmVzcG9uc2UsIGNvdW50IC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgX2lzUmVzcG9uc2VTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2VbJ3N1Y2Nlc3MnXSA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICBzdGF0aWMgX2dldFJlc3BvbnNlRXJyb3IocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IGVycm9yID0gcmVzcG9uc2VbJ2Vycm9yJ107XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBlcnJvclsnbWVzc2FnZSddO1xuICB9O1xuXG4gIHN0YXRpYyBfZ2V0RnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcbiAgICBpZiAoX2xvY2FsU3RvcmFnZUVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gX2FsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV07XG4gIH07XG5cbiAgc3RhdGljIF9zYXZlVG9Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChfbG9jYWxTdG9yYWdlRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIF9hbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBfbG9jYWxTdG9yYWdlRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgTGVhbnBsdW0uX3NhdmVUb0xvY2FsU3RvcmFnZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIF9yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGtleSkge1xuICAgIGlmIChfbG9jYWxTdG9yYWdlRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGRlbGV0ZSBfYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIF9sb2NhbFN0b3JhZ2VFbmFibGVkID0gZmFsc2U7XG4gICAgICBMZWFucGx1bS5fcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShrZXkpO1xuICAgIH1cbiAgfVxufVxuXG5sZXQgX3B1c2hNYW5hZ2VyID0gbmV3IFB1c2hNYW5hZ2VyKExlYW5wbHVtKTtcblxubW9kdWxlLmV4cG9ydHMgPSBMZWFucGx1bTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MZWFucGx1bS5qcyJdLCJzb3VyY2VSb290IjoiIn0=