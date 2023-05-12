(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/uni-stat/pay-order/funnel/components/trendChart"],{

/***/ 1059:
/*!**********************************************************************************************!*\
  !*** D:/桌面/onlineEducation1_admin/pages/uni-stat/pay-order/funnel/components/trendChart.vue ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trendChart_vue_vue_type_template_id_49edca7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trendChart.vue?vue&type=template&id=49edca7c&scoped=true& */ 1060);
/* harmony import */ var _trendChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trendChart.vue?vue&type=script&lang=js& */ 1062);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _trendChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _trendChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 48);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _trendChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _trendChart_vue_vue_type_template_id_49edca7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _trendChart_vue_vue_type_template_id_49edca7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49edca7c",
  null,
  false,
  _trendChart_vue_vue_type_template_id_49edca7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/uni-stat/pay-order/funnel/components/trendChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1060:
/*!*****************************************************************************************************************************************!*\
  !*** D:/桌面/onlineEducation1_admin/pages/uni-stat/pay-order/funnel/components/trendChart.vue?vue&type=template&id=49edca7c&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trendChart_vue_vue_type_template_id_49edca7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./trendChart.vue?vue&type=template&id=49edca7c&scoped=true& */ 1061);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trendChart_vue_vue_type_template_id_49edca7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trendChart_vue_vue_type_template_id_49edca7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trendChart_vue_vue_type_template_id_49edca7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trendChart_vue_vue_type_template_id_49edca7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1061:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/onlineEducation1_admin/pages/uni-stat/pay-order/funnel/components/trendChart.vue?vue&type=template&id=49edca7c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uniStatTabs: function () {
      return __webpack_require__.e(/*! import() | components/uni-stat-tabs/uni-stat-tabs */ "components/uni-stat-tabs/uni-stat-tabs").then(__webpack_require__.bind(null, /*! @/components/uni-stat-tabs/uni-stat-tabs.vue */ 739))
    },
    uniDatetimePicker: function () {
      return Promise.all(/*! import() | uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue */ 994))
    },
    qiunDataCharts: function () {
      return Promise.all(/*! import() | uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts")]).then(__webpack_require__.bind(null, /*! @/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue */ 1013))
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
  var g0 = Date.now()
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1062:
/*!***********************************************************************************************************************!*\
  !*** D:/桌面/onlineEducation1_admin/pages/uni-stat/pay-order/funnel/components/trendChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trendChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./trendChart.vue?vue&type=script&lang=js& */ 1063);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trendChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trendChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trendChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trendChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_trendChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1063:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/桌面/onlineEducation1_admin/pages/uni-stat/pay-order/funnel/components/trendChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _util = __webpack_require__(/*! @/js_sdk/uni-stat/util.js */ 77);
var _timeUtil = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/uni-stat/timeUtil.js */ 716));
var _fieldsMap = __webpack_require__(/*! ../fieldsMap.js */ 1056);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default2 = {
  props: {
    query: {
      type: [Object],
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      tableName: 'uni-stat-pay-result',
      chartData: {},
      errorMessage: "",
      opts: {
        color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
        padding: [15, 15, 0, 15],
        legend: {},
        enableScroll: true,
        xAxis: {
          disableGrid: true,
          itemCount: 24,
          fontSize: 12
        },
        yAxis: {
          gridType: "dash",
          dashLength: 2,
          data: [{
            tofix: 2,
            unit: "%"
          }]
        },
        extra: {
          area: {
            type: "straight",
            opacity: 0.2,
            addLine: true,
            width: 2,
            gradient: false
          }
        }
      },
      // 时间选项
      dateTabs: {
        time: [],
        timeStr: "",
        index: 0,
        // 默认最近7天
        list: [
        //{ _id: 1, name: '昨天', dimension:"hour" },
        //{ _id: 0, name: '今天', dimension:"hour"  },
        {
          _id: 7,
          name: '最近七天',
          dimension: "day"
        }, {
          _id: 30,
          name: '最近30天',
          dimension: "day"
        }, {
          _id: 90,
          name: '最近90天',
          dimension: "day"
        }, {
          _id: 372,
          name: '月维度',
          dimension: "month"
        }, {
          _id: 1116,
          name: '季维度',
          dimension: "quarter"
        }, {
          _id: 4392,
          name: '年维度',
          dimension: "year"
        }]
      },
      statTabs: {
        index: 0,
        list: [{
          _id: 1,
          name: '支付转化率'
        }]
      },
      queryMode: 0
    };
  },
  created: function created() {
    var _this = this;
    this.getCloudDataDebounce = (0, _util.debounce)(function () {
      _this.getCloudData();
    }, 300);
    this.getCloudDataDebounce();
  },
  methods: {
    // 获取云端数据
    getCloudData: function getCloudData() {
      var _this2 = this;
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var query = this.query;
      if (!query.appid) {
        this.errorMessage = "请先选择应用";
        return;
      }
      this.errorMessage = "";
      var insideQuery = this.getWhere();
      var where = _objectSpread(_objectSpread({}, query), insideQuery);
      where = (0, _util.stringifyQuery)(where, true, ['uni_platform']);
      //console.log('trendChart-where: ', where);
      var db = uniCloud.database();
      db.collection(this.tableName).where(where).field("".concat((0, _util.stringifyField)(_fieldsMap.fieldsMap), ", start_time")).groupBy("start_time, dimension").groupField((0, _util.stringifyGroupField)(_fieldsMap.fieldsMap)).orderBy('start_time', 'asc').limit(100).get({
        getCount: true
      }).then(function (res) {
        var _res$result = res.result,
          count = _res$result.count,
          data = _res$result.data;
        data = (0, _util.fillTrendChartData)(data, insideQuery, _fieldsMap.fieldsMap); // 补全数据
        //console.log('data: ', data)
        // 数据格式化
        data.map(function (item, index) {
          item.value = Number((item.pay_user_count / item.activity_user_count * 100).toFixed(2));
          if (isNaN(item.value)) item.value = 0;
        });
        _this2.setChartData(data, insideQuery.dimension);
      }).catch(function (err) {
        console.error(err);
      }).finally(function () {});
    },
    // 设置图表数据
    setChartData: function setChartData(data, dimension) {
      var chartData = {
        categories: [],
        series: [{
          name: "支付转化率",
          data: []
        }]
      };
      var _iterator = _createForOfIteratorHelper(data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var x = this.formatDate(item.start_time, dimension);
          chartData.categories.push(x);
          var y = Number(item.value);
          chartData.series[0].data.push(y);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.chartData = chartData;
    },
    formatDate: function formatDate(date, type) {
      var d = new Date(date);
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var hour = d.getHours();
      var quarter = Math.floor((d.getMonth() + 3) / 3); //季度
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
      if (type === 'hour') {
        return "".concat(hour, "\u65F6");
      } else if (type === 'month') {
        return "".concat(year, "-").concat(month);
      } else if (type === 'quarter') {
        return "".concat(year, "/Q").concat(quarter);
      } else if (type === 'year') {
        return "".concat(year);
      } else {
        return (0, _util.parseDateTime)(d);
      }
    },
    // 监听 - 日期选择更改
    datePickerChange: function datePickerChange(time) {
      this.dateTabs.time = time;
      //this.dateTabs.index = null;
      this.queryMode = 1;
      this.getCloudData();
    },
    // 监听 - 日期选择更改
    dateTabsChange: function dateTabsChange(id, index) {
      this.dateTabs.index = index;
      this.queryMode = 0;
      this.getCloudData();
    },
    // 监听 - 统计字段纬度更改
    statTabsChange: function statTabsChange(id, index, name) {
      this.statTabs.index = index;
      this.getCloudData({
        field: id,
        name: name
      });
    },
    // 获取查询条件
    getWhere: function getWhere() {
      var day = 24 * 60 * 60 * 1000;
      var start_time = [];
      var item = this.dateTabs.list[this.dateTabs.index] || {};
      if (typeof item._id === "number" && this.queryMode === 0) {
        var start = (0, _util.getTimeOfSomeDayAgo)(item._id);
        var end = _timeUtil.default.getOffsetStartAndEnd("day", 0).endTime; // end默认=今天的截止时间
        if (item._id == 1) {
          // 如果是查昨天,则特殊处理下,end=昨天的截止时间
          end = _timeUtil.default.getOffsetStartAndEnd("day", 0, start).endTime;
        }
        start_time = [start, end];
      } else if (this.dateTabs.time) {
        start_time = this.dateTabs.time; // 当前选择的时间
      }

      var dimension = item.dimension || "day"; // 获取时间纬度
      this.dateTabs.timeStr = "".concat(_timeUtil.default.timeFormat(start_time[0]), " ~ ").concat(_timeUtil.default.timeFormat(start_time[1]));
      this.dateTabs.time = start_time;
      return {
        dimension: dimension,
        // 时间纬度
        start_time: start_time // 时间范围
      };
    }
  },

  watch: {
    query: {
      deep: true,
      handler: function handler(val) {
        this.getCloudDataDebounce();
      }
    }
  },
  computed: {}
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/pages/uni-stat/pay-order/funnel/components/trendChart.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/uni-stat/pay-order/funnel/components/trendChart-create-component',
    {
        'pages/uni-stat/pay-order/funnel/components/trendChart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1059))
        })
    },
    [['pages/uni-stat/pay-order/funnel/components/trendChart-create-component']]
]);
