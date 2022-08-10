
<template>

    <div id="">
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
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="card profile_card">
                            <div class="card-body">
                                <div class="d-flex">
                                    <img class="me-3 rounded-circle me-0 me-sm-3" src="images/profile/2.png" width="60"
                                        height="60" alt="">
                                    <div class="flex-grow-1">
                                        <span>Hello</span>
                                        <h4 class="mb-2">Maria Pascle</h4>
                                        <p class="mb-1"> <span><i class="fa fa-phone me-2 text-primary"></i></span> +1
                                            235 5547</p>
                                        <p class="mb-1"> <span><i class="fa fa-envelope me-2 text-primary"></i></span>
                                            <a href="https://demo.quixlab.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ff979a939390bf9a879e928f939ad19c9092">[email&#160;protected]</a>
                                        </p>
                                    </div>
                                </div>

                                <ul class="card-profile__info">
                                    <li>
                                        <h5 class="me-4">Address</h5>
                                        <span class="text-muted">House 14, Road 9, Gulshan, Dhaka</span>
                                    </li>
                                   
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header border-0">
                                <h4 class="card-title">Recent Transactions</h4>
                            </div>
                            <div class="card-body pt-0">
                                <div class="transaction-table">
                                    <div class="table-responsive">
                                        <table class="table mb-0 table-responsive-sm">
                                            <tbody>
                                                <tr>
                                                    <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                                    </td>

                                                    <td>
                                                        <span class="badge badge-danger">Sold</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc BTC"></i> BTC
                                                    </td>
                                                    <td>
                                                        Using - Bank *******5264
                                                    </td>
                                                    <td class="text-danger">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-success">Buy</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc LTC"></i> LTC
                                                    </td>
                                                    <td>
                                                        Using - Card *******8475
                                                    </td>
                                                    <td class="text-success">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-danger">Sold</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc XRP"></i> XRP
                                                    </td>
                                                    <td>
                                                        Using - Card *******8475
                                                    </td>
                                                    <td class="text-danger">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-success">Buy</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc DASH"></i> DASH
                                                    </td>
                                                    <td>
                                                        Using - Card *******2321
                                                    </td>
                                                    <td class="text-success">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                                <tr>
                                                    <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-danger">Sold</span>
                                                    </td>
                                                    <td>
                                                        <i class="cc BTC"></i> BTC
                                                    </td>
                                                    <td>
                                                        Using - Card *******2321
                                                    </td>
                                                    <td class="text-danger">-0.000242 BTC</td>
                                                    <td>-0.125 USD</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-md-6">
                        <div class="copy_right">
                            Copyright ©
                            <!-- <script>
                                var CurrentYear = new Date().getFullYear()
                                document.write(CurrentYear)
                            </script> Quixlab. All Rights Reserved. -->
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 text-lg-right text-center">
                        <div class="social">
                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
 export default{
    name: 'Account',
    components: {SideBar}
 }
</script>