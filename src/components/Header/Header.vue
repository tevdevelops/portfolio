<template>
  <header class="header">
    <div class="header__frame header__frame--top">
      <nav class="header__nav header__nav--horizontal">
        <g-link to="/" class="header__logo--long" aria-label="Home">
          <LogoLong />
        </g-link>
      </nav>
    </div>

    <div class="header__frame header__frame--right">
      <nav class="header__nav header__nav--vertical header__nav--social">
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

    <div class="header__frame header__frame--bottom">
      <nav class="header__nav header__nav--horizontal">
        <!-- <g-link to="/" class="header__logo" aria-label="Home">
          <LogoSquare />
        </g-link> -->
        <g-link to="/about/">Background</g-link>
        <g-link to="/portfolio/">Portfolio</g-link>
        <g-link to="/blog/">Blog</g-link>
      </nav>
    </div>

    <div class="header__frame header__frame--left">
      <nav class="header__nav header__nav--vertical"></nav>
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
}
</script>

<style lang="scss">
.header {
  &__frame {
    background: white;
    color: white;
    position: absolute;
    z-index: $header;

    &--top {
      top: 0;
      left: 0;
      width: 100%;
      height: $frameSizeDesktop;
    }

    &--right {
      top: 0;
      right: 0;
      width: $frameSizeDesktop;
      height: 100%;
    }

    &--bottom {
      bottom: 0;
      left: 0;
      width: 100%;
      height: $frameSizeDesktop;
      z-index: $header;
    }

    &--left {
      bottom: 0;
      left: 0;
      width: $frameSizeDesktop;
      height: 100%;
    }
  }

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
    height: 100%;

    a {
      @include nav-link;
    }

    &--horizontal {
      flex-direction: row;
      padding: 0 $frameSizeDesktop;
    }

    &--vertical {
      flex-direction: column;
      padding: $frameSizeDesktop 0;
    }
  }

  &__social-link {
    color: $black;
  }

  &__logo {
    width: 30px;
    height: 30px;

    &--long {
      svg {
        width: auto;
        height: 25px;
      }
    }
  }
}
</style>
