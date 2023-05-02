<template>
    <div>
        <SideBar />
        <div class="page_title">
            <div class="container-fluid">
                <div class="row">
                </div>
            </div>
        </div>
       <div class="content-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header border-0">
                                <h4 class="card-title">Add New Testimonial</h4>
                            </div>
                            <div class="col-lg-6">
                                
                            <form @submit.prevent="createTestimonial()">
                                <div class="mb-3 mt-5">
                                    <label>Testimonial</label>
                                    <textarea class="form-control" rows="4" placeholder="" v-model="testimonial" />
                                </div>
                                <button type="submit" class="form-control">Add Testimonial</button>
                            </form>
                            </div>

                            <div class="card-header border-0 mt-5">
                                <h4 class="card-title"> <center>Testimonials</center></h4>
                            </div>
                            <div class="card-body pt-0">
                                <div class="row">
                                    <div class="col-xl-3 col-lg-3 col-xxl-4" v-for="testimonial in testimonials" :key="testimonial.reference">
                                            <div class="widget-card">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="widget-stat">
                                                        <div class="coin-title">
                                                            <h5 class="d-inline-block ms-2 mb-3">
                                                                {{testimonial.user.first_name}} {{testimonial.user.last_name}}
                                                            </h5>
                                                        </div>
                                                        <h4 style="margin-bottom:15px">  {{testimonial.message}}
                                                        </h4>
                                                    </div>
                                                    <div id="btcChart"></div>
                                            </div>
                                            
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
import Api from './Api.js'
    export default{
        name: "Testimonial",
        components: {SideBar, Footer},
        data(){
            return{
                testimonials: [],
                testimonial: ''
            }
        },

        methods: {
            createTestimonial(){
                Api.axios_instance.post(Api.baseUrl+'api/v1/create-testimonial', {message:this.testimonial})
                .then(res => {
                    this.$toast.success({
                        title:'Awesome!',
                        message:'Testimonial Added Successfully '
                })
                    this.getTestimonials()
                    this.testimonial = ''
                })
                .catch(err => {
                    console.log(err);
                })
            },
            getTestimonials(){
                Api.axios_instance.get(Api.baseUrl+'api/v1/list-testimonials')
                    .then(res => {
                        let testimonials_data = res.data
                         this.testimonials = testimonials_data.filter((item) => {
                             return item.user.email === localStorage.getItem('email')
                        })
                    }
                )
            }
        },

        mounted(){
            this.getTestimonials()
        }
    }
</script>