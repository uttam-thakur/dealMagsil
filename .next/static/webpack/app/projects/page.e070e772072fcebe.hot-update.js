"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/page",{

/***/ "(app-pages-browser)/./src/app/projects/page.tsx":
/*!***********************************!*\
  !*** ./src/app/projects/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ProjectCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProjectCarousel */ \"(app-pages-browser)/./src/app/components/ProjectCarousel.tsx\");\n/* harmony import */ var _projects_page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././projects/page.css */ \"(app-pages-browser)/./src/app/projects/page.css\");\n/* harmony import */ var _components_Clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Clients */ \"(app-pages-browser)/./src/app/components/Clients.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 20px;\\n  margin: 0 auto;\\n  max-width: 1200px;\\n\\n  .visible {\\n    opacity: 1;\\n    transform: translateY(0);\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  opacity: 0;\\n  transform: translateY(50px);\\n  transition: opacity 1s ease, transform 1s ease;\\n  margin-bottom: 50px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProjectsPage = ()=>{\n    _s();\n    const projectImages = [\n        {\n            src: \"https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?w=400&auto=format&fit=crop&q=60\",\n            caption: \"Caption One\"\n        },\n        {\n            src: \"https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?w=400&auto=format&fit=crop&q=60\",\n            caption: \"Caption One\"\n        },\n        {\n            src: \"https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?w=1000&auto=format&fit=crop&q=60\",\n            caption: \"Caption Two\"\n        },\n        {\n            src: \"https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?w=1000&auto=format&fit=crop&q=60\",\n            caption: \"Caption Two\"\n        },\n        {\n            src: \"https://plus.unsplash.com/premium_photo-1682308336208-7f3c19e6a96b?w=1000&auto=format&fit=crop&q=60\",\n            caption: \"Caption Two\"\n        },\n        {\n            src: \"https://images.unsplash.com/photo-1684262667998-ca8c750cad71?w=1000&auto=format&fit=crop&q=60\",\n            caption: \"Caption Three\"\n        }\n    ];\n    const imageCarouselRefs = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach((entry)=>{\n                if (entry.isIntersecting) {\n                    entry.target.classList.add(\"visible\");\n                } else {\n                    entry.target.classList.remove(\"visible\");\n                }\n            });\n        }, {\n            threshold: 0.2\n        } // 20% of the div should be visible before the animation triggers\n        );\n        imageCarouselRefs.current.forEach((carousel)=>{\n            if (carousel) {\n                observer.observe(carousel);\n            }\n        });\n        return ()=>{\n            observer.disconnect(); // Clean up observer on unmount\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MainDiv, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Here are a few of the hundreds of projects we’ve completed over the past\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            style: {\n                                color: \"#e53935\",\n                                fontWeight: \"bold\"\n                            },\n                            children: \"27 years\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined),\n                        \". Our project portfolio is growing every day. We are sure to have the experience we need to provide you with a quality, on-schedule project.\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            style: {\n                                fontSize: \"20px\",\n                                fontWeight: \"bold\"\n                            },\n                            children: \"We are proud to be part of so many exciting projects!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                className: \"project-heading\",\n                children: \"PAVER BLOCKS, GRASS PAVERS SUPPLYING & EXECUTION AT GENEXX EXOTICA - Asansol (PAHARPUR COOLING TOWERS)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CarouselWrapper, {\n                ref: (el)=>imageCarouselRefs.current[0] = el,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ProjectCarousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    images: projectImages\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"section-separator\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                className: \"project-heading\",\n                children: \"PAVER BLOCKS EXECUTION AT PINNACLE HONDA Showroom (Asansol)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CarouselWrapper, {\n                ref: (el)=>imageCarouselRefs.current[1] = el,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ProjectCarousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    images: projectImages\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                className: \"project-heading\",\n                children: \"SUPPLYING OF FENCING PILLARS OVER NATIONAL HIGHWAY (NH-2) PANAGARH to BARBADDA STRETCH\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CarouselWrapper, {\n                ref: (el)=>imageCarouselRefs.current[2] = el,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ProjectCarousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    images: projectImages\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"section-separator\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                className: \"project-heading\",\n                children: \"Our Clients Are\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Clients__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\UTTAM\\\\Desktop\\\\Deal Magsil React\\\\dealmagsil\\\\dealMagsil\\\\src\\\\app\\\\projects\\\\page.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsPage, \"0FFLfetnph3QnVs5Dwdq68KOUjU=\");\n_c = ProjectsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsPage);\n// Styled Components\nconst MainDiv = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c1 = MainDiv;\nconst CarouselWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c2 = CarouselWrapper;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ProjectsPage\");\n$RefreshReg$(_c1, \"MainDiv\");\n$RefreshReg$(_c2, \"CarouselWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvamVjdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzBEO0FBQzFCO0FBQ1c7QUFDRDtBQUNIO0FBRXZDLE1BQU1LLGVBQWU7O0lBQ25CLE1BQU1DLGdCQUFnQjtRQUNwQjtZQUNFQyxLQUFLO1lBQ0xDLFNBQVM7UUFDWDtRQUNBO1lBQ0VELEtBQUs7WUFDTEMsU0FBUztRQUNYO1FBQ0E7WUFDRUQsS0FBSztZQUNMQyxTQUFTO1FBQ1g7UUFDQTtZQUNFRCxLQUFLO1lBQ0xDLFNBQVM7UUFDWDtRQUNBO1lBQ0VELEtBQUs7WUFDTEMsU0FBUztRQUNYO1FBQ0E7WUFDRUQsS0FBSztZQUNMQyxTQUFTO1FBQ1g7S0FDRDtJQUVELE1BQU1DLG9CQUFvQk4sNkNBQU1BLENBQTRCLEVBQUU7SUFFOURELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsV0FBVyxJQUFJQyxxQkFDbkIsQ0FBQ0M7WUFDQ0EsUUFBUUMsT0FBTyxDQUFDLENBQUNDO2dCQUNmLElBQUlBLE1BQU1DLGNBQWMsRUFBRTtvQkFDeEJELE1BQU1FLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7Z0JBQzdCLE9BQU87b0JBQ0xKLE1BQU1FLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7Z0JBQ2hDO1lBQ0Y7UUFDRixHQUNBO1lBQUVDLFdBQVc7UUFBSSxFQUFFLGlFQUFpRTs7UUFHdEZYLGtCQUFrQlksT0FBTyxDQUFDUixPQUFPLENBQUMsQ0FBQ1M7WUFDakMsSUFBSUEsVUFBVTtnQkFDWlosU0FBU2EsT0FBTyxDQUFDRDtZQUNuQjtRQUNGO1FBRUEsT0FBTztZQUNMWixTQUFTYyxVQUFVLElBQUksK0JBQStCO1FBQ3hEO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQ0MsNEVBQUNDOzt3QkFBRTt3QkFFSTtzQ0FDTCw4REFBQ0M7NEJBQUtDLE9BQU87Z0NBQUVDLE9BQU87Z0NBQVdDLFlBQVk7NEJBQU87c0NBQUc7Ozs7Ozt3QkFBZTt3QkFFQztzQ0FDdkUsOERBQUNIOzRCQUFLQyxPQUFPO2dDQUFFRyxVQUFVO2dDQUFRRCxZQUFZOzRCQUFPO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNM0QsOERBQUNFO2dCQUFHQyxXQUFVOzBCQUFrQjs7Ozs7OzBCQUloQyw4REFBQ0M7Z0JBQWdCQyxLQUFLLENBQUNDLEtBQWE1QixrQkFBa0JZLE9BQU8sQ0FBQyxFQUFFLEdBQUdnQjswQkFDakUsNEVBQUNyQyxtRUFBYUE7b0JBQUNzQyxRQUFRaEM7Ozs7Ozs7Ozs7OzBCQUd6Qiw4REFBQ29CO2dCQUFJUSxXQUFVOzs7Ozs7MEJBRWYsOERBQUNEO2dCQUFHQyxXQUFVOzBCQUFrQjs7Ozs7OzBCQUdoQyw4REFBQ0M7Z0JBQWdCQyxLQUFLLENBQUNDLEtBQWE1QixrQkFBa0JZLE9BQU8sQ0FBQyxFQUFFLEdBQUdnQjswQkFDakUsNEVBQUNyQyxtRUFBYUE7b0JBQUNzQyxRQUFRaEM7Ozs7Ozs7Ozs7OzBCQUt6Qiw4REFBQzJCO2dCQUFHQyxXQUFVOzBCQUFrQjs7Ozs7OzBCQUloQyw4REFBQ0M7Z0JBQWdCQyxLQUFLLENBQUNDLEtBQWE1QixrQkFBa0JZLE9BQU8sQ0FBQyxFQUFFLEdBQUdnQjswQkFDakUsNEVBQUNyQyxtRUFBYUE7b0JBQUNzQyxRQUFRaEM7Ozs7Ozs7Ozs7OzBCQUd6Qiw4REFBQ29CO2dCQUFJUSxXQUFVOzs7Ozs7MEJBRWYsOERBQUNEO2dCQUFHQyxXQUFVOzBCQUFrQjs7Ozs7OzBCQUNoQyw4REFBQ2pDLDJEQUFNQTs7Ozs7Ozs7Ozs7QUFHYjtHQXZHTUk7S0FBQUE7QUF5R04sK0RBQWVBLFlBQVlBLEVBQUM7QUFFNUIsb0JBQW9CO0FBQ3BCLE1BQU1vQixVQUFVckIseURBQU1BLENBQUNzQixHQUFHO01BQXBCRDtBQVdOLE1BQU1VLGtCQUFrQi9CLHlEQUFNQSxDQUFDc0IsR0FBRztNQUE1QlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9qZWN0cy9wYWdlLnRzeD81YzcwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0Q2Fyb3VzZWxcIjtcclxuaW1wb3J0IFwiLi4vLi9wcm9qZWN0cy9wYWdlLmNzc1wiO1xyXG5pbXBvcnQgQ2xpZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0NsaWVudHNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFByb2plY3RzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0SW1hZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICBzcmM6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0Mzk0MzY1NTYyNTgtMWY3ZmFiMWJmZDRmP3c9NDAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnE9NjBcIixcclxuICAgICAgY2FwdGlvbjogXCJDYXB0aW9uIE9uZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDM5NDM2NTU2MjU4LTFmN2ZhYjFiZmQ0Zj93PTQwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZxPTYwXCIsXHJcbiAgICAgIGNhcHRpb246IFwiQ2FwdGlvbiBPbmVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJodHRwczovL3BsdXMudW5zcGxhc2guY29tL3ByZW1pdW1fcGhvdG8tMTY4MjMwODMzNjIwOC03ZjNjMTllNmE5NmI/dz0xMDAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnE9NjBcIixcclxuICAgICAgY2FwdGlvbjogXCJDYXB0aW9uIFR3b1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcImh0dHBzOi8vcGx1cy51bnNwbGFzaC5jb20vcHJlbWl1bV9waG90by0xNjgyMzA4MzM2MjA4LTdmM2MxOWU2YTk2Yj93PTEwMDAmYXV0bz1mb3JtYXQmZml0PWNyb3AmcT02MFwiLFxyXG4gICAgICBjYXB0aW9uOiBcIkNhcHRpb24gVHdvXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiaHR0cHM6Ly9wbHVzLnVuc3BsYXNoLmNvbS9wcmVtaXVtX3Bob3RvLTE2ODIzMDgzMzYyMDgtN2YzYzE5ZTZhOTZiP3c9MTAwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZxPTYwXCIsXHJcbiAgICAgIGNhcHRpb246IFwiQ2FwdGlvbiBUd29cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY4NDI2MjY2Nzk5OC1jYThjNzUwY2FkNzE/dz0xMDAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnE9NjBcIixcclxuICAgICAgY2FwdGlvbjogXCJDYXB0aW9uIFRocmVlXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGltYWdlQ2Fyb3VzZWxSZWZzID0gdXNlUmVmPChIVE1MRGl2RWxlbWVudCB8IG51bGwpW10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdGhyZXNob2xkOiAwLjIgfSAvLyAyMCUgb2YgdGhlIGRpdiBzaG91bGQgYmUgdmlzaWJsZSBiZWZvcmUgdGhlIGFuaW1hdGlvbiB0cmlnZ2Vyc1xyXG4gICAgKTtcclxuXHJcbiAgICBpbWFnZUNhcm91c2VsUmVmcy5jdXJyZW50LmZvckVhY2goKGNhcm91c2VsKSA9PiB7XHJcbiAgICAgIGlmIChjYXJvdXNlbCkge1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2Fyb3VzZWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7IC8vIENsZWFuIHVwIG9ic2VydmVyIG9uIHVubW91bnRcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1haW5EaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBIZXJlIGFyZSBhIGZldyBvZiB0aGUgaHVuZHJlZHMgb2YgcHJvamVjdHMgd2XigJl2ZSBjb21wbGV0ZWQgb3ZlciB0aGVcclxuICAgICAgICAgIHBhc3R7XCIgXCJ9XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZTUzOTM1XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PjI3IHllYXJzPC9zcGFuPlxyXG4gICAgICAgICAgLiBPdXIgcHJvamVjdCBwb3J0Zm9saW8gaXMgZ3Jvd2luZyBldmVyeSBkYXkuIFdlIGFyZSBzdXJlIHRvIGhhdmUgdGhlXHJcbiAgICAgICAgICBleHBlcmllbmNlIHdlIG5lZWQgdG8gcHJvdmlkZSB5b3Ugd2l0aCBhIHF1YWxpdHksIG9uLXNjaGVkdWxlIHByb2plY3Que1wiIFwifVxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgV2UgYXJlIHByb3VkIHRvIGJlIHBhcnQgb2Ygc28gbWFueSBleGNpdGluZyBwcm9qZWN0cyFcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGg0IGNsYXNzTmFtZT1cInByb2plY3QtaGVhZGluZ1wiPlxyXG4gICAgICAgIFBBVkVSIEJMT0NLUywgR1JBU1MgUEFWRVJTIFNVUFBMWUlORyAmIEVYRUNVVElPTiBBVCBHRU5FWFggRVhPVElDQSAtXHJcbiAgICAgICAgQXNhbnNvbCAoUEFIQVJQVVIgQ09PTElORyBUT1dFUlMpXHJcbiAgICAgIDwvaDQ+XHJcbiAgICAgIDxDYXJvdXNlbFdyYXBwZXIgcmVmPXsoZWw6IGFueSkgPT4gKGltYWdlQ2Fyb3VzZWxSZWZzLmN1cnJlbnRbMF0gPSBlbCl9PlxyXG4gICAgICAgIDxJbWFnZUNhcm91c2VsIGltYWdlcz17cHJvamVjdEltYWdlc30gLz5cclxuICAgICAgPC9DYXJvdXNlbFdyYXBwZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc2VwYXJhdG9yXCI+PC9kaXY+XHJcblxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwicHJvamVjdC1oZWFkaW5nXCI+XHJcbiAgICAgICAgUEFWRVIgQkxPQ0tTIEVYRUNVVElPTiBBVCBQSU5OQUNMRSBIT05EQSBTaG93cm9vbSAoQXNhbnNvbClcclxuICAgICAgPC9oND5cclxuICAgICAgPENhcm91c2VsV3JhcHBlciByZWY9eyhlbDogYW55KSA9PiAoaW1hZ2VDYXJvdXNlbFJlZnMuY3VycmVudFsxXSA9IGVsKX0+XHJcbiAgICAgICAgPEltYWdlQ2Fyb3VzZWwgaW1hZ2VzPXtwcm9qZWN0SW1hZ2VzfSAvPlxyXG4gICAgICA8L0Nhcm91c2VsV3JhcHBlcj5cclxuXHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc2VwYXJhdG9yXCI+PC9kaXY+ICovfVxyXG5cclxuICAgICAgPGg0IGNsYXNzTmFtZT1cInByb2plY3QtaGVhZGluZ1wiPlxyXG4gICAgICAgIFNVUFBMWUlORyBPRiBGRU5DSU5HIFBJTExBUlMgT1ZFUiBOQVRJT05BTCBISUdIV0FZIChOSC0yKSBQQU5BR0FSSCB0b1xyXG4gICAgICAgIEJBUkJBRERBIFNUUkVUQ0hcclxuICAgICAgPC9oND5cclxuICAgICAgPENhcm91c2VsV3JhcHBlciByZWY9eyhlbDogYW55KSA9PiAoaW1hZ2VDYXJvdXNlbFJlZnMuY3VycmVudFsyXSA9IGVsKX0+XHJcbiAgICAgICAgPEltYWdlQ2Fyb3VzZWwgaW1hZ2VzPXtwcm9qZWN0SW1hZ2VzfSAvPlxyXG4gICAgICA8L0Nhcm91c2VsV3JhcHBlcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1zZXBhcmF0b3JcIj48L2Rpdj5cclxuXHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJwcm9qZWN0LWhlYWRpbmdcIj5PdXIgQ2xpZW50cyBBcmU8L2g0PlxyXG4gICAgICA8Q2xpZW50IC8+XHJcbiAgICA8L01haW5EaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzUGFnZTtcclxuXHJcbi8vIFN0eWxlZCBDb21wb25lbnRzXHJcbmNvbnN0IE1haW5EaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcblxyXG4gIC52aXNpYmxlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2Fyb3VzZWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UsIHRyYW5zZm9ybSAxcyBlYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZUNhcm91c2VsIiwiQ2xpZW50IiwidXNlRWZmZWN0IiwidXNlUmVmIiwic3R5bGVkIiwiUHJvamVjdHNQYWdlIiwicHJvamVjdEltYWdlcyIsInNyYyIsImNhcHRpb24iLCJpbWFnZUNhcm91c2VsUmVmcyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0aHJlc2hvbGQiLCJjdXJyZW50IiwiY2Fyb3VzZWwiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsIk1haW5EaXYiLCJkaXYiLCJwIiwic3BhbiIsInN0eWxlIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJoNCIsImNsYXNzTmFtZSIsIkNhcm91c2VsV3JhcHBlciIsInJlZiIsImVsIiwiaW1hZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/projects/page.tsx\n"));

/***/ })

});