/*
 * @Description: 放置基础接口
 * @Autor: chenyt
 * @Date: 2020-03-22 12:04:29
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-07-08 14:55:54
 */

import request from "../axios"
const basePath="/usc/api/userAccount"//本业务模块下的接口基础路径提取
/**
 * 获取用户信息
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const getUserInfo = function(params = {}, options = {}) {
  return request.post(`${basePath}/getCurrentUser`, {
    data: params
  }, options)
}
/**
 * 获取用户信息
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const getUserInfo2 = function(params = {}, options = {}) {
  return request.post(`${basePath}/getCurrentUser2`, {
    data: params
  }, options)
}

