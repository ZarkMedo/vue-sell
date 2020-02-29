import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
import './assets/style/border.css';
import './assets/style/reset.css';
import VueRouter from 'vue-router';
import Goods from './components/goods/goods';
import Ratings from './components/ratings/ratings';
import Sellers from './components/sellers/seller';

Vue.config.productionTip = false;

const routes = [
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/ratings',
    component: Ratings
  },
  {
    path: '/sellers',
    component: Sellers
  }
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  }
});

new Vue({
  render: f => f(App),
  router
}).$mount('#app');
