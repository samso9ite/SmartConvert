<template>
    <div class="footer" :class="{'mobileFooter':activeMobileFooter}">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-md-6">
                    <div class="copy_right">
                        2023 Copyright © SmartConvert.
                    
                    </div>
                </div>
                <div class="col-xl-6 col-md-6 text-lg-right text-center">
                    <div class="social">
                        <a href="https://www.instagram.com/smart_convert/"><i class="fa fa-instagram"></i></a>
                        <a href="https://twitter.com/smart_convert"><i class="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeSideBar: false
        }
    },

    computed: {
        activeMobileFooter: function (){
            if (screen.width < 800){
                return this.activeSideBar = true
            }else{
                return this.activeSideBar = false
            }
        }
    }

}
</script>

<style>
    .mobileFooter{
        position: none !important;
    }
</style>
