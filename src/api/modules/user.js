
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
