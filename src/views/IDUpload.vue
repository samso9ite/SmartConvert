<template>
        <div class="verification section-padding">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-xl-5 col-md-6">
                        <div class="auth-form card">
                            <!-- <div class="card-header">
                                <h4 class="card-title">Link a Debit card</h4>
                            </div> -->
                            <div class="card-body">
                                <form action="https://demo.quixlab.com/elaenia-html/verify-step-3.html" class="identity-upload">
                                    <span class="icon"><i class="fa fa-shield"></i></span>
                                    <div class="identity-content">
                                        <h4>Upload your ID card</h4>
                                        <span>(Driving License or Government ID card)</span>

                                        <p>Uploading your ID helps as ensure the safety and security of your founds</p>
                                    </div>

                                    <div class="mb-3">
                                        <label class="me-sm-2">Upload Front ID </label>
                                        <span class="float-right">Maximum file size is 2mb</span>
                                        <div class="file-upload-wrapper" data-text="front.html">
                                            <input name="file-upload-field" type="file" class="file-upload-field"
                                                value="">
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="me-sm-2">Upload Back ID </label>
                                        <span class="float-right">Maximum file size is 2mb</span>
                                        <div class="file-upload-wrapper" data-text="back.html">
                                            <input name="file-upload-field" type="file" class="file-upload-field"
                                                value="">
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <button type="submit" class="btn btn-success ps-5 pe-5">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: IDUpload
    }
</script>