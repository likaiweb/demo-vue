/*
 * @Date: 2019-12-25 16:06:20
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-26 15:43:32
 * @Description: 入口文件
 * @FilePath: /vue-test/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from "@/router/index";
import store from "@/store/index";
import '@/libs/mixin'  // 混入
import '@/libs/prototype'  // 原型方法
Vue.config.productionTip = false


import {} from '@/libs/ajax'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
