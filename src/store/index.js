import Vue from 'vue'
import Vuex from 'vuex'
import Menu from './menu/index'
import Header from './header/index'
import Card from './card/index'

Vue.use(Vuex)
const state = {
 
}
export default new Vuex.Store({
  state,
  modules:{
    Menu,
    Header,
    Card
  }
})
