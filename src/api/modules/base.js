/*放置基础接口
 * @Author: chenyt 
 * @Date: 2020-03-22 12:04:29 
 * @Last Modified by: chenyt
 * @Last Modified time: 2020-03-22 12:05:12
 */
import commonApi from '../common-axios'
/**
 * 获取用户信息
 *
 * @param {*} params
 * @param {*} options
 * @returns
 */
export const getUserInfo = function (params = {}, options = {}) {
  return commonApi.post('/usc/api/userAccount/getCurrentUser', {
    data: params
  }, options).then(result => {
    return result.data
  })
}
