/*
 * @Description: 
 * @Autor: guoruliang
 * @Date: 2020-04-03 15:28:36
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-10 15:16:20
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