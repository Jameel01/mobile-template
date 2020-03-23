/*按照功能模块划分接口
 * @Author: chenyt 
 * @Date: 2020-03-22 12:03:43 
 * @Last Modified by:   chenyt 
 * @Last Modified time: 2020-03-22 12:03:43 
 */

import commonApi from '../common-axios'

/**
 * 用户反馈
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const prbAdd = function (params = {}, options = {}) {
  return commonApi.post('/base/api/prb/add', {
    data: params
  }, options).then(result => {
    return result.data
  })
}
