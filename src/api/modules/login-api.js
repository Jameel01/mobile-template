/*
 * @Description: 按照功能模块划分接口
 * @Autor: chenyt
 * @Date: 2020-03-22 12:03:43
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-07-08 14:00:37
 */

import request from "../axios"

/**
 * 用户反馈
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const prbAdd = function(params = {}, options = {}) {
  return request.post("/base/api/prb/add", {
    data: params
  }, options)
}
