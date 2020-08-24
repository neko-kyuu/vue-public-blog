import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path: '/home',
    name:'Home',
    component:() => import('../views/Home.vue'),
  },
  {
    path: '/blog',
    name:'Blog',
    component:() => import('../views/Blog.vue')
  },
  {
    path: '/archive',
    name:'Archive',
    component:() => import('../views/Archive.vue')
  }, 
  {
    path: '/gallery',
    name:'Gallery',
    component:() => import('../views/Gallery.vue')
  },
  {
    path: '/about',
    name:'About',
    component:() => import('../views/About.vue')
  },
  {
    path: '/login',
    name:'Login',
    component:() => import('../views/login.vue')
  },
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes 
})
