import Vue from 'vue'
import App from '@/App.vue'
import Router from 'vue-router';
import router from '@/router'
import "@/styles/common.scss";
import { beforeEachHandler, beforeEachToExample } from '@/router/before-each'
import afterEachHandler from '@/router/after-each'
import store from '@/store'
import '@/use'
// 移动端调试神奇
import vConsole from '@/utils/vconsole'
// sessionStorage处理函数
import SessionUtil from "@/utils/sessionStorage"

// 修改路由跳转报错的bug-start
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
// 修改路由跳转报错的bug--end

// 挂载工具
Vue.prototype.$sessionUtil = SessionUtil;
// 总线
var EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})
//替换演示页使用
router.beforeEach(beforeEachToExample)
// 登录用户信息校验
router.beforeEach(beforeEachHandler)
//标题设置
router.afterEach(afterEachHandler)

window.gvm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')








