<template>
  <div class="grid" :class="classes">
    <template v-for="(item, index) in items">
      <Card :key="index" v-bind="createProps(item.node)" />
    </template>
  </div>
</template>

<script>
import Card from '~/components/Card/Card.vue'

export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: [],
    },
  },

  components: {
    Card,
  },

  computed: {
    classes() {},
  },

  methods: {
    createProps(item) {
      console.log(item)
      return {
        header: item.title,
        copy: item.excerpt,
        image: item.featuredImage,
        link: item.slug,
      }
    },
  },
}
</script>

<style lang="scss">
.grid {
  // display: grid;
  // grid-gap: 10px;
  // // grid-template-columns: repeat(12, [col-start] 1fr);
  // grid-template-columns: repeat(12, 1fr);
  // grid-template-rows: repeat(2, 1fr);

  // * {
  //   grid-column: span 6;
  // }
}
</style>
