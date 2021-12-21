<template>
  <g-link :to="link" class="card">
    <div class="card__asset-container">
      <g-image :src="image" class="card__asset card__asset--image" />
    </div>
    <div class="card__body">
      <p v-if="tag" class="card__tag">{{ tag }}</p>
      <p class="card__header">{{ header }}</p>
      <p class="card__excerpt">{{ copy }}</p>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
    },
    tag: {
      type: String,
      default: '',
    },
    copy: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
  },
}
</script>

<style lang="scss">
.card {
  position: relative;
  text-decoration: none;

  &__body {
    padding: 1rem 0 1.25rem;
    border-bottom: $border;
    transition: 300ms ease-in-out border-bottom;
  }

  &__tag {
    @include caption;
    margin-bottom: 0.5rem;
  }

  &__header {
    @include h5;
    margin-bottom: 0.75rem;
  }

  &__excerpt {
    @include body-sm;
  }

  @include breakpoint($desktop) {
    transition: 300ms ease-in-out transform;

    &:hover {
      transform: translateY(-20px);

      .card__body {
        border-bottom: 1px solid $orange;
      }
    }
  }
}
</style>
