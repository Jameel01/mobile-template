import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules';
import { getToken, setToken, removeToken } from '@/utils/auth'

Vue.use(Vuex);

const state = {
  token: getToken(),
  userInfo: ''
};

const getters = {

};

const actions = {

};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  DEL_TOKEN: (state) => {
    state.token = ''
  },
  SET_USER_INFO: (state, token) => {
    state.userInfo = userInfo
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules,
});