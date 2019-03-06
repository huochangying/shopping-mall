<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="home"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang='scss'>
ul,
li {
  list-style: none;
}
.float {
  float: left;
}
.ivu-card{
  border-radius: 0;
}
.ivu-tabs-bar{
  border-bottom: none;
  margin-bottom:0
}
</style>
