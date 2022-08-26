<template>
    <div>
        <!-- SELL Component  -->
        <div class="currency_validate" style="margin-top:-0.7rem" v-if="trade_type === 'SELL'">
            <div class="mb-3">
                <label class="me-sm-2">Coin Type </label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text"><i class="cc BTC-alt" v-if="selected_coin_name === 'Bitcoin'"></i> <i class="cc TX-alt" v-if="selected_coin_name === 'TRON'"></i> <img src="../../public/assets/images/pm-64.png" width="38px" v-if="selected_coin_name === 'Perfect Money'"/><i class="cc ETH-alt"  v-if="selected_coin_name == 'Etherium'"></i><i class="cc LTC-alt"  v-if="selected_coin_name == 'LiteCoin'"></i><i class="cc DOGE-alt"  v-if="selected_coin_name == 'Doge Coin'"></i><i class="cc USDT-alt" v-if="selected_coin_name == 'USDT' "></i><i class="cc XRP-alt" v-if="selected_coin_name == 'Ripple'"></i></label>
                    </div>
                    <select class="form-control" v-model="coin_type" @change="setCoinDetails()">
                        <option value="">Select Coin</option>
                        <option :value="[{coin_name:coin.coin_name, coin_id:coin.id, buy_rate:coin.buy_rate, sell_rate:coin.sell_rate, minimum_limit:coin.minimum_limit, shortcode:coin.coin_short_code}]" v-for="coin in coins" :key="coin">{{coin.coin_name}}</option>
                    </select>
                </div>
            </div>

            <div class="mb-3">
                <label class="me-sm-2">Payment Method</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" ><i class="fa fa-bank" style="margin-top:7px !important; margin-bottom:7px"></i></label>
                    </div>
                    <select class="form-control" v-model="bank" > 
                        <option value="">Select Bank</option>
                        <option :value="account.id" v-for="account in savedAccounts" :key="account"> {{account.account_number}} {{account.bank_name}}</option>
                    </select>
                </div>
            </div>
              <form method="POST" action="https://perfectmoney.is/api/step1.asp">
                <div class="mb-3">
                    <label class="me-sm-2">Enter Your Amount </label>
                    <div class="input-group">
                    <label class="input-group-text">₦</label><input type="text"   v-model="naira_amount" class="form-control"
                            placeholder="Naira Value" @input="nairaBasedCalculation()">
                        <label class="input-group-text">$</label><input type="text"  class="form-control" value="" name="PAYMENT_AMOUNT" v-model="dollar_amount" 
                            placeholder="Amount in USD" @input="dollarBasedCalculation()">
                    </div>
                    <div class="input-group mt-2" v-if="coin_shortcode === 'PM'">
                        <input type="text"   class="form-control" v-model="pm_account" 
                            placeholder="Enter your PM Account">
                        <!-- Hidden Fields -->
                        <input type="hidden" name="PAYEE_ACCOUNT" value="U37368280" />
                        <input type="hidden" name="PAYEE_NAME" value="Smart Convert" />
                        <!-- <input type="hidden" name="PAYEE_ACCOUNT" value="U37368280" /> -->
                        <input type="hidden" name="PAYMENT_UNITS" value="USD" />
                        <input type="hidden" name="PAYMENT_URL" value="https://ponpar.com" />
                        <input type="hidden" name="NOPAYMENT_URL" value="https://ponpar.com" />
                        <input value="mailto:samso9ite@gmai..com" type="hidden" name="STATUS_URL" /> 
                        <!-- End of Hidden Fields -->
                    </div>
                    <div class="input-group mt-2" v-else>
                        <input type="text"   class="form-control" v-model="coin_amount" 
                            placeholder="Amount of Coin" @input="coinBasedCalculation()">
                    </div>

                    <div class="input-group mt-2" v-if="coin_shortcode !== 'PM'">
                        <input type="text"   class="form-control" v-model="coin_address" 
                            placeholder="Enter Your Coin  Address" >
                        
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <p class="mb-0">Minimum Limit</p>
                        <h4 class="mb-0">₦{{minimum_limit}} </h4>
                    </div>
                </div>
            <button type="submit" class="btn btn-success btn-block">Submit</button>
            <!-- <button type="submit" @click="firstPhase(trade_not_active, trade_type)" class="btn btn-success btn-block">Proceed</button> -->
            </form>
            <!-- <div class="mb-3" >
                <label class="me-sm-2">Enter Your Amount </label>
                <div class="input-group">
                <label class="input-group-text">₦</label><input type="text"   v-model="naira_amount" class="form-control"
                        placeholder="Naira Value" @input="nairaBasedCalculation()">
                    <label class="input-group-text">$</label><input type="text"  class="form-control" v-model="dollar_amount" 
                        placeholder="Amount in USD" @input="dollarBasedCalculation()">
                </div>
                <div class="input-group mt-2" v-if="coin_shortcode === 'PM'">
                    <input type="text"   class="form-control" v-model="pm_account" 
                        placeholder="Enter your PM Account">
                </div>
                <div class="input-group mt-2" v-else>
                    <input type="text"   class="form-control" v-model="coin_amount" 
                        placeholder="Amount of Coin" @input="coinBasedCalculation()">
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <p class="mb-0">Minimum Limit</p>
                    <h4 class="mb-0">₦{{minimum_limit}} </h4>
                </div>
            </div>
            <button type="submit" @click="firstPhase(trade_not_active, trade_type)" class="btn btn-success btn-block">Proceed</button> -->
        </div>

        <!-- END SELL -->

        <!-- BUY Component  -->
        <div class="currency_validate" style="margin-top:-0.7rem" v-if="trade_type === 'BUY'">
            <div class="mb-3">
                <label class="me-sm-2">Coin Type </label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text"><i class="cc BTC-alt" v-if="selected_coin_name === 'Bitcoin'"></i> <i class="cc TX-alt" v-if="selected_coin_name === 'TRON'"></i> <img src="../../public/assets/images/pm-64.png" width="38px" v-if="selected_coin_name === 'Perfect Money'"/><i class="cc ETH-alt"  v-if="selected_coin_name == 'Etherium'"></i><i class="cc LTC-alt"  v-if="selected_coin_name == 'LiteCoin'"></i><i class="cc DOGE-alt"  v-if="selected_coin_name == 'Doge Coin'"></i><i class="cc USDT-alt" v-if="selected_coin_name == 'USDT' "></i><i class="cc XRP-alt" v-if="selected_coin_name == 'Ripple'"></i></label>
                    </div>
                    <select class="form-control" v-model="coin_type" @change="setCoinDetails()">
                        <option value="">Select Coin</option>
                        <option :value="[{coin_name:coin.coin_name, coin_id:coin.id, buy_rate:coin.buy_rate, sell_rate:coin.sell_rate, minimum_limit:coin.minimum_limit, shortcode:coin.coin_short_code}]" v-for="coin in coins" :key="coin">{{coin.coin_name}}</option>
                    </select>
                </div>
            </div>

            <div class="mb-3">
                <label class="me-sm-2">Payment Method</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" ><i class="fa fa-bank" style="margin-top:7px !important; margin-bottom:7px"></i></label>
                    </div>
                    <select class="form-control" v-model="buy_payment_mode" > 
                        <option value="">Select Payment Mode</option>
                        <option value="TRANSFER">TRANSFER</option>
                        <option value="CASH DEPOSIT">CASH DEPOSIT</option>
                    </select>
                </div>
            </div>
          

            <!-- <div class="mb-3">
                    <label class="me-sm-2">Enter Your Amount </label>
                    <div class="input-group">
                    <label class="input-group-text">₦</label><input type="text"   v-model="naira_amount" class="form-control"
                            placeholder="Naira Value" @input="nairaBasedCalculation()">
                        <label class="input-group-text">$</label><input type="text"  class="form-control" v-model="dollar_amount" 
                            placeholder="Amount in USD" @input="dollarBasedCalculation()">
                    </div>
                    <div class="input-group mt-2" v-if="coin_shortcode === 'PM'">
                        <input type="text"   class="form-control" v-model="pm_account" 
                            placeholder="Enter your PM Account">
                    </div>
                    <div class="input-group mt-2" v-else>
                        <input type="text"   class="form-control" v-model="coin_amount" 
                            placeholder="Amount of Coin" @input="coinBasedCalculation()">
                    </div>

                    <div class="input-group mt-2" v-if="coin_shortcode !== 'PM'">
                        <input type="text"   class="form-control" v-model="coin_address" 
                            placeholder="Enter Your Coin  Address" >
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <p class="mb-0">Minimum Limit</p>
                        <h4 class="mb-0">₦{{minimum_limit}} </h4>
                    </div>
                </div> -->
        </div>
        <!-- END BUY Component -->
    </div>
</template>

<script>
import Api from '../views/Api'
    export default{
        name: 'SellFirstPhase',
        props: [
            'coins', 'savedAccounts', 'coinCurrentValue', 'trade_not_active', 'trade_type'
        ],
        data(){
            return{
                naira_amount: '',
                coin_amount: '',
                dollar_amount:'',
                currentPhase: 'SellSecondPhase',
                coin_type: [],
                bank: '',
                selected_coin_name:'',
                minimum_limit: '',
                coin_sell_rate: '',
                coin_buy_rate: '',
                btc_rate: '',
                eth_rate: '',
                doge_rate:'',
                pm_rate:'',
                xrp_rate:'',
                trx_rate:'',
                ltc_rate:'',
                usdt_rate:'',
                coin_shortcode: '',
                current_coin_value: '',
                coin_id: '',
                selected: true,
                pm_account: '',
                buy_payment_mode: '',
                coin_address: ''
            }
        },
        methods: {
            async firstPhase(trade_not_active, trade_type){
                console.log(this.coin_shortcode);
                if (trade_not_active === true){
                    this.$toast.error({
                    title:'Oops!',
                    position: 'bottom left',
                    showDuration: 100,
                    message:'Chief! Please select either to BUY or SELL before proceeding'})
                
                }else{
                let tradeData = {
                    dollar_amount: parseFloat(this.dollar_amount),
                    naira_amount: parseFloat(this.naira_amount),
                    coin_amount: parseFloat(this.coin_amount),
                    coin_name: this.selected_coin_name,
                    bank_account: this.bank,
                    trade_type: trade_type
                }
                let formData = {}
                if (trade_type === 'SELL'){
                    formData = {
                        dollar_amount: parseFloat(this.dollar_amount),
                        naira_amount: parseFloat(this.naira_amount),
                        coin_amount: parseFloat(this.coin_amount),
                        coin: this.coin_id,
                        bank: this.bank,
                        trade_type: trade_type,
                        buy_payment_mode: this.buy_payment_mode,
                        pm_account: this.pm_account
                    }
                }else if (this.coin_shortcode === "PM"){
                    formData = {
                        dollar_amount: parseFloat(this.dollar_amount),
                        naira_amount: parseFloat(this.naira_amount),
                        coin: this.coin_id,
                        trade_type: trade_type,
                        buy_payment_mode: this.buy_payment_mode,
                        pm_account: this.pm_account,
                        coin_address: this.coin_address
                    }
                }
                else{
                    formData = {
                    dollar_amount: parseFloat(this.dollar_amount),
                    naira_amount: parseFloat(this.naira_amount),
                    coin_amount: parseFloat(this.coin_amount),
                    coin: this.coin_id,
                    trade_type: trade_type,
                    buy_payment_mode: this.buy_payment_mode,
                    pm_account: this.pm_account,
                    coin_address: this.coin_address
                    }
                }
                console.log(formData);
                // this.currentPhase = "SuccessPhase"
                this.$store.commit('currentTrade', tradeData)
                await   Api.axios_instance.post(Api.baseUrl+'api/v1/create-transaction/', formData)
                .then(response => {
                    console.log(response.data);
                    this.$emit('getTransactions')
                })
				this.$emit('firstPhase', this.currentPhase)
                }

            },
            async setCoinDetails(){
                this.dollar_amount = ""
                this.naira_amount = ""
                this.coin_amount = ""
                this.selected_coin_name = this.coin_type[0].coin_name
                this.minimum_limit = this.coin_type[0].minimum_limit
                this.coin_buy_rate = this.coin_type[0].buy_rate
                this.coin_sell_rate = this.coin_type[0].sell_rate
                this.coin_shortcode = this.coin_type[0].shortcode
                this.coin_id = this.coin_type[0].coin_id
                console.log(this.coin_id);
                await Api.axios_instance.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms="+this.coin_shortcode+"&tsyms=USD&api_key=f72b59432fb04a56c30fee2cc24adfdca9cda19c8a50b49c7bddba4cc0a469b6")
                .then(response  => {
                    var results = response.data
                    if(this.coin_shortcode === "BTC"){
                        this.current_coin_value = results.BTC.USD
                    }
                    else if(this.coin_shortcode === "ETH"){
                        this.current_coin_value = results.ETH.USD
                    }
                    else if(this.coin_shortcode === "USDT"){
                        this.current_coin_value = results.USDT.USD
                    }
                    else if(this.coin_shortcode === "LTC"){
                        this.current_coin_value = results.LTC.USD
                    }
                    else if(this.coin_shortcode === "DOGE"){
                        this.current_coin_value = results.LTC.USD
                    }
                    else if(this.coin_shortcode === "XRP"){
                        this.current_coin_value = results.XRP.USD
                    }
                    else if(this.coin_shortcode === "TRX"){
                        this.current_coin_value = results.TRX.USD
                    }
                })
                
            },
            
            /* Calculate Coin and Naira Value based on Dollar input value*/
            dollarBasedCalculation(){
               this.naira_amount = this.dollar_amount*this.coin_sell_rate
               this.coin_amount = this.dollar_amount/this.current_coin_value
              },

            /* Calculate Dollar Value and Naira Value based on Coin Input Value  */
            coinBasedCalculation(){
                this.dollar_amount = this.coin_amount*this.current_coin_value
                this.naira_amount = this.dollar_amount*this.coin_sell_rate
            },
            /* Calculate Dollar Value and Coin Value based on Naira Input Value */
            nairaBasedCalculation(){
                this.dollar_amount = this.naira_amount/this.coin_sell_rate
                this.coin_amount = this.dollar_amount/this.current_coin_value
            },
          
        }
    }
</script>