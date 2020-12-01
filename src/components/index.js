/*
 * @Description: 自动注册全局的组件
 * @Autor: chenyt
 * @Date: 2020-03-27 15:36:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-01 11:35:56
 */

import Vue from "vue"
// 自动加载 global 目录下的 .vue 结尾的文件
const componentsContext = require.context("./global", true, /index\.(vue|js)$/)
componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component)
  /*
    * 兼容 import export 和 require module.export 两种规范
    */
  const ctrl = componentConfig.default || componentConfig
  Vue.component(ctrl.name, ctrl)
})