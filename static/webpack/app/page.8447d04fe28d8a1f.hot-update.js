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

/***/ "(app-pages-browser)/./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isMobileOpen, setIsMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsMobileOpen(!isMobileOpen);\n    };\n    const links = [\n        [\n            \"home\",\n            \"/Home\"\n        ],\n        [\n            \"about\",\n            \"/About\"\n        ],\n        [\n            \"contact\",\n            \"/Contact\"\n        ],\n        [\n            \"projects\",\n            \"/Projects\"\n        ]\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row bg-gradient-to-r from-slate-900 via-stone-800 to-red-800 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"w-1/4 text-[#2dc7ed] text-4xl md:text-5xl font-extrabold\",\n                children: [\n                    \"Joshua Beck\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \".\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-[#a234d9]\",\n                        children: \"_\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"w-3/4 px-5 flex items\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"hidden md:flex flex-row\",\n                        children: links.map((param)=>{\n                            let [label, path] = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mb-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: path,\n                                    legacyBehavior: true,\n                                    children: label\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, label, false, {\n                                fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"md:hidden\",\n                        onClick: toggleMenu,\n                        \"aria-label\": \"Menu Button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            viewBox: \"0 0 100 100\",\n                            width: \"40\",\n                            height: \"40\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                    width: \"100\",\n                                    height: \"20\",\n                                    rx: \"10\",\n                                    fill: \"#e1e5e6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                    y: \"40\",\n                                    width: \"100\",\n                                    height: \"20\",\n                                    rx: \"10\",\n                                    fill: \"#e1e5e6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                    y: \"80\",\n                                    width: \"100\",\n                                    height: \"20\",\n                                    rx: \"10\",\n                                    fill: \"#e1e5e6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"LiIloRE//64pZUw6JXlDJhnOTqQ=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUNYO0FBRTdCLE1BQU1HLFNBQW1COztJQUN2QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNSyxhQUFhO1FBQ2pCRCxnQkFBZ0IsQ0FBQ0Q7SUFDbkI7SUFFQSxNQUFNRyxRQUFRO1FBQ1o7WUFBQztZQUFRO1NBQVE7UUFDakI7WUFBQztZQUFTO1NBQVM7UUFDbkI7WUFBQztZQUFXO1NBQVc7UUFDdkI7WUFBQztZQUFZO1NBQVk7S0FDMUI7SUFFRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNDO2dCQUFHRCxXQUFVOztvQkFBMkQ7a0NBRXZFLDhEQUFDRTtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDQTt3QkFBS0YsV0FBVTtrQ0FBaUI7Ozs7Ozs7Ozs7OzswQkFJbkMsOERBQUNHO2dCQUFJSCxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQUdKLFdBQVU7a0NBQ1hGLE1BQU1PLEdBQUcsQ0FBQztnQ0FBQyxDQUFDQyxPQUFPQyxLQUFLO2lEQUN2Qiw4REFBQ0M7Z0NBQWVSLFdBQVU7MENBQ3hCLDRFQUFDUCxrREFBSUE7b0NBQUNnQixNQUFNRjtvQ0FBTUcsY0FBYzs4Q0FDN0JKOzs7Ozs7K0JBRklBOzs7Ozs7Ozs7OztrQ0FTYiw4REFBQ0s7d0JBQ0NDLE1BQUs7d0JBQ0xaLFdBQVU7d0JBQ1ZhLFNBQVNoQjt3QkFDVGlCLGNBQVc7a0NBRVgsNEVBQUNDOzRCQUFJQyxTQUFROzRCQUFjQyxPQUFNOzRCQUFLQyxRQUFPOzs4Q0FDM0MsOERBQUNDO29DQUFLRixPQUFNO29DQUFNQyxRQUFPO29DQUFLRSxJQUFHO29DQUFLQyxNQUFLOzs7Ozs7OENBQzNDLDhEQUFDRjtvQ0FBS0csR0FBRTtvQ0FBS0wsT0FBTTtvQ0FBTUMsUUFBTztvQ0FBS0UsSUFBRztvQ0FBS0MsTUFBSzs7Ozs7OzhDQUNsRCw4REFBQ0Y7b0NBQUtHLEdBQUU7b0NBQUtMLE9BQU07b0NBQU1DLFFBQU87b0NBQUtFLElBQUc7b0NBQUtDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlEO0dBcERNM0I7S0FBQUE7QUFzRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4PzFiODMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vYmlsZU9wZW4sIHNldElzTW9iaWxlT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vYmlsZU9wZW4oIWlzTW9iaWxlT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGlua3MgPSBbXHJcbiAgICBbXCJob21lXCIsIFwiL0hvbWVcIl0sXHJcbiAgICBbXCJhYm91dFwiLCBcIi9BYm91dFwiXSxcclxuICAgIFtcImNvbnRhY3RcIiwgXCIvQ29udGFjdFwiXSxcclxuICAgIFtcInByb2plY3RzXCIsIFwiL1Byb2plY3RzXCJdLFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgYmctZ3JhZGllbnQtdG8tciBmcm9tLXNsYXRlLTkwMCB2aWEtc3RvbmUtODAwIHRvLXJlZC04MDAgcC00XCI+XHJcbiAgICAgIHsvKiBNeSBuYW1lICYgbGVmdCBzaWRlIG9mIHRoZSBuYXZiYXIgKi99XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ3LTEvNCB0ZXh0LVsjMmRjN2VkXSB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWV4dHJhYm9sZFwiPlxyXG4gICAgICAgIEpvc2h1YSBCZWNrXHJcbiAgICAgICAgPHNwYW4+Ljwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjYTIzNGQ5XVwiPl88L3NwYW4+XHJcbiAgICAgIDwvaDE+XHJcblxyXG4gICAgICB7LyogUmlnaHQgc2lkZSBvZiBuYXZiYXIgd2l0aCBMaW5rcyBhbmQgb3IgYnV0dG9uKi99XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwidy0zLzQgcHgtNSBmbGV4IGl0ZW1zXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICB7bGlua3MubWFwKChbbGFiZWwsIHBhdGhdKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2xhYmVsfSBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cGF0aH0gbGVnYWN5QmVoYXZpb3I+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgey8qIEJ1cmdlciBCdXR0b24gKi99XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIlxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlTWVudX1cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJNZW51IEJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIj5cclxuICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiMTBcIiBmaWxsPVwiI2UxZTVlNlwiPjwvcmVjdD5cclxuICAgICAgICAgICAgPHJlY3QgeT1cIjQwXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiMTBcIiBmaWxsPVwiI2UxZTVlNlwiPjwvcmVjdD5cclxuICAgICAgICAgICAgPHJlY3QgeT1cIjgwXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiMTBcIiBmaWxsPVwiI2UxZTVlNlwiPjwvcmVjdD5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHsvKiBDb25kaXRpb25hbGx5IHJlbmRlciB0aGUgbGlzdCBvZiBsaW5rcyAqL31cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJOYXZiYXIiLCJpc01vYmlsZU9wZW4iLCJzZXRJc01vYmlsZU9wZW4iLCJ0b2dnbGVNZW51IiwibGlua3MiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJuYXYiLCJ1bCIsIm1hcCIsImxhYmVsIiwicGF0aCIsImxpIiwiaHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJhcmlhLWxhYmVsIiwic3ZnIiwidmlld0JveCIsIndpZHRoIiwiaGVpZ2h0IiwicmVjdCIsInJ4IiwiZmlsbCIsInkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Navbar.tsx\n"));

/***/ })

});