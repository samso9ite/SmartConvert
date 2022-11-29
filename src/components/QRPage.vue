<template>
    <div style="margin-top:-0.7rem">
        <h4>Please scan or copy the wallet address to transfer  {{walletCoinAmount}} {{walletCoinName}} (${{walletDollarAmount}}) you want to sell to us.</h4> <br>
        <div class="row">
            <br>
            <b style="color:white">{{walletAddress}} <span @click="getHashKey(walletAddress)" style="background-color:white;border-radius: 50px; padding-left:0.5rem; padding-right:0.5rem; color:brown; cursor: pointer;">Copy Address</span></b>
        </div> 
        <div class="mt-4">
            <center> 
                <img :src="'https://www.bitcoinqrcodemaker.com/api/?style='+walletCoinName+'&fiat=USD&amount='+walletDollarAmount+'&address='+walletAddress" height="150" width="150" />
                <h5 class="mt-4"><b>Important!: Only send to the address only once, if you need to send another, create a new trade.</b></h5>
                <button type="submit" name="submit" class="btn btn-success btn-block mt-3" @click="secondPhase()">Completed</button>
            </center>
        </div>  
    </div>
</template>

<script>
import Qrcode from 'v-qrcode/src/index'
import Api from '../views/Api';
import { onMounted } from 'vue';
export default{
    components: {Qrcode},
    props: ['walletAddress', 'walletCoinName', 'walletDollarAmount', 'walletCoinAmount', 'walletNetwork'],
    data(){
        return{
            qrCls: 'qrcode',
            // url: https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&fiat=USD&amount=100&address=369ADvD1AiNaYRghucpbReMy53rYmBo6ya,
            qrText: this.$store.state.addressInfo.address,
            background: '#FFF',
            currentPhase: 'SuccessPhase',
            hash_key: '43454543fdg',
        }
    },

    methods: {
        getHashKey(walletAddress){
            navigator.clipboard.writeText(walletAddress);
                this.$toast.success({
                title:'Welldone!',
                message:'Address Copied '
            })
        },
        secondPhase(){
            this.$emit('secondPhase', this.currentPhase)
        },
        
    }
}
</script>
