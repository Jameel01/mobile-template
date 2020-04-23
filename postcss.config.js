/*
 * @Author: your name
 * @Date: 2020-04-15 15:59:07
 * @LastEditTime: 2020-04-20 11:54:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \移动端ui规范\postcss.config.js
 */
module.exports = {
  plugins: {
    "autoprefixer": {
      // browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      unitPrecision: 3,
      minPixelValue: 1,
      selectorBlackList: [
        ".van-",".ignore-"
      ]
    }
  }
}
