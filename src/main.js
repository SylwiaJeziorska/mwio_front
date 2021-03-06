import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';

require('@/store/subscriber');

axios.defaults.baseURL = 'http://127.0.0.1:8000';

Vue.config.productionTip = false;

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
});

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
