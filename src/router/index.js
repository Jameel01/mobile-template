import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//自动引入模块路由，路由为模块下index.js文件
export let routes = []
const routerContext=require.context('./',true,/index\.js$/)
routerContext.keys().forEach(route=>{
  if(route.startsWith('./index')){
    return
  }
  const routerModule=routerContext(route)
  routes=[...routes,...(routerModule.default||routerModule)]
})
var router = new Router({
  linkActiveClass: 'active',
  // base: process.env.NODE_ENV === "production" ? "/ggfwstatic/chinahrss-unwork/" : "/",
  routes,
  // mode:"history"
});

export default router