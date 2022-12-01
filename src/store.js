import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前登录用户
    user: {
      isLogin: false,
      userId: -1,
      userName: '',
      userPwd: '',
      userPhone: '',
      userGender: '',
      userEmail: '',
      userAddress: '',
      userBirth: '',
      userAge: ''
    },
    drug: [],
    drugState: false,
    book: [],
    bookState: false,
    cart: [],
    cartState: false
  },
  mutations: {
    login(state, payload) {
      state.user.userName = payload.name
      state.user.userPwd = payload.pwd
      state.user.userId = payload.id
      state.user.isLogin = true
      state.user.userGender = payload.sex
      state.user.userPhone = payload.phone
      state.user.userAge = payload.userage
      state.user.userBirth = payload.birth
      state.user.userEmail = payload.email
      state.user.userAddress = payload.address
    },
    logout(state) {
      state.user.userName = ''
      state.user.userPwd = ''
      state.user.userId = -1
      state.user.isLogin = false
      state.user.userPhone = ''
      state.user.userGender = ''
      state.user.userAge = ''
      state.user.userBirth = ''
      state.user.userEmail = ''
      state.user.userAddress = ''
      state.cart = []
      state.cartState = false
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
    },
    updateCart(state, cart) {
      state.cart = cart
      state.cartState = true
    },
    clearCart(state) {
      state.cart = []
      state.cartState = false
    }
  },
  actions: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})
