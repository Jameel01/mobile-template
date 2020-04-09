/*
 * @Description: 接口按模块引入，控制好每个模块的接口个数
 * @Autor: chenyt
 * @Date: 2020-03-22 12:02:58
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-09 20:08:27
 */

import * as base from "./modules/base"
import * as common from "./modules/common"
import * as user from "./modules/user"
export default {
  base,
  common,
  user
}
