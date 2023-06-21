<template>
    <div>
        <SideBar />
            <div class="page_title">
                <div class="container-fluid">
                    <div class="row">
                        
                    </div>
                </div>
            </div>

            <div class="content-body" :class="{'mobileStyle': showMobileStyle}">
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
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">User Profile</h4>
                                        </div>
                                        <div class="card-body">
                                            <form @submit.prevent="updateAccountDetails">
                                                <div class="row">
                                                    <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2"> First Name</label>
                                                        <input type="text" class="form-control" v-model="first_name" readonly>
                                                    </div>
                                                      <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">Last Name</label>
                                                        <input type="text" class="form-control" v-model="last_name" readonly>
                                                    </div>
                                                    <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">Email</label>
                                                        <input type="text" class="form-control" v-model="email" readonly>
                                                    </div>
                                                    <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">Phone Number</label>
                                                        <input type="text" class="form-control" v-model="phone_number" readonly>
                                                    </div><br>
                                                   <center> <h4>Other Info</h4></center>
                                                     <div class="mb-3 col-xl-12">
                                                        <input type="text" placeholder="Input Address" class="form-control" v-model="address" >
                                                    </div>
                                                    <div class="mb-3 col-xl-12">
                                                        <input type="text" placeholder="Input City" class="form-control" v-model="city" >
                                                    </div>
                                                    <div class="mb-3 col-xl-12">
                                                        <input type="text" placeholder="Input State" class="form-control" v-model="state" >
                                                    </div>
                                                    <div class="mb-3 col-xl-12">
                                                        <input type="text" class="form-control" placeholder="Input Nationality" v-model="nationality" >
                                                    </div>
                                                   
                                                    <div class="col-12">
                                                        <button class="btn btn-success waves-effect">Update Profile</button>
                                                    </div>

                                                    <div class="mb-3 col-xl-12">
                                                      </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">Change Password</h4>
                                        </div>
                                        <div class="card-body">
                                            <form @submit.prevent="changePassword">
                                                <div class="row">
                                                    <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">Current Password</label>
                                                        <input type="password" class="form-control" v-model="current_password">
                                                    </div>
                                                    <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">New Password</label>
                                                        <input type="password" class="form-control"
                                                            placeholder="**********" v-model="new_password">
                                                    </div>
                                                     <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">Confirm New Password</label>
                                                        <input type="password" class="form-control"
                                                            placeholder="**********" v-model="confirm_new_password">
                                                    </div>
                                                    <div class="col-12">
                                                        <button class="btn btn-success waves-effect">Save</button>
                                                    </div>
                                                </div>
                                            </form>
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
import Api from './Api.js';
export default {
    name: 'Settings',
    components: {SideBar, Footer},
    data(){
        return{
            first_name: '',
            last_name: '',
            address: '',
            phone_number: '',
            address: '',
            email: '',
            current_password: '',
            new_password: '',
            confirm_new_password: '',
            city: '',
            nationality: '',
            state: '',
            showMobileStyle: false
        }
    },
    methods: {
        getUser(){
                Api.axios_instance.get(Api.baseUrl+'api/v1/user_data')
                .then(response => {
                    this.first_name = response.data.first_name  
                    this.last_name = response.data.last_name  
                    this.phone_number = response.data.phone_number 
                    this.address = response.data.address  
                    this.email = response.data.email  
                    this.city = response.data.city
                    this.nationality = response.data.nationality
                    this.state = response.data.state
                })
        },
        updateAccountDetails(){
            let formData = {
                nationality: this.nationality,
                state: this.state,
                address: this.address,
                city: this.city
            }
            Api.axios_instance.patch(Api.baseUrl+'api/v1/profile/update', formData)
            .then(response => {
                this.$toast.success({
                    title:'Welldone!',
                    message:'Account Updated Successfully '
                })
                this.getUser()
            })
            .catch(error => {
                console.log(error.data);
            })
        },
        changePassword(){
            let formData = {
                new_password: this.new_password,
                re_new_password: this.confirm_new_password,
                current_password: this.current_password
            }
            Api.axios_instance.post(Api.baseUrl+'auth/users/set_password/', formData)
            .then(response => {
                this.$toast.success({
                        title:'Welldone!',
                        message:'Password Changed Successfully '
                })
            })
            .catch(error => {
                console.log(error.data);
            })
        },
        screenSize(){
            if(screen.width < 800){
                this.showMobileStyle = true
            }
            }
    },
    mounted(){
        this.getUser()
        this.screenSize()
    }
}
</script>