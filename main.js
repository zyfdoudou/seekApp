import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
/* 
// 在main.js里初始化全局的GoEasy对象
Vue.prototype.$goEasy = new GoEasy({
	host: "hangzhou.goeasy.io", //应用所在的区域地址，杭州：hangzhou.goeasy.io，新加坡：singapore.goeasy.io
	appkey: "BC-5afe5b1f93af422e95bf46d4a7bdc069", //替换为您的应用appkey
	onConnected: function() {
		console.log('连接成功！')
	},
	onDisconnected: function() {
		console.log('连接断开！')
	},
	onConnectFailed: function(error) {
		console.log('连接失败或错误！')
	}
}); */
