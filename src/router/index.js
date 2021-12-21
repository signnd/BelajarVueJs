import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
const routes = 
[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
      path: '/career',
      name: 'Career',
      component: function () {
      return import( /* webpackChunkName: "career" */ '../views/Career.vue')
    }
  },
    {
      path: '/Login',
      name: 'Login',
      component: function () {
        return import( /* webpackChunkName: "login" */ '../views/Login.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router