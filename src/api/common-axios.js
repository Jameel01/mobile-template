/**接口请求统一配置
 * @Author: chenyt 
 * @Date: 2020-03-21 21:18:41 
 * @Last Modified by: chenyt
 * @Last Modified time: 2020-03-27 13:28:55
 */

import axios from "axios"
import Cookies from 'js-cookie'
import Vue from 'vue';
import sessionUtil from '@/utils/sessionStorage.js';
import { getToken } from '@/utils/auth'
// 环境变量
const API_BASEURL = process.env.VUE_APP_API_LOCATION;//api基础路径
const CLIENT_TIMEOUT = process.env.VUE_APP_TIMEOUT || 8000//链接时间
const MOCK_SERVER = process.env.VUE_APP_MOCK_SERVER || ''//mock
const enableMock = process.env.VUE_APP_ENABLE_MOCK === 'true'//是否开启mock
let service = axios.create({
  baseURL: enableMock ? MOCK_SERVER : API_BASEURL,
  timeout: CLIENT_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求
service.interceptors.request.use(config => {
  Vue.$bus.$emit('setLoading', true)
  let token = getToken()
  if (token) {
    config.headers['Access-Token'] = token;
  }
  return config;
}, error => {
  return Promise.reject(error)
})

//响应拦截
service.interceptors.response.use(response => {
  Vue.$bus.$emit('setLoading', false)
  return response
}, error => {
  Vue.$bus.$emit('setLoading', false)
  return Promise.reject(error)
})
export default service;
