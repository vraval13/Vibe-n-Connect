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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9ebd3cd85c21\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NWJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjllYmQzY2Q4NWMyMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/contexts/SocketContext.js":
/*!*******************************************!*\
  !*** ./src/app/contexts/SocketContext.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SocketContext: function() { return /* binding */ SocketContext; },\n/* harmony export */   SocketContextProvider: function() { return /* binding */ SocketContextProvider; },\n/* harmony export */   useSocketContext: function() { return /* binding */ useSocketContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthContext */ \"(app-pages-browser)/./src/app/contexts/AuthContext.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ SocketContext,useSocketContext,SocketContextProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useSocketContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SocketContext);\n};\n_s(useSocketContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst SocketContextProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [onlineUsers, setOnlineUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { authUser } = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuthContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (authUser) {\n            const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:3001\", {\n                query: {\n                    userId: authUser._id\n                }\n            });\n            setSocket(socket);\n            socket.on(\"getOnlineUsers\", (users)=>{\n                setOnlineUsers(users);\n            });\n            return ()=>socket.close();\n        } else {\n            if (socket) {\n                socket.close();\n                setSocket(nul);\n            }\n        }\n    }, [\n        authUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocketContext.Provider, {\n        value: {\n            socket,\n            onlineUsers\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\contexts\\\\SocketContext.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(SocketContextProvider, \"FJo6AiOyKNopl4q9UYP0TCKMVKg=\", false, function() {\n    return [\n        _AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuthContext\n    ];\n});\n_c = SocketContextProvider;\nvar _c;\n$RefreshReg$(_c, \"SocketContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGV4dHMvU29ja2V0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3NFO0FBQ3ZCO0FBQ1Q7QUFFL0IsTUFBTU0sOEJBQWdCTixvREFBYUEsR0FBRztBQUV0QyxNQUFNTyxtQkFBbUI7O0lBQzlCLE9BQU9KLGlEQUFVQSxDQUFDRztBQUNwQixFQUFFO0dBRldDO0FBS04sTUFBTUMsd0JBQXdCO1FBQUMsRUFBQ0MsUUFBUSxFQUFDOztJQUM5QyxNQUFNLENBQUNDLFFBQU9DLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFDcEMsTUFBTSxDQUFDVSxhQUFZQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFDaEQsTUFBTSxFQUFDWSxRQUFRLEVBQUMsR0FBR1YsNERBQWNBO0lBR2pDSCxnREFBU0EsQ0FBQztRQUNSLElBQUdhLFVBQ0g7WUFDRSxNQUFNSixTQUFTTCxvREFBRUEsQ0FBQyx5QkFBd0I7Z0JBQ3hDVSxPQUFNO29CQUNKQyxRQUFRRixTQUFTRyxHQUFHO2dCQUN0QjtZQUNGO1lBRUFOLFVBQVVEO1lBRVZBLE9BQU9RLEVBQUUsQ0FBQyxrQkFBaUIsQ0FBQ0M7Z0JBQzFCTixlQUFlTTtZQUNqQjtZQUVBLE9BQU8sSUFBS1QsT0FBT1UsS0FBSztRQUMxQixPQUVBO1lBQ0UsSUFBR1YsUUFDSDtnQkFDRUEsT0FBT1UsS0FBSztnQkFDWlQsVUFBVVU7WUFDWjtRQUNGO0lBQ0YsR0FBRTtRQUFDUDtLQUFTO0lBQ1oscUJBQ0UsOERBQUNSLGNBQWNnQixRQUFRO1FBQUNDLE9BQU87WUFBQ2I7WUFBT0U7UUFBVztrQkFDL0NIOzs7Ozs7QUFHUCxFQUFDO0lBckNZRDs7UUFHUUosd0RBQWNBOzs7S0FIdEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29udGV4dHMvU29ja2V0Q29udGV4dC5qcz8zMzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlLHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tIFwiLi9BdXRoQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU29ja2V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTb2NrZXRDb250ZXh0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFNvY2tldENvbnRleHQpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTb2NrZXRDb250ZXh0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT57XHJcbiAgY29uc3QgW3NvY2tldCxzZXRTb2NrZXRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29ubGluZVVzZXJzLHNldE9ubGluZVVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCB7YXV0aFVzZXJ9ID0gdXNlQXV0aENvbnRleHQoKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoYXV0aFVzZXIpXHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCIse1xyXG4gICAgICAgIHF1ZXJ5OntcclxuICAgICAgICAgIHVzZXJJZDogYXV0aFVzZXIuX2lkLFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRTb2NrZXQoc29ja2V0KTtcclxuXHJcbiAgICAgIHNvY2tldC5vbihcImdldE9ubGluZVVzZXJzXCIsKHVzZXJzKT0+e1xyXG4gICAgICAgIHNldE9ubGluZVVzZXJzKHVzZXJzKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PnNvY2tldC5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICBpZihzb2NrZXQpXHJcbiAgICAgIHtcclxuICAgICAgICBzb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICBzZXRTb2NrZXQobnVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sW2F1dGhVc2VyXSk7XHJcbiAgcmV0dXJuKFxyXG4gICAgPFNvY2tldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzb2NrZXQsb25saW5lVXNlcnN9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Tb2NrZXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlQXV0aENvbnRleHQiLCJpbyIsIlNvY2tldENvbnRleHQiLCJ1c2VTb2NrZXRDb250ZXh0IiwiU29ja2V0Q29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJvbmxpbmVVc2VycyIsInNldE9ubGluZVVzZXJzIiwiYXV0aFVzZXIiLCJxdWVyeSIsInVzZXJJZCIsIl9pZCIsIm9uIiwidXNlcnMiLCJjbG9zZSIsIm51bCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contexts/SocketContext.js\n"));

/***/ })

});