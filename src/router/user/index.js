/*
 * @Description: 用户路由
 * @Autor: guoruliang
 * @Date: 2020-04-03 16:53:06
 * @LastEditors: chenyt
 * @LastEditTime: 2020-04-23 09:46:10
 */
export default [
    {
        path: "/login-module/login/index", //登录页
        name: "登录页",
        meta: {
            needLogin: false,
            title: "登录页"
        },
        component: () => import(/* webpackChunkName: "loginModule" */"@/views/login-module/login/index.vue")
    }
]
