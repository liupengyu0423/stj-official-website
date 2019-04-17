<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <a href="#"><img src="../images/banner1.png"
               alt=""></a>
      </div>
      <div class="swiper-slide">
        <a href="#"><img src="../images/banner2.png"
               alt=""></a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Swiper',
  data () {
    return {

    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      autoplay: true,
      delay: 2000,
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      // 如果需要滚动条
      scrollbar: '.swiper-scrollbar',
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  .swiper-wrapper,
  .swiper-wrapper img {
    width: 100%;
    height: 100%;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    background-image: url("../images/prev.png");
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    background-image: url("../images/next.png");
  }
  .swiper-button-prev,
  .swiper-button-next {
    background-size: 27px 36px;
  }
}
</style>