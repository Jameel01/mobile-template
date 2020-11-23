/*
 * @Description: 字典表
 * @Version: 0.1
 * @Autor: yjm
 * @LastEditors: Chenyt
 * @Date: 2020-09-21 10:59:06
 * @LastEditTime: 2020-11-19 13:51:32
 */
import isObject from "lodash/isObject"
import isEmpty from "lodash/isEmpty"
import isString from "lodash/isString"

const state = {
  codeList: {}, // 字典表数据列表
  localCodeListName: "codeList", // sessionStorage本地缓存字典表字段名
  dictionaryRequestLock: [], // 字典数据接口请求锁
  delimiter: ",", // 批量字典类型传参字符串拼接符
  format: {
    value: "value",
    name: "label",
    children: "children"
  }
}
const mutations = {
  SET_CODE_LIST(state, payload) {
    state.codeList = { ...state.codeList, ...payload }
  }
}
const actions = {
  getCodeList({ commit }, payload) {
    let dictionaryQueryParams = []

    if (Array.isArray(payload)) {
      dictionaryQueryParams = payload
    } else if (isString(payload)) {
      dictionaryQueryParams = payload.split(state.delimiter)
    }

    // 过滤已缓存参数
    dictionaryQueryParams = dictionaryQueryParams.filter(item => {
      return (
        isEmpty(getCodeList(item)) &&
        !state.dictionaryRequestLock.includes(item)
      )
    })

    if (isEmpty(dictionaryQueryParams)) {
      return commitCodeList(commit)
    } else {
      return getCodeListRequest(commit, dictionaryQueryParams)
    }
  }
}

// TODO:字典表请求接口 demo
/**
 * 字典表请求接口
 * @param {Array} params 请求参数
 */
// eslint-disable-next-line no-unused-vars
export function getCodeListApi(params) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: {
          sex: [
            {
              value: "1",
              label: "男"
            },
            {
              value: "2",
              label: "女"
            }
          ],
          test: [
            {
              label: "北京市",
              value: "11"
            },
            {
              label: "天津市",
              value: "12"
            },
            {
              label: "河北省",
              value: "13"
            }
          ],
          level: [
            {
              value: "01",
              label: "高级"
            },
            {
              value: "02",
              label: "中级"
            }
          ]
        }
      })
    }, 2000)
  })
}

/**
 * 获取字典表数据请求方法
 * @param {Function} commit 提交数据方法
 * @param {Array} params 请求参数
 */
function getCodeListRequest(commit, params) {
  // 添加请求锁
  state.dictionaryRequestLock = [...state.dictionaryRequestLock, ...params]
  return new Promise((resolve, reject) => {
    // 调用数据字典请求接口
    getCodeListApi({ types: params })
      .then(res => {
        if (res.code == 0 && !isEmpty(res.data)) {
          const data = res.data

          cacheCodeListToSession(data)
          commitCodeList(commit, data)
          resolve(data) // 返回当次请求接口
        } else {
          // 删除该次请求锁
          deleteDictionaryRequestLock(params)
        }
      })
      .catch(err => {
        // 删除该次请求锁
        deleteDictionaryRequestLock(params)
        reject(err)
      })
  })
}

/**
 * 删除未完成请求的字典请求锁
 * @param {Array} params 请求参数
 */
function deleteDictionaryRequestLock(params) {
  if (!Array.isArray(params)) {
    throw Error("params type error")
  }

  state.dictionaryRequestLock = state.dictionaryRequestLock.filter(item => {
    if (params.includes(item)) {
      return false
    }
    return true
  })
}

/**
 * 提交数据字典表
 * @param {Function} commit
 * @param {Object} data 字典数据对象
 */
function commitCodeList(commit, data) {
  const codeList = data || getCodeList()
  commit("SET_CODE_LIST", codeList) // 触发响应
  return Promise.resolve(codeList)
}

/**
 * 获取数据字典值
 * @param {String} type 字典类型
 */
export function getCodeList(type) {
  if (type) {
    if (isEmpty(getCodesByStore(type))) {
      return getCodesBySession(type)
    } else {
      return getCodesByStore(type)
    }
  } else {
    return { ...getCodesBySession(type), ...getCodesByStore(type) }
  }
}

/**
 * 缓存数据字典
 * @param {Array|Obejct} data 字典数据
 * @param {String} type 字典类型
 */
export function cacheCodeListToSession(data, type) {
  const localCodes = getCodesBySession(type)

  if (isObject(data) || Array.isArray(data)) {
    sessionStorage.setItem(
      state.localCodeListName,
      JSON.stringify({ ...localCodes, ...data })
    )
  }
}

/**
 * 获取本地缓存字典表数据
 * @param {String} type 字典类型
 */
function getCodesBySession(type) {
  // 取本地缓存
  const raw = sessionStorage.getItem(state.localCodeListName)
  const dictCodes = raw ? JSON.parse(raw) : {}
  const data = type ? dictCodes[type] : dictCodes
  return !isEmpty(data) ? data : {}
}

/**
 * 获取store缓存字典表数据
 * @param {String} type 字典类型
 */
function getCodesByStore(type) {
  const data = type ? state.codeList[type] : state.codeList
  return !isEmpty(data) ? data : {}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
