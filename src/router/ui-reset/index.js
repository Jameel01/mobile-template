/*
 * @Description: ui规范路由
 * @Autor: zhengxn
 * @Date: 2020-04-22 04:22:00
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-23 18:33:28
 */
export default [
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
  },
  {
    path: "/ui-reset/data-display/card",
    name: "card",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/data-display/card/index.vue")
  },
  {
    path: "/ui-reset/back-feed/action-sheet",
    name: "action-sheet",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/back-feed/action-sheet/index.vue")
  },
  {
    path: "/ui-reset/back-feed/activity-indicator",
    name: "activity-indicator",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/back-feed/activity-indicator/index.vue")
  },
  {
    path: "/ui-reset/back-feed/modal",
    name: "modal",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/back-feed/modal/index.vue")
  },
  {
    path: "/ui-reset/navigation/nav-bar",
    name: "nav-bar",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/navigation/nav-bar/index.vue")
  },
  {
    path: "/ui-reset/navigation/tab",
    name: "tab",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/navigation/tab/index.vue")
  },
  {
    path: "/ui-reset/others/refresh",
    name: "refresh",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/others/refresh/index.vue")
  },
  {
    path: "/ui-reset/others/result-page",
    name: "result-page",
    component: () => import(/* webpackChunkName: "exceptionModule" */"@/views/ui-reset/others/result-page/index.vue")
  }
]

