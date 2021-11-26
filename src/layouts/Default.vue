<template>
  <v-app>
    <!-- <Header /> -->
    <SideNav />

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>

    <v-footer app></v-footer>
  </v-app>
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

<style></style>
