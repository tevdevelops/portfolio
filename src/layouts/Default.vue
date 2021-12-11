<template>
  <div class="application">
    <Header />

    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header/Header.vue'
import SideNav from '~/components/SideNav/SideNav.vue'

export default {
  components: {
    Header,
    SideNav,
  },

  data() {
    return {}
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.content {
  padding: $frameHeight $frameWidth;

  @include breakpoint($desktop) {
    padding: $frameHeightDesktop $frameWidthDesktop;
  }
}
</style>
