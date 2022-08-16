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
                                <h4 class="card-title">Sign in</h4>
                            </div>
                             <div class="alert alert-danger fade in" v-if="errors.length">
                                    <p v-for="error in errors" :key="error">
                                       {{error}}
                                    </p>
                                </div>
                            <div class="card-body">
                               <vue-otp-2
                                    length="6"
                                    join-character="-"
                                    inputmode="numeric"
                                    pattern="[0-9]*"
                                    @onChange="console.log"
                                    @onComplete="console.log" 
                                    />
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
        name: 'Signin',
        data(){
            return{
                email: '',
                password: '',
                errors: [],
                loading: false
            }
        },
        methods: {
            async submitForm(){
                const formData = {
                    email: this.email,
                    password: this.password
                }
                this.loading = true
                await   Api.axios_instance.post(Api.baseUrl+'auth/jwt/create/', formData,  {mode: 'no-cors'})
                .then(res => {
                    console.log(res.data);
                    const access = res.data.access
                    sessionStorage.setItem('access', access)
                    this.$router.push("/dashboard")
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
                .finally(() => {
                    this.loading = false
                })          
            },
            getUserProfile(){
                Api.axios_instance.get(Api.baseUrl+'api/v1/user_data',  {mode: 'no-cors'})
                .then(response => {
                    console.log(response.data);
                    const first_name = response.data.first_name
                    const last_name = response.data.last_name
                    const email = response.data.email
                    const phone_number = response.data.phone_number
                    sessionStorage.setItem("first_name", first_name)
                    sessionStorage.setItem("last_name", last_name)
                    sessionStorage.setItem("email", email)
                    sessionStorage.setItem("phone", phone_number)
                })
            }
        },
    }
</script>

<style scoped>
.vue-otp-2 {
  display: flex;
  justify-content: space-between;
}
.vue-otp-2 div input{max-width:50px !important;}
</style>