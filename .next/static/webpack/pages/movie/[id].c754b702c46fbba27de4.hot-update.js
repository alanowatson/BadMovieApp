/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie/[id]",{

/***/ "./pages/movie/[id]/index.js":
/*!***********************************!*\
  !*** ./pages/movie/[id]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _secrets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../secrets */ \"./secrets.js\");\n/* harmony import */ var _styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/Movie.module.css */ \"./styles/Movie.module.css\");\n/* harmony import */ var _styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/alanwatson/Documents/bootcamp/Fellow/Learning Next/BadMovie/pages/movie/[id]/index.js\",\n    _this = undefined;\n\n\n\n\n\nvar movie = function movie(_ref) {\n  var movie = _ref.movie;\n  // const router = useRouter();\n  // const { id } = router.query;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: movie.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: movie.overview\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"Genre:\", ' ', movie.genres.map(function (genre, idx) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [genre.name, \" \"]\n          }, \"\".concat(genre.name).concat(idx), true, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 20\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().posterBig),\n      src: \"\".concat(_secrets__WEBPACK_IMPORTED_MODULE_2__.imageUrlStart).concat(movie.images.backdrops[0].file_path)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: \"Cast\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),\n      children: movie.credits.cast.map(function (person, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: person.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"image\", {\n            className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().poster),\n            src: \"\".concat(_secrets__WEBPACK_IMPORTED_MODULE_2__.imageUrlStart).concat(person.profile_path)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/\",\n      children: \"Go Back\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (movie);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUvW2lkXS9pbmRleC5qcz84NDUzIl0sIm5hbWVzIjpbIm1vdmllIiwibW92aWVTdHlsZXMiLCJ0aXRsZSIsIm92ZXJ2aWV3IiwiZ2VucmVzIiwibWFwIiwiZ2VucmUiLCJpZHgiLCJuYW1lIiwiaW1hZ2VVcmxTdGFydCIsImltYWdlcyIsImJhY2tkcm9wcyIsImZpbGVfcGF0aCIsImNyZWRpdHMiLCJjYXN0IiwicGVyc29uIiwiaW5kZXgiLCJwcm9maWxlX3BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcscUJBQWU7QUFBQSxNQUFaQSxLQUFZLFFBQVpBLEtBQVk7QUFDM0I7QUFDQTtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVDLHNFQUFoQjtBQUFBLDhCQUNFO0FBQUEsa0JBQUtELEtBQUssQ0FBQ0U7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLGtCQUFJRixLQUFLLENBQUNHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBQSw2QkFDUyxHQURULEVBRUdILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUNoQyw4QkFBTztBQUFBLHVCQUFtQ0QsS0FBSyxDQUFDRSxJQUF6QztBQUFBLHVCQUFjRixLQUFLLENBQUNFLElBQXBCLFNBQTJCRCxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0QsU0FGQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBV0U7QUFDRSxlQUFTLEVBQUVOLDJFQURiO0FBRUUsU0FBRyxZQUFLUSxtREFBTCxTQUFxQlQsS0FBSyxDQUFDVSxNQUFOLENBQWFDLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEJDLFNBQS9DO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGLGVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkYsZUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkYsZUFrQkU7QUFBSyxlQUFTLEVBQUVYLHNFQUFoQjtBQUFBLGdCQUNHRCxLQUFLLENBQUNhLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQlQsR0FBbkIsQ0FBdUIsVUFBQ1UsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQ3pDLDRCQUNFO0FBQUcsbUJBQVMsRUFBRWYsc0VBQWQ7QUFBQSxrQ0FDRTtBQUFBLHNCQUFLYyxNQUFNLENBQUNQO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUdFO0FBQ0UscUJBQVMsRUFBRVAsd0VBRGI7QUFFRSxlQUFHLFlBQUtRLG1EQUFMLFNBQXFCTSxNQUFNLENBQUNFLFlBQTVCO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFTRCxPQVZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRixlQWdDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaENGO0FBQUEsa0JBREY7QUFvQ0QsQ0F2Q0Q7OztBQThFQSwrREFBZWpCLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS9baWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IE1vdmllQVBJa2V5LCBpbWFnZVVybFN0YXJ0IH0gZnJvbSAnLi4vLi4vLi4vc2VjcmV0cyc7XG5pbXBvcnQgbW92aWVTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL01vdmllLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBtb3ZpZSA9ICh7IG1vdmllIH0pID0+IHtcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e21vdmllU3R5bGVzLmdyaWR9PlxuICAgICAgICA8aDI+e21vdmllLnRpdGxlfTwvaDI+XG4gICAgICAgIDxwPnttb3ZpZS5vdmVydmlld308L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEdlbnJlOnsnICd9XG4gICAgICAgICAge21vdmllLmdlbnJlcy5tYXAoKGdlbnJlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2Ake2dlbnJlLm5hbWV9JHtpZHh9YH0+e2dlbnJlLm5hbWV9IDwvc3Bhbj47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9e21vdmllU3R5bGVzLnBvc3RlckJpZ31cbiAgICAgICAgc3JjPXtgJHtpbWFnZVVybFN0YXJ0fSR7bW92aWUuaW1hZ2VzLmJhY2tkcm9wc1swXS5maWxlX3BhdGh9YH1cbiAgICAgIC8+XG5cbiAgICAgIDxociAvPlxuICAgICAgPGgzPkNhc3Q8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e21vdmllU3R5bGVzLmdyaWR9PlxuICAgICAgICB7bW92aWUuY3JlZGl0cy5jYXN0Lm1hcCgocGVyc29uLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e21vdmllU3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgICA8aDM+e3BlcnNvbi5uYW1lfTwvaDM+XG5cbiAgICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb3ZpZVN0eWxlcy5wb3N0ZXJ9XG4gICAgICAgICAgICAgICAgc3JjPXtgJHtpbWFnZVVybFN0YXJ0fSR7cGVyc29uLnByb2ZpbGVfcGF0aH1gfSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPExpbmsgaHJlZj0nLyc+R28gQmFjazwvTGluaz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7Y29udGV4dC5wYXJhbXMuaWR9P2FwaV9rZXk9JHtNb3ZpZUFQSWtleX0mYXBwZW5kX3RvX3Jlc3BvbnNlPWltYWdlcyxjcmVkaXRzYFxuICApO1xuICBjb25zdCBtb3ZpZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnNvbGUubG9nKCdzaW5nbGUgTW92aWUnLCBtb3ZpZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbW92aWUsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gIC8vICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke01vdmllQVBJa2V5fSZsYW5ndWFnZT1lbi1VUyZzb3J0X2J5PXZvdGVfYXZlcmFnZS5hc2MmaW5jbHVkZV9hZHVsdD1mYWxzZSZpbmNsdWRlX3ZpZGVvPWZhbHNlJnBhZ2U9MWBcbiAgLy8gKTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy90cmVuZGluZy9hbGwvd2Vlaz9hcGlfa2V5PSR7TW92aWVBUElrZXl9YFxuICApO1xuXG4gIGNvbnN0IG1vdmllT2JqID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgbW92aWVzID0gbW92aWVPYmoucmVzdWx0cy5maWx0ZXIoKG1vdmllKSA9PiB7XG4gICAgaWYgKG1vdmllLnZvdGVfYXZlcmFnZSA8IDcuMCkgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIGNvbnN0IGlkcyA9IG1vdmllcy5tYXAoKG1vdmllKSA9PiBtb3ZpZS5pZCk7XG4gIGNvbnN0IHBhdGhzID0gaWRzLm1hcCgoaWQpID0+ICh7IHBhcmFtczogeyBpZDogaWQudG9TdHJpbmcoKSB9IH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmllO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movie/[id]/index.js\n");

/***/ })

});