/*
 * @Date: 2019-12-25 16:19:54
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-25 16:36:19
 * @Description: 主页路由
 * @FilePath: /vue-test/src/router/home.js
 */
export default [{
        name: "home",
        path: '/',
        meta: {
            title: '主页'
        },
        component: () => import( /* webpackChunkName: "home" */ '@/views/home/index.vue')
    } ,{
    name:"login",
    path:'/login',
    meta:{
        title:'登录'
    },
    component: () => import( /* webpackChunkName: "home" */ '@/views/login/index.vue')
}]