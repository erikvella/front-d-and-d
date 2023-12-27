import { createRouter , createWebHistory } from "vue-router";
// importo i componenti delle pagine
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Blog from "./pages/Blog.vue";
import Contacts from "./pages/Contacts.vue";
import CharacterDetail from "./pages/CharacterDetail.vue";
import Error404 from "./pages/Error404.vue";

const router = createRouter({
history: createWebHistory(),
// customizzo la classe predefinita del router-link
linkExactActiveClass : 'active',
routes:[
  {
     path: '/',
     name: 'home',
     component: Home
  },
  {
     path: '/chi-siamo',
     name: 'about',
     component: About
  },
  {
     path: '/blog',
     name: 'blog',
     component: Blog
  },
  {
     path: '/contatti',
     name: 'contacts',
     component: Contacts
  },
  {
    // rotta con elemento dinamico come parametro (slug)
     path: '/dettaglio-personaggio/:slug',
     name: 'characterDetail',
     component: CharacterDetail
  },

  // rotta 404 da mettere come ultima rotta
  {
    path: '/:pathMatch(.*)*',
    // il nome possiamo anche non metterlo
    name: 'error404',
    component: Error404
 }
]
});

export {router}