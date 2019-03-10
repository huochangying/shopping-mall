<template>
  <div class="float">
    <div class="small-card">
      <img :src="sendCard.img" alt>
      <div class="title">{{sendCard.title}}</div>
      <div class="count">
        ￥
        <span>{{sendCard.money}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    sendCard: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.small-card {
  width: 242.5px;
  height: 262px;
  overflow: hidden;
  border-right: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  cursor: pointer;
  &:hover img{
    transform: scale(0.8);
  }
  img {
    width: 180px;
    margin: 6px auto 0 auto;
    display: block;
    transition: 0.5;
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
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>