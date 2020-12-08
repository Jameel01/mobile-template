/*
 * @Description: 公共路由，以下实例：请根据具体业务修改或无用删除
 * @Autor: guoruliang
 * @Date: 2020-04-01 09:57:00
 * @LastEditors: yjm
 * @LastEditTime: 2020-12-08 09:11:38
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
  },
  {
    path: "/radar-chart",
    name: "雷达图",
    meta: {
      needLogin: false,
      keepAlive: false
    },
    component: () => import(/* webpackChunkName: "chartsModule" */"@/views/charts-module/radar-chart")
  },
  {
    path: "/progress-chart",
    name: "半圆进度条",
    meta: {
      needLogin: false,
      keepAlive: false
    },
    component: () => import(/* webpackChunkName: "chartsModule" */"@/views/charts-module/progress-chart")
  },
  {
    path: "/map-chart",
    name: "中国地图",
    meta: {
      needLogin: false,
      keepAlive: false
    },
    component: () => import(/* webpackChunkName: "chartsModule" */"@/views/charts-module/map-chart")
  },
  {
    path: "/data-chart",
    name: "数据展示",
    meta: {
      needLogin: false,
      keepAlive: false
    },
    component: () => import(/* webpackChunkName: "chartsModule" */"@/views/charts-module/data-chart")
  }
 
]

