import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

var toastrConfigs = {
  position: 'top right',
  showDuration: 2000
}

// axios.defaults.withCredentials = true
axios.interceptors.response.use(undefined, function (error) {
  if (error){
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest._retry){
      originalRequest._retry = true;
      sessionStorage.clear();
      window.localStorage.clear();
      return router.push('/signin')
    }
  }
})
Vue.use(CxltToastr, toastrConfigs).use(PerfectScrollbar)
Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
