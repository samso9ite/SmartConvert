<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showMobileStyle: false
    }
  },

  methods: {
    screenSize(){
      if(screen.width < 800){
          console.log("Mobile Size")
          this.showMobileStyle = true
      }
      }
  },

  mounted() {
    this.screenSize()
  }
}
</script>


<style>
   .mobileStyle{
        margin-left:0px !important; 
        width:100% !important;
        margin-top: 0% !important;
        margin-bottom: 0% !important;
    }
</style>