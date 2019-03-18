import {
  request
} from '../../utils/request'

const state = {
  goods:[]
};
const mutations = {
  getLists(state, value) {
    state.goods = value
  }
};
const actions = {
  async getList({
    commit
  }, goods) {
    await request('GET', 'list', {
      goods: goods
    }).then(res => {
      commit('getLists', res)
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
