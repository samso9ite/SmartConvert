<template>
    <div style="margin-top:-0.7rem">
        <h5>Please transfer the 25 Bitcoin($4379.9) you want to sell to:</h5> <br>
        <div class="row">
            <b style="color:white">1NNVg8xaud1UYvmmGNZPSEnKYQEWwFd5S8 <span @click="getHashKey()" style="background-color:white;border-radius: 50px; padding-left:0.5rem; padding-right:0.5rem; color:brown; cursor: pointer;">Copy</span></b>
        </div> 
        <div class="mt-4">
            <center> 
                <!-- <qrcode :background="background" :size="250" :cls="qrCls" :value="qrText"></qrcode>  -->
                <img src="https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&fiat=USD&amount=100&address=1NNVg8xaud1UYvmmGNZPSEnKYQEWwFd5S8" height="150" width="150" />
                <h5 class="mt-4"><b>Important!: Only send to the address only once, if you need to send another, create a new trade.</b></h5>
                <button type="submit" name="submit" class="btn btn-success btn-block mt-3" @click="secondPhase()">Completed</button>
            </center>
        </div>  
    </div>
</template>

<script>
import Qrcode from 'v-qrcode/src/index'
export default{
    components: {Qrcode},
    data(){
        return{
            qrCls: 'qrcode',
            qrText: '1NNVg8xaud1UYvmmGNZPSEnKYQEWwFd5S8',
            background: '#FFF',
            currentPhase: 'SuccessPhase',
            hash_key: '43454543fdg'
        }
    },

    methods: {
        getHashKey(){
            navigator.clipboard.writeText(this.hash_key);
                this.$toast.success({
                title:'Welldone!',
                message:'Hash Copied '
            })
        },
        secondPhase(){
				this.$emit('secondPhase', this.currentPhase)
                console.log("This Emmitted");
			},
        }
}
</script>
