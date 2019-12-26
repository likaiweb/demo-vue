/*
 * @Date: 2019-12-26 11:14:47
 * @Author: 李凯
 * @LastEditors  : 李凯
 * @LastEditTime : 2019-12-26 16:17:20
 * @Description: 工具
 * @FilePath: /vue-test/src/libs/utils.js
 */
// sessionStorage相关
const getSSItem=key=>{
    try {
        JSON.parse(window.sessionStorage.getItem(key))
    } catch (error) {
        return null;
    }
}
const setSSItem=(key,val)=>{
    window.sessionStorage.setItem(key, typeof val === 'object' ? JSON.stringify(val):val);
}
const clearSS=()=>{
    window.sessionStorage.clear();
}
const hasSSKey=key=>{
    return !!window.sessionStorage.key(key);
}
const removeSSItem=key=>{
    window.sessionStorage.removeItem(key);
}

export {
    getSSItem,
    setSSItem,
    clearSS,
    hasSSKey,
    removeSSItem,

}