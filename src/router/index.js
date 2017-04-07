import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import App from '../App';
import Shop from '@/components/shop/shop';

export default new Router({
  routes: [
    {
      path: '/',
      component: App, // 顶层路由app，对应的是index.html
      children: [
        {
          path: '/',  // 地址为空是对应的是Home组件
          redirect: '/home'  // router.redirect 方法将根路径重定向到/home路径
        },
        {
          path: '/home',  // 首页
          component: Home
        },
        {
          path: '/shop',
          component: Shop
        }
      ]
    }
  ]
});

Vue.use(Router);

//
