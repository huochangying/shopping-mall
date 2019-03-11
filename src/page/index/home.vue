<template>
  <div class="home">
    <router-view name="searchBox"></router-view>
    <router-view name="menu" :height='page'></router-view>
    <card v-for="(item,index) in cardData" :key="index" :cardData="item"></card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page:'home',
      cardData: [
        {
          title:'进口食品',
          count: "1",
          color: "#88A9E2",
          colorBg: "#a1c0f6",
          bgImg: require("@/assets/niunai.jpg"),
          card: [
            {
              img: require("@/assets/card-4.jpg"),
              title: "【预售】 牛奶",
              money: "68"
            },
            {
              img: require("@/assets/card-5.jpg"),
              title: "【预售】一级 大米",
              money: "68"
            },
            {
              img: require("@/assets/card-6.jpg"),
              title: "【预售】一级 车厘子",
              money: "68"
            },
            {
              img: require("@/assets/card-4.jpg"),
              title: "【预售】一级 牛奶",
              money: "68"
            },
            {
              img: require("@/assets/card-5.jpg"),
              title: "【预售】一级 大米",
              money: "68"
            },
            {
              img: require("@/assets/card-6.jpg"),
              title: "【预售】一级 车厘子",
              money: "68"
            },
            {
              img: require("@/assets/card-4.jpg"),
              title: "【预售】一级 牛奶",
              money: "68"
            },
            {
              img: require("@/assets/card-5.jpg"),
              title: "【预售】一级 泰米",
              money: "68"
            }
          ]
        },{
          title:'时令果蔬',
          count: "2",
          color: "#80bb5e",
          colorBg: "#bee77b",
          bgImg: require("@/assets/shuiguo.jpg"),
          card: [
            {
              img: require("@/assets/card-1.jpg"),
              title: "【预售】一级 无籽褚柑箱装10斤 预计3月16日前发货",
              money: "68"
            },
            {
              img: require("@/assets/card-2.jpg"),
              title: "【预售】一级 桔子 预计3月16日前发货",
              money: "68"
            },
            {
              img: require("@/assets/card-3.jpg"),
              title: "【预售】一级 草莓箱装10斤 预计3月16日前发货",
              money: "68"
            },
            {
              img: require("@/assets/card-1.jpg"),
              title: "【预售】一级 无籽褚柑箱装10斤 预计3月16日前发货",
              money: "68"
            },
            {
              img: require("@/assets/card-2.jpg"),
              title: "【预售】一级 桔子箱装10斤 预计3月16日前发货",
              money: "68"
            },
            {
              img: require("@/assets/card-3.jpg"),
              title: "【预售】一级 草莓柑箱装10斤 预计3月16日前发货",
              money: "68"
            },
            {
              img: require("@/assets/card-1.jpg"),
              title: "【预售】一级 无籽褚柑箱装10斤 预计3月16日前发货",
              money: "68"
            },
            {
              img: require("@/assets/card-2.jpg"),
              title: "【预售】一级 桔子箱装10斤 预计3月16日前发货",
              money: "68"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang='scss'>

</style>