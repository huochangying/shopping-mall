import {
  request
} from '../../utils/request'

const state = {
  card: [],
};
const mutations = {
  getCards(state, value) {
    state.card = value
  }
};
const actions = {
  async getCard({
    commit
  }) {
    await request('GET', 'card').then(res => {
      commit('getCards', res)
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
