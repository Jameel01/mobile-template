/*
 * @Description: 用户路由
 * @Autor: guoruliang
 * @Date: 2020-04-03 16:53:06
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-09 17:22:01
 */
export default [
    {
        path: "/loginModule/login/index", //登录页
        name: "登录页",
        meta: {
            needLogin: false,
            title: "登录页"
        },
        component: () => import(/* webpackChunkName: "loginModule" */"@/views/loginModule/login/index.vue")
    }
]
