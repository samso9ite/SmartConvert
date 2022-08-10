   <template>
   <div id="">
        <SideBar />
        <div class="verification section-padding mb-80">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center  my-5">
                    <div class="col-xl-5 col-md-6">
                        <div class="auth-form card">
                            <div class="card-header">
                                <h4 class="card-title">Link a bank account</h4>
                            </div>
                            <div class="card-body">
                                <form action="https://demo.quixlab.com/elaenia-html/verify-step-6.html" class="identity-upload">
                                    <div class="row">
                                        <div class="mb-3 col-xl-12">
                                            <label class="me-sm-2">Account Name </label>
                                            <input type="text" class="form-control" placeholder="25487">
                                        </div>
                                        <div class="mb-3 col-xl-12">
                                            <label class="me-sm-2">Account Number </label>
                                            <input type="text" class="form-control" placeholder="36475">
                                        </div>
                                        <div class="mb-3 col-xl-12">
                                            <label class="me-sm-2">Bank  Name </label>
                                            <input type="text" class="form-control" placeholder="Maria Pascle">
                                        </div>
                                       

                                        <div class="text-center col-12">
                                            <a href="verify-step-5.html" class="btn btn-primary mx-2">Back</a>
                                            <button type="submit" class="btn btn-success mx-2">Verify </button>
                                        </div>
                                    </div>
                                </form>
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
        name: 'AddBank',
        components: {SideBar, Footer}
    }
</script>