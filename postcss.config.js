/*
 * @Date: 2019-12-26 15:30:46
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-26 15:31:55
 * @Description: css转rem
 * @FilePath: /vue-test/postcss.config.js
 */
module.exports = {
    plugins: {
        'autoprefixer': {
            browsers: ['Android >= 4.0', 'iOS >= 7']
        },
        'postcss-pxtorem': {
            rootValue: 37.5, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
            propList: ['*']
        }
    }
}