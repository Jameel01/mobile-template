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
 *迪丽热巴 => 迪丽*巴
 * @export
 * @param {*} name 名字
 * @returns
 */
const doubleSurnname=[
  "欧阳", "太史", "端木", "上官", "司马", "东方", "独孤", "南宫", "万俟", "闻人", "夏侯", "诸葛", "尉迟", "公羊", "赫连", "澹台",
  "皇甫", "宗政", "濮阳", "公冶", "太叔", "申屠", "公孙", "慕容", "仲孙", "钟离", "长孙", "宇文", "司徒", "鲜于", "司空", "闾丘", "子车", "亓官", "司寇", "巫马", "公西", "颛孙", "壤驷", "公良", "漆雕", "乐正", "宰父", "谷梁", "拓跋", "夹谷", "轩辕", "令狐", "段干", "百里", "呼延", "东郭", "南门", "羊舌", "微生", "公户", "公玉", "公仪", "梁丘", "公仲", "公上", "公门", "公山", "公坚", "左丘", "公伯", "西门", "公祖", "第五", "公乘", "贯丘", "公皙", "南荣", "东里", "东宫", "仲长", "子书", "子桑", "即墨", "达奚", "褚师", "吴铭"
]
export function name(name) {
  const fTwo=String(name).substr(0, 2),
    fOne=String(name).substr(0, 1),
    eOne=String(name).substr(name.length - 1),
    ifDoubleSur=doubleSurnname.toString().indexOf(fTwo)>-1
  if (!name) {
    return false
  } else if (String(name).length === 2) {
    return fOne + "*"
  } else if (String(name).length === 3) {
    if (ifDoubleSur){ //复姓3个字
      return fTwo + "*" 
    } else {
      return fOne + "*" + eOne
    }
  } else if (String(name).length === 4){ //复姓4个字
    if (ifDoubleSur){ //复姓
      return fTwo + "*" + eOne
    } else {
      return fOne + "*" + "*" + eOne
    }
  } else { //大于4个字
    return fOne + "*" + "*" + eOne
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
    return String(idcard).substr(0, 3) + "***********" + String(idcard).substr(idcard.length - 4)
  } else if (idcard.length === 18) {
    return String(idcard).substr(0, 3) + "***********" + String(idcard).substr(idcard.length - 4)
  } else if (idcard.length === 16) { // 社会保障号
    return String(idcard).substr(0, 3) + "***********" + String(idcard).substr(idcard.length - 4)
  }
}
/**
 *
 * @export
 * @param {*} str 任意字符串脱敏：前3后4
 * @returns
 */
export function strf3e4(str) {
  if (!str) {
    return ""
  } else if (str.length>7){
    return String(str).substr(0, 3) + "***********" + String(str).substr(str.length - 4)
  } else {
    return str
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
