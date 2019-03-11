<template>
  <div class="search-box">
    <Row>
      <Col :lg="{span:18,offset:3}" :md="{span:24}" class>
        <div class="search-container">
          <div class="name cursor" @click="goHome">SHOPPING</div>
          <div class="search">
            <Input search enter-button="搜 索" placeholder=" 狂欢周 满199减100"/>
          </div>
          <div class="name">MALL</div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  methods:{
    goHome(){
      this.$router.push('/')
    }
  }
};
</script>
<style lang='scss' scoped>
.search-box {
  margin: 30px 0;
  height: 85px;
  .search-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search {
      width: 580px;
      height: 36px;
    }
    .name {
      width: 200px;
      height: 80px;
      color: #c30000;
      line-height: 80px;
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      font-family: STXingkai;
    }
  }
}
</style>

