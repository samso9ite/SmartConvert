<template>
    <div>
    <SideBar />
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 col-md-4">
                        <div class="card settings_menu">
                            <div class="card-header">
                                <h4 class="card-title">Settings</h4>
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li class="nav-item">
                                       <router-link :to="'/settings'">
                                            <a class="nav-link" style="color:white">
                                                <i class="la la-user"></i>
                                                <span>Edit Profile</span>
                                            </a>
                                        </router-link>
                                    </li>
                                  
                                    <li class="nav-item">
                                        <router-link :to="'/account-settings'">
                                            <a class="nav-link active" style="color:white">
                                                <i class="la la-university"></i>
                                                <span>Bank Accounts</span>
                                            </a>
                                        </router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link :to="'/account-verification'">
                                            <a class="nav-link active" style="color:white">
                                                <i class="las la-user-check"></i>
                                                <span>Account Verification</span>
                                            </a>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div class="col-xl-9 col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Security</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="phone_verify">
                                        <h4 class="card-title mb-3">Email Address</h4>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="phone_verified">
                                        <h5> <span><i class="fa fa-envelope"></i></span> <a href="" class="__cf_email__" data-cfemail="8fe7eae3e3e0cfeaf7eee2ffe3eaa1ece0e2">[{{email}}]</a></h5>
                                        <div class="verify">
                                            <div class="verified">
                                                <span><i class="la la-check"></i></span>
                                                <a href="#">Verified</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="phone_verify">
                                        <h4 class="card-title mb-3"> Phone Number</h4>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="phone_verified">
                                        <h5> <span><i class="fa fa-phone"></i></span> {{phone}}</h5>
                                        <div class="verify">
                                            <div class="verified">
                                                <span><i class="la la-check"></i></span>
                                                <a href="#">Verified</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr>
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="phone_verify">
                                        <h4 class="card-title mb-3"> ID</h4>
                                    </div>
                                </div>
                                <div class="row align-items-center">
                                    <div class="col-xl-4">
                                        <div class="id_card">
                                            <img src="../../public/assets/images/id.png" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="id_info">
                                            <h3>{{f_name}} {{l_name}} </h3>
                                            <p class="mb-1">Status: <span class="font-weight-bold">
                                                <span v-if="status === '1'">UNVERIFIED</span>
                                                <span v-if="status === '2'">VERIFIED</span>
                                                <span v-if="status === '3'">AWAITING CONFIRMATION</span>
                                            </span></p>
                                           <router-link :to="'/upload-id'" v-if="status=== '1'"> <a class="btn btn-success mt-3">Upload ID</a> </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
    
</template>

<script>
    import SideBar from '../components/SideBar.vue'
    import Footer from '../components/Footer.vue'
    import Api from './Api.js'

    export default{
        name:"Verification",
        components: {Footer, SideBar},
        data(){
            return{
                status:"",
                f_name: "",
                l_name: "",
                email: '',
                phone: ''
            }
        },

        methods: {
            getUserVerificationStatus(){
                let user_id = localStorage.getItem('id')
                Api.axios_instance.get(Api.baseUrl+'api/v1/profile/get/'+user_id)
                .then(res =>{
                    this.status = res.data.transaction_status
                    this.f_name = res.data.user.first_name
                    this.l_name = res.data.user.lasst_name
                    this.email = res.data.user.email
                    this.phone = res.data.user.phone
                    console.log(res.data);
                }
                )   
            },   
        },
        mounted() {
            this.getUserVerificationStatus()
        },
    }
</script>