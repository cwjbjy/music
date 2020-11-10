import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		phone:"", 
		ctcode:"",//手机号地区编码
		newPass:"", //新密码
	},
    mutations: {
		set_phone(state,data){
			state.phone = data
		},
		set_ctcode(state,data){
			state.ctcode = data
		},
		set_newPass(state,data){
			state.newPass = data
		}
	},
    actions: {}
})
export default store