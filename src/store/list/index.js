import {
  request
} from '../../utils/request'

const state = {
  goods: [],
  bread: '',
  active: ''
};
const mutations = {
  getLists(state, value) {
    state.goods = value.resquest,
      state.bread = value.goods
  },
  sortPrice: () => {
    state.active = 'price'
    state.goods.sort((a, b) => b["price"] - a["price"])
  },
  sortComment: () => {
    state.active = 'comment'
    state.goods.sort((a, b) => b["count"] - a["count"])
  }
};
const actions = {
  async getList({
    commit
  }, goods) {
    await request('GET', 'list', {
      goods: goods
    }).then(res => {
      commit('getLists', {
        goods: goods,
        resquest: res
      })
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
