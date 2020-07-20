<!--
 * @Date: 2019-12-25 16:06:20
 * @Author: 李凯
 * @LastEditors: 李凯
 * @LastEditTime: 2020-07-20 10:43:58
 * @Description: 首页
 * @FilePath: /vue-demo/src/App.vue
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 60px;
}
</style>
