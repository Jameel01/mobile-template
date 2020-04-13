/*
 * @Description: babel配置
 * @Autor: guoruliang
 * @Date: 2020-04-03 15:28:36
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-13 15:58:38
 */

module.exports = {
  presets: [
    "@vue/app"
  ],
  plugins: [
    ["import", {
      libraryName: "vant",
      libraryDirectory: "es",
      style: true
    }, "vant"]
  ]
}