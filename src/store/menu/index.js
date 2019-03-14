import request from '../../utils/request'

const state = {

};
const mutations = {

};
const actions = {
  getMenu() {
    request('GET', 'menu')
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
