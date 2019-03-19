import {
  request
} from '../../utils/request'

const state = {
  good: '',
  bigImg: null,
  addressList: [{
    value: "beijing",
    label: "北京"
  }],
  address: "",
  num: 1
};
const mutations = {
  getGoods(state, value) {
    state.good = value
    state.bigImg = value.img[0]
  },
  changeImg(state, img) {
    state.bigImg = img
  },
  addNum() {
    state.num < 9 ? ++state.num : null;
  },
  removeNum() {
    state.num > 2 ? --state.num : null;
  }
};
const actions = {
  async getGood({
    commit
  }, good) {
    await request('GET', 'goods', {
      good: good
    }).then(res => {
      commit('getGoods', res)
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
