<template>
<div>
    <SideBar />
        <div class="page_title">
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
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-md-8">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Verified Bank Account</h4>
                            </div>
                            <div class="card-body">
                                <div class="form">
                                    <ul class="linked_account">
                                        <li>
                                            <div class="row" v-for="account in savedAccounts" :key="account">
                                                <div class="col-9" >
                                                    <div class="d-flex">
                                                        <span class="me-3"><i class="fa fa-bank"></i></span>
                                                        <div class="flex-grow-1">
                                                            <h5 class="mt-0 mb-1">{{account.account_name}}</h5>
                                                            <p style="font-size:19px">{{account.account_number}} {{account.bank_name}}</p>
                                                        </div>
                                                        <div class="edit-option" @click="deleteBankAccount(account.id)" style="cursor:pointer">
                                                            <a ><i class="fa fa-trash"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="verify">
                                                        <div class="verified">
                                                            <span><i class="la la-check"></i></span>
                                                            <a href="#">Verified</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="mt-5">
                                       <div class="row">
                                            <form @submit.prevent="verifyAccount">
                                                <div class="row">
                                                    <h5>Ensure your bank account name is the same as your registered name.<br><b> Payment wouldn't be made to third party account.</b></h5>
                                                    <div class="mb-3 col-xl-4">
                                                        <label class="me-sm-2">Bank Name</label>
                                                        <select class="form-control" v-model="bank_details">
                                                            <option value="">Select</option>
                                                            <option v-for="bank in all_banks" :key="bank" :value="[{bank_code:bank.code, bank_name:bank.name}]">{{bank.name}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="mb-3 col-xl-4">
                                                        <label class="me-sm-2">Bank Account Number</label>
                                                        <input type="text" class="form-control" v-model="account_number">
                                                    </div>
                                                </div>

                                                <div v-if="account_name">
                                                    <h4>Account Name: {{account_name}}</h4>
                                                </div>
                                                <button class="btn btn-success px-4" type="submit">Verify / Add Bank Account</button>
                                            </form>
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
import Api from './Api.js';
import axios from 'axios';
    export default{
        name: 'AccountSetting',
        components: {Footer, SideBar},
        data(){
            return{
                all_banks: '',
                bank_details: [],
                bank_code: '',
                account_number: '',
                account_name: '',
                bank_name: '',
                savedAccounts: [],
                showMobileStyle: false
            }
        },
        methods: {
           getAllBanks(){
            Api.axios_instance.get('https://api.paystack.co/bank')
                .then(response => {
                   this.all_banks = response.data.data
                })
                .catch(error => {
                    console.log(error.data);
                })
           },
           getSavedAccounts(){
              Api.axios_instance.get(Api.baseUrl+'api/v1/list-bank')
              .then(response => {
                this.savedAccounts = response.data
              })  
           },
           async verifyAccount(){   
            this.bank_code = this.bank_details[0].bank_code
            this.bank_name = this.bank_details[0].bank_name
            // let token = process.env.VUE_APP_NOT_SECRET_KEY
            let token = 'sk_live_8897fa0d728dd8a313165ba6c18c3b67c1bc0fca'
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            await axios.get('https://api.paystack.co/bank/resolve?account_number='+this.account_number+'&bank_code='+this.bank_code, {
                }) 
                .then(response => {
                    this.account_name = response.data.data.account_name
                    this.account_number = response.data.data.account_number
                   })
                .catch(() => {
                    this.$toast.error({
                    title:'Oops!',
                    message:'Bank Details Incorrect'
                    })
                })
                const bankData = {
                    account_name: this.account_name,
                    account_number: this.account_number,
                    bank_code: this.bank_code,
                    bank_name: this.bank_name
                }
            await Api.axios_instance.post(Api.baseUrl+'api/v1/add-bank', bankData) 
                .then(response => {
                    this.$toast.success({
                    title:'Welldone!',
                    message:'Bank Details Added'
                    })
                    this.account_name = ""
                    this.account_number = ""
                    this.getSavedAccounts()
                    } 
                )
                .catch(error => {
                    console.log(error);
                })
           },
           deleteBankAccount(id){
                Api.axios_instance.delete(Api.baseUrl+'api/v1/delete-bank/'+id) 
                .then(response => {
                    this.$toast.success({
                    title:'Welldone!',
                    message:'Bank Account Deleted'
                    })
                    this.getSavedAccounts()
                })
           },
           screenSize(){
            if(screen.width < 800){
                console.log("Mobile Size")
                this.showMobileStyle = true
            }
            }
        },
        mounted(){
            this.getAllBanks()
            this.getSavedAccounts()
            this.screenSize()
        }
    }
</script>

