import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
import './assets/style/border.css';
import './assets/style/reset.css';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './commons/stylus/index.styl';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active', // 修改linkActiveClass的默认属性值为active
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
