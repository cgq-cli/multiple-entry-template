// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index.js'
import apis from '@/apis'

Vue.config.productionTip = false

Vue.prototype.$apis = apis

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
