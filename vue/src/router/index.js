import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import Regist from '../views/Regist.vue'
import login from '../views/login/index.vue'
import Disclaimer from '../views/Disclaimer.vue'
import site_scan from '../views/site_scan.vue'

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
  {
    path: '/site_scan',
    name: 'site_scan',
    component: site_scan
  },
  {
    path: '/Disclaimer',
    name: 'Disclaimer',
    component: Disclaimer
  },
  {
    path: '../views/dashboard/admin/index',
	name: 'dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '仪表盘', icon: 'dashboard', affix: true }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router