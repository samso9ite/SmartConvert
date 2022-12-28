import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {requiresAuth: true}
  },
  // {
  //   path: '/account',
  //   name: 'Account',
  //   component: () => import('../views/Account.vue')
  // },
  {
    path: '/change-pwd',
    name: 'ChangePwd',
    component: () => import('../views/ChangePwd.vue'),
    meta: {guest:true}
  },
  {
    path: '/transaction-history',
    name: 'TransactionHistory',
    component: () => import('../views/TransactionHistory.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => import('../views/Reset.vue')
  },
  {
    path: '/account-settings',
    name: 'AccountSettings',
    component: () => import('../views/AccountSettings.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue'),
    meta: {guest: true}
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    meta: {guest: true}
  },
  {
    path: '/activate/:id/:reference/',
    name: 'Activation',
    props: true,
    component: () => import('../views/Activation.vue'),
    meta: {guest: true}
  },
  {
    path: '/rates',
    name: 'Rates',
    props: true,
    component: () => import('../views/Rates.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/account-verification',
    name: 'Verification',
    component: () => import('../views/Verification.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/upload-verification',
    name: 'IdVerification',
    component: () => import('../views/IdVerification.vue'),
    meta: {requiresAuth: true}
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// This checks if user is authenticated and if not routes them to the login page 
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    if (sessionStorage.getItem('isAuthenticated')){
      next()
      return
    }
    next('/signin')
  } else {
    next()
  
  }
})

// This stops user that are logged in from accessing the login and register page instead routes them to the dashboard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.guest)){
    if (sessionStorage.getItem('isAuthenticated')){
      next('/')
      return
    }
    next()
  } else {
    next()
  
  }
})

export default router
