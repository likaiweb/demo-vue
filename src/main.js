import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import store from './store/index'
import './libs/echarts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
