"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"46ae66c1a8e5\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NWJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjQ2YWU2NmMxYThlNVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/sideBar/SideBar.js":
/*!***********************************************!*\
  !*** ./src/app/components/sideBar/SideBar.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Conversations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conversations.js */ \"(app-pages-browser)/./src/app/components/sideBar/Conversations.js\");\n/* harmony import */ var _LogoutButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogoutButton.js */ \"(app-pages-browser)/./src/app/components/sideBar/LogoutButton.js\");\n/* harmony import */ var _SearchInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchInput.js */ \"(app-pages-browser)/./src/app/components/sideBar/SearchInput.js\");\n/* harmony import */ var _app_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/contexts/AuthContext */ \"(app-pages-browser)/./src/app/contexts/AuthContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n // Ensure auth context is available\nfunction SideBar() {\n    _s();\n    const { authUser } = (0,_app_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuthContext)();\n    // Debug: Log authUser values\n    console.log(\"authUser:\", authUser);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-r border-slate-500 p-4 flex flex-col h-full\",\n        style: {\n            boxShadow: \"rgb(38, 57, 77) 0px 20px 30px -10px;\",\n            backgroundColor: \"wheat\",\n            borderRadius: \"10px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\sideBar\\\\SideBar.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"divider px-3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\sideBar\\\\SideBar.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Conversations_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\sideBar\\\\SideBar.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LogoutButton_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    // userName={authUser?.name || \"Guest\"} // Fallback to \"Guest\"\n                    profilePic: (authUser === null || authUser === void 0 ? void 0 : authUser.profilePic) || \"/default-avatar.png\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\sideBar\\\\SideBar.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\sideBar\\\\SideBar.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\sideBar\\\\SideBar.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(SideBar, \"Pg20CIJpsSc4iWBCOzOCHT81MRk=\", false, function() {\n    return [\n        _app_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuthContext\n    ];\n});\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlQmFyL1NpZGVCYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDK0M7QUFDRjtBQUNGO0FBQ2lCLENBQUMsbUNBQW1DO0FBRWhHLFNBQVNJOztJQUNQLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdGLHlFQUFjQTtJQUVuQyw2QkFBNkI7SUFDN0JHLFFBQVFDLEdBQUcsQ0FBQyxhQUFhRjtJQUV6QixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtRQUFxREMsT0FBTztZQUN6RUMsV0FBVTtZQUNWQyxpQkFBZ0I7WUFDaEJDLGNBQWE7UUFDZjs7MEJBQ0UsOERBQUNYLHVEQUFXQTs7Ozs7MEJBQ1osOERBQUNNO2dCQUFJQyxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNULHlEQUFhQTs7Ozs7MEJBQ2QsOERBQUNRO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDUix3REFBWUE7b0JBQ1gsOERBQThEO29CQUM5RGEsWUFBWVQsQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVUyxVQUFVLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlDO0dBdkJTVjs7UUFDY0QscUVBQWNBOzs7S0FENUJDO0FBeUJULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlQmFyL1NpZGVCYXIuanM/ZjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IENvbnZlcnNhdGlvbnMgZnJvbSBcIi4vQ29udmVyc2F0aW9ucy5qc1wiO1xyXG5pbXBvcnQgTG9nb3V0QnV0dG9uIGZyb20gXCIuL0xvZ291dEJ1dHRvbi5qc1wiO1xyXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4vU2VhcmNoSW5wdXQuanNcIjtcclxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dHMvQXV0aENvbnRleHRcIjsgLy8gRW5zdXJlIGF1dGggY29udGV4dCBpcyBhdmFpbGFibGVcclxuXHJcbmZ1bmN0aW9uIFNpZGVCYXIoKSB7XHJcbiAgY29uc3QgeyBhdXRoVXNlciB9ID0gdXNlQXV0aENvbnRleHQoKTtcclxuXHJcbiAgLy8gRGVidWc6IExvZyBhdXRoVXNlciB2YWx1ZXNcclxuICBjb25zb2xlLmxvZyhcImF1dGhVc2VyOlwiLCBhdXRoVXNlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1yIGJvcmRlci1zbGF0ZS01MDAgcC00IGZsZXggZmxleC1jb2wgaC1mdWxsXCIgc3R5bGU9e3tcclxuICAgICAgYm94U2hhZG93OlwicmdiKDM4LCA1NywgNzcpIDBweCAyMHB4IDMwcHggLTEwcHg7XCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIndoZWF0XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czpcIjEwcHhcIlxyXG4gICAgfX0+XHJcbiAgICAgIDxTZWFyY2hJbnB1dCAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXIgcHgtM1wiPjwvZGl2PlxyXG4gICAgICA8Q29udmVyc2F0aW9ucyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG9cIj5cclxuICAgICAgICA8TG9nb3V0QnV0dG9uXHJcbiAgICAgICAgICAvLyB1c2VyTmFtZT17YXV0aFVzZXI/Lm5hbWUgfHwgXCJHdWVzdFwifSAvLyBGYWxsYmFjayB0byBcIkd1ZXN0XCJcclxuICAgICAgICAgIHByb2ZpbGVQaWM9e2F1dGhVc2VyPy5wcm9maWxlUGljIHx8IFwiL2RlZmF1bHQtYXZhdGFyLnBuZ1wifSAvLyBGYWxsYmFjayB0byBkZWZhdWx0IGF2YXRhclxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcclxuIl0sIm5hbWVzIjpbIkNvbnZlcnNhdGlvbnMiLCJMb2dvdXRCdXR0b24iLCJTZWFyY2hJbnB1dCIsInVzZUF1dGhDb250ZXh0IiwiU2lkZUJhciIsImF1dGhVc2VyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwicHJvZmlsZVBpYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/sideBar/SideBar.js\n"));

/***/ })

});