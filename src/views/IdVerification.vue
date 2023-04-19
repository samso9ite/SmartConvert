<template>
    <div>
        <SideBar />
        <div class="verification section-padding">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-xl-5 col-md-6">
                        <div class="auth-form card">
                            <div class="card-body">
                                <form class="identity-upload" @submit.prevent="uploadId">
                                   
                                    <div class="identity-content">
                                        <span class="icon"><i class="fa fa-shield"></i></span>
                                        <h4>Upload your ID card</h4>
                                        <span>(Driving License or Government ID card)</span>

                                        <p>Uploading your ID helps as ensure the safety and security of your transaction</p>
                                    </div>
                                    <div class="mb-3">
                                        <label class="me-sm-2">Upload Front ID </label>
                                        <span class="float-right">Maximum file size is 2mb</span>
                                        <div class="file-upload-wrapper" :data-text="front_id_name">
                                            <input name="file-upload-field" type="file" class="file-upload-field"
                                            ref="front_id" v-on:change="handleFileUpload()">
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="me-sm-2">Upload Back ID </label>
                                        <span class="float-right">Maximum file size is 2mb</span>
                                        <div class="file-upload-wrapper" :data-text="back_id_name">
                                            <input name="file-upload-field" type="file" class="file-upload-field"
                                            ref="back_id" v-on:change="handleFileUpload()">
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <button type="submit" class="btn btn-success ps-5 pe-5" :disabled="loading">Submit</button>
                                    </div>
                                    <br>
                                    <span class="text-danger"><center> Please note that your details are secure, private and it will not be exposed to any third party. </center></span>
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
import Api from './Api'

    export default{
        name: "IdVerification",
        components: {Footer, SideBar},
        data(){
            return{
                front_id: "",
                front_id_name: "",
                back_id_name: "",
                back_id: "",
                loading: false
            }
        },

        methods: {
            handleFileUpload(){
                this.front_id = this.$refs.front_id.files[0]
                this.back_id = this.$refs.back_id.files[0]
                this.front_id_name = this.front_id.name
                this.back_id_name = this.back_id.name
            },
            uploadId(){
                this.loading = true
                const formData = new FormData();
                formData.append('front_id', this.front_id)
                formData.append('back_id', this.back_id )
                formData.append('transaction_status', "3")
                Api.axios_instance.patch(Api.baseUrl+'api/v1/profile-id/', formData)
                .then(response => {
                    this.$toast.success({
                        title:'Welldone!',
                        message:'Means of Identification Uploaded '
                })
                this.$router.push({path: '/'})
                }).catch(() => {
                    console.log(error);
                })
                .finally(()=> {
                    this.loading= false
                })
            }
        }
    }
</script>