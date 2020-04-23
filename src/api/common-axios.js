/*
 * @Description: 接口请求统一配置
 * @Autor: chenyt
 * @Date: 2020-03-21 21:18:41
 * @LastEditors: chenyt
 * @LastEditTime: 2020-04-16 17:39:01
 */
import axios from "axios"
import { getToken } from "@/utils/auth"
// import sessionUtil from '@/utils/sessionStorage.js'
// import Cookies from 'js-cookie'
// 环境变量
const API_BASEURL = process.env.BASE_URL//api基础路径
const CLIENT_TIMEOUT = process.env.VUE_APP_TIMEOUT || 8000//链接时间
const MOCK_SERVER = process.env.VUE_APP_MOCK_SERVER || ""//mock
const enableMock = process.env.VUE_APP_ENABLE_MOCK === "true"//是否开启mock
const service = axios.create({
  baseURL: enableMock ? MOCK_SERVER : API_BASEURL,
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
  return response
}, error => {
  return Promise.reject(error)
})
export default service
