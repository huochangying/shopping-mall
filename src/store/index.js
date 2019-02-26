import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  city: '北京',
  cityArr: [
    ['北京', '上海', '天津', '重庆', '广州'],
    ['深圳', '河南', '辽宁', '吉林', '江苏'],
    ['江西', '四川', '海南', '贵州', '云南'],
    ['西藏', '陕西', '甘肃', '青海', '珠海']
  ]
}
export default new Vuex.Store({
    state
})
