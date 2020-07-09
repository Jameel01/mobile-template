/*
 * @Description: 用户路由，以下实例：请根据具体业务修改或无用删除
 * @Autor: guoruliang
 * @Date: 2020-04-03 16:53:06
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-07-08 18:06:54
 */
export default [
  {
    path: "/login-module/login", //登录页
    name: "login",
    meta: {
      needLogin: false,
      title: "登录页"
    },
    component: () => import(/* webpackChunkName: "loginModule" */"@/views/login-module/login")
  },
  {
    path: "/login-module/register", //登录页
    name: "register",
    meta: {
      needLogin: false,
      title: "注册页"
    },
    component: () => import(/* webpackChunkName: "loginModule" */"@/views/login-module/register")
  }
]
