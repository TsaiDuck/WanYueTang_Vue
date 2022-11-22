import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      flag: false,
      userName: ''
    }
  },
  mutations: {
    login(state, loginUser) {
      state.user.userName = loginUser.userName
      state.user.flag = true
    },
    logout(state) {
      state.user.flag = false
    }
  },
  actions: {}
})
