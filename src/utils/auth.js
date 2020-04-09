/*
 * @Description: 设置Cookies
 * @Autor: guoruliang
 * @Date: 2020-03-23 17:02:15
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-09 20:10:51
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
