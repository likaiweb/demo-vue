/*
 * @Date: 2019-12-26 11:15:04
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-26 14:56:20
 * @Description: ajax封装
 * @FilePath: /vue-test/src/libs/ajax.js
 */
import axios from 'axios'
import envConfig from './config';
const Axios=new axios.create({
    timeout: 60000,
    responseType: "json",
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    }
})
const CancelToken = axios.CancelToken;
// 添加请求拦截器
Axios.interceptors.request.use(config=>{
    // 在发送请求之前做些什么
    let requestName = config.url
    // 取消重复请求
    if (requestName) {
        if (axios[requestName] && axios[requestName].cancel) {
            axios[requestName].cancel("取消重复请求=>" + requestName)
        }
        config.cancelToken = new CancelToken(c => {
            axios[requestName] = {}
            axios[requestName].cancel = c
        })
    }
    // 除图片外添加token，等头文件
    if (requestName.indexOf("/api/pub/upImgsBase64") == -1) {
        if (utils.localGetItem("token")) {
            config.headers["yms-token"] = utils.localGetItem("token");
        }
        config.headers["container"] = utils.localGetItem("container");
    }
    return config;
}, error=>{
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(response=> {
    // 对响应数据做点什么
    return response;
}, error =>{
    // 对响应错误做点什么
    if(error.response){
        // 未登录
        if(error.response.status===401){
            return router.replace({
                path: "/"
            });
        }
        // 未找到
        if(error.response.status===404){

        }
        // 错误
        if (!!error.response.data) {
            
        } else if (
            !error.response.data &&
            error.response.status !== 401 &&
            error.response.status !== 404
        ){
            
        }
    }
    return Promise.reject(error);
});
/**
 * @description: get请求
 * @param {string} url - 请求地址 
 * @param {object} params - 请求参数 
 * @return: promise
 */
const $get=(url,params={})=>{
    return new Promise((resolve,reject)=>{
        if(typeof params.showLoading==='undefined'){
            // 展示loading
        }
        Axios.get(envConfig.baseURL+ url, {
            params:params.params
        }).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err)
        })
    })
}
/**
 * @description: post请求
 * @param {string} url - 请求地址 
 * @param {object} params - 请求参数 
 * @return: promise
 */
const $post = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        if (typeof params.showLoading === 'undefined') {
            // 展示loading
        }
        Axios.post(envConfig.baseURL + url, params.params).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
}
export default {
    $get,
    $post
}