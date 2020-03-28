const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
// const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: isProd ? "" : "/",//配置根路径
  // assetsRoot: path.resolve(__dirname, "../dist"),
  outputDir: 'dist', //构建输出目录
  assetsDir: 'assets', //静态资源目录(js\css\img)
  lintOnSave: true, //是否开启eslint
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  devServer: {
    open: true, //是否自动在浏览器打开
    host: '0.0.0.0', //真机测试 0.0.0.0
    port: 9081, //配置端口号
    https: false, //是否配置https
    hotOnly: true, //是否热更新
    disableHostCheck: true,
    proxy: { //配置跨域
      '/api': {
        target: 'http://test.12333.gov.cn/cloud-app/api/service',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    //如果需要css热更新就设置为false,打包时候要改为true
    extract: false,
    // 开启 CSS source maps?
    sourceMap: true,
    // css预设器配置项
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: `@import "@/styles/themeParams.scss";`
      }
    },
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '首页标题',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  configureWebpack: config => ({
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        '~': resolve('config'),
        'src': resolve('src')
      }
    },
  }),
  chainWebpack: config => {
    // 图片限制 转为64base
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        limit: 20240
      }))
    // 图片质量压缩
    // config.module
    //   .rule('images')
    //   .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    //   .use('img-loader')
    //   .loader('img-loader').options({
    //     plugins: [
    //       require('imagemin-jpegtran')(),
    //       require('imagemin-pngquant')({
    //         quality: [0.75, 0.85]
    //       })
    //     ]
    //   })
    // config.module
    //   .rule("images")
    //   .test(/\.(gif|png|jpe?g|svg)$/i)
    //   .use("image-webpack-loader")
    //   .loader("image-webpack-loader")
    //   .options({
    //     bypassOnDebug: true
    //   })
    //   .end();
    // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    })

  },
  // 第三方插件配置
  pluginOptions: {}

}