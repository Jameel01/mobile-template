/*
 * @Description: 
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-11-12 10:22:14
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-11-12 10:23:21
 */
export default [{
  path: "/base-module/dict-demo",
  name: "dict-demo",
  meta: {
    title: "字典案例"
  },
  component: () => import("@/views/base-module/dict-demo")
}]