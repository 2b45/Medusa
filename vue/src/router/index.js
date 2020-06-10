import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import login from '../views/login/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    // component: Login
	component: login
	// component:()=> import('@views/login/index')
  },
  {
    path: '/Regist',
    name: 'Regist',
    component: Regist
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router