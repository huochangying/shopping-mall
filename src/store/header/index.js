import {
  request
} from '../../utils/request'

const state = {
  city: '',
  cityArr: ''
};
const mutations = {
  getCitys(state, value) {
    state.city = value.city,
      state.cityArr = value.cityArr
  },
  changeCity(state,value) {
    state.city = value;
  }
};
const actions = {
  async getCity({
    commit
  }) {
    await request('GET', 'city').then(res => {
      commit('getCitys', res)
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
