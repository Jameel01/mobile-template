/*
 * @Description: 按照功能模块划分接口
 * @Autor: chenyt
 * @Date: 2020-03-22 12:03:43
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-09 20:08:19
 */

import commonApi from "../common-axios"

/**
 * 用户反馈
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const prbAdd = function(params = {}, options = {}) {
    return commonApi.post("/base/api/prb/add", {
        data: params
    }, options).then(result => {
        return result.data
    })
}
