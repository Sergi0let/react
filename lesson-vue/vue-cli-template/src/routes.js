import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from 'vue-router';

// const routerHistory = createWebHistory();
const routerHash = createWebHashHistory();

import HomePage from './pages/homePage.vue';
import AboutPage from './pages/aboutPage.vue';

const routers = createRouter({
  history: routerHash,

  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
  ],
});

export default routers;
