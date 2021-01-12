/*
 * @Description: 公共路由，以下实例：请根据具体业务修改或无用删除
 * @Version: 0.1
 * @Autor: Chenyt
 */

export default [
  {
    path: "/",
    name: "目录",
    meta: {
      needLogin: false,
      keepAlive: true
    },
    component: () => import(/* webpackChunkName: "loginModule" */"@/views/home.vue")
  },
  
  {
    path: "*",
    name: "not-found",
    component: () => import(/* webpackChunkName: "notFoundModule" */"@/views/default.vue")
  }

]

