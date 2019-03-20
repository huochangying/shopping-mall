
const state = {
  cart: [],
  visible: false
};
const mutations = {
  removeCart(state, value) {
    let arr = state.cart.filter((item) => {
      item.img != value
    })
    arr.length == 0 ? state.visible = false : state.visible = true
    state.cart = arr
  },
  pay(state,message){
    state.cart =[]
    state.visible = false
    message.success("支付成功！")
  }
};
const actions = {
  commitPay({commit,rootState},message){
    if(!rootState.Goods.address){
      message.error('请先选择地址！')
      return false;
    }
    commit('pay',message)
  }
};
const getters = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
