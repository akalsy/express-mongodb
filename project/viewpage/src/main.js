import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false
import ViewUI from 'view-design';

// import style
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.prototype.$http = axios
axios.defaults.baseURL = '/api' //关键代码
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')