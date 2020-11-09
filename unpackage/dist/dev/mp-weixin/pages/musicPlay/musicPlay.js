(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/musicPlay/musicPlay"],{

/***/ 103:
/*!****************************************************************************!*\
  !*** D:/uni-app/music163/main.js?{"page":"pages%2FmusicPlay%2FmusicPlay"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _musicPlay = _interopRequireDefault(__webpack_require__(/*! ./pages/musicPlay/musicPlay.vue */ 104));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_musicPlay.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 104:
/*!*********************************************************!*\
  !*** D:/uni-app/music163/pages/musicPlay/musicPlay.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _musicPlay_vue_vue_type_template_id_a81d220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./musicPlay.vue?vue&type=template&id=a81d220c&scoped=true& */ 105);
/* harmony import */ var _musicPlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./musicPlay.vue?vue&type=script&lang=js& */ 107);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _musicPlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _musicPlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _musicPlay_vue_vue_type_style_index_0_id_a81d220c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./musicPlay.vue?vue&type=style&index=0&id=a81d220c&lang=scss&scoped=true& */ 110);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _musicPlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _musicPlay_vue_vue_type_template_id_a81d220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _musicPlay_vue_vue_type_template_id_a81d220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a81d220c",
  null,
  false,
  _musicPlay_vue_vue_type_template_id_a81d220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/musicPlay/musicPlay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 105:
/*!****************************************************************************************************!*\
  !*** D:/uni-app/music163/pages/musicPlay/musicPlay.vue?vue&type=template&id=a81d220c&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_template_id_a81d220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./musicPlay.vue?vue&type=template&id=a81d220c&scoped=true& */ 106);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_template_id_a81d220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_template_id_a81d220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_template_id_a81d220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_template_id_a81d220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 106:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/music163/pages/musicPlay/musicPlay.vue?vue&type=template&id=a81d220c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var f0 =
    _vm.songs.length > 0 && _vm.duration !== 0
      ? _vm._f("palyTime")(_vm.current)
      : null
  var f1 =
    _vm.songs.length > 0 && _vm.duration !== 0
      ? _vm._f("palyTime")(_vm.duration)
      : null

  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      ;(_vm.seek = true), (_vm.current = $event.detail.value)
    }

    _vm.e1 = function($event) {
      return _vm.audio.seek($event.detail.value)
    }

    _vm.e2 = function($event) {
      _vm.audio.paused ? _vm.audio.play() : _vm.audio.pause()
    }
  }

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        f0: f0,
        f1: f1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 107:
/*!**********************************************************************************!*\
  !*** D:/uni-app/music163/pages/musicPlay/musicPlay.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./musicPlay.vue?vue&type=script&lang=js& */ 108);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 108:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/music163/pages/musicPlay/musicPlay.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 44));





























































var _func = _interopRequireDefault(__webpack_require__(/*! ../../utils/func.js */ 109));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  data: function data() {
    return {
      id: null, //歌曲ID
      listId: null, //歌单ID
      song: {},
      songs: [],
      tracks: [], //歌单详情
      playlist: [], //歌单下歌曲ID集
      srcs: [], //过滤后的歌单详情
      url: '',
      line: 0,
      scrollTop: 0,
      c_pos: 2, //C位
      lyricObj: [], //歌词 
      nolyric: false, //无歌词
      color: '#169af3',
      audio: null, //音频实例
      playOrder: false, //是否顺序播放
      duration: 0, //总时长
      current: 0, //当前时长
      paused: true, //是否处于暂停状态
      loading: false, //是否处于读取状态
      seek: false //是否处于拖动状态
    };
  },
  filters: {
    /* 格式化时间 将s转为00:00 */
    palyTime: function palyTime(value) {
      /* 向下取整，取分钟 */
      var minute = Math.floor(value / 60);
      /* 取余数，取秒数 */
      var second = parseInt(value % 60);
      /* 将变量转字符串 */
      minute += '';
      second += '';
      /* 如果只有一位数，前面增加一个0 */
      minute = minute.length == 1 ? '0' + minute : minute;
      second = second.length == 1 ? '0' + second : second;
      return minute + ':' + second;
    } },





















  onLoad: function onLoad(options) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              _this2.id = options.id;
              if (options.listId) {
                _this2.listId = options.listId;
              }
              _this2.getSongDetail();
              _this2.initData();case 4:case "end":return _context.stop();}}}, _callee);}))();
  },
  onUnload: function onUnload() {
    this.audio.destroy();
  },
  methods: {
    initData: function initData() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!
                _this3.listId) {_context2.next = 5;break;}_context2.next = 3;return (

                  _this3.getPlayList());case 3:_context2.next = 7;break;case 5:_context2.next = 7;return (


                  _this3.getSongList());case 7:_context2.next = 9;return (

                  _this3.getSongsUrl());case 9:_context2.next = 11;return (
                  _this3.getLyric());case 11:
                _this3.playSong();case 12:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    /* 获取歌单详情，用于切换歌 */
    getPlayList: function getPlayList() {var _this4 = this;
      return new Promise(function (resolve, reject) {
        _this4.$API({
          url: "/playlist/detail?id=".concat(_this4.listId) }).
        then(function (res) {
          _this4.tracks = res.data.playlist.tracks;
          _this4.tracks.map(function (item) {
            _this4.playlist.push(item.id);
          });
          resolve();
        });
      });
    },
    /* 获取最新歌曲详情，用于切歌 */
    getSongList: function getSongList() {var _this5 = this;
      return new Promise(function (resolve, reject) {
        _this5.$API({
          url: '/personalized/newsong' }).
        then(function (res) {
          _this5.tracks = res.data.result;
          _this5.tracks.map(function (item) {
            _this5.playlist.push(item.id);
          });
          resolve();
        });
      });
    },
    /* 获取歌曲列表url */
    getSongsUrl: function getSongsUrl() {var _this6 = this;
      return new Promise(function (resolve, reject) {
        _this6.$API({
          url: "/song/url?id=".concat(_this6.playlist.toString()) }).
        then(function (res) {
          var data = res.data.data;
          /* 过滤无权限歌曲,并排序 */
          _this6.tracks.map(function (track, index) {
            data.map(function (item) {
              if (track.id == item.id && item.url) {
                _this6.srcs.push({
                  id: item.id,
                  url: item.url,
                  index: index });

              }
            });
          });
          resolve();
        });
      });
    },
    /* 获取歌曲详情 */
    getSongDetail: function getSongDetail() {var _this7 = this;
      this.$API({
        url: "/song/detail?ids=".concat(this.id) }).
      then(function (res) {
        _this7.songs = res.data.songs;
        _this7.song = _this7.songs[0];
        var _this = _this7;
        uni.setNavigationBarTitle({
          title: _this.song.name });

      });
    },
    /* 获取歌词 */
    getLyric: function getLyric() {var _this8 = this;
      return new Promise(function (resolve, reject) {
        _this8.$API({
          url: "/lyric?id=".concat(_this8.id) }).
        then(function (res) {
          if (res.data.lrc) {
            _this8.nolyric = false;
            var lyrics = res.data.lrc.lyric.split("\n");
            // [00:00.000] 作曲 : 林俊杰
            // 1.定义正则表达式提取[00:00.000]
            var reg1 = /\[\d*:\d*\.\d*\]/g;
            // 2.定义正则表达式提取 [00
            var reg2 = /\[\d*/i;
            // 3.定义正则表达式提取 :00
            var reg3 = /\:\d*/i;
            // 定义正则表达式提取 .000
            var reg4 = /\.\d*/i;
            // 4.定义对象保存处理好的歌词
            var lyricObj = [];
            lyrics.forEach(function (lyric) {
              // 1.提取时间
              var timeStr = lyric.match(reg1);
              if (!timeStr) {
                return;
              }
              timeStr = timeStr[0];
              // 2.提取分钟
              var minStr = timeStr.match(reg2)[0].substr(1);
              // 3.提取秒钟
              var secondStr = timeStr.match(reg3)[0].substr(1);
              // 提取毫秒
              var millisecond = timeStr.match(reg4)[0].substr(1);
              // 4.合并时间, 将分钟和秒钟都合并为秒钟
              var time = parseInt(minStr) * 60 + parseInt(secondStr) + '.' + millisecond;
              // 5.处理歌词
              var text = lyric.replace(reg1, "").trim();
              // 6.保存数据
              lyricObj.push({
                time: time,
                text: text });

            });
            _this8.lyricObj = lyricObj;
            /*  */
          } else {
            _this8.nolyric = true;
          }
          resolve();
        });
      });
    },
    /* 播放 */
    playSong: function playSong() {var _this9 = this;
      /* 根据id查找对应音乐url */
      this.srcs.map(function (item) {
        if (item.id == _this9.id) {
          _this9.url = item.url;
        }
      });
      this.audio = uni.createInnerAudioContext();
      this.audio.src = this.url;
      this.audio.autoplay = true;
      /* 每次构建实例时，将行数初始化 */
      this.line = 0;
      this.scrollTop = 0;
      /* 音频进入可播放状态 */
      this.audio.onCanplay(function () {
        _this9.duration = _this9.audio.duration;
      });
      //音频播放事件
      this.audio.onPlay(function () {
        _this9.paused = false;
        // this.loading = false
      });
      //音频暂停事件
      this.audio.onPause(function () {
        _this9.paused = true;
      });
      //音频进度更新事件
      this.audio.onTimeUpdate(function () {
        if (!_this9.seek) {
          _this9.current = _this9.audio.currentTime;
        }
        if (!_this9.duration) {
          _this9.duration = _this9.audio.duration;
        }
        if (_this9.duration.toFixed(0) === _this9.current.toFixed(0)) {
          _this9.line = 0;
          _this9.scrollTop = 0;
        }
      });
      //音频结束事件
      this.audio.onEnded(function () {
        if (!_this9.playOrder) {
          _this9.next(1);
        } else {
          _this9.paused = true;
          _this9.current = 0;
        }
      });
      //音频完成更改进度事件
      this.audio.onSeeked(function () {
        _this9.seek = false;
      });
    },
    next: function next(val) {
      var nex = val;
      for (var i = 0, len = this.srcs.length; i < len; i++) {
        /* 匹配当前播放列表Id */
        if (this.srcs[i].id == this.id) {
          if (nex == 1) {
            /* 下一首 */
            if (i == len - 1) {
              /* 歌曲为最后一首，循环听第一首歌 */
              this.id = this.srcs[0].id;
            } else {
              this.id = this.srcs[i + nex].id;
            }
          } else {
            /* 上一首 */
            if (i == 0) {
              /* 歌曲为d第一首，循环听最后一首歌 */
              this.id = this.srcs[len - 1].id;
            } else {
              this.id = this.srcs[i + nex].id;
            }
          }
          break;
        }
      }
      this.current = 0;
      this.getSongDetail();
      this.getLyric();
      this.audio.destroy();
      this.playSong();
    },
    continuePlay: function continuePlay() {
      this.playOrder = !this.playOrder;
      if (this.playOrder) {
        uni.showToast({
          icon: 'none',
          title: '单曲循环',
          position: 'bottom' });

        /* 循环播放 */
        this.audio.loop = true;
      } else {
        uni.showToast({
          icon: 'none',
          title: '列表循环',
          position: 'bottom' });

        this.audio.loop = false;
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 110:
/*!*******************************************************************************************************************!*\
  !*** D:/uni-app/music163/pages/musicPlay/musicPlay.vue?vue&type=style&index=0&id=a81d220c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_style_index_0_id_a81d220c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./musicPlay.vue?vue&type=style&index=0&id=a81d220c&lang=scss&scoped=true& */ 111);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_style_index_0_id_a81d220c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_style_index_0_id_a81d220c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_style_index_0_id_a81d220c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_style_index_0_id_a81d220c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_musicPlay_vue_vue_type_style_index_0_id_a81d220c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 111:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/music163/pages/musicPlay/musicPlay.vue?vue&type=style&index=0&id=a81d220c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[103,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/musicPlay/musicPlay.js.map