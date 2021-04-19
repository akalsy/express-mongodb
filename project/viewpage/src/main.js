import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false
import router from './router'
import atui from 'atui'
import 'atui/dist/greater-blue.css'


// import style

Vue.use(atui);

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)

})