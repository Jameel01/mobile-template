/*
 * @Description:  
 * @Autor: guoruliang
 * @Date: 2020-03-24 10:37:27
 * @LastEditors: chenyt
 * @LastEditTime: 2020-04-23 11:24:25
 */
/**
 * @description: 添加指定cookie，同域名可以使用
 * @param {type} 
 * @return: 
 * @author: chenyt
 */
function setCookie(key, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = key + '=' + value + ';expires=' + oDate + ';path=/';
}
/**
 * @description: 删除指定cookie
 * @param {type} 
 * @return: 
 * @author: chenyt
 */
function removeCookie(key) {
    setCookie(key, '', -1); //这里只需要把Cookie保质期退回一天便可以删除
}
/**
 * @description: 获取指定cookie值
 * @param {type} 
 * @return: 
 * @author: chenyt
 */
function getCookie(key) {
    var cookieArr = document.cookie.split('; ');
    for (var i = 0; i < cookieArr.length; i++) {
        var arr = cookieArr[i].split('=');
        if (arr[0] === key) {
            return arr[1];
        }
    }
    return false;
}

export default {
    setCookie,
    removeCookie,
    getCookie
}
