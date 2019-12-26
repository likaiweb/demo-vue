/*
 * @Date: 2019-12-26 15:00:02
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-26 15:03:12
 * @Description: 主页请求
 * @FilePath: /vue-test/src/api/home.js
 */
import {$get,$post} from '@/libs/ajax'

// 获取列表
const $list=(data={})=>{
    return $get('',Object.assign({},data))
}
export {
    $list
}