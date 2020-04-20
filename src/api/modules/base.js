/*
 * @Description: 放置基础接口
 * @Autor: chenyt
 * @Date: 2020-03-22 12:04:29
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-09 20:08:10
 */

import commonApi from "../common-axios"
/**
 * 获取用户信息
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const getUserInfo = function(params = {}, options = {}) {
    return commonApi.post("/usc/api/userAccount/getCurrentUser", {
        data: params
    }, options).then(result => {
        return result.data
    })
}
/**
 * 获取用户信息
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const getUserInfo2 = function(params = {}, options = {}) {
    return commonApi.post("/usc/api/userAccount/getCurrentUser", {
        data: params
    }, options).then(result => {
        return result.data
    })
}