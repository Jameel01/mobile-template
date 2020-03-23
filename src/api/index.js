/**接口按模块引入，控制好每个模块的接口个数
 * @Author: chenyt 
 * @Date: 2020-03-22 12:02:58 
 * @Last Modified by: chenyt
 * @Last Modified time: 2020-03-22 12:03:20
 */
import * as base from './modules/base'
import * as common from './modules/common'
import * as user from './modules/user'

export default {
  base,
  common,
  user
}
