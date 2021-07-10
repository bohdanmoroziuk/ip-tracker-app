import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'IP Address Tracker',
    },
    component: () => import('@/views/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  document.title ??= to.meta?.title;

  next();
});

export default router;
