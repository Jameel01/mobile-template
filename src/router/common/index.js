import ErrorPage from '@/views/Error.vue'
import NotFound from '@/views/404.vue'
export default [
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
