import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue')
  },
  {
    path: '/change-pwd',
    name: 'ChangePwd',
    component: () => import('../views/ChangePwd.vue')
  },
  {
    path: '/add-bank',
    name: 'AddBank',
    component: () => import('../views/AddBank.vue')
  },
  {
    path: '/transaction-history',
    name: 'TransactionHistory',
    component: () => import('../views/TransactionHistory.vue')
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => import('../views/Reset.vue')
  },
  {
    path: '/account-settings',
    name: 'AccountSettings',
    component: () => import('../views/AccountSettings.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
