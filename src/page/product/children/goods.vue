<template>
  <div>
    <Row class="mt-15">
      <Col :lg="{span:18,offset:3}" :md="{span:24}">
        <Row :gutter="32">
          <Col span="8" class="see-box">
            <img class="big" :src="getImg(bigImg)" alt>
            <Row :gutter="16">
              <Col span="6" v-for="(item,index) in good.img" :key="index">
                <img class="hover-img" :src="getImg(item)" @mouseover="changeImg(item)">
              </Col>
            </Row>
          </Col>
          <Col span="14" class="info">
            <div class="title">{{good.title}}</div>
            <div class="price">
              ￥
              <span class="count">45</span>
              <span class="price-title">零售价</span>
            </div>
            <div class="address">
              <div>送至：
                <Select v-model="address" size="small" class="select">
                  <Option
                    v-for="item in addressList"
                    :value="item.value"
                    :key="item.value"
                  >{{item.label}}</Option>
                </Select>现在至明日0:00前完成下单，预计后天送达
              </div>
              <div class="mt-15">
                服务：
                <span>由shopping mall发货并提供售后服务。</span>
              </div>
              <div class="mt-15">
                数量：
                <span>
                  <i @click="removeNum()">-</i>
                  <span class="num">{{num}}</span>
                  <i @click="addNum()">+</i>
                </span>
              </div>
            </div>
            <div>
              <div class="shopping cursor">加入购物车</div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import cache from "@/utils/cache";
export default {
  data() {
    return {
      
    };
  },
  created() {
    this.getGood(this.$route.query.good);
  },
  computed: {
    ...mapState({
      good: state => state.Goods.good,
      bigImg: state => state.Goods.bigImg,
      address: state => state.Goods.address,
      addressList: state => state.Goods.addressList,
      num: state => state.Goods.num,
    })
  },
  methods: {
    ...mapActions(["getGood"]),
    ...mapMutations(["changeImg","addNum","removeNum"]),
    getImg: img => cache.getImgUrl(img),
  }
};
</script>

<style lang="scss" scoped>
.mt-15 {
  margin: {
    top: 15px;
  }
}
.see-box {
  img {
    width: 100%;
  }
  .big {
    border: 1px solid #dcdddd;
  }
  .hover-img {
    border: 1px solid #ffffff;
    &:hover {
      border: 1px solid #96ca73;
    }
  }
}
.info {
  .title {
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    border-bottom: 1px dashed #dcdddd;
  }
  .price {
    background: #f5f5f5;
    padding: 20px;
    color: #c40000;
    font-weight: bold;
    font-size: 15px;
    .count {
      font-size: 26px;
    }
    .price-title {
      display: inline-block;
      margin: 0 10px 8px;
      padding: 0 5px;
      font-family: "微软雅黑";
      background: #c40000;
      color: #fff;
      font-size: 12px;
      vertical-align: middle;
    }
  }
  .address {
    margin: 15px;
    div > span {
      margin-left: 10px;
      i {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        color: #96ca73;
        border: 1px solid #96ca73;
        vertical-align: middle;
        text-align: center;
        line-height: 15px;
        cursor: pointer;
      }
    }
    .select {
      width: 100px;
      margin: 0 10px 0 5px;
    }
    .num {
      margin: 0 5px;
      display: inline-block;
      width: 10px;
      text-align: center;
    }
  }
  .shopping {
    margin-left: 15px;
    padding: 10px 15px;
    color: #fff;
    background: #c40000;
    font-size: 20px;
    font-weight: bold;
    width: 135px;
    text-align: center;
  }
}
</style>