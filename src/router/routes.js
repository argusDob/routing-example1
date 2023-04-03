import Home from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import Dashboard from '../views/DashBoard.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  {
    path: '/dashboard', component: Dashboard, name: 'dashboard', meta: { requiresAuth: true },
  },
  { path: '*', redirect: '/login' },
];

export default routes;
