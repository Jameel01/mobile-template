/*
 * @Description: 设置浏览器title
 * @Autor: guoruliang
 * @Date: 2020-03-23 17:02:15
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-09 17:07:22
 */
export default function setTitle(title) {
    document.title = title
    document.head.querySelector('title').innerText = title
}
