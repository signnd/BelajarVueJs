import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Members from '../views/Members.vue'
import TestApi from '../views/TestApi.vue'
import RSUPSanglah from '../views/Members/rsup-sanglah.vue'
import RSUBM from '../views/Members/rsu-balimandara.vue'
import RSMBM from '../views/Members/rsm-balimandara.vue'
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
    component: About
  },
  {
      path: '/contact',
      name: 'Contact',
      component: Contact
  },
    {
      path: '/members',
      name: 'Members',
      component: Members
  },
    {
      path: '/api',
      name: 'api',
      component: TestApi
    },
  {
    path: '/members/rsup-sanglah',
    name: 'members/rsup-sanglah',
    component: RSUPSanglah
  },
  {
    path: '/members/rsu-balimandara',
    name: 'members/rsu-balimandara',
    component: RSUBM
  },
  {
    path: '/members/rsm-balimandara',
    name: 'members/rsm-balimandara',
    component: RSMBM
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router