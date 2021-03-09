import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Hero from '../components/Hero.vue'
import cursos from '../sections/cursos.vue'
import CursosDash from '../views/CursosDash.vue'
import Dashboard from '../views/Dashboard.vue'
import Pedidos from '../views/Pedidos.vue'
import {fb} from '../firebase';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: cursos
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {requiresAuth: true},
    children:[
      {
        path: 'cursosdash',
        name: 'cursosdash',
        component: CursosDash
      },
      {
        path: 'dash',
        name: 'dash',
        component: Dashboard
      },
      {
        path: 'pedidos',
        name: 'pedidos',
        component: Pedidos
      },
    ] 
  },
  {
    path: '/hero',
    name: 'hero',
    component: Hero
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if(requiresAuth && !currentUser){
    next('/')
  }else if(requiresAuth && currentUser){
    next()
  }else{
    next()
  }

  })

export default router
