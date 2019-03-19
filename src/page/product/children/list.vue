<template>
  <div>
    <Row>
      <Col :lg="{span:18,offset:3}" :md="{span:24}">
        <Breadcrumb separator=">" class="m-30">
          <BreadcrumbItem to>全部类别</BreadcrumbItem>
          <BreadcrumbItem to>{{bread}}</BreadcrumbItem>
        </Breadcrumb>
        <div class="sort">
          <div class="float">销量</div>
          <div class="float">价格</div>
          <div class="float">评论数</div>
          <Page :current="1" :total="goods.length" simple class="right"/>
        </div>
        <Row class="list">
          <Col class="card" :md="{span:6}" v-for="(item,index) in goods" :key="index">
            <img :src="getImg(item.img)" @click="goGoods()" alt>
            <div class="price">
              ￥
              <span>{{item.price}}</span>
            </div>
            <div class="title">
              <a href="#">{{item.title}}</a>
            </div>
            <div class="bottom">
              <span class="float">
                已评价
                <span class="count">{{item.count}}</span>
              </span>
              <span class="right">加入购物车</span>
            </div>
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
      bread: ""
    };
  },
  created() {
    this.changeList();
  },
  watch: {
    $route(to, from) {
      this.changeList();
    }
  },
  computed: {
    ...mapState({
      goods: state => state.List.goods
    })
  },
  methods: {
    ...mapActions(["getList"]),
    getImg: img => cache.getImgUrl(img),
    changeList() {
      let _goods = this.$route.query.goods;
      this.bread = _goods;
      this.getList(_goods);
    },
    goGoods(){
      cache.goGoods();
    }
  }
};
</script>

<style lang="scss" scoped>
$color: #43a400;
.m-30 {
  margin: {
    top: 15px;
    bottom: 15px;
  }
}
.sort {
  background: #f5f5f5;
  padding: 10px;
  overflow: hidden;
  div {
    width: 52px;
    height: 24px;
    margin-right: -1px;
    text-align: center;
    line-height: 24px;
    border: 1px solid #d9d9d9;
    background: #fff;
    cursor: pointer;
    &:hover {
      position: relative;
      color: $color;
      border-color: $color;
    }
  }
}
.list {
  margin: auto;
  overflow: hidden;
  .card {
    overflow: hidden;
    float: left;
    border: 2px solid #ffffff;
    padding: 15px;
    &:hover {
      border: 2px solid $color;
      position: relative;
    }
    img {
      width: 90%;
      margin: 15px auto;
      display: block;
      cursor: pointer;
    }
    .price {
      color: #c40000;
      font-size: 16px;
      span {
        font-size: 20px;
      }
    }
    .title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .bottom {
      margin-top: 10px;
      > span {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        border: 1px solid #ededed;
        text-align: center;
        overflow: hidden;
        cursor: pointer;
        padding: 0 8px;
        .count {
          color: $color;
        }
      }
    }
  }
}

.right {
  float: right;
}
</style>