<template>
  <Layout>
    <div class="template--home">
      <div class="swiper page-slider swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="page-slider__slide--container">
              Logo Animation Here*
              <h2>Full Stack Web Developer</h2>
              <p>Some quick about text about myself</p>
            </div>
          </div>
          <div class="swiper-slide">Portfolio Coming Soon</div>
          <div class="swiper-slide">Blog Posts</div>
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  data() {
    return {}
  },

  computed: {},

  mounted() {
    const vue = this

    var homeSlider = new Swiper('.page-slider', {
      speed: 500,
      slidesPerView: 1,
      freeMode: false,
      keyboard: true,
      effect: 'cube',
      mousewheel: {
        enabled: true,
        sticky: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    })
  },
}
</script>

<style lang="scss">
html,
body {
  position: relative;
  height: 100%;
}

.template--home {
  height: 100vh;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
