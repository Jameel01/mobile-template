/*
 * @Description: 接口请求统一配置
 * @Version: 0.1
 * @Autor: Chenyt
 */

import axios from "axios"
import { getToken } from "@/utils/cookie"
// 环境变量
const API_BASEURL = process.env.BASE_URL//api接口基础路径
const CLIENT_TIMEOUT = process.env.VUE_APP_TIMEOUT || 8000//链接时间
const MOCK_SERVER = process.env.VUE_APP_MOCK_SERVER || ""//mock

const service = axios.create({
  baseURL: MOCK_SERVER ? "" : API_BASEURL,
  timeout: CLIENT_TIMEOUT,
  headers: {
    "Content-Type": "application/json"
  }
})

// 请求
service.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers["Access-Token"] = token
  }
  return config
}, error => {
  return Promise.reject(error)
})
//响应拦截
service.interceptors.response.use(response => {
  const res = response.data
  // if the custom code is not 0, it is judged as an error.
  if (res.code !== 0) {

    window.gvm.$toast(res.message || "Error")

    // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //登录失效重新登录操作，
      //1、或者刷新token，获取新token，
      //2、或者清除本地登录信息，跳转到登录页
    }
    return Promise.reject(new Error(res.message || "Error"))
  } else {
    return res
  }
}, error => {
  return Promise.reject(error)
})
export default service
