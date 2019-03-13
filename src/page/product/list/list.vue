<template>
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
        <Page :current="2" :total="50" simple  class="right"/>
      </div>
    </Col>
  </Row>
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
.right{
    float: right
}
</style>