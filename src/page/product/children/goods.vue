<template>
  <div>
    <Row class="mt-15">
      <Col :lg="{span:18,offset:3}" :md="{span:24}">
        <Row :gutter="32">
          <Col span="8" class="see-box">
            <img class="big" src="@/assets/img/good-1.jpg" alt>
            <Row :gutter="16">
              <Col span="6">
                <img class="hover-img" src="@/assets/img/good-1.jpg" alt>
              </Col>
              <Col span="6">
                <img class="hover-img" src="@/assets/img/good-2.jpg" alt>
              </Col>
              <Col span="6">
                <img class="hover-img" src="@/assets/img/good-3.jpg" alt>
              </Col>
              <Col span="6">
                <img class="hover-img" src="@/assets/img/good-4.jpg" alt>
              </Col>
            </Row>
          </Col>
          <Col span="14" class="info">
            <div class="title">趣莱福蒜味虾片240g（韩国进口 袋）</div>
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
                服务：<span>由shopping mall发货并提供售后服务。</span>
              </div>
              <div>
                数量：<span></span>
              </div>
            </div>
            <div></div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import cache from "@/utils/cache";
export default {
  data() {
    return {
      addressList: [
        {
          value: "beijing",
          label: "北京"
        }
      ],
      address: ""
    };
  },
  created() {},
  computed: {},
  methods: {}
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
    span{
      margin-left: 10px;
    }
    .select {
      width: 100px;
      margin: 0 10px 0 5px;
    }
  }
}
</style>