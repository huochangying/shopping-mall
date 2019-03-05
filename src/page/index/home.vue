<template>
  <div>
    <router-view name="searchBox"></router-view>
    <router-view name="menu"></router-view>
    1123132
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss'>
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