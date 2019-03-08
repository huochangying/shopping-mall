<template>
  <div class="card-box">
    <Row>
      <Col :lg="{span:18,offset:3}" :md="{span:24}" class="card-width">
        <div class="left float">
          <h3>
            <i></i>
            时令果蔬
          </h3>
          <Card shadow class="left-card">
            <div class="triangle"></div>
            <div class="count">1F</div>
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
          <img src="../../../assets/shuiguo.jpg" alt>
        </div>
        <div class="right float">
          <Tabs value="tab-1" class="tab-one">
            <TabPane label="精选推荐" name="tab-1">
              <div class="template">
                <card-template v-for='(item,index) in card' :sendCard='item' :key='index'></card-template>
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
  data() {
    return {
      card: [
        {
          img: require("../../../assets/card-1.jpg"),
          title: "【预售】一级 无籽褚柑箱装10斤 预计3月16日前发货",
          money: "68"
        },
        {
          img: require("../../../assets/card-2.jpg"),
          title: "【预售】一级 桔子 预计3月16日前发货",
          money: "68"
        },
        {
          img: require("../../../assets/card-3.jpg"),
          title: "【预售】一级 草莓箱装10斤 预计3月16日前发货",
          money: "68"
        },
        {
          img: require("../../../assets/card-1.jpg"),
          title: "【预售】一级 无籽褚柑箱装10斤 预计3月16日前发货",
          money: "68"
        },
        {
          img: require("../../../assets/card-2.jpg"),
          title: "【预售】一级 桔子箱装10斤 预计3月16日前发货",
          money: "68"
        },
        {
          img: require("../../../assets/card-3.jpg"),
          title: "【预售】一级 草莓柑箱装10斤 预计3月16日前发货",
          money: "68"
        },
        {
          img: require("../../../assets/card-1.jpg"),
          title: "【预售】一级 无籽褚柑箱装10斤 预计3月16日前发货",
          money: "68"
        },
        {
          img: require("../../../assets/card-2.jpg"),
          title: "【预售】一级 桔子箱装10斤 预计3月16日前发货",
          money: "68"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$color: #bee77b;
.card-width {
  min-width: 1250px;
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
      background: $color;
      .triangle {
        border: 45px solid transparent;
        border-bottom: 45px solid #80bb5e;
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
      border-top: 1px solid $color;
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
    background: $color;
  }
}
</style>
<style lang="scss">
$color: #bee77b;
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
