import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前登录用户
    user: {
      isLogin: false,
      userName: ''
    },
    drug: []
  },
  mutations: {
    login(state, loginUser) {
      state.user.userName = loginUser.userName
      state.user.isLogin = true
    },
    logout(state) {
      state.user.isLogin = false
    }
  },
  actions: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})
