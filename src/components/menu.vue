<template>
  <div class="menu" :style="{marginBottom:height?'450px':''}">
    <Row class="background" :style="{height:height?'496px':''}">
      <Col :lg="{span:18,offset:3}" :md="{span:24}" class="min-width">
        <div :class="['all-kinds', !height?'slide':'']">
          <h2>全部商品分类</h2>
          <ul class="nav-side">
            <li
              @mouseenter="showItem"
              @mouseleave="hideItem"
              v-for="(item,index) in menu"
              :key="index"
            >
              <Icon :type="item.icon" size="14" class="nav-side-icon"/>
              <span class="nav-side-item" @click="goList(item.option)">{{item.option}}</span>
              <div class="menu-item">
                <ul>
                  <li v-for="(item,index) in item.menus" :key="index">
                    <h4>{{item.title}}</h4>
                    <span v-for="(item,index) in item.tags" :key="index" @click="goList(item)">{{item}}</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <router-view name="carousel"></router-view>
      </Col>
    </Row>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {};
  },
  created() {
    this.getMenu();
  },
  props: {
    height: {
      type: String
    }
  },
  computed: {
    ...mapState({
      menu: state => state.Menu.menu
    })
  },
  methods: {
    ...mapActions(["getMenu"]),
    showItem() {
      this.showHide = true;
    },
    hideItem() {
      this.showHide = false;
    },
    goList(goods) {
      this.$router.push({path: '/productList', query: {goods: goods}});
    }
  }
};
</script>
<style lang="scss" scoped>
$color: #2d8800;
$color-two: #3a9900;
.menu {
  .slide {
    .nav-side {
      height: 0 !important;
      padding: 0 !important;
      overflow: hidden;
      transition: 0.3s;
      &:hover {
        transition: 0s;
        height: 450px !important;
        padding: 12px 0 28px 0 !important;
        overflow: visible;
      }
    }
    h2:hover + .nav-side {
      height: 450px !important;
      padding: 12px 0 28px 0 !important;
    }
  }
  .min-width {
    min-width: 1010px;
  }
  .background {
    background: url("../assets/img/timg.jpg") center 46px no-repeat;
  }
  font-family: "微软雅黑";
  height: 46px;
  border-bottom: 2px solid $color;
  .all-kinds {
    position: relative;
    background: $color-two;
    color: #ffffff;
    width: 210px;
    float: left;
    z-index: 12;
    h2 {
      font-size: 16px;
      line-height: 46px;
      text-align: center;
      height: 46px;
      background: $color;
    }
    ul.nav-side {
      padding: 12px 0 28px 0;
      height: 450px;
      position: absolute;
      background: $color-two;
      width: 210px;
      > li {
        padding: 0 20px;
        font-size: 14px;
        height: 32px;
        line-height: 32px;
        &:hover {
          background: #ffffff;
          color: $color-two;
          cursor: pointer;
        }
        &:hover .menu-item {
          display: block;
          z-index: 11;
        }
        .nav-side-icon {
          margin-right: 20px;
        }
      }
    }
  }
  .menu-item {
    display: none;
    background: #ffffff;
    width: 788px;
    height: 450px;
    padding: 30px 15px 0 15px;
    border-right: 2px solid $color-two;
    border-bottom: 2px solid $color-two;
    position: absolute;
    left: 210px;
    top: 0px;
    color: #606060;
    li {
      height: 40px;
      line-height: 40px;
      span {
        padding: 0 5px;
      }
      h4 {
        float: left;
        width: 85px;
        padding: 0 20px 0 0;
      }
    }
  }
}
</style>

