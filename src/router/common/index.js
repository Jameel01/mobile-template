/*
 * @Description: 公共路由
 * @Autor: guoruliang
 * @Date: 2020-04-01 09:57:00
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-09 20:29:07
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
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/button.vue")
  },
  {
    path: "/checkbox",
    name: "checkbox",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/checkbox.vue")
  },
  {
    path: "/searchBar",
    name: "searchBar",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/uireset/searchBar.vue")
  }
]
