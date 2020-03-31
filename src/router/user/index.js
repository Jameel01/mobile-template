export default [
  {
    path: '/loginModule/login/index',//登录页
    name: '登录页',
    meta: {
      needLogin: false,
      title: '登录页'
    },
    component: () => import(/* webpackChunkName: "loginModule" */'@/views/loginModule/login/index.vue')
  },
]
