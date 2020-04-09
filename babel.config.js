/*
 * @Description: 
 * @Autor: guoruliang
 * @Date: 2020-04-03 15:28:36
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-09 17:03:44
 */

module.exports = {
    presets: [
        '@vue/app'
    ],
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
}