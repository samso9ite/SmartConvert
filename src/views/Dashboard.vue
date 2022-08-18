<template>
<!-- <div> -->
   
    <div id="">
        <SideBar />
        <div class="page_title">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="page_title-content">
                            <!-- <p>Welcome Back,
                                <span> Maria Pascle</span>
                            </p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-xxl-4">
                        <div class="card balance-widget">
                            <div class="card-header border-0 py-0">
                                <h4 class="card-title">Welcome Back {{first_name}} </h4>
                            </div>
                            <div class="card-body pt-0">
                                <div class="balance-widget">
                                    <div class="total-balance">
                                        <h3>₦{{total_transacted}}</h3>
                                        <h6>Total Amount Transacted</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-3 col-xxl-4">
                            <div class="widget-card">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="widget-stat">
                                        <div class="coin-title">
                                            <span><i class="cc BTC-alt"></i></span>
                                            <h5 class="d-inline-block ms-2 mb-3">Total  Trades
                                            </h5>
                                        </div>
                                        <h4 style="margin-left: 40px;"> {{transactions.length}} <span class="badge badge-success ms-2"></span>
                                        </h4>
                                    </div>
                                    <!-- <div id="btcChart"></div> -->
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-xxl-4">
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
                    <div class="col-xl-3 col-lg-3 col-xxl-4">
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
                </div>
                 <div class="card-body pt-0">
                    <div class="balance-widget">
                        <ul class="list-unstyled">
                            <div class="div col-lg-12">
                                <div class="row" >
                                    <div class="col-xl-3 col-lg-3 col-xxl-4" style="">
                                         <div class="card-body pt-0">
                                <div class="balance-widget">
                                    <ul class="list-unstyled">
                                        <li class="d-flex">
                                            <img src="../../public/assets/images/perfect-money-logo.png" width="11%"/>
                                            <div class="flex-grow-1">
                                                <h5 class="m-0" style="padding-left:5px">Perfect Money</h5>
                                            </div>
                                            <div class="text-end">
                                                <h5>₦{{PM.buy_rate}} BUY </h5>
                                                <span>₦{{PM.sell_rate}} SELL</span>
                                            </div>
                                        </li>
                                        <li class="d-flex">
                                            <i class="cc BTC me-3"></i>
                                            <div class="flex-grow-1">
                                                <h5 class="m-0">Bitcoin</h5>
                                            </div>
                                            <div class="text-end">
                                                <h5>₦{{bitcoin.buy_rate}} BUY</h5>
                                                <span>₦{{bitcoin.sell_rate}} SELL</span>
                                            </div>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                                    </div>
                                     <div class="col-xl-9 col-lg-10" >
                                         <div class="card-header border-0 py-0">
                                            <h4 class="card-title">Current Rate</h4>
                                            <router-link :to="'/rates'"> View More Rate </router-link>
                                        </div>
                                        <marquee><i class="cc BTC me-3"></i> Bitcoin ${{this.btc_rate}} / 1<i class="cc ETH" style="color:#5968ba; padding-left: 2rem;"></i> Ethereum ${{this.eth_rate}} / 1  <i class="cc LTC me-3" style="padding-left: 2rem;"></i> Litecoin ${{this.ltc_rate}} / 1 <i class="cc DOGE me-3" style="padding-left: 2rem;"></i> DOGE ${{this.doge_rate}} / 1 <i class="cc USDT me-3" style="padding-left: 2rem;"></i> USDT ${{this.usdt_rate}} / 1 <i class="cc XRP me-3" style="padding-left: 2rem;"></i> Ripple ${{this.xrp_rate}} / 1 <i class="cc TX me-3" style="padding-left: 2rem;"></i> TRON ${{this.trx_rate}} / 1</marquee>
                                        <div class="row" style="margin-top:2.7rem">
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
                                                <i class="cc LTC me-3"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0">LTH</h5>
                                                </div>
                                                <div class="text-end">
                                                    <h5>₦{{LTH.buy_rate}} BUY</h5>
                                                    <span>₦{{LTH.sell_rate}} SELL</span>
                                                </div>
                                            </li>
                                            <li class="d-flex col-lg-2" style="margin-right:25px">
                                                <i class="cc DOGE me-3"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0">DOGE </h5>
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
                                            <li class="d-flex col-lg-2">
                                                <i class="cc XRP me-3"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0">Ripple</h5>
                                                </div>
                                                <div class="text-end">
                                                    <h5>₦{{ripple.buy_rate}} BUY</h5>
                                                    <span>₦{{ripple.sell_rate}} SELL</span>
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
                    <div class="col-xl-3 col-lg-4 col-xxl-4">
                        <div class="card">
                             <div class="buy-sell-widget">
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item" v-if="trade_not_active">
                                            <a class="nav-link" :class="{'makeActive':buy_transaction_in_progress}" style="background-color:white; color:brown" @click="buyFunction()">Buy</a>
                                        </li>
                                        <li class="nav-item"  v-if="trade_not_active"><a class="nav-link" :class="{'makeActive':sell_transaction_in_progress}" style="background-color:white; color:brown" @click="sellFunction()">Sell</a> </li>
                                        <li class="nav-item" v-if="buy_transaction_in_progress"><a class="nav-link active" :disabled="buy_transaction_in_progress" :class="{'makeActive' :buy_transaction_in_progress}" style="background-color:white; color:brown" data-toggle="tab" href="#buy">Buy</a></li>
                                        <li class="nav-item" v-if="sell_transaction_in_progress"><a class="nav-link" :class="{'makeActive':sell_transaction_in_progress}" :disabled="sell_transaction_in_progress" style="background-color:white; color:brown">Sell</a> </li>
                                    </ul>
                                </div>

                            <div class="card-body">
                                <div class="buy-sell-widget">
                                    <div v-show="currentPhase==='SellFirstPhase'" >
                                        <SellFirstPhase @firstPhase="switchPhase" />
                                    </div>
                                    <div v-show="currentPhase==='SellSecondPhase'">
                                        <QRPage  @secondPhase="switchPhase" />
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
                                <a href="#">View More </a>
                            </div>
                            <div class="card-body">
                                <div class="transaction-table">
                                    <div class="table-responsive">
                                        <table class="table mb-0 table-responsive-sm">
                                            <tbody>
                                                <tr v-for="transaction in transactions" :key="transaction">
                                                    <td v-if="transaction.transaction_status == 1"><span class="sold-thumb"><i class="la la-arrow-down"></i></span> </td>
                                                    <td v-if="transaction.transaction_status == 3"><span class="sold-thumb"><i class="la la-arrow-down"></i></span> </td>
                                                    <td v-else-if="transaction.transaction_status == 2"><span class="buy-thumb"><i class="la la-arrow-up"></i></span></td>
                                                    
                                                    <td>
                                                        <span class="badge badge-danger" v-if="transaction.transaction_status == 1">Pending</span>
                                                        <span class="badge badge-danger" v-else-if="transaction.transaction_status == 2">Successfull</span>
                                                        <span class="badge badge-danger" v-if="transaction.transaction_status == 3">Failed</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc BTC me-3" v-if="transaction.coin.coin_name == 'Bitcoin'"></i><img src="../../public/assets/images/perfect-money-logo.png" width="11%" v-if="transaction.coin.coin_name === 'Perfect Money'"/><i class="cc ETH" me-3 style="color:#5968ba" v-if="transaction.coin.coin_name == 'Ethereum'"></i><i class="cc LTC me-3"  v-if="transaction.coin.coin_name == 'Litecoin'"></i><i class="cc DOGE me-3"  v-if="transaction.coin.coin_name == 'DOGE'"></i><i class="cc USDT me-3" v-if="transaction.coin.coin_name == 'USDT' "></i><i class="cc XRP me-3" v-if="transaction.coin.coin_name == 'Ripple'"></i>{{transaction.coin.coin_name}}
                                                    </td>
                                                    <td>
                                                          {{transaction.bank.account_number}}
                                                    </td>
                                                    <td class="text-warning"  v-if="transaction.transaction_status == 1">{{transaction.coin_amount}}{{transaction.coin.coin_name}}</td>
                                                    <td class="text-danger"  v-else-if="transaction.transaction_status == 3">{{transaction.coin_amount}}{{transaction.coin.coin_name}}</td>
                                                    <td class="text-success"  v-else-if="transaction.transaction_status == 2">{{transaction.coin_amount}}{{transaction.coin.coin_name}}</td>
                                                    <td>₦{{transaction.transaction_amount_naira}}</td>
                                                    <td> {{transaction.date}}</td>
                                                </tr>
                                            
                                            </tbody>
                                        </table>
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
import VueMomentsAgo from 'vue-moments-ago'
    export default {
        name: 'Dashboard',
        components: {SideBar, SuccessPage, QRPage, SellFirstPhase, VueMomentsAgo, Footer},
        data(){
            return{
                first_name: sessionStorage.getItem('first_name'),
                transactions: [],
                total_transacted: '',
                send_hash_key: '324kjfkd8779292',
                currentPhase: 'SellFirstPhase',
                naira_value: '',
                amount_in_dollar: '',
                coin_amount: '',
                coin_type: '',
                trade_not_active: true,
                trade_not_in_progress: true,
                sell_transaction_in_progress: false,
                buy_transaction_in_progress: false, 
                coins: '',
                LTH: '',
                solana: '',
                ripple: '',
                bitcoin: '',
                ETH: '',
                PM: '',
                USDT: '',
                url: "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,DOGE,USDT,TRX,Solana,XRP,ETH,LTC&tsyms=USD&api_key=f72b59432fb04a56c30fee2cc24adfdca9cda19c8a50b49c7bddba4cc0a469b6",
                timer: '',
                eth_rate: '',
                btc_rate: '',
                usdt_rate: '',
                lth_rate: '',
                doge_rate: '',
                solana_rate: '',
                trx_rate: ''
            }
        },
        methods: {
            getUser(){
                Api.axios_instance.get(Api.baseUrl+'api/v1/user_data')
                .then(response => {
                    this.first_name = response.data.first_name  
                    this.last_name = response.data.last_name  
                    this.phone_number = response.data.phone_number 
                    this.address = response.data.address  
                    this.email = response.data.email  
                    window.localStorage.setItem('first_name', this.first_name)
                    window.localStorage.setItem('last_name', this.last_name)
                    window.localStorage.setItem('phone_number', this.phone_number)
                    window.localStorage.setItem('address', this.address)
                    window.localStorage.setItem('email', this.email)
                })
            },
            getTransactions(){
                Api.axios_instance.get(Api.baseUrl+'api/v1/list-transaction',  {mode: 'no-cors'})
                .then(response => {
                    this.transactions = response.data
                    var transacted_amount = 0;
                    this.transactions.forEach(transaction => {
                        transacted_amount += transaction.transaction_amount_naira
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
                    this.USDT = this.coins[4];
                    this.LTH = this.coins[5];
                    this.ripple = this.coins[6];
                    this.solana = this.coins[7]
                }
                )
            },
            update(){
                console.log(this.url);
                Api.axios_instance.get(this.url)
                .then(response  => {
                    var results = response.data
                    this.btc_rate = results.BTC.USD
                    this.eth_rate = results.ETH.USD
                    this.usdt_rate = results.USDT.USD
                    this.ltc_rate = results.LTC.USD
                    this.doge_rate = results.DOGE.USD
                    this.xrp_rate = results.XRP.USD
                    this.trx_rate = results.TRX.USD
                })
            },
            sellFunction(){
                this.sell_transaction_in_progress = true
                this.trade_not_active = false
            },
            buyFunction(){
                this.buy_transaction_in_progress = true
                this.trade_not_active = false
            },
            switchPhase(currentPhase){
                this.sell_transaction_in_progress = true
                this.trade_not_in_progress = false
                this.currentPhase = currentPhase
            }
        },
        mounted(){
            this.getUser()
            this.getTransactions()
            this.getCoins()
            this.update();
            this.timer = setInterval(this.update, 3000)
        },
        computed: {
            pending_transactions: function (){
               return this.transactions.filter(transaction => transaction.transaction_status=='1').length
            },
            succesful_transactions: function(){
                return this.transactions.filter(transaction => transaction.transaction_status == '2').length
            }
        }
    }
</script>

<style scoped>
    .makeActive{
        background-color:grey !important;
    }
</style>