/*
 * @Description: 基础页面路由
 * @Version: 0.1
 * @Autor: Chenyt
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