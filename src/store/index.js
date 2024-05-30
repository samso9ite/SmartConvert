import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../views/Api'
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: '',
    token: '',
    campaign: {},
    currentTrade: {
      dollar_amount: '',
      coin_amount: '',
      naira_amount: '',
      coin_name: '',
      trade_type: '',
      bank_account: '',
      coin_id: '',
      admin_bank_number: '',
      admin_bank_name: '',
      admin_bank: '',
      coin_address: '',
      pm_account: '',
      expiration_wallet: '',
      expiration_time: ''
    },
    user :{
      username: '',
      id : ''
    },
    all_transactions: [],
    currentPhase: 'SellFirstPhase',
    addressInfo: {
      coin_name: '',
      coin_amount: '',
      dollar_amount: '',
      address: '',
      network:'',
      address_account_id: '',
      wallet_address_id: ''
    },
    profile_data: {
      bank_count: '',
      userVerificationStatus: '',
      count_remainder: '',
      buy_bonus_status: false,
      sell_bonus_status: false,
      bonus_status: false
    },
    buy_data: {},
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
      state.currentTrade.coin_id = payload.coin_id
      state.currentTrade.admin_bank_name = payload.admin_bank_name
      state.currentTrade.admin_bank_number = payload.admin_bank_number
      state.currentTrade.admin_bank = payload.admin_bank
      state.currentTrade.coin_address = payload.coin_address
      state.currentTrade.pm_account = payload.pm_account
      state.currentTrade.expiration_time = payload.expiration_time
      state.currentTrade.expiration_wallet = payload.pm_account = payload.expiration_wallet

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
    },
    uniqueAddressStore(state, payload){
      state.addressInfo.coin_name = payload.coin_name
      state.addressInfo.address = payload.address
      state.addressInfo.dollar_amount = payload.dollar_amount
      state.addressInfo.coin_amount = payload.coin_amount
      state.addressInfo.network = payload.network
      state.addressInfo.address_account_id = payload.address_account_id
      state.addressInfo.wallet_address_id = payload.wallet_address_id
    },
    profileData(state, payload){
      state.profile_data.bank_count = payload.bank_count
      state.profile_data.userVerificationStatus = payload.userVerificationStatus
      state.profile_data.count_remainder = payload.count_remainder
      state.profile_data.bonus_status = payload.bonus_status
      state.profile_data.buy_bonus_status = payload.buy_bonus_status
      state.profile_data.sell_bonus_status = payload.sell_bonus_status
    },

    buyData(state, payload){
      state.buy_data = payload
    },

    setCampaign(state, payload){
      state.campaign = payload
    }
  },
  actions: {
    Set_Campaign(context){
      Api.axios_instance.get(Api.baseUrl+'api/v1/list-campaign')
      .then(res => {
        context.state.campaign = res.data[0]
      })
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
