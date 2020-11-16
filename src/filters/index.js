/*
 * Des: 全局过滤器
 * @Author: hch
 * @Date: 2020-03-19 15:22:41
 * @Last Modified by: hch
 * @Last Modified time: 2020-03-20 15:18:22
 */

/**
 * @Descripttion: 数据字典过滤器
 * @param {val为数据值,status为数据}
 * @return: 数据编码对应的数据名
 * @Author: syx
 */
export function dictFormat(val, status) {
  return !status ? "" : status.find(item => { return item.dicCode === val }) ? status.find(item => { return item.dicCode === val }).dicCodeName : ""
}

export {
  getCodeByLabel,
  getCodeByLabels,
  getLabelByCode,
  getLabelByCodes
} from "@/utils/dictionary"

export { dayFormat } from "@/utils/dayjs"
import desensitization from "@/utils/desensitization"
export { desensitization } 