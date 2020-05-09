/*
 * @Description: 按照功能模块划分接口
 * @Autor: chenyt
 * @Date: 2020-03-22 12:03:43
 * @LastEditors: chenyt
 * @LastEditTime: 2020-05-09 15:25:51
 */

import commonApi from "../axios"

/**
 * 用户反馈
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const prbAdd = function (params = {}, options = {}) {
    return commonApi.post("/base/api/prb/add", {
        data: params
    }, options).then(result => {
        return result.data
    })
}