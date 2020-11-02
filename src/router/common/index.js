/*
 * @Description: 公共路由，以下实例：请根据具体业务修改或无用删除
 * @Autor: guoruliang
 * @Date: 2020-04-01 09:57:00
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-11-02 15:38:41
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

