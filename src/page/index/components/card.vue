<template>
  <div class="card-box">
    <Row>
      <Col :lg="{span:18,offset:3}" :md="{span:24}">
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
        <div class="right float"></div>
      </Col>
    </Row>
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
$color: #bee77b;
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
}
h3 {
  height: 38px;
  padding-left: 15px;
  font-weight: normal;
  font-size: 20px;
  line-height: 38px;
  position: relative;
  border-bottom: 1px solid $color;
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