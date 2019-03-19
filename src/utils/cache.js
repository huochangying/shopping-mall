import router from '../router'

export default {
  getImgUrl: function (img) {
    if (!img) return;
    return require('@/assets/img/' + img)
  },
  goGoods: function () {
    router.push({
      path: '/goods',
      query: {
        good: '虾片'
      }
    })
  }
}
