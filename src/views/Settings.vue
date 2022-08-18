<template>
    <div>
        <SideBar />
            <div class="page_title">
                <div class="container-fluid">
                    <div class="row">
                        
                    </div>
                </div>
            </div>

            <div class="content-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-3 col-md-4">
                            <div class="card settings_menu">
                                <div class="card-header">
                                    <h4 class="card-title">Settings</h4>
                                </div>
                                <div class="card-body">
                                    <ul style="color:white">
                                        <li class="nav-item">
                                            <router-link :to="'/settings'">
                                                <a  class="nav-link active" style="color:white">
                                                    <i class="la la-user"  ></i>
                                                    <span> Edit Profile</span>
                                                </a>
                                            </router-link>
                                        </li>
                                
                                        <li class="nav-item">
                                            <router-link :to="'/account-settings'">
                                                <a class="nav-link" style="color:white">
                                                    <i class="la la-university"></i>
                                                    <span >Bank Accounts</span>
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
                                                        <input type="text" class="form-control" v-model="first_name" >
                                                    </div>
                                                      <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">Last Name</label>
                                                        <input type="text" class="form-control" v-model="last_name" >
                                                    </div>
                                                    <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">Email</label>
                                                        <input type="text" class="form-control" v-model="email" >
                                                    </div>
                                                    <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">Phone Number</label>
                                                        <input type="text" class="form-control" v-model="phone_number" >
                                                    </div>
                                                     <!-- <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">Address</label>
                                                        <input type="text" class="form-control" v-model="address" >
                                                    </div> -->
                                                    <div class="mb-3 col-xl-12">
                                                        <!-- <div class="file-upload-wrapper" data-text="Change Photo">
                                                            <input name="file-upload-field" type="file"
                                                                class="file-upload-field" value="">
                                                        </div> -->
                                                    </div>
                                                    <!-- <div class="col-12">
                                                        <button type="submit" class="btn btn-success waves-effect">Update</button>
                                                    </div> -->
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
            confirm_new_password: ''
        }
    },
    methods: {
        getUser(){
                Api.axios_instance.get(Api.baseUrl+'api/v1/user_data')
                .then(response => {
                    console.log(response.data);
                    this.first_name = response.data.first_name  
                    this.last_name = response.data.last_name  
                    this.phone_number = response.data.phone_number 
                    this.address = response.data.address  
                    this.email = response.data.email  
                })
        },
        updateAccountDetails(){
            let formData = {
                first_name: this.first_name,
                last_name: this.last_name,
                address: this.address
            }
            console.log(formData);
            Api.axios_instance.put(Api.baseUrl+'api/v1/profile/update', formData)
            .then(response => {
                this.$toast.success({
                        title:'Welldone!',
                        message:'Account Updated Successfully '
                })
                // this.getUser()
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
        }
    },
    mounted(){
        this.getUser()
    }
}
</script>