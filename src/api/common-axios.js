/*
 * @Author: chenyt 
 * @Date: 2020-03-21 21:18:41 
 * @Last Modified by: chenyt
 * @Last Modified time: 2020-03-21 21:49:47
 */

import axios from "axios"
import Cookies from 'js-cookie'
import Vue from 'vue';
import sessionUtil from '@/utils/sessionStorage.js';
// 环境变量
const API_BASEURL = process.env.VUE_APP_API_LOCATION;
const CLIENT_TIMEOUT = process.env.VUE_APP_TIMEOUT || 8000
const MOCK_SERVER = process.env.VUE_APP_MOCK_SERVER || ''
const enableMock = process.env.VUE_APP_ENABLE_MOCK === 'true'
const ABTEST_KEY = '__hsat__'
let service = axios.create({
  baseURL: enableMock ? MOCK_SERVER : API_BASEURL,
  timeout: CLIENT_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求
service.interceptors.request.use(config => {
  let token = Cookies.get(ABTEST_KEY)
  if (token) {
    config.headers['Access-Token'] = token;
  }
  return config;
}, error => {
  return Promise.reject(error)
})

//响应拦截
service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})
export default service;