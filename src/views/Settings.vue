<template>
    <div>
        <SideBar />
            <div class="page_title">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="page_title-content">
                                <p>Welcome Back,
                                    <span> Maria Pascle</span>
                                </p>
                            </div>
                        </div>
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
                                    <ul>
                                        <li class="nav-item">
                                            <a href="settings.html" class="nav-link active">
                                                <i class="la la-user"></i>
                                                <span>Edit Profile</span>
                                            </a>
                                        </li>
                                
                                        <li class="nav-item">
                                            <a href="settings-security.html" class="nav-link">
                                                <i class="la la-lock"></i>
                                                <span>Change Password</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="settings-account.html" class="nav-link">
                                                <i class="la la-university"></i>
                                                <span>Linked Account</span>
                                            </a>
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
                                            <form action="#">
                                                <div class="row">
                                                    <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">Your Name</label>
                                                        <input type="text" class="form-control" placeholder="Name">
                                                    </div>
                                                    <div class="mb-3 col-xl-12">
                                                        <div class="d-flex align-items-center mb-3">
                                                            <img class="me-3 rounded-circle me-0 me-sm-3"
                                                                src="images/profile/2.png" width="55" height="55" alt="">
                                                            <div class="flex-grow-1">
                                                                <h4 class="mb-0">John Doe</h4>
                                                                <p class="mb-0">Max file size is 20mb
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="file-upload-wrapper" data-text="Change Photo">
                                                            <input name="file-upload-field" type="file"
                                                                class="file-upload-field" value="">
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <button class="btn btn-success waves-effect">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">User Profile</h4>
                                        </div>
                                        <div class="card-body">
                                            <form action="#">
                                                <div class="row">
                                                    <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">New Email</label>
                                                        <input type="email" class="form-control" placeholder="Email">
                                                    </div>
                                                    <div class="mb-3 col-xl-12">
                                                        <label class="me-sm-2">New Password</label>
                                                        <input type="password" class="form-control"
                                                            placeholder="**********">
                                                        <p class="mt-2 mb-0">Enable two factor authencation on the security
                                                            page
                                                        </p>
                                                    </div>
                                                    <div class="col-12">
                                                        <button class="btn btn-success waves-effect">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">Personal Information</h4>
                                        </div>
                                        <div class="card-body">
                                            <form method="post" name="myform" class="personal_validate">
                                                <div class="row">
                                                    <div class="mb-3 col-xl-6">
                                                        <label class="me-sm-2">Your Name</label>
                                                        <input type="text" class="form-control" placeholder="Maria Pascle"
                                                            name="fullname">
                                                    </div>
                                                    <div class="mb-3 col-xl-6">
                                                        <label class="me-sm-2">Email</label>
                                                        <input type="email" class="form-control"
                                                            placeholder="Hello@example.com" name="email">
                                                    </div>
                                                    <div class="mb-3 col-xl-6">
                                                        <label class="me-sm-2">Date of birth</label>
                                                        <input type="text" class="form-control" placeholder="" id="datepicker" autocomplete="off" name="dob">
                                                    </div>
                                                    <div class="mb-3 col-xl-6">
                                                        <label class="me-sm-2">Present Address</label>
                                                        <input type="text" class="form-control"
                                                            placeholder="56, Old Street, Brooklyn" name="presentaddress">
                                                    </div>
                                                    <div class="mb-3 col-xl-6">
                                                        <label class="me-sm-2">Permanent Address</label>
                                                        <input type="text" class="form-control"
                                                            placeholder="123, Central Square, Brooklyn"
                                                            name="permanentaddress">
                                                    </div>
                                                    <div class="mb-3 col-xl-6">
                                                        <label class="me-sm-2">City</label>
                                                        <input type="text" class="form-control" placeholder="New York"
                                                            name="city">
                                                    </div>
                                                    <div class="mb-3 col-xl-6">
                                                        <label class="me-sm-2">Postal Code</label>
                                                        <input type="text" class="form-control" placeholder="25481"
                                                            name="postal">
                                                    </div>
                                                    <div class="mb-3 col-xl-6">
                                                        <label class="me-sm-2">Country</label>
                                                       
                                                    </div>

                                                    <div class="mb-3 col-12">
                                                        <button class="btn btn-success ps-5 pe-5">Save</button>
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
export default {
    name: 'Settings',
    components: {SideBar, Footer}
}
</script>