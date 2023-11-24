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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isMobileOpen, setIsMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsMobileOpen(!isMobileOpen);\n    };\n    const links = [\n        [\n            \"home\",\n            \"/Home\"\n        ],\n        [\n            \"about\",\n            \"/About\"\n        ],\n        [\n            \"contact\",\n            \"/Contact\"\n        ],\n        [\n            \"projects\",\n            \"/Projects\"\n        ]\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row bg-gradient-to-r from-slate-900 via-stone-800 to-red-800 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"w-1/4 text-[#2dc7ed] text-4xl md:text-5xl font-extrabold\",\n                children: [\n                    \"Joshua Beck\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \".\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-[#a234d9]\",\n                        children: \"_\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"w-3/4 flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"hidden md:flex flex-row space-x-4\",\n                        children: [\n                            \" \",\n                            links.map((param)=>{\n                                let [label, path] = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"text-white\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: path,\n                                        legacyBehavior: true,\n                                        children: label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, label, false, {\n                                    fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"md:hidden\",\n                        onClick: toggleMenu,\n                        \"aria-label\": \"Menu Button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            viewBox: \"0 0 100 100\",\n                            width: \"40\",\n                            height: \"40\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                    width: \"100\",\n                                    height: \"20\",\n                                    rx: \"10\",\n                                    fill: \"#e1e5e6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                    y: \"40\",\n                                    width: \"100\",\n                                    height: \"20\",\n                                    rx: \"10\",\n                                    fill: \"#e1e5e6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                    y: \"80\",\n                                    width: \"100\",\n                                    height: \"20\",\n                                    rx: \"10\",\n                                    fill: \"#e1e5e6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Josh Beck\\\\Documents\\\\Coding\\\\Josh\\\\josh\\\\components\\\\Navbar.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"LiIloRE//64pZUw6JXlDJhnOTqQ=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUNYO0FBRTdCLE1BQU1HLFNBQW1COztJQUN2QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNSyxhQUFhO1FBQ2pCRCxnQkFBZ0IsQ0FBQ0Q7SUFDbkI7SUFFQSxNQUFNRyxRQUFRO1FBQ1o7WUFBQztZQUFRO1NBQVE7UUFDakI7WUFBQztZQUFTO1NBQVM7UUFDbkI7WUFBQztZQUFXO1NBQVc7UUFDdkI7WUFBQztZQUFZO1NBQVk7S0FDMUI7SUFFRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNDO2dCQUFHRCxXQUFVOztvQkFBMkQ7a0NBRXZFLDhEQUFDRTtrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDQTt3QkFBS0YsV0FBVTtrQ0FBaUI7Ozs7Ozs7Ozs7OzswQkFJbkMsOERBQUNHO2dCQUFJSCxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQUdKLFdBQVU7OzRCQUNYOzRCQUNBRixNQUFNTyxHQUFHLENBQUM7b0NBQUMsQ0FBQ0MsT0FBT0MsS0FBSztxREFDdkIsOERBQUNDO29DQUFlUixXQUFVOzhDQUN4Qiw0RUFBQ1Asa0RBQUlBO3dDQUFDZ0IsTUFBTUY7d0NBQU1HLGNBQWM7a0RBQzdCSjs7Ozs7O21DQUZJQTs7Ozs7Ozs7Ozs7O2tDQVNiLDhEQUFDSzt3QkFDQ0MsTUFBSzt3QkFDTFosV0FBVTt3QkFDVmEsU0FBU2hCO3dCQUNUaUIsY0FBVztrQ0FFWCw0RUFBQ0M7NEJBQUlDLFNBQVE7NEJBQWNDLE9BQU07NEJBQUtDLFFBQU87OzhDQUMzQyw4REFBQ0M7b0NBQUtGLE9BQU07b0NBQU1DLFFBQU87b0NBQUtFLElBQUc7b0NBQUtDLE1BQUs7Ozs7Ozs4Q0FDM0MsOERBQUNGO29DQUFLRyxHQUFFO29DQUFLTCxPQUFNO29DQUFNQyxRQUFPO29DQUFLRSxJQUFHO29DQUFLQyxNQUFLOzs7Ozs7OENBQ2xELDhEQUFDRjtvQ0FBS0csR0FBRTtvQ0FBS0wsT0FBTTtvQ0FBTUMsUUFBTztvQ0FBS0UsSUFBRztvQ0FBS0MsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUQ7R0FwRE0zQjtLQUFBQTtBQXNETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci50c3g/MWI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IE5hdmJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTW9iaWxlT3Blbiwgc2V0SXNNb2JpbGVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldElzTW9iaWxlT3BlbighaXNNb2JpbGVPcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsaW5rcyA9IFtcclxuICAgIFtcImhvbWVcIiwgXCIvSG9tZVwiXSxcclxuICAgIFtcImFib3V0XCIsIFwiL0Fib3V0XCJdLFxyXG4gICAgW1wiY29udGFjdFwiLCBcIi9Db250YWN0XCJdLFxyXG4gICAgW1wicHJvamVjdHNcIiwgXCIvUHJvamVjdHNcIl0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBiZy1ncmFkaWVudC10by1yIGZyb20tc2xhdGUtOTAwIHZpYS1zdG9uZS04MDAgdG8tcmVkLTgwMCBwLTRcIj5cclxuICAgICAgey8qIExlZnQgc2lkZSB3aXRoIG5hbWUgKi99XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ3LTEvNCB0ZXh0LVsjMmRjN2VkXSB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LWV4dHJhYm9sZFwiPlxyXG4gICAgICAgIEpvc2h1YSBCZWNrXHJcbiAgICAgICAgPHNwYW4+Ljwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjYTIzNGQ5XVwiPl88L3NwYW4+XHJcbiAgICAgIDwvaDE+XHJcblxyXG4gICAgICB7LyogUmlnaHQgc2lkZSB3aXRoIGxpbmtzIGFuZCBidXJnZXIgYnV0dG9uICovfVxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInctMy80IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGZsZXgtcm93IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAge2xpbmtzLm1hcCgoW2xhYmVsLCBwYXRoXSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtsYWJlbH0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhdGh9IGxlZ2FjeUJlaGF2aW9yPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIHsvKiBCdXJnZXIgQnV0dG9uICovfVxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiTWVudSBCdXR0b25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCI+XHJcbiAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMjBcIiByeD1cIjEwXCIgZmlsbD1cIiNlMWU1ZTZcIj48L3JlY3Q+XHJcbiAgICAgICAgICAgIDxyZWN0IHk9XCI0MFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMjBcIiByeD1cIjEwXCIgZmlsbD1cIiNlMWU1ZTZcIj48L3JlY3Q+XHJcbiAgICAgICAgICAgIDxyZWN0IHk9XCI4MFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMjBcIiByeD1cIjEwXCIgZmlsbD1cIiNlMWU1ZTZcIj48L3JlY3Q+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJOYXZiYXIiLCJpc01vYmlsZU9wZW4iLCJzZXRJc01vYmlsZU9wZW4iLCJ0b2dnbGVNZW51IiwibGlua3MiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJuYXYiLCJ1bCIsIm1hcCIsImxhYmVsIiwicGF0aCIsImxpIiwiaHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJhcmlhLWxhYmVsIiwic3ZnIiwidmlld0JveCIsIndpZHRoIiwiaGVpZ2h0IiwicmVjdCIsInJ4IiwiZmlsbCIsInkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Navbar.tsx\n"));

/***/ })

});