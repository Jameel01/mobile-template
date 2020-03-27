/**接口按模块引入，控制好每个模块的接口个数
 * @Author: chenyt 
 * @Date: 2020-03-22 12:02:58 
 * @Last Modified by: chenyt
 * @Last Modified time: 2020-03-27 18:48:00
 */
import * as base from './modules/base'
import * as common from './modules/common'
import * as user from './modules/user'

// const apiContext = require.context('./modules', true, /\.js$/)
// apiContext.keys().forEach(api => {
//   const apiConfig = apiContext(api)
//   /**
//   * 兼容 import export 和 require module.export 两种规范
//   */
//   const ctrl = apiConfig.default || apiConfig
//   export ctrl
// })
export default {
  base,
  common,
  user
}
