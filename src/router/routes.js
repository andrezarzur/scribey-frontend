import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/profile',
      component: () => import('../views/Profile.vue'),
      meta: { 
        requiresAuth: true 
      } 
    },
    {
      path: '/books',
      component: () => import('../views/book/Index.vue'),
    },
    {
      path: '/books/create',
      component: () => import('../views/book/Create.vue'),
      meta: { 
        requiresAuth: true 
      } 
    },
    { 
      path: '/books/:id', 
      component: () => import('../views/book/Book.vue'), 
      props: true  
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

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      const isLoggedIn = window.localStorage.getItem('user')
      if (!isLoggedIn) {
        next('/');
      } else {
        next();
      }
    } else {
      next();
    }
  });
  
export default router
  