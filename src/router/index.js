import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Members from '../views/Members.vue'
import TestApi from '../views/TestApi.vue'
import Blog from '../views/Blog.vue'
import Destination from '../views/Destination.vue'
import Services from '../views/Services.vue'
import RSUPSanglah from '../views/Members/rsup-sanglah.vue'
import RSUBM from '../views/Members/rsu-balimandara.vue'
import RSMBM from '../views/Members/rsm-balimandara.vue'
import RSPTNUnud from '../views/Members/rsptn-unud.vue'
import RSMangusadaBadung from '../views/Members/rs-mangusada-badung.vue'
import RSBIMCNusadua from '../views/Members/rs-bimc-nusadua.vue'
import RSBIMCKuta from '../views/Members/rs-bimc-kuta.vue'
import BROS from '../views/Members/bros.vue'
import RSPrimaMedika from '../views/Members/rs-primamedika.vue'
import RSKasihIbuDps from '../views/Members/rs-kasihibu-dps.vue'
import RSKasihIbuSaba from '../views/Members/rs-kasihibu-saba.vue'
import RSRamata from '../views/Members/rs-ramata.vue'
import RSBhayangkara from '../views/Members/rs-bhayangkara.vue'
import KlinikPentaMedika from '../views/Members/klinik-pentamedika.vue'
import Dental911Clinic from '../views/Members/dental911clinic.vue'
import Assist211 from '../views/Members/assist211.vue'

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
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/destination',
      name: 'Destination',
      component: Destination
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
  //   { path: '/members/rsup-sanglah', name: 'members/rsup-sanglah', component: RSUPSanglah },
  // nanti struktur link untuk RS sanglah pake yang kayak di atas
  { path: '/members/rs-member', name: 'members/rsup-sanglah', component: RSUPSanglah }, //temporary page
  { path: '/members/rsu-balimandara', name: 'members/rsu-balimandara', component: RSUBM },
  { path: '/members/rsm-balimandara', name: 'members/rsm-balimandara', component: RSMBM },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router