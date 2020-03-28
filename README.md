# Vue移动开发模板

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
npm run serve:proxy
```

### Compiles and minifies for production
```
npm run build:prod
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/zh/config/).

### 基础UI组件库-Vant

### 适配
* 使用插件：postcss-pxtorem
* 设置忽略vant-组件px单位转换

### 代理
本地设置跨域代理
### 访问环境变量方式
 `console.log(process.env.VUE_APP_SECRET)`
### 创建组件模板命令
npm run new:comp
### 创建页面模板命令
npm run new:view
### 路由自动加载
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