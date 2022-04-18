import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Features from '../views/Features.vue'
import TechStack from '../views/TechStack.vue'
//import Comparison from '../views/Comparison.vue'
import Roadmap from '../views/Roadmap.vue'
import Support from '../views/Support.vue'
import Parachains from '../views/Parachains.vue'
import Regenesis from '../views/Regenesis.vue'
import ACU from '../views/ACU.vue'
import AtomicSwap from '../views/AtomicSwap.vue'
import Blog from '../views/Blog.vue'
import Accounts from '../views/Accounts.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: '' },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { title: 'About' },
  },
  {
    path: '/features',
    name: 'features',
    component: Features,
    meta: { title: 'Features' },
  },
  {
    path: '/tech-stack',
    name: 'tech-stack',
    component: TechStack,
    meta: { title: 'Tech Stack' },
  },
  {
    path: '/comparison',
    name: 'comparison',
//    component: Comparison,
    meta: { title: 'Comparison' },
  },
  {
    path: '/roadmap',
    name: 'roadmap',
    component: Roadmap,
    meta: { title: 'Roadmap' },
  },
/*
  {
    path: '/support',
    name: 'support',
    component: Support,
    meta: { title: 'Support' },
  },
*/
  {
    path: '/parachains',
    name: 'parachains',
    component: Parachains,
    meta: { title: 'Parachains' },
  },
  {
    path: '/regenesis',
    name: 'regenesis',
    component: Regenesis,
    meta: { title: 'Regenesis' },
  },
  {
    path: '/acu',
    name: 'acu',
    component: ACU,
    meta: { title: 'ACU' },
  },
  {
    path: '/atomic-swap',
    name: 'atomic-swap',
    component: AtomicSwap,
    meta: { title: 'Atomic Swap' },
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: { title: 'Blog' },
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: Accounts,
    meta: { title: 'Accounts' },
  },
]

const router = new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo: any = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
