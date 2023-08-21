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
                                <h4 class="card-title">Rates</h4>
                            </div>
                            <div class="card-body pt-0">
                                 <div class="balance-widget">
                                    <ul class="list-unstyled">
                                        <div class="row">
                                            <div class="col-lg-4" v-for="rate in rates" :key="rate">
                                                <li class="d-flex" >
                                                    <i class="cc BTC me-3" v-if="rate.coin_name == 'Bitcoin'"></i>
                                                    <img src="../../public/assets/images/perfect-money-logo.png" class="me-3" width="35px" v-if="rate.coin_name === 'Perfect Money'"/>
                                                    <i class="cc ETH me-3" style="color:#5968ba" v-if="rate.coin_name == 'Ethereum'"></i>
                                                    <i class="cc LTC me-3"  v-if="rate.coin_name == 'LiteCoin'"></i>
                                                    <i class="cc DOGE me-3"  v-if="rate.coin_name == 'Doge Coin'"></i>
                                                    <i class="cc USDT me-3" v-if="rate.coin_name == 'USDT' "></i>
                                                    <i class="cc XRP me-3" v-if="rate.coin_name == 'Ripple'"></i><i class="cc TX me-3" v-if="rate.coin_name == 'TRON'"></i>
                                                    <img src="../../public/assets/images/cryptocurrency.jpg" class="me-3" width="35px" v-if="rate.coin_name == 'Solana'"/>
                                                    <img :src=rate.image width="30" class="rounded-circle" style="margin-right: 10px;" v-else/>
                                                    <div class="flex-grow-1">
                                                        <h5 class="m-0">{{rate.coin_name}}</h5>
                                                    </div>
                                                    <div class="text-end">
                                                        <h5>₦{{rate.buy_rate}} BUY</h5>
                                                        <span>₦{{rate.sell_rate}} SELL</span>
                                                    </div>
                                                </li>
                                            </div>
                                             
                                        </div>
                                    </ul>
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
import Api from './Api.js'
    export default {
        name: 'Rates',
        components: {SideBar, Footer},
        data(){
            return{
                rates: [],
                showMobileStyle: false
            }
        },
        methods: {
            getRates(){
                Api.axios_instance.get(Api.baseUrl+'api/v1/list-coin')
                .then(response => {
                    this.rates = response.data
                })
            },
            screenSize(){
                if(screen.width < 800){
                    this.showMobileStyle = true
                }
                }
            },
        mounted(){
                this.getRates()
                this.screenSize()
            }
        }
</script>
