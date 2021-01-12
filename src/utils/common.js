/*
 * @Description: 公共函数
 * @Author: asheng
 * @Date: 2018-12-07 11:36:27
 */

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

export  function jsonToArray(data, value = "label", key = "value") {
  const arr = []

  if (Object.prototype.toString(data) === "[object Object]") {
    const keys = Object.keys(data)
    const isNumbeKeys = keys.some(item => item.startsWith(0))
    // 如果把数字编码作为json数据的键名，则需要重新排序一下数据
    if (isNumbeKeys) {
      keys.sort() // 降序排序
      keys.forEach(item => {
        arr.push({ [key]: item, [value]: data[item] })
      })

      return arr
    }
    // 常规json数据转换
    Object.keys(data).forEach(item => {
      arr.push({ [key]: item, [value]: data[item] })
    })
  }

  return arr
}

/**
* 设置页面标题
* @param {String} title 标题
* 
* **/
export  default function setTitle(title) {
  document.title = title
  document.head.querySelector('title').innerText = title
}


