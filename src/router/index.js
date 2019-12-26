/*
 * @Date: 2019-12-25 16:11:49
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-26 14:59:40
 * @Description: 
 * @FilePath: /vue-test/src/router/index.js
 */
import vue from 'vue'
import Router from 'vue-router'
vue.use(Router);


let routerArr=[]
const files=require.context('./routes',false,/\.js$/);
files.keys().forEach(v=>{
    if(v=='./index.js') return;
    routerArr.push(...files(v).default)
})
const router = new Router({
    // mode:'history',
    routes: routerArr
})
// 前置钩子
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    next()
})
// 后置钩子
router.afterEach((to, from) => {
    // to and from are both route objects.
})


export default router