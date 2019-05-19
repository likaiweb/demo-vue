import vue from 'vue'
import vueRouter from 'vue-router'

vue.use(vueRouter)

const router=new vueRouter({
    mode:'history',
    routes:[{
        path:'/',
        component:()=>import('@/view/index/index.vue')
    },{
        path:'/login',
        component:()=>import('@/view/index/login.vue')
    }]
})

// 前置守卫
// router.beforeEach((to,from,next)=>{
    
// })

// 后置守卫
// router.afterEach(route=>{

// })

export default router;