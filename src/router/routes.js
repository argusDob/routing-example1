import Home from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import Dashboard from '../views/DashBoard.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '*', redirect: '/login' },
];

export default routes;
