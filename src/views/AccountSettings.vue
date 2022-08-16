<template>
<div>
<SideBar />
        <div class="page_title">
            <!-- <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <div class="page_title-content">
                            <p>Welcome Back,
                                <span> Maria Pascle</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-6">
                        <ul class="text-end breadcrumbs list-unstyle">
                            <li><a href="settings.html">Settings </a></li>
                            <li class="active"><a href="#">Account</a></li>
                        </ul>
                    </div>
                </div>
            </div> -->
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
                                                <span>Linked Account</span>
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
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex">
                                                        <span class="me-3"><i class="fa fa-bank"></i></span>
                                                        <div class="flex-grow-1">
                                                            <h5 class="mt-0 mb-1">Bank of America</h5>
                                                            <p>Bank **************5421</p>
                                                        </div>
                                                        <div class="edit-option">
                                                            <a href="#"><i class="fa fa-eye"></i></a>
                                                            <a href="#"><i class="fa fa-pencil"></i></a>
                                                            <a href="#"><i class="fa fa-trash"></i></a>
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
                                        <li>
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex my-4">
                                                        <span class="me-3"><i class="fa fa-cc-mastercard"></i></span>
                                                        <div class="flex-grow-1">
                                                            <h5 class="mt-0 mb-1">Master Card</h5>
                                                            <p>Credit Card *********5478</p>
                                                        </div>
                                                        <div class="edit-option">
                                                            <a href="#"><i class="fa fa-eye"></i></a>
                                                            <a href="#"><i class="fa fa-pencil"></i></a>
                                                            <a href="#"><i class="fa fa-trash"></i></a>
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
                                        <!-- <li>
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex">
                                                        <span class="me-3"><i class="fa fa-credit-card"></i></span>
                                                        <div class="flex-grow-1">
                                                            <h5 class="mt-0 mb-1">Debit Card</h5>
                                                            <p>Prepaid Card *********5478</p>
                                                        </div>
                                                        <div class="edit-option">
                                                            <a href="#"><i class="fa fa-eye"></i></a>
                                                            <a href="#"><i class="fa fa-pencil"></i></a>
                                                            <a href="#"><i class="fa fa-trash"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="verify">
                                                        <div class="not-verify">
                                                            <span><i class="la la-close"></i></span>
                                                            <a href="#">Not verified</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li> -->
                                    </ul>

                                    <div class="mt-5">
                                       <div class="row">
                                         <form action="#">
                                                <div class="row">
                                                    <div class="mb-3 col-xl-4">
                                                        <label class="me-sm-2">Bank Account Number</label>
                                                        <input type="text" class="form-control" placeholder="Name">
                                                    </div>
                                                    <div class="mb-3 col-xl-4">
                                                        <label class="me-sm-2">Bank Name</label>
                                                        <input type="text" class="form-control" placeholder="Name">
                                                    </div>
                                                </div>
                                                </form>
                                       </div>
                                        <a class="btn btn-success px-4">Add Bank
                                            Account</a>
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
    export default{
        name: 'AccountSetting',
        components: {Footer, SideBar}
    }
</script>