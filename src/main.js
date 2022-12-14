import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

axios.defaults.baseURL = 'http://1.12.227.13:8080'
axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  el: '#app',
  render: (h) => h(App)
}).$mount('#app')
