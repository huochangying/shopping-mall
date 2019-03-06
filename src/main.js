// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//  iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import CardTemplate from '@/components/cardTemplate'


Vue.config.productionTip = false

//全局组件
Vue.component('card-template', CardTemplate)

Vue.use(iView, {
  size: 'large'
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
