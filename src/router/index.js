import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import dashboard from '../views/Dashboard.vue';
import signin from '../views/SignIn.vue';
//import store from '@/store';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
/*     beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({
          name: 'signin',
        });
      }
    }, */
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
