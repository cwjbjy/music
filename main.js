import Vue from 'vue'
import App from './App'
import {
	myRequest
} from 'utils/api.js'
Vue.config.productionTip = false
Vue.prototype.$API = myRequest
App.mpType = 'app'
import uView from "uview-ui";
Vue.use(uView);

import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store

/* 数字转为万，亿，万亿为单位 */
Vue.filter('numberFormat', function(value) {
	var param = {};
	var k = 10000,
		sizes = ['', '万', '亿', '万亿'],
		i;
	if (value < k) {
		param.value = value
		param.unit = ''
	} else {
		i = Math.floor(Math.log(value) / Math.log(k));
		param.value = ((value / Math.pow(k, i))).toFixed(1);
		param.unit = sizes[i];
	}
	return param.value + param.unit;
});
/* 当作者为多人时，用/分开 */
Vue.filter('author', function(value) {
	if (value.length === 1) {
		return value[0].name
	} else if (value.length > 1) {
		let str = "";
		value.map((item, index) => {
			if (index === 0) {
				str = item.name
			} else {
				str += '/' + item.name
			}
		})
		return str
	} else {
		return ""
	}
})




const app = new Vue({
	...App
})
app.$mount()
