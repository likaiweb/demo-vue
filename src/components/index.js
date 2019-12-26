/*
 * @Date: 2019-12-26 15:09:08
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-26 15:10:14
 * @Description: 组件
 * @FilePath: /vue-test/src/components/index.js
 */
import vue from 'vue'
const files = require.context('.', false, /\.vue$/)
files.keys().forEach(module => {
    const reg = /^\.\/(.*)\.vue/ig;
    vue.component(module.replace(reg, '$1'), files(module).default)
})