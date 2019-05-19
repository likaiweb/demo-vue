import axios from 'axios'
import qs from 'qs'
import router from '../route/index'
import {Loading} from 'element-ui'

axios.defaults.baseURL = ''
axios.defaults.timeout=10000


// 请求拦截
axios.interceptors.request.use(
    reqConfig => {
      // 每次发送请求之前判断 localStorage 中是否存在token
      // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
      // const token = localStorage.getItem('token')
      // const token = 'dbrkon78l4mja4eq2vs8hhl8staio4nj'  // 测试使用
      // const token = ''  // 测试使用  
      // token && (reqConfig.headers['X-WX-Token'] = token)
      reqConfig.params && (reqConfig.params.qrId = 46);
      return reqConfig;
    },
    reqError => {
      return Promise.reject(reqError)
    }
  )
  
  // 响应拦截
  axios.interceptors.response.use(
    resData => {
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (resData.status === 200) {
        const resultNum = resData.data.errno || resData.data.code;
        const resultMsg = resData.data.errmsg || resData.data.msg;
        switch (resultNum) {
          case 0:
            // store.commit('changeLoginStatus', true)
            return Promise.resolve(resData.data);
  
          case 401:
            // store.commit('changeLoginStatus', false);
            router.replace({
              name: 'login',
              query: {
                // 记住当前页面, 登录后回跳
                backName: router.currentRoute.name
              }
            });
            break;
  
          case 500:
            break;
  
          default:
              
          // reject(res);
        }
      } else {
        return Promise.reject(resData.data);
      }
    },
    resError => {
      console.error(resError);
      return Promise.reject(resError);
    }
  )
  
  /**
   * GET 请求
   * @param { String } url    请求地址
   * @param { Object } params   参数对象
   * @param { Object } config   配置对象
   * @param { Function } errCallback   回调函数
   */
  export const $get = (url = '', params = {}, config = {}, errCallback = null) => {
    return axios.get(url, { params }, config).then(res => {
      return res;
    }).catch(err => {
      errCallback && errCallback();
      return err;
    })
  }
  
  /**
   * POST 请求
   * @param { String } url    请求地址
   * @param { Object } params   参数对象
   * @param { Object } config   配置对象
   * @param { Function } errCallback   回调函数
   */
  export const $post = (url = '', params = {}, config = {}, errCallback = null) => {
  
    const _config = Object.assign({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }, config);
  
    let resultParams;
    if (_config.headers['Content-Type'].toLowerCase().indexOf('json') > -1) {
      resultParams = params;
    } else {
      if (_config.FormData) {
        resultParams = params;
      } else {
        resultParams = qs.stringify(params);
      }
    }
  
    return axios.post(url, resultParams, _config).then(res => {
      return res;
    }).catch(err => {
      errCallback && errCallback();
      return err;
    })
  }
  