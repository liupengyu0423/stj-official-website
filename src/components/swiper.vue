<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-slide1">
        <a href="#">
          <!-- <img src="../images/banner1.png"
               alt="">--></a>
      </div>
      <div class="swiper-slide swiper-slide2">
        <a href="#">
          <!-- <img src="../images/banner2.png"
               alt="">--></a>
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
.swiper-container-horizontal > .swiper-scrollbar {
  display: none !important;
}
.swiper-container {
  width: 100%;
  height: 760px;
  .swiper-slide1 {
    background: url('../images/banner1.png') no-repeat center center;
    background-size: cover;
  }
  .swiper-slide2 {
    background: url('../images/banner2.png') no-repeat center center;
    background-size: cover;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    background-image: url('../images/prev.png');
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    background-image: url('../images/next.png');
  }
  .swiper-button-prev,
  .swiper-button-next {
    background-size: 27px 36px;
  }
}
@media (min-width: 1440px) {
  .swiper-container {
    height: 760px; /* no */
  }
}
</style>