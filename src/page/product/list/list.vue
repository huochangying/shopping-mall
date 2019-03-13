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
        <div class="list">
          <div class="card">
            <img src="../../../assets/img/binggan-1.jpg" alt>
            <div>
              ￥
              <span>66</span>
            </div>
            <div>
              <a href="#">【中粮海外直采】Bourbon波路梦黄油味饼干52g（日本进口 盒）</a>
            </div>
            <div>
              <span class="float">已评价 88</span>
              <span class="right">加入购物车</span>
            </div>
          </div>

          <div class="card">
            <img src="../../../assets/img/binggan-1.jpg" alt>
            <div>
              ￥
              <span>66</span>
            </div>
            <div>
              <a href="#">【中粮海外直采】Bourbon波路梦黄油味饼干52g（日本进口 盒）</a>
            </div>
            <div>
              <span class="float">已评价 88</span>
              <span class="right">加入购物车</span>
            </div>
          </div>
          <div class="card">
            <img src="../../../assets/img/binggan-1.jpg" alt>
            <div>
              ￥
              <span>66</span>
            </div>
            <div>
              <a href="#">【中粮海外直采】Bourbon波路梦黄油味饼干52g（日本进口 盒）</a>
            </div>
            <div>
              <span class="float">已评价 88</span>
              <span class="right">加入购物车</span>
            </div>
          </div>
          <div class="card">
            <img src="../../../assets/img/binggan-1.jpg" alt>
            <div>
              ￥
              <span>66</span>
            </div>
            <div>
              <a href="#">【中粮海外直采】Bourbon波路梦黄油味饼干52g（日本进口 盒）</a>
            </div>
            <div>
              <span class="float">已评价 88</span>
              <span class="right">加入购物车</span>
            </div>
          </div>
        </div>
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
$color:#43a400;
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
      color: #43a400;
      border-color: #43a400;
    }
  }
}
.list {
  min-width: 1215px;
  margin: auto;
  overflow: hidden;
  .card {
    overflow: hidden;
    width: 253px;
    float: left;
    &:hover{
      border:2px solid $color;
      position: relative
    }
    img {
      width: 220px;
      height: 220px;
    }
  }
}

.right {
  float: right;
}
</style>