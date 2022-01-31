import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import TestApi from '../views/TestApi.vue'
import Blog from '../views/Blog.vue'
import Rumahsakit from '../views/Blog/Rumahsakit.vue'
import Services from '../views/Services.vue'
import Kesehatan from '../views/Blog/Kesehatan.vue'
import Olahraga from '../views/Blog/Olahraga.vue'
import RouterTest from '../views/router-test.vue'
import MemberOne from '../views/id-01.vue'
import MemberTwo from '../views/id-02.vue'
import MemberThree from '../views/id-03.vue'

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
      path: '/services',
      name: 'services',
      component: Services
    },
  { path: '/Blog/Kesehatan', name: 'Blog/Kesehatan', component: Kesehatan },
  { path: '/Blog/Olahraga', name: 'Blog/Olahraga', component: Olahraga },
  { path: '/Blog/Rumahsakit', name: 'Blog/Rumahsakit', component: Rumahsakit },
  { path: '/destination', name: 'destination', component: RouterTest },
  { path: '/destination/:id', name: 'destination/:id', component: MemberTwo },
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});



export default router;