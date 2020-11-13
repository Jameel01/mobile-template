/*
 * @Description: 
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-11-12 10:12:11
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-11-12 10:13:33
 */
import store from "../store" // 引入store，模板插入后改路径可能有变动，请确认路径是否正确
import isEmpty from "lodash/isEmpty"

/**
 * 通过编码值获取中文值
 * @param {String} type 字典表类型
 * @param {String} val 编码值
 */
export function getLabelByCode(val, type) {
  return translateDictionary(type, val, true)
}

/**
 * 通过中文值获取编码值
 * @param {String} type 字典表类型
 * @param {String} val 中文值
 */
export function getCodeByLabel(val, type) {
  return translateDictionary(type, val, false)
}

/**
 * 通过编码值获取中文值
 * @param {String} type 字典表类型
 * @param {String} val 编码值
 */
export async function asyncGetLabelByCode(val, type) {
  return asyncTranslateDictionary(type, val, true)
}

/**
 * 通过中文值获取编码值
 * @param {String} type 字典表类型
 * @param {String} val 中文值
 */
export async function asyncGetCodeByLabel(val, type) {
  return asyncTranslateDictionary(type, val, false)
}

/**
 * 通过编码值获取中文值
 * @param {String} type 字典表类型
 * @param {Array|String} vals 编码值以逗号分割的字符串数据
 * @param {String} delimiter 返回数据拼接分割符
 */
export function getLabelByCodes(vals, type, delimiter) {
  let values = []
  if (Array.isArray(vals)) {
    values = vals
  } else if (typeof vals == "string") {
    values = vals.split(",")
  }

  const data = values.map(item => getLabelByCode(item, type)).filter(Boolean)
  return delimiter !== undefined ? data.join(delimiter) : data
}

/**
 * 异步通过编码值获取中文值
 * @param {String} type 字典表类型
 * @param {Array|String} vals 编码值以逗号分割的字符串数据
 * @param {String} delimiter 返回数据拼接分割符
 */
export function asyncGetLabelByCodes(vals, type, delimiter) {
  let values = []
  const data = []

  if (Array.isArray(vals)) {
    values = vals
  } else if (typeof vals == "string") {
    values = vals.split(",")
  }

  values
    .map(async item => data.push(await asyncGetLabelByCode(item, type)))
    .filter(Boolean)

  return Promise.resolve(delimiter !== undefined ? data.join(delimiter) : data)
}

/**
 * 通过中文值获取编码值
 * @param {String} type 字典表类型
 * @param {Array|String} vals 中文值以逗号分割的字符串数据
 * @param {String} delimiter 返回数据拼接分割符
 */
export function getCodeByLabels(vals, type, delimiter) {
  let values = []
  if (Array.isArray(vals)) {
    values = vals
  } else if (typeof vals == "string") {
    values = vals.split(",")
  }

  const data = values.map(item => getCodeByLabel(item, type)).filter(Boolean)
  return delimiter !== undefined ? data.join(delimiter) : data
}

/**
 * 异步通过中文值获取编码值
 * @param {String} type 字典表类型
 * @param {Array|String} vals 中文值以逗号分割的字符串数据
 * @param {String} delimiter 返回数据拼接分割符
 */
export function asyncGetCodeByLabels(vals, type, delimiter) {
  let values = []
  const data = []

  if (Array.isArray(vals)) {
    values = vals
  } else if (typeof vals == "string") {
    values = vals.split(",")
  }

  values
    .map(async item => data.push(await asyncGetCodeByLabel(item, type)))
    .filter(Boolean)

  return Promise.resolve(delimiter !== undefined ? data.join(delimiter) : data)
}

/**
 * 数据过滤转换
 * @param {String} val 编码值/中文值
 * @param {Array} data 过滤数据源
 * @param {String} value 数据取值格式 byCode:value | byLabel:label
 * @param {String} label 数据取值格式 byCode:label | byLabel:value
 */
function filter(val, data, value, label) {
  let response = val
  data.some(item => {
    if (item[value] == val) {
      response = item[label]
      return true
    }
  })
  return response
}

/**
 * 转换字典数据
 * @param {String} type 字典类型
 * @param {String} val 被转换的值
 * @param {Boolean} byCode 是否通过编码值 true：byCode | false：byLabel
 */
function translateDictionary(type, val, byCode = true) {
  const dictionary = store.state.dictionary
  const label = byCode ? dictionary.format.name : dictionary.format.value
  const value = byCode ? dictionary.format.value : dictionary.format.name
  const data = store.getters.dictionaryCodeList[type]

  let response = val

  if (!isEmpty(data)) {
    response = filter(val, data, value, label)
  } else {
    if (!dictionary.dictionaryRequestLock.includes(type)) {
      store.dispatch("dictionary/getCodeList", type)
    }
  }

  return response
}

/**
 * 异步转换字典数据
 * @param {String} type 字典类型
 * @param {String} val 被转换的值
 * @param {Boolean} byCode 是否通过编码值 true：byCode | false：byLabel
 */
async function asyncTranslateDictionary(type, val, byCode = true) {
  const dictionary = store.state.dictionary
  const label = byCode ? dictionary.format.name : dictionary.format.value
  const value = byCode ? dictionary.format.value : dictionary.format.name
  let data = store.getters.dictionaryCodeList[type]

  let response = val

  if (!isEmpty(data)) {
    response = filter(val, data, value, label)
  } else {
    if (!dictionary.dictionaryRequestLock.includes(type)) {
      data = await store.dispatch("dictionary/getCodeList", type)
      data = data[type] // 根据接口数据格式做适配
      if (!isEmpty(data)) {
        response = filter(val, data, value, label)
      }
    }
  }

  return response
}
