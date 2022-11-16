import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/body/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
