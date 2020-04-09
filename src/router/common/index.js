/*
 * @Description: 公共路由
 * @Autor: guoruliang
 * @Date: 2020-04-01 09:57:00
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-09 20:09:04
 */
import ErrorPage from "@/views/Error.vue"
import NotFound from "@/views/404.vue"
export default [
  {
    path: "/",
    name: "目录",
    meta: {
      needLogin: false
    },
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/error",
    name: "error",
    component: ErrorPage
  },
  {
    path: "/exception",
    name: "exception",
    meta: {
      needLogin: false
    },
    component: () => import("@/views/example.vue")
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound
  }
]
