"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageChangeOnMouseScroll",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ImageToggleOnScroll = (param)=>{\n    let { primaryImg, secondaryImg } = param;\n    _s();\n    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = ()=>{\n        const rect = imageRef.current.getBoundingClientRect();\n        return rect.top >= 0 && rect.bottom <= window.innerHeight;\n    };\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [inView, setInview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setInview(isInView());\n        window.addEventListener(\"scroll\", scrollHandler);\n        return ()=>{\n            window.removeEventListener(\"scroll\", scrollHandler);\n        };\n    }, []);\n    const scrollHandler = ()=>{\n        setInview(isInView());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: inView ? secondaryImg : primaryImg,\n        alt: \"\",\n        ref: imageRef\n    }, void 0, false, {\n        fileName: \"/home/ifeayin/ReactApps/setting-up-toolchain/src/ImageToggleOnScroll.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageToggleOnScroll, \"Y1McjOedcobb7ESPWjTC3RkkhI8=\");\n_c = ImageToggleOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageToggleOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBEO0FBRTFELE1BQU1JLHNCQUFzQjtRQUFDLEVBQUNDLFVBQVUsRUFBRUMsWUFBWSxFQUFDOztJQUNuRCxNQUFNQyxXQUFXTCw2Q0FBTUEsQ0FBQztJQUV4QixNQUFNTSxXQUFXO1FBQ2pCLE1BQU1DLE9BQU9GLFNBQVNHLE9BQU8sQ0FBQ0MscUJBQXFCO1FBRW5ELE9BQU9GLEtBQUtHLEdBQUcsSUFBSSxLQUFLSCxLQUFLSSxNQUFNLElBQUlDLE9BQU9DLFdBQVc7SUFDN0Q7SUFFSSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDZSxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVyQ0YsZ0RBQVNBLENBQUM7UUFDTmtCLFVBQVVYO1FBQ1ZNLE9BQU9NLGdCQUFnQixDQUFDLFVBQVVDO1FBQ2xDLE9BQU87WUFDSFAsT0FBT1EsbUJBQW1CLENBQUMsVUFBVUQ7UUFFekM7SUFFSixHQUFHLEVBQUU7SUFFTCxNQUFNQSxnQkFBZ0I7UUFDbEJGLFVBQVVYO0lBQ2Q7SUFFRixxQkFDRSw4REFBQ2U7UUFBSUMsS0FBS04sU0FBU1osZUFBY0Q7UUFBYW9CLEtBQUk7UUFDbkRDLEtBQUtuQjs7Ozs7O0FBRVI7R0E5Qk1IO0tBQUFBO0FBZ0NOLCtEQUFlQSxtQkFBbUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanM/Y2M3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoe3ByaW1hcnlJbWcsIHNlY29uZGFyeUltZ30pID0+IHtcbiAgICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKVxuICAgIFxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT57XG4gICAgY29uc3QgcmVjdCA9IGltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgXG4gICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xufVxuXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpblZpZXcsIHNldEludmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIHNldEludmlldyhpc0luVmlldygpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gKCkgPT57XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XG5cbiAgICAgICAgfVxuXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+e1xuICAgICAgICBzZXRJbnZpZXcoaXNJblZpZXcoKSk7XG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPGltZyBzcmM9e2luVmlldyA/IHNlY29uZGFyeUltZyA6cHJpbWFyeUltZ30gIGFsdD0nJyBcbiAgIHJlZj17aW1hZ2VSZWZ9Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW5WaWV3Iiwic2V0SW52aWV3IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW1nIiwic3JjIiwiYWx0IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n"));

/***/ })

});