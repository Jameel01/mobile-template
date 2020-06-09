/*
 * @Description: 设置Cookies
 * @Autor: guoruliang
 * @Date: 2020-03-23 17:02:15
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-09 20:10:51
 */
/* 存到Cookie去:Create a cookie, valid across the entire site:
Cookies.set('name', 'value');
// Create a cookie that expires 7 days from now, valid across the entire site:
Cookies.set('name', 'value', { expires: 7 });
// Create an expiring cookie, valid to the path of the current page:
Cookies.set('name', 'value', { expires: 7, path: '' });
*/

/* 在Cookie中取出:// Read cookie:
Cookies.get('name'); // => 'value'
Cookies.get('nothing'); // => undefined
// Read all visible cookies:
Cookies.get(); // => { name: 'value' }
*/

/* 删除cookie// Delete cookie:
Cookies.remove('name');
// Delete a cookie valid to the path of the current page:
Cookies.set('name', 'value', { path: '' });
Cookies.remove('name'); // fail!
Cookies.remove('name', { path: '' }); // removed!
*/

/*
特殊使用：
跟一般使用不同的是，从Cookie中取出的时候，要从字符串转换成json格式
const user = {
  name: 'lia',
  age: 18
}
Cookies.set('user', user)
const liaUser = JSON.parse(Cookies.get('user'))
 */

import Cookies from "js-cookie"

const TokenKey = process.env.VUE_APP_TOKEN

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
