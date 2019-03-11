import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		test:'test'
	},
	mutations:{
		changeStore(state,val){
			state.test = val
		}
	}
})
