/*
 * @Date: 2019-12-26 15:42:53
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-26 16:19:58
 * @Description: 原型方法
 * @FilePath: /vue-test/src/libs/prototype.js
 */
/**
 * @description: 时间格式化
 * @param {string} fmt - 时间格式
 * @return: 时间字符串
 */
Date.prototype.format = function (fmt='yyyy-MM-dd hh:mm:ss') {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}