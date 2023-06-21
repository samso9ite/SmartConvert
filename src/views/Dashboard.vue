<template>  
<!-- <div> -->
   
    <div id="">
        
        <SideBar />
        
        <div class="page_title">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="page_title-content">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-body" :class="{'mobileStyle': showMobileStyle}">
            <div class="container-fluid">   
                <div class="row">
                    <div class="alert alert-success" v-show="$store.state.profile_data.sell_bonus_status == true || $store.state.profile_data.sell_bonus_status == true"
                     :style="{'display': !show ? 'none' : 'block'}">
                        
                      <strong>Hello Chief!</strong> <span v-show="$store.state.profile_data.buy_bonus_status == true">You're eligible for ₦{{ $store.state.campaign.amount }} bonus when you Buy.</span> 
                      <span v-show="$store.state.profile_data.sell_bonus_status == true"> You're eligible for ₦{{ $store.state.campaign.amount }}  when you sell. </span> due to the ongoing promo.
                      <a href="#" class="close" data-dismiss="alert" aria-label="close" style="color:black; font-size: 30px; float: right;" @click="closeCampaignMessage">&times;</a>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-xxl-3">
                        <div class="card balance-widget">
                            <div class="card-header border-0 py-0">
                                <h4 class="card-title">Welcome Back {{first_name}} </h4>
                            </div>      
                            <div class="card-body pt-0">
                                <div class="balance-widget">    
                                    <div class="total-balance">
                                        <h3>{{transactions.length}}</h3>
                                        <h6>Total Trades Transacted</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div class="col-xl-3 col-lg-3 col-xxl-3">
                        <!-- <div class="col-xl-12 col-lg-6 col-xxl-6"> -->
                            <div class="widget-card">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="widget-stat">
                                        <div class="coin-title">
                                            <span><i class="cc BTC-alt"></i></span>
                                            <h5 class="d-inline-block ms-2 mb-3">Pending Trades
                                            </h5>
                                        </div>
                                        <h4 style="margin-left: 40px;"> {{pending_transactions}} <span class="badge badge-success ms-2">    </span>
                                        </h4>
                                    </div>
                                    <div id="btcChart"></div>
                                <!-- </div> -->
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-xxl-3">
                        <!-- <div class="col-xl-12 col-lg-6 col-xxl-6"> -->
                            <div class="widget-card">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="widget-stat">
                                        <div class="coin-title">
                                            <span><i class="cc BTC-alt"></i></span>
                                            <h5 class="d-inline-block ms-2 mb-3">Completed Trades
                                            </h5>
                                        </div>
                                        <h4 style="margin-left: 40px;"> {{succesful_transactions}} <span class="badge badge-success ms-2"></span> </h4>
                                    </div>
                                    <div id="btcChart"></div>
                                <!-- </div> -->
                            </div>
                            
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-3 col-xxl-3">
                            <div class="widget-card">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="widget-stat">
                                        <div class="coin-title">
                                            <span><i class="cc BTC-alt"></i></span>
                                            <h5 class="d-inline-block ms-2 mb-3">Failed  Trades
                                            </h5>
                                        </div>
                                        <h4 style="margin-left: 40px;"> {{failed_transactions}} <span class="badge badge-success ms-2"></span>
                                        </h4>
                                    </div>
                                    <!-- <div id="btcChart"></div> -->
                            </div>

                        </div>
                    </div>
                </div>
                 <div class="card-body" style="margin-top:-2rem">
                    <div class="balance-widget">
                        <ul class="list-unstyled">
                            <div class="div col-lg-12">
                                <div class="row">
                                     <div class="col-xl-12 col-lg-12" >
                                         <div class="card-header border-0 py-0">
                                            <h4 class="card-title">Current Rate</h4>
                                            <router-link :to="'/rates'"> View More Rate </router-link>
                                        </div>
                                        <marquee><i class="cc BTC me-3"></i> Bitcoin ${{this.btc_rate}} <i class="cc ETH" style="color:#5968ba; padding-left: 2rem;"></i> Ethereum ${{this.eth_rate}} <i class="cc LTC me-3" style="padding-left: 2rem;"></i> Litecoin ${{this.ltc_rate}} <i class="cc DOGE me-3" style="padding-left: 2rem;"></i> DOGE ${{this.doge_rate}} <i class="cc USDT me-3" style="padding-left: 2rem;"></i> USDT ${{this.usdt_rate}} <i class="cc XRP me-3" style="padding-left: 2rem;"></i> Ripple ${{this.xrp_rate}} <i class="cc TX me-3" style="padding-left: 2rem;"></i> TRON ${{this.trx_rate}} </marquee>
                                        <div class="row" style="margin-top:2.7rem">
                                            <li class="d-flex col-lg-2" style="margin-right:25px">
                                                <i class="cc BTC me-3"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0" style="padding-left:7px">BTC</h5>
                                                </div>
                                                <div class="text-end">
                                                    <h5>₦{{bitcoin.buy_rate}} BUY</h5>
                                                    <span>₦{{bitcoin.sell_rate}} SELL</span>
                                                </div>
                                            </li>
                                            <li class="d-flex col-lg-2" style="margin-right:25px">
                                                <i class="cc ETH" me-3 style="color:#5968ba"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0" style="padding-left:7px">ETH</h5>
                                                </div>
                                                <div class="text-end">
                                                    <h5>₦{{ETH.buy_rate}} BUY</h5>
                                                    <span>₦{{ETH.sell_rate}} SELL</span>
                                                </div>
                                            </li>
                                            <li class="d-flex col-lg-2" style="margin-right:25px">
                                                <img src="../../public/assets/images/perfect-money-logo.png" width="18%"/>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0" style="padding-left:15px"> PM</h5>
                                                </div>
                                                <div class="text-end">
                                                    <h5>₦{{PM.buy_rate}} BUY </h5>
                                                    <span>₦{{PM.sell_rate}} SELL</span>
                                                </div>
                                            </li>
                                            <!-- <li class="d-flex col-lg-2" style="margin-right:25px">
                                                <i class="cc DOGE me-3"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0">DOGE </h5>
                                                </div>
                                                <div class="text-end">
                                                    <h5>₦{{doge.buy_rate}} BUY</h5>
                                                    <span>₦{{doge.sell_rate}} SELL</span>
                                                </div>
                                            </li> -->
                                            <li class="d-flex col-lg-2" style="margin-right:25px">
                                                <i class="cc DOGE me-3"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0" style="font-size:13px">DOGE</h5>
                                                </div>
                                                 <div class="text-end">
                                                    <h5>₦{{doge.buy_rate}} BUY</h5>
                                                    <span>₦{{doge.sell_rate}} SELL</span>
                                                </div>
                                            </li>
                                            <li class="d-flex col-lg-2" style="margin-right:25px">
                                                <i class="cc USDT me-3"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0">USDT</h5>
                                                </div>
                                                <div class="text-end">
                                                    <h5>₦{{USDT.buy_rate}} BUY</h5>
                                                    <span>₦{{USDT.sell_rate}} SELL</span>
                                                </div>
                                            </li>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="row" style="margin-top:2rem">
                    <div class="col-xl-4 col-lg-4 col-xxl-4">
                        <div class="card">
                             <div class="buy-sell-widget">
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item" v-if="trade_not_active">
                                            <a class="nav-link"  style="background-color:white; color:brown" @click="buyFunction()">Buy</a>
                                        </li>
                                        <li class="nav-item"  v-if="trade_not_active"><a class="nav-link" style="background-color:white; color:brown" @click="sellFunction()">Sell</a> </li>
                                        <li class="nav-item" v-if="buy_transaction_in_progress">
                                            <div class="row">
                                                 <a class="nav-link active" :disabled="buy_transaction_in_progress" :class="{'makeActive' :buy_transaction_in_progress}" style="background-color:white; color:brown">Buy</a>
                                            </div>
                                           
                                        </li>
                                        <li class="nav-item" v-if="sell_transaction_in_progress"><a class="nav-link" :class="{'makeActive':sell_transaction_in_progress}" :disabled="sell_transaction_in_progress" style="background-color:white; color:brown">Sell</a> </li>
                                    </ul>
                                </div>

                            <div class="card-body" v-if="raiseCreateAccountMessage">
                                <div class="alert alert-warning text-center">
                                    <strong>Hello Boss!</strong> You need to add atleast one bank account before you can sell to us.<br>
                                    Please note that your bank account name must tally with your registered account.
                                    <br><br>
                                    <router-link :to="'/account-settings'"> <button class="btn btn-primary"> Add your bank account </button> </router-link>
                                </div>
                                
                            </div>

                            <div class="card-body" v-else>
                                <div class="buy-sell-widget">
                                    <div v-show="currentPhase==='SellFirstPhase'" >
                                        <SellFirstPhase @firstPhase="switchPhase"  @previewPhase="switchPhase" @getTransactions="getTransactions" :coins="coins" :trade_type="trade_type" :trade_not_active="trade_not_active"  :savedAccounts="savedAccounts" :coinCurrentValue="coinCurrentValue" :adminBankAccouts="adminBankAccouts"/>
                                    </div>
                                    <div v-show="currentPhase==='BuyPreviewPhase'" >
                                        <BuyPreviewPhase @successPhase="switchPhase" :trade_type="trade_type" :trade_not_active="trade_not_active" :coin_amount="current_coin_amount" :coin_name="current_coin_name" :naira_amount="current_naira_amount" :dollar_amount="current_dollar_amount" :transaction_ref="transaction_ref"/>
                                    </div>
                                    <div v-show="currentPhase==='FirstPreviewPhase'" >
                                        <FirstPreviewPhase @secondPhase="switchPhase" @getTransactions="getTransactions" :trade_type="trade_type" :trade_not_active="trade_not_active" :coin_amount="current_coin_amount" :coin_name="current_coin_name" :naira_amount="current_naira_amount" :dollar_amount="current_dollar_amount" :transaction_ref="transaction_ref"/>
                                    </div>
                                    <div v-show="currentPhase==='SellSecondPhase'">
                                        <QRPage  @secondPhase="switchPhase"  :walletAddress="wallet_address" :walletDollarAmount="wallet_dollar_amount" :walletCoinName="wallet_coin_name" :walletCoinAmount="wallet_coin_amount" :walletNetwork="wallet_network"/>
                                    </div>
                                    <div v-show="currentPhase==='SuccessPhase'" >
                                        <SuccessPage @successPhase='switchPhase' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-8 col-xxl-8">
                        <div class="card">
                            <div class="card-header border-0 py-0">
                                <h4 class="card-title">Recent Activities</h4>
                                <router-link :to="'/transaction-history'"> Click To View More Details About Transactions </router-link>
                            </div>
                            <div class="card-body">
                                <div class="transaction-table">
                                    <div class="table-responsive">
                                        <perfect-scrollbar>
                                            <table class="table mb-0 table-responsive-sm">
                                                <tbody>
                                                    <tr>
                                                        <!-- <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span> </td> -->
                                                        <td>REFERENCE</td>
                                                        <td>STATUS</td>
                                                        <td> TYPE</td>
                                                        <td>ASSET</td>
                                                        <td> AMOUNT</td>
                                                        <td>(₦)AMOUNT</td>
                                                        <td>COMMENT</td>
                                                    </tr>
                                                    <tr v-for="transaction in transactions" :key="transaction">
                                                        <td>{{transaction.transaction_reference}}</td>
                                                        <td class="text-warning"  v-if="transaction.transaction_status == '1'">PENDING</td>
                                                        <td class="text-danger"  v-else-if="transaction.transaction_status == '3'">RECEIVED</td>
                                                        <td class="text-success"  v-else-if="transaction.transaction_status == '2'">FUNDED</td>
                                                        <td class="text-danger"  v-else-if="transaction.transaction_status == '4'">FAILED</td>
                                                        <td class="text-warning"  v-else-if="transaction.transaction_status == '5'">ON-HOLD</td>
                                                        <td class="text-warning"  v-else-if="transaction.transaction_status == '6'">AWAITING CONFIRMATION</td>
                                                        <td class="text-success"  v-else-if="transaction.transaction_status == '7'">PAID</td>
                                                        <td> {{transaction.trade_type}} </td>
                                                        <td>
                                                            <i class="cc TX me-3" v-if="transaction.coin.coin_name == 'TRON'"></i><i class="cc BTC me-3" v-if="transaction.coin.coin_name == 'Bitcoin'"></i><img src="../../public/assets/images/perfect-money-logo.png" class="me-3" width="6%" v-if="transaction.coin.coin_name === 'Perfect Money'"/><i class="cc ETH" me-3 style="color:#5968ba" v-if="transaction.coin.coin_name == 'Ethereum'"></i><i class="cc LTC me-3"  v-if="transaction.coin.coin_name == 'LiteCoin'"></i><i class="cc DOGE me-3"  v-if="transaction.coin.coin_name == 'Doge Coin'"></i><i class="cc USDT me-3" v-if="transaction.coin.coin_name == 'USDT' "></i><i class="cc XRP me-3" v-if="transaction.coin.coin_name == 'Ripple'"></i>{{transaction.coin.coin_name}}
                                                        </td>
                                                       
                                                            <td class="text-success"  v-if="transaction.transaction_status == '3' && transaction.coin.coin_name != 'Perfect Money'">{{transaction.coin_amount}} </td>
                                                            <td class="text-success"  v-else-if="transaction.transaction_status == '2' && transaction.coin.coin_name != 'Perfect Money'">{{transaction.coin_amount}} </td>
                                                            <td class="text-danger"  v-else-if="transaction.transaction_status == '5' && transaction.coin.coin_name != 'Perfect Money'">{{transaction.coin_amount}} </td>
                                                            <td class="text-danger"  v-else-if="transaction.transaction_status == '4' && transaction.coin.coin_name != 'Perfect Money'">{{transaction.coin_amount}} </td>
                                                            <td class="text-danger"  v-else-if="transaction.transaction_status == '6' && transaction.coin.coin_name != 'Perfect Money'">{{transaction.coin_amount}} </td>
                                                            <td class="text-success"  v-else-if="transaction.transaction_status == '7' && transaction.coin.coin_name != 'Perfect Money'">{{transaction.coin_amount}} </td>
                                                            <td class="text-warning"  v-else-if="transaction.transaction_status == '1' && transaction.coin.coin_name != 'Perfect Money'">{{transaction.coin_amount}} </td>
                                                            <td class=""  v-else> ${{transaction.dollar_amount}}  </td>
                                                     
                                                      
                                                        <td>₦{{transaction.naira_amount}}</td>
                                                        <td>{{ transaction.comment }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </perfect-scrollbar>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <Footer />
    </div>
</template>


<script>
import Api from './Api.js'
import SideBar from '../components/SideBar.vue'
import Footer from '../components/Footer.vue'
import QRPage from '../components/QRPage.vue'
import SellFirstPhase from '../components/SellFirstPhase.vue'
import SuccessPage from '../components/SuccessPage.vue'
import BuyPreviewPhase from '../components/BuyPreviewPhase.vue'
import FirstPreviewPhase from '../components/FirstPreviewPhase.vue'
import VueMomentsAgo from 'vue-moments-ago'

    export default {
        name: 'Dashboard',
        components: {SideBar, SuccessPage, QRPage, SellFirstPhase, VueMomentsAgo, BuyPreviewPhase, FirstPreviewPhase, Footer},
        data(){
            return{
                first_name: sessionStorage.getItem('first_name'),
                transactions: [],
                total_transacted: '',
                currentPhase: 'SellFirstPhase',
                naira_value: '',
                amount_in_dollar: '',
                coin_amount: '',
                coin_type: '',
                trade_not_active: true,
                trade_not_in_progress: true,
                sell_transaction_in_progress: false,
                buy_transaction_in_progress: false, 
                coins: [],
                LTH: '',
                solana: '',
                ripple: '',
                bitcoin: '',
                ETH: '',
                PM: '',
                USDT: '',
                url: "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,DOGE,USDT,TRX,SOL,XRP,ETH,LTC&tsyms=USD&api_key=f72b59432fb04a56c30fee2cc24adfdca9cda19c8a50b49c7bddba4cc0a469b6",
                timer: '',
                eth_rate: '',
                btc_rate: '',
                usdt_rate: '',
                ltc_rate: '',
                doge_rate: '',
                solana_rate: '',
                trx_rate: '',
                savedAccounts: [],
                coinCurrentValue: [],
                selected_trade_type: false,
                trade_type: '',
                wallet_address: '',
                wallet_dollar_amount: '',
                wallet_coin_name: '',
                wallet_coin_amount: '',
                wallet_network: '',
                showMobileStyle: false,
                current_coin_name: '',
                current_coin_amount: '',
                current_naira_amount: '',
                current_dollar_amount: '',
                coinbase_transaction: {},
                transaction_ref: '',
                id: '',
                doge: '',
                raiseCreateAccountMessage: false,
                adminBankAccouts: [],
                show: true
            }
        },
        methods: {
            async getUser(){
                await Api.axios_instance.get(Api.baseUrl+'api/v1/user_data')
                .then(response => {
                    console.log(response.data);
                    this.first_name = response.data.first_name  
                    this.last_name = response.data.last_name  
                    this.phone_number = response.data.phone_number 
                    this.address = response.data.address  
                    this.email = response.data.email  
                    this.id = response.data.id
                    window.localStorage.setItem('first_name', this.first_name)
                    window.localStorage.setItem('last_name', this.last_name)
                    window.localStorage.setItem('phone_number', this.phone_number)
                    window.localStorage.setItem('address', this.address)
                    window.localStorage.setItem('email', this.email)
                    window.localStorage.setItem('id', this.id)
                })
               await Api.axios_instance.get(Api.baseUrl+'api/v1/profile/get/' + this.id)
                .then(res => {
                    let bank_count = res.data.user.bank_trade_count
                    let verification_status = res.data.transaction_status
                    localStorage.setItem('bank_count', bank_count)
                    localStorage.setItem('userVerificationStatus', verification_status)
                    let count_remainder = 6 - bank_count 
                    this.$store.commit('profileData', {userVerificationStatus:res.data.transaction_status,
                        bank_count: res.data.user.bank_trade_count, count_remainder: count_remainder, bonus_status:res.data.user.bonus_status, 
                        sell_bonus_status:res.data.user.sell_bonus_status, buy_bonus_status:res.data.user.buy_bonus_status} )
                })
            },
            async getTransactions(){
                await Api.axios_instance.get(Api.baseUrl+'api/v1/list-transaction')
                .then(response => {
                    this.transactions = response.data
                    this.transactions = this.transactions.reverse()
                    this.transaction_ref = this.transactions[0].transaction_reference
                    var transacted_amount = 0;
                    this.transactions.forEach(transaction => {
                        if(transaction.transaction_status == "2"){
                            transacted_amount += transaction.naira_amount
                        }
                    })
                    this.total_transacted = transacted_amount
                    this.$store.commit('transactions', {all_transactions:response.data})
                 })
            },
            getCoins(){
                Api.axios_instance.get(Api.baseUrl+'api/v1/list-coin')
                .then(response => {
                    this.coins = response.data
                    this.bitcoin = this.coins[0]; 
                    this.ETH = this.coins[1];
                    this.doge = this.coins[2];
                    this.PM = this.coins[8];
                    this.USDT = this.coins[3];
                    this.LTH = this.coins[5];
                    this.ripple = this.coins[6];
                    this.solana = this.coins[7]
                }
                )
            },
            getCampaign(){
                Api.axios_instance.get(Api.baseUrl+'api/v1/list-campaign')
                .then(res => {
                    console.log(res);
                    this.$store.commit('setCampaign', res.data[0])
                })
            },  
            update(){
                Api.axios_instance.get(this.url)
                .then(response  => {
                    this.coin_current_value = response.data
                    var results = response.data
                    this.btc_rate = results.BTC.USD
                    this.eth_rate = results.ETH.USD
                    this.usdt_rate = results.USDT.USD
                    this.ltc_rate = results.LTC.USD
                    this.doge_rate = results.DOGE.USD
                    this.xrp_rate = results.XRP.USD
                    this.trx_rate = results.TRX.USD
                    
                })
                .catch(error => {
                    console.log(error.data);
                })
            },
            sellFunction(){
                if(this.savedAccounts.length){
                    this.trade_type = "SELL"
                    this.sell_transaction_in_progress = true
                    this.trade_not_active = false
                }else{
                    this.raiseCreateAccountMessage = true
                }
                
            },
            buyFunction(){
                this.raiseCreateAccountMessage = false
                this.trade_type = "BUY"
                this.buy_transaction_in_progress = true
                this.trade_not_active = false
                
            },
            switchPhase(currentPhase){
                this.sell_transaction_in_progress = true
                this.trade_not_in_progress = false
                this.currentPhase = currentPhase
                if(this.currentPhase === "SellFirstPhase"){
                    location.reload()
                }
                if(this.currentPhase === "SellSecondPhase"){
                    this.wallet_address = this.$store.state.addressInfo.address
                    this.wallet_dollar_amount = this.$store.state.addressInfo.dollar_amount
                    this.wallet_coin_name = this.$store.state.addressInfo.coin_name
                    this.wallet_coin_amount = this.$store.state.addressInfo.coin_amount
                } else if(this.currentPhase === "BuyPreviewPhase"){
                    this.current_coin_name = this.$store.state.currentTrade.coin_name
                    this.current_coin_amount = this.$store.state.currentTrade.coin_amount
                    this.current_dollar_amount = this.$store.state.currentTrade.dollar_amount
                    this.current_naira_amount = this.$store.state.currentTrade.naira_amount
                }
                
             },
           async getSavedAccounts(){
              await Api.axios_instance.get(Api.baseUrl+'api/v1/list-bank')
              .then(response => {
                this.savedAccounts = response.data
              })  

              await Api.axios_instance.get(Api.baseUrl+'api/v1/list-admin-bank')
              .then(res => {
                this.adminBankAccouts = res.data
            })
           },
           screenSize(){
            if(screen.width < 800){
                this.showMobileStyle = true
            }
           },
           closeCampaignMessage(){
                this.show = !this.show
           }
        },
        mounted(){
            this.getUser()
            this.screenSize()
            this.getTransactions()
            this.getCoins()
            this.getSavedAccounts()
            this.update();
            this.getCampaign()
            this.timer = setInterval(this.update, 30000)
        },
        computed: {
            pending_transactions: function (){
               return this.transactions.filter(transaction => transaction.transaction_status=='1').length
            },
            succesful_transactions: function(){
                return this.transactions.filter(transaction => transaction.transaction_status == '2').length
            },
            failed_transactions: function(){
                return this.transactions.filter(transaction => transaction.transaction_status == '4').length
            }
        }
    }
</script>

<style>
    .makeActive{
        background-color:grey !important;
    }
    .remove{
        display: none !important;
    }
    .ps {
        height: 550px;
    }
    .mobileStyle{
        margin-left:0px !important; 
        width:100% !important;
        margin-top: 0% !important;
        margin-bottom: 0% !important;
    }
</style>