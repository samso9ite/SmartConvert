<template>
    <div style="margin-top:-0.7rem">
        <center>
            <h2>Preview Order</h2>

            <!-- <h4>Please note that paying with an account name different from your registered name would render the order unprocessed </h4> -->
            <table class="table table-striped" style="font-size:14px; font-weight: 500; color: white;">
            <tbody>
            <tr>
                <td>Coin</td>
                <td>{{ tradeDetails.coin_name }}</td>
            </tr>
            <tr v-if="tradeDetails.coin_amount != Infinity">
                <td>Coin Amount</td>
                <td><span style="font-size: 20px !important;">{{tradeDetails.coin_amount}} </span></td>
            </tr>
            <tr>
                <td>Dollar Value </td>
                <td>${{tradeDetails.dollar_amount}}</td>
            </tr>
            <tr>
                <td>Naira Value </td>
                <td><span style="font-size: 20px !important;">₦{{tradeDetails.naira_amount}}</span></td>
            </tr>
            <tr v-if="tradeDetails.coin_address">
                <td>Coin Address </td>
                <td ><span style="font-size: 20px !important;">{{tradeDetails.coin_address}}</span></td>
            </tr>
            <tr  v-if="tradeDetails.pm_account">
                <td>PM Account </td>
                <td><span style="font-size: 20px !important;">{{tradeDetails.pm_account}}</span></td>
            </tr>
            <tr>
                <td> Bank</td>
                <td>{{ tradeDetails.admin_bank }}</td>
            </tr>
            </tbody>
            </table>
            <button type="submit" @click="createTransaction()" class="btn btn-success btn-block">Proceed</button>  <button type="submit" @click="cancelTrade()" class="btn btn-danger btn-block">Cancel</button>
        </center>
    </div>
</template>

<script>
import Api from '../views/Api'
export default({
    name: "buyPreviewPhase",
    props: ['coin_amount', 'naira_amount', 'dollar_amount', 'coin_name', 'transaction_ref'],
    data(){
        return{
            currentPhase: 'SuccessPhase',
        }
    },  

    computed: {
        tradeDetails: function(){
            return this.$store.state.currentTrade
        }
    },

    methods: {
        successPhase(){
            this.$emit('successPhase', this.buy_Phase)
        },
        createTransaction(){
            this.$emit('secondPhase', 'BuyPreviewPhase')
            let formData = this.$store.state.buy_data.formData
            Api.axios_instance.post(Api.baseUrl+'api/v1/create-transaction/', formData)
                .then(response => {
                    this.$emit('getTransactions')
                    this.$toast.success({
                    title:'Welldone Boss!',
                    message:'Order Has Been created'
                    })
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.loading = true
                })  
        },
        cancelTrade(){
            location.reload()
        
        }
      
    },
})
</script>