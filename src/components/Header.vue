<template>
  <div class="nav">
    <Row>
      <Col :lg="{span:8,offset:4}" :md="{span:12}" class="nav-content">
        <Dropdown placement="bottom-start" trigger="click">
          <a href="javascript:void(0)">
            <Icon type="ios-pin" color="green"/>
            {{city}}
          </a>
          <DropdownMenu slot="list">
            <div class="city">
              <p v-for="(items, index) in cityArr" :key="index">
                <span v-for="(item, index) in items" class="city-item" :key="index">{{item}}</span>
              </p>
            </div>
          </DropdownMenu>
        </Dropdown>
      </Col>
      <Col :lg="{span:8}" :md="{span:12}" class="right nav-content"></Col>
    </Row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["city", "cityArr"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.nav {
  height: 36px;
  background: #f5f5f5;
  color: #606060;
  a {
    color: #606060;
  }
  .nav-content {
    line-height: 36px;
    .city-item {
      padding: 0 5px;
    }
  }
  .right {
    text-align: right;
  }
}
</style>
