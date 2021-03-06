import {
  request
} from '../../utils/request'

const state = {
  menu: ''
};
const mutations = {
  getMenus(state, value) {
    state.menu = value
  }
};
const actions = {
  async getMenu({
    commit
  }) {
    await request('GET', 'menu').then(res => {
      commit('getMenus', res.menu)
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
