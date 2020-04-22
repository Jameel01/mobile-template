/*
 * @Description: 公共路由
 * @Autor: guoruliang
 * @Date: 2020-04-01 09:57:00
 * @LastEditors: chenyt
 * @LastEditTime: 2020-04-22 09:46:57
 */

export default [
    {
        path: "/",
        name: "目录",
        meta: {
            needLogin: false
        },
        component: () => import(/* webpackChunkName: "loginModule" */"@/views/home.vue")
    },
    {
        path: "/error",
        name: "error",
        component: () => import(/* webpackChunkName: "errorModule" */"@/views/error.vue")

    },
    {
        path: "/exception",
        name: "exception",
        meta: {
            needLogin: false
        },
        component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/example.vue")
    },

    {
        path: "*",
        name: "not-found",
        component: () => import(/* webpackChunkName: "notFoundModule" */"@/views/404.vue")
    },
    {
        path: "/uireset/dataEntry/button",
        name: "button",
        component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataEntry/button.vue")
    },
    {
        path: "/uireset/dataEntry/checkbox",
        name: "checkbox",
        component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataEntry/checkbox.vue")
    },
    {
        path: "/uireset/dataEntry/searchBar",
        name: "searchBar",
        component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataEntry/searchBar.vue")
    },
    {
        path: "/uireset/dataEntry/inputItem",
        name: "inputItem",
        component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataEntry/inputItem.vue")
    },
    {
        path: "/uireset/dataEntry/uploader",
        name: "uploader",
        component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataEntry/uploader.vue")
    },
    {
        path: "/uireset/dataEntry/picker",
        name: "picker",
        component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataEntry/picker.vue")
    }
]

