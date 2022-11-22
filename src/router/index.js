import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/body/home/Home.vue'
import Login from '@/components/body/users/login.vue'
import Register from '@/components/body/users/register.vue'
import GoodsDetails from '@/components/body/home/Goods/GoodsDetails'
import userHome from '@/components/body/users/userHome'
import userCart from '@/components/body/users/userCart'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/goodsDetails/:id', name: 'goodsDetails', component: GoodsDetails },
  { path: '/userHome', name: 'userHome', component: userHome },
  { path: '/userCart', name: 'userCart', component: userCart }
]

const router = new VueRouter({
  routes
})

export default router
