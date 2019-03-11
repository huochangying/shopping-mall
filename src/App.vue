<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <div class="footer">欢迎光临</div>
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
.cursor{
  cursor: pointer;
}
.ivu-card {
  border-radius: 0;
}
.ivu-tabs-bar {
  border-bottom: none;
  margin-bottom: 0;
}
.footer {
  color: #c30000;
  margin-top: 30px;
  border-top: 2px solid rgb(190, 231, 123);
  padding: 50px;
  text-align: center;
  font-size: 35px;
  font-family: STXingkai;
  font-weight: bold;
}
$color: #c30000 !important;

.ivu-input-search {
  background: $color;
  border-color: $color;
  &:hover {
    background: $color;
    border-color: $color;
  }
}
.ivu-input:focus,
.ivu-input:hover {
  border-color: $color;
  box-shadow: none;
}
.ivu-input-with-search:hover .ivu-input {
  border-color: $color;
}
.ivu-input {
  border-color: $color;
}
</style>
