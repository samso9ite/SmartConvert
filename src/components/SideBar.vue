<template>
    
<div>
    <div class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <nav class="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                        <a class="navbar-brand" href="index-2.html"><img src="images/w_logo.png" alt="">
                            <span>SmartConvert</span></a>


                        <div class="dashboard_log my-2">
                            <div class="d-flex align-items-center">
                                <div class="account_money">
                                    <ul>
                                        <li class="crypto">
                                            <span>0.0025</span>
                                            <i class="cc BTC-alt"></i>
                                        </li>
                                        <li class="usd">
                                            <span>19.93 USD</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="profile_log dropdown">
                                    <div class="user" data-toggle="dropdown">
                                        <span class="thumb"><i class="la la-user"></i></span>
                                        <span class="name">{{this.first_name}}</span>
                                        <span class="arrow"><i class="la la-angle-down"></i></span>
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="accounts.html" class="dropdown-item">
                                            <i class="la la-user"></i> Account
                                        </a>
                                        <a href="history.html" class="dropdown-item">
                                            <i class="la la-book"></i> History
                                        </a>
                                        <a href="settings.html" class="dropdown-item">
                                            <i class="la la-cog"></i> Setting
                                        </a>
                                        <a href="lock.html" class="dropdown-item">
                                            <i class="la la-lock"></i> Lock
                                        </a>
                                        <a href="signin.html" class="dropdown-item logout">
                                            <i class="la la-sign-out"></i> Logout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div class="sidebar">
        <div class="menu">
            <ul>
                <li>
                    <router-link :to="'/'">
                        <a  data-placement="right" title="Home">
                            <span><i class="la la-igloo"></i></span>
                        </a>
                    </router-link>
                </li>
                <li><router-link :to="''">
                        <a data-placement="right" title="Exchange">
                            <span><i class="la la-exchange-alt"></i></span>
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
                    <router-link :to="'/settings'">
                        <a data-toggle="tooltip" data-placement="right" title="Account">
                            <span><i class="la la-user"></i></span>
                        </a>
                    </router-link>
                </li>
                <li><a href="settings.html" data-toggle="tooltip" data-placement="right" title="Setting">
                        <span><i class="la la-tools"></i></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        data(){
            return{
                first_name: localStorage.getItem('first_name')
            }
        }
    }
</script>