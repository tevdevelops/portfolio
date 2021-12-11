<template>
  <g-link :to="link" class="card">
    <div class="card__asset-container">
      <g-image :src="image" class="card__asset card__asset--image" />
    </div>
    <div class="card__body">
      <p class="card__tag">{{ tag }}</p>
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

  &__asset-container {
  }

  &__body {
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // background: hsla(0, 0, 0, 0.3);
    // padding: 15px;
    // display: flex;
    // justify-content: center;
    // align-items: flex-end;
    padding: 1rem 0 1.25rem;
    border-bottom: $border;
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
    transition: 500ms cubic-bezier(0.85, 0, 0.15, 1) transform;

    &:hover {
      transform: translateY(-20px);
    }
  }
}
</style>
