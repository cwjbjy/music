(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-radioPlay-radioPlay"],{1565:function(t,n,e){"use strict";var r=e("fef2"),i=e.n(r);i.a},"1da1":function(t,n,e){"use strict";function r(t,n,e,r,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void e(c)}s.done?n(u):Promise.resolve(u).then(r,i)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var a=t.apply(n,e);function s(t){r(a,i,o,s,u,"next",t)}function u(t){r(a,i,o,s,u,"throw",t)}s(void 0)}))}}e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=i},"4d05":function(t,n,e){"use strict";var r=e("4ea4");e("d81d"),e("d3b7"),e("e25e"),e("ac1f"),e("1276"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var i=r(e("1da1")),o={data:function(){return{id:null,radioId:null,program:{},djprogram:[],tracks:[],playlist:"",srcs:[],url:"",color:"#169af3",audio:null,playOrder:!1,duration:0,current:0,paused:!0,loading:!1,seek:!1}},filters:{palyTime:function(t){var n=Math.floor(t/60),e=parseInt(t%60);return n+="",e+="",n=1==n.length?"0"+n:n,e=1==e.length?"0"+e:e,n+":"+e}},onLoad:function(t){var n=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.id=t.id,n.playlist=t.playlist,n.tracks=n.playlist.split(","),n.initData(),n.getRecommend();case 5:case"end":return e.stop()}}),e)})))()},onUnload:function(){this.audio.destroy()},methods:{initData:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getSongsUrl();case 2:return n.next=4,t.getRadioDetail();case 4:t.playSong();case 5:case"end":return n.stop()}}),n)})))()},getRecommend:function(){var t=this;this.$API({url:"/personalized/djprogram"}).then((function(n){t.djprogram=n.data.result}))},getSongsUrl:function(){var t=this;return new Promise((function(n,e){t.$API({url:"/song/url?id=".concat(t.playlist)}).then((function(e){var r=e.data.data;t.tracks.map((function(n,e){r.map((function(r){n==r.id&&r.url&&t.srcs.push({id:r.id,url:r.url,index:e})}))})),n()}))}))},getRadioDetail:function(){var t=this;return new Promise((function(n,e){t.$API({url:"/dj/program/detail?id=".concat(t.id)}).then((function(e){t.program=e.data.program,t.radioId=t.program.mainSong.id;var r=t;uni.setNavigationBarTitle({title:r.program.name}),n()}))}))},playSong:function(){var t=this;this.srcs.map((function(n){n.id==t.radioId&&(t.url=n.url)})),this.audio=uni.createInnerAudioContext(),this.audio.src=this.url,this.audio.autoplay=!0,this.audio.onCanplay((function(){t.duration=t.audio.duration})),this.audio.onPlay((function(){t.paused=!1})),this.audio.onPause((function(){t.paused=!0})),this.audio.onTimeUpdate((function(){t.seek||(t.current=t.audio.currentTime),t.duration||(t.duration=t.audio.duration)})),this.audio.onEnded((function(){t.playOrder?(t.paused=!0,t.current=0):t.next(1)})),this.audio.onSeeked((function(){t.seek=!1}))},next:function(t){for(var n=this,e=t,r=0,i=this.srcs.length;r<i;r++)if(this.srcs[r].id==this.radioId){this.radioId=1==e?r==i-1?this.srcs[0].id:this.srcs[r+e].id:0==r?this.srcs[i-1].id:this.srcs[r+e].id,this.djprogram.map((function(t){t.program.mainSong.id==n.radioId&&(n.id=t.id)}));break}this.current=0,this.getRadioDetail(),this.audio.destroy(),this.playSong()},continuePlay:function(){this.playOrder=!this.playOrder,this.playOrder?(uni.showToast({icon:"none",title:"单曲循环",position:"bottom"}),this.audio.loop=!0):(uni.showToast({icon:"none",title:"列表循环",position:"bottom"}),this.audio.loop=!1)}}};n.default=o},"760a":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return 0!==t.duration?e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"bg",style:{"background-image":"url("+t.program.blurCoverUrl+")"}}),e("v-uni-view",{staticClass:"mask"}),e("v-uni-view",{staticClass:"wrap"},[e("v-uni-swiper",{staticClass:"swiper"},[e("v-uni-swiper-item",[e("v-uni-view",{staticClass:"song"},[e("v-uni-view",{class:["song_turn",!0!==t.paused?"active":""]},[e("v-uni-view",{staticClass:"song_pic"},[e("v-uni-image",{attrs:{src:t.program.coverUrl}})],1)],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"progress"},[e("v-uni-view",{staticClass:"timing"},[t._v(t._s(t._f("palyTime")(t.current)))]),e("v-uni-slider",{staticClass:"audio-slider",attrs:{activeColor:t.color,"block-size":"16",value:t.current,max:t.duration},on:{changing:function(n){arguments[0]=n=t.$handleEvent(n),t.seek=!0,t.current=n.detail.value},change:function(n){arguments[0]=n=t.$handleEvent(n),t.audio.seek(n.detail.value)}}}),e("v-uni-view",{staticClass:"time"},[t._v(t._s(t._f("palyTime")(t.duration)))])],1),e("v-uni-view",{staticClass:"control"},[e("v-uni-view",{staticClass:"select"},[t.playOrder?t._e():e("v-uni-view",{staticClass:"iconfont icon-xunhuan barIcon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.continuePlay.apply(void 0,arguments)}}}),t.playOrder?e("v-uni-view",{staticClass:"iconfont icon-danquxunhuan barIcon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.continuePlay.apply(void 0,arguments)}}}):t._e()],1),e("v-uni-view",{staticClass:"iconfont icon-48shangyishou barIcon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.next(-1)}}}),e("v-uni-view",{staticClass:"play",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.audio.paused?t.audio.play():t.audio.pause()}}},[t.paused?e("v-uni-view",{staticClass:"iconfont icon-plus-start playIcon"}):t._e(),t.paused?t._e():e("v-uni-view",{staticClass:"iconfont icon-plus-pause playIcon"})],1),e("v-uni-view",{staticClass:"iconfont icon-048caozuo_xiayishou barIcon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.next(1)}}}),e("v-uni-view",{staticClass:"iconfont icon-shoucang barIcon"})],1)],1)],1):t._e()},o=[]},9656:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 主题色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-8774f736]{position:absolute;width:100vw;top:0;bottom:0}.mask[data-v-8774f736]{position:absolute;left:0;top:0;right:0;bottom:0;z-index:10;opacity:.25;background:#000}.bg[data-v-8774f736]{position:absolute;left:0;top:0;right:0;bottom:0;background-repeat:no-repeat;background-position:50%;-webkit-filter:blur(%?80?%);filter:blur(%?80?%);z-index:1}.wrap[data-v-8774f736]{position:absolute;top:0;z-index:100;width:100%;bottom:%?200?%}.wrap .swiper[data-v-8774f736]{height:100%}.wrap .song[data-v-8774f736]{width:%?600?%;height:%?600?%;margin:0 auto;margin-top:10%}.wrap .song .song_turn[data-v-8774f736]{width:100%;height:100%;background-image:url(https://wen.cwjbjy.online/images/music/player-it666-disc.png);background-repeat:no-repeat;background-size:contain;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-animation:mymove-data-v-8774f736 10s linear infinite;animation:mymove-data-v-8774f736 10s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused}.wrap .song .song_turn .song_pic[data-v-8774f736]{width:%?372?%;height:%?372?%}.wrap .song .song_turn .song_pic uni-image[data-v-8774f736]{width:100%;height:100%;-webkit-border-radius:50%;border-radius:50%}.wrap .song .active[data-v-8774f736]{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes mymove-data-v-8774f736{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes mymove-data-v-8774f736{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.bottom[data-v-8774f736]{height:%?200?%;position:absolute;bottom:0;width:100%;z-index:100}.bottom .control[data-v-8774f736]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?80?%}.bottom .barIcon[data-v-8774f736]{font-size:%?60?%}.bottom .playIcon[data-v-8774f736]{font-size:%?80?%}.progress[data-v-8774f736]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?24?%;color:#fff;padding:0 %?40?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.progress .timing[data-v-8774f736]{width:%?80?%}.progress .audio-slider[data-v-8774f736]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.progress .time[data-v-8774f736]{text-align:right;color:#ccc;width:%?80?%}.scroll-Y[data-v-8774f736]{height:100%;text-align:center;display:block;font-size:16px;line-height:4;position:relative;color:#fff}',""]),t.exports=n},"96cf":function(t,n){!function(n){"use strict";var e,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"===typeof t,l=n.regeneratorRuntime;if(l)c&&(t.exports=l);else{l=n.regeneratorRuntime=c?t.exports:{},l.wrap=b;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",v={},g={};g[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(T([])));y&&y!==r&&i.call(y,a)&&(g=y);var w=E.prototype=k.prototype=Object.create(g);_.prototype=w.constructor=E,E.constructor=_,E[u]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===_||"GeneratorFunction"===(n.displayName||n.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},L(j.prototype),j.prototype[s]=function(){return this},l.AsyncIterator=j,l.async=function(t,n,e,r){var i=new j(b(t,n,e,r));return l.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){while(n.length){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},l.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;O(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}}}function b(t,n,e,r){var i=n&&n.prototype instanceof k?n:k,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=C(t,e,a),o}function x(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}function k(){}function _(){}function E(){}function L(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function j(t){function n(e,r,o,a){var s=x(t[e],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):Promise.resolve(c).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,a)}))}a(s.arg)}var e;function r(t,r){function i(){return new Promise((function(e,i){n(t,r,e,i)}))}return e=e?e.then(i,i):i()}this._invoke=r}function C(t,n,e){var r=d;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return z()}e.method=i,e.arg=o;while(1){var a=e.delegate;if(a){var s=I(a,e);if(s){if(s===v)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===d)throw r=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=p;var u=x(t,n,e);if("normal"===u.type){if(r=e.done?h:f,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=h,e.method="throw",e.arg=u.arg)}}}function I(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,I(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){while(++r<t.length)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:z}}function z(){return{value:e,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},c295:function(t,n,e){"use strict";e.r(n);var r=e("760a"),i=e("de7d");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("1565");var a,s=e("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"8774f736",null,!1,r["a"],a);n["default"]=u.exports},de7d:function(t,n,e){"use strict";e.r(n);var r=e("4d05"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},fef2:function(t,n,e){var r=e("9656");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("1bb90c12",r,!0,{sourceMap:!1,shadowMode:!1})}}]);