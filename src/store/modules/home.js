/*
 * @Date: 2019-12-26 11:35:43
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-26 11:44:09
 * @Description: 主页vuex
 * @FilePath: /vue-test/src/store/modules/home.js
 */
export default {
    state:{
        num:1
    },
    mutations:{
        setNum(state,val){
            state.num=val;
        }
    }
}