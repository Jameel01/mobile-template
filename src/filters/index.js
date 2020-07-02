/*
 * Des: 全局过滤器
 * @Author: hch
 * @Date: 2020-03-19 15:22:41
 * @Last Modified by: hch
 * @Last Modified time: 2020-03-20 15:18:22
 */

/**
 * 时间格式转换
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (time) {
    if (arguments.length === 0) {
      return null
    }
    const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}"
    let date
    if (typeof time === "object") {
      date = time
    } else {
      if ((typeof time === "string") && (/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      }
      if ((typeof time === "number") && (time.toString().length === 10)) {
        time = time * 1000
      }
      date = new Date(time)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
      const value = formatObj[key]
      // Note: getDay() returns 0 on Sunday
      if (key === "a") { return ["日", "一", "二", "三", "四", "五", "六"][value] }
      return value.toString().padStart(2, "0")
    })
    return time_str
  } else {
    return ""
  }
}

/**时间计算
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (("" + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return "刚刚"
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + "分钟前"
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + "小时前"
  } else if (diff < 3600 * 24 * 2) {
    return "1天前"
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      "月" +
      d.getDate() +
      "日" +
      d.getHours() +
      "时" +
      d.getMinutes() +
      "分"
    )
  }
}

/**
 *10000 => "10,000"
 *
 * @export
 * @param {*} num 数字
 * @returns
 */
export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","))
}

/**
 *17350800661 => 173****0661
 *
 * @export
 * @param {*} tel 手机号码
 * @returns
 */
export function mobile(tel) {
  return String(tel).substr(0, 3) + "****" + String(tel).substr(7, 4)
}

/**
 *陈伟霆 => 陈*霆
 *陈伟 => 陈*
 *迪丽热巴 => 迪**巴
 * @export
 * @param {*} name 名字
 * @returns
 */
export function name(name) {
  if (!name) {
    return false
  } else if (String(name).length === 2) {
    return String(name).substr(0, 1) + "*"
  } else if (String(name).length === 3) {
    return String(name).substr(0, 1) + "*" + String(name).substr(name.length - 1)
  } else {
    return String(name).substr(0, 1) + "*" + "*" + String(name).substr(name.length - 1)
  }
}

/**
 *123456789012345678 => 123456789******78
 *
 * @export
 * @param {*} idcard 身份证号码
 * @returns
 */
export function idcard(idcard) {
  if (!idcard) {
    return ""
  } else if (idcard.length === 15) {
    return String(idcard).substr(0, 8) + "******" + String(idcard).substr(idcard.length - 2)
  } else if (idcard.length === 18) {
    return String(idcard).substr(0, 10) + "******" + String(idcard).substr(idcard.length - 2)
  } else if (idcard.length === 16) { // 社会保障号
    return String(idcard).substr(0, 9) + "******" + String(idcard).substr(idcard.length - 2)
  }
}

/**
 * @Descripttion: 数据字典过滤器
 * @param {val为数据值,status为数据}
 * @return: 数据编码对应的数据名
 * @Author: syx
 */
export function dictFormat(val, status){
  return !status ? "" : status.find(item => { return item.dicCode === val }) ? status.find(item => { return item.dicCode === val }).dicCodeName : ""
}
