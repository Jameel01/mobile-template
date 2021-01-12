<!--
 * @Description: readme文档
 * @Version: 0.1
 * @Autor: Chenyt
-->
# Vue移动开发模板

## 分支说明
- `master`分支正式版本，应用于开发，包含较丰富常用工具
- `master-simple`分支正式版本，偏简洁版本框架
- `develop`分支测试版本，用于部门团队开发测试
- 其他分支用于开发、修复bug等
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

### 使用基础UI组件库-Vant

### 移动端适配设置
* 使用插件：postcss-px-to-viewport，将750px标准的设计稿转为vw和vh适配单位，js中单位也能转换

### Api接口访问跨域代理
本地设置跨域代理
### 访问环境变量方式
 `console.log(process.env.VUE_APP_SECRET)`

### 路由自动加载
在文件夹`router`下创建模块路由文件,例如：`router/login/index.js`。设置自动引入新建路由模块。

### 自动全局组件注册
放在`/components/global`文件夹下的组件会全局自动注册。


### 常用工具函数--utils
* `@/utils/cookie.js`：`cookie`使用`js-cookie`方法存取用户登录信息token，,在`router/before-each.js`的方法`beforeEachHandler`校验登录信息。配置无需登录页面白名单。
* `@/utils/dayjs.js`常用日期函数
* `@/utils/check.js`常用规则校验
* `@/utils/str-util.js`常用字符串函数
* `@/utils/session-storage.js`常用session存储
* `@/utils/detect.js`设备判断函数
* `@/utils/common.js`公用工具函数
* `@/utils/desensitization.js`常用脱敏前端工具函数
* `@/utils/dictionary.js`常用字典处理函数


### 跟新日志
* [v1.0.3](./CHANGELOG.md "2021-1-12") 
