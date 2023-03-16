<template>
    <div>
        <SideBar />
        <div class="page_title">
            <div class="container-fluid">
                <div class="row">
                </div>
            </div>
        </div>

        <div class="content-body" :class="{'mobileStyle': showMobileStyle}">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header border-0">
                                <h4 class="card-title">Transaction History</h4>
                            </div>
                            <div class="card-body pt-0">
                                <div class="transaction-table">
                                    <div class="table-responsive">
                                        <table class="table mb-0 table-responsive-sm">
                                            <tr style="">
                                                <td>Reference</td>
                                                <td>Type</td>
                                                <td>Status</td>
                                                <td>Asset</td>
                                                <td> Amount</td>
                                                <td>Dollar Amount</td>
                                                <td>Naira Amount</td>
                                                <td>Hash Key</td>
                                                <td>Comment</td>
                                                <td>Date</td>
                                            </tr>
                                            <tbody>
                                                <tr v-for="transaction in transactions" :key="transaction">
                                                   <td>
                                                        <span class="badge badge-danger">{{transaction.transaction_reference}}</span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-danger">{{transaction.trade_type}}</span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-danger" v-if="transaction.transaction_status == 1"> PENDING</span>
                                                        <span class="badge badge-danger" v-else-if="transaction.transaction_status == 2"> FUNDED</span>
                                                        <span class="badge badge-danger" v-else-if="transaction.transaction_status == 3">RECEIVED</span>
                                                        <span class="badge badge-danger" v-else-if="transaction.transaction_status == 4">FAILED</span>
                                                        <span class="badge badge-danger" v-else-if="transaction.transaction_status == 5">ON-HOLD</span>
                                                        <span class="badge badge-danger" v-else-if="transaction.transaction_status == 6">AWAITING CONFIRMATION</span>
                                                        <span class="badge badge-danger" v-else-if="transaction.transaction_status == 7">PAID</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc BTC me-3" v-if="transaction.coin.coin_name == 'Bitcoin'"></i><img src="../../public/assets/images/perfect-money-logo.png" width="11%" v-if="transaction.coin.coin_name === 'Perfect Money'"/><i class="cc ETH" me-3 style="color:#5968ba" v-if="transaction.coin.coin_name == 'Ethereum'"></i><i class="cc LTC me-3"  v-if="transaction.coin.coin_name == 'Litecoin'"></i><i class="cc DOGE me-3"  v-if="transaction.coin.coin_name == 'Doge Coin'"></i><i class="cc USDT me-3" v-if="transaction.coin.coin_name == 'USDT' "></i><i class="cc XRP me-3" v-if="transaction.coin.coin_name == 'Ripple'"></i>{{transaction.coin.coin_name}}
                                                    </td>
                                                    <td>{{transaction.coin_amount}}</td>
                                                    <td>${{transaction.dollar_amount}}</td>
                                                    <td>₦{{transaction.naira_amount}}</td>
                                                    <td v-if="transaction.hash_key_type == '1'"><a :href="transaction.hash_key" target="_blank"> <button class="btn">Click to View</button> </a></td>
                                                    <td v-else> {{ transaction.hash_key }} </td>
                                                    <td>{{transaction.comment}}</td>
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
import SideBar from '../components/SideBar.vue'
import Footer from '../components/Footer.vue'
    export default {
        name: 'TransactionHistory',
        components: {SideBar, Footer},
        data(){
            return{
                transactions: this.$store.state.all_transactions,
                showMobileStyle: false,
            }
        },
        methods: {
            screenSize(){
            if(screen.width < 800){
                this.showMobileStyle = true
            }
            }
            },
        
        mounted() {
            this.screenSize()
        }
        }
</script>
