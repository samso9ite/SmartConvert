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
                        <div class="row">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-8" >
                             <div class="card" style="text-align:center !important">
                                <div  v-if="payment_batch_num == 0" >
                                <i class="fa fa-times" aria-hidden="true" style="font-size:90px; color:red"></i>
                                
                                <h4 class="card-title" style="text-align:center !important">Transaction Cancelled</h4>
                                </div>

                                <div  v-else>
                                    <i class="fa fa-check" aria-hidden="true" style="font-size:90px; color:green"></i>
                                    <h4 class="card-title" style="text-align:center !important">Transaction Successful</h4>
                                </div>
                                <div class="card-body pt-0 mt-3">
                                    <div class="transaction-table">
                                        <div class="table-responsive">
                                            <table class="table mb-0 table-responsive-sm">
                                                <tr>
                                                    <!-- <th> Payment Id</th> -->
                                                    <th>Payee Account</th>
                                                    <th>Payer Account</th>
                                                    <th>Amount</th>
                                                    <th>Naira Value</th>
                                                    <th>Batch Num</th>
                                                   
                                                </tr>
                                                <tbody>
                                                <tr>
                                                    <!-- <td>{{ payment_id }}</td> -->
                                                    <td>{{ payee_account }}</td>
                                                    <td>{{ payer_account }}</td>
                                                    <td>{{ payment_amount }} USD</td>
                                                    <td>{{ naira_amount }}</td>
                                                    <td>{{  payment_batch_num }} </td>
                                                </tr>
                                               
                                                </tbody>
                                            </table>

                                            <h5 class="mt-5"><router-link :to="'/'"> Click Here To Make New Order</router-link> </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-2"></div>
                    </div>
                </div>
        </div>
        <Footer />
    </div>
</div>
</template>

<script>
import Api from './Api'
import SideBar from '../components/SideBar.vue'
import Footer from '../components/Footer.vue'

    export default{
        name: "PMStatus",
        components: {SideBar, Footer},

        data(){
            return{
                payee_account: '',
                payment_amount: '',
                payment_units: '',
                payment_batch_num: '',
                // payment_id: '',
                payer_account: '',
                naira_amount: '',
                showMobileStyle: false,
                campaign_bonus: false

            }
        },

        methods: {
            getDetails(){
              this.payee_account =  this.$route.query.PAYEE_ACCOUNT
              this.payer_account =  this.$route.query.PAYER_ACCOUNT
              this.payment_amount = this.$route.query.PAYMENT_AMOUNT;
              this.payment_units = this.$route.query.PAYMENT_UNITS;
              this.payment_batch_num = this.$route.query.PAYMENT_BATCH_NUM;
              this.naira_amount =  this.$store.state.currentTrade.naira_amount
              if(this.$store.state.profile_data.sell_bonus_status == true){
                    this.campaign_bonus = true
                }
            //   this.payment_id = this.$route.query.PAYMENT_ID;
              let formData = {
                dollar_amount: this.payment_amount,
                naira_amount:  this.$store.state.currentTrade.naira_amount,
                coin_amount: undefined,
                coin:  this.$store.state.currentTrade.coin_id,
                trade_type: 'SELL',
                coin_address: '',
                bank:  this.$store.state.currentTrade.bank_account,
                campaign_bonus: this.campaign_bonus
              }
                Api.axios_instance.post(Api.baseUrl+'api/v1/create-transaction/', formData)
                .then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            
            },
            screenSize(){
            if(screen.width < 800){
                this.showMobileStyle = true
            }
            }
        },

        mounted() {
            this.getDetails();
            this.screenSize()
        },
    }
</script>
