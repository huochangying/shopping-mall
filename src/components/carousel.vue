<template>
  <div class='float top-46'>
    <Carousel autoplay v-model="value2" loop class="carousel-box">
      <CarouselItem>
        <div>
          <img src="@/assets/1.jpg" alt>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div>
          <img src="@/assets/2.jpg" alt>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div>
          <img src="@/assets/3.jpg" alt>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: 0
    };
  }
};
</script>
<style lang="scss" scoped>
.carousel-box {
  height: 450px;
  width:800px;
}
.top-46{
    top:46px;
    position: relative
}
</style>

