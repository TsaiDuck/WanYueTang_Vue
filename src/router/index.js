import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/body/home/Home.vue'
import Login from '@/components/body/users/login.vue'
import Register from '@/components/body/users/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
