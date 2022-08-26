import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: '',
    token: '',
    currentTrade: {
      dollar_amount: '',
      coin_amount: '',
      naira_amount: '',
      coin_name: '',
      trade_type: '',
      bank_account: ''
    },
    user :{
      username: '',
      id : ''
    },
    all_transactions: [],
    currentPhase: 'SellFirstPhase',
  },
  mutations: {
    initializeStore(){
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token'),
        state.isAuthenticated = true,
        state.user.username = localStorage.getItem('username'),
        state.user.id = localStorage.getItem('id')
      }
      else{
        state.token = '',
        state.isAuthenticated = '',
        state.user.username = '',
        state.user.id = ''
      }
    },
    currentTrade(state, payload){
      state.currentTrade.bank_account = payload.bank_account
      state.currentTrade.coin_amount = payload.coin_amount
      state.currentTrade.coin_name = payload.coin_name
      state.currentTrade.dollar_amount = payload.dollar_amount
      state.currentTrade.naira_amount = payload.naira_amount
      state.currentTrade.trade_type = payload.trade_type
    },
    setToken(state, payload){
      state.token = payload.token,
      state.isAuthenticated = payload.isAuthenticated = false
    },
    setUser(state, payload){
      state.user.username = payload.username,
      state.user.id = payload.id
    },
    transactions(state, payload){
      state.all_transactions = payload.all_transactions
    },
    Phase(state, payload){
      state.currentPhase = payload.currentPhase
    }
  },
  actions: {
  },
  modules: {
  }
})
