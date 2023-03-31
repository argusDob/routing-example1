import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

// import HomeView from '../views/HomeView.vue';
// import LoginView from '../views/LoginView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
