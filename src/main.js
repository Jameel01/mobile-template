/*
 * @Description: 主入口文件
 * @Autor: guoruliang
 * @Date: 2020-04-08 09:32:12
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-11-02 16:42:49
 */
import Vue from "vue"
import App from "@/App.vue"
import Router from "vue-router"
import router from "@/router"
import { Toast } from "@ylz/vant"

import pxToViewport from "@/utils/px-to-viewport"
Vue.prototype.$pxToViewport = pxToViewport

Vue.use(Toast)
// 引入全局iconfont
import "@/styles/iconfonts/iconfont.css"

// 引入全部样式
import "@ylz/vant/lib/index.less"
// 自动注册全局的组件
import "@/components/index"
// 引入基础样式
// import "@/styles/theme/theme-params.less"
// import "@/styles/animate.less"
import "@/styles/common.less"
//先关闭医保规范样式文件
// import "@/styles/theme/reset-vant.less"
//vuex存储
import store from "@/store"
//引入常用的vant组件
import "@/use"
//引入路由处理方法
import { beforeEachHandler, beforeEachToExample } from "@/router/before-each"
//设置路由标题
import afterEachHandler from "@/router/after-each"
//替换演示页使用
router.beforeEach(beforeEachToExample)
// 登录用户信息校验
router.beforeEach(beforeEachHandler)
//标题设置
router.afterEach(afterEachHandler)
//sessionstorage引入
import SessionUtil from "@/utils/session-storage"
// 挂载工具
Vue.prototype.$sessionUtil = SessionUtil
//全局toast提示
Vue.prototype.$toast = Toast
// 修改路由跳转报错的bug-start
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
// 修改路由跳转报错的bug--end

// EventBus总线
var EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function() {
      return EventBus
    }
  }
})
Vue.config.devtools = true
Vue.config.productionTip = false

// 设置页面修改内容，局部热更新
if (module && module.hot) {
  module.hot.accept()
}
window.gvm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

