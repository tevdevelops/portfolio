<template>
  <Layout>
    <div class="template template--home">
      <div class="swiper page-slider swiper-container">
        <div class="swiper-wrapper">
          <div id="landing" class="swiper-slide">
            <div class="page-slider__slide--container">
              <div class="logo__container">
                <LogoSquareWhite />
              </div>
              <h1>Full Stack Web Developer</h1>
              <p>
                Yerp 👋 (hello in Philly) I'm Tevin Rivera, a Web Developer
                currently based in Philly working at
                <a href="http://kingandpartners.com/" target="_blank">
                  King & Partners </a
                >. I'm passionate about
              </p>
            </div>
          </div>

          <div id="portfolio" class="swiper-slide">Portfolio Coming Soon</div>
          <div id="blog" class="swiper-slide">Blog Posts</div>
        </div>
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
    </div>
  </Layout>
</template>

<script>
import LogoSquareWhite from '~/assets/svgs/logo-square-white.svg?inline'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

import anime from 'animejs/lib/anime.es.js'

export default {
  components: {
    LogoSquareWhite,
  },

  data() {
    return {}
  },

  computed: {},

  mounted() {
    const vue = this

    var homeSlider = new Swiper('.page-slider', {
      speed: 500,
      loop: true,
      loopedSlides: 3,
      slidesPerView: 1,
      freeMode: false,
      keyboard: true,
      effect: 'cube',
      cubeEffect: {
        slideShadows: false,
        shadow: false,
      },
      mousewheel: {
        enabled: true,
        sticky: true,
      },
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      //   draggable: true,
      // },
    })
  },
}
</script>

<style lang="scss">
.template--home {
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

#landing {
  text-align: center;

  .logo {
    &__container {
      margin: 0 auto 30px;

      svg {
        width: 250px;
        height: 250px;
        margin: 0 auto;
      }
    }
  }

  h1 {
    margin-bottom: 20px;
  }
}
</style>
