/*
 * @Description: 公共路由
 * @Autor: guoruliang
 * @Date: 2020-04-01 09:57:00
 * @LastEditors: chenyt
 * @LastEditTime: 2020-04-20 13:57:08
 */

export default [
  {
    path: "/",
    name: "目录",
    meta: {
      needLogin: false
    },
    component: () => import(/* webpackChunkName: "loginModule" */"@/views/Home.vue")
  },
  {
    path: "/error",
    name: "error",
    component: () => import(/* webpackChunkName: "errorModule" */"@/views/Error.vue")

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
    path: "/button",
    name: "button",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataEntry/button.vue")
  },
  {
    path: "/checkbox",
    name: "checkbox",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataEntry/checkbox.vue")
  },
  {
    path: "/searchBar",
    name: "searchBar",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataEntry/searchBar.vue")
  },
  {
    path: "/inputItem",
    name: "inputItem",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataEntry/inputItem.vue")
  },
  {
    path: "/uploader",
    name: "uploader",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataEntry/uploader.vue")
  },
  {
    path: "/picker",
    name: "picker",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataEntry/picker.vue")
  },
  {
    path: "/noticeBar",
    name: "noticeBar",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/dataDisplay/noticeBar.vue")
  }
]


