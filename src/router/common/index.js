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
    component: () => import(/* webpackChunkName: "loginModule" */"@/views/home.vue")
  },

  {
    path: "*",
    name: "not-found",
    component: () => import(/* webpackChunkName: "notFoundModule" */"@/views/404.vue")
  },
  {
    path: "/ui-reset/data-entry/button",
    name: "button",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/data-entry/button/index.vue")
  },
  {
    path: "/ui-reset/data-entry/checkbox",
    name: "checkbox",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/data-entry/checkbox/index.vue")
  },
  {
    path: "/ui-reset/data-entry/search",
    name: "search",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/data-entry/search/index.vue")
  },
  {
    path: "/ui-reset/data-entry/input",
    name: "input",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/data-entry/input/index.vue")
  },
  {
    path: "/ui-reset/data-entry/uploader",
    name: "uploader",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/data-entry/uploader/index.vue")
  },
  {
    path: "/ui-reset/data-entry/picker",
    name: "picker",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/data-entry/picker/index.vue")
  },
  {
    path: "/ui-reset/data-display/noticebar",
    name: "noticebar",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/data-display/noticebar/index.vue")
  },
  {
    path: "/ui-reset/data-display/list",
    name: "list",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/data-display/list/index.vue")
  }
]


