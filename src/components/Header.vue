<template>
  <div class="nav">
    <Row>
      <Col :lg="{span:9,offset:3}" :md="{span:12}" class="nav-content">
        <Icon type="ios-pin" size="15" color="#2d8800" class="icon"/>当前城市：
        <Dropdown trigger="click">
          <a href="javascript:void(0)">
            {{city}}
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list" class="list">
            <div class="city">
              <p v-for="(items, index) in cityArr" :key="index">
                <span
                  v-for="(item, index) in items"
                  class="city-item"
                  :key="index"
                  @click="changeCity(item)"
                >{{item}}</span>
              </p>
            </div>
          </DropdownMenu>
        </Dropdown>
        <span class="welcome">hi，欢迎来到 shopping-mall !</span>
      </Col>
      <Col :lg="{span:9}" :md="{span:12}" class="right nav-content">
        <Dropdown trigger="custom" :visible="visible" placement="bottom-start">
          <a href="javascript:void(0)">
            <Icon type="md-cart" color="#2d8800" size="15" class="icon"/>购物车
          </a>
          <DropdownMenu slot="list">
            <div class="shopping" v-for="(item,index) in cart" :key="index">
              <img :src="getImgUrl(item.img)" alt>
              <div class="right-box">
                <div class="title">{{item.title}}</div>
                <div class="content">
                  <div class="float count">×{{item.count}}</div>
                  <div class="cancel" @click="removeCart(item.title)">删除</div>
                </div>
              </div>
            </div>
            <div class="pay" @click="goPay()">支付</div>
          </DropdownMenu>
        </Dropdown>
        <span class="welcome login">登录</span>
        <span class="welcome register">注册</span>
      </Col>
    </Row>
  </div>
</template>

<script>
import cache from "@/utils/cache";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.getCity();
  },
  computed: {
    ...mapState({
      city: state => state.Header.city,
      cityArr: state => state.Header.cityArr,
      visible: state => state.Cart.visible,
      cart: state => state.Cart.cart
    })
  },
  methods: {
    ...mapActions({ getCity: "getCity", commitPay: "Cart/commitPay" }),
    ...mapMutations({
      changeCity: "changeCity",
      removeCart: "Cart/removeCart",
      pay: "Cart/pay"
    }),
    goPay() {
      this.commitPay(this.$Message);
    },
    getImgUrl: img => cache.getImgUrl(img)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$cursor: pointer;
$color: #2d8800;
$color-red: #c30000;
.nav {
  height: 36px;
  background: #f5f5f5;
  color: #606060;
  .icon {
    margin-right: 5px;
  }
  a {
    color: #606060;
  }
  .list {
    padding: 0 5px;
  }
  .nav-content {
    line-height: 36px;
    .city-item {
      padding: 0 5px;
      cursor: $cursor;
      &:hover {
        color: $color;
      }
    }
    .shopping {
      overflow: hidden;
      margin: 0 5px;
      width: 215px;
      border-bottom: 1px dashed $color;
      padding: 5px;
      cursor: default;
      img {
        width: 50px;
        display: block;
        float: left;
      }
      .right-box {
        float: left;
        width: 150px;
        padding: 0 5px;
        line-height: 16px;
        .title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .count {
          font-size: 18px;
          line-height: 34px;
          color: $color-red;
        }
        .cancel {
          float: right;
          padding: 1px 8px;
          line-height: 0;
          font-size: 16px;
          margin-top: 17px;
          cursor: pointer;
          &:hover {
            color: $color-red;
          }
        }
      }
    }
    .pay {
      background: #2d8800;
      width: 50px;
      text-align: center;
      float: right;
      margin: 5px 18px 0 0;
      border-radius: 5px;
      color: #fff;
      height: 25px;
      line-height: 25px;
      cursor: pointer;
    }
  }
  .right {
    text-align: right;
  }
  .welcome {
    margin-left: 15px;
    width: 155px;
  }
  .login {
    cursor: $cursor;
    &:hover {
      color: $color;
    }
  }
  .register {
    @extend .login;
  }
}
</style>
