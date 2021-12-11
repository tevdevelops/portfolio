<template>
  <header class="header">
    <div class="header__frame header__frame--top">
      <nav class="header__nav header__nav--horizontal header__container">
        <g-link to="/" class="header__logo--long" aria-label="Home">
          <LogoLong />
        </g-link>
      </nav>
    </div>

    <div class="header__frame header__frame--bottom">
      <nav
        class="header__nav header__nav--horizontal header__nav--main header__container"
      >
        <!-- <g-link to="/" class="header__logo" aria-label="Home">
          <LogoSquare />
        </g-link> -->
        <a
          class="hover--underline"
          @click.prevent="hackHashChange"
          href="/#about"
          >About</a
        >
        <a
          class="hover--underline"
          @click.prevent="hackHashChange"
          href="/#portfolio"
          >Portfolio</a
        >
        <a
          class="hover--underline"
          @click.prevent="hackHashChange"
          href="/#blog"
          >Blog</a
        >
        <a
          class="hover--underline"
          @click="hackHashChange"
          href="https://www.buymeacoffee.com/tevdevelops"
          target="_blank"
        >
          Support
        </a>
      </nav>
    </div>

    <div class="header__frame header__frame--right">
      <nav
        class="header__nav header__nav--vertical header__nav--social header__container"
      >
        <a
          href="https://github.com/tevdevelops"
          class="header__social-link"
          target="_blank"
        >
          <font-awesome :icon="['fab', 'github']" size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/tevdevelops/"
          class="header__social-link"
          target="_blank"
        >
          <font-awesome :icon="['fab', 'linkedin-in']" size="lg" />
        </a>
        <a
          href="https://www.instagram.com/tevdevelops/"
          class="header__social-link"
          target="_blank"
        >
          <font-awesome :icon="['fab', 'instagram']" size="lg" />
        </a>
        <a
          href="https://twitter.com/tevdevelops"
          class="header__social-link"
          target="_blank"
        >
          <font-awesome :icon="['fab', 'twitter']" size="lg" />
        </a>
      </nav>
    </div>

    <div class="header__frame header__frame--left">
      <div class="header__container">
        <p class="">Still in Beta | Version: 0.1</p>
      </div>
    </div>
  </header>
</template>

<script>
import LogoLong from '~/assets/svgs/logo-long.svg?inline'
import LogoSquare from '~/assets/svgs/logo-square-black.svg?inline'

export default {
  name: 'Header',
  components: {
    LogoLong,
    LogoSquare,
  },

  methods: {
    hackHashChange(event) {
      const hash_str = event.target.href.split('#').pop()
      if (window.location.pathname == '/') {
        window.location.hash = hash_str
      } else {
        const new_url =
          window.location.protocol +
          '//' +
          window.location.host +
          '/#' +
          hash_str
        window.location.href = new_url
      }
    },
  },
}
</script>

<style lang="scss">
.header {
  &__frame {
    background: $white;
    color: $white;
    position: absolute;
    z-index: $header;

    &--top {
      top: 0;
      left: 0;
      width: 100%;
      height: $frameHeight;
      padding: 0 $frameWidth;

      .header__container {
        border-bottom: $border;
      }
    }

    &--right {
      top: 0;
      right: 0;
      width: $frameWidth;
      height: 100%;
      padding: ($frameHeight - 1px) 0;

      .header__container {
        border-left: $border;
        width: 100%;
        height: 100%;
      }
    }

    &--bottom {
      bottom: 0;
      left: 0;
      width: 100%;
      height: $frameHeight;
      z-index: $header;
      padding: 0 $frameWidth;

      .header__container {
        border-top: $border;
      }
    }

    &--left {
      bottom: 0;
      left: 0;
      width: $frameWidth;
      height: 100%;
      padding: ($frameHeight - 1px) 0;

      .header__container {
        border-right: $border;
        width: 100%;
        height: 100%;
        @include flex-center;
      }

      p {
        transform: rotate(-90deg);
        white-space: nowrap;
        @include nav-link;
        animation: fade-out-in 3000ms ease-in-out 1000ms 3;
      }
    }
  }

  &__nav {
    @include flex-center;
    width: 100%;
    height: 100%;
    gap: 40px;

    a {
      @include nav-link;
    }

    &--horizontal {
      flex-direction: row;
    }

    &--main {
      // display: none;
      @include flex-between;
      gap: 10px;
      overflow-x: scroll;
    }

    &--vertical {
      flex-direction: column;
    }
  }

  &__social-link {
    color: $darkGray;
  }

  &__logo {
    // width: 30px;
    // height: 30px;

    &--long {
      svg {
        width: auto;
        height: 14px;
      }
    }
  }

  @include breakpoint($tablet) {
    &__nav {
      @include flex-center;
      gap: 2.5rem;

      &--main {
        gap: 2.5rem;
      }
    }
  }

  @include breakpoint($desktop) {
    &__frame {
      &--top {
        height: $frameHeightDesktop;
        padding: 0 $frameWidthDesktop;
      }
      &--right {
        width: $frameWidthDesktop;
        padding: ($frameHeightDesktop - 1px) 0;
      }
      &--bottom {
        height: $frameHeightDesktop;
        padding: 0 $frameWidthDesktop;
      }
      &--left {
        width: $frameWidthDesktop;
        padding: ($frameHeightDesktop - 1px) 0;
      }
    }

    &__nav {
      // &--main {
      //   display: flex;
      // }
    }

    &__logo {
      // width: 30px;
      // height: 30px;

      &--long {
        svg {
          height: 1.5rem;
        }
      }
    }
  }
}
</style>
