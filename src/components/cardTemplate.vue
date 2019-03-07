<template>
  <div class="float">
    <div class="small-card ">
      <img src="../assets/card-1.jpg" alt>
      <div class="title">【预售】一级 无籽褚柑箱装10斤 预计3月16日前发货</div>
      <div class="count">￥
        <span>68</span>
      </div>
    </div>
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
.small-card {
  width: 242.5px;
  height: 262px;
  overflow: hidden;
  border-right:1px solid #ededed;
  border-bottom:1px solid #ededed;
  img {
    width: 180px;
    margin: 6px auto 0 auto;
    display: block;
  }
  .title {
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 200px;
    margin: 8px auto 0;
    font-size: 14px;
  }
  .count {
    height: 26px;
    font-size: 14px;
    line-height: 26px;
    color: #dd0800;
    width: 200px;
    margin: auto;
    span{
        font-size: 20px;
        font-weight: bold
    }
  }
}
</style>