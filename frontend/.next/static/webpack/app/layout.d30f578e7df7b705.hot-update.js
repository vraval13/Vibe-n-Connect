"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"98108821c6a1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NWJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjk4MTA4ODIxYzZhMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/contexts/SocketContext.js":
/*!*******************************************!*\
  !*** ./src/app/contexts/SocketContext.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SocketContext: function() { return /* binding */ SocketContext; },\n/* harmony export */   SocketContextProvider: function() { return /* binding */ SocketContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthContext */ \"(app-pages-browser)/./src/app/contexts/AuthContext.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ SocketContext,SocketContextProvider auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst SocketContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [onlineUsers, setOnlineUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { authUser } = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuthContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (authUser) {\n            const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:3001\", {});\n            setSocket(socket);\n            return ()=>socket.close();\n        } else {\n            if (socket) {\n                socket.close();\n                setSocket(nul);\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocketContext.Provider, {\n        value: {\n            socket,\n            onlineUsers\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\contexts\\\\SocketContext.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SocketContextProvider, \"FJo6AiOyKNopl4q9UYP0TCKMVKg=\", false, function() {\n    return [\n        _AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuthContext\n    ];\n});\n_c = SocketContextProvider;\nvar _c;\n$RefreshReg$(_c, \"SocketContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGV4dHMvU29ja2V0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMkQ7QUFDWjtBQUNUO0FBRS9CLE1BQU1LLDhCQUFnQkwsb0RBQWFBLEdBQUc7QUFFdEMsTUFBTU0sd0JBQXdCO1FBQUMsRUFBQ0MsUUFBUSxFQUFDOztJQUM5QyxNQUFNLENBQUNDLFFBQU9DLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFDcEMsTUFBTSxDQUFDUSxhQUFZQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFDaEQsTUFBTSxFQUFDVSxRQUFRLEVBQUMsR0FBR1QsNERBQWNBO0lBR2pDRixnREFBU0EsQ0FBQztRQUNSLElBQUdXLFVBQ0g7WUFDRSxNQUFNSixTQUFTSixvREFBRUEsQ0FBQyx5QkFBd0IsQ0FBQztZQUUzQ0ssVUFBVUQ7WUFFVixPQUFPLElBQUtBLE9BQU9LLEtBQUs7UUFDMUIsT0FFQTtZQUNFLElBQUdMLFFBQ0g7Z0JBQ0VBLE9BQU9LLEtBQUs7Z0JBQ1pKLFVBQVVLO1lBQ1o7UUFDRjtJQUNGLEdBQUUsRUFBRTtJQUNKLHFCQUNFLDhEQUFDVCxjQUFjVSxRQUFRO1FBQUNDLE9BQU87WUFBQ1I7WUFBT0U7UUFBVztrQkFDL0NIOzs7Ozs7QUFHUCxFQUFDO0dBN0JZRDs7UUFHUUgsd0RBQWNBOzs7S0FIdEJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29udGV4dHMvU29ja2V0Q29udGV4dC5qcz8zMzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSBcIi4vQXV0aENvbnRleHRcIjtcclxuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2tldENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgU29ja2V0Q29udGV4dFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+e1xyXG4gIGNvbnN0IFtzb2NrZXQsc2V0U29ja2V0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtvbmxpbmVVc2VycyxzZXRPbmxpbmVVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qge2F1dGhVc2VyfSA9IHVzZUF1dGhDb250ZXh0KCk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKGF1dGhVc2VyKVxyXG4gICAge1xyXG4gICAgICBjb25zdCBzb2NrZXQgPSBpbyhcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiLHt9KTtcclxuXHJcbiAgICAgIHNldFNvY2tldChzb2NrZXQpO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+c29ja2V0LmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIGlmKHNvY2tldClcclxuICAgICAge1xyXG4gICAgICAgIHNvY2tldC5jbG9zZSgpO1xyXG4gICAgICAgIHNldFNvY2tldChudWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxbXSk7XHJcbiAgcmV0dXJuKFxyXG4gICAgPFNvY2tldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzb2NrZXQsb25saW5lVXNlcnN9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Tb2NrZXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRoQ29udGV4dCIsImlvIiwiU29ja2V0Q29udGV4dCIsIlNvY2tldENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwic29ja2V0Iiwic2V0U29ja2V0Iiwib25saW5lVXNlcnMiLCJzZXRPbmxpbmVVc2VycyIsImF1dGhVc2VyIiwiY2xvc2UiLCJudWwiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contexts/SocketContext.js\n"));

/***/ })

});