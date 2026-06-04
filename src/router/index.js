import { createRouter, createWebHistory } from 'vue-router'
import HomeView    from '@/views/HomeView.vue'
import AboutView   from '@/views/AboutView.vue'
import WorksView   from '@/views/WorksView.vue'
import PackagesView from '@/views/PackagesView.vue'
import SpeakingView from '@/views/SpeakingView.vue'
import BlogView    from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',          component: HomeView,     meta: { title: 'Daniel Mabadeje' } },
    { path: '/about',     component: AboutView,    meta: { title: 'About — Daniel Mabadeje' } },
    { path: '/works',     component: WorksView,    meta: { title: 'Work — Daniel Mabadeje' } },
    { path: '/packages',  component: PackagesView, meta: { title: 'Packages — Daniel Mabadeje' } },
    { path: '/speaking',  component: SpeakingView, meta: { title: 'Speaking — Daniel Mabadeje' } },
    { path: '/blog',      component: BlogView,     meta: { title: 'Blog — Daniel Mabadeje' } },
    { path: '/contact',   component: ContactView,  meta: { title: 'Contact — Daniel Mabadeje' } },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

// Update page title on navigation
router.afterEach((to) => {
  document.title = to.meta.title || 'Daniel Mabadeje'
})

export default router
