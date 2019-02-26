import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      'home': Home,
      'header': Header
    }
  }]
})
