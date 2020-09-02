import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home";

Vue.use(VueRouter)

const routes = [
  {path: '/',redirect:'/login'},
  {path:'/login',component:Login},
  {path:'/home',component:Home}

]

const router = new VueRouter({
  routes
})
// 路由导航守卫
router.beforeEach((to,from,next) =>{
  // to是访问的路径
  // form从哪个路径而来
  //next是一个函数 表示放行 next（‘/login’）强制跳转
  if (to.path==='/login')return next()
  // 获取token
  const  tokenStr= window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
