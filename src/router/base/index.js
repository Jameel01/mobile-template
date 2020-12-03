/*
 * @Description: 
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-11-12 10:22:14
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-11-20 14:06:24
 */
export default [{
  path: "/base-module/dict-demo",
  name: "dict-demo",
  meta: {
    title: "字典案例"
  },
  component: () => import("@/views/base-module/dict-demo")
}, {
  path: "/base-module/auto-form",
  name: "auto-form",
  meta: {
    title: "自动表单"
  },
  component: () => import("@/views/base-module/auto-form")
}]