<template>
    <div style="margin-top:-0.7rem">
        <center>
            <h2>Preview Order</h2>

            <h4>Please note that paying with an account name different from your registered name would render the order unprocessed </h4>
            <table class="table table-striped" style="font-size:14px; font-weight: 500; color: white;">
            <tbody>
            <tr>
                <td>Coin Amount</td>
                <td>{{coin_amount}} {{coin_name}}</td>
            </tr>
            <tr>
                <td>Dollar Value </td>
                <td>${{dollar_amount}}</td>
            </tr>
            <tr>
                <td>Naira Value </td>
                <td>₦{{naira_amount}}</td>
            </tr>
            <tr>
                <td>Account Number</td>
                <td>0124587202</td>
            </tr>
            <tr>
                <td>Account Name</td>
                <td>AWOLUSI DAMILOLA SOLOMON </td>
            </tr>
            <tr>
                <td>Bank</td>
                <td>GTBank</td>
            </tr>
            </tbody>
            </table>

            <button type="submit" @click="successPhase()" class="btn btn-success btn-block">Click After Payment</button>
        </center>
    </div>
</template>

<script>
export default({
    name: "buyPreviewPhase",
    props: ['coin_amount', 'naira_amount', 'dollar_amount', 'coin_name'],
    data(){
        return{
            currentPhase: 'SuccessPhase',
        }
    },
    methods: {
        successPhase(){
            console.log("This is here");
            this.$emit('successPhase', this.currentPhase)
        },
    }
})
</script>