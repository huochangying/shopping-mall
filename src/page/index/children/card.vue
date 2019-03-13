<template>
  <div class="card-box">
    <Row>
      <Col class="card-width">
        <div class="left float">
          <h3>
            <i :style="{background:cardData.color}"></i>
            {{cardData.title}}
          </h3>
          <Card shadow class="left-card" :style="{background:cardData.colorBg}">
            <div class="triangle" :style="{borderBottom: '45px solid '+cardData.color}"></div>
            <div class="count">{{cardData.count}}F</div>
            <ul>
              <li>
                <Icon type="ios-water-outline" class="icon"/>苹果
              </li>
              <li>
                <Icon type="ios-water-outline" class="icon"/>橙子
              </li>
              <li>
                <Icon type="ios-water-outline" class="icon"/>进口水果
              </li>
              <li>
                <Icon type="ios-water-outline" class="icon"/>直采水果
              </li>
              <li>
                <Icon type="ios-water-outline" class="icon"/>国产水果
              </li>
              <li>
                <Icon type="ios-water-outline" class="icon"/>进口蔬菜
              </li>
            </ul>
          </Card>
          <img :src="cardData.bgImg" alt>
        </div>
        <div class="right float">
          <Tabs value="tab-1" class="tab-one">
            <TabPane label="精选推荐" name="tab-1" color="default">
              <div class="template" :style="{borderTop: '1px solid '+cardData.color}">
                <card-template v-for="(item,index) in cardData.card" :sendCard="item" :key="index"></card-template>
              </div>
            </TabPane>
            <TabPane label="热卖推荐" name="tab-2">
              <div></div>
            </TabPane>
          </Tabs>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    cardData: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.card-width {
  width: 1215px;
  margin: auto;
}
.card-box {
  padding: {
    top: 15px;
  }
  .left {
    width: 242px;
    height: 500px;
    .left-card {
      position: relative;
      padding-top: 50px;
      .triangle {
        border: 45px solid transparent;
        position: absolute;
        top: -45px;
        transform: rotate(315deg);
        left: -45px;
      }
      .count {
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
        position: absolute;
        top: 8px;
        left: 8px;
      }
      ul {
        margin-left: 20px;
        overflow: hidden;
        li {
          float: left;
          width: 85px;
          height: 36px;
          padding-left: 25px;
          line-height: 36px;
          text-align: left;
          position: relative;
        }
        .icon {
          position: absolute;
          left: 6px;
          top: 12px;
        }
      }
    }
  }
  .right {
    width: 970px;
    .template {
      overflow: hidden;
    }
  }
}
h3 {
  height: 38px;
  padding-left: 15px;
  font-weight: normal;
  font-size: 20px;
  line-height: 38px;
  position: relative;
  i {
    position: absolute;
    left: 0;
    top: 8px;
    width: 5px;
    height: 20px;
  }
}
</style>
<style lang="scss">
$color: #FDA421;
.tab-one {
  .ivu-tabs-nav .ivu-tabs-tab:hover {
    color: $color;
  }
  .ivu-tabs-nav-container:focus .ivu-tabs-tab-focused {
    border-color: $color !important;
  }
  .ivu-tabs-nav .ivu-tabs-tab-active {
    color: $color;
  }
  .ivu-tabs-ink-bar {
    background-color: $color;
  }
  .ivu-tabs-nav .ivu-tabs-tab {
    padding: 10px 16px;
  }
  .ivu-tabs-nav {
    margin-left: 30px;
  }
}
</style>
