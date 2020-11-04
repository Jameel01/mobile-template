# Vue移动开发模板

## 安装依赖
```
npm install
```

### 本地环境代理启动命令
```
npm run serve:proxy

```
### 代码提交前执行eslint规则校验与修复
```
npm run lint
```

### 发布测试环境打包命令
```
npm run build:test
```
### 发布线上环境打包命令
```
npm run build:prod
```

### 更多自定义配置
See [Configuration Reference](https://cli.vuejs.org/zh/config/).

### 使用基础UI组件库-Vant，组件UI主题符合规范

### 移动端适配设置
* 使用插件：postcss-px-to-viewport，将750px标准的设计稿转为vw和vh适配单位
* 设置忽略vant-组件px单位转换

### Api接口访问跨域代理
本地设置跨域代理
### 访问环境变量方式
 `console.log(process.env.VUE_APP_SECRET)`
### 自动创建组件模板命令
```
npm run new:comp
```

运行命令后，输入页面名称，自动在文件夹`components`创建组件模板

### 自动创建页面模板命令
```
npm run new:view
```

运行命令后，输入页面名称，自动在文件夹`views`创建页面模板

### 路由自动加载
在文件夹`router`下创建模块路由文件,例如：`router/login/index.js`。设置自动引入新建路由模块。

```js
export let routes = []
const routerContext=require.context('./',true,/index\.js$/)
routerContext.keys().forEach(route=>{
  if(route.startsWith('./index')){
    return
  }
  const routerModule=routerContext(route)
  routes=[...routes,...(routerModule.default||routerModule)]
})
```
### 自动全局组件注册
放在`/components/global`文件夹下的组件会全局自动注册。

```js
// 自动加载 global 目录下的 .vue 结尾的文件
const componentsContext = require.context('./global', true, /\.vue$/)
componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component)
  /**
  * 兼容 import export 和 require module.export 两种规范
  */
  const ctrl = componentConfig.default || componentConfig
  Vue.component(ctrl.name, ctrl)
})
```
### 配置优化：关闭preload 和 Prefetch

```js
/*
    preload 和 Prefetch 链接将会消耗带宽。
    如果你的应用很大且有很多 async chunk，
    而用户主要使用的是对带宽较敏感的移动端，
    那么你可能需要关掉 prefetch 链接并手动选择要提前获取的代码区块。
    Vue CLI 应用会为所有初始化渲染需要的文件自动生成 preload 提示
    官方文件很坑爹的,官网文档是错的,他改名字了,要自己打印出来
    console.log(config)
*/

config.plugins.delete("prefetch-index")
config.plugins.delete("preload-index")

```
>  当 prefetch 插件被禁用时，你可以通过 webpack 的内联注释手动选定要提前获取的代码区块：

```js
import(/* webpackPrefetch: true */ './someAsyncComponent.vue')
```

### 常用工具函数--utils
* `cookie`使用`js-cookie`方法存取用户登录信息token，方法函数地址：`@/utils/auth.js`,在`router/before-each.js`的方法`beforeEachHandler`校验登录信息。配置无需登录页面白名单。
* `@/utils/check.js`常用规则校验
* `@/utils/str-util.js`常用字符串函数
* `@/utils/compress-file.js`压缩文件工具函数
* `@/utils/detect.js`设备判断函数
* `@/utils/common.js`公用工具函数

### 跟新日志
* [v1.0.1](./CHANGELOG.md "2020-11-03") 