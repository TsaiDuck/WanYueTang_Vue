import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/body/home/Home.vue";
import Login from "@/components/body/users/login.vue";
import Register from "@/components/body/users/register.vue";
import GoodsDetails from "@/components/body/home/Goods/GoodsDetails";
import userHome from "@/components/body/users/userHome";
import userCart from "@/components/body/users/userCart";
import userInfo from "@/components/body/users/userInfo";
import Fever from "@/components/body/home/Fever";

Vue.use(VueRouter);

// 解决重复点击导航时控制台报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 挂载路由规则
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "home", component: Home },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register },
  { path: "/goodsDetails/:id", name: "goodsDetails", component: GoodsDetails },
  {
    path: "/userHome",
    name: "userHome",
    component: userHome,
    children: [{ path: "userInfo", name: "userInfo", component: userInfo }],
  },
  { path: "/userCart", name: "userCart", component: userCart },
  { path: "/fever", name: "fever", component: Fever },
];

const router = new VueRouter({
  routes,
});

export default router;
