"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product",{

/***/ "./src/pages/product/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/product/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Product; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/pages/components/Header/index.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/product/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_FiUpload_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FiUpload!=!react-icons/fi */ \"__barrel_optimize__?names=FiUpload!=!./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction Product() {\n    _s();\n    const [avatarUrl, setAvatarUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [imageAvatar, setImageAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    function handleFile(e) {\n        if (!e.target.files) {\n            return;\n        }\n        const image = e.target.files[0];\n        if (!image) {\n            return;\n        }\n        if (image.type === \"image/jpeg\" || \"image.type/png\") {\n            setImageAvatar(image);\n            setAvatarUrl(URL.createObjectURL(e.target.files[0]));\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Novo produto - Sujeito Pizzaria\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                lineNumber: 38,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Novo produto\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().labelAvatar),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().uploadIcon),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiUpload_react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiUpload, {\n                                                    size: 30,\n                                                    color: \"#fff\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 9\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 8\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"file\",\n                                                accept: \"image/png, image/jpeg\",\n                                                onChange: handleFile\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 8\n                                            }, this),\n                                            avatarUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().preview),\n                                                width: \"250\",\n                                                height: \"250\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"image\", {\n                                                    href: avatarUrl,\n                                                    alt: \"Foto do produto\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 10\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 9\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Bebidas\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 8\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                children: \"Pizzas\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 8\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Digite o nome do produto\",\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Pre\\xe7o do produto\",\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                        placeholder: \"Descreva seu produto\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttonAdd),\n                                        type: \"submit\",\n                                        children: \"Cadastrar\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 7\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\product\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Product, \"D5op5u1L0PnvxomuMH6I5nzwtTw=\");\n_c = Product;\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUcyQztBQUNHO0FBQ0w7QUFDQztBQUNJOztBQUkvQixTQUFTSzs7SUFFdkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ0ksYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBYztJQUM1RCxTQUFTTSxXQUFXQyxDQUFnQztRQUVuRCxJQUFJLENBQUNBLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO1lBQ3BCO1FBQ0Q7UUFFQSxNQUFNQyxRQUFRSCxFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBRS9CLElBQUksQ0FBQ0MsT0FBTztZQUNYO1FBQ0Q7UUFFQSxJQUFJQSxNQUFNQyxJQUFJLEtBQUssZ0JBQWdCLGtCQUFrQjtZQUVwRE4sZUFBZUs7WUFDZlAsYUFBYVMsSUFBSUMsZUFBZSxDQUFDTixFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQ25EO0lBRUQ7SUFFQSxxQkFDQzs7MEJBQ0MsOERBQUNiLHFEQUFPQTswQkFDUCw0RUFBQ2tCOzhCQUFNOzs7Ozs7Ozs7OzswQkFFUiw4REFBQ0M7O2tDQUNBLDhEQUFDbEIsc0RBQU1BOzs7OztrQ0FFUCw4REFBQ21CO3dCQUFLQyxXQUFXbkIsc0VBQWdCOzswQ0FDaEMsOERBQUNxQjswQ0FBRzs7Ozs7OzBDQUVKLDhEQUFDQztnQ0FBS0gsV0FBV25CLGlFQUFXOztrREFFM0IsOERBQUN1Qjt3Q0FBTUosV0FBV25CLHdFQUFrQjs7MERBQ25DLDhEQUFDeUI7Z0RBQUtOLFdBQVduQix1RUFBaUI7MERBQ2pDLDRFQUFDQyxvRkFBUUE7b0RBQUMwQixNQUFNO29EQUFJQyxPQUFNOzs7Ozs7Ozs7OzswREFFM0IsOERBQUNDO2dEQUFNaEIsTUFBSztnREFBT2lCLFFBQU87Z0RBQXdCQyxVQUFVdkI7Ozs7Ozs0Q0FDM0RKLDJCQUNBLDhEQUFDNEI7Z0RBQUliLFdBQVduQixvRUFBYztnREFBRWtDLE9BQU07Z0RBQU1DLFFBQU87MERBQ2xELDRFQUFDdkI7b0RBQU13QixNQUFNaEM7b0RBQVdpQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztrREFLL0IsOERBQUNDOzswREFDQSw4REFBQ0M7MERBQU87Ozs7OzswREFHUiw4REFBQ0E7MERBQU87Ozs7Ozs7Ozs7OztrREFLVCw4REFBQ1Y7d0NBQ0FoQixNQUFLO3dDQUNMMkIsYUFBWTt3Q0FDWnJCLFdBQVduQixrRUFBWTs7Ozs7O2tEQUl4Qiw4REFBQzZCO3dDQUNBaEIsTUFBSzt3Q0FDTDJCLGFBQVk7d0NBQ1pyQixXQUFXbkIsa0VBQVk7Ozs7OztrREFJeEIsOERBQUN5Qzt3Q0FDQXRCLFdBQVduQixrRUFBWTt3Q0FDdkJ3QyxhQUFZOzs7Ozs7a0RBS2IsOERBQUNFO3dDQUFPdkIsV0FBV25CLHNFQUFnQjt3Q0FBRWEsTUFBSztrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTekQ7R0F4RndCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdC9pbmRleC50c3g/MzRhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IGNhblNTUkF1dGggfSBmcm9tIFwiQC91dGlscy9jYW5TU1JBdXRoXCI7XHJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIlxyXG5pbXBvcnQgeyBGaVVwbG9hZCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdCgpIHtcclxuXHJcbiBjb25zdCBbYXZhdGFyVXJsLCBzZXRBdmF0YXJVcmxdID0gdXNlU3RhdGUoJycpO1xyXG4gY29uc3QgW2ltYWdlQXZhdGFyLCBzZXRJbWFnZUF2YXRhcl0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbCk7XHJcbiBmdW5jdGlvbiBoYW5kbGVGaWxlKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcblxyXG4gIGlmICghZS50YXJnZXQuZmlsZXMpIHtcclxuICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2UgPSBlLnRhcmdldC5maWxlc1swXTtcclxuXHJcbiAgaWYgKCFpbWFnZSkge1xyXG4gICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoaW1hZ2UudHlwZSA9PT0gJ2ltYWdlL2pwZWcnIHx8ICdpbWFnZS50eXBlL3BuZycpIHtcclxuXHJcbiAgIHNldEltYWdlQXZhdGFyKGltYWdlKTtcclxuICAgc2V0QXZhdGFyVXJsKFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pKVxyXG4gIH1cclxuXHJcbiB9XHJcblxyXG4gcmV0dXJuIChcclxuICA8PlxyXG4gICA8SGVhZGluZz5cclxuICAgIDx0aXRsZT5Ob3ZvIHByb2R1dG8gLSBTdWplaXRvIFBpenphcmlhPC90aXRsZT5cclxuICAgPC9IZWFkaW5nPlxyXG4gICA8ZGl2PlxyXG4gICAgPEhlYWRlciAvPlxyXG5cclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgPGgxPk5vdm8gcHJvZHV0bzwvaDE+XHJcblxyXG4gICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsQXZhdGFyfT5cclxuICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZEljb259PlxyXG4gICAgICAgIDxGaVVwbG9hZCBzaXplPXszMH0gY29sb3I9JyNmZmYnIC8+XHJcbiAgICAgICA8L3NwYW4+XHJcbiAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgYWNjZXB0PSdpbWFnZS9wbmcsIGltYWdlL2pwZWcnIG9uQ2hhbmdlPXtoYW5kbGVGaWxlfSAvPlxyXG4gICAgICAge2F2YXRhclVybCAmJiAoXHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aWV3fSB3aWR0aD1cIjI1MFwiIGhlaWdodD1cIjI1MFwiPlxyXG4gICAgICAgICA8aW1hZ2UgaHJlZj17YXZhdGFyVXJsfSBhbHQ9XCJGb3RvIGRvIHByb2R1dG9cIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgKX1cclxuICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICA8b3B0aW9uPlxyXG4gICAgICAgIEJlYmlkYXNcclxuICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgPG9wdGlvbj5cclxuICAgICAgICBQaXp6YXNcclxuICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBub21lIGRvIHByb2R1dG9cIlxyXG4gICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgID5cclxuICAgICAgPC9pbnB1dD5cclxuXHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgcGxhY2Vob2xkZXI9XCJQcmXDp28gZG8gcHJvZHV0b1wiXHJcbiAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgPlxyXG4gICAgICA8L2lucHV0PlxyXG5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JldmEgc2V1IHByb2R1dG9cIlxyXG4gICAgICA+XHJcblxyXG4gICAgICA8L3RleHRhcmVhPlxyXG5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25BZGR9IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgIENhZGFzdHJhclxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgPC9mb3JtPlxyXG4gICAgPC9tYWluPlxyXG4gICA8L2Rpdj5cclxuICA8Lz5cclxuIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGNhblNTUkF1dGgoYXN5bmMgKCkgPT4ge1xyXG4gcmV0dXJuIHtcclxuICBwcm9wczoge31cclxuIH1cclxufSkiXSwibmFtZXMiOlsiSGVhZGluZyIsIkhlYWRlciIsInN0eWxlcyIsIkZpVXBsb2FkIiwidXNlU3RhdGUiLCJQcm9kdWN0IiwiYXZhdGFyVXJsIiwic2V0QXZhdGFyVXJsIiwiaW1hZ2VBdmF0YXIiLCJzZXRJbWFnZUF2YXRhciIsImhhbmRsZUZpbGUiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJpbWFnZSIsInR5cGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ0aXRsZSIsImRpdiIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsImZvcm0iLCJsYWJlbCIsImxhYmVsQXZhdGFyIiwic3BhbiIsInVwbG9hZEljb24iLCJzaXplIiwiY29sb3IiLCJpbnB1dCIsImFjY2VwdCIsIm9uQ2hhbmdlIiwic3ZnIiwicHJldmlldyIsIndpZHRoIiwiaGVpZ2h0IiwiaHJlZiIsImFsdCIsInNlbGVjdCIsIm9wdGlvbiIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJidXR0b24iLCJidXR0b25BZGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/product/index.tsx\n"));

/***/ })

});