<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="home"></router-view>
    <div class="footer">
      欢迎光临
    </div>
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
.footer{
  color: #c30000;
  margin-top: 30px;
  border-top:2px solid rgb(190, 231, 123);
  padding: 50px;
  text-align: center;
  font-size:35px;
  font-family: STXingkai;
  font-weight: bold
}
</style>
