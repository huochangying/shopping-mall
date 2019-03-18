<template>
  <div>
    <Row>
      <Col :lg="{span:18,offset:3}" :md="{span:24}">
        <Breadcrumb separator=">" class="m-30">
          <BreadcrumbItem to>全部类别</BreadcrumbItem>
          <BreadcrumbItem to></BreadcrumbItem>
        </Breadcrumb>
        <div class="sort">
          <div class="float">销量</div>
          <div class="float">价格</div>
          <div class="float">评论数</div>
          <Page :current="1" :total="10" simple class="right"/>
        </div>
        <Row class="list">
          <Col class="card" :md="{span:6}">
            <img src="../../../assets/img/binggan-1.jpg" alt>
            <div class="price">
              ￥
              <span>66</span>
            </div>
            <div class="title">
              <a href="#">【中粮海外直采】Bourbon波路梦黄油味饼干52g（日本进口 盒）</a>
            </div>
            <div class="bottom">
              <span class="float">已评价
                <span class="count">88</span>
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
export default {
  name: "",
  data() {
    return {};
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
    }
    .price {
      color: #c40000;
      font-size: 16px;
      span {
        font-size: 20px;
      }
    }
    .title {
      a {
        word-break: break-all;
      }
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