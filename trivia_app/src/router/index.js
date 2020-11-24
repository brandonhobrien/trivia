import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catagories from '../views/Catagories.vue'
import UserScores from '../views/UserScores.vue'
import UserProfile from '../views/UserProfile.vue'

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
    path: '/UserScores',
    name: 'UserScores',
    component: UserScores
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
