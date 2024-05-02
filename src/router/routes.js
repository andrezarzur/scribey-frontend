import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/profile',
      component: () => import('../views/Profile.vue'),
    },
  
    // Always leave this as last one,
    // but you can also remove it
    // {
    //   path: '/:catchAll(.*)*',
    //   component: () => import('pages/ErrorNotFound.vue')
    // }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
})
  
export default router
  