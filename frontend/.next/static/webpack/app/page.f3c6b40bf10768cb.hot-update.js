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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ef79f8c2bd6c\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NWJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImVmNzlmOGMyYmQ2Y1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/messages/MessageContainer.js":
/*!*********************************************************!*\
  !*** ./src/app/components/messages/MessageContainer.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_zustand_useConversation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/zustand/useConversation.js */ \"(app-pages-browser)/./src/app/zustand/useConversation.js\");\n/* harmony import */ var _MessageInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageInput.js */ \"(app-pages-browser)/./src/app/components/messages/MessageInput.js\");\n/* harmony import */ var _Messages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages.js */ \"(app-pages-browser)/./src/app/components/messages/Messages.js\");\n/* harmony import */ var _barrel_optimize_names_TiMessages_react_icons_ti__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=TiMessages!=!react-icons/ti */ \"(app-pages-browser)/./node_modules/react-icons/ti/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/contexts/AuthContext */ \"(app-pages-browser)/./src/app/contexts/AuthContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n // Import to access authUser\nfunction MessageContainer() {\n    _s();\n    const { selectedConversation, setSelectedConversation } = (0,_app_zustand_useConversation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        return ()=>setSelectedConversation(null); // To clean previous messages\n    }, [\n        setSelectedConversation\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:min-w-[450px] flex flex-col\",\n        style: {\n            borderRadius: \"10px\",\n            backgroundColor: \"ButtonHighlight\"\n        },\n        children: !selectedConversation ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NoChatSelected, {}, void 0, false, {\n            fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\messages\\\\MessageContainer.js\",\n            lineNumber: 21,\n            columnNumber: 32\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-slate-500 px-4 py-2 mb-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"label-text\",\n                            children: \"To:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\messages\\\\MessageContainer.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-gray-900 font-bold\",\n                            children: selectedConversation.fullName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\messages\\\\MessageContainer.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\messages\\\\MessageContainer.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Messages_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\messages\\\\MessageContainer.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageInput_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\messages\\\\MessageContainer.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\messages\\\\MessageContainer.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(MessageContainer, \"+eMhLjwS9QBMln5bU8S7dyqEZdY=\", false, function() {\n    return [\n        _app_zustand_useConversation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = MessageContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageContainer);\n// No chat selected case\nconst NoChatSelected = ()=>{\n    _s1();\n    const { authUser } = (0,_app_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuthContext)(); // Get authUser from context\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center w-full h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Welcome \\uD83D\\uDC4B \",\n                        (authUser === null || authUser === void 0 ? void 0 : authUser.fullName) || \"Guest\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\messages\\\\MessageContainer.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Select a chat to start messaging\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\messages\\\\MessageContainer.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TiMessages_react_icons_ti__WEBPACK_IMPORTED_MODULE_6__.TiMessages, {\n                    className: \"text-3xl md:text-6xl text-center\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\messages\\\\MessageContainer.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\messages\\\\MessageContainer.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Vyom's NU Stuff\\\\ITNU5thSEM\\\\CN\\\\Assignment\\\\frontend\\\\chatsocket\\\\src\\\\app\\\\components\\\\messages\\\\MessageContainer.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(NoChatSelected, \"Pg20CIJpsSc4iWBCOzOCHT81MRk=\", false, function() {\n    return [\n        _app_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuthContext\n    ];\n});\n_c1 = NoChatSelected;\nvar _c, _c1;\n$RefreshReg$(_c, \"MessageContainer\");\n$RefreshReg$(_c1, \"NoChatSelected\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9NZXNzYWdlQ29udGFpbmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytEO0FBQ2xCO0FBQ1I7QUFDTztBQUNWO0FBQzBCLENBQUMsNEJBQTRCO0FBRXpGLFNBQVNNOztJQUNQLE1BQU0sRUFBRUMsb0JBQW9CLEVBQUVDLHVCQUF1QixFQUFFLEdBQUdSLDJFQUFlQTtJQUV6RUksZ0RBQVNBLENBQUM7UUFDUixPQUFPLElBQU1JLHdCQUF3QixPQUFPLDZCQUE2QjtJQUMzRSxHQUFHO1FBQUNBO0tBQXdCO0lBRTVCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO1FBQWlDQyxPQUFPO1lBQ3JEQyxjQUFhO1lBQ2JDLGlCQUFnQjtRQUNsQjtrQkFDRyxDQUFDTixxQ0FBdUIsOERBQUNPOzs7O2lDQUN4Qjs7OEJBRUUsOERBQUNMO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0s7NEJBQUtMLFdBQVU7c0NBQWE7Ozs7Ozt3QkFFckI7c0NBQ1IsOERBQUNLOzRCQUFLTCxXQUFVO3NDQUNiSCxxQkFBcUJTLFFBQVE7Ozs7Ozs7Ozs7Ozs4QkFLbEMsOERBQUNkLG9EQUFRQTs7Ozs7OEJBQ1QsOERBQUNELHdEQUFZQTs7Ozs7Ozs7Ozs7O0FBS3ZCO0dBL0JTSzs7UUFDbUROLHVFQUFlQTs7O0tBRGxFTTtBQWdDVCwrREFBZUEsZ0JBQWdCQSxFQUFDO0FBRWhDLHdCQUF3QjtBQUN4QixNQUFNUSxpQkFBaUI7O0lBQ3JCLE1BQU0sRUFBRUcsUUFBUSxFQUFFLEdBQUdaLHlFQUFjQSxJQUFJLDRCQUE0QjtJQUVuRSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBRWIsOERBQUNROzt3QkFBRTt3QkFBWUQsQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVRCxRQUFRLEtBQUk7Ozs7Ozs7Z0JBQVk7OEJBQ2pELDhEQUFDRTs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDZix3RkFBVUE7b0JBQUNPLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0lBYk1JOztRQUNpQlQscUVBQWNBOzs7TUFEL0JTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9NZXNzYWdlQ29udGFpbmVyLmpzPzI0YzQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB1c2VDb252ZXJzYXRpb24gZnJvbSBcIkAvYXBwL3p1c3RhbmQvdXNlQ29udmVyc2F0aW9uLmpzXCI7XHJcbmltcG9ydCBNZXNzYWdlSW5wdXQgZnJvbSBcIi4vTWVzc2FnZUlucHV0LmpzXCI7XHJcbmltcG9ydCBNZXNzYWdlcyBmcm9tIFwiLi9NZXNzYWdlcy5qc1wiO1xyXG5pbXBvcnQgeyBUaU1lc3NhZ2VzIH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCJAL2FwcC9jb250ZXh0cy9BdXRoQ29udGV4dFwiOyAvLyBJbXBvcnQgdG8gYWNjZXNzIGF1dGhVc2VyXHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlQ29udGFpbmVyKCkge1xyXG4gIGNvbnN0IHsgc2VsZWN0ZWRDb252ZXJzYXRpb24sIHNldFNlbGVjdGVkQ29udmVyc2F0aW9uIH0gPSB1c2VDb252ZXJzYXRpb24oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiBzZXRTZWxlY3RlZENvbnZlcnNhdGlvbihudWxsKTsgLy8gVG8gY2xlYW4gcHJldmlvdXMgbWVzc2FnZXNcclxuICB9LCBbc2V0U2VsZWN0ZWRDb252ZXJzYXRpb25dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bWluLXctWzQ1MHB4XSBmbGV4IGZsZXgtY29sXCIgc3R5bGU9e3tcclxuICAgICAgYm9yZGVyUmFkaXVzOlwiMTBweFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJCdXR0b25IaWdobGlnaHRcIlxyXG4gICAgfX0+XHJcbiAgICAgIHshc2VsZWN0ZWRDb252ZXJzYXRpb24gPyA8Tm9DaGF0U2VsZWN0ZWQgLz4gOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHsvKiBVcHBlciBwYXJ0IFRvOiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtNTAwIHB4LTQgcHktMiBtYi0yXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsLXRleHRcIj5cclxuICAgICAgICAgICAgICBUbzpcclxuICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICB7c2VsZWN0ZWRDb252ZXJzYXRpb24uZnVsbE5hbWV9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBNZXNzYWdlcyBQYXJ0OiAqL31cclxuICAgICAgICAgIDxNZXNzYWdlcyAvPlxyXG4gICAgICAgICAgPE1lc3NhZ2VJbnB1dCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQ29udGFpbmVyO1xyXG5cclxuLy8gTm8gY2hhdCBzZWxlY3RlZCBjYXNlXHJcbmNvbnN0IE5vQ2hhdFNlbGVjdGVkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aFVzZXIgfSA9IHVzZUF1dGhDb250ZXh0KCk7IC8vIEdldCBhdXRoVXNlciBmcm9tIGNvbnRleHRcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgdGV4dC1jZW50ZXIgc206dGV4dC1sZyBtZDp0ZXh0LXhsIHRleHQtZ3JheS0yMDAgZm9udC1zZW1pYm9sZCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgIHsvKiBXZWxjb21lIG1lc3NhZ2UgKi99XHJcbiAgICAgICAgPHA+V2VsY29tZSDwn5GLIHthdXRoVXNlcj8uZnVsbE5hbWUgfHwgXCJHdWVzdFwifTwvcD4gey8qIERpc3BsYXkgZnVsbE5hbWUgKi99XHJcbiAgICAgICAgPHA+U2VsZWN0IGEgY2hhdCB0byBzdGFydCBtZXNzYWdpbmc8L3A+XHJcbiAgICAgICAgPFRpTWVzc2FnZXMgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC02eGwgdGV4dC1jZW50ZXJcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb252ZXJzYXRpb24iLCJNZXNzYWdlSW5wdXQiLCJNZXNzYWdlcyIsIlRpTWVzc2FnZXMiLCJ1c2VFZmZlY3QiLCJ1c2VBdXRoQ29udGV4dCIsIk1lc3NhZ2VDb250YWluZXIiLCJzZWxlY3RlZENvbnZlcnNhdGlvbiIsInNldFNlbGVjdGVkQ29udmVyc2F0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJOb0NoYXRTZWxlY3RlZCIsInNwYW4iLCJmdWxsTmFtZSIsImF1dGhVc2VyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/messages/MessageContainer.js\n"));

/***/ })

});