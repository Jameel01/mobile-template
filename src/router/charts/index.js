/*
 * @Description: 公共路由，以下实例：请根据具体业务修改或无用删除
 * @Autor: guoruliang
 * @Date: 2020-04-01 09:57:00
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 16:15:58
 */

export default [
  {
    path: "/pie-chart",
    name: "基础饼图",
    meta: {
      needLogin: false,
      keepAlive: false
    },
    component: () => import(/* webpackChunkName: "chartsModule" */"@/views/charts-module/pie-chart")
  },
  {
    path: "/circle-pie",
    name: "圆形饼图",
    meta: {
      needLogin: false,
      keepAlive: false
    },
    component: () => import(/* webpackChunkName: "chartsModule" */"@/views/charts-module/circle-pie")
  },
  {
    path: "/broken-line",
    name: "折线图",
    meta: {
      needLogin: false,
      keepAlive: false
    },
    component: () => import(/* webpackChunkName: "chartsModule" */"@/views/charts-module/broken-line")
  },
  {
    path: "/area-chart",
    name: "面积图",
    meta: {
      needLogin: false,
      keepAlive: false
    },
    component: () => import(/* webpackChunkName: "chartsModule" */"@/views/charts-module/area-chart")
  },
  {
    path: "/bar-chart",
    name: "柱状图",
    meta: {
      needLogin: false,
      keepAlive: false
    },
    component: () => import(/* webpackChunkName: "chartsModule" */"@/views/charts-module/bar-chart")
  },
  {
    path: "/horizontal-bar-chart",
    name: "条形图",
    meta: {
      needLogin: false,
      keepAlive: false
    },
    component: () => import(/* webpackChunkName: "chartsModule" */"@/views/charts-module/horizontal-bar-chart")
  }

]

