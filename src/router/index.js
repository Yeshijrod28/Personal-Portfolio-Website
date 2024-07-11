import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/TheWelcome.vue'
import PortfolioPage from '@/components/PortfolioPage.vue'
import AboutPage from '../components/AboutPage.vue'
import AchievementsPage from '../components/AchievementsPage.vue'
import ContactMe from '../components/ContactMe.vue'
import ProjectsPage from '../components/ProjectsPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: AchievementsPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactMe
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
})

export default router
