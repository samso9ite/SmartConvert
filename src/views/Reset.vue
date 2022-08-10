<template>

    <div id="">

        <div class="authincation section-padding">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-xl-5 col-md-6">
                        <div class="mini-logo text-center my-5">
                            <img src="images/m_logo.png" alt="">
                        </div>
                        <div class="auth-form card">
                            <div class="card-header justify-content-center">
                                <h4 class="card-title">Reset password</h4>
                            </div>
                            <div class="card-body">
                                <form action="https://demo.quixlab.com/elaenia-html/signin.html">
                                    <div class="mb-3">
                                        <label>Email</label>
                                        <input type="email" class="form-control" value="hello@example.com">
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-success btn-block">Reset</button>
                                    </div>
                                </form>
                                <div class="new-account mt-3">
                                    <p class="mb-1">Don't Received? </p>
                                    <a class="text-primary" href="reset.html">Resend </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
    export default{
        name: 'Reset',
        components: {}
    }
</script>