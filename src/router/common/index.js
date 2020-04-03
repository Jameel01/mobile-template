
export default [
  {
    path: '/',
    name: '目录',
    meta: {
      needLogin: false
    },
    component: () => import(/* webpackChunkName: "loginModule" */'@/views/Home.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "errorModule" */'@/views/Error.vue')
    
  },
  {
    path: '/exception',
    name: 'exception',
    meta: {
      needLogin: false,
    },
    component: () => import(/* webpackChunkName: "exceptionModule" */'@/views/example.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "notFoundModule" */'@/views/404.vue')    
  }
]
