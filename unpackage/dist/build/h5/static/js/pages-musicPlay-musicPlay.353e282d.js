(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-musicPlay-musicPlay"],{"0402":function(t,n,e){"use strict";e.r(n);var i=e("9cfd"),r=e("6af7");for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);e("90ff");var a,s=e("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"8acd6752",null,!1,i["a"],a);n["default"]=c.exports},"062b":function(t,n,e){var i=e("9b0e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("2f9987ce",i,!0,{sourceMap:!1,shadowMode:!1})},"1da1":function(t,n,e){"use strict";function i(t,n,e,i,r,o,a){try{var s=t[o](a),c=s.value}catch(u){return void e(u)}s.done?n(c):Promise.resolve(c).then(i,r)}function r(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function s(t){i(a,r,o,s,c,"next",t)}function c(t){i(a,r,o,s,c,"throw",t)}s(void 0)}))}}e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},"32fd":function(t,n,e){"use strict";e("d81d"),e("e25e"),e("ac1f"),e("466d"),e("5319"),e("1276"),e("498a"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={disposeLyric:function(t){var n=t.split("\n"),e=/\[\d*:\d*\.\d*]/g,i=/\[\d*]/i,r=/\:\d*/i,o={};return n.map((function(t){var n=t.match(e);if(console.log("timeStr",n),n){n.map((function(t,e){0==e&&(n=t)}));var a=n.match(i);a.map((function(t,n){0==n&&(a=t.substr(1))}));var s=n.match(r);s.map((function(t,n){0==n&&(s=t.substr(1))}));var c=60*parseInt(a)+parseInt(s),u=t.replace(e,"").trim();o[c]=u}})),o}};n.default=i},5747:function(t,n,e){"use strict";var i=e("4ea4");e("4160"),e("d81d"),e("d3b7"),e("e25e"),e("ac1f"),e("466d"),e("5319"),e("1276"),e("498a"),e("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var r=i(e("1da1")),o=(i(e("32fd")),{data:function(){return{id:null,status:!1,loginStatus:!1,song:{},songs:[],tracks:[],playlist:"",srcs:[],url:"",line:0,lineHeight:64,scrollTop:0,c_pos:4,lyricObj:[],nolyric:!1,color:"#169af3",audio:null,playOrder:!1,duration:0,current:0,paused:!0,loading:!1,seek:!1}},filters:{palyTime:function(t){var n=Math.floor(t/60),e=parseInt(t%60);return n+="",e+="",n=1==n.length?"0"+n:n,e=1==e.length?"0"+e:e,n+":"+e}},watch:{current:function(t){var n=this;if(!this.nolyric)for(var e=0,i=this.lyricObj.length;e<i;e++)if(this.lyricObj[e+1]&&+this.lyricObj[e].time<=t&&t<+this.lyricObj[e+1].time){this.line=e,this.line>this.c_pos&&uni.createSelectorQuery().select("#line".concat(this.line-this.c_pos)).scrollOffset((function(t){n.scrollTop=t.dataset.top})).exec();break}}},onLoad:function(t){var n=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.id=t.id,n.playlist=t.playlist,n.tracks=n.playlist.split(","),n.getSongDetail(),n.initData(),uni.getStorage({key:"cookie",success:function(){n.loginStatus=!0}});case 6:case"end":return e.stop()}}),e)})))()},onUnload:function(){this.audio.destroy()},methods:{initData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getSongsUrl();case 2:return n.next=4,t.getLyric();case 4:t.playSong();case 5:case"end":return n.stop()}}),n)})))()},collect:function(){this.loginStatus?this.status=!this.status:uni.showToast({icon:"none",title:"请登录"})},getSongsUrl:function(){var t=this;return new Promise((function(n,e){t.$API({url:"/song/url?id=".concat(t.playlist)}).then((function(e){var i=e.data.data;t.tracks.map((function(n,e){i.map((function(i){n==i.id&&i.url&&t.srcs.push({id:i.id,url:i.url,index:e})}))})),n()}))}))},getSongDetail:function(){var t=this;this.$API({url:"/song/detail?ids=".concat(this.id)}).then((function(n){t.songs=n.data.songs,t.song=t.songs[0];var e=t;uni.setNavigationBarTitle({title:e.song.name})}))},getLyric:function(){var t=this;return new Promise((function(n,e){t.$API({url:"/lyric?id=".concat(t.id)}).then((function(e){if(e.data.lrc){t.nolyric=!1;var i=e.data.lrc.lyric.split("\n"),r=/\[\d*:\d*\.\d*\]/g,o=/\[\d*/i,a=/\:\d*/i,s=/\.\d*/i,c=[];i.forEach((function(t){var n=t.match(r);if(n){n=n[0];var e=n.match(o)[0].substr(1),i=n.match(a)[0].substr(1),u=n.match(s)[0].substr(1),l=60*parseInt(e)+parseInt(i)+"."+u,d=t.replace(r,"").trim();c.push({time:l,text:d})}})),t.lyricObj=c}else t.nolyric=!0;n()}))}))},playSong:function(){var t=this;this.srcs.map((function(n){n.id==t.id&&(t.url=n.url)})),this.audio=uni.createInnerAudioContext(),this.audio.src=this.url,this.audio.autoplay=!0,this.line=0,this.scrollTop=0,this.audio.onCanplay((function(){t.duration=t.audio.duration})),this.audio.onPlay((function(){t.paused=!1})),this.audio.onPause((function(){t.paused=!0})),this.audio.onTimeUpdate((function(){t.seek||(t.current=t.audio.currentTime),t.duration||(t.duration=t.audio.duration),t.duration.toFixed(0)===t.current.toFixed(0)&&(t.line=0,t.scrollTop=0)})),this.audio.onEnded((function(){t.playOrder?(t.paused=!0,t.current=0):t.next(1)})),this.audio.onSeeked((function(){t.seek=!1}))},next:function(t){for(var n=t,e=0,i=this.srcs.length;e<i;e++)if(this.srcs[e].id==this.id){this.id=1==n?e==i-1?this.srcs[0].id:this.srcs[e+n].id:0==e?this.srcs[i-1].id:this.srcs[e+n].id;break}this.current=0,this.getSongDetail(),this.getLyric(),this.audio.destroy(),this.playSong()},continuePlay:function(){this.playOrder=!this.playOrder,this.playOrder?(uni.showToast({icon:"none",title:"单曲循环",position:"bottom"}),this.audio.loop=!0):(uni.showToast({icon:"none",title:"列表循环",position:"bottom"}),this.audio.loop=!1)}}});n.default=o},"6af7":function(t,n,e){"use strict";e.r(n);var i=e("5747"),r=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=r.a},"90ff":function(t,n,e){"use strict";var i=e("062b"),r=e.n(i);r.a},"96cf":function(t,n){!function(n){"use strict";var e,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=n.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=n.regeneratorRuntime=u?t.exports:{},l.wrap=b;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(T([])));m&&m!==i&&r.call(m,a)&&(g=m);var w=E.prototype=k.prototype=Object.create(g);_.prototype=w.constructor=E,E.constructor=_,E[c]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===_||"GeneratorFunction"===(n.displayName||n.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},L(O.prototype),O.prototype[s]=function(){return this},l.AsyncIterator=O,l.async=function(t,n,e,i){var r=new O(b(t,n,e,i));return l.isGeneratorFunction(n)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},L(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){while(n.length){var i=n.pop();if(i in t)return e.value=i,e.done=!1,e}return e.done=!0,e}},l.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(i,r){return s.type="throw",s.arg=t,n.next=i,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var i=e.completion;if("throw"===i.type){var r=i.arg;I(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:T(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),v}}}function b(t,n,e,i){var r=n&&n.prototype instanceof k?n:k,o=Object.create(r.prototype),a=new S(i||[]);return o._invoke=C(t,e,a),o}function x(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(i){return{type:"throw",arg:i}}}function k(){}function _(){}function E(){}function L(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function O(t){function n(e,i,o,a){var s=x(t[e],t,i);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):Promise.resolve(u).then((function(t){c.value=t,o(c)}),(function(t){return n("throw",t,o,a)}))}a(s.arg)}var e;function i(t,i){function r(){return new Promise((function(e,r){n(t,i,e,r)}))}return e=e?e.then(r,r):r()}this._invoke=i}function C(t,n,e){var i=d;return function(r,o){if(i===h)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw o;return F()}e.method=r,e.arg=o;while(1){var a=e.delegate;if(a){var s=j(a,e);if(s){if(s===v)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(i===d)throw i=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);i=h;var c=x(t,n,e);if("normal"===c.type){if(i=e.done?p:f,c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(i=p,e.method="throw",e.arg=c.arg)}}}function j(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=x(i,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,v;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function I(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:F}}function F(){return{value:e,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9b0e":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 主题色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-8acd6752]{position:absolute;width:100vw;top:0;bottom:0}.bg[data-v-8acd6752]{position:absolute;left:0;top:0;right:0;bottom:0;background-repeat:no-repeat;background-position:50%;-webkit-filter:blur(%?80?%);filter:blur(%?80?%);z-index:1}.mask[data-v-8acd6752]{position:absolute;left:0;top:0;right:0;bottom:0;z-index:10;opacity:.25;background:#000}.wrap[data-v-8acd6752]{position:absolute;top:0;z-index:100;width:100%;bottom:%?200?%}.wrap .swiper[data-v-8acd6752]{height:100%}.wrap .song[data-v-8acd6752]{width:%?600?%;height:%?600?%;margin:0 auto;margin-top:10%}.wrap .song .song_turn[data-v-8acd6752]{width:100%;height:100%;background-image:url(https://wen.cwjbjy.online/images/music/player-it666-disc.png);background-repeat:no-repeat;background-size:contain;display:flex;justify-content:center;align-items:center;-webkit-animation:mymove-data-v-8acd6752 10s linear infinite;animation:mymove-data-v-8acd6752 10s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused}.wrap .song .song_turn .song_pic[data-v-8acd6752]{width:%?372?%;height:%?372?%}.wrap .song .song_turn .song_pic uni-image[data-v-8acd6752]{width:100%;height:100%;border-radius:50%}.wrap .song .active[data-v-8acd6752]{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes mymove-data-v-8acd6752{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes mymove-data-v-8acd6752{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.bottom[data-v-8acd6752]{height:%?200?%;position:absolute;bottom:0;width:100%;z-index:100}.bottom .control[data-v-8acd6752]{display:flex;justify-content:space-between;align-items:center;padding:0 %?80?%}.bottom .barIcon[data-v-8acd6752]{font-size:%?60?%}.bottom .playIcon[data-v-8acd6752]{font-size:%?80?%}.progress[data-v-8acd6752]{display:flex;font-size:%?24?%;color:#fff;padding:0 %?40?%;align-items:center}.progress .timing[data-v-8acd6752]{width:%?80?%}.progress .audio-slider[data-v-8acd6752]{flex:1}.progress .time[data-v-8acd6752]{text-align:right;color:#ccc;width:%?80?%}.scroll-Y[data-v-8acd6752]{height:100%;text-align:center;display:block;font-size:16px;line-height:4;position:relative;color:#fff}.activeClass[data-v-8acd6752]{color:red}',""]),t.exports=n},"9cfd":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.songs.length>0&&0!==t.duration?e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"bg",style:{"background-image":"url("+t.song.al.picUrl+")"}}),e("v-uni-view",{staticClass:"mask"}),e("v-uni-view",{staticClass:"wrap"},[e("v-uni-swiper",{staticClass:"swiper"},[e("v-uni-swiper-item",[e("v-uni-view",{staticClass:"song"},[e("v-uni-view",{class:["song_turn",!0!==t.paused?"active":""]},[e("v-uni-view",{staticClass:"song_pic"},[e("v-uni-image",{attrs:{src:t.song.al.picUrl}})],1)],1)],1)],1),e("v-uni-swiper-item",[t.nolyric?t._e():e("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"}},t._l(t.lyricObj,(function(n,i){return e("v-uni-view",{key:i,style:{color:i==t.line?"#a6e22d":"#fff"},attrs:{id:"line"+i,"data-top":t.lineHeight*i}},[t._v(t._s(n.text))])})),1),t.nolyric?e("v-uni-scroll-view",{staticStyle:{color:"#FFFFFF","text-align":"center"}},[t._v("无歌词，请欣赏音乐")]):t._e()],1)],1)],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"progress"},[e("v-uni-view",{staticClass:"timing"},[t._v(t._s(t._f("palyTime")(t.current)))]),e("v-uni-slider",{staticClass:"audio-slider",attrs:{activeColor:t.color,"block-size":"16",value:t.current,max:t.duration},on:{changing:function(n){arguments[0]=n=t.$handleEvent(n),t.seek=!0,t.current=n.detail.value},change:function(n){arguments[0]=n=t.$handleEvent(n),t.audio.seek(n.detail.value)}}}),e("v-uni-view",{staticClass:"time"},[t._v(t._s(t._f("palyTime")(t.duration)))])],1),e("v-uni-view",{staticClass:"control"},[e("v-uni-view",{staticClass:"select"},[t.playOrder?t._e():e("v-uni-view",{staticClass:"iconfont icon-xunhuan barIcon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.continuePlay.apply(void 0,arguments)}}}),t.playOrder?e("v-uni-view",{staticClass:"iconfont icon-danquxunhuan barIcon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.continuePlay.apply(void 0,arguments)}}}):t._e()],1),e("v-uni-view",{staticClass:"iconfont icon-48shangyishou barIcon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.next(-1)}}}),e("v-uni-view",{staticClass:"play",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.audio.paused?t.audio.play():t.audio.pause()}}},[t.paused?e("v-uni-view",{staticClass:"iconfont icon-plus-start playIcon"}):t._e(),t.paused?t._e():e("v-uni-view",{staticClass:"iconfont icon-plus-pause playIcon"})],1),e("v-uni-view",{staticClass:"iconfont icon-048caozuo_xiayishou barIcon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.next(1)}}}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.status,expression:"!status"}],staticClass:"iconfont icon-shoucang barIcon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.collect.apply(void 0,arguments)}}}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"iconfont icon-lujing barIcon activeClass",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.collect.apply(void 0,arguments)}}})],1)],1)],1):t._e()},o=[]}}]);