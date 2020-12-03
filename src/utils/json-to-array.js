/**
 *
 * @param {Json} data 数据源
 * @param {String} value 键值
 * @param {String} key 键名
 */
export default function jsonToArray(data, value = "label", key = "value") {
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
