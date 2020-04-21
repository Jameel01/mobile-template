/*
 * @Description: vuex
 * @Autor: guoruliang
 * @Date: 2020-04-01 09:57:00
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-09 20:10:40
 */
import Vue from "vue"
import Vuex from "vuex"
import modules from "./modules"
import { getToken} from "@/utils/auth"

Vue.use(Vuex)

const state = {
    token: getToken(),
    userInfo: ""
}

const getters = {

}

const actions = {

}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    DEL_TOKEN: (state) => {
        state.token = ""
    },
    SET_USER_INFO: (state, userInfo) => {
        state.userInfo = userInfo
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules
})