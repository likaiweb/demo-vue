/*
 * @Date: 2019-12-25 16:25:46
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-26 15:30:32
 * @Description: 配置文件
 * @FilePath: /vue-test/vue.config.js
 */
const path=require('path');
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
    }
}