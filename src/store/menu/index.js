import {
  request
} from '../../utils/request'

const state = {
  menu: ''
};
const mutations = {
  commitMenu(state, value) {
    state.menu = value.menu
  }
};
const actions = {
  getMenu({
    commit
  }) {
    request('GET', 'menu').then(res => {
      commit('commitMenu', res)
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
