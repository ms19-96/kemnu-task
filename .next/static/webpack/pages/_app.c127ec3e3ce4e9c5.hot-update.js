"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/theme */ \"./src/theme.js\");\n/* harmony import */ var _src_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/createEmotionCache */ \"./src/createEmotionCache.js\");\n/* harmony import */ var _src_components_DefaultLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/DefaultLayout */ \"./src/components/DefaultLayout/index.js\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/dist/notistack.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nvar clientSideEmotionCache = (0,_src_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nfunction MyApp(props) {\n    _s();\n    var Component = props.Component, _emotionCache = props.emotionCache, emotionCache = _emotionCache === void 0 ? clientSideEmotionCache : _emotionCache, pageProps = props.pageProps;\n    var Router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref[0], setLoading = ref[1];\n    var email;\n    var password;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (\"object\" !== undefined) {\n            email = JSON.parse(localStorage.getItem('email'));\n            password = JSON.parse(localStorage.getItem('password'));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoading(true);\n        if (email !== null || password !== null) {\n            Router.push('/');\n            setLoading(false);\n        } else {\n            Router.push('/login');\n            setLoading(false);\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(notistack__WEBPACK_IMPORTED_MODULE_6__.SnackbarProvider, {\n        __source: {\n            fileName: \"/Users/guru/Documents/projects/kemnu task/pages/_app.js\",\n            lineNumber: 45,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.CacheProvider, {\n            value: emotionCache,\n            __source: {\n                fileName: \"/Users/guru/Documents/projects/kemnu task/pages/_app.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    __source: {\n                        fileName: \"/Users/guru/Documents/projects/kemnu task/pages/_app.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                            __source: {\n                                fileName: \"/Users/guru/Documents/projects/kemnu task/pages/_app.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: \"Kemnu Task\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                            content: \"initial-scale=1, width=device-width\",\n                            name: \"viewport\",\n                            __source: {\n                                fileName: \"/Users/guru/Documents/projects/kemnu task/pages/_app.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            },\n                            __self: this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.ThemeProvider, {\n                    theme: _src_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    __source: {\n                        fileName: \"/Users/guru/Documents/projects/kemnu task/pages/_app.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            __source: {\n                                fileName: \"/Users/guru/Documents/projects/kemnu task/pages/_app.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            },\n                            __self: this\n                        }),\n                        loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Loader, {\n                            __source: {\n                                fileName: \"/Users/guru/Documents/projects/kemnu task/pages/_app.js\",\n                                lineNumber: 54,\n                                columnNumber: 35\n                            },\n                            __self: this\n                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_DefaultLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            __source: {\n                                fileName: \"/Users/guru/Documents/projects/kemnu task/pages/_app.js\",\n                                lineNumber: 55,\n                                columnNumber: 29\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n                            }, pageProps, {\n                                __source: {\n                                    fileName: \"/Users/guru/Documents/projects/kemnu task/pages/_app.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 33\n                                },\n                                __self: this\n                            }))\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(MyApp, \"znQ1WKzSzn/HZqSp5aXi77fVMfM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = MyApp;\nMyApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().elementType.isRequired),\n    emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),\n    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object.isRequired)\n};\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1M7QUFDTjtBQUN3QjtBQUNEO0FBQ0w7QUFDZDtBQUMwQjtBQUNOO0FBQ1g7QUFDQztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLEdBQUssQ0FBQ2Esc0JBQXNCLEdBQUdOLG1FQUFrQjtBQUVsQyxRQUFRLENBQUNPLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLENBQUM7O0lBQ2xDLEdBQUssQ0FBR0MsU0FBUyxHQUF1REQsS0FBSyxDQUFyRUMsU0FBUyxrQkFBdURELEtBQUssQ0FBMURFLFlBQVksRUFBWkEsWUFBWSw4QkFBR0osc0JBQXNCLGtCQUFFSyxTQUFTLEdBQUtILEtBQUssQ0FBbkJHLFNBQVM7SUFFbkUsR0FBSyxDQUFDQyxNQUFNLEdBQUdQLHNEQUFTO0lBRXhCLEdBQUssQ0FBeUJGLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDVSxPQUFPLEdBQWdCVixHQUFlLEtBQTdCVyxVQUFVLEdBQUlYLEdBQWU7SUFDN0MsR0FBRyxDQUFDWSxLQUFLO0lBQ1QsR0FBRyxDQUFDQyxRQUFRO0lBQ1pkLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2IsRUFBRSxFQUFFLENBQWEsWUFBS2UsU0FBUyxFQUFFLENBQUM7WUFDOUJGLEtBQUssR0FBR0csSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQU87WUFDL0NMLFFBQVEsR0FBR0UsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQVU7UUFDekQsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTG5CLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2JZLFVBQVUsQ0FBQyxJQUFJO1FBQ2YsRUFBRSxFQUFFQyxLQUFLLEtBQUssSUFBSSxJQUFJQyxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDdENKLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDLENBQUc7WUFDZlIsVUFBVSxDQUFDLEtBQUs7UUFDcEIsQ0FBQyxNQUNJLENBQUM7WUFDRkYsTUFBTSxDQUFDVSxJQUFJLENBQUMsQ0FBUTtZQUNwQlIsVUFBVSxDQUFDLEtBQUs7UUFDcEIsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHTCxNQUFNLHNFQUNEVix1REFBZ0I7Ozs7Ozs7d0ZBQ1pOLHlEQUFhO1lBQUN5QixLQUFLLEVBQUViLFlBQVk7Ozs7Ozs7O3NGQUM3QmYsa0RBQUk7Ozs7Ozs7OzZGQUNBNkIsQ0FBSzs7Ozs7OztzQ0FBQyxDQUFVOzs2RkFDaEJDLENBQUk7NEJBQUNDLE9BQU8sRUFBQyxDQUFxQzs0QkFBQ0MsSUFBSSxFQUFDLENBQVU7Ozs7Ozs7Ozs7c0ZBRXRFL0IsK0RBQWE7b0JBQUNHLEtBQUssRUFBRUEsa0RBQUs7Ozs7Ozs7OzZGQUN0QkYsa0VBQVc7Ozs7Ozs7O3dCQUVSZ0IsT0FBTyx3RUFBSWUsTUFBTTs7Ozs7OztrR0FDWjNCLHFFQUFNOzs7Ozs7OzJHQUNGUSxTQUFTOytCQUFJRSxTQUFTOzs7Ozs7Ozs7Ozs7OztBQVN2RCxDQUFDO0dBakR1QkosS0FBSzs7UUFHVkYsa0RBQVM7OztLQUhKRSxLQUFLO0FBbUQ3QkEsS0FBSyxDQUFDc0IsU0FBUyxHQUFHLENBQUM7SUFDZnBCLFNBQVMsRUFBRWYsMkVBQWdDO0lBQzNDZ0IsWUFBWSxFQUFFaEIsMkRBQWdCO0lBQzlCaUIsU0FBUyxFQUFFakIsc0VBQTJCO0FBQzFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3JjL3RoZW1lJztcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAnLi4vc3JjL2NyZWF0ZUVtb3Rpb25DYWNoZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0RlZmF1bHRMYXlvdXQnO1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NuYWNrYmFyUHJvdmlkZXJ9IGZyb20gXCJub3Rpc3RhY2tcIjtcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgY2xpZW50U2lkZUVtb3Rpb25DYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgUm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgbGV0IGVtYWlsO1xuICAgIGxldCBwYXNzd29yZDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbWFpbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykpO1xuICAgICAgICAgICAgcGFzc3dvcmQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGlmIChlbWFpbCAhPT0gbnVsbCB8fCBwYXNzd29yZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNuYWNrYmFyUHJvdmlkZXI+XG4gICAgICAgICAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPktlbW51IFRhc2s8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiBuYW1lPVwidmlld3BvcnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/IDxMb2FkZXIgLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnR7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICA8L0NhY2hlUHJvdmlkZXI+XG4gICAgICAgIDwvU25hY2tiYXJQcm92aWRlcj5cblxuICAgICk7XG59XG5cbk15QXBwLnByb3BUeXBlcyA9IHtcbiAgICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICAgIGVtb3Rpb25DYWNoZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJIZWFkIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwiQ2FjaGVQcm92aWRlciIsInRoZW1lIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwiTGF5b3V0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTbmFja2JhclByb3ZpZGVyIiwidXNlUm91dGVyIiwiY2xpZW50U2lkZUVtb3Rpb25DYWNoZSIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJlbW90aW9uQ2FjaGUiLCJwYWdlUHJvcHMiLCJSb3V0ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVtYWlsIiwicGFzc3dvcmQiLCJ1bmRlZmluZWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsInZhbHVlIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsIm5hbWUiLCJMb2FkZXIiLCJwcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});