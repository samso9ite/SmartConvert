import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

// axios.defaults.baseURL ='http://127.0.0.1:8000/'
// const auth_token = localStorage.getItem('token')
// axios.defaults.headers.common['Authorization'] = auth_token;

var toastrConfigs = {
  position: 'top right',
  showDuration: 2000
}

Vue.use(CxltToastr, toastrConfigs)
Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
