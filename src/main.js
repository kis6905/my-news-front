import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueMaterial)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
