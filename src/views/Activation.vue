<template>
    <div id="">
        <div class="authincation section-padding" style=" 
          background: linear-gradient(to right, rgba(50, 70, 80, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/images/main_bg.jpg')  !important;
            background-repeat:no-repeat !important;
            object-fit: contain !important;
            background-size: cover !important; ">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-xl-5 col-md-6">
                        <div class="mini-logo text-center my-5">
                            <img src="../../public/assets/main_logo.png" alt="">
                        </div>
                        <div class="auth-form card">
                            <div class="card-header justify-content-center">
                                <h4 class="card-title">Account Activation</h4>
                            </div>
                                <div class="alert alert-danger fade in" v-if="errors.length">
                                    <p v-for="error in errors" :key="error">
                                       {{error}}
                                    </p>
                                </div>
                               
                           </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
import Api from './Api.js';
    export default {
        name: 'Activation',
        data(){
            return{
                display_message: false,
                errors: []
            }
        },
        methods: {
           async getReference(){
            let id = this.$route.params.id
            let reference = this.$route.params.reference
            const formData = {
                uid: id,
                token: reference
            }
           await Api.axios_instance.post(Api.baseUrl+'auth/users/activation/', formData,  {mode: 'no-cors'})
            .then(res => {
                this.display_message = true
               
                this.$router.push("/signin")
                this.$toast.success({
                        title:'Activation!',
                        message:'Account Activated. Please login.',
                        showDuration: 500,
                        timeOut: 4500,
                    })
            })
            .catch(error => {
                    if (error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${property}:${error.response.data[property]}`)
                        }
                        console.log(JSON.stringify(error.message));
                        } else if (error.message){
                            console.log(JSON.stringify(error.message));
                        } else{
                            console.log(JSON.stringify(error));
                        }
                    }
                )
            },
        },
        mounted(){
            this.getReference()
        }
    }
</script>