/*
 * @Description: 设置sessionStorage
 * @Autor: guoruliang
 * @Date: 2020-04-03 16:53:12
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-09 17:13:54
 */
const ls = window.sessionStorage
export default {
    getItem(key) {
        try {
            return JSON.parse(ls.getItem(key))
        } catch (err) {
            return err
        }
    },
    setItem(key, val) {
        try {
            ls.setItem(key, JSON.stringify(val))
        } catch (err) {
            return err
        }
    },
    clear() {
        ls.clear()
    },
    keys() {
        return ls.keys()
    },
    removeItem(key) {
        ls.removeItem(key)
    }
}
