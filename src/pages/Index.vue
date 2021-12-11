<template>
  <Layout>
    <div class="template template--home">
      <div class="swiper page-slider swiper-container">
        <div class="swiper-wrapper">
          <div id="about" data-hash="about" class="swiper-slide landing">
            <div class="page-slider__slide--container landing__container">
              <div class="logo__container">
                <LogoSquareBlack />
              </div>
              <div class="landing__copy">
                <h1>Creative Developer</h1>
                <p>
                  Yerp 👋 (hello in Philly)
                  <br />
                  <br />
                  I'm <strong><em>Tevin Rivera</em></strong> 🇺🇸 🇳🇮, a Full Stack
                  Web Developer based in Philly. Currently, I build headless Vue
                  / Nuxt / WordPress sites at
                  <a href="http://kingandpartners.com/" target="_blank"
                    >King &#38; Partners</a
                  >.
                  <br />
                  <br />
                  I'm passionate about
                  <strong><em>well designed,</em></strong> highly immersive
                  digital experiences. I'm constantly improving my
                  <strong><em>Full Stack Javascript</em></strong> skills as well
                  as learning <a href="https://threejs.org/">Three JS</a> so
                  that I can create stunning <strong><em>3D sites</em></strong
                  >. Follow my journey on my <a href="/#blog">blog</a>.
                  <!-- I'm passionate about
                  <strong><em>well designed,</em></strong> highly immersive
                  digital experiences. I am on the journey of becoming a leader
                  in <strong><em>modern Web Development.</em></strong> -->
                </p>
              </div>
            </div>
          </div>

          <div data-hash="portfolio" class="swiper-slide portfolio">
            <h2 class="portfolio__header">Portfolio Coming Soon</h2>
          </div>

          <div data-hash="blog" class="swiper-slide blog">
            <div class="flex--column flex--center max-width-height">
              <h2 class="blog__header">Blog Posts</h2>
              <div class="grid blog__grid">
                <template v-for="(post, index) in $page.posts.edges">
                  <Card :key="index" v-bind="createProps(post.node)" />
                </template>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
  posts: allBlogPost {
    edges {
      node {
        id
      title
      path
      series
      seriesNum
      excerpt
      featuredImage
      content
      tags
      }
    }
  }
}
</page-query>

<script>
import LogoSquareBlack from '~/assets/svgs/logo-square-black.svg?inline'
import Swiper from 'swiper'

// import anime from 'animejs/lib/anime.es.js'

import Grid from '~/components/Grid/Grid.vue'
import Card from '~/components/Card/Card.vue'

export default {
  components: {
    LogoSquareBlack,
    Grid,
    Card,
  },

  data() {
    return {
      slider: null,
    }
  },

  computed: {},

  methods: {
    createProps(item) {
      return {
        header: item.title,
        tag: `${item.seriesNum} | ${item.series}`,
        copy: item.excerpt,
        image: item.featuredImage,
        link: item.path,
      }
    },

    updateSlider(event) {
      console.log('hi', event)
    },
  },

  mounted() {
    const vue = this

    this.slider = new Swiper('.page-slider', {
      speed: 500,
      loop: true,
      loopedSlides: 3,
      slidesPerView: 1,
      freeMode: false,
      keyboard: true,
      // history: {
      //   replaceState: true,
      //   key: '',
      // },
      hashNavigation: {
        replaceState: true,
        watchState: true,
      },
      // effect: 'slide',
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true,
      // },
      // effect: 'cube',
      // cubeEffect: {
      //   slideShadows: false,
      //   shadow: false,
      // },
      mousewheel: {
        enabled: true,
        sticky: true,
      },
      simulateTouch: false,
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      //   draggable: true,
      // },
    })

    this.slider.on('hashChange', function() {
      console.log('hash changed')
    })

    window.addEventListener('hashchange', this.updateSlider, false)
  },

  beforeDestroy() {
    window.removeEventListener('hashchange', this.updateSlider)
    this.slider.destroy()
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
  padding: 1.25rem;
  overflow-y: scroll;
  @include hide-scrollbar;

  @include breakpoint($tablet) {
    padding: 1.75rem;
  }

  @include breakpoint($desktop) {
    padding: 2.5rem;
  }
}

.landing {
  text-align: center;

  @media only screen and (max-height: 600px) {
    align-items: flex-start;
  }

  .logo {
    &__container {
      margin: 0 auto 1rem;
      width: 6.25rem;
      height: 6.25rem;

      svg {
        widows: 100%;
        margin: 0 auto;
      }
    }
  }

  h1 {
    margin-bottom: 1rem;
  }

  @include breakpoint($tablet) {
    &__copy {
      max-width: 545px;
      margin: 0 auto;
    }

    h1 {
      br {
        display: none;
      }
    }

    .logo {
      &__container {
        margin: 0 auto 1.5rem;
        width: 9rem;
        height: 9rem;
      }
    }
  }

  @include breakpoint($tabletLandscape) {
  }

  @include breakpoint($desktop) {
    &__copy {
      max-width: 725px;
    }
  }
}

.portfolio {
  text-align: center;

  &__header {
    @include h5;
  }
}

.blog {
  overflow-y: scroll;

  &__header {
    justify-self: flex-start;
  }

  &__grid {
    width: 100%;
    gap: 20px;
    margin: auto 0;
  }

  h2 {
    text-align: center;
  }

  @include breakpoint($tablet) {
    &__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @include breakpoint($desktop) {
    &__header {
    }

    &__grid {
      gap: 30px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
