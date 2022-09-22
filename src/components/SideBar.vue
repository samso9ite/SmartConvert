<template>   
<div>
    <div class="header" :class="{'mobileHeader':activeBar}">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <nav class="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                        <div class="row">
                            <div class="col-lg-12" style="font-size:24px; font-weight: 600; padding:0.5rem; color:white">
                                <router-link :to="'/'" class=""> 
                                    <span>SmartConvert </span>
                                </router-link>  <span style="padding-left:2rem" @click="toggleActive"><i class="las la-bars"></i> </span>


                            </div>
                            
                        </div>
                      

                        <div class="dashboard_log my-2">
                            <div class="d-flex align-items-center">
                         
                                <div class="profile_log dropdown" :class="{'mobileSideBar': activeBar}">
                                    <div class="user" data-toggle="dropdown">
                                        <span class="thumb"><i class="la la-user"></i></span>
                                        <span class="name">{{this.first_name}}</span>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </nav>
                    
                </div>
            </div>
        </div>
    </div>

    <div class="sidebar" :class="{'mobileSideBar': activeMobileSideBar}">
        <div class="menu">
            <ul>
                <li>
                    <router-link :to="'/'">
                        <a  data-placement="right" title="Home">
                            <span><i class="la la-igloo"></i></span>
                            Home
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/settings'">
                        <a data-toggle="tooltip" data-placement="right" title="Bank Account">
                            <span><i class="las la-university"></i></span>
                        </a>
                    </router-link>
                </li>
                <li><router-link :to="'/rates'">
                        <a data-placement="right" title="All Rates">
                            <span><i class="las la-stream"></i></span>
                            Rates
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link :to="'/transaction-history'">
                        <a data-toggle="tooltip" data-placement="right" title="Transaction History">
                            <span><i class="la la-history"></i></span>
                        </a>
                    </router-link>
                </li>
                 <li>
                    <router-link :to="''">
                        <a data-placement="right" title="Contact Us">
                            <span><i class="las la-phone-volume"></i></span>
                        </a>
                    </router-link>
                </li>

                <li style="margin-top:7px; margin-left:4px">
                        <a  data-toggle="tooltip" data-placement="right" title="Logout" @click="logout()">
                                <span><i class="las la-power-off"></i></span>
                        </a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import { computed } from 'vue';
    export default{
        data(){
            return{
                first_name: localStorage.getItem('first_name'),
                activeSideBar: false,
                toggleActiveDropdown: true
            }
        },
        methods: {
            logout(){
                sessionStorage.clear();
                window.localStorage.clear();
                this.$router.push({path:'/signin'})
            },
            toggleActive(){
                this.toggleActiveDropdown = !this.toggleActiveDropdown
            }
        },
        computed: {
            activeMobileSideBar: function (){
                if(this.toggleActiveDropdown){
                    if (screen.width < 800){
                        return this.activeSideBar = true
                    }else{
                        return this.activeSideBar = false
                    }  
                }
            },
            activeBar: function(){
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
    .mobileSideBar{
        display:none;
    }
    .mobileHeader{
        position: block;
    }
</style>