import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/page/index/home'], resolve)
const SearchBox = resolve => require(['@/page/index/children/searchBox'], resolve)
const Carousel = resolve => require(['@/page/index/children/navBar/children/carousel'], resolve)
const Card = resolve => require(['@/page/index/children/card'], resolve)
const Menu = resolve => require(['@/page/index/children/nav/menu'], resolve)
const Header = resolve => require(['@/components/Header'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      'home': Home,
      'header': Header,
    },
    children: [{
      path: '/',
      components: {
        'searchBox': SearchBox,
        'menu': Menu,
        'card': Card
      },
      children: [{
        path: '/',
        components: {
          'carousel': Carousel
        },
      }]
    }]
  }]
})
