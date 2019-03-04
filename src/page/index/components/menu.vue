<template>
  <div class="menu">
    <Row>
      <Col :lg="{span:18,offset:3}" :md="{span:24}">
        <div class="all-kinds">
          <h2>全部商品分类</h2>
          <ul>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">家用电器</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">手机</span> /
              <span class="nav-side-item">运营商</span> /
              <span class="nav-side-item">数码</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">电脑</span> /
              <span class="nav-side-item">办公</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">家居</span> /
              <span class="nav-side-item">家装</span> /
              <span class="nav-side-item">厨具</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">男装</span> /
              <span class="nav-side-item">女装</span> /
              <span class="nav-side-item">童装</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">美妆个护</span> /
              <span class="nav-side-item">宠物</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">箱包</span> /
              <span class="nav-side-item">钟表</span> /
              <span class="nav-side-item">珠宝</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">运动</span> /
              <span class="nav-side-item">户外</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">汽车</span> /
              <span class="nav-side-item">汽车用品</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">母婴</span> /
              <span class="nav-side-item">玩具乐器</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">食品</span> /
              <span class="nav-side-item">酒类</span> /
              <span class="nav-side-item">特产</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">礼品鲜花</span> /
              <span class="nav-side-item">农资绿植</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">医药保健</span> /
              <span class="nav-side-item">计生情趣</span>
            </li>
            <li @mouseenter="showItem" @mouseleave="hideItem">
              <Icon type="ios-beer-outline" size="14" class="nav-side-icon"/>
              <span class="nav-side-item">图书</span> /
              <span class="nav-side-item">音像</span> /
              <span class="nav-side-item">电子书</span>
            </li>
          </ul>
        </div>
        <div class="menu-item" v-show="showHide">
          <ul>
            <li v-for="(item,key) in menu" :key="index">
              <h4>{{item.title}}</h4>
              <span v-for="(item,key) in item.tags" :key="index">{{item}}</span>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showHide: false
    };
  },
  computed: {
    ...mapState(["menu"])
  },
  methods: {
    showItem() {
      this.showHide = true;
    },
    hideItem() {
      this.showHide = false;
    }
  }
};
</script>
<style lang="scss" scoped>
$color: #2d8800;
$color-two: #3a9900;
.menu {
  font-family: "微软雅黑";
  height: 46px;
  border-bottom: 2px solid $color;
  .all-kinds {
    background: $color-two;
    color: #ffffff;
    width: 210px;
    h2 {
      font-size: 16px;
      line-height: 46px;
      text-align: center;
      height: 46px;
      background: $color;
    }
    ul {
      padding: 12px 0 28px 0;
      li {
        padding: 0 20px;
        font-size: 14px;
        height: 32px;
        line-height: 32px;
        &:hover {
          background: #ffffff;
          color: $color-two;
          cursor: pointer;
        }
        .nav-side-icon {
          margin-right: 20px;
        }
      }
    }
  }
  .menu-item {
    width: 757px;
    height: 419px;
    padding: 30px 15px 0 15px;
    border-right: 2px solid $color-two;
    border-bottom: 2px solid $color-two;
    position: absolute;
    left: 210px;
    top: 46px;
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

