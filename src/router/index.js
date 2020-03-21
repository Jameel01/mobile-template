import Vue from 'vue'
import Router from 'vue-router'
import common from './modules/common'
import user from './modules/user'
import ErrorPage from '@/views/Error.vue'
import NotFound from '@/views/404.vue'
import sessionUtil from '@/utils/sessionStorage.js'
Vue.use(Router)

export const routes = [
  ...common,
  ...user,
  {
    path: '/',
    name: '目录',
    meta: {
      needLogin: false
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorPage
  },
  {
    path: '/exception',
    name: 'exception',
    meta: {
      needLogin: false,
    },
    component: () => import('@/views/example.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]
var router = new Router({
  linkActiveClass: 'active',
  // base: process.env.NODE_ENV === "production" ? "/ggfwstatic/chinahrss-unwork/" : "/",
  routes,
  // mode:"history"
});

export default router