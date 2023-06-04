(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/uni-stat/user/trend/trend"],{

/***/ 690:
/*!***********************************************************************************************!*\
  !*** D:/桌面/onlineEducation1_admin/main.js?{"page":"pages%2Funi-stat%2Fuser%2Ftrend%2Ftrend"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _trend = _interopRequireDefault(__webpack_require__(/*! ./pages/uni-stat/user/trend/trend.vue */ 691));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_trend.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 691:
/*!************************************************************************!*\
  !*** D:/桌面/onlineEducation1_admin/pages/uni-stat/user/trend/trend.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trend_vue_vue_type_template_id_1484d6fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trend.vue?vue&type=template&id=1484d6fc& */ 692);
/* harmony import */ var _trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trend.vue?vue&type=script&lang=js& */ 694);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 48);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _trend_vue_vue_type_template_id_1484d6fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _trend_vue_vue_type_template_id_1484d6fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _trend_vue_vue_type_template_id_1484d6fc___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/uni-stat/user/trend/trend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 692:
/*!*******************************************************************************************************!*\
  !*** D:/桌面/onlineEducation1_admin/pages/uni-stat/user/trend/trend.vue?vue&type=template&id=1484d6fc& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trend_vue_vue_type_template_id_1484d6fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./trend.vue?vue&type=template&id=1484d6fc& */ 693);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trend_vue_vue_type_template_id_1484d6fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trend_vue_vue_type_template_id_1484d6fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trend_vue_vue_type_template_id_1484d6fc___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trend_vue_vue_type_template_id_1484d6fc___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 693:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/onlineEducation1_admin/pages/uni-stat/user/trend/trend.vue?vue&type=template&id=1484d6fc& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniStatBreadcrumb: function () {
      return Promise.all(/*! import() | components/uni-stat-breadcrumb/uni-stat-breadcrumb */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-stat-breadcrumb/uni-stat-breadcrumb")]).then(__webpack_require__.bind(null, /*! @/components/uni-stat-breadcrumb/uni-stat-breadcrumb.vue */ 753))
    },
    uniDataSelect: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-data-select/components/uni-data-select/uni-data-select */ "uni_modules/uni-data-select/components/uni-data-select/uni-data-select").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue */ 1001))
    },
    uniStatTabs: function () {
      return __webpack_require__.e(/*! import() | components/uni-stat-tabs/uni-stat-tabs */ "components/uni-stat-tabs/uni-stat-tabs").then(__webpack_require__.bind(null, /*! @/components/uni-stat-tabs/uni-stat-tabs.vue */ 767))
    },
    uniDatetimePicker: function () {
      return Promise.all(/*! import() | uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue */ 1015))
    },
    uniStatPanel: function () {
      return __webpack_require__.e(/*! import() | components/uni-stat-panel/uni-stat-panel */ "components/uni-stat-panel/uni-stat-panel").then(__webpack_require__.bind(null, /*! @/components/uni-stat-panel/uni-stat-panel.vue */ 1034))
    },
    qiunDataCharts: function () {
      return Promise.all(/*! import() | uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts")]).then(__webpack_require__.bind(null, /*! @/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue */ 1041))
    },
    uniStatTable: function () {
      return __webpack_require__.e(/*! import() | components/uni-stat-table/uni-stat-table */ "components/uni-stat-table/uni-stat-table").then(__webpack_require__.bind(null, /*! @/components/uni-stat-table/uni-stat-table.vue */ 1050))
    },
    uniPagination: function () {
      return Promise.all(/*! import() | uni_modules/uni-pagination/components/uni-pagination/uni-pagination */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-pagination/components/uni-pagination/uni-pagination")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-pagination/components/uni-pagination/uni-pagination.vue */ 862))
    },
    fixWindow: function () {
      return __webpack_require__.e(/*! import() | components/fix-window/fix-window */ "components/fix-window/fix-window").then(__webpack_require__.bind(null, /*! @/components/fix-window/fix-window.vue */ 802))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.currentDateTab < 0 && !!_vm.query.start_time.length
  var g1 = new Date().getTime()
  var g2 = _vm.query.platform_id && _vm.query.platform_id.indexOf("==") === -1
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 694:
/*!*************************************************************************************************!*\
  !*** D:/桌面/onlineEducation1_admin/pages/uni-stat/user/trend/trend.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./trend.vue?vue&type=script&lang=js& */ 695);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 695:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/onlineEducation1_admin/pages/uni-stat/user/trend/trend.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _util = __webpack_require__(/*! @/js_sdk/uni-stat/util.js */ 77);
var _fieldsMap = _interopRequireDefault(__webpack_require__(/*! ./fieldsMap.js */ 696));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var _default = {
  data: function data() {
    return {
      fieldsMap: _fieldsMap.default,
      query: {
        dimension: "hour",
        appid: '',
        platform_id: '',
        uni_platform: '',
        version_id: '',
        channel_id: '',
        start_time: []
      },
      options: {
        pageSize: 20,
        pageCurrent: 1,
        // 当前页
        total: 0 // 数据总量
      },

      loading: false,
      currentDateTab: 1,
      currentDimensionTab: 0,
      tableData: [],
      panelData: _fieldsMap.default.filter(function (f) {
        return f.hasOwnProperty('value');
      }),
      chartData: {},
      chartTab: 'new_user_count',
      channelData: [],
      tabName: '新增用户',
      errorMessage: ""
    };
  },
  computed: {
    chartTabs: function chartTabs() {
      var tabs = [];
      _fieldsMap.default.forEach(function (item) {
        var _id = item.field,
          name = item.title;
        var isTab = item.hasOwnProperty('value');
        if (_id && name && isTab) {
          tabs.push({
            _id: _id,
            name: name
          });
        }
      });
      return tabs;
    },
    dimensionTabs: function dimensionTabs() {
      var tabs = [{
        _id: 'hour',
        name: '按时'
      }, {
        _id: 'day',
        name: '按日'
      }, {
        _id: 'week',
        name: '按周'
      }, {
        _id: 'month',
        name: '按月'
      }];
      if (!this.getDays()) {
        this.query.dimension = 'hour';
        tabs.forEach(function (tab, index) {
          if (tab._id === 'hour') {
            tab.disabled = false;
          } else {
            tab.disabled = true;
          }
        });
        this.currentDimensionTab = 0;
      } else {
        this.query.dimension = 'day';
        tabs.forEach(function (tab, index) {
          if (tab._id === 'hour') {
            tab.disabled = true;
          } else {
            tab.disabled = false;
          }
        });
        this.currentDimensionTab = 1;
      }
      return tabs;
    },
    channelQuery: function channelQuery() {
      var platform_id = this.query.platform_id;
      return (0, _util.stringifyQuery)({
        platform_id: platform_id
      });
    },
    versionQuery: function versionQuery() {
      var _this$query = this.query,
        appid = _this$query.appid,
        uni_platform = _this$query.uni_platform;
      var query = (0, _util.stringifyQuery)({
        appid: appid,
        uni_platform: uni_platform
      });
      return query;
    }
  },
  created: function created() {
    var _this = this;
    this.debounceGet = (0, _util.debounce)(function () {
      _this.getAllData(_this.query);
    }, 300);
    this.getChannelData();
  },
  watch: {
    query: {
      deep: true,
      handler: function handler(val) {
        this.debounceGet();
      }
    }
  },
  methods: {
    getDays: function getDays() {
      if (!this.query.start_time.length) return true;
      var day = 24 * 60 * 60 * 1000;
      var _this$query$start_tim = (0, _slicedToArray2.default)(this.query.start_time, 2),
        start = _this$query$start_tim[0],
        end = _this$query$start_tim[1];
      var lessTwoDay = end - start >= day;
      return lessTwoDay;
    },
    useDatetimePicker: function useDatetimePicker() {
      this.currentDateTab = -1;
    },
    changeAppid: function changeAppid(id) {
      this.getChannelData(id, false);
    },
    changePlatform: function changePlatform(id, index, name, item) {
      this.getChannelData(null, id);
      this.query.version_id = 0;
      this.query.uni_platform = item.code;
    },
    changeTimeRange: function changeTimeRange(id, index) {
      this.currentDateTab = index;
      var day = 24 * 60 * 60 * 1000;
      var start, end;
      start = (0, _util.getTimeOfSomeDayAgo)(id);
      if (!id) {
        end = (0, _util.getTimeOfSomeDayAgo)(0) + day - 1;
      } else {
        end = (0, _util.getTimeOfSomeDayAgo)(0) - 1;
      }
      this.query.start_time = [start, end];
    },
    changePageCurrent: function changePageCurrent(e) {
      this.options.pageCurrent = e.current;
      this.getTabelData(this.query);
    },
    changePageSize: function changePageSize(pageSize) {
      this.options.pageSize = pageSize;
      // this.options.pageCurrent = 1 // 重置分页
      this.getTabelData(this.query);
    },
    changeChartTab: function changeChartTab(id, index, name) {
      this.tabName = name;
      this.getChartData(this.query, id, name);
    },
    getAllData: function getAllData(query) {
      if (!query.appid) {
        this.errorMessage = "请先选择应用";
        return; // 如果appid为空，则不进行查询
      }

      this.errorMessage = "";
      this.getPanelData();
      this.getChartData(query, this.chartTab, this.tabName);
      this.getTabelData(query);
    },
    getChartData: function getChartData(query) {
      var _this2 = this;
      var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.chartTab;
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '新增用户';
      // this.chartData = {}
      query = (0, _util.stringifyQuery)(query, true, ['uni_platform']);
      var dimension = this.query.dimension;
      var db = uniCloud.database();
      db.collection('uni-stat-result').where(query).field("".concat((0, _util.stringifyField)(_fieldsMap.default, field), ", start_time")).groupBy('start_time').groupField((0, _util.stringifyGroupField)(_fieldsMap.default, field)).orderBy('start_time', 'asc').get({
        getCount: true
      }).then(function (res) {
        var _res$result = res.result,
          count = _res$result.count,
          data = _res$result.data;
        var options = {
          categories: [],
          series: [{
            name: name,
            data: []
          }]
        };
        var mapper = _fieldsMap.default.filter(function (f) {
          return f.field === field;
        });
        mapper = JSON.parse(JSON.stringify(mapper));
        delete mapper[0].value;
        mapper[0].formatter = '';
        var _iterator = _createForOfIteratorHelper(data),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            (0, _util.mapfields)(mapper, item, item);
            var x = (0, _util.formatDate)(item.start_time, dimension);
            var y = item[field];
            options.series[0].data.push(y);
            options.categories.push(x);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        _this2.chartData = options;
      }).catch(function (err) {
        console.error(err);
        // err.message 错误信息
        // err.code 错误码
      }).finally(function () {
        _this2.loading = false;
      });
    },
    getTabelData: function getTabelData(query) {
      var _this3 = this;
      var pageCurrent = this.options.pageCurrent;
      query = (0, _util.stringifyQuery)(query, true, ['uni_platform']);
      this.options.pageCurrent = 1; // 重置分页
      this.loading = true;
      var db = uniCloud.database();
      db.collection('uni-stat-result').where(query).field((0, _util.stringifyField)(_fieldsMap.default)).groupBy('start_time').groupField((0, _util.stringifyGroupField)(_fieldsMap.default)).orderBy('start_time', 'desc').skip((pageCurrent - 1) * this.options.pageSize).limit(this.options.pageSize).get({
        getCount: true
      }).then(function (res) {
        var _res$result2 = res.result,
          count = _res$result2.count,
          data = _res$result2.data;
        var _iterator2 = _createForOfIteratorHelper(data),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            var date = item.start_time;
            if (date) {
              var dimension = _this3.query.dimension;
              item.start_time = (0, _util.formatDate)(date, dimension);
            }
            (0, _util.mapfields)(_fieldsMap.default, item, item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        _this3.tableData = [];
        _this3.options.total = count;
        _this3.tableData = data;
      }).catch(function (err) {
        console.error(err);
        // err.message 错误信息
        // err.code 错误码
      }).finally(function () {
        _this3.loading = false;
      });
    },
    getPanelData: function getPanelData() {
      var _this4 = this;
      var cloneQuery = JSON.parse(JSON.stringify(this.query));
      cloneQuery.dimension = 'day';
      var query = (0, _util.stringifyQuery)(cloneQuery, null, ['uni_platform']);
      var db = uniCloud.database();
      var subTable = db.collection('uni-stat-result').where(query).field("".concat((0, _util.stringifyField)(_fieldsMap.default), ",stat_date")).groupBy('appid').groupField((0, _util.stringifyGroupField)(_fieldsMap.default)).orderBy('stat_date', 'desc').get().then(function (res) {
        var item = res.result.data[0];
        item && (item.total_users = 0);
        _this4.panelData = [];
        _this4.panelData = (0, _util.mapfields)(_fieldsMap.default, item);
        _util.getFieldTotal.call(_this4, query, 'total_users');
      });
    },
    navTo: function navTo(id) {
      var url = "/pages/uni-stat/overview/overview?id=".concat(id);
      uni.navigateTo({
        url: url
      });
    },
    //获取渠道信息
    getChannelData: function getChannelData(appid, platform_id) {
      var _this5 = this;
      this.query.channel_id = '';
      var db = uniCloud.database();
      var condition = {};
      //对应应用
      appid = appid ? appid : this.query.appid;
      if (appid) {
        condition.appid = appid;
      }
      //对应平台
      platform_id = platform_id ? platform_id : this.query.platform_id;
      if (platform_id) {
        condition.platform_id = platform_id;
      }
      var platformTemp = db.collection('uni-stat-app-platforms').field('_id, name').getTemp();
      var channelTemp = db.collection('uni-stat-app-channels').where(condition).field('_id, channel_name, create_time, platform_id').getTemp();
      db.collection(channelTemp, platformTemp).orderBy('platform_id', 'asc').get().then(function (res) {
        var data = res.result.data;
        var channels = [];
        if (data.length > 0) {
          var channelName;
          for (var i in data) {
            channelName = data[i].channel_name ? data[i].channel_name : '默认';
            if (data[i].platform_id.length > 0) {
              channelName = data[i].platform_id[0].name + '-' + channelName;
            }
            channels.push({
              value: data[i]._id,
              text: channelName
            });
          }
        }
        _this5.channelData = channels;
      }).catch(function (err) {
        console.error(err);
        // err.message 错误信息
        // err.code 错误码
      }).finally(function () {});
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[690,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/uni-stat/user/trend/trend.js.map