// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import axios from 'axios';
import './common/scss/index.scss';
import './common/js/rem';
import FastClick from 'fastClick';
Vue.config.productionTip = false;

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
};

// Vue.use(axios);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app');
