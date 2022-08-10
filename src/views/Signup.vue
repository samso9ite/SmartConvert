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
                                <h4 class="card-title">Sign up your account</h4>
                            </div>
                            <div class="card-body">
                               <div class="alert alert-danger fade in" v-if="errors.length">
                                    <p v-for="error in errors" :key="error">
                                       {{error}}
                                    </p>
                                </div>
                                <form method="post" name="myform" class="signup_validate" @submit.prevent="submitForm">
                                    <div class="mb-3">
                                        <label>Email</label>
                                        <input type="email" class="form-control" placeholder="hello@example.com"
                                            name="email" v-model="email">
                                    </div>
                                    <div class="mb-3">
                                        <label>Mobile Number</label>
                                        <input type="test" class="form-control" placeholder="Mobile Number"  v-model="mobile_number">
                                    </div>
                                    <div class="mb-3">
                                        <label>First Name</label>
                                        <input type="text" class="form-control" placeholder="First Name" v-model="first_name">
                                    </div>
                                    <div class="mb-3">
                                        <label>Last Name</label>
                                        <input type="text" class="form-control" placeholder="Last Name" v-model="last_name">
                                    </div>
                                    <div class="mb-3">
                                        <label>Password</label>
                                        <input type="password" class="form-control" placeholder="Password"
                                            name="password" v-model="password">
                                    </div>
                                    <div class="text-center mt-4">
                                        <button type="submit" class="btn btn-success btn-block" :disabled="loading" style="background-color:rgb(122 21 61); border: none;" :disbled="loading">Sign up</button>
                                    </div>
                                </form>
                                <div class="new-account mt-3">
                                    <p>Already have an account? <a class="text-primary"> <router-link to="/signin"> Sign in </router-link></a>
                                    </p>
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
import Api from './Api.js'
    export default{
        name: 'Signup',
        data(){
            return{
                email: '',
                mobile_number: '',
                first_name: '',
                last_name:'',
                errors: [],
                password:'',
                loading: false
            }
        },

        methods: {
            async submitForm(e){
                console.log(this.mobile_number);
                const formData = {
                    password : this.password,
                    re_password: this.password,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    phone_number: this.mobile_number,
                    email : this.email
                }
                this.loading = true
                await   Api.axios_instance.post(Api.baseUrl+'auth/users/', formData,  {mode: 'no-cors'})
                .then(res => {
                    console.log(res.data);
                    this.$toast.success({
                        title:'Welldone!',
                        message:'Account Created Successfully '
                    })
                    this.$router.push('/signin')
                })
                .catch(error => {
                    if (error.response){
                        for (const property in error.response.data){
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                        console.log(JSON.stringify(error.response.data));
                        } else if (error.message){
                            console.log(JSON.stringify(error.message));
                        } else{
                            console.log(JSON.stringify(error));
                        }
                })
                .finally(() => {
                    this.loading = true
                })
            }
        }
    }
</script> 