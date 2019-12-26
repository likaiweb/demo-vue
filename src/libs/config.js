/*
 * @Date: 2019-12-26 11:52:56
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-26 14:41:30
 * @Description: 开发环境参数配置
 * @FilePath: /vue-test/src/libs/config.js
 */
const config={
    // 生产环境
    'production': {
        baseURL: 'https://api.eqimei.cn/supplyChainStore'
    },
    // 开发环境
    'development': {
        baseURL: 'https://beta.api.nanguache.com/supplyChainStore'
    },
    // 开发环境
    'dev': {
        baseURL: 'https://beta.api.1.com/supplyChainStore'
    },
}
export default config[process.env.NODE_ENV]