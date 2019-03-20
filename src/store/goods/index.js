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
  num: 1,
  title: ""
};
const mutations = {
  getGoods(state, value) {
    state.good = value
    state.bigImg = value.img[0],
      state.title = value.title
  },
  changeImg(state, img) {
    state.bigImg = img
  },
  addNum(state) {
    state.num < 9 ? ++state.num : null;
  },
  removeNum(state) {
    state.num > 1 ? --state.num : null;
  },
  addressChange(state, value) {
    state.address = value
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
  },
  addCart({
    state,
    commit,
    rootState
  }) {
    let arr = rootState.Cart.cart;
    let bool = arr.some(function (item) {
      if (item.img == state.bigImg) {
        item.count += state.num
        return true;
      }
    })
    if (bool) return
    arr.push({
      img: state.bigImg,
      title: state.title,
      count: state.num
    })
    rootState.Cart.visible = true
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
