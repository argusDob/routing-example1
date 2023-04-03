import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
import routerGuard from './guard';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

routerGuard(router);

export default router;
