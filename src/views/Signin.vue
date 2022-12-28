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
                                <form method="post" name="myform" class="signin_validate" @submit.prevent="submitForm">
                                    <div class="mb-3">
                                        <label>Email</label>
                                        <input type="email" class="form-control" placeholder="" v-model="email">
                                            
                                    </div>
                                    <div class="mb-3">
                                        <label>Password</label>
                                        <input type="password" class="form-control" placeholder="Password"
                                            name="password" v-model="password">
                                    </div>
                                    <div class="row d-flex justify-content-between mt-4 mb-2">
                                        <div class="mb-3 mb-0">
                                            <a href="reset.html">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-success btn-block" style="background-color:rgb(122 21 61); border: none;" :disabled="loading">Sign in</button>
                                    </div>
                                </form>
                                <div class="new-account mt-3">
                                    <p>Don't have an account?  <a class="text-primary" ><router-link to="/signup" > Sign up </router-link></a></p>
                                </div>
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
                    const access = res.data.access
                    sessionStorage.setItem('access', access)
                    this.$router.push("/")
                })
                .catch(error => {
                    if (error.response){
                        this.$toast.error({
                        title:'Oops!',
                        message:'Incorrect Email or Password'
                })
                        console.log(error.data);
                        // for(const property in error.response.data){
                        //     this.errors.push(`${property}:${error.response.data[property]}`)
                        // }
                        // console.log(JSON.stringify(error.message));
                        // } else if (error.message){
                        //     console.log(JSON.stringify(error.message));
                        // } else{
                        //     console.log(JSON.stringify(error));
                        }
                    }
                )  
                .finally(() => {
                    this.loading = false
                })          
            },
        },
    }
</script>