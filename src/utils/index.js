/*
 * @Description: 工具函数
 * @Version: 0.1
 * @Autor: yjm
 * @LastEditors: yjm
 * @Date: 2020-07-10 09:44:27
 * @LastEditTime: 2020-07-10 10:24:00
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