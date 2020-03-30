# Vue移动开发模板

## 安装依赖
```
yarn install
```

### 本地环境代理启动命令
```
npm run serve:proxy
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

### 基础UI组件库-Vant

### 适配
* 使用插件：postcss-pxtorem
* 设置忽略vant-组件px单位转换

### 代理
本地设置跨域代理
### 访问环境变量方式
 `console.log(process.env.VUE_APP_SECRET)`
### 自动创建组件模板命令
```
npm run new:comp
```

运行命令后，输入页面名称，自动创建组件模板

### 自动创建页面模板命令
```
npm run new:view
```

运行命令后，输入页面名称，自动创建页面模板

### 路由自动加载
在文件夹router下创建模块路由文件。自动引入新建路由模块。

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