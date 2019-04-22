// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from './store/index.js'
import global_ from './assets/unit/api'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.GLOBAL = global_

axios.defaults.timeout = 5000 // 在超时前，所有请求都会等待 5 秒
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = 'http://*******'// 配置接口地址
axios.defaults.baseURL = 'http://localhost:8088' // 配置接口地址

axios.defaults.withCredentials = false
Vue.prototype.$http = axios

console.log(store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
