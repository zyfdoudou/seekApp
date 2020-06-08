import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		text: 'demo',
	},
	mutations: {
		SetText(state, v) {
			state.text = v
		}
	},
	actions: {
		setText: function({
			commit
		}, v) {
			commit('SetText', v)
		}
	}
})

export default store