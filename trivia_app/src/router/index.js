import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catagories from '../views/Catagories.vue'
import Users from '../views/Users.vue'
import UserProfile from '../views/UserProfile.vue'
import Catagory from '../views/Catagory.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/userProfile',
      name: 'userProfile',
      component: UserProfile
    },
    {
      path: '/catagories/',
      name: 'catagories',
      component: Catagories
    },
    {
      path: '/catagory/:id',
      name: 'catagory',
      component: Catagory
    }
  ]
})

export default router
