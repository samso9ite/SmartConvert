<template>
    <div class="currency_validate" style="margin-top:-0.7rem">
        <div class="mb-3">
            <label class="me-sm-2">Coin Type</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text"><i class="cc BTC-alt"></i></label>
                </div>
                <select class="form-control" v-model="coin_type">
                    <option value="">Select</option>
                    <option value="Perfect Money">Perfect Money</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="litecoin">Litecoin</option>
                    <option value="USDT">USDT</option>
                </select>
            </div>
        </div>

        <div class="mb-3">
            <label class="me-sm-2">Payment Method</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text"><i class="fa fa-bank"></i></label>
                </div>
                <select class="form-control" v-model="bank">
                    <option value="">Select</option>
                    <option value="bank">Bank of America ********45845</option>
                    <option value="master">Master Card ***********5458</option>
                </select>
            </div>
        </div>

        <div class="mb-3" v-if="coin_type === 'coin_type'">
            <label class="me-sm-2">Enter your amount</label>
            <div class="input-group">
                <input type="text" name="currency_amount" class="form-control"
                    placeholder="Amount in USD">
                <input type="text"  class="form-control"
                    placeholder="Naira Value">
            </div>
            <div class="input-group mt-2">
                <input type="text" v-model="naira_value" class="form-control"
                    placeholder="Naira Value">
            </div>
            <div class="d-flex justify-content-between mt-3">
                <p class="mb-0">Minimum Limit</p>
                <h6 class="mb-0">N20,9750 </h6>
            </div>
            
        </div>
        <div class="mb-3" v-else>
            <label class="me-sm-2">Enter your amount</label>
            <div class="input-group">
                <input type="text" name="currency_amount" class="form-control"
                    placeholder="Amount in BTC">
                <input type="text"  class="form-control"
                    placeholder="Amount in USD">
            </div>
            <div class="input-group mt-2">
                <input type="text" v-model="naira_value" class="form-control"
                    placeholder="Naira Value">
            </div>
            <div class="d-flex justify-content-between mt-3">
                <p class="mb-0">Minimum Limit</p>
                <h6 class="mb-0">N20,9750 </h6>
            </div>
            
        </div>
        <button type="submit" @click="firstPhase()" class="btn btn-success btn-block">Proceed</button>
    </div>
</template>

<script>
    export default{
        name: 'SellFirstPhase',
        data(){
            return{
                naira_value: '',
                currentPhase: 'SellSecondPhase',
                coin_type: '',
                bank: ''
            }
        },
        methods: {
            firstPhase(){
				this.$emit('firstPhase', this.currentPhase)
                console.log("This Emmitted");
			},
        }
    }
</script>