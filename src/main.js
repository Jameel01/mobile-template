/*
 * @Description: 主入口文件
 * @Autor: guoruliang
 * @Date: 2020-04-08 09:32:12
 * @LastEditors: chenyt
 * @LastEditTime: 2020-05-29 15:31:04
 */
import Vue from "vue"
import App from "@/App.vue"
import Router from "vue-router"
import router from "@/router"
import { Toast } from "vant"
Vue.use(Toast)
// 引入基础样式
import "@/styles/common.scss"
// 引入全部样式
import "vant/lib/index.less"
// 自动注册全局的组件
import "@/components/index"
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

//常用过滤函数
import * as filters from '@/filters'; 
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
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

