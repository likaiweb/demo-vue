/*
 * @Date: 2019-12-26 11:15:23
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-26 15:35:33
 * @Description: 混入
 * @FilePath: /vue-test/src/libs/mixin.js
 */
import vue from 'vue'
vue.mixin({
    methods: {
        /**
         * @description: 跳转路由
         * @param {type} 
         * @return: 
         */
        go(name, query, params) {
            this.$router.push({
                name,
                query,
                params
            })
        },
        /**
         * @description: 价格格式处理
         * @param {number} number 价格金额
         * @param {number} n - 小数点数量
         * @return: 格式化之后的价格
         */
        formatNum(number, n) {
            if (n != 0) {
                n = (n > 0 && n <= 20) ? n : 2;
            }
            number = parseFloat((number + "").replace(/[^\d.-]/g, "")).toFixed(n) + "";
            var sub_val = number.split(".")[0].split("").reverse();
            var sub_xs = number.split(".")[1];
            var show_html = "";
            for (let i = 0; i < sub_val.length; i++) {
                show_html += sub_val[i] + ((i + 1) % 3 == 0 && (i + 1) != sub_val.length ? "," : "");
            }
            if (n == 0) {
                return show_html.split("").reverse().join("");
            } else {
                return show_html.split("").reverse().join("") + "." + sub_xs;
            }
        }

    },
})