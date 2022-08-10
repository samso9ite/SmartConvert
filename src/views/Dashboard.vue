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
                                        <h4 style="margin-left: 40px;"> {{succesful_transactions}} <span class="badge badge-success ms-2"></span>
                                        </h4>
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
                                            <i class="cc BTC me-3"></i>
                                            <div class="flex-grow-1">
                                                <h5 class="m-0">Digital Currency</h5>
                                            </div>
                                            <div class="text-end">
                                                <h5>0.000242 BTC</h5>
                                                <span>0.125 USD</span>
                                            </div>
                                        </li>
                                        <li class="d-flex">
                                            <i class="cc LTC me-3"></i>
                                            <div class="flex-grow-1">
                                                <h5 class="m-0">Perfect Money</h5>
                                            </div>
                                            <div class="text-end">
                                                <h5>0.000242 LTC</h5>
                                                <span>0.125 USD</span>
                                            </div>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                                    </div>
                                     <div class="col-xl-9 col-lg-10" >
                                         <div class="card-header border-0 py-0">
                                            <h4 class="card-title">Current Rate</h4>
                                            <a href="#">View More Rate </a>
                                        </div>
                                        <div class="row" style="margin-top:4.6rem">
                                            <li class="d-flex col-lg-2" style="margin-right:25px">
                                                <i class="cc BTC me-3"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0">Bitcoin</h5>
                                                </div>
                                                <div class="text-end">
                                                    <h5>0.022 BTC</h5>
                                                    <span>0.125 USD</span>
                                                </div>
                                            </li>
                                            <li class="d-flex col-lg-2" style="margin-right:25px">
                                                <i class="cc LTC me-3"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0">Litecoin</h5>
                                                </div>
                                                <div class="text-end">
                                                    <h5>0.242 LTC</h5>
                                                    <span>0.125 USD</span>
                                                </div>
                                            </li>
                                            <li class="d-flex col-lg-2" style="margin-right:25px">
                                                <i class="cc XRP me-3"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0">Ripple</h5>
                                                </div>
                                                <div class="text-end">
                                                    <h5>0.22 XRP</h5>
                                                    <span>0.125 USD</span>
                                                </div>
                                            </li>
                                            <li class="d-flex col-lg-2" style="margin-right:25px">
                                                <i class="cc DASH me-3"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0">Dash</h5>
                                                </div>
                                                <div class="text-end">
                                                    <h5>0.042 XRP</h5>
                                                    <span>0.125 USD</span>
                                                </div>
                                            </li>
                                            <li class="d-flex col-lg-2">
                                                <i class="cc DASH me-3"></i>
                                                <div class="flex-grow-1">
                                                    <h5 class="m-0">Dash</h5>
                                                </div>
                                                <div class="text-end">
                                                    <h5>0.042 XRP</h5>
                                                    <span>0.125 USD</span>
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
                                        <li class="nav-item" v-show="currentPhase==='SellFirstPhase'"><a class="nav-link active" style="background-color:white; color:brown" data-toggle="tab"
                                                href="#buy">Buy</a>
                                        </li>
                                        <li class="nav-item" v-show="currentPhase==='SellFirstPhase'"><a class="nav-link" data-toggle="tab" href="#sell" style="background-color:white; color:brown">Sell</a>
                                        </li>
                                        <li class="nav-item" v-if="buy_transaction_in_progress"><a class="nav-link active" :disabled="buy_transaction_in_progress" style="background-color:white; color:brown" data-toggle="tab"
                                                    href="#buy">Buy</a>
                                        </li>
                                        <li class="nav-item" v-if="sell_transaction_in_progress"><a class="nav-link" :disabled="sell_transaction_in_progress" data-toggle="tab" href="#sell" style="background-color:white; color:brown">Sell</a>
                                        </li>
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
                                                        <i class="cc BTC"></i> Bitcoin
                                                    </td>
                                                    <td>
                                                        Using - Bank *******5264
                                                    </td>
                                                    <td class="text-warning"  v-if="transaction.transaction_status == 1">{{transaction.transaction_amount}} BTC</td>
                                                    <td class="text-danger"  v-else-if="transaction.transaction_status == 3">{{transaction.transaction_amount}} BTC</td>
                                                    <td class="text-success"  v-else="transaction.transaction_status == 2">{{transaction.transaction_amount}} BTC</td>
                                                    <td>₦50,000</td>
                                                    <td> <vue-moments-ago prefix="transacted" suffix="ago" date="2018-05-02T20:22:22.285Z" lang="en" /></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-success">Buy</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc LTC"></i> Litecoin
                                                    </td>
                                                    <td>
                                                        Using - Card *******8475
                                                    </td>
                                                    <td class="text-success">-0.000242 BTC</td>
                                                    <td>₦100,000 </td>
                                                    <td>transacted 10days ago</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-success">Buy</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc LTC"></i> Litecoin
                                                    </td>
                                                    <td>
                                                        Using - Card *******8475
                                                    </td>
                                                    <td class="text-success">-0.000242 BTC</td>
                                                    <td>₦100,000 </td>
                                                    <td>transacted 10days ago</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-success">Buy</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc LTC"></i> Litecoin
                                                    </td>
                                                    <td>
                                                        Using - Card *******8475
                                                    </td>
                                                    <td class="text-success">-0.000242 BTC</td>
                                                    <td>₦100,000 </td>
                                                    <td>transacted 10days ago</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-success">Buy</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc LTC"></i> Litecoin
                                                    </td>
                                                    <td>
                                                        Using - Card *******8475
                                                    </td>
                                                    <td class="text-success">-0.000242 BTC</td>
                                                    <td>₦100,000 </td>
                                                    <td>transacted 10days ago</td>
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
        <div class="footer">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-md-6">
                        <div class="copy_right">
                            Copyright ©
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 text-lg-right text-center">
                        <div class="social">
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- </div> -->
</template>


<script>
import Api from './Api.js'
import SideBar from '../components/SideBar.vue'
import QRPage from '../components/QRPage.vue'
import SellFirstPhase from '../components/SellFirstPhase.vue'
import SuccessPage from '../components/SuccessPage.vue'
import VueMomentsAgo from 'vue-moments-ago'
    export default {
        name: 'Dashboard',
        components: {SideBar, SuccessPage, QRPage, SellFirstPhase, VueMomentsAgo},
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
                trade_not_in_progress: true,
                sell_transaction_in_progress: false,
                buy_transaction_in_progress: false
            }
        },
        methods: {
            getTransactions(){
                Api.axios_instance.get(Api.baseUrl+'api/v1/list-transaction',  {mode: 'no-cors'})
                .then(response => {
                    this.transactions = response.data
                    var transacted_amount = 0;
                    this.transactions.forEach(transaction => {
                        transacted_amount += transaction.transaction_amount
                    })
                    this.total_transacted = transacted_amount
                    this.$store.commit('transactions', {all_transactions:response.data})
                })
            },
            switchPhase(currentPhase){
                this.sell_transaction_in_progress = true
                this.trade_not_in_progress = false
                this.currentPhase = currentPhase
            }
        },
        mounted(){
            this.getTransactions()
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