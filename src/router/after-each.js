/*
 * @Description: 路由跳转设置浏览器title
 * @Autor: guoruliang
 * @Date: 2020-04-01 09:57:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-12 10:06:21
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

