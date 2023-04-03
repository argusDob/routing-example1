import store from '@/store/index';

export default function routerGuard(router) {
  router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters['authentication/isAuthenticated'];

    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (isLoggedIn) {
        next();
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        });
      }
    } else if (to.path === '/login' && isLoggedIn) {
      next('/dashboard');
      next(false);
    } else {
      next();
    }
  });
}
