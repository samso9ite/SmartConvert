<template>
    <div>
        <SideBar />
        <div class="page_title">
            <div class="container-fluid">
                <div class="row">
                </div>
            </div>
        </div>

        <div class="content-body">
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
                                                <td></td>
                                                <td>Reference</td>
                                                <td>Type</td>
                                                <td>Status</td>
                                                <td>Product</td>
                                                <td>Bank</td>
                                                <td>Dollar Amount</td>
                                                <td>Naira Amount</td>
                                                <td>Date</td>
                                                <td>Acc/Addr</td>
                                            </tr>
                                            <tbody>
                                                <tr v-for="transaction in transactions" :key="transaction">
                                                   <td v-if="transaction.transaction_status == 1"><span class="sold-thumb"><i class="la la-arrow-down"></i></span> </td>
                                                    <td v-if="transaction.transaction_status == 3"><span class="sold-thumb"><i class="la la-arrow-down"></i></span> </td>
                                                    <td v-else-if="transaction.transaction_status == 2"><span class="buy-thumb"><i class="la la-arrow-up"></i></span></td>
                                                    <td>
                                                        <span class="badge badge-danger">{{transaction.transaction_reference}}</span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-danger">{{transaction.trade_type}}</span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-danger" v-if="transaction.transaction_status == 1">Pending</span>
                                                        <span class="badge badge-danger" v-else-if="transaction.transaction_status == 2">Successfull</span>
                                                        <span class="badge badge-danger" v-if="transaction.transaction_status == 3">Failed</span>
                                                    </td>
                                                    <td>
                                                        <!-- <i class="cc BTC"></i> -->
                                                        Bitcoin
                                                        <!-- {{transaction.}} -->
                                                    </td>

                                                    <td>
                                                        Using - Bank *******5264
                                                    </td>
                                                    <!-- <td class="text-warning"  v-if="transaction.transaction_status == 1">{{transaction.transaction_amount_btc}} BTC</td>
                                                    <td class="text-danger"  v-else-if="transaction.transaction_status == 3">{{transaction.transaction_amount_btc}} BTC</td>
                                                    <td class="text-success"  v-else="transaction.transaction_status == 2">{{transaction.transaction_amount_btc}} BTC</td> -->
                                                    <td>${{transaction.transaction_amount_usd}}</td>
                                                    <td>₦{{transaction.transaction_amount_naira}}</td>
                                                    <td> {{transaction.date}}</td>
                                                    <td>{{transaction.hash_key}}</td>
                                                </tr>
                                                <!-- <tr>
                                                    <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-success">Buy</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc LTC"></i> LTC
                                                    </td>
                                                    <td>
                                                        Using - Card *******8475
                                                    </td>
                                                    <td class="text-success">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-danger">Sold</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc XRP"></i> XRP
                                                    </td>
                                                    <td>
                                                        Using - Card *******8475
                                                    </td>
                                                    <td class="text-danger">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-success">Buy</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc DASH"></i> DASH
                                                    </td>
                                                    <td>
                                                        Using - Card *******2321
                                                    </td>
                                                    <td class="text-success">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-danger">Sold</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc BTC"></i> BTC
                                                    </td>
                                                    <td>
                                                        Using - Card *******2321
                                                    </td>
                                                    <td class="text-danger">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                                    </td>

                                                    <td>
                                                        <span class="badge badge-danger">Sold</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc BTC"></i> BTC
                                                    </td>
                                                    <td>
                                                        Using - Bank *******5264
                                                    </td>
                                                    <td class="text-danger">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-success">Buy</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc LTC"></i> LTC
                                                    </td>
                                                    <td>
                                                        Using - Card *******8475
                                                    </td>
                                                    <td class="text-success">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-danger">Sold</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc XRP"></i> XRP
                                                    </td>
                                                    <td>
                                                        Using - Card *******8475
                                                    </td>
                                                    <td class="text-danger">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-success">Buy</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc DASH"></i> DASH
                                                    </td>
                                                    <td>
                                                        Using - Card *******2321
                                                    </td>
                                                    <td class="text-success">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-danger">Sold</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc BTC"></i> BTC
                                                    </td>
                                                    <td>
                                                        Using - Card *******2321
                                                    </td>
                                                    <td class="text-danger">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr> -->
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
                transactions: this.$store.state.all_transactions
            }
        },
        methods: {
            //  getTransactions(){
            //     Api.axios_instance.get(Api.baseUrl+'api/v1/list-transaction')
            //     .then(response => {
            //         this.transactions = response.data
            //         this.$store.commit('transactions', {all_transactions:response.data})
            //     })
            },
        }
</script>
