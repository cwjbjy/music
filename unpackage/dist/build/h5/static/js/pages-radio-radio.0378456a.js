(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-radio-radio"],{"0071":function(n,t,i){var a=i("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 主题色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.radio[data-v-35646f24]{padding:%?20?%}.bannerContainer[data-v-35646f24]{width:100%}.bannerContainer .bannerContent[data-v-35646f24]{position:relative;height:inherit}.bannerContainer .bannerTitle[data-v-35646f24]{position:absolute;right:0;bottom:0;color:#fff;padding:0 %?20?%;border-radius:%?16?% 0}.bannerContainer .bannerImage[data-v-35646f24]{border-radius:%?16?%;width:100%;height:100%}.bannerContainer .blue[data-v-35646f24]{background:#3387ca}.bannerContainer .red[data-v-35646f24]{background-color:red}.title[data-v-35646f24]{margin:%?20?% 0;font-size:%?34?%;position:relative}.title uni-text[data-v-35646f24]{margin-left:%?18?%}.title[data-v-35646f24]::before{content:"";width:%?4?%;height:%?32?%;background-color:red;position:absolute;top:50%;margin-top:-8px}.gridBox[data-v-35646f24]{display:flex;flex-wrap:wrap;justify-content:space-between}.gridBox .gridItem[data-v-35646f24]{width:%?220?%;margin:0 %?4?% %?20?%;position:relative}.gridBox .pic[data-v-35646f24]{width:%?220?%;height:%?220?%;border-radius:%?8?%}.gridBox .picName[data-v-35646f24]{text-overflow:ellipsis;overflow:hidden;font-size:%?26?%;line-height:1.2;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}',""]),n.exports=t},"1c19":function(n,t,i){var a=i("0071");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var r=i("4f06").default;r("08b60416",a,!0,{sourceMap:!1,shadowMode:!1})},"47e4":function(n,t,i){"use strict";var a;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return e})),i.d(t,"a",(function(){return a}));var r=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"radio"},[i("v-uni-view",{staticClass:"bannerContainer"},[i("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:!0,autoplay:!0}},n._l(n.banner,(function(t,a){return i("v-uni-swiper-item",{key:a,on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.swipersClick(t.url)}}},[i("v-uni-view",{staticClass:"bannerContent"},[i("v-uni-image",{staticClass:"bannerImage",attrs:{src:t.pic}}),i("v-uni-view",{class:["blue"==t.titleColor?"blue":"red","bannerTitle"]},[n._v(n._s(t.typeTitle))])],1)],1)})),1)],1),i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[n._v("推荐电台")])],1),i("v-uni-view",{staticClass:"gridBox"},n._l(n.djprogram,(function(t){return i("v-uni-view",{key:t.id,staticClass:"gridItem",on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.handlerClick(t.id)}}},[i("v-uni-image",{staticClass:"pic",attrs:{src:t.picUrl}}),i("v-uni-view",{staticClass:"picName"},[n._v(n._s(t.name))])],1)})),1)],1)},e=[]},"6da7":function(n,t,i){"use strict";i.r(t);var a=i("47e4"),r=i("e231");for(var e in r)"default"!==e&&function(n){i.d(t,n,(function(){return r[n]}))}(e);i("f514");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"35646f24",null,!1,a["a"],o);t["default"]=c.exports},e231:function(n,t,i){"use strict";i.r(t);var a=i("fce6"),r=i.n(a);for(var e in a)"default"!==e&&function(n){i.d(t,n,(function(){return a[n]}))}(e);t["default"]=r.a},f514:function(n,t,i){"use strict";var a=i("1c19"),r=i.n(a);r.a},fce6:function(n,t,i){"use strict";i("99af"),i("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{banner:[],djprogram:[],playlist:[]}},onLoad:function(){this.initData()},methods:{initData:function(){this.getBanner(),this.getRecommend()},getBanner:function(){var n=this;this.$API({url:"/dj/banner"}).then((function(t){n.banner=t.data.data}))},getRecommend:function(){var n=this;this.$API({url:"/personalized/djprogram"}).then((function(t){n.djprogram=t.data.result,n.djprogram.map((function(t){n.playlist.push(t.program.mainSong.id)}))}))},swipersClick:function(n){this.url="https://music.163.com/",location.href=this.url},handlerClick:function(n){uni.navigateTo({url:"../../pages/radioPlay/radioPlay?id=".concat(n,"&playlist=").concat(this.playlist)})}}};t.default=a}}]);