import Vue from 'vue'
import Vuex from 'vuex'
import Menu from './menu/index'
import Header from './header/index'
import Card from './card/index'
import List from './list/index'
import Goods from './goods/index'
import Cart from './cart/index'

Vue.use(Vuex)

const state = {
 
}
const store = new Vuex.Store({
  state,
  modules:{
    Menu,
    Header,
    Card,
    List,
    Goods,
    Cart
  }
})

export default store
