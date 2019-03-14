import {
  request
} from '../../utils/request'

const state = {
  menu: ''
};
const mutations = {
  
};
const actions = {
  getMenu({
    commit
  }) {
    request('GET', 'menu').then(res => {
      state.menu = res.menu
    })
  }
};
const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}
