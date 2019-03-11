import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/page/index/home'], resolve)
const SearchBox = resolve => require(['@/components/searchBox'], resolve)
const Carousel = resolve => require(['@/components/carousel'], resolve)
const Card = resolve => require(['@/page/index/children/card'], resolve)
const Menu = resolve => require(['@/components/menu'], resolve)
const Header = resolve => require(['@/components/Header'], resolve)
const ProductList = resolve => require(['@/page/productList'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      default: Home,
      'header': Header,
    },
    children: [{
      path: '',
      components: {
        'searchBox': SearchBox,
        'menu': Menu,
        'card': Card
      },
      children: [{
        path: '',
        components: {
          'carousel': Carousel
        },
      }]
    }]
  }, {
    path: '/productList',
    components: {
      default: ProductList,
      'header': Header
    },
    children: [{
      path: '',
      components: {
        'searchBox': SearchBox,
        'menu': Menu
      }
    }]
  }]
})
