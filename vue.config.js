/*
 * @Date: 2019-12-25 16:25:46
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2020-01-14 15:38:42
 * @Description: 配置文件
 * @FilePath: /vue-test/vue.config.js
 */
const path = require('path');
const time = new Date().getTime();
module.exports = {
    outputDir: '/' + process.env.outputDir + '/',
    lintOnSave: false,  // 禁止报错
    productionSourceMap: false,  // 资源压缩
    pluginOptions:{
        'style-resources-loader':{
            preProcessor:'less',
            patterns:[
                path.resolve(__dirname,'./src/style/theme.less')
            ]
        }
    },
    configureWebpack: { // webpack 配置
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `js/[name].${time}.js`,
            chunkFilename: `js/[name].${time}.js`
        },
    },
}