/*
 * @Description: 公共函数
 * @Author: asheng
 * @Date: 2018-12-07 11:36:27
 * @LastEditors: asheng
 * @LastEditTime: 2018-12-12 13:37:30
 */


/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = (url) => {
  const keyValueArr = url.split('?')[1].split('&')
  let paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}

/**
 * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * 如果没有传入key这个参数，则判断obj对象是否有键值对
 */
export const hasKey = (obj, key) => {
  if (key) {
    return key in obj
  } else {
    const keysArr = Object.keys(obj)
    return keysArr.length
  }
}

/**
 * @param {string} str 时间格式 具体看代码
 * @return: string
 * 将一个字符串转换为数组
 * 传入参数为string，返回一个数组
 */
export const toArr = (str) => {
  var patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;
  var arr = str.split(patrn);
  var srr = [];
  for (let index = 0; index < arr.length; index++) {
    srr.push(arr[index]);
  }
  return srr;
}


/**
 * @msg: 获取系统当前时间
 * @param {string} fmt 时间格式 具体看代码
 * @return: string
 */
export const getDate = (fmt) => {
  let time = ''
  const date = new Date()
  const o = {
    "M+": date.getMonth() + 1, // 月份 
    "d+": date.getDate(), // 日 
    "H+": date.getHours(), // 小时 
    "m+": date.getMinutes(), // 分 
    "s+": date.getSeconds(), // 秒 
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度 
    "S": date.getMilliseconds() // 毫秒 
  }
  if (/(y+)/.test(fmt)) {
    time = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      time = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    }
  }
  return time
}

/**
 * @msg: 获取系统当前时间
 * @param {string} date 时间
 * @param {string} fmt 时间格式
 * @return: string
 */
export const formatDate = (date, fmt) => {
  let time = ''
  const o = {
    "M+": date.getMonth() + 1, // 月份 
    "d+": date.getDate(), // 日 
    "H+": date.getHours(), // 小时 
    "m+": date.getMinutes(), // 分 
    "s+": date.getSeconds(), // 秒 
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度 
    "S": date.getMilliseconds() // 毫秒 
  }
  if (/(y+)/.test(fmt)) {
    time = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      time = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    }
  }
  return time
}


export const verifyStr = (str, text) => {
  const _str = str.toString().trim()
  const toastStr = _str.length ? false : `请填写${text}～`
  return {
    errMsg: toastStr,
    done: !toastStr,
    value: _str
  }
}

// 截取字符串
export const sliceStr = (str, sliceLen) => {
  if (!str) {
    return ''
  }
  let realLength = 0
  const len = str.length
  let charCode = -1
  for (let i = 0; i < len; i++) {
    charCode = str.charCodeAt(i)
    if (charCode >= 0 && charCode <= 128) {
      realLength += 1
    } else {
      realLength += 2
    }
    if (realLength > sliceLen) {
      return `${str.slice(0, i)}...`
    }
  }

  return str
}


/**
 * JSON 克隆
 * @param {Object | Json} jsonObj json对象
 * @return {Object | Json} 新的json对象
 */
export function objClone(jsonObj) {
  let buf
  if (jsonObj instanceof Array) {
    buf = []
    let i = jsonObj.length
    while (i--) {
      buf[i] = objClone(jsonObj[i])
    }
    return buf
  } else if (jsonObj instanceof Object) {
    buf = {}
    for (let k in jsonObj) {
      buf[k] = objClone(jsonObj[k])
    }
    return buf
  } else {
    return jsonObj
  }
}
/**
 * 数据格式转换
 * @param {Object} data json数据
 * @param {String} key 键名
 * @param {String} value 键值
 * 
 * 数据示例：
 * {
 *     "10":"北京",
 *     "11":"上海",
 *     "12":"广州",
 *     "13":"深圳",
 * }
 * 
 * 转换数据格式：
 * [
 *     {
 *         "label":"北京",
 *         "value":"10"
 *     },
 *     {
 *         "label":"上海",
 *         "value":"10"
 *     },
 *     {
 *         "label":"广州",
 *         "value":"10"
 *     },
 *     {
 *         "label":"深圳",
 *         "value":"10"
 *     },
 * ]
 */

export function jsonToArray(data, key = 'label', value = 'value') {
  let arr = []

  if (Object.prototype.toString(data) == '[object Object]') {

      let keys = Object.keys(data)
      let isNumbeKeys = keys.some(item => { return item.startsWith(0) })
      // 如果把数字编码作为json数据的键名，则需要重新排序一下数据
      if (isNumbeKeys) {
          
          keys.sort() // 降序排序
          keys.forEach(item => {
              arr.push({ [key]: item, [value]: data[item] })
          })

          return arr
      }
      // 常规json数据转换
      for (let i in data) {
          arr.push({ [key]: i, [value]: data[i] })
      }
  }

  return arr
}
/**
* 设置页面标题
* @param {String} title 标题
* 
* **/
export default function setTitle(title) {
  document.title = title
  document.head.querySelector('title').innerText = title
}