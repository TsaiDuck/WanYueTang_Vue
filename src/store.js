import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前登录用户
    user: {
      isLogin: false,
      userName: '',
      userPwd: ''
    },
    drug: [],
    drugState: false,
    book: [],
    bookState: false
  },
  mutations: {
    login(state, payload) {
      state.user.userName = payload.name
      state.user.userPwd = payload.pwd
      state.user.isLogin = true
    },
    logout(state) {
      state.user.userName = ''
      state.user.userPwd = ''
      state.user.isLogin = false
    },
    changeSkin(state, str) {
      state.skin = str
    },
    showLoading(state) {
      state.loadingShow = true
    },
    hideLoading(state) {
      state.loadingShow = false
    },
    updateDrug(state, drug) {
      state.drug = drug
      state.drugState = true
    },
    updateBook(state, book) {
      state.book = book
      state.bookState = true
    }
  },
  actions: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})
