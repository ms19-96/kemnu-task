"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/page-components/login/LoginComponent.js":
/*!*****************************************************!*\
  !*** ./src/page-components/login/LoginComponent.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_guru_Documents_projects_kemnu_task_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_guru_Documents_projects_kemnu_task_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_guru_Documents_projects_kemnu_task_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _LoginFirstComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginFirstComponent */ \"./src/page-components/login/LoginFirstComponent.js\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/dist/notistack.esm.js\");\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/styles */ \"./node_modules/@mui/styles/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useHandleError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useHandleError */ \"./src/hooks/useHandleError.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function(theme) {\n    return {\n        paper: _defineProperty({\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            // flex: '598',\n            backgroundColor: '#fff',\n            height: '100vh',\n            padding: 55,\n            width: '100%'\n        }, theme.breakpoints.down('sm'), {\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            // flex: '598',\n            backgroundColor: '#fff',\n            height: '100vh',\n            padding: 20,\n            width: '100%'\n        })\n    };\n});\nvar LoginComponent = function(param) {\n    var setCurrentPage = param.setCurrentPage, setToken = param.setToken;\n    _s();\n    var enqueueSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_4__.useSnackbar)().enqueueSnackbar;\n    var classes = useStyles();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), emailError = ref2[0], setEmailError = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), passwordError = ref3[0], setPasswordError = ref3[1];\n    var Router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var handleError = (0,_hooks_useHandleError__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    var validate = function() {\n        if (email.trim() === '') {\n            setEmailError('Email mustn\\'t be empty');\n            handleError('Email mustn\\'t be empty');\n            return false;\n        } else if (password.trim() === '') {\n            setPasswordError('Password mustn\\'t be empty');\n            return false;\n        } else if (email.trim() !== 'admin@gmail.com') {\n            enqueueSnackbar('Invalid emailId', {\n                variant: \"error\"\n            });\n            return false;\n        } else if (password.trim() !== 'Password@1') {\n            enqueueSnackbar('Invalid password', {\n                variant: \"error\"\n            });\n            return false;\n        } else {\n            setEmailError('');\n            setPasswordError('');\n            return true;\n        }\n    };\n    var login = _asyncToGenerator(_Users_guru_Documents_projects_kemnu_task_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _Users_guru_Documents_projects_kemnu_task_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!validate()) {\n                        _ctx.next = 8;\n                        break;\n                    }\n                    _ctx.next = 3;\n                    return localStorage.setItem('email', JSON.stringify(email));\n                case 3:\n                    _ctx.next = 5;\n                    return localStorage.setItem('password', JSON.stringify(password));\n                case 5:\n                    enqueueSnackbar('Login Successfully', {\n                        variant: \"success\"\n                    });\n                    _ctx.next = 8;\n                    return Router.push('/');\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: classes.paper,\n        __source: {\n            fileName: \"/Users/guru/Documents/projects/kemnu task/src/page-components/login/LoginComponent.js\",\n            lineNumber: 79,\n            columnNumber: 12\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_LoginFirstComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            email: email,\n            emailError: emailError,\n            setEmailError: setEmailError,\n            setEmail: setEmail,\n            password: password,\n            setPasswordError: setPasswordError,\n            passwordError: passwordError,\n            setPassword: setPassword,\n            login: login,\n            __source: {\n                fileName: \"/Users/guru/Documents/projects/kemnu task/src/page-components/login/LoginComponent.js\",\n                lineNumber: 80,\n                columnNumber: 9\n            },\n            __self: _this\n        })\n    }));\n};\n_s(LoginComponent, \"ZglDKe9zT9eita9TBZ1sYd2BbU0=\", false, function() {\n    return [\n        notistack__WEBPACK_IMPORTED_MODULE_4__.useSnackbar,\n        useStyles,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _hooks_useHandleError__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = LoginComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginComponent);\nvar _c;\n$RefreshReg$(_c, \"LoginComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZS1jb21wb25lbnRzL2xvZ2luL0xvZ2luQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDeUI7QUFDbEI7QUFDQztBQUNEO0FBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsR0FBSyxDQUFDTSxTQUFTLEdBQUdILHVEQUFVLENBQUNJLFFBQVEsQ0FBUkEsS0FBSztJQUFJLE1BQ25DLENBRG9DLENBQUM7UUFDcENDLEtBQUs7WUFDREMsT0FBTyxFQUFFLENBQU07WUFDZkMsY0FBYyxFQUFFLENBQVE7WUFDeEJDLFVBQVUsRUFBRSxDQUFRO1lBQ3BCLEVBQWU7WUFDZkMsZUFBZSxFQUFDLENBQU07WUFDdEJDLE1BQU0sRUFBQyxDQUFPO1lBQ2RDLE9BQU8sRUFBQyxFQUFFO1lBQ1ZDLEtBQUssRUFBQyxDQUFNO1dBQ1hSLEtBQUssQ0FBQ1MsV0FBVyxDQUFDQyxJQUFJLENBQUMsQ0FBSSxNQUFHLENBQUM7WUFDNUJSLE9BQU8sRUFBRSxDQUFNO1lBQ2ZDLGNBQWMsRUFBRSxDQUFRO1lBQ3hCQyxVQUFVLEVBQUUsQ0FBUTtZQUNwQixFQUFlO1lBQ2ZDLGVBQWUsRUFBQyxDQUFNO1lBQ3RCQyxNQUFNLEVBQUMsQ0FBTztZQUNkQyxPQUFPLEVBQUMsRUFBRTtZQUNWQyxLQUFLLEVBQUMsQ0FBTTtRQUNoQixDQUFDO0lBRVQsQ0FBQzs7QUFHRCxHQUFLLENBQUNHLGNBQWMsR0FBRyxRQUFRLFFBQXdCLENBQUM7UUFBL0JDLGNBQWMsU0FBZEEsY0FBYyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBRTdDLEdBQUssQ0FBR0MsZUFBZSxHQUFLbkIsc0RBQVcsR0FBL0JtQixlQUFlO0lBQ3ZCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHaEIsU0FBUztJQUN6QixHQUFLLENBQW9CTixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE3QnVCLEtBQUssR0FBYXZCLEdB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QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZS1jb21wb25lbnRzL2xvZ2luL0xvZ2luQ29tcG9uZW50LmpzPzMyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9naW5GaXJzdENvbXBvbmVudCBmcm9tIFwiLi9Mb2dpbkZpcnN0Q29tcG9uZW50XCI7XG5pbXBvcnQge3VzZVNuYWNrYmFyfSBmcm9tIFwibm90aXN0YWNrXCI7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbXVpL3N0eWxlc1wiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZUhhbmRsZUVycm9yIGZyb20gXCIuLi8uLi9ob29rcy91c2VIYW5kbGVFcnJvclwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gICAgcGFwZXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAvLyBmbGV4OiAnNTk4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOicjZmZmJyxcbiAgICAgICAgaGVpZ2h0OicxMDB2aCcsXG4gICAgICAgIHBhZGRpbmc6NTUsXG4gICAgICAgIHdpZHRoOicxMDAlJyxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOntcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgLy8gZmxleDogJzU5OCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyNmZmYnLFxuICAgICAgICAgICAgaGVpZ2h0OicxMDB2aCcsXG4gICAgICAgICAgICBwYWRkaW5nOjIwLFxuICAgICAgICAgICAgd2lkdGg6JzEwMCUnLFxuICAgICAgICB9XG4gICAgfSxcbn0pKTtcblxuXG5jb25zdCBMb2dpbkNvbXBvbmVudCA9ICh7c2V0Q3VycmVudFBhZ2UsIHNldFRva2VufSkgPT4ge1xuXG4gICAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IFtlbWFpbCxzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZW1haWxFcnJvcixzZXRFbWFpbEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmRFcnJvcixzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IHVzZUhhbmRsZUVycm9yKCk7XG5cbiAgICBjb25zdCB2YWxpZGF0ZSA9ICgpID0+e1xuICAgICAgICBpZiAoZW1haWwudHJpbSgpID09PSAnJyl7XG4gICAgICAgICAgICBzZXRFbWFpbEVycm9yKCdFbWFpbCBtdXN0blxcJ3QgYmUgZW1wdHknKTtcbiAgICAgICAgICAgIGhhbmRsZUVycm9yKCdFbWFpbCBtdXN0blxcJ3QgYmUgZW1wdHknKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXNzd29yZC50cmltKCkgPT09ICcnKXtcbiAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoJ1Bhc3N3b3JkIG11c3RuXFwndCBiZSBlbXB0eScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGVtYWlsLnRyaW0oKSAhPT0gJ2FkbWluQGdtYWlsLmNvbScpe1xuICAgICAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdJbnZhbGlkIGVtYWlsSWQnLCB7XG4gICAgICAgICAgICAgICAgdmFyaWFudDogXCJlcnJvclwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAocGFzc3dvcmQudHJpbSgpICE9PSAnUGFzc3dvcmRAMScpe1xuICAgICAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdJbnZhbGlkIHBhc3N3b3JkJywge1xuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RW1haWxFcnJvcignJyk7XG4gICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKCcnKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbG9naW4gPSBhc3luYyAoKSA9PntcbiAgICAgICAgaWYgKHZhbGlkYXRlKCkpe1xuICAgICAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgSlNPTi5zdHJpbmdpZnkoZW1haWwpKTtcbiAgICAgICAgICAgIGF3YWl0IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIEpTT04uc3RyaW5naWZ5KHBhc3N3b3JkKSk7XG4gICAgICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ0xvZ2luIFN1Y2Nlc3NmdWxseScsIHtcbiAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXdhaXQgUm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICA8TG9naW5GaXJzdENvbXBvbmVudFxuICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxuICAgICAgICAgICAgZW1haWxFcnJvcj17ZW1haWxFcnJvcn1cbiAgICAgICAgICAgIHNldEVtYWlsRXJyb3I9e3NldEVtYWlsRXJyb3J9XG4gICAgICAgICAgICBzZXRFbWFpbD17c2V0RW1haWx9XG4gICAgICAgICAgICBwYXNzd29yZD17cGFzc3dvcmR9XG4gICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yPXtzZXRQYXNzd29yZEVycm9yfVxuICAgICAgICAgICAgcGFzc3dvcmRFcnJvcj17cGFzc3dvcmRFcnJvcn1cbiAgICAgICAgICAgIHNldFBhc3N3b3JkPXtzZXRQYXNzd29yZH1cbiAgICAgICAgICAgIGxvZ2luPXtsb2dpbn1cbiAgICAgICAgLz5cbiAgICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTG9naW5GaXJzdENvbXBvbmVudCIsInVzZVNuYWNrYmFyIiwibWFrZVN0eWxlcyIsInVzZVJvdXRlciIsInVzZUhhbmRsZUVycm9yIiwidXNlU3R5bGVzIiwidGhlbWUiLCJwYXBlciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJwYWRkaW5nIiwid2lkdGgiLCJicmVha3BvaW50cyIsImRvd24iLCJMb2dpbkNvbXBvbmVudCIsInNldEN1cnJlbnRQYWdlIiwic2V0VG9rZW4iLCJlbnF1ZXVlU25hY2tiYXIiLCJjbGFzc2VzIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlbWFpbEVycm9yIiwic2V0RW1haWxFcnJvciIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwiUm91dGVyIiwiaGFuZGxlRXJyb3IiLCJ2YWxpZGF0ZSIsInRyaW0iLCJ2YXJpYW50IiwibG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/page-components/login/LoginComponent.js\n");

/***/ })

});