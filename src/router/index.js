import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Search from '../views/search.vue'
import Blog from '../views/Blog.vue'
import Rumahsakit from '../views/Blog/Rumahsakit.vue'
import Services from '../views/Services.vue'
import Kesehatan from '../views/Blog/Kesehatan.vue'
import Olahraga from '../views/Blog/Olahraga.vue'
import Tujuan from '../views/destination.vue'
import Member from '../views/destdetail.vue'

const routes = 
[
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - Oobad'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About - Oobad'
    }
  },
  {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Contact - Oobad'
      }
  },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        title: 'Search Results - Oobad'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      meta: {
        title: 'Blog - Oobad'
      }

    },
    {
      path: '/services',
      name: 'services',
      component: Services,
      meta: {
        title: 'Services - Oobad'
      }

    },
  { path: '/Blog/Kesehatan', name: 'Blog/Kesehatan', component: Kesehatan },
  { path: '/Blog/Olahraga', name: 'Blog/Olahraga', component: Olahraga },
  { path: '/Blog/Rumahsakit', name: 'Blog/Rumahsakit', component: Rumahsakit },
  { path: '/destination', name: 'destination', component: Tujuan },
  { path: '/destination/:id', name: 'destination/:id', component: Member },
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || ' Oobad';
  next();
})



export default router;