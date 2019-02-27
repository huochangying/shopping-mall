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
        <span class='cart'>
          <Icon type="md-cart" color="#2d8800" size="15" class="icon"/>购物车
        </span>
        <span class="welcome login">登录</span>
        <span class="welcome register">注册</span>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["city", "cityArr"])
  },
  methods: {
    changeCity(city) {
      this.$store.state.city = city;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$cursor: pointer;
$color: #2d8800;
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
  .cart{
    @extend .login;
  }
}
</style>
