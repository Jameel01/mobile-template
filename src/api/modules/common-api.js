/*
 * @Description: 放置基础接口
 * @Autor: chenyt
 * @Date: 2020-03-22 12:04:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-12 13:27:39
 */

import request from "../axios"
// const basePath="/usc/api/userAccount"//本业务模块下的接口基础路径提取
/**
 * 获取字典表数据，本地环境走的是mock，开发时记得修改文件.env.proxy中的变量VUE_APP_MOCK_SERVER=false，走后端真实接口数据
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const getCodeListApi = function(params = {}, options = {}) {
  return request.post("/getCodeApi", {
    data: params
  }, options)
}