"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/dashboard/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/pages/components/Header/index.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\n\nvar __N_SSP = true;\nfunction Dashboard() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Painel - Sujeito Pizzaria\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                justifyContent: \"center\",\n                textAlign: \"center\",\n                color: \"white\",\n                fontSize: 40,\n                mt: \"10rem\",\n                children: \"painel\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tadeu\\\\Documents\\\\Pizzaria\\\\frontend\\\\src\\\\pages\\\\dashboard\\\\index.tsx\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFFaUI7QUFDRTs7QUFFaEMsU0FBU0c7SUFDdkIscUJBQ0M7OzBCQUVDLDhEQUFDSCxrREFBSUE7MEJBQ0osNEVBQUNJOzhCQUFNOzs7Ozs7Ozs7OzswQkFFUiw4REFBQ0gsc0RBQU1BOzs7OzswQkFDUCw4REFBQ0Msa0RBQUlBO2dCQUNKRyxnQkFBZ0I7Z0JBQ2hCQyxXQUFXO2dCQUNYQyxPQUFPO2dCQUNQQyxVQUFVO2dCQUNWQyxJQUFJOzBCQUNKOzs7Ozs7OztBQUtKO0tBbkJ3Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC50c3g/ZjVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IGNhblNTUkF1dGggfSBmcm9tICcuLi8uLi91dGlscy9jYW5TU1JBdXRoJ1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IHsgVGV4dCwgVlN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuIHJldHVybiAoXHJcbiAgPD5cclxuXHJcbiAgIDxIZWFkPlxyXG4gICAgPHRpdGxlPlBhaW5lbCAtIFN1amVpdG8gUGl6emFyaWE8L3RpdGxlPlxyXG4gICA8L0hlYWQ+XHJcbiAgIDxIZWFkZXIgLz5cclxuICAgPFRleHRcclxuICAgIGp1c3RpZnlDb250ZW50PXsnY2VudGVyJ31cclxuICAgIHRleHRBbGlnbj17J2NlbnRlcid9XHJcbiAgICBjb2xvcj17J3doaXRlJ31cclxuICAgIGZvbnRTaXplPXs0MH1cclxuICAgIG10PXsnMTByZW0nfVxyXG4gICA+XHJcbiAgICBwYWluZWxcclxuICAgPC9UZXh0PlxyXG4gIDwvPlxyXG4gKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gY2FuU1NSQXV0aChhc3luYyAoY3R4KSA9PiB7XHJcblxyXG4gcmV0dXJuIHtcclxuICBwcm9wczoge31cclxuIH1cclxufSkiXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRlciIsIlRleHQiLCJEYXNoYm9hcmQiLCJ0aXRsZSIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiY29sb3IiLCJmb250U2l6ZSIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.tsx\n"));

/***/ })

});