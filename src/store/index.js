import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: '',
    token: '',
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
