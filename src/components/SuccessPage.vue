<template>
    <div style="margin-top:-0.7rem">
        <center> <img src="../../public/assets/images/thumbs-up.png" width="50%"/> 
        <h4>Thanks for initiating the trade we will confirm the transaction and get back to you </h4><br>
          <button type="submit" @click="successPhase()" class="btn btn-success btn-block">New Trade</button>
          </center>
    </div>
</template>

<script>
export default({
    name: "successPage",
    data(){
        return{
            currentPhase: 'SellFirstPhase',
        }
    },
    methods: {
        successPhase(){
            this.$emit('successPhase', this.currentPhase)
        },
    }
})
</script>