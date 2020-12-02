import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catagories from '../views/Catagories.vue'
import Users from '../views/Users.vue'
import UserProfile from '../views/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Catagories',
    name: 'Catagories',
    component: Catagories
  },
  {
    path: '/Users',
    name: 'Users',
    component: Users
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
