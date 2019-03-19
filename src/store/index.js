import Vue from 'vue'
import Vuex from 'vuex'
import Menu from './menu/index'
import Header from './header/index'
import Card from './card/index'
import List from './list/index'
import Goods from './goods/index'

Vue.use(Vuex)

const state = {
 
}
export default new Vuex.Store({
  state,
  modules:{
    Menu,
    Header,
    Card,
    List,
    Goods
  }
})
