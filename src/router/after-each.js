/*
 * @Description: 路由跳转设置浏览器title
 * @Autor: guoruliang
 * @Date: 2020-04-01 09:57:00
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-11-04 09:18:53
 */
import setTitle from "@/utils/common"
function afterEachHandler(to, from) {
  let { title } = to.meta
  title || (title = to.name)
  if (title) {
    setTitle(title)
  }
}

export default afterEachHandler

