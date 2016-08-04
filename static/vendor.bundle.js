/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "../static/" + ({"0":"main"}[chunkId]||chunkId) + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
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
	
	__webpack_require__(1);
	
	__webpack_require__(4);
	
	__webpack_require__(6);
	
	__webpack_require__(8);
	
	__webpack_require__(12);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
	!function (a, b) {
	  "use strict";
	  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
	    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	  } : b(a);
	}("undefined" != typeof window ? window : undefined, function (a, b) {
	  "use strict";
	  var c = [],
	      d = a.document,
	      e = Object.getPrototypeOf,
	      f = c.slice,
	      g = c.concat,
	      h = c.push,
	      i = c.indexOf,
	      j = {},
	      k = j.toString,
	      l = j.hasOwnProperty,
	      m = l.toString,
	      n = m.call(Object),
	      o = {};function p(a, b) {
	    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
	  }var q = "3.1.0",
	      r = function r(a, b) {
	    return new r.fn.init(a, b);
	  },
	      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	      t = /^-ms-/,
	      u = /-([a-z])/g,
	      v = function v(a, b) {
	    return b.toUpperCase();
	  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
	      return f.call(this);
	    }, get: function get(a) {
	      return null != a ? a < 0 ? this[a + this.length] : this[a] : f.call(this);
	    }, pushStack: function pushStack(a) {
	      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
	    }, each: function each(a) {
	      return r.each(this, a);
	    }, map: function map(a) {
	      return this.pushStack(r.map(this, function (b, c) {
	        return a.call(b, c, b);
	      }));
	    }, slice: function slice() {
	      return this.pushStack(f.apply(this, arguments));
	    }, first: function first() {
	      return this.eq(0);
	    }, last: function last() {
	      return this.eq(-1);
	    }, eq: function eq(a) {
	      var b = this.length,
	          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
	    }, end: function end() {
	      return this.prevObject || this.constructor();
	    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
	    var a,
	        b,
	        c,
	        d,
	        e,
	        f,
	        g = arguments[0] || {},
	        h = 1,
	        i = arguments.length,
	        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
	      if (null != (a = arguments[h])) for (b in a) {
	        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
	      }
	    }return g;
	  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
	      throw new Error(a);
	    }, noop: function noop() {}, isFunction: function isFunction(a) {
	      return "function" === r.type(a);
	    }, isArray: Array.isArray, isWindow: function isWindow(a) {
	      return null != a && a === a.window;
	    }, isNumeric: function isNumeric(a) {
	      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
	    }, isPlainObject: function isPlainObject(a) {
	      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
	    }, isEmptyObject: function isEmptyObject(a) {
	      var b;for (b in a) {
	        return !1;
	      }return !0;
	    }, type: function type(a) {
	      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
	    }, globalEval: function globalEval(a) {
	      p(a);
	    }, camelCase: function camelCase(a) {
	      return a.replace(t, "ms-").replace(u, v);
	    }, nodeName: function nodeName(a, b) {
	      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
	    }, each: function each(a, b) {
	      var c,
	          d = 0;if (w(a)) {
	        for (c = a.length; d < c; d++) {
	          if (b.call(a[d], d, a[d]) === !1) break;
	        }
	      } else for (d in a) {
	        if (b.call(a[d], d, a[d]) === !1) break;
	      }return a;
	    }, trim: function trim(a) {
	      return null == a ? "" : (a + "").replace(s, "");
	    }, makeArray: function makeArray(a, b) {
	      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
	    }, inArray: function inArray(a, b, c) {
	      return null == b ? -1 : i.call(b, a, c);
	    }, merge: function merge(a, b) {
	      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
	        a[e++] = b[d];
	      }return a.length = e, a;
	    }, grep: function grep(a, b, c) {
	      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
	        d = !b(a[f], f), d !== h && e.push(a[f]);
	      }return e;
	    }, map: function map(a, b, c) {
	      var d,
	          e,
	          f = 0,
	          h = [];if (w(a)) for (d = a.length; f < d; f++) {
	        e = b(a[f], f, c), null != e && h.push(e);
	      } else for (f in a) {
	        e = b(a[f], f, c), null != e && h.push(e);
	      }return g.apply([], h);
	    }, guid: 1, proxy: function proxy(a, b) {
	      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
	        return a.apply(b || this, d.concat(f.call(arguments)));
	      }, e.guid = a.guid = a.guid || r.guid++, e;
	    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
	    j["[object " + b + "]"] = b.toLowerCase();
	  });function w(a) {
	    var b = !!a && "length" in a && a.length,
	        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
	  }var x = function (a) {
	    var b,
	        c,
	        d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l,
	        m,
	        n,
	        o,
	        p,
	        q,
	        r,
	        s,
	        t,
	        u = "sizzle" + 1 * new Date(),
	        v = a.document,
	        w = 0,
	        x = 0,
	        y = ha(),
	        z = ha(),
	        A = ha(),
	        B = function B(a, b) {
	      return a === b && (l = !0), 0;
	    },
	        C = {}.hasOwnProperty,
	        D = [],
	        E = D.pop,
	        F = D.push,
	        G = D.push,
	        H = D.slice,
	        I = function I(a, b) {
	      for (var c = 0, d = a.length; c < d; c++) {
	        if (a[c] === b) return c;
	      }return -1;
	    },
	        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	        K = "[\\x20\\t\\r\\n\\f]",
	        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
	        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
	        O = new RegExp(K + "+", "g"),
	        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
	        Q = new RegExp("^" + K + "*," + K + "*"),
	        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
	        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
	        T = new RegExp(N),
	        U = new RegExp("^" + L + "$"),
	        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
	        W = /^(?:input|select|textarea|button)$/i,
	        X = /^h\d$/i,
	        Y = /^[^{]+\{\s*\[native \w/,
	        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	        $ = /[+~]/,
	        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
	        aa = function aa(a, b, c) {
	      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
	    },
	        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
	        ca = function ca(a, b) {
	      return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
	    },
	        da = function da() {
	      m();
	    },
	        ea = ta(function (a) {
	      return a.disabled === !0;
	    }, { dir: "parentNode", next: "legend" });try {
	      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
	    } catch (fa) {
	      G = { apply: D.length ? function (a, b) {
	          F.apply(a, H.call(b));
	        } : function (a, b) {
	          var c = a.length,
	              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
	        } };
	    }function ga(a, b, d, e) {
	      var f,
	          h,
	          j,
	          k,
	          l,
	          o,
	          r,
	          s = b && b.ownerDocument,
	          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
	        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
	          if (9 === w) {
	            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
	          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
	        } else {
	          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
	        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
	          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
	            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
	              o[h] = "#" + k + " " + sa(o[h]);
	            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
	          }if (r) try {
	            return G.apply(d, s.querySelectorAll(r)), d;
	          } catch (x) {} finally {
	            k === u && b.removeAttribute("id");
	          }
	        }
	      }return i(a.replace(P, "$1"), b, d, e);
	    }function ha() {
	      var a = [];function b(c, e) {
	        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
	      }return b;
	    }function ia(a) {
	      return a[u] = !0, a;
	    }function ja(a) {
	      var b = n.createElement("fieldset");try {
	        return !!a(b);
	      } catch (c) {
	        return !1;
	      } finally {
	        b.parentNode && b.parentNode.removeChild(b), b = null;
	      }
	    }function ka(a, b) {
	      var c = a.split("|"),
	          e = c.length;while (e--) {
	        d.attrHandle[c[e]] = b;
	      }
	    }function la(a, b) {
	      var c = b && a,
	          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
	        if (c === b) return -1;
	      }return a ? 1 : -1;
	    }function ma(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
	      };
	    }function na(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
	      };
	    }function oa(a) {
	      return function (b) {
	        return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a);
	      };
	    }function pa(a) {
	      return ia(function (b) {
	        return b = +b, ia(function (c, d) {
	          var e,
	              f = a([], c.length, b),
	              g = f.length;while (g--) {
	            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
	          }
	        });
	      });
	    }function qa(a) {
	      return a && "undefined" != typeof a.getElementsByTagName && a;
	    }c = ga.support = {}, f = ga.isXML = function (a) {
	      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
	    }, m = ga.setDocument = function (a) {
	      var b,
	          e,
	          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
	        return a.className = "i", !a.getAttribute("className");
	      }), c.getElementsByTagName = ja(function (a) {
	        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
	      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
	        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
	      }), c.getById ? (d.find.ID = function (a, b) {
	        if ("undefined" != typeof b.getElementById && p) {
	          var c = b.getElementById(a);return c ? [c] : [];
	        }
	      }, d.filter.ID = function (a) {
	        var b = a.replace(_, aa);return function (a) {
	          return a.getAttribute("id") === b;
	        };
	      }) : (delete d.find.ID, d.filter.ID = function (a) {
	        var b = a.replace(_, aa);return function (a) {
	          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
	        };
	      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
	        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
	      } : function (a, b) {
	        var c,
	            d = [],
	            e = 0,
	            f = b.getElementsByTagName(a);if ("*" === a) {
	          while (c = f[e++]) {
	            1 === c.nodeType && d.push(c);
	          }return d;
	        }return f;
	      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
	        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
	      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
	        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
	      }), ja(function (a) {
	        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
	      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
	        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
	      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
	        var c = 9 === a.nodeType ? a.documentElement : a,
	            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
	      } : function (a, b) {
	        if (b) while (b = b.parentNode) {
	          if (b === a) return !0;
	        }return !1;
	      }, B = b ? function (a, b) {
	        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
	      } : function (a, b) {
	        if (a === b) return l = !0, 0;var c,
	            d = 0,
	            e = a.parentNode,
	            f = b.parentNode,
	            g = [a],
	            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
	          g.unshift(c);
	        }c = b;while (c = c.parentNode) {
	          h.unshift(c);
	        }while (g[d] === h[d]) {
	          d++;
	        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
	      }, n) : n;
	    }, ga.matches = function (a, b) {
	      return ga(a, null, null, b);
	    }, ga.matchesSelector = function (a, b) {
	      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
	        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
	      } catch (e) {}return ga(b, n, null, [a]).length > 0;
	    }, ga.contains = function (a, b) {
	      return (a.ownerDocument || a) !== n && m(a), t(a, b);
	    }, ga.attr = function (a, b) {
	      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
	          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
	    }, ga.escape = function (a) {
	      return (a + "").replace(ba, ca);
	    }, ga.error = function (a) {
	      throw new Error("Syntax error, unrecognized expression: " + a);
	    }, ga.uniqueSort = function (a) {
	      var b,
	          d = [],
	          e = 0,
	          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
	        while (b = a[f++]) {
	          b === a[f] && (e = d.push(f));
	        }while (e--) {
	          a.splice(d[e], 1);
	        }
	      }return k = null, a;
	    }, e = ga.getText = function (a) {
	      var b,
	          c = "",
	          d = 0,
	          f = a.nodeType;if (f) {
	        if (1 === f || 9 === f || 11 === f) {
	          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
	            c += e(a);
	          }
	        } else if (3 === f || 4 === f) return a.nodeValue;
	      } else while (b = a[d++]) {
	        c += e(b);
	      }return c;
	    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
	          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
	        }, CHILD: function CHILD(a) {
	          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
	        }, PSEUDO: function PSEUDO(a) {
	          var b,
	              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
	        } }, filter: { TAG: function TAG(a) {
	          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
	            return !0;
	          } : function (a) {
	            return a.nodeName && a.nodeName.toLowerCase() === b;
	          };
	        }, CLASS: function CLASS(a) {
	          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
	            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
	          });
	        }, ATTR: function ATTR(a, b, c) {
	          return function (d) {
	            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
	          };
	        }, CHILD: function CHILD(a, b, c, d, e) {
	          var f = "nth" !== a.slice(0, 3),
	              g = "last" !== a.slice(-4),
	              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
	            return !!a.parentNode;
	          } : function (b, c, i) {
	            var j,
	                k,
	                l,
	                m,
	                n,
	                o,
	                p = f !== g ? "nextSibling" : "previousSibling",
	                q = b.parentNode,
	                r = h && b.nodeName.toLowerCase(),
	                s = !i && !h,
	                t = !1;if (q) {
	              if (f) {
	                while (p) {
	                  m = b;while (m = m[p]) {
	                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
	                  }o = p = "only" === a && !o && "nextSibling";
	                }return !0;
	              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
	                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
	                  if (1 === m.nodeType && ++t && m === b) {
	                    k[a] = [w, n, t];break;
	                  }
	                }
	              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
	                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
	              }return t -= e, t === d || t % d === 0 && t / d >= 0;
	            }
	          };
	        }, PSEUDO: function PSEUDO(a, b) {
	          var c,
	              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
	            var d,
	                f = e(a, b),
	                g = f.length;while (g--) {
	              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
	            }
	          }) : function (a) {
	            return e(a, 0, c);
	          }) : e;
	        } }, pseudos: { not: ia(function (a) {
	          var b = [],
	              c = [],
	              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
	            var f,
	                g = d(a, null, e, []),
	                h = a.length;while (h--) {
	              (f = g[h]) && (a[h] = !(b[h] = f));
	            }
	          }) : function (a, e, f) {
	            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
	          };
	        }), has: ia(function (a) {
	          return function (b) {
	            return ga(a, b).length > 0;
	          };
	        }), contains: ia(function (a) {
	          return a = a.replace(_, aa), function (b) {
	            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
	          };
	        }), lang: ia(function (a) {
	          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
	            var c;do {
	              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
	            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
	          };
	        }), target: function target(b) {
	          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
	        }, root: function root(a) {
	          return a === o;
	        }, focus: function focus(a) {
	          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
	        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
	        }, selected: function selected(a) {
	          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
	        }, empty: function empty(a) {
	          for (a = a.firstChild; a; a = a.nextSibling) {
	            if (a.nodeType < 6) return !1;
	          }return !0;
	        }, parent: function parent(a) {
	          return !d.pseudos.empty(a);
	        }, header: function header(a) {
	          return X.test(a.nodeName);
	        }, input: function input(a) {
	          return W.test(a.nodeName);
	        }, button: function button(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
	        }, text: function text(a) {
	          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
	        }, first: pa(function () {
	          return [0];
	        }), last: pa(function (a, b) {
	          return [b - 1];
	        }), eq: pa(function (a, b, c) {
	          return [c < 0 ? c + b : c];
	        }), even: pa(function (a, b) {
	          for (var c = 0; c < b; c += 2) {
	            a.push(c);
	          }return a;
	        }), odd: pa(function (a, b) {
	          for (var c = 1; c < b; c += 2) {
	            a.push(c);
	          }return a;
	        }), lt: pa(function (a, b, c) {
	          for (var d = c < 0 ? c + b : c; --d >= 0;) {
	            a.push(d);
	          }return a;
	        }), gt: pa(function (a, b, c) {
	          for (var d = c < 0 ? c + b : c; ++d < b;) {
	            a.push(d);
	          }return a;
	        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
	      d.pseudos[b] = ma(b);
	    }for (b in { submit: !0, reset: !0 }) {
	      d.pseudos[b] = na(b);
	    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
	      var c,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
	        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
	          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
	        }if (!c) break;
	      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
	    };function sa(a) {
	      for (var b = 0, c = a.length, d = ""; b < c; b++) {
	        d += a[b].value;
	      }return d;
	    }function ta(a, b, c) {
	      var d = b.dir,
	          e = b.next,
	          f = e || d,
	          g = c && "parentNode" === f,
	          h = x++;return b.first ? function (b, c, e) {
	        while (b = b[d]) {
	          if (1 === b.nodeType || g) return a(b, c, e);
	        }
	      } : function (b, c, i) {
	        var j,
	            k,
	            l,
	            m = [w, h];if (i) {
	          while (b = b[d]) {
	            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
	          }
	        } else while (b = b[d]) {
	          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
	            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
	          }
	        }
	      };
	    }function ua(a) {
	      return a.length > 1 ? function (b, c, d) {
	        var e = a.length;while (e--) {
	          if (!a[e](b, c, d)) return !1;
	        }return !0;
	      } : a[0];
	    }function va(a, b, c) {
	      for (var d = 0, e = b.length; d < e; d++) {
	        ga(a, b[d], c);
	      }return c;
	    }function wa(a, b, c, d, e) {
	      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
	        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
	      }return g;
	    }function xa(a, b, c, d, e, f) {
	      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
	        var j,
	            k,
	            l,
	            m = [],
	            n = [],
	            o = g.length,
	            p = f || va(b || "*", h.nodeType ? [h] : h, []),
	            q = !a || !f && b ? p : wa(p, m, a, h, i),
	            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
	          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
	            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
	          }
	        }if (f) {
	          if (e || a) {
	            if (e) {
	              j = [], k = r.length;while (k--) {
	                (l = r[k]) && j.push(q[k] = l);
	              }e(null, r = [], j, i);
	            }k = r.length;while (k--) {
	              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
	            }
	          }
	        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
	      });
	    }function ya(a) {
	      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
	        return a === b;
	      }, h, !0), l = ta(function (a) {
	        return I(b, a) > -1;
	      }, h, !0), m = [function (a, c, d) {
	        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
	      }]; i < f; i++) {
	        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
	          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
	            for (e = ++i; e < f; e++) {
	              if (d.relative[a[e].type]) break;
	            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
	          }m.push(c);
	        }
	      }return ua(m);
	    }function za(a, b) {
	      var c = b.length > 0,
	          e = a.length > 0,
	          f = function f(_f, g, h, i, k) {
	        var l,
	            o,
	            q,
	            r = 0,
	            s = "0",
	            t = _f && [],
	            u = [],
	            v = j,
	            x = _f || e && d.find.TAG("*", k),
	            y = w += null == v ? 1 : Math.random() || .1,
	            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
	          if (e && l) {
	            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
	              if (q(l, g || n, h)) {
	                i.push(l);break;
	              }
	            }k && (w = y);
	          }c && ((l = !q && l) && r--, _f && t.push(l));
	        }if (r += s, c && s !== r) {
	          o = 0;while (q = b[o++]) {
	            q(t, u, g, h);
	          }if (_f) {
	            if (r > 0) while (s--) {
	              t[s] || u[s] || (u[s] = E.call(i));
	            }u = wa(u);
	          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
	        }return k && (w = y, j = v), t;
	      };return c ? ia(f) : f;
	    }return h = ga.compile = function (a, b) {
	      var c,
	          d = [],
	          e = [],
	          f = A[a + " "];if (!f) {
	        b || (b = g(a)), c = b.length;while (c--) {
	          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
	        }f = A(a, za(e, d)), f.selector = a;
	      }return f;
	    }, i = ga.select = function (a, b, e, f) {
	      var i,
	          j,
	          k,
	          l,
	          m,
	          n = "function" == typeof a && a,
	          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
	        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
	          if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
	        }i = V.needsContext.test(a) ? 0 : j.length;while (i--) {
	          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
	            if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e;break;
	          }
	        }
	      }return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e;
	    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
	      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
	    }), ja(function (a) {
	      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
	    }) || ka("type|href|height|width", function (a, b, c) {
	      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
	    }), c.attributes && ja(function (a) {
	      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
	    }) || ka("value", function (a, b, c) {
	      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
	    }), ja(function (a) {
	      return null == a.getAttribute("disabled");
	    }) || ka(J, function (a, b, c) {
	      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
	    }), ga;
	  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
	    var d = [],
	        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
	      if (1 === a.nodeType) {
	        if (e && r(a).is(c)) break;d.push(a);
	      }
	    }return d;
	  },
	      z = function z(a, b) {
	    for (var c = []; a; a = a.nextSibling) {
	      1 === a.nodeType && a !== b && c.push(a);
	    }return c;
	  },
	      A = r.expr.match.needsContext,
	      B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
	      C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
	    if (r.isFunction(b)) return r.grep(a, function (a, d) {
	      return !!b.call(a, d, a) !== c;
	    });if (b.nodeType) return r.grep(a, function (a) {
	      return a === b !== c;
	    });if ("string" == typeof b) {
	      if (C.test(b)) return r.filter(b, a, c);b = r.filter(b, a);
	    }return r.grep(a, function (a) {
	      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
	    });
	  }r.filter = function (a, b, c) {
	    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
	      return 1 === a.nodeType;
	    }));
	  }, r.fn.extend({ find: function find(a) {
	      var b,
	          c,
	          d = this.length,
	          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
	        for (b = 0; b < d; b++) {
	          if (r.contains(e[b], this)) return !0;
	        }
	      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
	        r.find(a, e[b], c);
	      }return d > 1 ? r.uniqueSort(c) : c;
	    }, filter: function filter(a) {
	      return this.pushStack(D(this, a || [], !1));
	    }, not: function not(a) {
	      return this.pushStack(D(this, a || [], !0));
	    }, is: function is(a) {
	      return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
	    } });var E,
	      F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	      G = r.fn.init = function (a, b, c) {
	    var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
	      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
	        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
	          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
	        }return this;
	      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
	    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
	  };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
	      I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
	      var b = r(a, this),
	          c = b.length;return this.filter(function () {
	        for (var a = 0; a < c; a++) {
	          if (r.contains(this, b[a])) return !0;
	        }
	      });
	    }, closest: function closest(a, b) {
	      var c,
	          d = 0,
	          e = this.length,
	          f = [],
	          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
	        for (c = this[d]; c && c !== b; c = c.parentNode) {
	          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
	            f.push(c);break;
	          }
	        }
	      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
	    }, index: function index(a) {
	      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	    }, add: function add(a, b) {
	      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
	    }, addBack: function addBack(a) {
	      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
	    } });function J(a, b) {
	    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
	  }r.each({ parent: function parent(a) {
	      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
	    }, parents: function parents(a) {
	      return y(a, "parentNode");
	    }, parentsUntil: function parentsUntil(a, b, c) {
	      return y(a, "parentNode", c);
	    }, next: function next(a) {
	      return J(a, "nextSibling");
	    }, prev: function prev(a) {
	      return J(a, "previousSibling");
	    }, nextAll: function nextAll(a) {
	      return y(a, "nextSibling");
	    }, prevAll: function prevAll(a) {
	      return y(a, "previousSibling");
	    }, nextUntil: function nextUntil(a, b, c) {
	      return y(a, "nextSibling", c);
	    }, prevUntil: function prevUntil(a, b, c) {
	      return y(a, "previousSibling", c);
	    }, siblings: function siblings(a) {
	      return z((a.parentNode || {}).firstChild, a);
	    }, children: function children(a) {
	      return z(a.firstChild);
	    }, contents: function contents(a) {
	      return a.contentDocument || r.merge([], a.childNodes);
	    } }, function (a, b) {
	    r.fn[a] = function (c, d) {
	      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
	    };
	  });var K = /\S+/g;function L(a) {
	    var b = {};return r.each(a.match(K) || [], function (a, c) {
	      b[c] = !0;
	    }), b;
	  }r.Callbacks = function (a) {
	    a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
	        c,
	        d,
	        e,
	        f = [],
	        g = [],
	        h = -1,
	        i = function i() {
	      for (e = a.once, d = b = !0; g.length; h = -1) {
	        c = g.shift();while (++h < f.length) {
	          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
	        }
	      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
	    },
	        j = { add: function add() {
	        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
	          r.each(b, function (b, c) {
	            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
	          });
	        }(arguments), c && !b && i()), this;
	      }, remove: function remove() {
	        return r.each(arguments, function (a, b) {
	          var c;while ((c = r.inArray(b, f, c)) > -1) {
	            f.splice(c, 1), c <= h && h--;
	          }
	        }), this;
	      }, has: function has(a) {
	        return a ? r.inArray(a, f) > -1 : f.length > 0;
	      }, empty: function empty() {
	        return f && (f = []), this;
	      }, disable: function disable() {
	        return e = g = [], f = c = "", this;
	      }, disabled: function disabled() {
	        return !f;
	      }, lock: function lock() {
	        return e = g = [], c || b || (f = c = ""), this;
	      }, locked: function locked() {
	        return !!e;
	      }, fireWith: function fireWith(a, c) {
	        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
	      }, fire: function fire() {
	        return j.fireWith(this, arguments), this;
	      }, fired: function fired() {
	        return !!d;
	      } };return j;
	  };function M(a) {
	    return a;
	  }function N(a) {
	    throw a;
	  }function O(a, b, c) {
	    var d;try {
	      a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
	    } catch (a) {
	      c.call(void 0, a);
	    }
	  }r.extend({ Deferred: function Deferred(b) {
	      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
	          d = "pending",
	          e = { state: function state() {
	          return d;
	        }, always: function always() {
	          return f.done(arguments).fail(arguments), this;
	        }, "catch": function _catch(a) {
	          return e.then(null, a);
	        }, pipe: function pipe() {
	          var a = arguments;return r.Deferred(function (b) {
	            r.each(c, function (c, d) {
	              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
	                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
	              });
	            }), a = null;
	          }).promise();
	        }, then: function then(b, d, e) {
	          var f = 0;function g(b, c, d, e) {
	            return function () {
	              var h = this,
	                  i = arguments,
	                  j = function j() {
	                var a, j;if (!(b < f)) {
	                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
	                }
	              },
	                  k = e ? j : function () {
	                try {
	                  j();
	                } catch (a) {
	                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
	                }
	              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
	            };
	          }return r.Deferred(function (a) {
	            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
	          }).promise();
	        }, promise: function promise(a) {
	          return null != a ? r.extend(a, e) : e;
	        } },
	          f = {};return r.each(c, function (a, b) {
	        var g = b[2],
	            h = b[5];e[b[1]] = g.add, h && g.add(function () {
	          d = h;
	        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
	          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
	        }, f[b[0] + "With"] = g.fireWith;
	      }), e.promise(f), b && b.call(f, f), f;
	    }, when: function when(a) {
	      var b = arguments.length,
	          c = b,
	          d = Array(c),
	          e = f.call(arguments),
	          g = r.Deferred(),
	          h = function h(a) {
	        return function (c) {
	          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
	        };
	      };if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
	        O(e[c], h(c), g.reject);
	      }return g.promise();
	    } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
	    a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
	  }, r.readyException = function (b) {
	    a.setTimeout(function () {
	      throw b;
	    });
	  };var Q = r.Deferred();r.fn.ready = function (a) {
	    return Q.then(a)["catch"](function (a) {
	      r.readyException(a);
	    }), this;
	  }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
	      a ? r.readyWait++ : r.ready(!0);
	    }, ready: function ready(a) {
	      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
	    } }), r.ready.then = Q.then;function R() {
	    d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
	  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
	    var h = 0,
	        i = a.length,
	        j = null == c;if ("object" === r.type(c)) {
	      e = !0;for (h in c) {
	        S(a, b, h, c[h], !0, f, g);
	      }
	    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
	      return j.call(r(a), c);
	    })), b)) for (; h < i; h++) {
	      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
	    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	  },
	      T = function T(a) {
	    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
	  };function U() {
	    this.expando = r.expando + U.uid++;
	  }U.uid = 1, U.prototype = { cache: function cache(a) {
	      var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
	    }, set: function set(a, b, c) {
	      var d,
	          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
	        e[r.camelCase(d)] = b[d];
	      }return e;
	    }, get: function get(a, b) {
	      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
	    }, access: function access(a, b, c) {
	      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
	    }, remove: function remove(a, b) {
	      var c,
	          d = a[this.expando];if (void 0 !== d) {
	        if (void 0 !== b) {
	          r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
	            delete d[b[c]];
	          }
	        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
	      }
	    }, hasData: function hasData(a) {
	      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
	    } };var V = new U(),
	      W = new U(),
	      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	      Y = /[A-Z]/g;function Z(a, b, c) {
	    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
	      try {
	        c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c);
	      } catch (e) {}W.set(a, b, c);
	    } else c = void 0;return c;
	  }r.extend({ hasData: function hasData(a) {
	      return W.hasData(a) || V.hasData(a);
	    }, data: function data(a, b, c) {
	      return W.access(a, b, c);
	    }, removeData: function removeData(a, b) {
	      W.remove(a, b);
	    }, _data: function _data(a, b, c) {
	      return V.access(a, b, c);
	    }, _removeData: function _removeData(a, b) {
	      V.remove(a, b);
	    } }), r.fn.extend({ data: function data(a, b) {
	      var c,
	          d,
	          e,
	          f = this[0],
	          g = f && f.attributes;if (void 0 === a) {
	        if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
	          c = g.length;while (c--) {
	            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), Z(f, d, e[d])));
	          }V.set(f, "hasDataAttrs", !0);
	        }return e;
	      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
	        W.set(this, a);
	      }) : S(this, function (b) {
	        var c;if (f && void 0 === b) {
	          if (c = W.get(f, a), void 0 !== c) return c;if (c = Z(f, a), void 0 !== c) return c;
	        } else this.each(function () {
	          W.set(this, a, b);
	        });
	      }, null, b, arguments.length > 1, null, !0);
	    }, removeData: function removeData(a) {
	      return this.each(function () {
	        W.remove(this, a);
	      });
	    } }), r.extend({ queue: function queue(a, b, c) {
	      var d;if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
	    }, dequeue: function dequeue(a, b) {
	      b = b || "fx";var c = r.queue(a, b),
	          d = c.length,
	          e = c.shift(),
	          f = r._queueHooks(a, b),
	          g = function g() {
	        r.dequeue(a, b);
	      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
	    }, _queueHooks: function _queueHooks(a, b) {
	      var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
	          V.remove(a, [b + "queue", c]);
	        }) });
	    } }), r.fn.extend({ queue: function queue(a, b) {
	      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
	        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
	      });
	    }, dequeue: function dequeue(a) {
	      return this.each(function () {
	        r.dequeue(this, a);
	      });
	    }, clearQueue: function clearQueue(a) {
	      return this.queue(a || "fx", []);
	    }, promise: function promise(a, b) {
	      var c,
	          d = 1,
	          e = r.Deferred(),
	          f = this,
	          g = this.length,
	          h = function h() {
	        --d || e.resolveWith(f, [f]);
	      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
	        c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
	      }return h(), e.promise(b);
	    } });var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	      _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
	      aa = ["Top", "Right", "Bottom", "Left"],
	      ba = function ba(a, b) {
	    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
	  },
	      ca = function ca(a, b, c, d) {
	    var e,
	        f,
	        g = {};for (f in b) {
	      g[f] = a.style[f], a.style[f] = b[f];
	    }e = c.apply(a, d || []);for (f in b) {
	      a.style[f] = g[f];
	    }return e;
	  };function da(a, b, c, d) {
	    var e,
	        f = 1,
	        g = 20,
	        h = d ? function () {
	      return d.cur();
	    } : function () {
	      return r.css(a, b, "");
	    },
	        i = h(),
	        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
	        k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b));if (k && k[3] !== j) {
	      j = j || k[3], c = c || [], k = +i || 1;do {
	        f = f || ".5", k /= f, r.style(a, b, k + j);
	      } while (f !== (f = h() / i) && 1 !== f && --g);
	    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
	  }var ea = {};function fa(a) {
	    var b,
	        c = a.ownerDocument,
	        d = a.nodeName,
	        e = ea[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e, e);
	  }function ga(a, b) {
	    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
	      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
	    }for (f = 0; f < g; f++) {
	      null != e[f] && (a[f].style.display = e[f]);
	    }return a;
	  }r.fn.extend({ show: function show() {
	      return ga(this, !0);
	    }, hide: function hide() {
	      return ga(this);
	    }, toggle: function toggle(a) {
	      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
	        ba(this) ? r(this).show() : r(this).hide();
	      });
	    } });var ha = /^(?:checkbox|radio)$/i,
	      ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
	      ja = /^$|\/(?:java|ecma)script/i,
	      ka = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, ka.th = ka.td;function la(a, b) {
	    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
	  }function ma(a, b) {
	    for (var c = 0, d = a.length; c < d; c++) {
	      V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
	    }
	  }var na = /<|&#?\w+;/;function oa(a, b, c, d, e) {
	    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
	      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (na.test(f)) {
	        g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || ["", ""])[1].toLowerCase(), i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
	          g = g.lastChild;
	        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
	      } else m.push(b.createTextNode(f));
	    }l.textContent = "", n = 0;while (f = m[n++]) {
	      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = la(l.appendChild(f), "script"), j && ma(g), c) {
	        k = 0;while (f = g[k++]) {
	          ja.test(f.type || "") && c.push(f);
	        }
	      }
	    }return l;
	  }!function () {
	    var a = d.createDocumentFragment(),
	        b = a.appendChild(d.createElement("div")),
	        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	  }();var pa = d.documentElement,
	      qa = /^key/,
	      ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	      sa = /^([^.]*)(?:\.(.+)|)/;function ta() {
	    return !0;
	  }function ua() {
	    return !1;
	  }function va() {
	    try {
	      return d.activeElement;
	    } catch (a) {}
	  }function wa(a, b, c, d, e, f) {
	    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
	      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
	        wa(a, h, c, d, b[h], f);
	      }return a;
	    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ua;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
	      return r().off(a), g.apply(this, arguments);
	    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
	      r.event.add(this, b, e, d, c);
	    });
	  }r.event = { global: {}, add: function add(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          n,
	          o,
	          p,
	          q = V.get(a);if (q) {
	        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(pa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
	          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
	        }), b = (b || "").match(K) || [""], j = b.length;while (j--) {
	          h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
	        }
	      }
	    }, remove: function remove(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          n,
	          o,
	          p,
	          q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
	        b = (b || "").match(K) || [""], j = b.length;while (j--) {
	          if (h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
	            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
	              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
	            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
	          } else for (n in i) {
	            r.event.remove(a, n + b[j], c, d, !0);
	          }
	        }r.isEmptyObject(i) && V.remove(a, "handle events");
	      }
	    }, dispatch: function dispatch(a) {
	      var b = r.event.fix(a),
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = new Array(arguments.length),
	          j = (V.get(this, "events") || {})[b.type] || [],
	          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
	        i[c] = arguments[c];
	      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
	        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
	          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
	            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
	          }
	        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
	      }
	    }, handlers: function handlers(a, b) {
	      var c,
	          d,
	          e,
	          f,
	          g = [],
	          h = b.delegateCount,
	          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
	        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
	          for (d = [], c = 0; c < h; c++) {
	            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? r(e, this).index(i) > -1 : r.find(e, this, null, [i]).length), d[e] && d.push(f);
	          }d.length && g.push({ elem: i, handlers: d });
	        }
	      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
	    }, addProp: function addProp(a, b) {
	      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
	          if (this.originalEvent) return b(this.originalEvent);
	        } : function () {
	          if (this.originalEvent) return this.originalEvent[a];
	        }, set: function set(b) {
	          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
	        } });
	    }, fix: function fix(a) {
	      return a[r.expando] ? a : new r.Event(a);
	    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
	          if (this !== va() && this.focus) return this.focus(), !1;
	        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
	          if (this === va() && this.blur) return this.blur(), !1;
	        }, delegateType: "focusout" }, click: { trigger: function trigger() {
	          if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1;
	        }, _default: function _default(a) {
	          return r.nodeName(a.target, "a");
	        } }, beforeunload: { postDispatch: function postDispatch(a) {
	          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
	        } } } }, r.removeEvent = function (a, b, c) {
	    a.removeEventListener && a.removeEventListener(b, c);
	  }, r.Event = function (a, b) {
	    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ta : ua, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
	  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: ua, isPropagationStopped: ua, isImmediatePropagationStopped: ua, isSimulated: !1, preventDefault: function preventDefault() {
	      var a = this.originalEvent;this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault();
	    }, stopPropagation: function stopPropagation() {
	      var a = this.originalEvent;this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation();
	    }, stopImmediatePropagation: function stopImmediatePropagation() {
	      var a = this.originalEvent;this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
	    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
	      var b = a.button;return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
	    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
	    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
	        var c,
	            d = this,
	            e = a.relatedTarget,
	            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
	      } };
	  }), r.fn.extend({ on: function on(a, b, c, d) {
	      return wa(this, a, b, c, d);
	    }, one: function one(a, b, c, d) {
	      return wa(this, a, b, c, d, 1);
	    }, off: function off(a, b, c) {
	      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
	        for (e in a) {
	          this.off(e, b, a[e]);
	        }return this;
	      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ua), this.each(function () {
	        r.event.remove(this, a, c, b);
	      });
	    } });var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	      ya = /<script|<style|<link/i,
	      za = /checked\s*(?:[^=]|=\s*.checked.)/i,
	      Aa = /^true\/(.*)/,
	      Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a, b) {
	    return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
	  }function Da(a) {
	    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
	  }function Ea(a) {
	    var b = Aa.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	  }function Fa(a, b) {
	    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
	      if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
	        delete g.handle, g.events = {};for (e in j) {
	          for (c = 0, d = j[e].length; c < d; c++) {
	            r.event.add(b, e, j[e][c]);
	          }
	        }
	      }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
	    }
	  }function Ga(a, b) {
	    var c = b.nodeName.toLowerCase();"input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
	  }function Ha(a, b, c, d) {
	    b = g.apply([], b);var e,
	        f,
	        h,
	        i,
	        j,
	        k,
	        l = 0,
	        m = a.length,
	        n = m - 1,
	        q = b[0],
	        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function (e) {
	      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
	    });if (m && (e = oa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
	      for (h = r.map(la(e, "script"), Da), i = h.length; l < m; l++) {
	        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, la(j, "script"))), c.call(a[l], j, l);
	      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; l < i; l++) {
	        j = h[l], ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k));
	      }
	    }return a;
	  }function Ia(a, b, c) {
	    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
	      c || 1 !== d.nodeType || r.cleanData(la(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d));
	    }return a;
	  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
	      return a.replace(xa, "<$1></$2>");
	    }, clone: function clone(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h = a.cloneNode(!0),
	          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = la(h), f = la(a), d = 0, e = f.length; d < e; d++) {
	        Ga(f[d], g[d]);
	      }if (b) if (c) for (f = f || la(a), g = g || la(h), d = 0, e = f.length; d < e; d++) {
	        Fa(f[d], g[d]);
	      } else Fa(a, h);return g = la(h, "script"), g.length > 0 && ma(g, !i && la(a, "script")), h;
	    }, cleanData: function cleanData(a) {
	      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
	        if (T(c)) {
	          if (b = c[V.expando]) {
	            if (b.events) for (d in b.events) {
	              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
	            }c[V.expando] = void 0;
	          }c[W.expando] && (c[W.expando] = void 0);
	        }
	      }
	    } }), r.fn.extend({ detach: function detach(a) {
	      return Ia(this, a, !0);
	    }, remove: function remove(a) {
	      return Ia(this, a);
	    }, text: function text(a) {
	      return S(this, function (a) {
	        return void 0 === a ? r.text(this) : this.empty().each(function () {
	          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
	        });
	      }, null, a, arguments.length);
	    }, append: function append() {
	      return Ha(this, arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = Ca(this, a);b.appendChild(a);
	        }
	      });
	    }, prepend: function prepend() {
	      return Ha(this, arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = Ca(this, a);b.insertBefore(a, b.firstChild);
	        }
	      });
	    }, before: function before() {
	      return Ha(this, arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this);
	      });
	    }, after: function after() {
	      return Ha(this, arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
	      });
	    }, empty: function empty() {
	      for (var a, b = 0; null != (a = this[b]); b++) {
	        1 === a.nodeType && (r.cleanData(la(a, !1)), a.textContent = "");
	      }return this;
	    }, clone: function clone(a, b) {
	      return a = null != a && a, b = null == b ? a : b, this.map(function () {
	        return r.clone(this, a, b);
	      });
	    }, html: function html(a) {
	      return S(this, function (a) {
	        var b = this[0] || {},
	            c = 0,
	            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || ["", ""])[1].toLowerCase()]) {
	          a = r.htmlPrefilter(a);try {
	            for (; c < d; c++) {
	              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(la(b, !1)), b.innerHTML = a);
	            }b = 0;
	          } catch (e) {}
	        }b && this.empty().append(a);
	      }, null, a, arguments.length);
	    }, replaceWith: function replaceWith() {
	      var a = [];return Ha(this, arguments, function (b) {
	        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this));
	      }, a);
	    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
	    r.fn[a] = function (a) {
	      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
	        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
	      }return this.pushStack(d);
	    };
	  });var Ja = /^margin/,
	      Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
	      La = function La(b) {
	    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
	  };!function () {
	    function b() {
	      if (i) {
	        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", pa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, pa.removeChild(h), i = null;
	      }
	    }var c,
	        e,
	        f,
	        g,
	        h = d.createElement("div"),
	        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
	        return b(), c;
	      }, boxSizingReliable: function boxSizingReliable() {
	        return b(), e;
	      }, pixelMarginRight: function pixelMarginRight() {
	        return b(), f;
	      }, reliableMarginLeft: function reliableMarginLeft() {
	        return b(), g;
	      } }));
	  }();function Ma(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.style;return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
	  }function Na(a, b) {
	    return { get: function get() {
	        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
	      } };
	  }var Oa = /^(none|table(?!-c[ea]).+)/,
	      Pa = { position: "absolute", visibility: "hidden", display: "block" },
	      Qa = { letterSpacing: "0", fontWeight: "400" },
	      Ra = ["Webkit", "Moz", "ms"],
	      Sa = d.createElement("div").style;function Ta(a) {
	    if (a in Sa) return a;var b = a[0].toUpperCase() + a.slice(1),
	        c = Ra.length;while (c--) {
	      if (a = Ra[c] + b, a in Sa) return a;
	    }
	  }function Ua(a, b, c) {
	    var d = _.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
	  }function Va(a, b, c, d, e) {
	    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) {
	      "margin" === c && (g += r.css(a, c + aa[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e)));
	    }return g;
	  }function Wa(a, b, c) {
	    var d,
	        e = !0,
	        f = La(a),
	        g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
	      if (d = Ma(a, b, f), (d < 0 || null == d) && (d = a.style[b]), Ka.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
	    }return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px";
	  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
	          if (b) {
	            var c = Ma(a, "opacity");return "" === c ? "1" : c;
	          }
	        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
	      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
	        var e,
	            f,
	            g,
	            h = r.camelCase(b),
	            i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = _.exec(c)) && e[1] && (c = da(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
	      }
	    }, css: function css(a, b, c, d) {
	      var e,
	          f,
	          g,
	          h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
	    } }), r.each(["height", "width"], function (a, b) {
	    r.cssHooks[b] = { get: function get(a, c, d) {
	        if (c) return !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function () {
	          return Wa(a, b, d);
	        });
	      }, set: function set(a, c, d) {
	        var e,
	            f = d && La(a),
	            g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ua(a, c, g);
	      } };
	  }), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function (a, b) {
	    if (b) return (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, { marginLeft: 0 }, function () {
	      return a.getBoundingClientRect().left;
	    })) + "px";
	  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
	    r.cssHooks[a + b] = { expand: function expand(c) {
	        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
	          e[a + aa[d] + b] = f[d] || f[d - 2] || f[0];
	        }return e;
	      } }, Ja.test(a) || (r.cssHooks[a + b].set = Ua);
	  }), r.fn.extend({ css: function css(a, b) {
	      return S(this, function (a, b, c) {
	        var d,
	            e,
	            f = {},
	            g = 0;if (r.isArray(b)) {
	          for (d = La(a), e = b.length; g < e; g++) {
	            f[b[g]] = r.css(a, b[g], !1, d);
	          }return f;
	        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
	      }, a, b, arguments.length > 1);
	    } });function Xa(a, b, c, d, e) {
	    return new Xa.prototype.init(a, b, c, d, e);
	  }r.Tween = Xa, Xa.prototype = { constructor: Xa, init: function init(a, b, c, d, e, f) {
	      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
	    }, cur: function cur() {
	      var a = Xa.propHooks[this.prop];return a && a.get ? a.get(this) : Xa.propHooks._default.get(this);
	    }, run: function run(a) {
	      var b,
	          c = Xa.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Xa.propHooks._default.set(this), this;
	    } }, Xa.prototype.init.prototype = Xa.prototype, Xa.propHooks = { _default: { get: function get(a) {
	        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
	      }, set: function set(a) {
	        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
	      } } }, Xa.propHooks.scrollTop = Xa.propHooks.scrollLeft = { set: function set(a) {
	      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
	    } }, r.easing = { linear: function linear(a) {
	      return a;
	    }, swing: function swing(a) {
	      return .5 - Math.cos(a * Math.PI) / 2;
	    }, _default: "swing" }, r.fx = Xa.prototype.init, r.fx.step = {};var Ya,
	      Za,
	      $a = /^(?:toggle|show|hide)$/,
	      _a = /queueHooks$/;function ab() {
	    Za && (a.requestAnimationFrame(ab), r.fx.tick());
	  }function bb() {
	    return a.setTimeout(function () {
	      Ya = void 0;
	    }), Ya = r.now();
	  }function cb(a, b) {
	    var c,
	        d = 0,
	        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
	      c = aa[d], e["margin" + c] = e["padding" + c] = a;
	    }return b && (e.opacity = e.width = a), e;
	  }function db(a, b, c) {
	    for (var d, e = (gb.tweeners[b] || []).concat(gb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
	      if (d = e[f].call(c, b, a)) return d;
	    }
	  }function eb(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l = "width" in b || "height" in b,
	        m = this,
	        n = {},
	        o = a.style,
	        p = a.nodeType && ba(a),
	        q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
	      g.unqueued || h();
	    }), g.unqueued++, m.always(function () {
	      m.always(function () {
	        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
	      });
	    }));for (d in b) {
	      if (e = b[d], $a.test(e)) {
	        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
	          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
	        }n[d] = q && q[d] || r.style(a, d);
	      }
	    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
	      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ga([a], !0), j = a.style.display || j, k = r.css(a, "display"), ga([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
	        o.display = j;
	      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
	        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
	      })), i = !1;for (d in n) {
	        i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ga([a], !0), m.done(function () {
	          p || ga([a]), V.remove(a, "fxshow");for (d in n) {
	            r.style(a, d, n[d]);
	          }
	        })), i = db(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
	      }
	    }
	  }function fb(a, b) {
	    var c, d, e, f, g;for (c in a) {
	      if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
	        f = g.expand(f), delete a[d];for (c in f) {
	          c in a || (a[c] = f[c], b[c] = e);
	        }
	      } else b[d] = e;
	    }
	  }function gb(a, b, c) {
	    var d,
	        e,
	        f = 0,
	        g = gb.prefilters.length,
	        h = r.Deferred().always(function () {
	      delete i.elem;
	    }),
	        i = function i() {
	      if (e) return !1;for (var b = Ya || bb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
	        j.tweens[g].run(f);
	      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1);
	    },
	        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Ya || bb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
	        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
	      }, stop: function stop(b) {
	        var c = 0,
	            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
	          j.tweens[c].run(1);
	        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
	      } }),
	        k = j.props;for (fb(k, j.opts.specialEasing); f < g; f++) {
	      if (d = gb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
	    }return r.map(k, db, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	  }r.Animation = r.extend(gb, { tweeners: { "*": [function (a, b) {
	        var c = this.createTween(a, b);return da(c.elem, a, _.exec(b), c), c;
	      }] }, tweener: function tweener(a, b) {
	      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; d < e; d++) {
	        c = a[d], gb.tweeners[c] = gb.tweeners[c] || [], gb.tweeners[c].unshift(b);
	      }
	    }, prefilters: [eb], prefilter: function prefilter(a, b) {
	      b ? gb.prefilters.unshift(a) : gb.prefilters.push(a);
	    } }), r.speed = function (a, b, c) {
	    var e = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : e.duration = "number" == typeof e.duration ? e.duration : e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default, null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
	      r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
	    }, e;
	  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
	      return this.filter(ba).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
	    }, animate: function animate(a, b, c, d) {
	      var e = r.isEmptyObject(a),
	          f = r.speed(b, c, d),
	          g = function g() {
	        var b = gb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
	      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
	    }, stop: function stop(a, b, c) {
	      var d = function d(a) {
	        var b = a.stop;delete a.stop, b(c);
	      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
	        var b = !0,
	            e = null != a && a + "queueHooks",
	            f = r.timers,
	            g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
	          g[e] && g[e].stop && _a.test(e) && d(g[e]);
	        }for (e = f.length; e--;) {
	          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
	        }!b && c || r.dequeue(this, a);
	      });
	    }, finish: function finish(a) {
	      return a !== !1 && (a = a || "fx"), this.each(function () {
	        var b,
	            c = V.get(this),
	            d = c[a + "queue"],
	            e = c[a + "queueHooks"],
	            f = r.timers,
	            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
	          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
	        }for (b = 0; b < g; b++) {
	          d[b] && d[b].finish && d[b].finish.call(this);
	        }delete c.finish;
	      });
	    } }), r.each(["toggle", "show", "hide"], function (a, b) {
	    var c = r.fn[b];r.fn[b] = function (a, d, e) {
	      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(cb(b, !0), a, d, e);
	    };
	  }), r.each({ slideDown: cb("show"), slideUp: cb("hide"), slideToggle: cb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
	    r.fn[a] = function (a, c, d) {
	      return this.animate(b, a, c, d);
	    };
	  }), r.timers = [], r.fx.tick = function () {
	    var a,
	        b = 0,
	        c = r.timers;for (Ya = r.now(); b < c.length; b++) {
	      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
	    }c.length || r.fx.stop(), Ya = void 0;
	  }, r.fx.timer = function (a) {
	    r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
	  }, r.fx.interval = 13, r.fx.start = function () {
	    Za || (Za = a.requestAnimationFrame ? a.requestAnimationFrame(ab) : a.setInterval(r.fx.tick, r.fx.interval));
	  }, r.fx.stop = function () {
	    a.cancelAnimationFrame ? a.cancelAnimationFrame(Za) : a.clearInterval(Za), Za = null;
	  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
	    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
	      var e = a.setTimeout(c, b);d.stop = function () {
	        a.clearTimeout(e);
	      };
	    });
	  }, function () {
	    var a = d.createElement("input"),
	        b = d.createElement("select"),
	        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
	  }();var hb,
	      ib = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
	      return S(this, r.attr, a, b, arguments.length > 1);
	    }, removeAttr: function removeAttr(a) {
	      return this.each(function () {
	        r.removeAttr(this, a);
	      });
	    } }), r.extend({ attr: function attr(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? hb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
	    }, attrHooks: { type: { set: function set(a, b) {
	          if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
	            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
	          }
	        } } }, removeAttr: function removeAttr(a, b) {
	      var c,
	          d = 0,
	          e = b && b.match(K);
	      if (e && 1 === a.nodeType) while (c = e[d++]) {
	        a.removeAttribute(c);
	      }
	    } }), hb = { set: function set(a, b, c) {
	      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
	    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
	    var c = ib[b] || r.find.attr;ib[b] = function (a, b, d) {
	      var e,
	          f,
	          g = b.toLowerCase();return d || (f = ib[g], ib[g] = e, e = null != c(a, b, d) ? g : null, ib[g] = f), e;
	    };
	  });var jb = /^(?:input|select|textarea|button)$/i,
	      kb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
	      return S(this, r.prop, a, b, arguments.length > 1);
	    }, removeProp: function removeProp(a) {
	      return this.each(function () {
	        delete this[r.propFix[a] || a];
	      });
	    } }), r.extend({ prop: function prop(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
	    }, propHooks: { tabIndex: { get: function get(a) {
	          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : jb.test(a.nodeName) || kb.test(a.nodeName) && a.href ? 0 : -1;
	        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
	      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
	    }, set: function set(a) {
	      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
	    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	    r.propFix[this.toLowerCase()] = this;
	  });var lb = /[\t\r\n\f]/g;function mb(a) {
	    return a.getAttribute && a.getAttribute("class") || "";
	  }r.fn.extend({ addClass: function addClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = 0;if (r.isFunction(a)) return this.each(function (b) {
	        r(this).addClass(a.call(this, b, mb(this)));
	      });if ("string" == typeof a && a) {
	        b = a.match(K) || [];while (c = this[i++]) {
	          if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
	            g = 0;while (f = b[g++]) {
	              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
	            }h = r.trim(d), e !== h && c.setAttribute("class", h);
	          }
	        }
	      }return this;
	    }, removeClass: function removeClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = 0;if (r.isFunction(a)) return this.each(function (b) {
	        r(this).removeClass(a.call(this, b, mb(this)));
	      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
	        b = a.match(K) || [];while (c = this[i++]) {
	          if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
	            g = 0;while (f = b[g++]) {
	              while (d.indexOf(" " + f + " ") > -1) {
	                d = d.replace(" " + f + " ", " ");
	              }
	            }h = r.trim(d), e !== h && c.setAttribute("class", h);
	          }
	        }
	      }return this;
	    }, toggleClass: function toggleClass(a, b) {
	      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
	        r(this).toggleClass(a.call(this, c, mb(this), b), b);
	      }) : this.each(function () {
	        var b, d, e, f;if ("string" === c) {
	          d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
	            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
	          }
	        } else void 0 !== a && "boolean" !== c || (b = mb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
	      });
	    }, hasClass: function hasClass(a) {
	      var b,
	          c,
	          d = 0;b = " " + a + " ";while (c = this[d++]) {
	        if (1 === c.nodeType && (" " + mb(c) + " ").replace(lb, " ").indexOf(b) > -1) return !0;
	      }return !1;
	    } });var nb = /\r/g,
	      ob = /[\x20\t\r\n\f]+/g;r.fn.extend({ val: function val(a) {
	      var b,
	          c,
	          d,
	          e = this[0];{
	        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
	          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
	            return null == a ? "" : a + "";
	          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
	        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c);
	      }
	    } }), r.extend({ valHooks: { option: { get: function get(a) {
	          var b = r.find.attr(a, "value");return null != b ? b : r.trim(r.text(a)).replace(ob, " ");
	        } }, select: { get: function get(a) {
	          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++) {
	            if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
	              if (b = r(c).val(), f) return b;g.push(b);
	            }
	          }return g;
	        }, set: function set(a, b) {
	          var c,
	              d,
	              e = a.options,
	              f = r.makeArray(b),
	              g = e.length;while (g--) {
	            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
	          }return c || (a.selectedIndex = -1), f;
	        } } } }), r.each(["radio", "checkbox"], function () {
	    r.valHooks[this] = { set: function set(a, b) {
	        if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
	      } }, o.checkOn || (r.valHooks[this].get = function (a) {
	      return null === a.getAttribute("value") ? "on" : a.value;
	    });
	  });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
	      var g,
	          h,
	          i,
	          j,
	          k,
	          m,
	          n,
	          o = [e || d],
	          p = l.call(b, "type") ? b.type : b,
	          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
	        if (!f && !n.noBubble && !r.isWindow(e)) {
	          for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
	            o.push(h), i = h;
	          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
	        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
	          b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
	        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
	      }
	    }, simulate: function simulate(a, b, c) {
	      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
	    } }), r.fn.extend({ trigger: function trigger(a, b) {
	      return this.each(function () {
	        r.event.trigger(a, b, this);
	      });
	    }, triggerHandler: function triggerHandler(a, b) {
	      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
	    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
	    r.fn[b] = function (a, c) {
	      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
	    };
	  }), r.fn.extend({ hover: function hover(a, b) {
	      return this.mouseenter(a).mouseleave(b || a);
	    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
	    var c = function c(a) {
	      r.event.simulate(b, a.target, r.event.fix(a));
	    };r.event.special[b] = { setup: function setup() {
	        var d = this.ownerDocument || this,
	            e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
	      }, teardown: function teardown() {
	        var d = this.ownerDocument || this,
	            e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
	      } };
	  });var qb = a.location,
	      rb = r.now(),
	      sb = /\?/;r.parseXML = function (b) {
	    var c;if (!b || "string" != typeof b) return null;try {
	      c = new a.DOMParser().parseFromString(b, "text/xml");
	    } catch (d) {
	      c = void 0;
	    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
	  };var tb = /\[\]$/,
	      ub = /\r?\n/g,
	      vb = /^(?:submit|button|image|reset|file)$/i,
	      wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
	    var e;if (r.isArray(b)) r.each(b, function (b, e) {
	      c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
	    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
	      xb(a + "[" + e + "]", b[e], c, d);
	    }
	  }r.param = function (a, b) {
	    var c,
	        d = [],
	        e = function e(a, b) {
	      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
	    };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
	      e(this.name, this.value);
	    });else for (c in a) {
	      xb(c, a[c], b, e);
	    }return d.join("&");
	  }, r.fn.extend({ serialize: function serialize() {
	      return r.param(this.serializeArray());
	    }, serializeArray: function serializeArray() {
	      return this.map(function () {
	        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
	      }).filter(function () {
	        var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ha.test(a));
	      }).map(function (a, b) {
	        var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
	          return { name: b.name, value: a.replace(ub, "\r\n") };
	        }) : { name: b.name, value: c.replace(ub, "\r\n") };
	      }).get();
	    } });var yb = /%20/g,
	      zb = /#.*$/,
	      Ab = /([?&])_=[^&]*/,
	      Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	      Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	      Db = /^(?:GET|HEAD)$/,
	      Eb = /^\/\//,
	      Fb = {},
	      Gb = {},
	      Hb = "*/".concat("*"),
	      Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
	    return function (b, c) {
	      "string" != typeof b && (c = b, b = "*");var d,
	          e = 0,
	          f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
	        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
	      }
	    };
	  }function Kb(a, b, c, d) {
	    var e = {},
	        f = a === Gb;function g(h) {
	      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
	        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
	      }), i;
	    }return g(b.dataTypes[0]) || !e["*"] && g("*");
	  }function Lb(a, b) {
	    var c,
	        d,
	        e = r.ajaxSettings.flatOptions || {};for (c in b) {
	      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
	    }return d && r.extend(!0, a, d), a;
	  }function Mb(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.contents,
	        i = a.dataTypes;while ("*" === i[0]) {
	      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
	    }if (d) for (e in h) {
	      if (h[e] && h[e].test(d)) {
	        i.unshift(e);break;
	      }
	    }if (i[0] in c) f = i[0];else {
	      for (e in c) {
	        if (!i[0] || a.converters[e + " " + i[0]]) {
	          f = e;break;
	        }g || (g = e);
	      }f = f || g;
	    }if (f) return f !== i[0] && i.unshift(f), c[f];
	  }function Nb(a, b, c, d) {
	    var e,
	        f,
	        g,
	        h,
	        i,
	        j = {},
	        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
	      j[g.toLowerCase()] = a.converters[g];
	    }f = k.shift();while (f) {
	      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
	        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
	          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
	            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
	          }
	        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
	          b = g(b);
	        } catch (l) {
	          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
	        }
	      }
	    }return { state: "success", data: b };
	  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
	      return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
	    }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
	      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          n,
	          o = r.ajaxSetup({}, c),
	          p = o.context || o,
	          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
	          s = r.Deferred(),
	          t = r.Callbacks("once memory"),
	          u = o.statusCode || {},
	          v = {},
	          w = {},
	          x = "canceled",
	          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
	          var b;if (k) {
	            if (!h) {
	              h = {};while (b = Bb.exec(g)) {
	                h[b[1].toLowerCase()] = b[2];
	              }
	            }b = h[a.toLowerCase()];
	          }return null == b ? null : b;
	        }, getAllResponseHeaders: function getAllResponseHeaders() {
	          return k ? g : null;
	        }, setRequestHeader: function setRequestHeader(a, b) {
	          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
	        }, overrideMimeType: function overrideMimeType(a) {
	          return null == k && (o.mimeType = a), this;
	        }, statusCode: function statusCode(a) {
	          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
	            u[b] = [u[b], a[b]];
	          }return this;
	        }, abort: function abort(a) {
	          var b = a || x;return e && e.abort(b), A(0, b), this;
	        } };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
	        j = d.createElement("a");try {
	          j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
	        } catch (z) {
	          o.crossDomain = !0;
	        }
	      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, ""), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
	        y.setRequestHeader(m, o.headers[m]);
	      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
	        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
	          y.abort("timeout");
	        }, o.timeout));try {
	          k = !1, e.send(v, A);
	        } catch (z) {
	          if (k) throw z;A(-1, z);
	        }
	      } else A(-1, "No Transport");function A(b, c, d, h) {
	        var j,
	            m,
	            n,
	            v,
	            w,
	            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
	      }return y;
	    }, getJSON: function getJSON(a, b, c) {
	      return r.get(a, b, c, "json");
	    }, getScript: function getScript(a, b) {
	      return r.get(a, void 0, b, "script");
	    } }), r.each(["get", "post"], function (a, b) {
	    r[b] = function (a, c, d, e) {
	      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
	    };
	  }), r._evalUrl = function (a) {
	    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
	  }, r.fn.extend({ wrapAll: function wrapAll(a) {
	      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
	        var a = this;while (a.firstElementChild) {
	          a = a.firstElementChild;
	        }return a;
	      }).append(this)), this;
	    }, wrapInner: function wrapInner(a) {
	      return r.isFunction(a) ? this.each(function (b) {
	        r(this).wrapInner(a.call(this, b));
	      }) : this.each(function () {
	        var b = r(this),
	            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
	      });
	    }, wrap: function wrap(a) {
	      var b = r.isFunction(a);return this.each(function (c) {
	        r(this).wrapAll(b ? a.call(this, c) : a);
	      });
	    }, unwrap: function unwrap(a) {
	      return this.parent(a).not("body").each(function () {
	        r(this).replaceWith(this.childNodes);
	      }), this;
	    } }), r.expr.pseudos.hidden = function (a) {
	    return !r.expr.pseudos.visible(a);
	  }, r.expr.pseudos.visible = function (a) {
	    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
	  }, r.ajaxSettings.xhr = function () {
	    try {
	      return new a.XMLHttpRequest();
	    } catch (b) {}
	  };var Ob = { 0: 200, 1223: 204 },
	      Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
	    var _c, d;if (o.cors || Pb && !b.crossDomain) return { send: function send(e, f) {
	        var g,
	            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
	          h[g] = b.xhrFields[g];
	        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
	          h.setRequestHeader(g, e[g]);
	        }_c = function c(a) {
	          return function () {
	            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
	          };
	        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
	          4 === h.readyState && a.setTimeout(function () {
	            _c && d();
	          });
	        }, _c = _c("abort");try {
	          h.send(b.hasContent && b.data || null);
	        } catch (i) {
	          if (_c) throw i;
	        }
	      }, abort: function abort() {
	        _c && _c();
	      } };
	  }), r.ajaxPrefilter(function (a) {
	    a.crossDomain && (a.contents.script = !1);
	  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
	        return r.globalEval(a), a;
	      } } }), r.ajaxPrefilter("script", function (a) {
	    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	  }), r.ajaxTransport("script", function (a) {
	    if (a.crossDomain) {
	      var b, _c2;return { send: function send(e, f) {
	          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
	            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
	          }), d.head.appendChild(b[0]);
	        }, abort: function abort() {
	          _c2 && _c2();
	        } };
	    }
	  });var Qb = [],
	      Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
	      var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
	    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
	    var e,
	        f,
	        g,
	        h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
	      return g || r.error(e + " was not called"), g[0];
	    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
	      g = arguments;
	    }, d.always(function () {
	      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
	    }), "script";
	  }), o.createHTMLDocument = function () {
	    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
	  }(), r.parseHTML = function (a, b, c) {
	    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = oa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
	  }, r.fn.load = function (a, b, c) {
	    var d,
	        e,
	        f,
	        g = this,
	        h = a.indexOf(" ");return h > -1 && (d = r.trim(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
	      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
	    }).always(c && function (a, b) {
	      g.each(function () {
	        c.apply(this, f || [a.responseText, b, a]);
	      });
	    }), this;
	  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
	    r.fn[b] = function (a) {
	      return this.on(b, a);
	    };
	  }), r.expr.pseudos.animated = function (a) {
	    return r.grep(r.timers, function (b) {
	      return a === b.elem;
	    }).length;
	  };function Sb(a) {
	    return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	  }r.offset = { setOffset: function setOffset(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = r.css(a, "position"),
	          l = r(a),
	          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
	    } }, r.fn.extend({ offset: function offset(a) {
	      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
	        r.offset.setOffset(this, a, b);
	      });var b,
	          c,
	          d,
	          e,
	          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
	    }, position: function position() {
	      if (this[0]) {
	        var a,
	            b,
	            c = this[0],
	            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
	      }
	    }, offsetParent: function offsetParent() {
	      return this.map(function () {
	        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
	          a = a.offsetParent;
	        }return a || pa;
	      });
	    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
	    var c = "pageYOffset" === b;r.fn[a] = function (d) {
	      return S(this, function (a, d, e) {
	        var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
	      }, a, d, arguments.length);
	    };
	  }), r.each(["top", "left"], function (a, b) {
	    r.cssHooks[b] = Na(o.pixelPosition, function (a, c) {
	      if (c) return c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c;
	    });
	  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
	    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
	      r.fn[d] = function (e, f) {
	        var g = arguments.length && (c || "boolean" != typeof e),
	            h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
	          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
	        }, b, g ? e : void 0, g);
	      };
	    });
	  }), r.fn.extend({ bind: function bind(a, b, c) {
	      return this.on(a, null, b, c);
	    }, unbind: function unbind(a, b) {
	      return this.off(a, null, b);
	    }, delegate: function delegate(a, b, c, d) {
	      return this.on(b, a, c, d);
	    }, undelegate: function undelegate(a, b, c) {
	      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
	    } }), r.parseJSON = JSON.parse, "function" == "function" && __webpack_require__(3) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return r;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Tb = a.jQuery,
	      Ub = a.$;return r.noConflict = function (b) {
	    return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
	  }, b || (a.jQuery = a.$ = r), r;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	!function (t, e) {
	   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require, exports, module) : t.Tether = e();
	}(undefined, function (t, e, o) {
	  "use strict";
	  function n(t, e) {
	    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	  }function i(t) {
	    var e = t.getBoundingClientRect(),
	        o = {};for (var n in e) {
	      o[n] = e[n];
	    }if (t.ownerDocument !== document) {
	      var r = t.ownerDocument.defaultView.frameElement;if (r) {
	        var s = i(r);o.top += s.top, o.bottom += s.top, o.left += s.left, o.right += s.left;
	      }
	    }return o;
	  }function r(t) {
	    var e = getComputedStyle(t) || {},
	        o = e.position,
	        n = [];if ("fixed" === o) return [t];for (var i = t; (i = i.parentNode) && i && 1 === i.nodeType;) {
	      var r = void 0;try {
	        r = getComputedStyle(i);
	      } catch (s) {}if ("undefined" == typeof r || null === r) return n.push(i), n;var a = r,
	          f = a.overflow,
	          l = a.overflowX,
	          h = a.overflowY;/(auto|scroll)/.test(f + h + l) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && n.push(i);
	    }return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n;
	  }function s() {
	    A && document.body.removeChild(A), A = null;
	  }function a(t) {
	    var e = void 0;t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;var o = e.documentElement,
	        n = i(t),
	        r = P();return n.top -= r.top, n.left -= r.left, "undefined" == typeof n.width && (n.width = document.body.scrollWidth - n.left - n.right), "undefined" == typeof n.height && (n.height = document.body.scrollHeight - n.top - n.bottom), n.top = n.top - o.clientTop, n.left = n.left - o.clientLeft, n.right = e.body.clientWidth - n.width - n.left, n.bottom = e.body.clientHeight - n.height - n.top, n;
	  }function f(t) {
	    return t.offsetParent || document.documentElement;
	  }function l() {
	    var t = document.createElement("div");t.style.width = "100%", t.style.height = "200px";var e = document.createElement("div");h(e.style, { position: "absolute", top: 0, left: 0, pointerEvents: "none", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), e.appendChild(t), document.body.appendChild(e);var o = t.offsetWidth;e.style.overflow = "scroll";var n = t.offsetWidth;o === n && (n = e.clientWidth), document.body.removeChild(e);var i = o - n;return { width: i, height: i };
	  }function h() {
	    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
	        e = [];return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
	      if (e) for (var o in e) {
	        ({}).hasOwnProperty.call(e, o) && (t[o] = e[o]);
	      }
	    }), t;
	  }function u(t, e) {
	    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
	      e.trim() && t.classList.remove(e);
	    });else {
	      var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
	          n = c(t).replace(o, " ");g(t, n);
	    }
	  }function d(t, e) {
	    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
	      e.trim() && t.classList.add(e);
	    });else {
	      u(t, e);var o = c(t) + (" " + e);g(t, o);
	    }
	  }function p(t, e) {
	    if ("undefined" != typeof t.classList) return t.classList.contains(e);var o = c(t);return new RegExp("(^| )" + e + "( |$)", "gi").test(o);
	  }function c(t) {
	    return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className;
	  }function g(t, e) {
	    t.setAttribute("class", e);
	  }function m(t, e, o) {
	    o.forEach(function (o) {
	      -1 === e.indexOf(o) && p(t, o) && u(t, o);
	    }), e.forEach(function (e) {
	      p(t, e) || d(t, e);
	    });
	  }function n(t, e) {
	    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	  }function v(t, e) {
	    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
	  }function y(t, e) {
	    var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];return t + o >= e && e >= t - o;
	  }function b() {
	    return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date();
	  }function w() {
	    for (var t = { top: 0, left: 0 }, e = arguments.length, o = Array(e), n = 0; e > n; n++) {
	      o[n] = arguments[n];
	    }return o.forEach(function (e) {
	      var o = e.top,
	          n = e.left;"string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof n && (n = parseFloat(n, 10)), t.top += o, t.left += n;
	    }), t;
	  }function C(t, e) {
	    return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t;
	  }function O(t, e) {
	    return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && !function () {
	      var t = e,
	          o = a(e),
	          n = o,
	          i = getComputedStyle(e);if (e = [n.left, n.top, o.width + n.left, o.height + n.top], t.ownerDocument !== document) {
	        var r = t.ownerDocument.defaultView;e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset;
	      }$.forEach(function (t, o) {
	        t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(i["border" + t + "Width"]) : e[o] -= parseFloat(i["border" + t + "Width"]);
	      });
	    }(), e;
	  }var E = function () {
	    function t(t, e) {
	      for (var o = 0; o < e.length; o++) {
	        var n = e[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
	      }
	    }return function (e, o, n) {
	      return o && t(e.prototype, o), n && t(e, n), e;
	    };
	  }(),
	      x = void 0;"undefined" == typeof x && (x = { modules: [] });var A = null,
	      T = function () {
	    var t = 0;return function () {
	      return ++t;
	    };
	  }(),
	      S = {},
	      P = function P() {
	    var t = A;t || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), h(t.style, { top: 0, left: 0, position: "absolute" }), document.body.appendChild(t), A = t);var e = t.getAttribute("data-tether-id");return "undefined" == typeof S[e] && (S[e] = i(t), M(function () {
	      delete S[e];
	    })), S[e];
	  },
	      W = [],
	      M = function M(t) {
	    W.push(t);
	  },
	      _ = function _() {
	    for (var t = void 0; t = W.pop();) {
	      t();
	    }
	  },
	      k = function () {
	    function t() {
	      n(this, t);
	    }return E(t, [{ key: "on", value: function value(t, e, o) {
	        var n = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];"undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({ handler: e, ctx: o, once: n });
	      } }, { key: "once", value: function value(t, e, o) {
	        this.on(t, e, o, !0);
	      } }, { key: "off", value: function value(t, e) {
	        if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[t]) if ("undefined" == typeof e) delete this.bindings[t];else for (var o = 0; o < this.bindings[t].length;) {
	          this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o;
	        }
	      } }, { key: "trigger", value: function value(t) {
	        if ("undefined" != typeof this.bindings && this.bindings[t]) {
	          for (var e = 0, o = arguments.length, n = Array(o > 1 ? o - 1 : 0), i = 1; o > i; i++) {
	            n[i - 1] = arguments[i];
	          }for (; e < this.bindings[t].length;) {
	            var r = this.bindings[t][e],
	                s = r.handler,
	                a = r.ctx,
	                f = r.once,
	                l = a;"undefined" == typeof l && (l = this), s.apply(l, n), f ? this.bindings[t].splice(e, 1) : ++e;
	          }
	        }
	      } }]), t;
	  }();x.Utils = { getActualBoundingClientRect: i, getScrollParents: r, getBounds: a, getOffsetParent: f, extend: h, addClass: d, removeClass: u, hasClass: p, updateClasses: m, defer: M, flush: _, uniqueId: T, Evented: k, getScrollBarSize: l, removeUtilElements: s };var B = function () {
	    function t(t, e) {
	      var o = [],
	          n = !0,
	          i = !1,
	          r = void 0;try {
	        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0) {}
	      } catch (f) {
	        i = !0, r = f;
	      } finally {
	        try {
	          !n && a["return"] && a["return"]();
	        } finally {
	          if (i) throw r;
	        }
	      }return o;
	    }return function (e, o) {
	      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, o);throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    };
	  }(),
	      E = function () {
	    function t(t, e) {
	      for (var o = 0; o < e.length; o++) {
	        var n = e[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
	      }
	    }return function (e, o, n) {
	      return o && t(e.prototype, o), n && t(e, n), e;
	    };
	  }(),
	      z = function z(t, e, o) {
	    for (var n = !0; n;) {
	      var i = t,
	          r = e,
	          s = o;n = !1, null === i && (i = Function.prototype);var a = Object.getOwnPropertyDescriptor(i, r);if (void 0 !== a) {
	        if ("value" in a) return a.value;var f = a.get;if (void 0 === f) return;return f.call(s);
	      }var l = Object.getPrototypeOf(i);if (null === l) return;t = l, e = r, o = s, n = !0, a = l = void 0;
	    }
	  };if ("undefined" == typeof x) throw new Error("You must include the utils.js file before tether.js");var j = x.Utils,
	      r = j.getScrollParents,
	      a = j.getBounds,
	      f = j.getOffsetParent,
	      h = j.extend,
	      d = j.addClass,
	      u = j.removeClass,
	      m = j.updateClasses,
	      M = j.defer,
	      _ = j.flush,
	      l = j.getScrollBarSize,
	      s = j.removeUtilElements,
	      Y = function () {
	    if ("undefined" == typeof document) return "";for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
	      var n = e[o];if (void 0 !== t.style[n]) return n;
	    }
	  }(),
	      L = [],
	      D = function D() {
	    L.forEach(function (t) {
	      t.position(!1);
	    }), _();
	  };!function () {
	    var t = null,
	        e = null,
	        o = null,
	        n = function i() {
	      return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void (o = setTimeout(i, 250))) : void ("undefined" != typeof t && b() - t < 10 || (null != o && (clearTimeout(o), o = null), t = b(), D(), e = b() - t));
	    };"undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
	      window.addEventListener(t, n);
	    });
	  }();var X = { center: "center", left: "right", right: "left" },
	      F = { middle: "middle", top: "bottom", bottom: "top" },
	      H = { top: 0, left: 0, middle: "50%", center: "50%", bottom: "100%", right: "100%" },
	      N = function N(t, e) {
	    var o = t.left,
	        n = t.top;return "auto" === o && (o = X[e.left]), "auto" === n && (n = F[e.top]), { left: o, top: n };
	  },
	      U = function U(t) {
	    var e = t.left,
	        o = t.top;return "undefined" != typeof H[t.left] && (e = H[t.left]), "undefined" != typeof H[t.top] && (o = H[t.top]), { left: e, top: o };
	  },
	      V = function V(t) {
	    var e = t.split(" "),
	        o = B(e, 2),
	        n = o[0],
	        i = o[1];return { top: n, left: i };
	  },
	      R = V,
	      q = function (t) {
	    function e(t) {
	      var o = this;n(this, e), z(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), L.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function (t) {
	        "undefined" != typeof t.initialize && t.initialize.call(o);
	      }), this.position();
	    }return v(e, t), E(e, [{ key: "getClass", value: function value() {
	        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
	            e = this.options.classes;return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t;
	      } }, { key: "setOptions", value: function value(t) {
	        var e = this,
	            o = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
	            n = { offset: "0 0", targetOffset: "0 0", targetAttachment: "auto auto", classPrefix: "tether" };this.options = h(n, t);var i = this.options,
	            s = i.element,
	            a = i.target,
	            f = i.targetModifier;if (this.element = s, this.target = a, this.targetModifier = f, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
	          if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");"undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]));
	        }), d(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && d(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");this.targetAttachment = R(this.options.targetAttachment), this.attachment = R(this.options.attachment), this.offset = V(this.options.offset), this.targetOffset = V(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), this.options.enabled !== !1 && this.enable(o);
	      } }, { key: "getTargetBounds", value: function value() {
	        if ("undefined" == typeof this.targetModifier) return a(this.target);if ("visible" === this.targetModifier) {
	          if (this.target === document.body) return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };var t = a(this.target),
	              e = { height: t.height, width: t.width, top: t.top, left: t.left };return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e;
	        }if ("scroll-handle" === this.targetModifier) {
	          var t = void 0,
	              o = this.target;o === document.body ? (o = document.documentElement, t = { left: pageXOffset, top: pageYOffset, height: innerHeight, width: innerWidth }) : t = a(o);var n = getComputedStyle(o),
	              i = o.scrollWidth > o.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
	              r = 0;i && (r = 15);var s = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - r,
	              e = { width: 15, height: .975 * s * (s / o.scrollHeight), left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15 },
	              f = 0;408 > s && this.target === document.body && (f = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));var l = this.target.scrollTop / (o.scrollHeight - s);return e.top = l * (s - e.height - f) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e;
	        }
	      } }, { key: "clearCache", value: function value() {
	        this._cache = {};
	      } }, { key: "cache", value: function value(t, e) {
	        return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t];
	      } }, { key: "enable", value: function value() {
	        var t = this,
	            e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];this.options.addTargetClasses !== !1 && d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
	          e !== t.target.ownerDocument && e.addEventListener("scroll", t.position);
	        }), e && this.position();
	      } }, { key: "disable", value: function value() {
	        var t = this;u(this.target, this.getClass("enabled")), u(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function (e) {
	          e.removeEventListener("scroll", t.position);
	        });
	      } }, { key: "destroy", value: function value() {
	        var t = this;this.disable(), L.forEach(function (e, o) {
	          e === t && L.splice(o, 1);
	        }), 0 === L.length && s();
	      } }, { key: "updateAttachClasses", value: function value(t, e) {
	        var o = this;t = t || this.attachment, e = e || this.targetAttachment;var n = ["left", "top", "bottom", "right", "middle", "center"];"undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);var i = this._addAttachClasses;t.top && i.push(this.getClass("element-attached") + "-" + t.top), t.left && i.push(this.getClass("element-attached") + "-" + t.left), e.top && i.push(this.getClass("target-attached") + "-" + e.top), e.left && i.push(this.getClass("target-attached") + "-" + e.left);var r = [];n.forEach(function (t) {
	          r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t);
	        }), M(function () {
	          "undefined" != typeof o._addAttachClasses && (m(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && m(o.target, o._addAttachClasses, r), delete o._addAttachClasses);
	        });
	      } }, { key: "position", value: function value() {
	        var t = this,
	            e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];if (this.enabled) {
	          this.clearCache();var o = N(this.targetAttachment, this.attachment);this.updateAttachClasses(this.attachment, o);var n = this.cache("element-bounds", function () {
	            return a(t.element);
	          }),
	              i = n.width,
	              r = n.height;if (0 === i && 0 === r && "undefined" != typeof this.lastSize) {
	            var s = this.lastSize;i = s.width, r = s.height;
	          } else this.lastSize = { width: i, height: r };var h = this.cache("target-bounds", function () {
	            return t.getTargetBounds();
	          }),
	              u = h,
	              d = C(U(this.attachment), { width: i, height: r }),
	              p = C(U(o), u),
	              c = C(this.offset, { width: i, height: r }),
	              g = C(this.targetOffset, u);d = w(d, c), p = w(p, g);for (var m = h.left + p.left - d.left, v = h.top + p.top - d.top, y = 0; y < x.modules.length; ++y) {
	            var b = x.modules[y],
	                O = b.position.call(this, { left: m, top: v, targetAttachment: o, targetPos: h, elementPos: n, offset: d, targetOffset: p, manualOffset: c, manualTargetOffset: g, scrollbarSize: S, attachment: this.attachment });if (O === !1) return !1;"undefined" != typeof O && "object" == (typeof O === "undefined" ? "undefined" : _typeof(O)) && (v = O.top, m = O.left);
	          }var E = { page: { top: v, left: m }, viewport: { top: v - pageYOffset, bottom: pageYOffset - v - r + innerHeight, left: m - pageXOffset, right: pageXOffset - m - i + innerWidth } },
	              A = this.target.ownerDocument,
	              T = A.defaultView,
	              S = void 0;return A.body.scrollWidth > T.innerWidth && (S = this.cache("scrollbar-size", l), E.viewport.bottom -= S.height), A.body.scrollHeight > T.innerHeight && (S = this.cache("scrollbar-size", l), E.viewport.right -= S.width), (-1 === ["", "static"].indexOf(A.body.style.position) || -1 === ["", "static"].indexOf(A.body.parentElement.style.position)) && (E.page.bottom = A.body.scrollHeight - v - r, E.page.right = A.body.scrollWidth - m - i), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && !function () {
	            var e = t.cache("target-offsetparent", function () {
	              return f(t.target);
	            }),
	                o = t.cache("target-offsetparent-bounds", function () {
	              return a(e);
	            }),
	                n = getComputedStyle(e),
	                i = o,
	                r = {};if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
	              r[t.toLowerCase()] = parseFloat(n["border" + t + "Width"]);
	            }), o.right = A.body.scrollWidth - o.left - i.width + r.right, o.bottom = A.body.scrollHeight - o.top - i.height + r.bottom, E.page.top >= o.top + r.top && E.page.bottom >= o.bottom && E.page.left >= o.left + r.left && E.page.right >= o.right) {
	              var s = e.scrollTop,
	                  l = e.scrollLeft;E.offset = { top: E.page.top - o.top + s - r.top, left: E.page.left - o.left + l - r.left };
	            }
	          }(), this.move(E), this.history.unshift(E), this.history.length > 3 && this.history.pop(), e && _(), !0;
	        }
	      } }, { key: "move", value: function value(t) {
	        var e = this;if ("undefined" != typeof this.element.parentNode) {
	          var o = {};for (var n in t) {
	            o[n] = {};for (var i in t[n]) {
	              for (var r = !1, s = 0; s < this.history.length; ++s) {
	                var a = this.history[s];if ("undefined" != typeof a[n] && !y(a[n][i], t[n][i])) {
	                  r = !0;break;
	                }
	              }r || (o[n][i] = !0);
	            }
	          }var l = { top: "", left: "", right: "", bottom: "" },
	              u = function u(t, o) {
	            var n = "undefined" != typeof e.options.optimizations,
	                i = n ? e.options.optimizations.gpu : null;if (i !== !1) {
	              var r = void 0,
	                  s = void 0;t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), l[Y] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(r) + "px)", "msTransform" !== Y && (l[Y] += " translateZ(0)");
	            } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px";
	          },
	              d = !1;if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", u(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", u(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? !function () {
	            l.position = "absolute";var n = e.cache("target-offsetparent", function () {
	              return f(e.target);
	            });f(e.element) !== n && M(function () {
	              e.element.parentNode.removeChild(e.element), n.appendChild(e.element);
	            }), u(o.offset, t.offset), d = !0;
	          }() : (l.position = "absolute", u({ top: !0, left: !0 }, t.page)), !d) {
	            for (var p = !0, c = this.element.parentNode; c && 1 === c.nodeType && "BODY" !== c.tagName;) {
	              if ("static" !== getComputedStyle(c).position) {
	                p = !1;break;
	              }c = c.parentNode;
	            }p || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element));
	          }var g = {},
	              m = !1;for (var i in l) {
	            var v = l[i],
	                b = this.element.style[i];b !== v && (m = !0, g[i] = v);
	          }m && M(function () {
	            h(e.element.style, g);
	          });
	        }
	      } }]), e;
	  }(k);q.modules = [], x.position = D;var I = h(q, x),
	      B = function () {
	    function t(t, e) {
	      var o = [],
	          n = !0,
	          i = !1,
	          r = void 0;try {
	        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0) {}
	      } catch (f) {
	        i = !0, r = f;
	      } finally {
	        try {
	          !n && a["return"] && a["return"]();
	        } finally {
	          if (i) throw r;
	        }
	      }return o;
	    }return function (e, o) {
	      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, o);throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    };
	  }(),
	      j = x.Utils,
	      a = j.getBounds,
	      h = j.extend,
	      m = j.updateClasses,
	      M = j.defer,
	      $ = ["left", "top", "right", "bottom"];x.modules.push({ position: function position(t) {
	      var e = this,
	          o = t.top,
	          n = t.left,
	          i = t.targetAttachment;if (!this.options.constraints) return !0;var r = this.cache("element-bounds", function () {
	        return a(e.element);
	      }),
	          s = r.height,
	          f = r.width;if (0 === f && 0 === s && "undefined" != typeof this.lastSize) {
	        var l = this.lastSize;f = l.width, s = l.height;
	      }var u = this.cache("target-bounds", function () {
	        return e.getTargetBounds();
	      }),
	          d = u.height,
	          p = u.width,
	          c = [this.getClass("pinned"), this.getClass("out-of-bounds")];this.options.constraints.forEach(function (t) {
	        var e = t.outOfBoundsClass,
	            o = t.pinnedClass;e && c.push(e), o && c.push(o);
	      }), c.forEach(function (t) {
	        ["left", "top", "right", "bottom"].forEach(function (e) {
	          c.push(t + "-" + e);
	        });
	      });var g = [],
	          v = h({}, i),
	          y = h({}, this.attachment);return this.options.constraints.forEach(function (t) {
	        var r = t.to,
	            a = t.attachment,
	            l = t.pin;"undefined" == typeof a && (a = "");var h = void 0,
	            u = void 0;if (a.indexOf(" ") >= 0) {
	          var c = a.split(" "),
	              m = B(c, 2);u = m[0], h = m[1];
	        } else h = u = a;var b = O(e, r);("target" === u || "both" === u) && (o < b[1] && "top" === v.top && (o += d, v.top = "bottom"), o + s > b[3] && "bottom" === v.top && (o -= d, v.top = "top")), "together" === u && ("top" === v.top && ("bottom" === y.top && o < b[1] ? (o += d, v.top = "bottom", o += s, y.top = "top") : "top" === y.top && o + s > b[3] && o - (s - d) >= b[1] && (o -= s - d, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + s > b[3] ? (o -= d, v.top = "top", o -= s, y.top = "bottom") : "bottom" === y.top && o < b[1] && o + (2 * s - d) <= b[3] && (o += s - d, v.top = "top", y.top = "top")), "middle" === v.top && (o + s > b[3] && "top" === y.top ? (o -= s, y.top = "bottom") : o < b[1] && "bottom" === y.top && (o += s, y.top = "top"))), ("target" === h || "both" === h) && (n < b[0] && "left" === v.left && (n += p, v.left = "right"), n + f > b[2] && "right" === v.left && (n -= p, v.left = "left")), "together" === h && (n < b[0] && "left" === v.left ? "right" === y.left ? (n += p, v.left = "right", n += f, y.left = "left") : "left" === y.left && (n += p, v.left = "right", n -= f, y.left = "right") : n + f > b[2] && "right" === v.left ? "left" === y.left ? (n -= p, v.left = "left", n -= f, y.left = "right") : "right" === y.left && (n -= p, v.left = "left", n += f, y.left = "left") : "center" === v.left && (n + f > b[2] && "left" === y.left ? (n -= f, y.left = "right") : n < b[0] && "right" === y.left && (n += f, y.left = "left"))), ("element" === u || "both" === u) && (o < b[1] && "bottom" === y.top && (o += s, y.top = "top"), o + s > b[3] && "top" === y.top && (o -= s, y.top = "bottom")), ("element" === h || "both" === h) && (n < b[0] && ("right" === y.left ? (n += f, y.left = "left") : "center" === y.left && (n += f / 2, y.left = "left")), n + f > b[2] && ("left" === y.left ? (n -= f, y.left = "right") : "center" === y.left && (n -= f / 2, y.left = "right"))), "string" == typeof l ? l = l.split(",").map(function (t) {
	          return t.trim();
	        }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];var w = [],
	            C = [];o < b[1] && (l.indexOf("top") >= 0 ? (o = b[1], w.push("top")) : C.push("top")), o + s > b[3] && (l.indexOf("bottom") >= 0 ? (o = b[3] - s, w.push("bottom")) : C.push("bottom")), n < b[0] && (l.indexOf("left") >= 0 ? (n = b[0], w.push("left")) : C.push("left")), n + f > b[2] && (l.indexOf("right") >= 0 ? (n = b[2] - f, w.push("right")) : C.push("right")), w.length && !function () {
	          var t = void 0;t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), w.forEach(function (e) {
	            g.push(t + "-" + e);
	          });
	        }(), C.length && !function () {
	          var t = void 0;t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), C.forEach(function (e) {
	            g.push(t + "-" + e);
	          });
	        }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), (v.top !== i.top || v.left !== i.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && (e.updateAttachClasses(y, v), e.trigger("update", { attachment: y, targetAttachment: v }));
	      }), M(function () {
	        e.options.addTargetClasses !== !1 && m(e.target, g, c), m(e.element, g, c);
	      }), { top: o, left: n };
	    } });var j = x.Utils,
	      a = j.getBounds,
	      m = j.updateClasses,
	      M = j.defer;x.modules.push({ position: function position(t) {
	      var e = this,
	          o = t.top,
	          n = t.left,
	          i = this.cache("element-bounds", function () {
	        return a(e.element);
	      }),
	          r = i.height,
	          s = i.width,
	          f = this.getTargetBounds(),
	          l = o + r,
	          h = n + s,
	          u = [];o <= f.bottom && l >= f.top && ["left", "right"].forEach(function (t) {
	        var e = f[t];(e === n || e === h) && u.push(t);
	      }), n <= f.right && h >= f.left && ["top", "bottom"].forEach(function (t) {
	        var e = f[t];(e === o || e === l) && u.push(t);
	      });var d = [],
	          p = [],
	          c = ["left", "top", "right", "bottom"];return d.push(this.getClass("abutted")), c.forEach(function (t) {
	        d.push(e.getClass("abutted") + "-" + t);
	      }), u.length && p.push(this.getClass("abutted")), u.forEach(function (t) {
	        p.push(e.getClass("abutted") + "-" + t);
	      }), M(function () {
	        e.options.addTargetClasses !== !1 && m(e.target, p, d), m(e.element, p, d);
	      }), !0;
	    } });var B = function () {
	    function t(t, e) {
	      var o = [],
	          n = !0,
	          i = !1,
	          r = void 0;try {
	        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0) {}
	      } catch (f) {
	        i = !0, r = f;
	      } finally {
	        try {
	          !n && a["return"] && a["return"]();
	        } finally {
	          if (i) throw r;
	        }
	      }return o;
	    }return function (e, o) {
	      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, o);throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    };
	  }();return x.modules.push({ position: function position(t) {
	      var e = t.top,
	          o = t.left;if (this.options.shift) {
	        var n = this.options.shift;"function" == typeof this.options.shift && (n = this.options.shift.call(this, { top: e, left: o }));var i = void 0,
	            r = void 0;if ("string" == typeof n) {
	          n = n.split(" "), n[1] = n[1] || n[0];var s = n,
	              a = B(s, 2);i = a[0], r = a[1], i = parseFloat(i, 10), r = parseFloat(r, 10);
	        } else i = n.top, r = n.left;return e += i, o += r, { top: e, left: o };
	      }
	    } }), I;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/*eslint-disable no-unused-vars*//*!
	 * jQuery JavaScript Library v3.1.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-07-07T21:44Z
	 */(function(global,factory){"use strict";if(( false?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
	// is present, execute the factory and get jQuery.
	// For environments that do not have a `window` with a `document`
	// (such as Node.js), expose a factory as module.exports.
	// This accentuates the need for the creation of a real `window`.
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info.
	module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
	})(typeof window!=="undefined"?window:undefined,function(window,noGlobal){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};function DOMEval(code,doc){doc=doc||document;var script=doc.createElement("script");script.text=code;doc.head.appendChild(script).parentNode.removeChild(script);}/* global Symbol */// Defining this global in .eslintrc would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	var version="3.1.0",// Define a local copy of jQuery
	jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);},// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g,// Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
	jquery:version,constructor:jQuery,// The default length of a jQuery object is 0
	length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){return num!=null?// Return just the one element from the set
	num<0?this[num+this.length]:this[num]:// Return all the elements in a clean array
	_slice.call(this);},// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){// Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
	ret.prevObject=this;// Return the newly-formed element set
	return ret;},// Execute a callback for every element in the matched set.
	each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
	if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
	target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
	if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
	if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
	if((options=arguments[i])!=null){// Extend the base object
	for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
	if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
	if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
	target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
	}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
	return target;};jQuery.extend({// Unique for each copy of jQuery on the page
	expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
	isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type=jQuery.type(obj);return(type==="number"||type==="string")&&// parseFloat NaNs numeric-cast false positives ("")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	!isNaN(obj-parseFloat(obj));},isPlainObject:function isPlainObject(obj){var proto,Ctor;// Detect obvious negatives
	// Use toString instead of jQuery.type to catch host objects
	if(!obj||toString.call(obj)!=="[object Object]"){return false;}proto=getProto(obj);// Objects with no prototype (e.g., `Object.create( null )`) are plain
	if(!proto){return true;}// Objects with prototype are plain iff they were constructed by a global Object function
	Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function isEmptyObject(obj){/* eslint-disable no-unused-vars */// See https://github.com/eslint/eslint/issues/6125
	var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";}// Support: Android <=2.3 only (functionish RegExp)
	return(typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);},// Evaluates a script in a global context
	globalEval:function globalEval(code){DOMEval(code);},// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android <=4.0 only
	trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
	// that pass the validator function
	for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
	map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
	if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
	}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
	return concat.apply([],ret);},// A global GUID counter for objects
	guid:1,// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;}// Simulated bind
	args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
	expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// Instance methods
	hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
	"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
	".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
	String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,fcssescape=function fcssescape(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
	if(ch==="\0"){return"�";}// Control characters and (dependent upon position) numbers get escaped as code points
	return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
	return"\\"+ch;},// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function unloadHandler(){setDocument();},disabledAncestor=addCombinator(function(elem){return elem.disabled===true;},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
	try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
	// Otherwise append directly
	function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
	while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
	nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
	if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
	if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
	// (excepting DocumentFragment context, where the methods don't exist)
	if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
	if(m=match[1]){// Document context
	if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
	}else{// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
	}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
	if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
	// Thanks to Andrew Dupont for this workaround technique
	// Support: IE <=8
	// Exclude object elements
	}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
	if(nid=context.getAttribute("id")){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
	groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
	newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando]=true;return fn;}/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{// Remove from its parent by default
	if(el.parentNode){el.parentNode.removeChild(el);}// release memory in IE
	el=null;}}/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;// Use IE sourceIndex if available on both nodes
	if(diff){return diff;}// Check if b follows a
	if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */function createDisabledPseudo(disabled){// Known :disabled false positives:
	// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
	// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function(elem){// Check form elements and option elements for explicit disabling
	return"label"in elem&&elem.disabled===disabled||"form"in elem&&elem.disabled===disabled||// Check non-disabled form elements for fieldset[disabled] ancestors
	"form"in elem&&elem.disabled===false&&(// Support: IE6-11+
	// Ancestry is covered for us
	elem.isDisabled===disabled||// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
	/* jshint -W018 */elem.isDisabled!==!disabled&&("label"in elem||!disabledAncestor(elem))!==disabled);};}/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
	while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
	support=Sizzle.support={};/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
	if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
	document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){// Support: IE 11, Edge
	if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
	}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}/* Attributes
		---------------------------------------------------------------------- */// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});/* getElement(s)By*
		---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});// Support: IE<9
	support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID find and filter
	if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{// Support: IE6/7
	// getElementById is not reliable as a find shortcut
	delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}// Tag
	Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag);// Filter out possible comments
	if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
	Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
		---------------------------------------------------------------------- */// QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(el){// Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// https://bugs.jquery.com/ticket/12359
	docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibling-combinator selector` fails
	if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");// Support: IE8
	// Enforce case-sensitivity of name attribute
	if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: IE9-11+
	// IE's :disabled selector does not pick up the children of disabled fieldsets
	docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
	el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(el){// Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch=matches.call(el,"*");// This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
		---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
		---------------------------------------------------------------------- */// Document order sorting
	sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
	if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
	compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
	1;// Disconnected nodes
	if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
	if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
	return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
	if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
	if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
	}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
	cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
	while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
	ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
	expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
	if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
	if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput=null;return results;};/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
	while(node=elem[i++]){// Do not traverse comment nodes
	ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
	return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
	match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
	if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
	}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
	excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
	excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
	match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
	function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
	if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
	start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
	if(forward&&useCache){// Seek `elem` from a previously-cached index
	// ...in a gzip-friendly way
	node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
	diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
	if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
	if(useCache){// ...in a gzip-friendly way
	node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
	// or :nth-last-child(...) or :nth(-last)?-of-type(...)
	if(diff===false){// Use the same loop as above to seek `elem` from the start
	while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
	if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
	diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);}// But maintain support for old signatures
	if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
	"not":markFunction(function(selector){// Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
	while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
	input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){// lang value must be a valid identifier
	if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
	"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
	"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
	"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
	"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
	for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
	if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
	soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
	if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
	for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:// Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
	return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
	uniqueCache[key]=newCache;// A match means we're done; a fail means we have to keep checking
	if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
	elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
	[]:// ...otherwise use results directly
	results:matcherIn;// Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
	if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
	i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
	i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
	}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
	checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
	if(matcher[expando]){// Find the next relative operator (if any) for proper handling
	j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
	elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
	if(bySet){// They will have gone through all possible matchers
	if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
	// makes the latter nonnegative.
	matchedCount+=i;// Apply set filters to unmatched elements
	// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	// no element matchers and no seed.
	// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	// case, which will result in a "00" `matchedCount` that differs from `i` but is also
	// numerically zero.
	if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
	if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
	setMatched=condense(setMatched);}// Add matches to results
	push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
	if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
	if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
	cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
	cached.selector=selector;}return cached;};/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if(match.length===1){// Reduce context if the leading compound selector is an ID
	tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
	i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
	if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
	if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
	// Sort stability
	support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
	setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached=assert(function(el){// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition(document.createElement("fieldset"))&1;});// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;// Deprecated
	jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;var risSimple=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}qualifier=jQuery.filter(qualifier,elements);}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not&&elem.nodeType===1;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}return len>1?jQuery.uniqueSort(ret):ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery,// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;}// Method init() accepts an alternate rootjQuery
	// so migrate can support jQuery.sub (gh-2101)
	root=root||rootjQuery;// Handle HTML strings
	if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
	match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
	if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
	if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
	if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
	}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
	}else{elem=document.getElementById(match[2]);if(elem){// Inject the element directly into the jQuery object
	this[0]=elem;this.length=1;}return this;}// HANDLE: $(expr, $(...))
	}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
	}else if(selector.nodeType){this[0]=selector;this.length=1;return this;// HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
	selector(jQuery);}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
	init.prototype=jQuery.fn;// Initialize central reference
	rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);// Positional selectors never match, since there's no _selection_ context
	if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
	if(cur.nodeType<11&&(targets?targets.index(cur)>-1:// Don't pass non-elements to Sizzle
	cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
	index:function index(elem){// No argument, return index in parent
	if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
	if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
	return indexOf.call(this,// If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
	if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnotwhite=/\S+/g;// Convert String-formatted options into Object-formatted ones
	function createOptions(options){var object={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
	firing,// Last fire value for non-forgettable lists
	memory,// Flag to know if list was already fired
	_fired,// Flag to prevent firing
	_locked,// Actual callback list
	list=[],// Queue of execution data for repeatable lists
	queue=[],// Index of currently firing callback (modified by add/remove as needed)
	firingIndex=-1,// Fire callbacks
	fire=function fire(){// Enforce single-firing
	_locked=options.once;// Execute callbacks for all pending executions,
	// respecting firingIndex overrides and runtime changes
	_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
	if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
	firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
	if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
	if(_locked){// Keep an empty list if we have data for future add calls
	if(memory){list=[];// Otherwise, this object is spent
	}else{list="";}}},// Actual Callbacks object
	self={// Add a callback or a collection of callbacks to the list
	add:function add(){if(list){// If we have memory from a past run, we should fire after adding
	if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){// Inspect recursively
	add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
	remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
	if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
	empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
	// Abort any current/pending executions
	// Clear all callbacks and values
	disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
	// Also disable .add unless we have memory (since it would have no effect)
	// Abort any pending executions
	lock:function lock(){_locked=queue=[];if(!memory&&!firing){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
	fired:function fired(){return!!_fired;}};return self;};function Identity(v){return v;}function Thrower(ex){throw ex;}function adoptValue(value,resolve,reject){var method;try{// Check for promise aspect first to privilege synchronous behavior
	if(value&&jQuery.isFunction(method=value.promise)){method.call(value).done(resolve).fail(reject);// Other thenables
	}else if(value&&jQuery.isFunction(method=value.then)){method.call(value,resolve,reject);// Other non-thenables
	}else{// Support: Android 4.0 only
	// Strict mode functions invoked without .call/.apply get global-object context
	resolve.call(undefined,value);}// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	}catch(value){// Support: Android 4.0 only
	// Strict mode functions invoked without .call/.apply get global-object context
	reject.call(undefined,value);}}jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, callbacks,
	// ... .then handlers, argument index, [final state]
	["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},"catch":function _catch(fn){return _promise.then(null,fn);},// Keep pipe for back-compat
	pipe:function pipe()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
	var fn=jQuery.isFunction(fns[tuple[4]])&&fns[tuple[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
	// deferred.done(function() { bind to newDefer or newDefer.resolve })
	// deferred.fail(function() { bind to newDefer or newDefer.reject })
	deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function then(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function mightThrow(){var returned,then;// Support: Promises/A+ section 2.3.3.3.3
	// https://promisesaplus.com/#point-59
	// Ignore double-resolution attempts
	if(depth<maxDepth){return;}returned=handler.apply(that,args);// Support: Promises/A+ section 2.3.1
	// https://promisesaplus.com/#point-48
	if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}// Support: Promises/A+ sections 2.3.3.1, 3.5
	// https://promisesaplus.com/#point-54
	// https://promisesaplus.com/#point-75
	// Retrieve `then` only once
	then=returned&&(// Support: Promises/A+ section 2.3.4
	// https://promisesaplus.com/#point-64
	// Only check objects and functions for thenability
	(typeof returned==="undefined"?"undefined":_typeof(returned))==="object"||typeof returned==="function")&&returned.then;// Handle a returned thenable
	if(jQuery.isFunction(then)){// Special processors (notify) just wait for resolution
	if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));// Normal processors (resolve) also hook into progress
	}else{// ...and disregard older resolution values
	maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}// Handle all other returned values
	}else{// Only substitute handlers pass on context
	// and multiple values (non-spec behavior)
	if(handler!==Identity){that=undefined;args=[returned];}// Process the value(s)
	// Default process is resolve
	(special||deferred.resolveWith)(that,args);}},// Only normal processors (resolve) catch and reject exceptions
	process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}// Support: Promises/A+ section 2.3.3.3.4.1
	// https://promisesaplus.com/#point-61
	// Ignore post-resolution exceptions
	if(depth+1>=maxDepth){// Only substitute handlers pass on context
	// and multiple values (non-spec behavior)
	if(handler!==Thrower){that=undefined;args=[e];}deferred.rejectWith(that,args);}}};// Support: Promises/A+ section 2.3.3.3.1
	// https://promisesaplus.com/#point-57
	// Re-resolve promises immediately to dodge false rejection from
	// subsequent errors
	if(depth){process();}else{// Call an optional hook to record the stack, in case of exception
	// since it's otherwise lost when execution goes async
	if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}window.setTimeout(process);}};}return jQuery.Deferred(function(newDefer){// progress_handlers.add( ... )
	tuples[0][3].add(resolve(0,newDefer,jQuery.isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));// fulfilled_handlers.add( ... )
	tuples[1][3].add(resolve(0,newDefer,jQuery.isFunction(onFulfilled)?onFulfilled:Identity));// rejected_handlers.add( ... )
	tuples[2][3].add(resolve(0,newDefer,jQuery.isFunction(onRejected)?onRejected:Thrower));}).promise();},// Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];// promise.progress = list.add
	// promise.done = list.add
	// promise.fail = list.add
	_promise[tuple[1]]=list.add;// Handle state
	if(stateString){list.add(function(){// state = "resolved" (i.e., fulfilled)
	// state = "rejected"
	_state=stateString;},// rejected_callbacks.disable
	// fulfilled_callbacks.disable
	tuples[3-i][2].disable,// progress_callbacks.lock
	tuples[0][2].lock);}// progress_handlers.fire
	// fulfilled_handlers.fire
	// rejected_handlers.fire
	list.add(tuple[3].fire);// deferred.notify = function() { deferred.notifyWith(...) }
	// deferred.resolve = function() { deferred.resolveWith(...) }
	// deferred.reject = function() { deferred.rejectWith(...) }
	deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};// deferred.notifyWith = list.fireWith
	// deferred.resolveWith = list.fireWith
	// deferred.rejectWith = list.fireWith
	deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
	_promise.promise(deferred);// Call given func if any
	if(func){func.call(deferred,deferred);}// All done!
	return deferred;},// Deferred helper
	when:function when(singleValue){var// count of uncompleted subordinates
	remaining=arguments.length,// count of unprocessed arguments
	i=remaining,// subordinate fulfillment data
	resolveContexts=Array(i),resolveValues=_slice.call(arguments),// the master Deferred
	master=jQuery.Deferred(),// subordinate callback factory
	updateFunc=function updateFunc(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?_slice.call(arguments):value;if(! --remaining){master.resolveWith(resolveContexts,resolveValues);}};};// Single- and empty arguments are adopted like Promise.resolve
	if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject);// Use .then() to unwrap secondary thenables (cf. gh-3000)
	if(master.state()==="pending"||jQuery.isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}// Multiple arguments are aggregated like Promise.all array elements
	while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}return master.promise();}});// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};// The deferred used on DOM ready
	var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
	// happens at the time of error handling instead of callback
	// registration.
	.catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
	isReady:false,// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1,// Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},// Handle when the DOM is ready
	ready:function ready(wait){// Abort if there are pending holds or we're already ready
	if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
	jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;// The ready event handler and self cleanup method
	function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout(jQuery.ready);}else{// Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
	window.addEventListener("load",completed);}// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
	if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
	}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
	}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}return chainable?elems:// Gets
	bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={cache:function cache(owner){// Check if the owner object already has a cache
	var value=owner[this.expando];// If not, create one
	if(!value){value={};// We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
	// configurable must be true to allow the property to be
	// deleted when data is removed
	}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
	// Always use camelCase key (gh-2257)
	if(typeof data==="string"){cache[jQuery.camelCase(data)]=value;// Handle: [ owner, { properties } ] args
	}else{// Copy the properties one-by-one to the cache object
	for(prop in data){cache[jQuery.camelCase(prop)]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):// Always use camelCase key (gh-2257)
	owner[this.expando]&&owner[this.expando][jQuery.camelCase(key)];},access:function access(owner,key,value){// In cases where either:
	//
	//   1. No key was specified
	//   2. A string key was specified, but no value provided
	//
	// Take the "read" path and allow the get method to determine
	// which value to return, respectively either:
	//
	//   1. The entire cache object
	//   2. The data stored at the key
	//
	if(key===undefined||key&&typeof key==="string"&&value===undefined){return this.get(owner,key);}// When the key is not a string, or both a key and value
	// are specified, set or extend (existing objects) with either:
	//
	//   1. An object of properties
	//   2. A key and value
	//
	this.set(owner,key,value);// Since the "set" path can have two possible entry points
	// return the expected data based on which path was taken[*]
	return value!==undefined?value:key;},remove:function remove(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}if(key!==undefined){// Support array or space separated string of keys
	if(jQuery.isArray(key)){// If key is an array of keys...
	// We always set camelCase keys, so remove that.
	key=key.map(jQuery.camelCase);}else{key=jQuery.camelCase(key);// If a key with the spaces exists, use it.
	// Otherwise, create an array by matching non-whitespace
	key=key in cache?[key]:key.match(rnotwhite)||[];}i=key.length;while(i--){delete cache[key[i]];}}// Remove the expando if there's no more data
	if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <=35 - 45
	// Webkit & Blink performance suffers when deleting properties
	// from DOM nodes, so set to undefined instead
	// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
	if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:// Only convert to a number if it doesn't change the string
	+data+""===data?+data:rbrace.test(data)?JSON.parse(data):data;}catch(e){}// Make sure we set the data so it isn't changed later
	dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
	if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE 11 only
	// The attrs elements can be null (#14894)
	if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
	if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data;// The calling jQuery object (element matches) is not empty
	// (and therefore has an element appears at this[ 0 ]) and the
	// `value` parameter was not undefined. An empty jQuery object
	// will result in `undefined` for elem = this[ 0 ] which will
	// throw an exception if an attempt to read a data cache is made.
	if(elem&&value===undefined){// Attempt to get data from the cache
	// The key will always be camelCased in Data
	data=dataUser.get(elem,key);if(data!==undefined){return data;}// Attempt to "discover" the data in
	// HTML5 custom data-* attrs
	data=dataAttr(elem,key);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
	return;}// Set the data...
	this.each(function(){// We always store the camelCased key
	dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
	if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
	_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHiddenWithinTree=function isHiddenWithinTree(elem,el){// isHiddenWithinTree might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem=el||elem;// Inline style trumps all
	return elem.style.display==="none"||elem.style.display===""&&// Otherwise, check computed style
	// Support: Firefox <=43 - 45
	// Disconnected elements can have computed display: none, so first confirm that elem is
	// in the document.
	jQuery.contains(elem.ownerDocument,elem)&&jQuery.css(elem,"display")==="none";};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
	for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
	for(name in options){elem.style[name]=old[name];}return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
	initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Trust units reported by jQuery.css
	unit=unit||initialInUnit[3];// Make sure we update the tween properties later on
	valueParts=valueParts||[];// Iteratively approximate from a nonzero starting point
	initialInUnit=+initial||1;do{// If previous iteration zeroed out, double until we get *something*.
	// Use string for doubling so we don't accidentally see scale as unchanged below
	scale=scale||".5";// Adjust and apply
	initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);// Update scale, tolerating zero or NaN from tween.cur()
	// Break the loop if scale is unchanged or perfect, or if we've just had enough.
	}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
	adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}temp=doc.body.appendChild(doc.createElement(nodeName)),display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}defaultDisplayMap[nodeName]=display;return display;}function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;// Determine new display value for elements that need to change
	for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}display=elem.style.display;if(show){// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
	// check is required in this first loop unless we have a nonempty display value (either
	// inline or about-to-be-restored)
	if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";// Remember what we're overwriting
	dataPriv.set(elem,"display",display);}}}// Set the display of the elements in a second loop to avoid constant reflow
	for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}return elements;}jQuery.fn.extend({show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;var rscriptType=/^$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
	var wrapMap={// Support: IE <=9 only
	option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE <=9 only
	wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!=="undefined"?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;}// Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
	if(jQuery.type(elem)==="object"){// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
	}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
	tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
	j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
	tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
	tmp.textContent="";}}}// Remove wrapper from fragment
	fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
	if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
	tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
	if(contains){setGlobalEval(tmp);}// Capture executables
	if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var documentElement=document.documentElement;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
	if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-Object, selector, data )
	if(typeof selector!=="string"){// ( types-Object, data )
	data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
	fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
	fn=data;data=undefined;}else{// ( types, data, fn )
	fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
	fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Ensure that invalid selectors throw exceptions at attach time
	// Evaluate against documentElement in case elem is a non-element node (e.g., document)
	if(selector){jQuery.find.matchesSelector(documentElement,selector);}// Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
	if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
	special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
	type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
	special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
	handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
	if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
	if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
	origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(nativeEvent){// Make a writable jQuery.Event from the native event object
	var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
	handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
	i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
	// a subset or equal to those in the bound event (both can have no namespace).
	if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Support: IE <=9
	// Find delegate handlers
	// Black-hole SVG <use> instance trees (#13180)
	//
	// Support: Firefox <=42
	// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
	if(delegateCount&&cur.nodeType&&(event.type!=="click"||isNaN(event.button)||event.button<1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
	sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}// Add the remaining (directly-bound) handlers
	if(delegateCount<_handlers.length){handlerQueue.push({elem:this,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},addProp:function addProp(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:jQuery.isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function set(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function fix(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{// Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
	_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
	if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
	if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android <=2.3 only
	src.returnValue===false?returnTrue:returnFalse;// Create target properties
	// Support: Safari <=6 - 7 only
	// Target should not be a text node (#504, #13143)
	this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;// Event type
	}else{this.type=src;}// Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
	this.timeStamp=src&&src.timeStamp||jQuery.now();// Mark it as fixed
	this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function which(event){var button=event.button;// Add which for key events
	if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}// Add which for click: 1 === left; 2 === middle; 3 === right
	if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){return button&1?1:button&2?3:button&4?2:0;}return event.which;}},jQuery.event.addProp);// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
	handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-object [, selector] )
	for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
	fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var/* eslint-disable max-len */// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return elem.getElementsByTagName("tbody")[0]||elem;}return elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
	if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
	if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
	function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
	if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
	}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
	args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
	if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
	// instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
	if(hasScripts){// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
	jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
	for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){// Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{DOMEval(node.textContent.replace(rcleanScript,""),doc);}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
	if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
	destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
	destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
	return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
	}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <=35 - 45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <=35 - 45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
	jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
	elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
	if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
	if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
	}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
	return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
	},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: Android <=4.0 only, PhantomJS 1 only
	// .get() because push.apply(_, arraylike) throws on ancient WebKit
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests(){// This is a singleton, we need to execute it only once
	if(!div){return;}div.style.cssText="box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
	reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";// Support: Android 4.0 - 4.3 only
	// Some styles come back with percentage values, even though they shouldn't
	div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);// Nullify the div so it wouldn't be stored in the memory and
	// it will also be a sign that checks already performed
	div=null;}var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
	if(!div.style){return;}// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);jQuery.extend(support,{pixelPosition:function pixelPosition(){computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){computeStyleTests();return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){computeStyleTests();return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){computeStyleTests();return reliableMarginLeftVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// A tribute to the "awesome hack by Dean Edwards"
	// Android Browser returns percentage for some values,
	// but width seems to be reliably pixels.
	// This is against the CSSOM draft spec:
	// https://drafts.csswg.org/cssom/#resolved-values
	if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){// Remember the original values
	width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
	style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
	style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE <=9 - 11 only
	// IE returns zIndex value as an integer.
	ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
	return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
	// to missing dependency), remove it.
	delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
	return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name){// Shortcut for names that are not vendor prefixed
	if(name in emptyStyle){return name;}// Check for vendor prefixed names
	var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
	// normalized at this point
	var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?// If we already have the right measurement, avoid augmentation
	4:// Otherwise initialize for horizontal or vertical properties
	name==="width"?1:0,val=0;for(;i<4;i+=2){// Both box models exclude margin, so add it if we want it
	if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){// border-box includes padding, so remove it if we want content
	if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// At this point, extra isn't border nor margin, so remove border
	if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{// At this point, extra isn't content, so add padding
	val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// At this point, extra isn't content nor padding, so add border
	if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){// Start with offset property, which is equivalent to the border-box value
	var val,valueIsBorderBox=true,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if(elem.getClientRects().length){val=elem.getBoundingClientRect()[name];}// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val<=0||val==null){// Fall back to computed then uncomputed css if necessary
	val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}// Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;}// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);// Normalize "", auto, and prepare for extra
	val=parseFloat(val)||0;}// Use the active box-sizing model to add/subtract irrelevant styles
	return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}jQuery.extend({// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{"float":"cssFloat"},// Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
	if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Gets hook for the prefixed version, then unprefixed version
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
	if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value);// Convert "+=" or "-=" to relative numbers (#7345)
	if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
	type="number";}// Make sure that null and NaN values aren't set (#7116)
	if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
	if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// background-* props affect original clone's values
	if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{// If a hook was provided get the non-computed value from there
	if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);// Make sure that we're working with the right name
	name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Try prefixed name followed by the unprefixed name
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
	if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
	if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
	if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
	if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
	// but it must have a current display style that would benefit
	return rdisplayswap.test(jQuery.css(elem,"display"))&&(// Support: Safari 8+
	// Table columns in Safari have non-zero offsetWidth & zero
	// getBoundingClientRect().width unless display is changed.
	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);// Convert to pixels if value adjustment is needed
	if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
	parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
	// or when there is no matching style property that exists.
	if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails.
	// Simple values such as "10px" are parsed to Float;
	// complex values such as "rotate(1rad)" are returned as-is.
	result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
	return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
	// Use cssHook if its there.
	// Use .style if available and use plain properties where available.
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back compat <1.8 extension point
	jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function raf(){if(timerId){window.requestAnimationFrame(raf);jQuery.fx.tick();}}// Animations created synchronously will run synchronously
	function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();}// Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");// Queue-skipping animations hijack the fx hooks
	if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Detect show/hide animations
	for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// Pretend to be hidden if this is a "show" and
	// there is still data from a stopped show/hide
	if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;// Ignore all other no-op show/hide data
	}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}// Bail out if this is a no-op like .hide().hide()
	propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}// Restrict "overflow" and "display" styles during box animations
	if(isBox&&elem.nodeType===1){// Support: IE <=9 - 11, Edge 12 - 13
	// Record all 3 overflow attributes because IE does not infer the shorthand
	// from identically-valued overflowX and overflowY
	opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Identify a display type, preferring old show/hide data over the CSS cascade
	restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{// Get nonempty value(s) by temporarily forcing visibility
	showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}// Animate inline elements as inline-block
	if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){// Restore the original display value at the end of pure show/hide animations
	if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}style.display="inline-block";}}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// Implement show/hide animations
	propTween=false;for(prop in orig){// General show/hide setup for this element animation
	if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
	if(toggle){dataShow.hidden=!hidden;}// Show elements before animating them
	if(hidden){showHide([elem],true);}/* eslint-disable no-loop-func */anim.done(function(){/* eslint-enable no-loop-func */// The final step of a "hide" animation is actually hiding the element
	if(!hidden){showHide([elem]);}dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}// Per-property setup
	propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
	for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
	// Reusing 'index' because we have the correct "name"
	for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3 only
	// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
	if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));// attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnotwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};// Go to the end state if fx are off or if document is hidden
	if(jQuery.fx.off||document.hidden){opt.duration=0;}else{opt.duration=typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;}// Normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
	opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
	return this.filter(isHiddenWithinTree).css("opacity",0).show()// Animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
	if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
	// Timers currently will call their complete callbacks, which
	// will dequeue but only if they were gotoEnd.
	if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
	data.finish=true;// Empty the queue first
	jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
	for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
	for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];// Checks the timer has not already been removed
	if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.requestAnimationFrame?window.requestAnimationFrame(raf):window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){if(window.cancelAnimationFrame){window.cancelAnimationFrame(timerId);}else{window.clearInterval(timerId);}timerId=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
	_default:400};// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn=input.value!=="";// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected=opt.selected;// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// Attribute hooks are determined by the lowercase version
	// Grab necessary hook if one is defined
	if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
	return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){elem.removeAttribute(name);}}}});// Hooks for boolean attributes
	boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
	handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
	name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// Support: IE <=9 - 11 only
	// elem.tabIndex doesn't always return the
	// correct value when it hasn't been explicitly set
	// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	// Use proper attribute retrieval(#12072)
	var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
	cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
	while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){// Toggle individual class names
	i=0;self=jQuery(this);classNames=value.match(rnotwhite)||[];while(className=classNames[i++]){// Check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
	}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
	dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;return typeof ret==="string"?// Handle most common string cases
	ret.replace(rreturn,""):// Handle cases where value is null/undef or number
	ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
	if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
	if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE <=10 - 11 only
	// option.text throws exceptions (#14686, #14858)
	// Strip and collapse whitespace
	// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	jQuery.trim(jQuery.text(elem)).replace(rspaces," ");}},select:{get:function get(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;// Loop through all the selected options
	for(;i<max;i++){option=options[i];// Support: IE <=9 only
	// IE8-9 doesn't update selected after form reset (#2551)
	if((option.selected||i===index)&&// Don't return options that are disabled or in a disabled optgroup
	!option.disabled&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
	value=jQuery(option).val();// We don't need an array for one selects
	if(one){return value;}// Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];/* eslint-disable no-cond-assign */if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}/* eslint-enable no-cond-assign */}// Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
	var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;// Don't do events on text and comment nodes
	if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
	namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
	event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
	event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
	data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
	special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
	i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
	handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
	handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
	if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name as the event.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
	tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){// Handle event binding
	jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/;// Cross-browser xml parsing
	jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){// Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
	add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){// Serialize object item.
	for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
	add(prefix,obj);}}// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,valueOrFunction){// If value is a function, invoke it and use its return value
	var value=jQuery.isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value);};// If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
	return s.join("&");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
	return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var r20=/%20/g,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={},/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
	originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){// For each dataType in the dataTypeExpression
	while(dataType=dataTypes[i++]){// Prepend if requested
	if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
	}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
	while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
	if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
	if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
	for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
	finalDataType=finalDataType||firstDataType;}// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
	while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
	if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
	if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
	}else if(prev!=="*"&&prev!==current){// Seek a direct converter
	conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
	if(!conv){for(conv2 in converters){// If conv2 outputs current
	tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
	conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
	if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
	}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
	if(conv!==true){// Unless errors are allowed to bubble, catch and return them
	if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
	active:0,// Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{// Convert anything to text
	"* text":String,// Text to html (true = no transformation)
	"text html":true,// Evaluate text as a json expression
	"text json":JSON.parse,// Parse text as xml
	"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
	ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
	if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;}// Force options to be an object
	options=options||{};var transport,// URL without anti-cache param
	cacheURL,// Response headers
	responseHeadersString,responseHeaders,// timeout handle
	timeoutTimer,// Url cleanup var
	urlAnchor,// Request state (becomes false upon send and true upon completion)
	completed,// To know if global events are to be dispatched
	fireGlobals,// Loop variable
	i,// uncached part of the url
	uncached,// Create the final options object
	s=jQuery.ajaxSetup({},options),// Callbacks context
	callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
	_statusCode=s.statusCode||{},// Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={},// Default abort message
	strAbort="canceled",// Fake xhr
	jqXHR={readyState:0,// Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return completed?responseHeadersString:null;},// Caches the header
	setRequestHeader:function setRequestHeader(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(completed==null){s.mimeType=type;}return this;},// Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(completed){// Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}else{// Lazy-add the new callbacks in a way that preserves old ones
	for(code in map){_statusCode[code]=[_statusCode[code],map[code]];}}}return this;},// Cancel the request
	abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
	deferred.promise(jqXHR);// Add protocol if not provided (prefilters might expect it)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
	s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
	s.dataTypes=(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
	if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE <=8 - 11, Edge 12 - 13
	// IE throws exception on accessing the href property if url is malformed,
	// e.g. http://example.com:80x/
	try{urlAnchor.href=s.url;// Support: IE <=8 - 11 only
	// Anchor's host property isn't correctly set when s.url is relative
	urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
	// it can be rejected by the transport if it is invalid
	s.crossDomain=true;}}// Convert data if not already a string
	if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
	if(completed){return jqXHR;}// We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
	if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
	s.type=s.type.toUpperCase();// Determine if request has content
	s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	// Remove hash to simplify url manipulation
	cacheURL=s.url.replace(rhash,"");// More options handling for requests with no content
	if(!s.hasContent){// Remember the hash so we can put it back
	uncached=s.url.slice(cacheURL.length);// If data is available, append data to url
	if(s.data){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
	delete s.data;}// Add anti-cache in uncached url if needed
	if(s.cache===false){cacheURL=cacheURL.replace(rts,"");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce++ +uncached;}// Put hash and anti-cache on the URL that will be requested (gh-1732)
	s.url=cacheURL+uncached;// Change '%20' to '+' if this is encoded form body content (gh-2658)
	}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
	if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
	for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
	if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){// Abort if not done already and return
	return jqXHR.abort();}// Aborting is no longer a cancellation
	strAbort="abort";// Install callbacks on deferreds
	completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);// Get transport
	transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
	if(completed){return jqXHR;}// Timeout
	if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{completed=false;transport.send(requestHeaders,done);}catch(e){// Rethrow post-completion exceptions
	if(completed){throw e;}// Propagate others as results
	done(-1,e);}}// Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Ignore repeat invocations
	if(completed){return;}completed=true;// Clear timeout if it exists
	if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport=undefined;// Cache response headers
	responseHeadersString=headers||"";// Set readyState
	jqXHR.readyState=status>0?4:0;// Determine if successful
	isSuccess=status>=200&&status<300||status===304;// Get response data
	if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
	response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
	if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
	if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
	}else if(status===304){statusText="notmodified";// If we have data, let's convert it
	}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
	error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
	jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
	return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
	type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(this[0]){if(jQuery.isFunction(html)){html=html.call(this[0]);}// The elements to wrap the target around
	wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
	0:200,// Support: IE <=9 only
	// #1450: sometimes IE returns 1223 when it should be 204
	1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
	if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
	if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
	for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
	_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE <=9 only
	// On a manual native abort, IE9 throws
	// errors on any property access that is not readyState
	if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
	xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE <=9 only
	// IE9 has no XHR2 but throws on binary (trac-11426)
	// For XHR2 non-text, let the caller handle it (gh-2498)
	(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
	xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error");// Support: IE 9 only
	// Use onreadystatechange to replace onabort
	// to handle uncaught aborts
	if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
	if(xhr.readyState===4){// Allow onerror to be called first,
	// but that will not handle a native abort
	// Also, save errorCallback to a variable
	// as xhr.onerror cannot be accessed
	window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
	_callback=_callback("abort");try{// Do send the request (this may raise an exception)
	xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
	if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});// Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
	if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
	document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
	callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
	if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
	s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
	s.dataTypes[0]="json";// Install callback
	overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
	jqXHR.always(function(){// If previous value didn't exist - remove it
	if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
	}else{window[callbackName]=overwritten;}// Save back as free
	if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
	s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
	oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
	if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
	return"script";}});// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;}();// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}if(typeof context==="boolean"){keepScripts=context;context=false;}var base,parsed,scripts;if(!context){// Stop scripts or inline event handlers from being executed immediately
	// by using document.implementation
	if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");// Set the base href for the created document
	// so any parsed elements with URLs
	// are based on the document's URL (gh-2965)
	base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];// Single tag
	if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};/**
	 * Load a url into a page
	 */jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);}// If it's a function
	if(jQuery.isFunction(params)){// We assume that it's the callback
	callback=params;params=undefined;// Otherwise, build a param string
	}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";}// If we have elements to modify, make the request
	if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
	// Make value of this field explicit since
	// user can override it through ajaxSetup method
	type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
	response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
	responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
	// but they are ignored because response was set above.
	// If it fails, this function gets "jqXHR", "status", "error"
	}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};/**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
	if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){// Preserve chaining for setter
	if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,rect,doc,elem=this[0];if(!elem){return;}// Support: IE <=11 only
	// Running getBoundingClientRect on a
	// disconnected node in IE throws an error
	if(!elem.getClientRects().length){return{top:0,left:0};}rect=elem.getBoundingClientRect();// Make sure element is not hidden (display: none)
	if(rect.width||rect.height){doc=elem.ownerDocument;win=getWindow(doc);docElem=doc.documentElement;return{top:rect.top+win.pageYOffset-docElem.clientTop,left:rect.left+win.pageXOffset-docElem.clientLeft};}// Return zeros for disconnected and hidden elements (gh-2310)
	return rect;},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	// because it is its only offset parent
	if(jQuery.css(elem,"position")==="fixed"){// Assume getBoundingClientRect is there when computed position is fixed
	offset=elem.getBoundingClientRect();}else{// Get *real* offsetParent
	offsetParent=this.offsetParent();// Get correct offsets
	offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}// Add offsetParent borders
	parentOffset={top:parentOffset.top+jQuery.css(offsetParent[0],"borderTopWidth",true),left:parentOffset.left+jQuery.css(offsetParent[0],"borderLeftWidth",true)};}// Subtract parent offsets and element margins
	return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
	jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
	return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}// Get document width or height
	if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	// whichever is greatest
	return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra):// Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
	return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});jQuery.parseJSON=JSON.parse;// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var// Map over jQuery in case of overwrite
	_jQuery=window.jQuery,// Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery, __webpack_provided_window_dot_Tether, Tether) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * Bootstrap v4.0.0-alpha.3 (http://getbootstrap.com)
	 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */
	if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
	  var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
	}(jQuery), +function (a) {
	  "use strict";
	  function b(a, b) {
	    if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + (typeof b === "undefined" ? "undefined" : _typeof(b)));a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
	  }function c(a, b) {
	    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
	  }var d = function d(a, b, c) {
	    for (var d = !0; d;) {
	      var e = a,
	          f = b,
	          g = c;d = !1, null === e && (e = Function.prototype);var h = Object.getOwnPropertyDescriptor(e, f);if (void 0 !== h) {
	        if ("value" in h) return h.value;var i = h.get;if (void 0 === i) return;return i.call(g);
	      }var j = Object.getPrototypeOf(e);if (null === j) return;a = j, b = f, c = g, d = !0, h = j = void 0;
	    }
	  },
	      e = function () {
	    function a(a, b) {
	      for (var c = 0; c < b.length; c++) {
	        var d = b[c];d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
	      }
	    }return function (b, c, d) {
	      return c && a(b.prototype, c), d && a(b, d), b;
	    };
	  }(),
	      f = function (a) {
	    function b(a) {
	      return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	    }function c(a) {
	      return (a[0] || a).nodeType;
	    }function d() {
	      return { bindType: h.end, delegateType: h.end, handle: function handle(b) {
	          if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
	        } };
	    }function e() {
	      if (window.QUnit) return !1;var a = document.createElement("bootstrap");for (var b in j) {
	        if (void 0 !== a.style[b]) return { end: j[b] };
	      }return !1;
	    }function f(b) {
	      var c = this,
	          d = !1;return a(this).one(k.TRANSITION_END, function () {
	        d = !0;
	      }), setTimeout(function () {
	        d || k.triggerTransitionEnd(c);
	      }, b), this;
	    }function g() {
	      h = e(), a.fn.emulateTransitionEnd = f, k.supportsTransitionEnd() && (a.event.special[k.TRANSITION_END] = d());
	    }var h = !1,
	        i = 1e6,
	        j = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
	        k = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(a) {
	        do {
	          a += ~~(Math.random() * i);
	        } while (document.getElementById(a));return a;
	      }, getSelectorFromElement: function getSelectorFromElement(a) {
	        var b = a.getAttribute("data-target");return b || (b = a.getAttribute("href") || "", b = /^#[a-z]/i.test(b) ? b : null), b;
	      }, reflow: function reflow(a) {
	        new Function("bs", "return bs")(a.offsetHeight);
	      }, triggerTransitionEnd: function triggerTransitionEnd(b) {
	        a(b).trigger(h.end);
	      }, supportsTransitionEnd: function supportsTransitionEnd() {
	        return Boolean(h);
	      }, typeCheckConfig: function typeCheckConfig(a, d, e) {
	        for (var f in e) {
	          if (e.hasOwnProperty(f)) {
	            var g = e[f],
	                h = d[f],
	                i = void 0;if (i = h && c(h) ? "element" : b(h), !new RegExp(g).test(i)) throw new Error(a.toUpperCase() + ": " + ('Option "' + f + '" provided type "' + i + '" ') + ('but expected type "' + g + '".'));
	          }
	        }
	      } };return g(), k;
	  }(jQuery),
	      g = (function (a) {
	    var b = "alert",
	        d = "4.0.0-alpha.3",
	        g = "bs.alert",
	        h = "." + g,
	        i = ".data-api",
	        j = a.fn[b],
	        k = 150,
	        l = { DISMISS: '[data-dismiss="alert"]' },
	        m = { CLOSE: "close" + h, CLOSED: "closed" + h, CLICK_DATA_API: "click" + h + i },
	        n = { ALERT: "alert", FADE: "fade", IN: "in" },
	        o = function () {
	      function b(a) {
	        c(this, b), this._element = a;
	      }return e(b, [{ key: "close", value: function value(a) {
	          a = a || this._element;var b = this._getRootElement(a),
	              c = this._triggerCloseEvent(b);c.isDefaultPrevented() || this._removeElement(b);
	        } }, { key: "dispose", value: function value() {
	          a.removeData(this._element, g), this._element = null;
	        } }, { key: "_getRootElement", value: function value(b) {
	          var c = f.getSelectorFromElement(b),
	              d = !1;return c && (d = a(c)[0]), d || (d = a(b).closest("." + n.ALERT)[0]), d;
	        } }, { key: "_triggerCloseEvent", value: function value(b) {
	          var c = a.Event(m.CLOSE);return a(b).trigger(c), c;
	        } }, { key: "_removeElement", value: function value(b) {
	          return a(b).removeClass(n.IN), f.supportsTransitionEnd() && a(b).hasClass(n.FADE) ? void a(b).one(f.TRANSITION_END, a.proxy(this._destroyElement, this, b)).emulateTransitionEnd(k) : void this._destroyElement(b);
	        } }, { key: "_destroyElement", value: function value(b) {
	          a(b).detach().trigger(m.CLOSED).remove();
	        } }], [{ key: "_jQueryInterface", value: function value(c) {
	          return this.each(function () {
	            var d = a(this),
	                e = d.data(g);e || (e = new b(this), d.data(g, e)), "close" === c && e[c](this);
	          });
	        } }, { key: "_handleDismiss", value: function value(a) {
	          return function (b) {
	            b && b.preventDefault(), a.close(this);
	          };
	        } }, { key: "VERSION", get: function get() {
	          return d;
	        } }]), b;
	    }();return a(document).on(m.CLICK_DATA_API, l.DISMISS, o._handleDismiss(new o())), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function () {
	      return a.fn[b] = j, o._jQueryInterface;
	    }, o;
	  }(jQuery), function (a) {
	    var b = "button",
	        d = "4.0.0-alpha.3",
	        f = "bs.button",
	        g = "." + f,
	        h = ".data-api",
	        i = a.fn[b],
	        j = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
	        k = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: "input", ACTIVE: ".active", BUTTON: ".btn" },
	        l = { CLICK_DATA_API: "click" + g + h, FOCUS_BLUR_DATA_API: "focus" + g + h + " " + ("blur" + g + h) },
	        m = function () {
	      function b(a) {
	        c(this, b), this._element = a;
	      }return e(b, [{ key: "toggle", value: function value() {
	          var b = !0,
	              c = a(this._element).closest(k.DATA_TOGGLE)[0];if (c) {
	            var d = a(this._element).find(k.INPUT)[0];if (d) {
	              if ("radio" === d.type) if (d.checked && a(this._element).hasClass(j.ACTIVE)) b = !1;else {
	                var e = a(c).find(k.ACTIVE)[0];e && a(e).removeClass(j.ACTIVE);
	              }b && (d.checked = !a(this._element).hasClass(j.ACTIVE), a(this._element).trigger("change")), d.focus();
	            }
	          } else this._element.setAttribute("aria-pressed", !a(this._element).hasClass(j.ACTIVE));b && a(this._element).toggleClass(j.ACTIVE);
	        } }, { key: "dispose", value: function value() {
	          a.removeData(this._element, f), this._element = null;
	        } }], [{ key: "_jQueryInterface", value: function value(c) {
	          return this.each(function () {
	            var d = a(this).data(f);d || (d = new b(this), a(this).data(f, d)), "toggle" === c && d[c]();
	          });
	        } }, { key: "VERSION", get: function get() {
	          return d;
	        } }]), b;
	    }();return a(document).on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function (b) {
	      b.preventDefault();var c = b.target;a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)), m._jQueryInterface.call(a(c), "toggle");
	    }).on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function (b) {
	      var c = a(b.target).closest(k.BUTTON)[0];a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type));
	    }), a.fn[b] = m._jQueryInterface, a.fn[b].Constructor = m, a.fn[b].noConflict = function () {
	      return a.fn[b] = i, m._jQueryInterface;
	    }, m;
	  }(jQuery), function (a) {
	    var b = "carousel",
	        d = "4.0.0-alpha.3",
	        g = "bs.carousel",
	        h = "." + g,
	        i = ".data-api",
	        j = a.fn[b],
	        k = 600,
	        l = 37,
	        m = 39,
	        n = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
	        o = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
	        p = { NEXT: "next", PREVIOUS: "prev" },
	        q = { SLIDE: "slide" + h, SLID: "slid" + h, KEYDOWN: "keydown" + h, MOUSEENTER: "mouseenter" + h, MOUSELEAVE: "mouseleave" + h, LOAD_DATA_API: "load" + h + i, CLICK_DATA_API: "click" + h + i },
	        r = { CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "right", LEFT: "left", ITEM: "carousel-item" },
	        s = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".next, .prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
	        t = function () {
	      function i(b, d) {
	        c(this, i), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(d), this._element = a(b)[0], this._indicatorsElement = a(this._element).find(s.INDICATORS)[0], this._addEventListeners();
	      }return e(i, [{ key: "next", value: function value() {
	          this._isSliding || this._slide(p.NEXT);
	        } }, { key: "nextWhenVisible", value: function value() {
	          document.hidden || this.next();
	        } }, { key: "prev", value: function value() {
	          this._isSliding || this._slide(p.PREVIOUS);
	        } }, { key: "pause", value: function value(b) {
	          b || (this._isPaused = !0), a(this._element).find(s.NEXT_PREV)[0] && f.supportsTransitionEnd() && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
	        } }, { key: "cycle", value: function value(b) {
	          b || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(a.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval));
	        } }, { key: "to", value: function value(b) {
	          var c = this;this._activeElement = a(this._element).find(s.ACTIVE_ITEM)[0];var d = this._getItemIndex(this._activeElement);if (!(b > this._items.length - 1 || b < 0)) {
	            if (this._isSliding) return void a(this._element).one(q.SLID, function () {
	              return c.to(b);
	            });if (d === b) return this.pause(), void this.cycle();var e = b > d ? p.NEXT : p.PREVIOUS;this._slide(e, this._items[b]);
	          }
	        } }, { key: "dispose", value: function value() {
	          a(this._element).off(h), a.removeData(this._element, g), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
	        } }, { key: "_getConfig", value: function value(c) {
	          return c = a.extend({}, n, c), f.typeCheckConfig(b, c, o), c;
	        } }, { key: "_addEventListeners", value: function value() {
	          this._config.keyboard && a(this._element).on(q.KEYDOWN, a.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || a(this._element).on(q.MOUSEENTER, a.proxy(this.pause, this)).on(q.MOUSELEAVE, a.proxy(this.cycle, this));
	        } }, { key: "_keydown", value: function value(a) {
	          if (a.preventDefault(), !/input|textarea/i.test(a.target.tagName)) switch (a.which) {case l:
	              this.prev();break;case m:
	              this.next();break;default:
	              return;}
	        } }, { key: "_getItemIndex", value: function value(b) {
	          return this._items = a.makeArray(a(b).parent().find(s.ITEM)), this._items.indexOf(b);
	        } }, { key: "_getItemByDirection", value: function value(a, b) {
	          var c = a === p.NEXT,
	              d = a === p.PREVIOUS,
	              e = this._getItemIndex(b),
	              f = this._items.length - 1,
	              g = d && 0 === e || c && e === f;if (g && !this._config.wrap) return b;var h = a === p.PREVIOUS ? -1 : 1,
	              i = (e + h) % this._items.length;return i === -1 ? this._items[this._items.length - 1] : this._items[i];
	        } }, { key: "_triggerSlideEvent", value: function value(b, c) {
	          var d = a.Event(q.SLIDE, { relatedTarget: b, direction: c });return a(this._element).trigger(d), d;
	        } }, { key: "_setActiveIndicatorElement", value: function value(b) {
	          if (this._indicatorsElement) {
	            a(this._indicatorsElement).find(s.ACTIVE).removeClass(r.ACTIVE);var c = this._indicatorsElement.children[this._getItemIndex(b)];c && a(c).addClass(r.ACTIVE);
	          }
	        } }, { key: "_slide", value: function value(b, c) {
	          var d = this,
	              e = a(this._element).find(s.ACTIVE_ITEM)[0],
	              g = c || e && this._getItemByDirection(b, e),
	              h = Boolean(this._interval),
	              i = b === p.NEXT ? r.LEFT : r.RIGHT;if (g && a(g).hasClass(r.ACTIVE)) return void (this._isSliding = !1);var j = this._triggerSlideEvent(g, i);if (!j.isDefaultPrevented() && e && g) {
	            this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(g);var l = a.Event(q.SLID, { relatedTarget: g, direction: i });f.supportsTransitionEnd() && a(this._element).hasClass(r.SLIDE) ? (a(g).addClass(b), f.reflow(g), a(e).addClass(i), a(g).addClass(i), a(e).one(f.TRANSITION_END, function () {
	              a(g).removeClass(i).removeClass(b), a(g).addClass(r.ACTIVE), a(e).removeClass(r.ACTIVE).removeClass(b).removeClass(i), d._isSliding = !1, setTimeout(function () {
	                return a(d._element).trigger(l);
	              }, 0);
	            }).emulateTransitionEnd(k)) : (a(e).removeClass(r.ACTIVE), a(g).addClass(r.ACTIVE), this._isSliding = !1, a(this._element).trigger(l)), h && this.cycle();
	          }
	        } }], [{ key: "_jQueryInterface", value: function value(b) {
	          return this.each(function () {
	            var c = a(this).data(g),
	                d = a.extend({}, n, a(this).data());"object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && a.extend(d, b);var e = "string" == typeof b ? b : d.slide;if (c || (c = new i(this, d), a(this).data(g, c)), "number" == typeof b) c.to(b);else if ("string" == typeof e) {
	              if (void 0 === c[e]) throw new Error('No method named "' + e + '"');c[e]();
	            } else d.interval && (c.pause(), c.cycle());
	          });
	        } }, { key: "_dataApiClickHandler", value: function value(b) {
	          var c = f.getSelectorFromElement(this);if (c) {
	            var d = a(c)[0];if (d && a(d).hasClass(r.CAROUSEL)) {
	              var e = a.extend({}, a(d).data(), a(this).data()),
	                  h = this.getAttribute("data-slide-to");h && (e.interval = !1), i._jQueryInterface.call(a(d), e), h && a(d).data(g).to(h), b.preventDefault();
	            }
	          }
	        } }, { key: "VERSION", get: function get() {
	          return d;
	        } }, { key: "Default", get: function get() {
	          return n;
	        } }]), i;
	    }();return a(document).on(q.CLICK_DATA_API, s.DATA_SLIDE, t._dataApiClickHandler), a(window).on(q.LOAD_DATA_API, function () {
	      a(s.DATA_RIDE).each(function () {
	        var b = a(this);t._jQueryInterface.call(b, b.data());
	      });
	    }), a.fn[b] = t._jQueryInterface, a.fn[b].Constructor = t, a.fn[b].noConflict = function () {
	      return a.fn[b] = j, t._jQueryInterface;
	    }, t;
	  }(jQuery), function (a) {
	    var b = "collapse",
	        d = "4.0.0-alpha.3",
	        g = "bs.collapse",
	        h = "." + g,
	        i = ".data-api",
	        j = a.fn[b],
	        k = 600,
	        l = { toggle: !0, parent: "" },
	        m = { toggle: "boolean", parent: "string" },
	        n = { SHOW: "show" + h, SHOWN: "shown" + h, HIDE: "hide" + h, HIDDEN: "hidden" + h, CLICK_DATA_API: "click" + h + i },
	        o = { IN: "in", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
	        p = { WIDTH: "width", HEIGHT: "height" },
	        q = { ACTIVES: ".panel > .in, .panel > .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
	        r = function () {
	      function h(b, d) {
	        c(this, h), this._isTransitioning = !1, this._element = b, this._config = this._getConfig(d), this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],' + ('[data-toggle="collapse"][data-target="#' + b.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
	      }return e(h, [{ key: "toggle", value: function value() {
	          a(this._element).hasClass(o.IN) ? this.hide() : this.show();
	        } }, { key: "show", value: function value() {
	          var b = this;if (!this._isTransitioning && !a(this._element).hasClass(o.IN)) {
	            var c = void 0,
	                d = void 0;if (this._parent && (c = a.makeArray(a(q.ACTIVES)), c.length || (c = null)), !(c && (d = a(c).data(g), d && d._isTransitioning))) {
	              var e = a.Event(n.SHOW);if (a(this._element).trigger(e), !e.isDefaultPrevented()) {
	                c && (h._jQueryInterface.call(a(c), "hide"), d || a(c).data(g, null));var i = this._getDimension();a(this._element).removeClass(o.COLLAPSE).addClass(o.COLLAPSING), this._element.style[i] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && a(this._triggerArray).removeClass(o.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);var j = function j() {
	                  a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).addClass(o.IN), b._element.style[i] = "", b.setTransitioning(!1), a(b._element).trigger(n.SHOWN);
	                };if (!f.supportsTransitionEnd()) return void j();var l = i[0].toUpperCase() + i.slice(1),
	                    m = "scroll" + l;a(this._element).one(f.TRANSITION_END, j).emulateTransitionEnd(k), this._element.style[i] = this._element[m] + "px";
	              }
	            }
	          }
	        } }, { key: "hide", value: function value() {
	          var b = this;if (!this._isTransitioning && a(this._element).hasClass(o.IN)) {
	            var c = a.Event(n.HIDE);if (a(this._element).trigger(c), !c.isDefaultPrevented()) {
	              var d = this._getDimension(),
	                  e = d === p.WIDTH ? "offsetWidth" : "offsetHeight";this._element.style[d] = this._element[e] + "px", f.reflow(this._element), a(this._element).addClass(o.COLLAPSING).removeClass(o.COLLAPSE).removeClass(o.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && a(this._triggerArray).addClass(o.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);var g = function g() {
	                b.setTransitioning(!1), a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).trigger(n.HIDDEN);
	              };return this._element.style[d] = 0, f.supportsTransitionEnd() ? void a(this._element).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : void g();
	            }
	          }
	        } }, { key: "setTransitioning", value: function value(a) {
	          this._isTransitioning = a;
	        } }, { key: "dispose", value: function value() {
	          a.removeData(this._element, g), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
	        } }, { key: "_getConfig", value: function value(c) {
	          return c = a.extend({}, l, c), c.toggle = Boolean(c.toggle), f.typeCheckConfig(b, c, m), c;
	        } }, { key: "_getDimension", value: function value() {
	          var b = a(this._element).hasClass(p.WIDTH);return b ? p.WIDTH : p.HEIGHT;
	        } }, { key: "_getParent", value: function value() {
	          var b = this,
	              c = a(this._config.parent)[0],
	              d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return a(c).find(d).each(function (a, c) {
	            b._addAriaAndCollapsedClass(h._getTargetFromElement(c), [c]);
	          }), c;
	        } }, { key: "_addAriaAndCollapsedClass", value: function value(b, c) {
	          if (b) {
	            var d = a(b).hasClass(o.IN);b.setAttribute("aria-expanded", d), c.length && a(c).toggleClass(o.COLLAPSED, !d).attr("aria-expanded", d);
	          }
	        } }], [{ key: "_getTargetFromElement", value: function value(b) {
	          var c = f.getSelectorFromElement(b);return c ? a(c)[0] : null;
	        } }, { key: "_jQueryInterface", value: function value(b) {
	          return this.each(function () {
	            var c = a(this),
	                d = c.data(g),
	                e = a.extend({}, l, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);if (!d && e.toggle && /show|hide/.test(b) && (e.toggle = !1), d || (d = new h(this, e), c.data(g, d)), "string" == typeof b) {
	              if (void 0 === d[b]) throw new Error('No method named "' + b + '"');d[b]();
	            }
	          });
	        } }, { key: "VERSION", get: function get() {
	          return d;
	        } }, { key: "Default", get: function get() {
	          return l;
	        } }]), h;
	    }();return a(document).on(n.CLICK_DATA_API, q.DATA_TOGGLE, function (b) {
	      b.preventDefault();var c = r._getTargetFromElement(this),
	          d = a(c).data(g),
	          e = d ? "toggle" : a(this).data();r._jQueryInterface.call(a(c), e);
	    }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function () {
	      return a.fn[b] = j, r._jQueryInterface;
	    }, r;
	  }(jQuery), function (a) {
	    var b = "dropdown",
	        d = "4.0.0-alpha.3",
	        g = "bs.dropdown",
	        h = "." + g,
	        i = ".data-api",
	        j = a.fn[b],
	        k = 27,
	        l = 38,
	        m = 40,
	        n = 3,
	        o = { HIDE: "hide" + h, HIDDEN: "hidden" + h, SHOW: "show" + h, SHOWN: "shown" + h, CLICK: "click" + h, CLICK_DATA_API: "click" + h + i, KEYDOWN_DATA_API: "keydown" + h + i },
	        p = { BACKDROP: "dropdown-backdrop", DISABLED: "disabled", OPEN: "open" },
	        q = { BACKDROP: ".dropdown-backdrop", DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", ROLE_MENU: '[role="menu"]', ROLE_LISTBOX: '[role="listbox"]', NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a' },
	        r = function () {
	      function b(a) {
	        c(this, b), this._element = a, this._addEventListeners();
	      }return e(b, [{ key: "toggle", value: function value() {
	          if (this.disabled || a(this).hasClass(p.DISABLED)) return !1;var c = b._getParentFromElement(this),
	              d = a(c).hasClass(p.OPEN);if (b._clearMenus(), d) return !1;if ("ontouchstart" in document.documentElement && !a(c).closest(q.NAVBAR_NAV).length) {
	            var e = document.createElement("div");e.className = p.BACKDROP, a(e).insertBefore(this), a(e).on("click", b._clearMenus);
	          }var f = { relatedTarget: this },
	              g = a.Event(o.SHOW, f);return a(c).trigger(g), !g.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), a(c).toggleClass(p.OPEN), a(c).trigger(a.Event(o.SHOWN, f)), !1);
	        } }, { key: "dispose", value: function value() {
	          a.removeData(this._element, g), a(this._element).off(h), this._element = null;
	        } }, { key: "_addEventListeners", value: function value() {
	          a(this._element).on(o.CLICK, this.toggle);
	        } }], [{ key: "_jQueryInterface", value: function value(c) {
	          return this.each(function () {
	            var d = a(this).data(g);if (d || a(this).data(g, d = new b(this)), "string" == typeof c) {
	              if (void 0 === d[c]) throw new Error('No method named "' + c + '"');d[c].call(this);
	            }
	          });
	        } }, { key: "_clearMenus", value: function value(c) {
	          if (!c || c.which !== n) {
	            var d = a(q.BACKDROP)[0];d && d.parentNode.removeChild(d);for (var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0; f < e.length; f++) {
	              var g = b._getParentFromElement(e[f]),
	                  h = { relatedTarget: e[f] };if (a(g).hasClass(p.OPEN) && !(c && "click" === c.type && /input|textarea/i.test(c.target.tagName) && a.contains(g, c.target))) {
	                var i = a.Event(o.HIDE, h);a(g).trigger(i), i.isDefaultPrevented() || (e[f].setAttribute("aria-expanded", "false"), a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN, h)));
	              }
	            }
	          }
	        } }, { key: "_getParentFromElement", value: function value(b) {
	          var c = void 0,
	              d = f.getSelectorFromElement(b);return d && (c = a(d)[0]), c || b.parentNode;
	        } }, { key: "_dataApiKeydownHandler", value: function value(c) {
	          if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName) && (c.preventDefault(), c.stopPropagation(), !this.disabled && !a(this).hasClass(p.DISABLED))) {
	            var d = b._getParentFromElement(this),
	                e = a(d).hasClass(p.OPEN);if (!e && c.which !== k || e && c.which === k) {
	              if (c.which === k) {
	                var f = a(d).find(q.DATA_TOGGLE)[0];a(f).trigger("focus");
	              }return void a(this).trigger("click");
	            }var g = a.makeArray(a(q.VISIBLE_ITEMS));if (g = g.filter(function (a) {
	              return a.offsetWidth || a.offsetHeight;
	            }), g.length) {
	              var h = g.indexOf(c.target);c.which === l && h > 0 && h--, c.which === m && h < g.length - 1 && h++, h < 0 && (h = 0), g[h].focus();
	            }
	          }
	        } }, { key: "VERSION", get: function get() {
	          return d;
	        } }]), b;
	    }();return a(document).on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler).on(o.CLICK_DATA_API, r._clearMenus).on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle).on(o.CLICK_DATA_API, q.FORM_CHILD, function (a) {
	      a.stopPropagation();
	    }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function () {
	      return a.fn[b] = j, r._jQueryInterface;
	    }, r;
	  }(jQuery), function (a) {
	    var b = "modal",
	        d = "4.0.0-alpha.3",
	        g = "bs.modal",
	        h = "." + g,
	        i = ".data-api",
	        j = a.fn[b],
	        k = 300,
	        l = 150,
	        m = 27,
	        n = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
	        o = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
	        p = { HIDE: "hide" + h, HIDDEN: "hidden" + h, SHOW: "show" + h, SHOWN: "shown" + h, FOCUSIN: "focusin" + h, RESIZE: "resize" + h, CLICK_DISMISS: "click.dismiss" + h, KEYDOWN_DISMISS: "keydown.dismiss" + h, MOUSEUP_DISMISS: "mouseup.dismiss" + h, MOUSEDOWN_DISMISS: "mousedown.dismiss" + h, CLICK_DATA_API: "click" + h + i },
	        q = { SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", IN: "in" },
	        r = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed" },
	        s = function () {
	      function i(b, d) {
	        c(this, i), this._config = this._getConfig(d), this._element = b, this._dialog = a(b).find(r.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
	      }return e(i, [{ key: "toggle", value: function value(a) {
	          return this._isShown ? this.hide() : this.show(a);
	        } }, { key: "show", value: function value(b) {
	          var c = this,
	              d = a.Event(p.SHOW, { relatedTarget: b });a(this._element).trigger(d), this._isShown || d.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), a(document.body).addClass(q.OPEN), this._setEscapeEvent(), this._setResizeEvent(), a(this._element).on(p.CLICK_DISMISS, r.DATA_DISMISS, a.proxy(this.hide, this)), a(this._dialog).on(p.MOUSEDOWN_DISMISS, function () {
	            a(c._element).one(p.MOUSEUP_DISMISS, function (b) {
	              a(b.target).is(c._element) && (c._ignoreBackdropClick = !0);
	            });
	          }), this._showBackdrop(a.proxy(this._showElement, this, b)));
	        } }, { key: "hide", value: function value(b) {
	          b && b.preventDefault();var c = a.Event(p.HIDE);a(this._element).trigger(c), this._isShown && !c.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), a(document).off(p.FOCUSIN), a(this._element).removeClass(q.IN), a(this._element).off(p.CLICK_DISMISS), a(this._dialog).off(p.MOUSEDOWN_DISMISS), f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE) ? a(this._element).one(f.TRANSITION_END, a.proxy(this._hideModal, this)).emulateTransitionEnd(k) : this._hideModal());
	        } }, { key: "dispose", value: function value() {
	          a.removeData(this._element, g), a(window).off(h), a(document).off(h), a(this._element).off(h), a(this._backdrop).off(h), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null;
	        } }, { key: "_getConfig", value: function value(c) {
	          return c = a.extend({}, n, c), f.typeCheckConfig(b, c, o), c;
	        } }, { key: "_showElement", value: function value(b) {
	          var c = this,
	              d = f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, d && f.reflow(this._element), a(this._element).addClass(q.IN), this._config.focus && this._enforceFocus();var e = a.Event(p.SHOWN, { relatedTarget: b }),
	              g = function g() {
	            c._config.focus && c._element.focus(), a(c._element).trigger(e);
	          };d ? a(this._dialog).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : g();
	        } }, { key: "_enforceFocus", value: function value() {
	          var b = this;a(document).off(p.FOCUSIN).on(p.FOCUSIN, function (c) {
	            document === c.target || b._element === c.target || a(b._element).has(c.target).length || b._element.focus();
	          });
	        } }, { key: "_setEscapeEvent", value: function value() {
	          var b = this;this._isShown && this._config.keyboard ? a(this._element).on(p.KEYDOWN_DISMISS, function (a) {
	            a.which === m && b.hide();
	          }) : this._isShown || a(this._element).off(p.KEYDOWN_DISMISS);
	        } }, { key: "_setResizeEvent", value: function value() {
	          this._isShown ? a(window).on(p.RESIZE, a.proxy(this._handleUpdate, this)) : a(window).off(p.RESIZE);
	        } }, { key: "_hideModal", value: function value() {
	          var b = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function () {
	            a(document.body).removeClass(q.OPEN), b._resetAdjustments(), b._resetScrollbar(), a(b._element).trigger(p.HIDDEN);
	          });
	        } }, { key: "_removeBackdrop", value: function value() {
	          this._backdrop && (a(this._backdrop).remove(), this._backdrop = null);
	        } }, { key: "_showBackdrop", value: function value(b) {
	          var c = this,
	              d = a(this._element).hasClass(q.FADE) ? q.FADE : "";if (this._isShown && this._config.backdrop) {
	            var e = f.supportsTransitionEnd() && d;if (this._backdrop = document.createElement("div"), this._backdrop.className = q.BACKDROP, d && a(this._backdrop).addClass(d), a(this._backdrop).appendTo(document.body), a(this._element).on(p.CLICK_DISMISS, function (a) {
	              return c._ignoreBackdropClick ? void (c._ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide()));
	            }), e && f.reflow(this._backdrop), a(this._backdrop).addClass(q.IN), !b) return;if (!e) return void b();a(this._backdrop).one(f.TRANSITION_END, b).emulateTransitionEnd(l);
	          } else if (!this._isShown && this._backdrop) {
	            a(this._backdrop).removeClass(q.IN);var g = function g() {
	              c._removeBackdrop(), b && b();
	            };f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE) ? a(this._backdrop).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : g();
	          } else b && b();
	        } }, { key: "_handleUpdate", value: function value() {
	          this._adjustDialog();
	        } }, { key: "_adjustDialog", value: function value() {
	          var a = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px");
	        } }, { key: "_resetAdjustments", value: function value() {
	          this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
	        } }, { key: "_checkScrollbar", value: function value() {
	          this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
	        } }, { key: "_setScrollbar", value: function value() {
	          var b = parseInt(a(r.FIXED_CONTENT).css("padding-right") || 0, 10);this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = b + this._scrollbarWidth + "px");
	        } }, { key: "_resetScrollbar", value: function value() {
	          document.body.style.paddingRight = this._originalBodyPadding;
	        } }, { key: "_getScrollbarWidth", value: function value() {
	          var a = document.createElement("div");a.className = q.SCROLLBAR_MEASURER, document.body.appendChild(a);var b = a.offsetWidth - a.clientWidth;return document.body.removeChild(a), b;
	        } }], [{ key: "_jQueryInterface", value: function value(b, c) {
	          return this.each(function () {
	            var d = a(this).data(g),
	                e = a.extend({}, i.Default, a(this).data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);if (d || (d = new i(this, e), a(this).data(g, d)), "string" == typeof b) {
	              if (void 0 === d[b]) throw new Error('No method named "' + b + '"');d[b](c);
	            } else e.show && d.show(c);
	          });
	        } }, { key: "VERSION", get: function get() {
	          return d;
	        } }, { key: "Default", get: function get() {
	          return n;
	        } }]), i;
	    }();return a(document).on(p.CLICK_DATA_API, r.DATA_TOGGLE, function (b) {
	      var c = this,
	          d = void 0,
	          e = f.getSelectorFromElement(this);e && (d = a(e)[0]);var h = a(d).data(g) ? "toggle" : a.extend({}, a(d).data(), a(this).data());"A" === this.tagName && b.preventDefault();var i = a(d).one(p.SHOW, function (b) {
	        b.isDefaultPrevented() || i.one(p.HIDDEN, function () {
	          a(c).is(":visible") && c.focus();
	        });
	      });s._jQueryInterface.call(a(d), h, this);
	    }), a.fn[b] = s._jQueryInterface, a.fn[b].Constructor = s, a.fn[b].noConflict = function () {
	      return a.fn[b] = j, s._jQueryInterface;
	    }, s;
	  }(jQuery), function (a) {
	    var b = "scrollspy",
	        d = "4.0.0-alpha.3",
	        g = "bs.scrollspy",
	        h = "." + g,
	        i = ".data-api",
	        j = a.fn[b],
	        k = { offset: 10, method: "auto", target: "" },
	        l = { offset: "number", method: "string", target: "(string|element)" },
	        m = { ACTIVATE: "activate" + h, SCROLL: "scroll" + h, LOAD_DATA_API: "load" + h + i },
	        n = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", NAV_LINK: "nav-link", NAV: "nav", ACTIVE: "active" },
	        o = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", LIST_ITEM: ".list-item", LI: "li", LI_DROPDOWN: "li.dropdown", NAV_LINKS: ".nav-link", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
	        p = { OFFSET: "offset", POSITION: "position" },
	        q = function () {
	      function i(b, d) {
	        c(this, i), this._element = b, this._scrollElement = "BODY" === b.tagName ? window : b, this._config = this._getConfig(d), this._selector = this._config.target + " " + o.NAV_LINKS + "," + (this._config.target + " " + o.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, a(this._scrollElement).on(m.SCROLL, a.proxy(this._process, this)), this.refresh(), this._process();
	      }return e(i, [{ key: "refresh", value: function value() {
	          var b = this,
	              c = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET,
	              d = "auto" === this._config.method ? c : this._config.method,
	              e = d === p.POSITION ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();var g = a.makeArray(a(this._selector));g.map(function (b) {
	            var c = void 0,
	                g = f.getSelectorFromElement(b);return g && (c = a(g)[0]), c && (c.offsetWidth || c.offsetHeight) ? [a(c)[d]().top + e, g] : null;
	          }).filter(function (a) {
	            return a;
	          }).sort(function (a, b) {
	            return a[0] - b[0];
	          }).forEach(function (a) {
	            b._offsets.push(a[0]), b._targets.push(a[1]);
	          });
	        } }, { key: "dispose", value: function value() {
	          a.removeData(this._element, g), a(this._scrollElement).off(h), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
	        } }, { key: "_getConfig", value: function value(c) {
	          if (c = a.extend({}, k, c), "string" != typeof c.target) {
	            var d = a(c.target).attr("id");d || (d = f.getUID(b), a(c.target).attr("id", d)), c.target = "#" + d;
	          }return f.typeCheckConfig(b, c, l), c;
	        } }, { key: "_getScrollTop", value: function value() {
	          return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop;
	        } }, { key: "_getScrollHeight", value: function value() {
	          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
	        } }, { key: "_process", value: function value() {
	          var a = this._getScrollTop() + this._config.offset,
	              b = this._getScrollHeight(),
	              c = this._config.offset + b - this._scrollElement.offsetHeight;if (this._scrollHeight !== b && this.refresh(), a >= c) {
	            var d = this._targets[this._targets.length - 1];this._activeTarget !== d && this._activate(d);
	          }if (this._activeTarget && a < this._offsets[0]) return this._activeTarget = null, void this._clear();for (var e = this._offsets.length; e--;) {
	            var f = this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]);f && this._activate(this._targets[e]);
	          }
	        } }, { key: "_activate", value: function value(b) {
	          this._activeTarget = b, this._clear();var c = this._selector.split(",");c = c.map(function (a) {
	            return a + '[data-target="' + b + '"],' + (a + '[href="' + b + '"]');
	          });var d = a(c.join(","));d.hasClass(n.DROPDOWN_ITEM) ? (d.closest(o.DROPDOWN).find(o.DROPDOWN_TOGGLE).addClass(n.ACTIVE), d.addClass(n.ACTIVE)) : d.parents(o.LI).find(o.NAV_LINKS).addClass(n.ACTIVE), a(this._scrollElement).trigger(m.ACTIVATE, { relatedTarget: b });
	        } }, { key: "_clear", value: function value() {
	          a(this._selector).filter(o.ACTIVE).removeClass(n.ACTIVE);
	        } }], [{ key: "_jQueryInterface", value: function value(b) {
	          return this.each(function () {
	            var c = a(this).data(g),
	                d = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b || null;if (c || (c = new i(this, d), a(this).data(g, c)), "string" == typeof b) {
	              if (void 0 === c[b]) throw new Error('No method named "' + b + '"');c[b]();
	            }
	          });
	        } }, { key: "VERSION", get: function get() {
	          return d;
	        } }, { key: "Default", get: function get() {
	          return k;
	        } }]), i;
	    }();return a(window).on(m.LOAD_DATA_API, function () {
	      for (var b = a.makeArray(a(o.DATA_SPY)), c = b.length; c--;) {
	        var d = a(b[c]);q._jQueryInterface.call(d, d.data());
	      }
	    }), a.fn[b] = q._jQueryInterface, a.fn[b].Constructor = q, a.fn[b].noConflict = function () {
	      return a.fn[b] = j, q._jQueryInterface;
	    }, q;
	  }(jQuery), function (a) {
	    var b = "tab",
	        d = "4.0.0-alpha.3",
	        g = "bs.tab",
	        h = "." + g,
	        i = ".data-api",
	        j = a.fn[b],
	        k = 150,
	        l = { HIDE: "hide" + h, HIDDEN: "hidden" + h, SHOW: "show" + h, SHOWN: "shown" + h, CLICK_DATA_API: "click" + h + i },
	        m = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", FADE: "fade", IN: "in" },
	        n = { A: "a", LI: "li", DROPDOWN: ".dropdown", UL: "ul:not(.dropdown-menu)", FADE_CHILD: "> .nav-item .fade, > .fade",
	      ACTIVE: ".active", ACTIVE_CHILD: "> .nav-item > .active, > .active", DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]', DROPDOWN_TOGGLE: ".dropdown-toggle", DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active" },
	        o = function () {
	      function b(a) {
	        c(this, b), this._element = a;
	      }return e(b, [{ key: "show", value: function value() {
	          var b = this;if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !a(this._element).hasClass(m.ACTIVE)) {
	            var c = void 0,
	                d = void 0,
	                e = a(this._element).closest(n.UL)[0],
	                g = f.getSelectorFromElement(this._element);e && (d = a.makeArray(a(e).find(n.ACTIVE)), d = d[d.length - 1]);var h = a.Event(l.HIDE, { relatedTarget: this._element }),
	                i = a.Event(l.SHOW, { relatedTarget: d });if (d && a(d).trigger(h), a(this._element).trigger(i), !i.isDefaultPrevented() && !h.isDefaultPrevented()) {
	              g && (c = a(g)[0]), this._activate(this._element, e);var j = function j() {
	                var c = a.Event(l.HIDDEN, { relatedTarget: b._element }),
	                    e = a.Event(l.SHOWN, { relatedTarget: d });a(d).trigger(c), a(b._element).trigger(e);
	              };c ? this._activate(c, c.parentNode, j) : j();
	            }
	          }
	        } }, { key: "dispose", value: function value() {
	          a.removeClass(this._element, g), this._element = null;
	        } }, { key: "_activate", value: function value(b, c, d) {
	          var e = a(c).find(n.ACTIVE_CHILD)[0],
	              g = d && f.supportsTransitionEnd() && (e && a(e).hasClass(m.FADE) || Boolean(a(c).find(n.FADE_CHILD)[0])),
	              h = a.proxy(this._transitionComplete, this, b, e, g, d);e && g ? a(e).one(f.TRANSITION_END, h).emulateTransitionEnd(k) : h(), e && a(e).removeClass(m.IN);
	        } }, { key: "_transitionComplete", value: function value(b, c, d, e) {
	          if (c) {
	            a(c).removeClass(m.ACTIVE);var g = a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];g && a(g).removeClass(m.ACTIVE), c.setAttribute("aria-expanded", !1);
	          }if (a(b).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0), d ? (f.reflow(b), a(b).addClass(m.IN)) : a(b).removeClass(m.FADE), b.parentNode && a(b.parentNode).hasClass(m.DROPDOWN_MENU)) {
	            var h = a(b).closest(n.DROPDOWN)[0];h && a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0);
	          }e && e();
	        } }], [{ key: "_jQueryInterface", value: function value(c) {
	          return this.each(function () {
	            var d = a(this),
	                e = d.data(g);if (e || (e = e = new b(this), d.data(g, e)), "string" == typeof c) {
	              if (void 0 === e[c]) throw new Error('No method named "' + c + '"');e[c]();
	            }
	          });
	        } }, { key: "VERSION", get: function get() {
	          return d;
	        } }]), b;
	    }();return a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function (b) {
	      b.preventDefault(), o._jQueryInterface.call(a(this), "show");
	    }), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function () {
	      return a.fn[b] = j, o._jQueryInterface;
	    }, o;
	  }(jQuery), function (a) {
	    if (void 0 === __webpack_provided_window_dot_Tether) throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");var b = "tooltip",
	        d = "4.0.0-alpha.3",
	        g = "bs.tooltip",
	        h = "." + g,
	        i = a.fn[b],
	        j = 150,
	        k = "bs-tether",
	        l = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: "0 0", constraints: [] },
	        m = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "string", constraints: "array" },
	        n = { TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right" },
	        o = { IN: "in", OUT: "out" },
	        p = { HIDE: "hide" + h, HIDDEN: "hidden" + h, SHOW: "show" + h, SHOWN: "shown" + h, INSERTED: "inserted" + h, CLICK: "click" + h, FOCUSIN: "focusin" + h, FOCUSOUT: "focusout" + h, MOUSEENTER: "mouseenter" + h, MOUSELEAVE: "mouseleave" + h },
	        q = { FADE: "fade", IN: "in" },
	        r = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner" },
	        s = { element: !1, enabled: !1 },
	        t = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" },
	        u = function () {
	      function i(a, b) {
	        c(this, i), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = a, this.config = this._getConfig(b), this.tip = null, this._setListeners();
	      }return e(i, [{ key: "enable", value: function value() {
	          this._isEnabled = !0;
	        } }, { key: "disable", value: function value() {
	          this._isEnabled = !1;
	        } }, { key: "toggleEnabled", value: function value() {
	          this._isEnabled = !this._isEnabled;
	        } }, { key: "toggle", value: function value(b) {
	          if (b) {
	            var c = this.constructor.DATA_KEY,
	                d = a(b.currentTarget).data(c);d || (d = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(c, d)), d._activeTrigger.click = !d._activeTrigger.click, d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d);
	          } else {
	            if (a(this.getTipElement()).hasClass(q.IN)) return void this._leave(null, this);this._enter(null, this);
	          }
	        } }, { key: "dispose", value: function value() {
	          clearTimeout(this._timeout), this.cleanupTether(), a.removeData(this.element, this.constructor.DATA_KEY), a(this.element).off(this.constructor.EVENT_KEY), this.tip && a(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null;
	        } }, { key: "show", value: function value() {
	          var b = this,
	              c = a.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
	            a(this.element).trigger(c);var d = a.contains(this.element.ownerDocument.documentElement, this.element);if (c.isDefaultPrevented() || !d) return;var e = this.getTipElement(),
	                g = f.getUID(this.constructor.NAME);e.setAttribute("id", g), this.element.setAttribute("aria-describedby", g), this.setContent(), this.config.animation && a(e).addClass(q.FADE);var h = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement,
	                j = this._getAttachment(h);a(e).data(this.constructor.DATA_KEY, this).appendTo(document.body), a(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({ attachment: j, element: e, target: this.element, classes: s, classPrefix: k, offset: this.config.offset, constraints: this.config.constraints, addTargetClasses: !1 }), f.reflow(e), this._tether.position(), a(e).addClass(q.IN);var l = function l() {
	              var c = b._hoverState;b._hoverState = null, a(b.element).trigger(b.constructor.Event.SHOWN), c === o.OUT && b._leave(null, b);
	            };if (f.supportsTransitionEnd() && a(this.tip).hasClass(q.FADE)) return void a(this.tip).one(f.TRANSITION_END, l).emulateTransitionEnd(i._TRANSITION_DURATION);l();
	          }
	        } }, { key: "hide", value: function value(b) {
	          var c = this,
	              d = this.getTipElement(),
	              e = a.Event(this.constructor.Event.HIDE),
	              g = function g() {
	            c._hoverState !== o.IN && d.parentNode && d.parentNode.removeChild(d), c.element.removeAttribute("aria-describedby"), a(c.element).trigger(c.constructor.Event.HIDDEN), c.cleanupTether(), b && b();
	          };a(this.element).trigger(e), e.isDefaultPrevented() || (a(d).removeClass(q.IN), f.supportsTransitionEnd() && a(this.tip).hasClass(q.FADE) ? a(d).one(f.TRANSITION_END, g).emulateTransitionEnd(j) : g(), this._hoverState = "");
	        } }, { key: "isWithContent", value: function value() {
	          return Boolean(this.getTitle());
	        } }, { key: "getTipElement", value: function value() {
	          return this.tip = this.tip || a(this.config.template)[0];
	        } }, { key: "setContent", value: function value() {
	          var b = a(this.getTipElement());this.setElementContent(b.find(r.TOOLTIP_INNER), this.getTitle()), b.removeClass(q.FADE).removeClass(q.IN), this.cleanupTether();
	        } }, { key: "setElementContent", value: function value(b, c) {
	          var d = this.config.html;"object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && (c.nodeType || c.jquery) ? d ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()) : b[d ? "html" : "text"](c);
	        } }, { key: "getTitle", value: function value() {
	          var a = this.element.getAttribute("data-original-title");return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), a;
	        } }, { key: "cleanupTether", value: function value() {
	          this._tether && this._tether.destroy();
	        } }, { key: "_getAttachment", value: function value(a) {
	          return n[a.toUpperCase()];
	        } }, { key: "_setListeners", value: function value() {
	          var b = this,
	              c = this.config.trigger.split(" ");c.forEach(function (c) {
	            if ("click" === c) a(b.element).on(b.constructor.Event.CLICK, b.config.selector, a.proxy(b.toggle, b));else if (c !== t.MANUAL) {
	              var d = c === t.HOVER ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN,
	                  e = c === t.HOVER ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;a(b.element).on(d, b.config.selector, a.proxy(b._enter, b)).on(e, b.config.selector, a.proxy(b._leave, b));
	            }
	          }), this.config.selector ? this.config = a.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
	        } }, { key: "_fixTitle", value: function value() {
	          var a = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
	        } }, { key: "_enter", value: function value(b, c) {
	          var d = this.constructor.DATA_KEY;return c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusin" === b.type ? t.FOCUS : t.HOVER] = !0), a(c.getTipElement()).hasClass(q.IN) || c._hoverState === o.IN ? void (c._hoverState = o.IN) : (clearTimeout(c._timeout), c._hoverState = o.IN, c.config.delay && c.config.delay.show ? void (c._timeout = setTimeout(function () {
	            c._hoverState === o.IN && c.show();
	          }, c.config.delay.show)) : void c.show());
	        } }, { key: "_leave", value: function value(b, c) {
	          var d = this.constructor.DATA_KEY;if (c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusout" === b.type ? t.FOCUS : t.HOVER] = !1), !c._isWithActiveTrigger()) return clearTimeout(c._timeout), c._hoverState = o.OUT, c.config.delay && c.config.delay.hide ? void (c._timeout = setTimeout(function () {
	            c._hoverState === o.OUT && c.hide();
	          }, c.config.delay.hide)) : void c.hide();
	        } }, { key: "_isWithActiveTrigger", value: function value() {
	          for (var a in this._activeTrigger) {
	            if (this._activeTrigger[a]) return !0;
	          }return !1;
	        } }, { key: "_getConfig", value: function value(c) {
	          return c = a.extend({}, this.constructor.Default, a(this.element).data(), c), c.delay && "number" == typeof c.delay && (c.delay = { show: c.delay, hide: c.delay }), f.typeCheckConfig(b, c, this.constructor.DefaultType), c;
	        } }, { key: "_getDelegateConfig", value: function value() {
	          var a = {};if (this.config) for (var b in this.config) {
	            this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
	          }return a;
	        } }], [{ key: "_jQueryInterface", value: function value(b) {
	          return this.each(function () {
	            var c = a(this).data(g),
	                d = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) ? b : null;if ((c || !/destroy|hide/.test(b)) && (c || (c = new i(this, d), a(this).data(g, c)), "string" == typeof b)) {
	              if (void 0 === c[b]) throw new Error('No method named "' + b + '"');c[b]();
	            }
	          });
	        } }, { key: "VERSION", get: function get() {
	          return d;
	        } }, { key: "Default", get: function get() {
	          return l;
	        } }, { key: "NAME", get: function get() {
	          return b;
	        } }, { key: "DATA_KEY", get: function get() {
	          return g;
	        } }, { key: "Event", get: function get() {
	          return p;
	        } }, { key: "EVENT_KEY", get: function get() {
	          return h;
	        } }, { key: "DefaultType", get: function get() {
	          return m;
	        } }]), i;
	    }();return a.fn[b] = u._jQueryInterface, a.fn[b].Constructor = u, a.fn[b].noConflict = function () {
	      return a.fn[b] = i, u._jQueryInterface;
	    }, u;
	  }(jQuery));(function (a) {
	    var f = "popover",
	        h = "4.0.0-alpha.3",
	        i = "bs.popover",
	        j = "." + i,
	        k = a.fn[f],
	        l = a.extend({}, g.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }),
	        m = a.extend({}, g.DefaultType, { content: "(string|element|function)" }),
	        n = { FADE: "fade", IN: "in" },
	        o = { TITLE: ".popover-title", CONTENT: ".popover-content", ARROW: ".popover-arrow" },
	        p = { HIDE: "hide" + j, HIDDEN: "hidden" + j, SHOW: "show" + j, SHOWN: "shown" + j, INSERTED: "inserted" + j, CLICK: "click" + j, FOCUSIN: "focusin" + j, FOCUSOUT: "focusout" + j, MOUSEENTER: "mouseenter" + j, MOUSELEAVE: "mouseleave" + j },
	        q = function (g) {
	      function k() {
	        c(this, k), d(Object.getPrototypeOf(k.prototype), "constructor", this).apply(this, arguments);
	      }return b(k, g), e(k, [{ key: "isWithContent", value: function value() {
	          return this.getTitle() || this._getContent();
	        } }, { key: "getTipElement", value: function value() {
	          return this.tip = this.tip || a(this.config.template)[0];
	        } }, { key: "setContent", value: function value() {
	          var b = a(this.getTipElement());this.setElementContent(b.find(o.TITLE), this.getTitle()), this.setElementContent(b.find(o.CONTENT), this._getContent()), b.removeClass(n.FADE).removeClass(n.IN), this.cleanupTether();
	        } }, { key: "_getContent", value: function value() {
	          return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
	        } }], [{ key: "_jQueryInterface", value: function value(b) {
	          return this.each(function () {
	            var c = a(this).data(i),
	                d = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) ? b : null;if ((c || !/destroy|hide/.test(b)) && (c || (c = new k(this, d), a(this).data(i, c)), "string" == typeof b)) {
	              if (void 0 === c[b]) throw new Error('No method named "' + b + '"');c[b]();
	            }
	          });
	        } }, { key: "VERSION", get: function get() {
	          return h;
	        } }, { key: "Default", get: function get() {
	          return l;
	        } }, { key: "NAME", get: function get() {
	          return f;
	        } }, { key: "DATA_KEY", get: function get() {
	          return i;
	        } }, { key: "Event", get: function get() {
	          return p;
	        } }, { key: "EVENT_KEY", get: function get() {
	          return j;
	        } }, { key: "DefaultType", get: function get() {
	          return m;
	        } }]), k;
	    }(g);return a.fn[f] = q._jQueryInterface, a.fn[f].Constructor = q, a.fn[f].noConflict = function () {
	      return a.fn[f] = k, q._jQueryInterface;
	    }, q;
	  })(jQuery);
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(7), __webpack_require__(7)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*! tether 1.3.3 */
	
	(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	    module.exports = factory(require, exports, module);
	  } else {
	    root.Tether = factory();
	  }
	})(undefined, function (require, exports, module) {
	
	  'use strict';
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	  }();
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError('Cannot call a class as a function');
	    }
	  }
	
	  var TetherBase = undefined;
	  if (typeof TetherBase === 'undefined') {
	    TetherBase = { modules: [] };
	  }
	
	  var zeroElement = null;
	
	  // Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
	  // if the element lies within a nested document (<frame> or <iframe>-like).
	  function getActualBoundingClientRect(node) {
	    var boundingRect = node.getBoundingClientRect();
	
	    // The original object returned by getBoundingClientRect is immutable, so we clone it
	    // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
	    var rect = {};
	    for (var k in boundingRect) {
	      rect[k] = boundingRect[k];
	    }
	
	    if (node.ownerDocument !== document) {
	      var _frameElement = node.ownerDocument.defaultView.frameElement;
	      if (_frameElement) {
	        var frameRect = getActualBoundingClientRect(_frameElement);
	        rect.top += frameRect.top;
	        rect.bottom += frameRect.top;
	        rect.left += frameRect.left;
	        rect.right += frameRect.left;
	      }
	    }
	
	    return rect;
	  }
	
	  function getScrollParents(el) {
	    // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	    var computedStyle = getComputedStyle(el) || {};
	    var position = computedStyle.position;
	    var parents = [];
	
	    if (position === 'fixed') {
	      return [el];
	    }
	
	    var parent = el;
	    while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
	      var style = undefined;
	      try {
	        style = getComputedStyle(parent);
	      } catch (err) {}
	
	      if (typeof style === 'undefined' || style === null) {
	        parents.push(parent);
	        return parents;
	      }
	
	      var _style = style;
	      var overflow = _style.overflow;
	      var overflowX = _style.overflowX;
	      var overflowY = _style.overflowY;
	
	      if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
	        if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
	          parents.push(parent);
	        }
	      }
	    }
	
	    parents.push(el.ownerDocument.body);
	
	    // If the node is within a frame, account for the parent window scroll
	    if (el.ownerDocument !== document) {
	      parents.push(el.ownerDocument.defaultView);
	    }
	
	    return parents;
	  }
	
	  var uniqueId = function () {
	    var id = 0;
	    return function () {
	      return ++id;
	    };
	  }();
	
	  var zeroPosCache = {};
	  var getOrigin = function getOrigin() {
	    // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
	    // jitter as the user scrolls that messes with our ability to detect if two positions
	    // are equivilant or not.  We place an element at the top left of the page that will
	    // get the same jitter, so we can cancel the two out.
	    var node = zeroElement;
	    if (!node) {
	      node = document.createElement('div');
	      node.setAttribute('data-tether-id', uniqueId());
	      extend(node.style, {
	        top: 0,
	        left: 0,
	        position: 'absolute'
	      });
	
	      document.body.appendChild(node);
	
	      zeroElement = node;
	    }
	
	    var id = node.getAttribute('data-tether-id');
	    if (typeof zeroPosCache[id] === 'undefined') {
	      zeroPosCache[id] = getActualBoundingClientRect(node);
	
	      // Clear the cache when this position call is done
	      defer(function () {
	        delete zeroPosCache[id];
	      });
	    }
	
	    return zeroPosCache[id];
	  };
	
	  function removeUtilElements() {
	    if (zeroElement) {
	      document.body.removeChild(zeroElement);
	    }
	    zeroElement = null;
	  };
	
	  function getBounds(el) {
	    var doc = undefined;
	    if (el === document) {
	      doc = document;
	      el = document.documentElement;
	    } else {
	      doc = el.ownerDocument;
	    }
	
	    var docEl = doc.documentElement;
	
	    var box = getActualBoundingClientRect(el);
	
	    var origin = getOrigin();
	
	    box.top -= origin.top;
	    box.left -= origin.left;
	
	    if (typeof box.width === 'undefined') {
	      box.width = document.body.scrollWidth - box.left - box.right;
	    }
	    if (typeof box.height === 'undefined') {
	      box.height = document.body.scrollHeight - box.top - box.bottom;
	    }
	
	    box.top = box.top - docEl.clientTop;
	    box.left = box.left - docEl.clientLeft;
	    box.right = doc.body.clientWidth - box.width - box.left;
	    box.bottom = doc.body.clientHeight - box.height - box.top;
	
	    return box;
	  }
	
	  function getOffsetParent(el) {
	    return el.offsetParent || document.documentElement;
	  }
	
	  function getScrollBarSize() {
	    var inner = document.createElement('div');
	    inner.style.width = '100%';
	    inner.style.height = '200px';
	
	    var outer = document.createElement('div');
	    extend(outer.style, {
	      position: 'absolute',
	      top: 0,
	      left: 0,
	      pointerEvents: 'none',
	      visibility: 'hidden',
	      width: '200px',
	      height: '150px',
	      overflow: 'hidden'
	    });
	
	    outer.appendChild(inner);
	
	    document.body.appendChild(outer);
	
	    var widthContained = inner.offsetWidth;
	    outer.style.overflow = 'scroll';
	    var widthScroll = inner.offsetWidth;
	
	    if (widthContained === widthScroll) {
	      widthScroll = outer.clientWidth;
	    }
	
	    document.body.removeChild(outer);
	
	    var width = widthContained - widthScroll;
	
	    return { width: width, height: width };
	  }
	
	  function extend() {
	    var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var args = [];
	
	    Array.prototype.push.apply(args, arguments);
	
	    args.slice(1).forEach(function (obj) {
	      if (obj) {
	        for (var key in obj) {
	          if ({}.hasOwnProperty.call(obj, key)) {
	            out[key] = obj[key];
	          }
	        }
	      }
	    });
	
	    return out;
	  }
	
	  function removeClass(el, name) {
	    if (typeof el.classList !== 'undefined') {
	      name.split(' ').forEach(function (cls) {
	        if (cls.trim()) {
	          el.classList.remove(cls);
	        }
	      });
	    } else {
	      var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
	      var className = getClassName(el).replace(regex, ' ');
	      setClassName(el, className);
	    }
	  }
	
	  function addClass(el, name) {
	    if (typeof el.classList !== 'undefined') {
	      name.split(' ').forEach(function (cls) {
	        if (cls.trim()) {
	          el.classList.add(cls);
	        }
	      });
	    } else {
	      removeClass(el, name);
	      var cls = getClassName(el) + (' ' + name);
	      setClassName(el, cls);
	    }
	  }
	
	  function hasClass(el, name) {
	    if (typeof el.classList !== 'undefined') {
	      return el.classList.contains(name);
	    }
	    var className = getClassName(el);
	    return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
	  }
	
	  function getClassName(el) {
	    // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
	    // completely separately SVGAnimatedString base classes
	    if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
	      return el.className.baseVal;
	    }
	    return el.className;
	  }
	
	  function setClassName(el, className) {
	    el.setAttribute('class', className);
	  }
	
	  function updateClasses(el, add, all) {
	    // Of the set of 'all' classes, we need the 'add' classes, and only the
	    // 'add' classes to be set.
	    all.forEach(function (cls) {
	      if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
	        removeClass(el, cls);
	      }
	    });
	
	    add.forEach(function (cls) {
	      if (!hasClass(el, cls)) {
	        addClass(el, cls);
	      }
	    });
	  }
	
	  var deferred = [];
	
	  var defer = function defer(fn) {
	    deferred.push(fn);
	  };
	
	  var flush = function flush() {
	    var fn = undefined;
	    while (fn = deferred.pop()) {
	      fn();
	    }
	  };
	
	  var Evented = function () {
	    function Evented() {
	      _classCallCheck(this, Evented);
	    }
	
	    _createClass(Evented, [{
	      key: 'on',
	      value: function on(event, handler, ctx) {
	        var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	        if (typeof this.bindings === 'undefined') {
	          this.bindings = {};
	        }
	        if (typeof this.bindings[event] === 'undefined') {
	          this.bindings[event] = [];
	        }
	        this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
	      }
	    }, {
	      key: 'once',
	      value: function once(event, handler, ctx) {
	        this.on(event, handler, ctx, true);
	      }
	    }, {
	      key: 'off',
	      value: function off(event, handler) {
	        if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
	          return;
	        }
	
	        if (typeof handler === 'undefined') {
	          delete this.bindings[event];
	        } else {
	          var i = 0;
	          while (i < this.bindings[event].length) {
	            if (this.bindings[event][i].handler === handler) {
	              this.bindings[event].splice(i, 1);
	            } else {
	              ++i;
	            }
	          }
	        }
	      }
	    }, {
	      key: 'trigger',
	      value: function trigger(event) {
	        if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
	          var i = 0;
	
	          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	          }
	
	          while (i < this.bindings[event].length) {
	            var _bindings$event$i = this.bindings[event][i];
	            var handler = _bindings$event$i.handler;
	            var ctx = _bindings$event$i.ctx;
	            var once = _bindings$event$i.once;
	
	            var context = ctx;
	            if (typeof context === 'undefined') {
	              context = this;
	            }
	
	            handler.apply(context, args);
	
	            if (once) {
	              this.bindings[event].splice(i, 1);
	            } else {
	              ++i;
	            }
	          }
	        }
	      }
	    }]);
	
	    return Evented;
	  }();
	
	  TetherBase.Utils = {
	    getActualBoundingClientRect: getActualBoundingClientRect,
	    getScrollParents: getScrollParents,
	    getBounds: getBounds,
	    getOffsetParent: getOffsetParent,
	    extend: extend,
	    addClass: addClass,
	    removeClass: removeClass,
	    hasClass: hasClass,
	    updateClasses: updateClasses,
	    defer: defer,
	    flush: flush,
	    uniqueId: uniqueId,
	    Evented: Evented,
	    getScrollBarSize: getScrollBarSize,
	    removeUtilElements: removeUtilElements
	  };
	  /* globals TetherBase, performance */
	
	  'use strict';
	
	  var _slicedToArray = function () {
	    function sliceIterator(arr, i) {
	      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	          _arr.push(_s.value);if (i && _arr.length === i) break;
	        }
	      } catch (err) {
	        _d = true;_e = err;
	      } finally {
	        try {
	          if (!_n && _i['return']) _i['return']();
	        } finally {
	          if (_d) throw _e;
	        }
	      }return _arr;
	    }return function (arr, i) {
	      if (Array.isArray(arr)) {
	        return arr;
	      } else if (Symbol.iterator in Object(arr)) {
	        return sliceIterator(arr, i);
	      } else {
	        throw new TypeError('Invalid attempt to destructure non-iterable instance');
	      }
	    };
	  }();
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	  }();
	
	  var _get = function get(_x6, _x7, _x8) {
	    var _again = true;_function: while (_again) {
	      var object = _x6,
	          property = _x7,
	          receiver = _x8;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	          return undefined;
	        } else {
	          _x6 = parent;_x7 = property;_x8 = receiver;_again = true;desc = parent = undefined;continue _function;
	        }
	      } else if ('value' in desc) {
	        return desc.value;
	      } else {
	        var getter = desc.get;if (getter === undefined) {
	          return undefined;
	        }return getter.call(receiver);
	      }
	    }
	  };
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError('Cannot call a class as a function');
	    }
	  }
	
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	      throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }
	
	  if (typeof TetherBase === 'undefined') {
	    throw new Error('You must include the utils.js file before tether.js');
	  }
	
	  var _TetherBase$Utils = TetherBase.Utils;
	  var getScrollParents = _TetherBase$Utils.getScrollParents;
	  var getBounds = _TetherBase$Utils.getBounds;
	  var getOffsetParent = _TetherBase$Utils.getOffsetParent;
	  var extend = _TetherBase$Utils.extend;
	  var addClass = _TetherBase$Utils.addClass;
	  var removeClass = _TetherBase$Utils.removeClass;
	  var updateClasses = _TetherBase$Utils.updateClasses;
	  var defer = _TetherBase$Utils.defer;
	  var flush = _TetherBase$Utils.flush;
	  var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
	  var removeUtilElements = _TetherBase$Utils.removeUtilElements;
	
	  function within(a, b) {
	    var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	    return a + diff >= b && b >= a - diff;
	  }
	
	  var transformKey = function () {
	    if (typeof document === 'undefined') {
	      return '';
	    }
	    var el = document.createElement('div');
	
	    var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
	    for (var i = 0; i < transforms.length; ++i) {
	      var key = transforms[i];
	      if (el.style[key] !== undefined) {
	        return key;
	      }
	    }
	  }();
	
	  var tethers = [];
	
	  var position = function position() {
	    tethers.forEach(function (tether) {
	      tether.position(false);
	    });
	    flush();
	  };
	
	  function now() {
	    if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
	      return performance.now();
	    }
	    return +new Date();
	  }
	
	  (function () {
	    var lastCall = null;
	    var lastDuration = null;
	    var pendingTimeout = null;
	
	    var tick = function tick() {
	      if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
	        // We voluntarily throttle ourselves if we can't manage 60fps
	        lastDuration = Math.min(lastDuration - 16, 250);
	
	        // Just in case this is the last event, remember to position just once more
	        pendingTimeout = setTimeout(tick, 250);
	        return;
	      }
	
	      if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
	        // Some browsers call events a little too frequently, refuse to run more than is reasonable
	        return;
	      }
	
	      if (pendingTimeout != null) {
	        clearTimeout(pendingTimeout);
	        pendingTimeout = null;
	      }
	
	      lastCall = now();
	      position();
	      lastDuration = now() - lastCall;
	    };
	
	    if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
	      ['resize', 'scroll', 'touchmove'].forEach(function (event) {
	        window.addEventListener(event, tick);
	      });
	    }
	  })();
	
	  var MIRROR_LR = {
	    center: 'center',
	    left: 'right',
	    right: 'left'
	  };
	
	  var MIRROR_TB = {
	    middle: 'middle',
	    top: 'bottom',
	    bottom: 'top'
	  };
	
	  var OFFSET_MAP = {
	    top: 0,
	    left: 0,
	    middle: '50%',
	    center: '50%',
	    bottom: '100%',
	    right: '100%'
	  };
	
	  var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
	    var left = attachment.left;
	    var top = attachment.top;
	
	    if (left === 'auto') {
	      left = MIRROR_LR[relativeToAttachment.left];
	    }
	
	    if (top === 'auto') {
	      top = MIRROR_TB[relativeToAttachment.top];
	    }
	
	    return { left: left, top: top };
	  };
	
	  var attachmentToOffset = function attachmentToOffset(attachment) {
	    var left = attachment.left;
	    var top = attachment.top;
	
	    if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
	      left = OFFSET_MAP[attachment.left];
	    }
	
	    if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
	      top = OFFSET_MAP[attachment.top];
	    }
	
	    return { left: left, top: top };
	  };
	
	  function addOffset() {
	    var out = { top: 0, left: 0 };
	
	    for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
	      offsets[_key] = arguments[_key];
	    }
	
	    offsets.forEach(function (_ref) {
	      var top = _ref.top;
	      var left = _ref.left;
	
	      if (typeof top === 'string') {
	        top = parseFloat(top, 10);
	      }
	      if (typeof left === 'string') {
	        left = parseFloat(left, 10);
	      }
	
	      out.top += top;
	      out.left += left;
	    });
	
	    return out;
	  }
	
	  function offsetToPx(offset, size) {
	    if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
	      offset.left = parseFloat(offset.left, 10) / 100 * size.width;
	    }
	    if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
	      offset.top = parseFloat(offset.top, 10) / 100 * size.height;
	    }
	
	    return offset;
	  }
	
	  var parseOffset = function parseOffset(value) {
	    var _value$split = value.split(' ');
	
	    var _value$split2 = _slicedToArray(_value$split, 2);
	
	    var top = _value$split2[0];
	    var left = _value$split2[1];
	
	    return { top: top, left: left };
	  };
	  var parseAttachment = parseOffset;
	
	  var TetherClass = function (_Evented) {
	    _inherits(TetherClass, _Evented);
	
	    function TetherClass(options) {
	      var _this = this;
	
	      _classCallCheck(this, TetherClass);
	
	      _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
	      this.position = this.position.bind(this);
	
	      tethers.push(this);
	
	      this.history = [];
	
	      this.setOptions(options, false);
	
	      TetherBase.modules.forEach(function (module) {
	        if (typeof module.initialize !== 'undefined') {
	          module.initialize.call(_this);
	        }
	      });
	
	      this.position();
	    }
	
	    _createClass(TetherClass, [{
	      key: 'getClass',
	      value: function getClass() {
	        var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	        var classes = this.options.classes;
	
	        if (typeof classes !== 'undefined' && classes[key]) {
	          return this.options.classes[key];
	        } else if (this.options.classPrefix) {
	          return this.options.classPrefix + '-' + key;
	        } else {
	          return key;
	        }
	      }
	    }, {
	      key: 'setOptions',
	      value: function setOptions(options) {
	        var _this2 = this;
	
	        var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	        var defaults = {
	          offset: '0 0',
	          targetOffset: '0 0',
	          targetAttachment: 'auto auto',
	          classPrefix: 'tether'
	        };
	
	        this.options = extend(defaults, options);
	
	        var _options = this.options;
	        var element = _options.element;
	        var target = _options.target;
	        var targetModifier = _options.targetModifier;
	
	        this.element = element;
	        this.target = target;
	        this.targetModifier = targetModifier;
	
	        if (this.target === 'viewport') {
	          this.target = document.body;
	          this.targetModifier = 'visible';
	        } else if (this.target === 'scroll-handle') {
	          this.target = document.body;
	          this.targetModifier = 'scroll-handle';
	        }
	
	        ['element', 'target'].forEach(function (key) {
	          if (typeof _this2[key] === 'undefined') {
	            throw new Error('Tether Error: Both element and target must be defined');
	          }
	
	          if (typeof _this2[key].jquery !== 'undefined') {
	            _this2[key] = _this2[key][0];
	          } else if (typeof _this2[key] === 'string') {
	            _this2[key] = document.querySelector(_this2[key]);
	          }
	        });
	
	        addClass(this.element, this.getClass('element'));
	        if (!(this.options.addTargetClasses === false)) {
	          addClass(this.target, this.getClass('target'));
	        }
	
	        if (!this.options.attachment) {
	          throw new Error('Tether Error: You must provide an attachment');
	        }
	
	        this.targetAttachment = parseAttachment(this.options.targetAttachment);
	        this.attachment = parseAttachment(this.options.attachment);
	        this.offset = parseOffset(this.options.offset);
	        this.targetOffset = parseOffset(this.options.targetOffset);
	
	        if (typeof this.scrollParents !== 'undefined') {
	          this.disable();
	        }
	
	        if (this.targetModifier === 'scroll-handle') {
	          this.scrollParents = [this.target];
	        } else {
	          this.scrollParents = getScrollParents(this.target);
	        }
	
	        if (!(this.options.enabled === false)) {
	          this.enable(pos);
	        }
	      }
	    }, {
	      key: 'getTargetBounds',
	      value: function getTargetBounds() {
	        if (typeof this.targetModifier !== 'undefined') {
	          if (this.targetModifier === 'visible') {
	            if (this.target === document.body) {
	              return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
	            } else {
	              var bounds = getBounds(this.target);
	
	              var out = {
	                height: bounds.height,
	                width: bounds.width,
	                top: bounds.top,
	                left: bounds.left
	              };
	
	              out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
	              out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
	              out.height = Math.min(innerHeight, out.height);
	              out.height -= 2;
	
	              out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
	              out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
	              out.width = Math.min(innerWidth, out.width);
	              out.width -= 2;
	
	              if (out.top < pageYOffset) {
	                out.top = pageYOffset;
	              }
	              if (out.left < pageXOffset) {
	                out.left = pageXOffset;
	              }
	
	              return out;
	            }
	          } else if (this.targetModifier === 'scroll-handle') {
	            var bounds = undefined;
	            var target = this.target;
	            if (target === document.body) {
	              target = document.documentElement;
	
	              bounds = {
	                left: pageXOffset,
	                top: pageYOffset,
	                height: innerHeight,
	                width: innerWidth
	              };
	            } else {
	              bounds = getBounds(target);
	            }
	
	            var style = getComputedStyle(target);
	
	            var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;
	
	            var scrollBottom = 0;
	            if (hasBottomScroll) {
	              scrollBottom = 15;
	            }
	
	            var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
	
	            var out = {
	              width: 15,
	              height: height * 0.975 * (height / target.scrollHeight),
	              left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
	            };
	
	            var fitAdj = 0;
	            if (height < 408 && this.target === document.body) {
	              fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
	            }
	
	            if (this.target !== document.body) {
	              out.height = Math.max(out.height, 24);
	            }
	
	            var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
	            out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
	
	            if (this.target === document.body) {
	              out.height = Math.max(out.height, 24);
	            }
	
	            return out;
	          }
	        } else {
	          return getBounds(this.target);
	        }
	      }
	    }, {
	      key: 'clearCache',
	      value: function clearCache() {
	        this._cache = {};
	      }
	    }, {
	      key: 'cache',
	      value: function cache(k, getter) {
	        // More than one module will often need the same DOM info, so
	        // we keep a cache which is cleared on each position call
	        if (typeof this._cache === 'undefined') {
	          this._cache = {};
	        }
	
	        if (typeof this._cache[k] === 'undefined') {
	          this._cache[k] = getter.call(this);
	        }
	
	        return this._cache[k];
	      }
	    }, {
	      key: 'enable',
	      value: function enable() {
	        var _this3 = this;
	
	        var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	        if (!(this.options.addTargetClasses === false)) {
	          addClass(this.target, this.getClass('enabled'));
	        }
	        addClass(this.element, this.getClass('enabled'));
	        this.enabled = true;
	
	        this.scrollParents.forEach(function (parent) {
	          if (parent !== _this3.target.ownerDocument) {
	            parent.addEventListener('scroll', _this3.position);
	          }
	        });
	
	        if (pos) {
	          this.position();
	        }
	      }
	    }, {
	      key: 'disable',
	      value: function disable() {
	        var _this4 = this;
	
	        removeClass(this.target, this.getClass('enabled'));
	        removeClass(this.element, this.getClass('enabled'));
	        this.enabled = false;
	
	        if (typeof this.scrollParents !== 'undefined') {
	          this.scrollParents.forEach(function (parent) {
	            parent.removeEventListener('scroll', _this4.position);
	          });
	        }
	      }
	    }, {
	      key: 'destroy',
	      value: function destroy() {
	        var _this5 = this;
	
	        this.disable();
	
	        tethers.forEach(function (tether, i) {
	          if (tether === _this5) {
	            tethers.splice(i, 1);
	          }
	        });
	
	        // Remove any elements we were using for convenience from the DOM
	        if (tethers.length === 0) {
	          removeUtilElements();
	        }
	      }
	    }, {
	      key: 'updateAttachClasses',
	      value: function updateAttachClasses(elementAttach, targetAttach) {
	        var _this6 = this;
	
	        elementAttach = elementAttach || this.attachment;
	        targetAttach = targetAttach || this.targetAttachment;
	        var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
	
	        if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
	          // updateAttachClasses can be called more than once in a position call, so
	          // we need to clean up after ourselves such that when the last defer gets
	          // ran it doesn't add any extra classes from previous calls.
	          this._addAttachClasses.splice(0, this._addAttachClasses.length);
	        }
	
	        if (typeof this._addAttachClasses === 'undefined') {
	          this._addAttachClasses = [];
	        }
	        var add = this._addAttachClasses;
	
	        if (elementAttach.top) {
	          add.push(this.getClass('element-attached') + '-' + elementAttach.top);
	        }
	        if (elementAttach.left) {
	          add.push(this.getClass('element-attached') + '-' + elementAttach.left);
	        }
	        if (targetAttach.top) {
	          add.push(this.getClass('target-attached') + '-' + targetAttach.top);
	        }
	        if (targetAttach.left) {
	          add.push(this.getClass('target-attached') + '-' + targetAttach.left);
	        }
	
	        var all = [];
	        sides.forEach(function (side) {
	          all.push(_this6.getClass('element-attached') + '-' + side);
	          all.push(_this6.getClass('target-attached') + '-' + side);
	        });
	
	        defer(function () {
	          if (!(typeof _this6._addAttachClasses !== 'undefined')) {
	            return;
	          }
	
	          updateClasses(_this6.element, _this6._addAttachClasses, all);
	          if (!(_this6.options.addTargetClasses === false)) {
	            updateClasses(_this6.target, _this6._addAttachClasses, all);
	          }
	
	          delete _this6._addAttachClasses;
	        });
	      }
	    }, {
	      key: 'position',
	      value: function position() {
	        var _this7 = this;
	
	        var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	        // flushChanges commits the changes immediately, leave true unless you are positioning multiple
	        // tethers (in which case call Tether.Utils.flush yourself when you're done)
	
	        if (!this.enabled) {
	          return;
	        }
	
	        this.clearCache();
	
	        // Turn 'auto' attachments into the appropriate corner or edge
	        var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
	
	        this.updateAttachClasses(this.attachment, targetAttachment);
	
	        var elementPos = this.cache('element-bounds', function () {
	          return getBounds(_this7.element);
	        });
	
	        var width = elementPos.width;
	        var height = elementPos.height;
	
	        if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	          var _lastSize = this.lastSize;
	
	          // We cache the height and width to make it possible to position elements that are
	          // getting hidden.
	          width = _lastSize.width;
	          height = _lastSize.height;
	        } else {
	          this.lastSize = { width: width, height: height };
	        }
	
	        var targetPos = this.cache('target-bounds', function () {
	          return _this7.getTargetBounds();
	        });
	        var targetSize = targetPos;
	
	        // Get an actual px offset from the attachment
	        var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
	        var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
	
	        var manualOffset = offsetToPx(this.offset, { width: width, height: height });
	        var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
	
	        // Add the manually provided offset
	        offset = addOffset(offset, manualOffset);
	        targetOffset = addOffset(targetOffset, manualTargetOffset);
	
	        // It's now our goal to make (element position + offset) == (target position + target offset)
	        var left = targetPos.left + targetOffset.left - offset.left;
	        var top = targetPos.top + targetOffset.top - offset.top;
	
	        for (var i = 0; i < TetherBase.modules.length; ++i) {
	          var _module2 = TetherBase.modules[i];
	          var ret = _module2.position.call(this, {
	            left: left,
	            top: top,
	            targetAttachment: targetAttachment,
	            targetPos: targetPos,
	            elementPos: elementPos,
	            offset: offset,
	            targetOffset: targetOffset,
	            manualOffset: manualOffset,
	            manualTargetOffset: manualTargetOffset,
	            scrollbarSize: scrollbarSize,
	            attachment: this.attachment
	          });
	
	          if (ret === false) {
	            return false;
	          } else if (typeof ret === 'undefined' || (typeof ret === 'undefined' ? 'undefined' : _typeof(ret)) !== 'object') {
	            continue;
	          } else {
	            top = ret.top;
	            left = ret.left;
	          }
	        }
	
	        // We describe the position three different ways to give the optimizer
	        // a chance to decide the best possible way to position the element
	        // with the fewest repaints.
	        var next = {
	          // It's position relative to the page (absolute positioning when
	          // the element is a child of the body)
	          page: {
	            top: top,
	            left: left
	          },
	
	          // It's position relative to the viewport (fixed positioning)
	          viewport: {
	            top: top - pageYOffset,
	            bottom: pageYOffset - top - height + innerHeight,
	            left: left - pageXOffset,
	            right: pageXOffset - left - width + innerWidth
	          }
	        };
	
	        var doc = this.target.ownerDocument;
	        var win = doc.defaultView;
	
	        var scrollbarSize = undefined;
	        if (doc.body.scrollWidth > win.innerWidth) {
	          scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	          next.viewport.bottom -= scrollbarSize.height;
	        }
	
	        if (doc.body.scrollHeight > win.innerHeight) {
	          scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	          next.viewport.right -= scrollbarSize.width;
	        }
	
	        if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
	          // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
	          next.page.bottom = doc.body.scrollHeight - top - height;
	          next.page.right = doc.body.scrollWidth - left - width;
	        }
	
	        if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
	          (function () {
	            var offsetParent = _this7.cache('target-offsetparent', function () {
	              return getOffsetParent(_this7.target);
	            });
	            var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
	              return getBounds(offsetParent);
	            });
	            var offsetParentStyle = getComputedStyle(offsetParent);
	            var offsetParentSize = offsetPosition;
	
	            var offsetBorder = {};
	            ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
	              offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
	            });
	
	            offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	            offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
	
	            if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
	              if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
	                // We're within the visible part of the target's scroll parent
	                var scrollTop = offsetParent.scrollTop;
	                var scrollLeft = offsetParent.scrollLeft;
	
	                // It's position relative to the target's offset parent (absolute positioning when
	                // the element is moved to be a child of the target's offset parent).
	                next.offset = {
	                  top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
	                  left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
	                };
	              }
	            }
	          })();
	        }
	
	        // We could also travel up the DOM and try each containing context, rather than only
	        // looking at the body, but we're gonna get diminishing returns.
	
	        this.move(next);
	
	        this.history.unshift(next);
	
	        if (this.history.length > 3) {
	          this.history.pop();
	        }
	
	        if (flushChanges) {
	          flush();
	        }
	
	        return true;
	      }
	
	      // THE ISSUE
	    }, {
	      key: 'move',
	      value: function move(pos) {
	        var _this8 = this;
	
	        if (!(typeof this.element.parentNode !== 'undefined')) {
	          return;
	        }
	
	        var same = {};
	
	        for (var type in pos) {
	          same[type] = {};
	
	          for (var key in pos[type]) {
	            var found = false;
	
	            for (var i = 0; i < this.history.length; ++i) {
	              var point = this.history[i];
	              if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
	                found = true;
	                break;
	              }
	            }
	
	            if (!found) {
	              same[type][key] = true;
	            }
	          }
	        }
	
	        var css = { top: '', left: '', right: '', bottom: '' };
	
	        var transcribe = function transcribe(_same, _pos) {
	          var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
	          var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
	          if (gpu !== false) {
	            var yPos = undefined,
	                xPos = undefined;
	            if (_same.top) {
	              css.top = 0;
	              yPos = _pos.top;
	            } else {
	              css.bottom = 0;
	              yPos = -_pos.bottom;
	            }
	
	            if (_same.left) {
	              css.left = 0;
	              xPos = _pos.left;
	            } else {
	              css.right = 0;
	              xPos = -_pos.right;
	            }
	
	            css[transformKey] = 'translateX(' + Math.round(xPos) + 'px) translateY(' + Math.round(yPos) + 'px)';
	
	            if (transformKey !== 'msTransform') {
	              // The Z transform will keep this in the GPU (faster, and prevents artifacts),
	              // but IE9 doesn't support 3d transforms and will choke.
	              css[transformKey] += " translateZ(0)";
	            }
	          } else {
	            if (_same.top) {
	              css.top = _pos.top + 'px';
	            } else {
	              css.bottom = _pos.bottom + 'px';
	            }
	
	            if (_same.left) {
	              css.left = _pos.left + 'px';
	            } else {
	              css.right = _pos.right + 'px';
	            }
	          }
	        };
	
	        var moved = false;
	        if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
	          css.position = 'absolute';
	          transcribe(same.page, pos.page);
	        } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
	          css.position = 'fixed';
	          transcribe(same.viewport, pos.viewport);
	        } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
	          (function () {
	            css.position = 'absolute';
	            var offsetParent = _this8.cache('target-offsetparent', function () {
	              return getOffsetParent(_this8.target);
	            });
	
	            if (getOffsetParent(_this8.element) !== offsetParent) {
	              defer(function () {
	                _this8.element.parentNode.removeChild(_this8.element);
	                offsetParent.appendChild(_this8.element);
	              });
	            }
	
	            transcribe(same.offset, pos.offset);
	            moved = true;
	          })();
	        } else {
	          css.position = 'absolute';
	          transcribe({ top: true, left: true }, pos.page);
	        }
	
	        if (!moved) {
	          var offsetParentIsBody = true;
	          var currentNode = this.element.parentNode;
	          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
	            if (getComputedStyle(currentNode).position !== 'static') {
	              offsetParentIsBody = false;
	              break;
	            }
	
	            currentNode = currentNode.parentNode;
	          }
	
	          if (!offsetParentIsBody) {
	            this.element.parentNode.removeChild(this.element);
	            this.element.ownerDocument.body.appendChild(this.element);
	          }
	        }
	
	        // Any css change will trigger a repaint, so let's avoid one if nothing changed
	        var writeCSS = {};
	        var write = false;
	        for (var key in css) {
	          var val = css[key];
	          var elVal = this.element.style[key];
	
	          if (elVal !== val) {
	            write = true;
	            writeCSS[key] = val;
	          }
	        }
	
	        if (write) {
	          defer(function () {
	            extend(_this8.element.style, writeCSS);
	          });
	        }
	      }
	    }]);
	
	    return TetherClass;
	  }(Evented);
	
	  TetherClass.modules = [];
	
	  TetherBase.position = position;
	
	  var Tether = extend(TetherClass, TetherBase);
	  /* globals TetherBase */
	
	  'use strict';
	
	  var _slicedToArray = function () {
	    function sliceIterator(arr, i) {
	      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	          _arr.push(_s.value);if (i && _arr.length === i) break;
	        }
	      } catch (err) {
	        _d = true;_e = err;
	      } finally {
	        try {
	          if (!_n && _i['return']) _i['return']();
	        } finally {
	          if (_d) throw _e;
	        }
	      }return _arr;
	    }return function (arr, i) {
	      if (Array.isArray(arr)) {
	        return arr;
	      } else if (Symbol.iterator in Object(arr)) {
	        return sliceIterator(arr, i);
	      } else {
	        throw new TypeError('Invalid attempt to destructure non-iterable instance');
	      }
	    };
	  }();
	
	  var _TetherBase$Utils = TetherBase.Utils;
	  var getBounds = _TetherBase$Utils.getBounds;
	  var extend = _TetherBase$Utils.extend;
	  var updateClasses = _TetherBase$Utils.updateClasses;
	  var defer = _TetherBase$Utils.defer;
	
	  var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
	
	  function getBoundingRect(tether, to) {
	    if (to === 'scrollParent') {
	      to = tether.scrollParents[0];
	    } else if (to === 'window') {
	      to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	    }
	
	    if (to === document) {
	      to = to.documentElement;
	    }
	
	    if (typeof to.nodeType !== 'undefined') {
	      (function () {
	        var node = to;
	        var size = getBounds(to);
	        var pos = size;
	        var style = getComputedStyle(to);
	
	        to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
	
	        // Account any parent Frames scroll offset
	        if (node.ownerDocument !== document) {
	          var win = node.ownerDocument.defaultView;
	          to[0] += win.pageXOffset;
	          to[1] += win.pageYOffset;
	          to[2] += win.pageXOffset;
	          to[3] += win.pageYOffset;
	        }
	
	        BOUNDS_FORMAT.forEach(function (side, i) {
	          side = side[0].toUpperCase() + side.substr(1);
	          if (side === 'Top' || side === 'Left') {
	            to[i] += parseFloat(style['border' + side + 'Width']);
	          } else {
	            to[i] -= parseFloat(style['border' + side + 'Width']);
	          }
	        });
	      })();
	    }
	
	    return to;
	  }
	
	  TetherBase.modules.push({
	    position: function position(_ref) {
	      var _this = this;
	
	      var top = _ref.top;
	      var left = _ref.left;
	      var targetAttachment = _ref.targetAttachment;
	
	      if (!this.options.constraints) {
	        return true;
	      }
	
	      var _cache = this.cache('element-bounds', function () {
	        return getBounds(_this.element);
	      });
	
	      var height = _cache.height;
	      var width = _cache.width;
	
	      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	        var _lastSize = this.lastSize;
	
	        // Handle the item getting hidden as a result of our positioning without glitching
	        // the classes in and out
	        width = _lastSize.width;
	        height = _lastSize.height;
	      }
	
	      var targetSize = this.cache('target-bounds', function () {
	        return _this.getTargetBounds();
	      });
	
	      var targetHeight = targetSize.height;
	      var targetWidth = targetSize.width;
	
	      var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
	
	      this.options.constraints.forEach(function (constraint) {
	        var outOfBoundsClass = constraint.outOfBoundsClass;
	        var pinnedClass = constraint.pinnedClass;
	
	        if (outOfBoundsClass) {
	          allClasses.push(outOfBoundsClass);
	        }
	        if (pinnedClass) {
	          allClasses.push(pinnedClass);
	        }
	      });
	
	      allClasses.forEach(function (cls) {
	        ['left', 'top', 'right', 'bottom'].forEach(function (side) {
	          allClasses.push(cls + '-' + side);
	        });
	      });
	
	      var addClasses = [];
	
	      var tAttachment = extend({}, targetAttachment);
	      var eAttachment = extend({}, this.attachment);
	
	      this.options.constraints.forEach(function (constraint) {
	        var to = constraint.to;
	        var attachment = constraint.attachment;
	        var pin = constraint.pin;
	
	        if (typeof attachment === 'undefined') {
	          attachment = '';
	        }
	
	        var changeAttachX = undefined,
	            changeAttachY = undefined;
	        if (attachment.indexOf(' ') >= 0) {
	          var _attachment$split = attachment.split(' ');
	
	          var _attachment$split2 = _slicedToArray(_attachment$split, 2);
	
	          changeAttachY = _attachment$split2[0];
	          changeAttachX = _attachment$split2[1];
	        } else {
	          changeAttachX = changeAttachY = attachment;
	        }
	
	        var bounds = getBoundingRect(_this, to);
	
	        if (changeAttachY === 'target' || changeAttachY === 'both') {
	          if (top < bounds[1] && tAttachment.top === 'top') {
	            top += targetHeight;
	            tAttachment.top = 'bottom';
	          }
	
	          if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	            top -= targetHeight;
	            tAttachment.top = 'top';
	          }
	        }
	
	        if (changeAttachY === 'together') {
	          if (tAttachment.top === 'top') {
	            if (eAttachment.top === 'bottom' && top < bounds[1]) {
	              top += targetHeight;
	              tAttachment.top = 'bottom';
	
	              top += height;
	              eAttachment.top = 'top';
	            } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
	              top -= height - targetHeight;
	              tAttachment.top = 'bottom';
	
	              eAttachment.top = 'bottom';
	            }
	          }
	
	          if (tAttachment.top === 'bottom') {
	            if (eAttachment.top === 'top' && top + height > bounds[3]) {
	              top -= targetHeight;
	              tAttachment.top = 'top';
	
	              top -= height;
	              eAttachment.top = 'bottom';
	            } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
	              top += height - targetHeight;
	              tAttachment.top = 'top';
	
	              eAttachment.top = 'top';
	            }
	          }
	
	          if (tAttachment.top === 'middle') {
	            if (top + height > bounds[3] && eAttachment.top === 'top') {
	              top -= height;
	              eAttachment.top = 'bottom';
	            } else if (top < bounds[1] && eAttachment.top === 'bottom') {
	              top += height;
	              eAttachment.top = 'top';
	            }
	          }
	        }
	
	        if (changeAttachX === 'target' || changeAttachX === 'both') {
	          if (left < bounds[0] && tAttachment.left === 'left') {
	            left += targetWidth;
	            tAttachment.left = 'right';
	          }
	
	          if (left + width > bounds[2] && tAttachment.left === 'right') {
	            left -= targetWidth;
	            tAttachment.left = 'left';
	          }
	        }
	
	        if (changeAttachX === 'together') {
	          if (left < bounds[0] && tAttachment.left === 'left') {
	            if (eAttachment.left === 'right') {
	              left += targetWidth;
	              tAttachment.left = 'right';
	
	              left += width;
	              eAttachment.left = 'left';
	            } else if (eAttachment.left === 'left') {
	              left += targetWidth;
	              tAttachment.left = 'right';
	
	              left -= width;
	              eAttachment.left = 'right';
	            }
	          } else if (left + width > bounds[2] && tAttachment.left === 'right') {
	            if (eAttachment.left === 'left') {
	              left -= targetWidth;
	              tAttachment.left = 'left';
	
	              left -= width;
	              eAttachment.left = 'right';
	            } else if (eAttachment.left === 'right') {
	              left -= targetWidth;
	              tAttachment.left = 'left';
	
	              left += width;
	              eAttachment.left = 'left';
	            }
	          } else if (tAttachment.left === 'center') {
	            if (left + width > bounds[2] && eAttachment.left === 'left') {
	              left -= width;
	              eAttachment.left = 'right';
	            } else if (left < bounds[0] && eAttachment.left === 'right') {
	              left += width;
	              eAttachment.left = 'left';
	            }
	          }
	        }
	
	        if (changeAttachY === 'element' || changeAttachY === 'both') {
	          if (top < bounds[1] && eAttachment.top === 'bottom') {
	            top += height;
	            eAttachment.top = 'top';
	          }
	
	          if (top + height > bounds[3] && eAttachment.top === 'top') {
	            top -= height;
	            eAttachment.top = 'bottom';
	          }
	        }
	
	        if (changeAttachX === 'element' || changeAttachX === 'both') {
	          if (left < bounds[0]) {
	            if (eAttachment.left === 'right') {
	              left += width;
	              eAttachment.left = 'left';
	            } else if (eAttachment.left === 'center') {
	              left += width / 2;
	              eAttachment.left = 'left';
	            }
	          }
	
	          if (left + width > bounds[2]) {
	            if (eAttachment.left === 'left') {
	              left -= width;
	              eAttachment.left = 'right';
	            } else if (eAttachment.left === 'center') {
	              left -= width / 2;
	              eAttachment.left = 'right';
	            }
	          }
	        }
	
	        if (typeof pin === 'string') {
	          pin = pin.split(',').map(function (p) {
	            return p.trim();
	          });
	        } else if (pin === true) {
	          pin = ['top', 'left', 'right', 'bottom'];
	        }
	
	        pin = pin || [];
	
	        var pinned = [];
	        var oob = [];
	
	        if (top < bounds[1]) {
	          if (pin.indexOf('top') >= 0) {
	            top = bounds[1];
	            pinned.push('top');
	          } else {
	            oob.push('top');
	          }
	        }
	
	        if (top + height > bounds[3]) {
	          if (pin.indexOf('bottom') >= 0) {
	            top = bounds[3] - height;
	            pinned.push('bottom');
	          } else {
	            oob.push('bottom');
	          }
	        }
	
	        if (left < bounds[0]) {
	          if (pin.indexOf('left') >= 0) {
	            left = bounds[0];
	            pinned.push('left');
	          } else {
	            oob.push('left');
	          }
	        }
	
	        if (left + width > bounds[2]) {
	          if (pin.indexOf('right') >= 0) {
	            left = bounds[2] - width;
	            pinned.push('right');
	          } else {
	            oob.push('right');
	          }
	        }
	
	        if (pinned.length) {
	          (function () {
	            var pinnedClass = undefined;
	            if (typeof _this.options.pinnedClass !== 'undefined') {
	              pinnedClass = _this.options.pinnedClass;
	            } else {
	              pinnedClass = _this.getClass('pinned');
	            }
	
	            addClasses.push(pinnedClass);
	            pinned.forEach(function (side) {
	              addClasses.push(pinnedClass + '-' + side);
	            });
	          })();
	        }
	
	        if (oob.length) {
	          (function () {
	            var oobClass = undefined;
	            if (typeof _this.options.outOfBoundsClass !== 'undefined') {
	              oobClass = _this.options.outOfBoundsClass;
	            } else {
	              oobClass = _this.getClass('out-of-bounds');
	            }
	
	            addClasses.push(oobClass);
	            oob.forEach(function (side) {
	              addClasses.push(oobClass + '-' + side);
	            });
	          })();
	        }
	
	        if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
	          eAttachment.left = tAttachment.left = false;
	        }
	        if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
	          eAttachment.top = tAttachment.top = false;
	        }
	
	        if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
	          _this.updateAttachClasses(eAttachment, tAttachment);
	          _this.trigger('update', {
	            attachment: eAttachment,
	            targetAttachment: tAttachment
	          });
	        }
	      });
	
	      defer(function () {
	        if (!(_this.options.addTargetClasses === false)) {
	          updateClasses(_this.target, addClasses, allClasses);
	        }
	        updateClasses(_this.element, addClasses, allClasses);
	      });
	
	      return { top: top, left: left };
	    }
	  });
	  /* globals TetherBase */
	
	  'use strict';
	
	  var _TetherBase$Utils = TetherBase.Utils;
	  var getBounds = _TetherBase$Utils.getBounds;
	  var updateClasses = _TetherBase$Utils.updateClasses;
	  var defer = _TetherBase$Utils.defer;
	
	  TetherBase.modules.push({
	    position: function position(_ref) {
	      var _this = this;
	
	      var top = _ref.top;
	      var left = _ref.left;
	
	      var _cache = this.cache('element-bounds', function () {
	        return getBounds(_this.element);
	      });
	
	      var height = _cache.height;
	      var width = _cache.width;
	
	      var targetPos = this.getTargetBounds();
	
	      var bottom = top + height;
	      var right = left + width;
	
	      var abutted = [];
	      if (top <= targetPos.bottom && bottom >= targetPos.top) {
	        ['left', 'right'].forEach(function (side) {
	          var targetPosSide = targetPos[side];
	          if (targetPosSide === left || targetPosSide === right) {
	            abutted.push(side);
	          }
	        });
	      }
	
	      if (left <= targetPos.right && right >= targetPos.left) {
	        ['top', 'bottom'].forEach(function (side) {
	          var targetPosSide = targetPos[side];
	          if (targetPosSide === top || targetPosSide === bottom) {
	            abutted.push(side);
	          }
	        });
	      }
	
	      var allClasses = [];
	      var addClasses = [];
	
	      var sides = ['left', 'top', 'right', 'bottom'];
	      allClasses.push(this.getClass('abutted'));
	      sides.forEach(function (side) {
	        allClasses.push(_this.getClass('abutted') + '-' + side);
	      });
	
	      if (abutted.length) {
	        addClasses.push(this.getClass('abutted'));
	      }
	
	      abutted.forEach(function (side) {
	        addClasses.push(_this.getClass('abutted') + '-' + side);
	      });
	
	      defer(function () {
	        if (!(_this.options.addTargetClasses === false)) {
	          updateClasses(_this.target, addClasses, allClasses);
	        }
	        updateClasses(_this.element, addClasses, allClasses);
	      });
	
	      return true;
	    }
	  });
	  /* globals TetherBase */
	
	  'use strict';
	
	  var _slicedToArray = function () {
	    function sliceIterator(arr, i) {
	      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	          _arr.push(_s.value);if (i && _arr.length === i) break;
	        }
	      } catch (err) {
	        _d = true;_e = err;
	      } finally {
	        try {
	          if (!_n && _i['return']) _i['return']();
	        } finally {
	          if (_d) throw _e;
	        }
	      }return _arr;
	    }return function (arr, i) {
	      if (Array.isArray(arr)) {
	        return arr;
	      } else if (Symbol.iterator in Object(arr)) {
	        return sliceIterator(arr, i);
	      } else {
	        throw new TypeError('Invalid attempt to destructure non-iterable instance');
	      }
	    };
	  }();
	
	  TetherBase.modules.push({
	    position: function position(_ref) {
	      var top = _ref.top;
	      var left = _ref.left;
	
	      if (!this.options.shift) {
	        return;
	      }
	
	      var shift = this.options.shift;
	      if (typeof this.options.shift === 'function') {
	        shift = this.options.shift.call(this, { top: top, left: left });
	      }
	
	      var shiftTop = undefined,
	          shiftLeft = undefined;
	      if (typeof shift === 'string') {
	        shift = shift.split(' ');
	        shift[1] = shift[1] || shift[0];
	
	        var _shift = shift;
	
	        var _shift2 = _slicedToArray(_shift, 2);
	
	        shiftTop = _shift2[0];
	        shiftLeft = _shift2[1];
	
	        shiftTop = parseFloat(shiftTop, 10);
	        shiftLeft = parseFloat(shiftLeft, 10);
	      } else {
	        shiftTop = shift.top;
	        shiftLeft = shift.left;
	      }
	
	      top += shiftTop;
	      left += shiftLeft;
	
	      return { top: top, left: left };
	    }
	  });
	  return Tether;
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./bootstrap.min.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./bootstrap.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Bootstrap v4.0.0-alpha.3 (http://getbootstrap.com)\n * Copyright 2011-2016 The Bootstrap Authors\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v4.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}button,input,select,textarea{font:inherit}optgroup{font-weight:700}button,input,select{overflow:visible}button,input,select,textarea{margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{cursor:pointer}[disabled]{cursor:default}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}button:-moz-focusring,input:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}@media print{*,::after,::before,::first-letter,::first-line{text-shadow:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.tag{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,::after,::before{-webkit-box-sizing:inherit;box-sizing:inherit}@-ms-viewport{width:device-width}html{font-size:16px;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}body{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:1rem;line-height:1.5;color:#373a3c;background-color:#fff}[tabindex=\"-1\"]:focus{outline:0!important}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #818a91}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}a{color:#0275d8;text-decoration:none}a:focus,a:hover{color:#014c8c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle}[role=button]{cursor:pointer}[role=button],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}table{border-collapse:collapse;background-color:transparent}caption{padding-top:.75rem;padding-bottom:.75rem;color:#818a91;text-align:left;caption-side:bottom}th{text-align:left}label{display:inline-block;margin-bottom:.5rem}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,select,textarea{margin:0;line-height:inherit;border-radius:0}input[type=checkbox]:disabled,input[type=radio]:disabled{cursor:not-allowed}input[type=date],input[type=time],input[type=datetime-local],input[type=month]{-webkit-appearance:listbox}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit}input[type=search]{-webkit-appearance:none}output{display:inline-block}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300}.display-2{font-size:5.5rem;font-weight:300}.display-3{font-size:4.5rem;font-weight:300}.display-4{font-size:3.5rem;font-weight:300}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:5px}.initialism{font-size:90%;text-transform:uppercase}.blockquote{padding:.5rem 1rem;margin-bottom:1rem;font-size:1.25rem;border-left:.25rem solid #eceeef}.blockquote-footer{display:block;font-size:80%;color:#818a91}.blockquote-footer::before{content:\"\\2014   \\A0\"}.blockquote-reverse{padding-right:1rem;padding-left:0;text-align:right;border-right:.25rem solid #eceeef;border-left:0}.blockquote-reverse .blockquote-footer::before{content:\"\"}.blockquote-reverse .blockquote-footer::after{content:\"\\A0   \\2014\"}dl.row>dd+dt{clear:left}.carousel-inner>.carousel-item>a>img,.carousel-inner>.carousel-item>img,.img-fluid{display:block;max-width:100%;height:auto}.img-rounded{border-radius:.3rem}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #ddd;border-radius:.25rem;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#818a91}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}code{padding:.2rem .4rem;font-size:90%;color:#bd4147;background-color:#f7f7f9;border-radius:.25rem}kbd{padding:.2rem .4rem;font-size:90%;color:#fff;background-color:#333;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;margin-top:0;margin-bottom:1rem;font-size:90%;color:#373a3c}pre code{padding:0;font-size:inherit;color:inherit;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px}.container::after{content:\"\";display:table;clear:both}@media (min-width:544px){.container{max-width:576px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:940px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px}.container-fluid::after{content:\"\";display:table;clear:both}.row{margin-left:-15px;margin-right:-15px}.row::after{content:\"\";display:table;clear:both}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1{float:left;width:8.333333%}.col-xs-2{float:left;width:16.666667%}.col-xs-3{float:left;width:25%}.col-xs-4{float:left;width:33.333333%}.col-xs-5{float:left;width:41.666667%}.col-xs-6{float:left;width:50%}.col-xs-7{float:left;width:58.333333%}.col-xs-8{float:left;width:66.666667%}.col-xs-9{float:left;width:75%}.col-xs-10{float:left;width:83.333333%}.col-xs-11{float:left;width:91.666667%}.col-xs-12{float:left;width:100%}.pull-xs-0{right:auto}.pull-xs-1{right:8.333333%}.pull-xs-2{right:16.666667%}.pull-xs-3{right:25%}.pull-xs-4{right:33.333333%}.pull-xs-5{right:41.666667%}.pull-xs-6{right:50%}.pull-xs-7{right:58.333333%}.pull-xs-8{right:66.666667%}.pull-xs-9{right:75%}.pull-xs-10{right:83.333333%}.pull-xs-11{right:91.666667%}.pull-xs-12{right:100%}.push-xs-0{left:auto}.push-xs-1{left:8.333333%}.push-xs-2{left:16.666667%}.push-xs-3{left:25%}.push-xs-4{left:33.333333%}.push-xs-5{left:41.666667%}.push-xs-6{left:50%}.push-xs-7{left:58.333333%}.push-xs-8{left:66.666667%}.push-xs-9{left:75%}.push-xs-10{left:83.333333%}.push-xs-11{left:91.666667%}.push-xs-12{left:100%}.offset-xs-1{margin-left:8.333333%}.offset-xs-2{margin-left:16.666667%}.offset-xs-3{margin-left:25%}.offset-xs-4{margin-left:33.333333%}.offset-xs-5{margin-left:41.666667%}.offset-xs-6{margin-left:50%}.offset-xs-7{margin-left:58.333333%}.offset-xs-8{margin-left:66.666667%}.offset-xs-9{margin-left:75%}.offset-xs-10{margin-left:83.333333%}.offset-xs-11{margin-left:91.666667%}@media (min-width:544px){.col-sm-1{float:left;width:8.333333%}.col-sm-2{float:left;width:16.666667%}.col-sm-3{float:left;width:25%}.col-sm-4{float:left;width:33.333333%}.col-sm-5{float:left;width:41.666667%}.col-sm-6{float:left;width:50%}.col-sm-7{float:left;width:58.333333%}.col-sm-8{float:left;width:66.666667%}.col-sm-9{float:left;width:75%}.col-sm-10{float:left;width:83.333333%}.col-sm-11{float:left;width:91.666667%}.col-sm-12{float:left;width:100%}.pull-sm-0{right:auto}.pull-sm-1{right:8.333333%}.pull-sm-2{right:16.666667%}.pull-sm-3{right:25%}.pull-sm-4{right:33.333333%}.pull-sm-5{right:41.666667%}.pull-sm-6{right:50%}.pull-sm-7{right:58.333333%}.pull-sm-8{right:66.666667%}.pull-sm-9{right:75%}.pull-sm-10{right:83.333333%}.pull-sm-11{right:91.666667%}.pull-sm-12{right:100%}.push-sm-0{left:auto}.push-sm-1{left:8.333333%}.push-sm-2{left:16.666667%}.push-sm-3{left:25%}.push-sm-4{left:33.333333%}.push-sm-5{left:41.666667%}.push-sm-6{left:50%}.push-sm-7{left:58.333333%}.push-sm-8{left:66.666667%}.push-sm-9{left:75%}.push-sm-10{left:83.333333%}.push-sm-11{left:91.666667%}.push-sm-12{left:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md-1{float:left;width:8.333333%}.col-md-2{float:left;width:16.666667%}.col-md-3{float:left;width:25%}.col-md-4{float:left;width:33.333333%}.col-md-5{float:left;width:41.666667%}.col-md-6{float:left;width:50%}.col-md-7{float:left;width:58.333333%}.col-md-8{float:left;width:66.666667%}.col-md-9{float:left;width:75%}.col-md-10{float:left;width:83.333333%}.col-md-11{float:left;width:91.666667%}.col-md-12{float:left;width:100%}.pull-md-0{right:auto}.pull-md-1{right:8.333333%}.pull-md-2{right:16.666667%}.pull-md-3{right:25%}.pull-md-4{right:33.333333%}.pull-md-5{right:41.666667%}.pull-md-6{right:50%}.pull-md-7{right:58.333333%}.pull-md-8{right:66.666667%}.pull-md-9{right:75%}.pull-md-10{right:83.333333%}.pull-md-11{right:91.666667%}.pull-md-12{right:100%}.push-md-0{left:auto}.push-md-1{left:8.333333%}.push-md-2{left:16.666667%}.push-md-3{left:25%}.push-md-4{left:33.333333%}.push-md-5{left:41.666667%}.push-md-6{left:50%}.push-md-7{left:58.333333%}.push-md-8{left:66.666667%}.push-md-9{left:75%}.push-md-10{left:83.333333%}.push-md-11{left:91.666667%}.push-md-12{left:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg-1{float:left;width:8.333333%}.col-lg-2{float:left;width:16.666667%}.col-lg-3{float:left;width:25%}.col-lg-4{float:left;width:33.333333%}.col-lg-5{float:left;width:41.666667%}.col-lg-6{float:left;width:50%}.col-lg-7{float:left;width:58.333333%}.col-lg-8{float:left;width:66.666667%}.col-lg-9{float:left;width:75%}.col-lg-10{float:left;width:83.333333%}.col-lg-11{float:left;width:91.666667%}.col-lg-12{float:left;width:100%}.pull-lg-0{right:auto}.pull-lg-1{right:8.333333%}.pull-lg-2{right:16.666667%}.pull-lg-3{right:25%}.pull-lg-4{right:33.333333%}.pull-lg-5{right:41.666667%}.pull-lg-6{right:50%}.pull-lg-7{right:58.333333%}.pull-lg-8{right:66.666667%}.pull-lg-9{right:75%}.pull-lg-10{right:83.333333%}.pull-lg-11{right:91.666667%}.pull-lg-12{right:100%}.push-lg-0{left:auto}.push-lg-1{left:8.333333%}.push-lg-2{left:16.666667%}.push-lg-3{left:25%}.push-lg-4{left:33.333333%}.push-lg-5{left:41.666667%}.push-lg-6{left:50%}.push-lg-7{left:58.333333%}.push-lg-8{left:66.666667%}.push-lg-9{left:75%}.push-lg-10{left:83.333333%}.push-lg-11{left:91.666667%}.push-lg-12{left:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl-1{float:left;width:8.333333%}.col-xl-2{float:left;width:16.666667%}.col-xl-3{float:left;width:25%}.col-xl-4{float:left;width:33.333333%}.col-xl-5{float:left;width:41.666667%}.col-xl-6{float:left;width:50%}.col-xl-7{float:left;width:58.333333%}.col-xl-8{float:left;width:66.666667%}.col-xl-9{float:left;width:75%}.col-xl-10{float:left;width:83.333333%}.col-xl-11{float:left;width:91.666667%}.col-xl-12{float:left;width:100%}.pull-xl-0{right:auto}.pull-xl-1{right:8.333333%}.pull-xl-2{right:16.666667%}.pull-xl-3{right:25%}.pull-xl-4{right:33.333333%}.pull-xl-5{right:41.666667%}.pull-xl-6{right:50%}.pull-xl-7{right:58.333333%}.pull-xl-8{right:66.666667%}.pull-xl-9{right:75%}.pull-xl-10{right:83.333333%}.pull-xl-11{right:91.666667%}.pull-xl-12{right:100%}.push-xl-0{left:auto}.push-xl-1{left:8.333333%}.push-xl-2{left:16.666667%}.push-xl-3{left:25%}.push-xl-4{left:33.333333%}.push-xl-5{left:41.666667%}.push-xl-6{left:50%}.push-xl-7{left:58.333333%}.push-xl-8{left:66.666667%}.push-xl-9{left:75%}.push-xl-10{left:83.333333%}.push-xl-11{left:91.666667%}.push-xl-12{left:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;max-width:100%;margin-bottom:1rem}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #eceeef}.table thead th{vertical-align:bottom;border-bottom:2px solid #eceeef}.table tbody+tbody{border-top:2px solid #eceeef}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #eceeef}.table-bordered td,.table-bordered th{border:1px solid #eceeef}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table-success,.table-success>td,.table-success>th{background-color:#dff0d8}.table-hover .table-success:hover{background-color:#d0e9c6}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#d0e9c6}.table-info,.table-info>td,.table-info>th{background-color:#d9edf7}.table-hover .table-info:hover{background-color:#c4e3f3}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#c4e3f3}.table-warning,.table-warning>td,.table-warning>th{background-color:#fcf8e3}.table-hover .table-warning:hover{background-color:#faf2cc}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#faf2cc}.table-danger,.table-danger>td,.table-danger>th{background-color:#f2dede}.table-hover .table-danger:hover{background-color:#ebcccc}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#ebcccc}.thead-inverse th{color:#fff;background-color:#373a3c}.thead-default th{color:#55595c;background-color:#eceeef}.table-inverse{color:#eceeef;background-color:#373a3c}.table-inverse td,.table-inverse th,.table-inverse thead th{border-color:#55595c}.table-inverse.table-bordered{border:0}.table-responsive{display:block;width:100%;min-height:.01%;overflow-x:auto}.table-reflow thead{float:left}.table-reflow tbody{display:block;white-space:nowrap}.table-reflow td,.table-reflow th{border-top:1px solid #eceeef;border-left:1px solid #eceeef}.table-reflow td:last-child,.table-reflow th:last-child{border-right:1px solid #eceeef}.table-reflow tbody:last-child tr:last-child td,.table-reflow tbody:last-child tr:last-child th,.table-reflow tfoot:last-child tr:last-child td,.table-reflow tfoot:last-child tr:last-child th,.table-reflow thead:last-child tr:last-child td,.table-reflow thead:last-child tr:last-child th{border-bottom:1px solid #eceeef}.table-reflow tr{float:left}.table-reflow tr td,.table-reflow tr th{display:block!important;border:1px solid #eceeef}.form-control{display:block;width:100%;padding:.5rem .75rem;font-size:1rem;line-height:1.25;color:#55595c;background-color:#fff;background-image:none;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#55595c;background-color:#fff;border-color:#66afe9;outline:0}.form-control::-webkit-input-placeholder{color:#999;opacity:1}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999;opacity:1}.form-control::placeholder{color:#999;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#eceeef;opacity:1}.form-control:disabled{cursor:not-allowed}select.form-control:not([size]):not([multiple]){height:2.5rem}select.form-control:focus::-ms-value{color:#55595c;background-color:#fff}.form-control-file,.form-control-range{display:block}.col-form-label{padding-top:.5rem;padding-bottom:.5rem;margin-bottom:0}.col-form-label-lg{padding-top:.75rem;padding-bottom:.75rem;font-size:1.25rem}.col-form-label-sm{padding-top:.25rem;padding-bottom:.25rem;font-size:.875rem}.col-form-legend{padding-top:.5rem;padding-bottom:.5rem;margin-bottom:0;font-size:1rem}.form-control-static{min-height:2.5rem;padding-top:.5rem;padding-bottom:.5rem;margin-bottom:0}.form-control-static.form-control-lg,.form-control-static.form-control-sm,.input-group-lg>.form-control-static.form-control,.input-group-lg>.form-control-static.input-group-addon,.input-group-lg>.input-group-btn>.form-control-static.btn,.input-group-sm>.form-control-static.form-control,.input-group-sm>.form-control-static.input-group-addon,.input-group-sm>.input-group-btn>.form-control-static.btn{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-sm>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),.input-group-sm>select.input-group-addon:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:1.8125rem}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{padding:.75rem 1.5rem;font-size:1.25rem;border-radius:.3rem}.input-group-lg>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),.input-group-lg>select.input-group-addon:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:3.166667rem}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-check{position:relative;display:block;margin-bottom:.75rem}.form-check+.form-check{margin-top:-.25rem}.form-check.disabled .form-check-label{color:#818a91;cursor:not-allowed}.form-check-label{padding-left:1.25rem;margin-bottom:0;cursor:pointer}.form-check-input{position:absolute;margin-top:.25rem;margin-left:-1.25rem}.form-check-input:only-child{position:static}.form-check-inline{position:relative;display:inline-block;padding-left:1.25rem;margin-bottom:0;vertical-align:middle;cursor:pointer}.form-check-inline+.form-check-inline{margin-left:.75rem}.form-check-inline.disabled{cursor:not-allowed}.form-control-feedback{margin-top:.25rem}.form-control-danger,.form-control-success,.form-control-warning{padding-right:2.25rem;background-repeat:no-repeat;background-position:center right .625rem;-webkit-background-size:1.25rem 1.25rem;background-size:1.25rem 1.25rem}.has-success .checkbox,.has-success .checkbox-inline,.has-success .custom-control,.has-success .form-control-feedback,.has-success .form-control-label,.has-success .radio,.has-success .radio-inline,.has-success.checkbox label,.has-success.checkbox-inline label,.has-success.radio label,.has-success.radio-inline label{color:#5cb85c}.has-success .form-control{border-color:#5cb85c}.has-success .input-group-addon{color:#5cb85c;border-color:#5cb85c;background-color:#eaf6ea}.has-success .form-control-feedback{color:#5cb85c}.has-success .form-control-success{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%235cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning .custom-control,.has-warning .form-control-feedback,.has-warning .form-control-label,.has-warning .radio,.has-warning .radio-inline,.has-warning.checkbox label,.has-warning.checkbox-inline label,.has-warning.radio label,.has-warning.radio-inline label{color:#f0ad4e}.has-warning .form-control{border-color:#f0ad4e}.has-warning .input-group-addon{color:#f0ad4e;border-color:#f0ad4e;background-color:#fff}.has-warning .form-control-feedback{color:#f0ad4e}.has-warning .form-control-warning{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\")}.has-danger .checkbox,.has-danger .checkbox-inline,.has-danger .custom-control,.has-danger .form-control-feedback,.has-danger .form-control-label,.has-danger .radio,.has-danger .radio-inline,.has-danger.checkbox label,.has-danger.checkbox-inline label,.has-danger.radio label,.has-danger.radio-inline label{color:#d9534f}.has-danger .form-control{border-color:#d9534f}.has-danger .input-group-addon{color:#d9534f;border-color:#d9534f;background-color:#fdf7f7}.has-danger .form-control-feedback{color:#d9534f}.has-danger .form-control-danger{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\")}@media (min-width:544px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .form-control-label{margin-bottom:0;vertical-align:middle}.form-inline .form-check{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .form-check-label{padding-left:0}.form-inline .form-check-input{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.btn{display:inline-block;font-weight:400;line-height:1.25;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.5rem 1rem;font-size:1rem;border-radius:.25rem}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn:focus,.btn:hover{text-decoration:none}.btn.focus{text-decoration:none}.btn.active,.btn:active{background-image:none;outline:0}.btn.disabled,.btn:disabled{cursor:not-allowed;opacity:.65}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-primary:hover{color:#fff;background-color:#025aa5;border-color:#01549b}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#025aa5;border-color:#01549b}.btn-primary.active,.btn-primary:active,.open>.btn-primary.dropdown-toggle{color:#fff;background-color:#025aa5;border-color:#01549b;background-image:none}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.btn-primary.dropdown-toggle.focus,.open>.btn-primary.dropdown-toggle:focus,.open>.btn-primary.dropdown-toggle:hover{color:#fff;background-color:#014682;border-color:#01315a}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary:disabled.focus,.btn-primary:disabled:focus{background-color:#0275d8;border-color:#0275d8}.btn-primary.disabled:hover,.btn-primary:disabled:hover{background-color:#0275d8;border-color:#0275d8}.btn-secondary{color:#373a3c;background-color:#fff;border-color:#ccc}.btn-secondary:hover{color:#373a3c;background-color:#e6e6e6;border-color:#adadad}.btn-secondary.focus,.btn-secondary:focus{color:#373a3c;background-color:#e6e6e6;border-color:#adadad}.btn-secondary.active,.btn-secondary:active,.open>.btn-secondary.dropdown-toggle{color:#373a3c;background-color:#e6e6e6;border-color:#adadad;background-image:none}.btn-secondary.active.focus,.btn-secondary.active:focus,.btn-secondary.active:hover,.btn-secondary:active.focus,.btn-secondary:active:focus,.btn-secondary:active:hover,.open>.btn-secondary.dropdown-toggle.focus,.open>.btn-secondary.dropdown-toggle:focus,.open>.btn-secondary.dropdown-toggle:hover{color:#373a3c;background-color:#d4d4d4;border-color:#8c8c8c}.btn-secondary.disabled.focus,.btn-secondary.disabled:focus,.btn-secondary:disabled.focus,.btn-secondary:disabled:focus{background-color:#fff;border-color:#ccc}.btn-secondary.disabled:hover,.btn-secondary:disabled:hover{background-color:#fff;border-color:#ccc}.btn-info{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#2aabd2}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#31b0d5;border-color:#2aabd2}.btn-info.active,.btn-info:active,.open>.btn-info.dropdown-toggle{color:#fff;background-color:#31b0d5;border-color:#2aabd2;background-image:none}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.btn-info.dropdown-toggle.focus,.open>.btn-info.dropdown-toggle:focus,.open>.btn-info.dropdown-toggle:hover{color:#fff;background-color:#269abc;border-color:#1f7e9a}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info:disabled.focus,.btn-info:disabled:focus{background-color:#5bc0de;border-color:#5bc0de}.btn-info.disabled:hover,.btn-info:disabled:hover{background-color:#5bc0de;border-color:#5bc0de}.btn-success{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-success:hover{color:#fff;background-color:#449d44;border-color:#419641}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#449d44;border-color:#419641}.btn-success.active,.btn-success:active,.open>.btn-success.dropdown-toggle{color:#fff;background-color:#449d44;border-color:#419641;background-image:none}.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.open>.btn-success.dropdown-toggle.focus,.open>.btn-success.dropdown-toggle:focus,.open>.btn-success.dropdown-toggle:hover{color:#fff;background-color:#398439;border-color:#2d672d}.btn-success.disabled.focus,.btn-success.disabled:focus,.btn-success:disabled.focus,.btn-success:disabled:focus{background-color:#5cb85c;border-color:#5cb85c}.btn-success.disabled:hover,.btn-success:disabled:hover{background-color:#5cb85c;border-color:#5cb85c}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#eb9316}.btn-warning.focus,.btn-warning:focus{color:#fff;background-color:#ec971f;border-color:#eb9316}.btn-warning.active,.btn-warning:active,.open>.btn-warning.dropdown-toggle{color:#fff;background-color:#ec971f;border-color:#eb9316;background-image:none}.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.open>.btn-warning.dropdown-toggle.focus,.open>.btn-warning.dropdown-toggle:focus,.open>.btn-warning.dropdown-toggle:hover{color:#fff;background-color:#d58512;border-color:#b06d0f}.btn-warning.disabled.focus,.btn-warning.disabled:focus,.btn-warning:disabled.focus,.btn-warning:disabled:focus{background-color:#f0ad4e;border-color:#f0ad4e}.btn-warning.disabled:hover,.btn-warning:disabled:hover{background-color:#f0ad4e;border-color:#f0ad4e}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#c12e2a}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c9302c;border-color:#c12e2a}.btn-danger.active,.btn-danger:active,.open>.btn-danger.dropdown-toggle{color:#fff;background-color:#c9302c;border-color:#c12e2a;background-image:none}.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.open>.btn-danger.dropdown-toggle.focus,.open>.btn-danger.dropdown-toggle:focus,.open>.btn-danger.dropdown-toggle:hover{color:#fff;background-color:#ac2925;border-color:#8b211e}.btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger:disabled.focus,.btn-danger:disabled:focus{background-color:#d9534f;border-color:#d9534f}.btn-danger.disabled:hover,.btn-danger:disabled:hover{background-color:#d9534f;border-color:#d9534f}.btn-outline-primary{color:#0275d8;background-image:none;background-color:transparent;border-color:#0275d8}.btn-outline-primary:hover{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-outline-primary.focus,.btn-outline-primary:focus{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-outline-primary.active,.btn-outline-primary:active,.open>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-outline-primary.active.focus,.btn-outline-primary.active:focus,.btn-outline-primary.active:hover,.btn-outline-primary:active.focus,.btn-outline-primary:active:focus,.btn-outline-primary:active:hover,.open>.btn-outline-primary.dropdown-toggle.focus,.open>.btn-outline-primary.dropdown-toggle:focus,.open>.btn-outline-primary.dropdown-toggle:hover{color:#fff;background-color:#014682;border-color:#01315a}.btn-outline-primary.disabled.focus,.btn-outline-primary.disabled:focus,.btn-outline-primary:disabled.focus,.btn-outline-primary:disabled:focus{border-color:#43a7fd}.btn-outline-primary.disabled:hover,.btn-outline-primary:disabled:hover{border-color:#43a7fd}.btn-outline-secondary{color:#ccc;background-image:none;background-color:transparent;border-color:#ccc}.btn-outline-secondary:hover{color:#fff;background-color:#ccc;border-color:#ccc}.btn-outline-secondary.focus,.btn-outline-secondary:focus{color:#fff;background-color:#ccc;border-color:#ccc}.btn-outline-secondary.active,.btn-outline-secondary:active,.open>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#ccc;border-color:#ccc}.btn-outline-secondary.active.focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.active:hover,.btn-outline-secondary:active.focus,.btn-outline-secondary:active:focus,.btn-outline-secondary:active:hover,.open>.btn-outline-secondary.dropdown-toggle.focus,.open>.btn-outline-secondary.dropdown-toggle:focus,.open>.btn-outline-secondary.dropdown-toggle:hover{color:#fff;background-color:#a1a1a1;border-color:#8c8c8c}.btn-outline-secondary.disabled.focus,.btn-outline-secondary.disabled:focus,.btn-outline-secondary:disabled.focus,.btn-outline-secondary:disabled:focus{border-color:#fff}.btn-outline-secondary.disabled:hover,.btn-outline-secondary:disabled:hover{border-color:#fff}.btn-outline-info{color:#5bc0de;background-image:none;background-color:transparent;border-color:#5bc0de}.btn-outline-info:hover{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-outline-info.focus,.btn-outline-info:focus{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-outline-info.active,.btn-outline-info:active,.open>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-outline-info.active.focus,.btn-outline-info.active:focus,.btn-outline-info.active:hover,.btn-outline-info:active.focus,.btn-outline-info:active:focus,.btn-outline-info:active:hover,.open>.btn-outline-info.dropdown-toggle.focus,.open>.btn-outline-info.dropdown-toggle:focus,.open>.btn-outline-info.dropdown-toggle:hover{color:#fff;background-color:#269abc;border-color:#1f7e9a}.btn-outline-info.disabled.focus,.btn-outline-info.disabled:focus,.btn-outline-info:disabled.focus,.btn-outline-info:disabled:focus{border-color:#b0e1ef}.btn-outline-info.disabled:hover,.btn-outline-info:disabled:hover{border-color:#b0e1ef}.btn-outline-success{color:#5cb85c;background-image:none;background-color:transparent;border-color:#5cb85c}.btn-outline-success:hover{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-outline-success.focus,.btn-outline-success:focus{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-outline-success.active,.btn-outline-success:active,.open>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-outline-success.active.focus,.btn-outline-success.active:focus,.btn-outline-success.active:hover,.btn-outline-success:active.focus,.btn-outline-success:active:focus,.btn-outline-success:active:hover,.open>.btn-outline-success.dropdown-toggle.focus,.open>.btn-outline-success.dropdown-toggle:focus,.open>.btn-outline-success.dropdown-toggle:hover{color:#fff;background-color:#398439;border-color:#2d672d}.btn-outline-success.disabled.focus,.btn-outline-success.disabled:focus,.btn-outline-success:disabled.focus,.btn-outline-success:disabled:focus{border-color:#a3d7a3}.btn-outline-success.disabled:hover,.btn-outline-success:disabled:hover{border-color:#a3d7a3}.btn-outline-warning{color:#f0ad4e;background-image:none;background-color:transparent;border-color:#f0ad4e}.btn-outline-warning:hover{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning.focus,.btn-outline-warning:focus{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning.active,.btn-outline-warning:active,.open>.btn-outline-warning.dropdown-toggle{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning.active.focus,.btn-outline-warning.active:focus,.btn-outline-warning.active:hover,.btn-outline-warning:active.focus,.btn-outline-warning:active:focus,.btn-outline-warning:active:hover,.open>.btn-outline-warning.dropdown-toggle.focus,.open>.btn-outline-warning.dropdown-toggle:focus,.open>.btn-outline-warning.dropdown-toggle:hover{color:#fff;background-color:#d58512;border-color:#b06d0f}.btn-outline-warning.disabled.focus,.btn-outline-warning.disabled:focus,.btn-outline-warning:disabled.focus,.btn-outline-warning:disabled:focus{border-color:#f8d9ac}.btn-outline-warning.disabled:hover,.btn-outline-warning:disabled:hover{border-color:#f8d9ac}.btn-outline-danger{color:#d9534f;background-image:none;background-color:transparent;border-color:#d9534f}.btn-outline-danger:hover{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-outline-danger.focus,.btn-outline-danger:focus{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-outline-danger.active,.btn-outline-danger:active,.open>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-outline-danger.active.focus,.btn-outline-danger.active:focus,.btn-outline-danger.active:hover,.btn-outline-danger:active.focus,.btn-outline-danger:active:focus,.btn-outline-danger:active:hover,.open>.btn-outline-danger.dropdown-toggle.focus,.open>.btn-outline-danger.dropdown-toggle:focus,.open>.btn-outline-danger.dropdown-toggle:hover{color:#fff;background-color:#ac2925;border-color:#8b211e}.btn-outline-danger.disabled.focus,.btn-outline-danger.disabled:focus,.btn-outline-danger:disabled.focus,.btn-outline-danger:disabled:focus{border-color:#eba5a3}.btn-outline-danger.disabled:hover,.btn-outline-danger:disabled:hover{border-color:#eba5a3}.btn-link{font-weight:400;color:#0275d8;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link:disabled{background-color:transparent}.btn-link,.btn-link:active,.btn-link:focus{border-color:transparent}.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#014c8c;text-decoration:underline;background-color:transparent}.btn-link:disabled:focus,.btn-link:disabled:hover{color:#818a91;text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:.75rem 1.5rem;font-size:1.25rem;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-timing-function:ease;-o-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.35s;-o-transition-duration:.35s;transition-duration:.35s;-webkit-transition-property:height;-o-transition-property:height;transition-property:height}.dropdown,.dropup{position:relative}.dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.3em;vertical-align:middle;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-left:.3em solid transparent}.dropdown-toggle:focus{outline:0}.dropup .dropdown-toggle::after{border-top:0;border-bottom:.3em solid}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:1rem;color:#373a3c;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-divider{height:1px;margin:.5rem 0;overflow:hidden;background-color:#e5e5e5}.dropdown-item{display:block;width:100%;padding:3px 20px;clear:both;font-weight:400;color:#373a3c;text-align:inherit;white-space:nowrap;background:0 0;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#2b2d2f;text-decoration:none;background-color:#f5f5f5}.dropdown-item.active,.dropdown-item.active:focus,.dropdown-item.active:hover{color:#fff;text-decoration:none;background-color:#0275d8;outline:0}.dropdown-item.disabled,.dropdown-item.disabled:focus,.dropdown-item.disabled:hover{color:#818a91}.dropdown-item.disabled:focus,.dropdown-item.disabled:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:\"progid:DXImageTransform.Microsoft.gradient(enabled = false)\"}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{right:0;left:auto}.dropdown-menu-left{right:auto;left:0}.dropdown-header{display:block;padding:5px 20px;font-size:.875rem;color:#818a91;white-space:nowrap}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{content:\"\";border-top:0;border-bottom:.3em solid}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:2}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-.5rem}.btn-toolbar::after{content:\"\";display:table;clear:both}.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:.5rem}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn+.dropdown-toggle-split::after{margin-left:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:1.125rem;padding-left:1.125rem}.btn .caret{margin-left:0}.btn-group-lg>.btn .caret,.btn-lg .caret{border-width:.3em .3em 0;border-bottom-width:0}.dropup .btn-group-lg>.btn .caret,.dropup .btn-lg .caret{border-width:0 .3em .3em}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group::after{content:\"\";display:table;clear:both}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-right-radius:0;border-top-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;width:100%;display:table;border-collapse:separate}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:active,.input-group .form-control:focus,.input-group .form-control:hover{z-index:3}.input-group .form-control,.input-group-addon,.input-group-btn{display:table-cell}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.25;color:#55595c;text-align:center;background-color:#eceeef;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.input-group-addon.form-control-sm,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.input-group-addon.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-addon.form-control-lg,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.input-group-addon.btn{padding:.75rem 1.5rem;font-size:1.25rem;border-radius:.3rem}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:not(:last-child),.input-group-addon:not(:last-child),.input-group-btn:not(:first-child)>.btn-group:not(:last-child)>.btn,.input-group-btn:not(:first-child)>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group>.btn,.input-group-btn:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:not(:last-child){border-right:0}.input-group .form-control:not(:first-child),.input-group-addon:not(:first-child),.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group>.btn,.input-group-btn:not(:first-child)>.dropdown-toggle,.input-group-btn:not(:last-child)>.btn-group:not(:first-child)>.btn,.input-group-btn:not(:last-child)>.btn:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.form-control+.input-group-addon:not(:first-child){border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:3}.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group{margin-right:-1px}.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group{z-index:2;margin-left:-1px}.input-group-btn:not(:first-child)>.btn-group:active,.input-group-btn:not(:first-child)>.btn-group:focus,.input-group-btn:not(:first-child)>.btn-group:hover,.input-group-btn:not(:first-child)>.btn:active,.input-group-btn:not(:first-child)>.btn:focus,.input-group-btn:not(:first-child)>.btn:hover{z-index:3}.custom-control{position:relative;display:inline;padding-left:1.5rem;cursor:pointer}.custom-control+.custom-control{margin-left:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-indicator{color:#fff;background-color:#0074d9}.custom-control-input:focus~.custom-control-indicator{-webkit-box-shadow:0 0 0 .075rem #fff,0 0 0 .2rem #0074d9;box-shadow:0 0 0 .075rem #fff,0 0 0 .2rem #0074d9}.custom-control-input:active~.custom-control-indicator{color:#fff;background-color:#84c6ff}.custom-control-input:disabled~.custom-control-indicator{cursor:not-allowed;background-color:#eee}.custom-control-input:disabled~.custom-control-description{color:#767676;cursor:not-allowed}.custom-control-indicator{position:absolute;top:.0625rem;left:0;display:block;width:1rem;height:1rem;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#ddd;background-repeat:no-repeat;background-position:center center;-webkit-background-size:50% 50%;background-size:50% 50%}.custom-checkbox .custom-control-indicator{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-indicator{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-indicator{background-color:#0074d9;background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-radio .custom-control-indicator{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-indicator{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-controls-stacked .custom-control{display:inline}.custom-controls-stacked .custom-control::after{display:block;margin-bottom:.25rem;content:\"\"}.custom-controls-stacked .custom-control+.custom-control{margin-left:0}.custom-select{display:inline-block;max-width:100%;padding:.375rem 1.75rem .375rem .75rem;padding-right:.75rem\\9;color:#55595c;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center;background-image:none\\9;-webkit-background-size:8px 10px;background-size:8px 10px;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;-moz-appearance:none;-webkit-appearance:none}.custom-select:focus{border-color:#51a7e8;outline:0}.custom-select:focus::-ms-value{color:#55595c;background-color:#fff}.custom-select:disabled{color:#818a91;cursor:not-allowed;background-color:#eceeef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{padding-top:.375rem;padding-bottom:.375rem;font-size:75%}.custom-file{position:relative;display:inline-block;max-width:100%;height:2.5rem;cursor:pointer}.custom-file-input{min-width:14rem;max-width:100%;margin:0;filter:alpha(opacity=0);opacity:0}.custom-file-control{position:absolute;top:0;right:0;left:0;z-index:5;height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#555;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;border:1px solid #ddd;border-radius:.25rem}.custom-file-control:lang(en)::after{content:\"Choose file...\"}.custom-file-control::before{position:absolute;top:-1px;right:-1px;bottom:-1px;z-index:6;display:block;height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#555;background-color:#eee;border:1px solid #ddd;border-radius:0 .25rem .25rem 0}.custom-file-control:lang(en)::before{content:\"Browse\"}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:inline-block}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#818a91}.nav-link.disabled,.nav-link.disabled:focus,.nav-link.disabled:hover{color:#818a91;cursor:not-allowed;background-color:transparent}.nav-inline .nav-item{display:inline-block}.nav-inline .nav-item+.nav-item,.nav-inline .nav-link+.nav-link{margin-left:1rem}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs::after{content:\"\";display:table;clear:both}.nav-tabs .nav-item{float:left;margin-bottom:-1px}.nav-tabs .nav-item+.nav-item{margin-left:.2rem}.nav-tabs .nav-link{display:block;padding:.5em 1em;border:1px solid transparent;border-top-right-radius:.25rem;border-top-left-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#eceeef #eceeef #ddd}.nav-tabs .nav-link.disabled,.nav-tabs .nav-link.disabled:focus,.nav-tabs .nav-link.disabled:hover{color:#818a91;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.open .nav-link,.nav-tabs .nav-item.open .nav-link:focus,.nav-tabs .nav-item.open .nav-link:hover,.nav-tabs .nav-link.active,.nav-tabs .nav-link.active:focus,.nav-tabs .nav-link.active:hover{color:#55595c;background-color:#fff;border-color:#ddd #ddd transparent}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.nav-pills::after{content:\"\";display:table;clear:both}.nav-pills .nav-item{float:left}.nav-pills .nav-item+.nav-item{margin-left:.2rem}.nav-pills .nav-link{display:block;padding:.5em 1em;border-radius:.25rem}.nav-pills .nav-item.open .nav-link,.nav-pills .nav-item.open .nav-link:focus,.nav-pills .nav-item.open .nav-link:hover,.nav-pills .nav-link.active,.nav-pills .nav-link.active:focus,.nav-pills .nav-link.active:hover{color:#fff;cursor:default;background-color:#0275d8}.nav-stacked .nav-item{display:block;float:none}.nav-stacked .nav-item+.nav-item{margin-top:.2rem;margin-left:0}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;padding:.5rem 1rem}.navbar::after{content:\"\";display:table;clear:both}@media (min-width:544px){.navbar{border-radius:.25rem}}.navbar-full{z-index:1000}@media (min-width:544px){.navbar-full{border-radius:0}}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:544px){.navbar-fixed-bottom,.navbar-fixed-top{border-radius:0}}.navbar-fixed-top{top:0}.navbar-fixed-bottom{bottom:0}.navbar-sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1030;width:100%}@media (min-width:544px){.navbar-sticky-top{border-radius:0}}.navbar-brand{float:left;padding-top:.25rem;padding-bottom:.25rem;margin-right:1rem;font-size:1.25rem}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-brand>img{display:block}.navbar-divider{float:left;width:1px;padding-top:.425rem;padding-bottom:.425rem;margin-right:1rem;margin-left:1rem;overflow:hidden}.navbar-divider::before{content:\"\\A0\"}.navbar-toggler{padding:.5rem .75rem;font-size:1.25rem;line-height:1;background:0 0;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-nav .nav-item{float:left}.navbar-nav .nav-link{display:block;padding-top:.425rem;padding-bottom:.425rem}.navbar-nav .nav-link+.nav-link{margin-left:1rem}.navbar-nav .nav-item+.nav-item{margin-left:1rem}.navbar-light .navbar-brand{color:rgba(0,0,0,.8)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.8)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.6)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .active>.nav-link:focus,.navbar-light .navbar-nav .active>.nav-link:hover,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.active:focus,.navbar-light .navbar-nav .nav-link.active:hover,.navbar-light .navbar-nav .nav-link.open,.navbar-light .navbar-nav .nav-link.open:focus,.navbar-light .navbar-nav .nav-link.open:hover,.navbar-light .navbar-nav .open>.nav-link,.navbar-light .navbar-nav .open>.nav-link:focus,.navbar-light .navbar-nav .open>.nav-link:hover{color:rgba(0,0,0,.8)}.navbar-light .navbar-divider{background-color:rgba(0,0,0,.075)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .active>.nav-link:focus,.navbar-dark .navbar-nav .active>.nav-link:hover,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.active:focus,.navbar-dark .navbar-nav .nav-link.active:hover,.navbar-dark .navbar-nav .nav-link.open,.navbar-dark .navbar-nav .nav-link.open:focus,.navbar-dark .navbar-nav .nav-link.open:hover,.navbar-dark .navbar-nav .open>.nav-link,.navbar-dark .navbar-nav .open>.nav-link:focus,.navbar-dark .navbar-nav .open>.nav-link:hover{color:#fff}.navbar-dark .navbar-divider{background-color:rgba(255,255,255,.075)}.navbar-toggleable-xs::after{content:\"\";display:table;clear:both}@media (max-width:543px){.navbar-toggleable-xs .navbar-nav .nav-item{float:none;margin-left:0}}@media (min-width:544px){.navbar-toggleable-xs{display:block!important}}.navbar-toggleable-sm::after{content:\"\";display:table;clear:both}@media (max-width:767px){.navbar-toggleable-sm .navbar-nav .nav-item{float:none;margin-left:0}}@media (min-width:768px){.navbar-toggleable-sm{display:block!important}}.navbar-toggleable-md::after{content:\"\";display:table;clear:both}@media (max-width:991px){.navbar-toggleable-md .navbar-nav .nav-item{float:none;margin-left:0}}@media (min-width:992px){.navbar-toggleable-md{display:block!important}}.card{position:relative;display:block;margin-bottom:.75rem;background-color:#fff;border-radius:.25rem;border:1px solid rgba(0,0,0,.125)}.card-block{padding:1.25rem}.card-block::after{content:\"\";display:table;clear:both}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card>.list-group:first-child .list-group-item:first-child{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-header{padding:.75rem 1.25rem;background-color:#f5f5f5;border-bottom:1px solid rgba(0,0,0,.125)}.card-header::after{content:\"\";display:table;clear:both}.card-header:first-child{border-radius:.25rem .25rem 0 0}.card-footer{padding:.75rem 1.25rem;background-color:#f5f5f5;border-top:1px solid rgba(0,0,0,.125)}.card-footer::after{content:\"\";display:table;clear:both}.card-footer:last-child{border-radius:0 0 .25rem .25rem}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-primary{background-color:#0275d8;border-color:#0275d8}.card-primary .card-footer,.card-primary .card-header{background-color:transparent}.card-success{background-color:#5cb85c;border-color:#5cb85c}.card-success .card-footer,.card-success .card-header{background-color:transparent}.card-info{background-color:#5bc0de;border-color:#5bc0de}.card-info .card-footer,.card-info .card-header{background-color:transparent}.card-warning{background-color:#f0ad4e;border-color:#f0ad4e}.card-warning .card-footer,.card-warning .card-header{background-color:transparent}.card-danger{background-color:#d9534f;border-color:#d9534f}.card-danger .card-footer,.card-danger .card-header{background-color:transparent}.card-outline-primary{background-color:transparent;border-color:#0275d8}.card-outline-secondary{background-color:transparent;border-color:#ccc}.card-outline-info{background-color:transparent;border-color:#5bc0de}.card-outline-success{background-color:transparent;border-color:#5cb85c}.card-outline-warning{background-color:transparent;border-color:#f0ad4e}.card-outline-danger{background-color:transparent;border-color:#d9534f}.card-inverse .card-footer,.card-inverse .card-header{border-color:rgba(255,255,255,.2)}.card-inverse .card-blockquote,.card-inverse .card-footer,.card-inverse .card-header,.card-inverse .card-title{color:#fff}.card-inverse .card-blockquote .blockquote-footer,.card-inverse .card-link,.card-inverse .card-subtitle,.card-inverse .card-text{color:rgba(255,255,255,.65)}.card-inverse .card-link:focus,.card-inverse .card-link:hover{color:#fff}.card-blockquote{padding:0;margin-bottom:0;border-left:0}.card-img{border-radius:.25rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img-top{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}@media (min-width:544px){.card-deck{display:table;width:100%;margin-bottom:.75rem;table-layout:fixed;border-spacing:1.25rem 0}.card-deck .card{display:table-cell;margin-bottom:0;vertical-align:top}.card-deck-wrapper{margin-right:-1.25rem;margin-left:-1.25rem}}@media (min-width:544px){.card-group{display:table;width:100%;table-layout:fixed}.card-group .card{display:table-cell;vertical-align:top}.card-group .card+.card{margin-left:0;border-left:0}.card-group .card:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.card-group .card:first-child .card-img-top{border-top-right-radius:0}.card-group .card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group .card:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.card-group .card:last-child .card-img-top{border-top-left-radius:0}.card-group .card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group .card:not(:first-child):not(:last-child){border-radius:0}.card-group .card:not(:first-child):not(:last-child) .card-img-bottom,.card-group .card:not(:first-child):not(:last-child) .card-img-top{border-radius:0}}@media (min-width:544px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem}.card-columns .card{display:inline-block;width:100%}}.breadcrumb{padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#eceeef;border-radius:.25rem}.breadcrumb::after{content:\"\";display:table;clear:both}.breadcrumb-item{float:left}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:#818a91;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#818a91}.pagination{display:inline-block;padding-left:0;margin-top:1rem;margin-bottom:1rem;border-radius:.25rem}.page-item{display:inline}.page-item:first-child .page-link{margin-left:0;border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.page-item:last-child .page-link{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.page-item.active .page-link,.page-item.active .page-link:focus,.page-item.active .page-link:hover{z-index:2;color:#fff;cursor:default;background-color:#0275d8;border-color:#0275d8}.page-item.disabled .page-link,.page-item.disabled .page-link:focus,.page-item.disabled .page-link:hover{color:#818a91;pointer-events:none;cursor:not-allowed;background-color:#fff;border-color:#ddd}.page-link{position:relative;float:left;padding:.5rem .75rem;margin-left:-1px;color:#0275d8;text-decoration:none;background-color:#fff;border:1px solid #ddd}.page-link:focus,.page-link:hover{color:#014c8c;background-color:#eceeef;border-color:#ddd}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem}.pagination-lg .page-item:first-child .page-link{border-bottom-left-radius:.3rem;border-top-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-bottom-right-radius:.3rem;border-top-right-radius:.3rem}.pagination-sm .page-link{padding:.275rem .75rem;font-size:.875rem}.pagination-sm .page-item:first-child .page-link{border-bottom-left-radius:.2rem;border-top-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-bottom-right-radius:.2rem;border-top-right-radius:.2rem}.tag{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.tag:empty{display:none}.btn .tag{position:relative;top:-1px}a.tag:focus,a.tag:hover{color:#fff;text-decoration:none;cursor:pointer}.tag-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.tag-default{background-color:#818a91}.tag-default[href]:focus,.tag-default[href]:hover{background-color:#687077}.tag-primary{background-color:#0275d8}.tag-primary[href]:focus,.tag-primary[href]:hover{background-color:#025aa5}.tag-success{background-color:#5cb85c}.tag-success[href]:focus,.tag-success[href]:hover{background-color:#449d44}.tag-info{background-color:#5bc0de}.tag-info[href]:focus,.tag-info[href]:hover{background-color:#31b0d5}.tag-warning{background-color:#f0ad4e}.tag-warning[href]:focus,.tag-warning[href]:hover{background-color:#ec971f}.tag-danger{background-color:#d9534f}.tag-danger[href]:focus,.tag-danger[href]:hover{background-color:#c9302c}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#eceeef;border-radius:.3rem}@media (min-width:544px){.jumbotron{padding:4rem 2rem}}.jumbotron-hr{border-top-color:#d0d5d8}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{padding:15px;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:35px}.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{background-color:#dff0d8;border-color:#d0e9c6;color:#3c763d}.alert-success hr{border-top-color:#c1e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{background-color:#d9edf7;border-color:#bcdff1;color:#31708f}.alert-info hr{border-top-color:#a6d5ec}.alert-info .alert-link{color:#245269}.alert-warning{background-color:#fcf8e3;border-color:#faf2cc;color:#8a6d3b}.alert-warning hr{border-top-color:#f7ecb5}.alert-warning .alert-link{color:#66512c}.alert-danger{background-color:#f2dede;border-color:#ebcccc;color:#a94442}.alert-danger hr{border-top-color:#e4b9b9}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:block;width:100%;height:1rem;margin-bottom:1rem}.progress[value]{background-color:#eee;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.25rem}.progress[value]::-ms-fill{background-color:#0074d9;border:0}.progress[value]::-moz-progress-bar{background-color:#0074d9;border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.progress[value]::-webkit-progress-value{background-color:#0074d9;border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.progress[value=\"100\"]::-moz-progress-bar{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.progress[value=\"100\"]::-webkit-progress-value{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.progress[value]::-webkit-progress-bar{background-color:#eee;border-radius:.25rem}.progress[value],base::-moz-progress-bar{background-color:#eee;border-radius:.25rem}@media screen and (min-width:0\\0){.progress{background-color:#eee;border-radius:.25rem}.progress-bar{display:inline-block;height:1rem;text-indent:-999rem;background-color:#0074d9;border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.progress[width=\"100%\"]{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}}.progress-striped[value]::-webkit-progress-value{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:1rem 1rem;background-size:1rem 1rem}.progress-striped[value]::-moz-progress-bar{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-striped[value]::-ms-fill{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}@media screen and (min-width:0\\0){.progress-bar-striped{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:1rem 1rem;background-size:1rem 1rem}}.progress-animated[value]::-webkit-progress-value{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-animated[value]::-moz-progress-bar{animation:progress-bar-stripes 2s linear infinite}@media screen and (min-width:0\\0){.progress-animated .progress-bar-striped{-webkit-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}}.progress-success[value]::-webkit-progress-value{background-color:#5cb85c}.progress-success[value]::-moz-progress-bar{background-color:#5cb85c}.progress-success[value]::-ms-fill{background-color:#5cb85c}@media screen and (min-width:0\\0){.progress-success .progress-bar{background-color:#5cb85c}}.progress-info[value]::-webkit-progress-value{background-color:#5bc0de}.progress-info[value]::-moz-progress-bar{background-color:#5bc0de}.progress-info[value]::-ms-fill{background-color:#5bc0de}@media screen and (min-width:0\\0){.progress-info .progress-bar{background-color:#5bc0de}}.progress-warning[value]::-webkit-progress-value{background-color:#f0ad4e}.progress-warning[value]::-moz-progress-bar{background-color:#f0ad4e}.progress-warning[value]::-ms-fill{background-color:#f0ad4e}@media screen and (min-width:0\\0){.progress-warning .progress-bar{background-color:#f0ad4e}}.progress-danger[value]::-webkit-progress-value{background-color:#d9534f}.progress-danger[value]::-moz-progress-bar{background-color:#d9534f}.progress-danger[value]::-ms-fill{background-color:#d9534f}@media screen and (min-width:0\\0){.progress-danger .progress-bar{background-color:#d9534f}}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{overflow:hidden}.media-body{width:10000px}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-object{display:block}.media-object.img-thumbnail{max-width:none}.media-right{padding-left:10px}.media-left{padding-right:10px}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{padding-left:0;margin-bottom:0}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{color:#818a91;cursor:not-allowed;background-color:#eceeef}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#818a91}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;text-decoration:none;background-color:#0275d8;border-color:#0275d8}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#a8d6fe}.list-group-flush .list-group-item{border-radius:0}.list-group-item-action{width:100%;color:#555;text-align:inherit}.list-group-item-action .list-group-item-heading{color:#333}.list-group-item-action:focus,.list-group-item-action:hover{color:#555;text-decoration:none;background-color:#f5f5f5}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover,button.list-group-item-success.active,button.list-group-item-success.active:focus,button.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover,button.list-group-item-info.active,button.list-group-item-info.active:focus,button.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover,button.list-group-item-warning.active,button.list-group-item-warning.active:focus,button.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover,button.list-group-item-danger.active,button.list-group-item-danger.active:focus,button.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9{padding-bottom:42.857143%}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.embed-responsive-1by1{padding-bottom:100%}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.5}button.close{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0;-webkit-overflow-scrolling:touch}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;transition:-webkit-transform .3s ease-out;-o-transition:transform .3s ease-out,-o-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out,-o-transform .3s ease-out;-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.in{opacity:.5}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header::after{content:\"\";display:table;clear:both}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.5}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer::after{content:\"\";display:table;clear:both}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:544px){.modal-dialog{max-width:600px;margin:30px auto}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg{max-width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.in{opacity:.9}.tooltip.bs-tether-element-attached-bottom,.tooltip.tooltip-top{padding:5px 0;margin-top:-3px}.tooltip.bs-tether-element-attached-bottom .tooltip-arrow,.tooltip.tooltip-top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.bs-tether-element-attached-left,.tooltip.tooltip-right{padding:0 5px;margin-left:3px}.tooltip.bs-tether-element-attached-left .tooltip-arrow,.tooltip.tooltip-right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.bs-tether-element-attached-top,.tooltip.tooltip-bottom{padding:5px 0;margin-top:3px}.tooltip.bs-tether-element-attached-top .tooltip-arrow,.tooltip.tooltip-bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bs-tether-element-attached-right,.tooltip.tooltip-left{padding:0 5px;margin-left:-3px}.tooltip.bs-tether-element-attached-right .tooltip-arrow,.tooltip.tooltip-left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;padding:1px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover.bs-tether-element-attached-bottom,.popover.popover-top{margin-top:-10px}.popover.bs-tether-element-attached-bottom .popover-arrow,.popover.popover-top .popover-arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.popover.bs-tether-element-attached-bottom .popover-arrow::after,.popover.popover-top .popover-arrow::after{bottom:1px;margin-left:-10px;content:\"\";border-top-color:#fff;border-bottom-width:0}.popover.bs-tether-element-attached-left,.popover.popover-right{margin-left:10px}.popover.bs-tether-element-attached-left .popover-arrow,.popover.popover-right .popover-arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:rgba(0,0,0,.25);border-left-width:0}.popover.bs-tether-element-attached-left .popover-arrow::after,.popover.popover-right .popover-arrow::after{bottom:-10px;left:1px;content:\"\";border-right-color:#fff;border-left-width:0}.popover.bs-tether-element-attached-top,.popover.popover-bottom{margin-top:10px}.popover.bs-tether-element-attached-top .popover-arrow,.popover.popover-bottom .popover-arrow{top:-11px;left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-top .popover-arrow::after,.popover.popover-bottom .popover-arrow::after{top:1px;margin-left:-10px;content:\"\";border-top-width:0;border-bottom-color:#fff}.popover.bs-tether-element-attached-right,.popover.popover-left{margin-left:-10px}.popover.bs-tether-element-attached-right .popover-arrow,.popover.popover-left .popover-arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-right .popover-arrow::after,.popover.popover-left .popover-arrow::after{right:1px;bottom:-10px;content:\"\";border-right-width:0;border-left-color:#fff}.popover-title{padding:8px 14px;margin:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:.2375rem .2375rem 0 0}.popover-title:empty{display:none}.popover-content{padding:9px 14px}.popover-arrow,.popover-arrow::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover-arrow{border-width:11px}.popover-arrow::after{content:\"\";border-width:10px}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner>.carousel-item{position:relative;display:none;-webkit-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner>.carousel-item>a>img,.carousel-inner>.carousel-item>img{line-height:1}@media all and (transform-3d),(-webkit-transform-3d){.carousel-inner>.carousel-item{-webkit-transition:-webkit-transform .6s ease-in-out;transition:-webkit-transform .6s ease-in-out;-o-transition:transform .6s ease-in-out,-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out,-o-transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-inner>.carousel-item.active.right,.carousel-inner>.carousel-item.next{left:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-inner>.carousel-item.active.left,.carousel-inner>.carousel-item.prev{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-inner>.carousel-item.active,.carousel-inner>.carousel-item.next.left,.carousel-inner>.carousel-item.prev.right{left:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;bottom:0;left:0;width:15%;font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6);opacity:.5}.carousel-control.left{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)}.carousel-control.right{right:0;left:auto;background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)}.carousel-control:focus,.carousel-control:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control .icon-next,.carousel-control .icon-prev{position:absolute;top:50%;z-index:5;display:inline-block;width:20px;height:20px;margin-top:-10px;font-family:serif;line-height:1}.carousel-control .icon-prev{left:50%;margin-left:-10px}.carousel-control .icon-next{right:50%;margin-right:-10px}.carousel-control .icon-prev::before{content:\"\\2039\"}.carousel-control .icon-next::before{content:\"\\203A\"}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;padding-left:0;margin-left:-30%;text-align:center;list-style:none}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;cursor:pointer;background-color:transparent;border:1px solid #fff;border-radius:10px}.carousel-indicators .active{width:12px;height:12px;margin:0;background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media (min-width:544px){.carousel-control .icon-next,.carousel-control .icon-prev{width:30px;height:30px;margin-top:-15px;font-size:30px}.carousel-control .icon-prev{margin-left:-15px}.carousel-control .icon-next{margin-right:-15px}.carousel-caption{right:20%;left:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.bg-inverse{background-color:#373a3c}.bg-faded{background-color:#f7f7f9}.bg-primary{color:#fff!important;background-color:#0275d8!important}a.bg-primary:focus,a.bg-primary:hover{background-color:#025aa5!important}.bg-success{color:#fff!important;background-color:#5cb85c!important}a.bg-success:focus,a.bg-success:hover{background-color:#449d44!important}.bg-info{color:#fff!important;background-color:#5bc0de!important}a.bg-info:focus,a.bg-info:hover{background-color:#31b0d5!important}.bg-warning{color:#fff!important;background-color:#f0ad4e!important}a.bg-warning:focus,a.bg-warning:hover{background-color:#ec971f!important}.bg-danger{color:#fff!important;background-color:#d9534f!important}a.bg-danger:focus,a.bg-danger:hover{background-color:#c9302c!important}.clearfix::after{content:\"\";display:table;clear:both}.d-block{display:block!important}.d-inline-block{display:inline-block!important}.d-inline{display:inline!important}.pull-xs-left{float:left!important}.pull-xs-right{float:right!important}.pull-xs-none{float:none!important}@media (min-width:544px){.pull-sm-left{float:left!important}.pull-sm-right{float:right!important}.pull-sm-none{float:none!important}}@media (min-width:768px){.pull-md-left{float:left!important}.pull-md-right{float:right!important}.pull-md-none{float:none!important}}@media (min-width:992px){.pull-lg-left{float:left!important}.pull-lg-right{float:right!important}.pull-lg-none{float:none!important}}@media (min-width:1200px){.pull-xl-left{float:left!important}.pull-xl-right{float:right!important}.pull-xl-none{float:none!important}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.w-100{width:100%!important}.m-x-auto{margin-right:auto!important;margin-left:auto!important}.m-a-0{margin:0 0!important}.m-t-0{margin-top:0!important}.m-r-0{margin-right:0!important}.m-b-0{margin-bottom:0!important}.m-l-0{margin-left:0!important}.m-x-0{margin-right:0!important;margin-left:0!important}.m-y-0{margin-top:0!important;margin-bottom:0!important}.m-a-1{margin:1rem 1rem!important}.m-t-1{margin-top:1rem!important}.m-r-1{margin-right:1rem!important}.m-b-1{margin-bottom:1rem!important}.m-l-1{margin-left:1rem!important}.m-x-1{margin-right:1rem!important;margin-left:1rem!important}.m-y-1{margin-top:1rem!important;margin-bottom:1rem!important}.m-a-2{margin:1.5rem 1.5rem!important}.m-t-2{margin-top:1.5rem!important}.m-r-2{margin-right:1.5rem!important}.m-b-2{margin-bottom:1.5rem!important}.m-l-2{margin-left:1.5rem!important}.m-x-2{margin-right:1.5rem!important;margin-left:1.5rem!important}.m-y-2{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-a-3{margin:3rem 3rem!important}.m-t-3{margin-top:3rem!important}.m-r-3{margin-right:3rem!important}.m-b-3{margin-bottom:3rem!important}.m-l-3{margin-left:3rem!important}.m-x-3{margin-right:3rem!important;margin-left:3rem!important}.m-y-3{margin-top:3rem!important;margin-bottom:3rem!important}.p-a-0{padding:0 0!important}.p-t-0{padding-top:0!important}.p-r-0{padding-right:0!important}.p-b-0{padding-bottom:0!important}.p-l-0{padding-left:0!important}.p-x-0{padding-right:0!important;padding-left:0!important}.p-y-0{padding-top:0!important;padding-bottom:0!important}.p-a-1{padding:1rem 1rem!important}.p-t-1{padding-top:1rem!important}.p-r-1{padding-right:1rem!important}.p-b-1{padding-bottom:1rem!important}.p-l-1{padding-left:1rem!important}.p-x-1{padding-right:1rem!important;padding-left:1rem!important}.p-y-1{padding-top:1rem!important;padding-bottom:1rem!important}.p-a-2{padding:1.5rem 1.5rem!important}.p-t-2{padding-top:1.5rem!important}.p-r-2{padding-right:1.5rem!important}.p-b-2{padding-bottom:1.5rem!important}.p-l-2{padding-left:1.5rem!important}.p-x-2{padding-right:1.5rem!important;padding-left:1.5rem!important}.p-y-2{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-a-3{padding:3rem 3rem!important}.p-t-3{padding-top:3rem!important}.p-r-3{padding-right:3rem!important}.p-b-3{padding-bottom:3rem!important}.p-l-3{padding-left:3rem!important}.p-x-3{padding-right:3rem!important;padding-left:3rem!important}.p-y-3{padding-top:3rem!important;padding-bottom:3rem!important}.pos-f-t{position:fixed;top:0;right:0;left:0;z-index:1030}.text-justify{text-align:justify!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-xs-left{text-align:left!important}.text-xs-right{text-align:right!important}.text-xs-center{text-align:center!important}@media (min-width:544px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-normal{font-weight:400}.font-weight-bold{font-weight:700}.font-italic{font-style:italic}.text-muted{color:#818a91!important}a.text-muted:focus,a.text-muted:hover{color:#687077}.text-primary{color:#0275d8!important}a.text-primary:focus,a.text-primary:hover{color:#025aa5}.text-success{color:#5cb85c!important}a.text-success:focus,a.text-success:hover{color:#449d44}.text-info{color:#5bc0de!important}a.text-info:focus,a.text-info:hover{color:#31b0d5}.text-warning{color:#f0ad4e!important}a.text-warning:focus,a.text-warning:hover{color:#ec971f}.text-danger{color:#d9534f!important}a.text-danger:focus,a.text-danger:hover{color:#c9302c}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.invisible{visibility:hidden!important}.hidden-xs-up{display:none!important}@media (max-width:543px){.hidden-xs-down{display:none!important}}@media (min-width:544px){.hidden-sm-up{display:none!important}}@media (max-width:767px){.hidden-sm-down{display:none!important}}@media (min-width:768px){.hidden-md-up{display:none!important}}@media (max-width:991px){.hidden-md-down{display:none!important}}@media (min-width:992px){.hidden-lg-up{display:none!important}}@media (max-width:1199px){.hidden-lg-down{display:none!important}}@media (min-width:1200px){.hidden-xl-up{display:none!important}}.hidden-xl-down{display:none!important}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}\n/*# sourceMappingURL=bootstrap.min.css.map */", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 11 */
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
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
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
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./main.css");
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

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=vendor.bundle.js.map