import Goods from './components/goods/goods';
import Ratings from './components/ratings/ratings';
import Sellers from './components/sellers/seller';

export const routes = [
  {
    path: '/',
    redirect: '/goods'
  },
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
