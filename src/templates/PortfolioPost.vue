<template>
  <Layout>
    <section class="portfolio-single">
      <g-link to="/#portfolio" class="portfolio-single__close-btn">
        <font-awesome :icon="['fas', 'long-arrow-alt-left']" size="lg" />
        <span>Back</span>
      </g-link>
      <div v-html="$page.portfolioPost.content"></div>
    </section>
  </Layout>
</template>

<style lang="scss">
.portfolio-single {
  padding: 1.5rem $mobilePadding calc(1.5rem + #{$frameHeight});

  &__close-btn {
    text-decoration: none;
    margin-bottom: 1.5rem;
    display: block;

    span {
      padding-left: 0.75rem;
      display: inline-block;
    }
  }

  h1,
  h2 {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }

  p {
    margin-bottom: 1rem;
  }

  video {
    max-width: 600px;
    margin: 1.25rem 0;
  }

  .portfolio {
    &__video {
      &--holder {
        display: inline-block;
        padding: 1rem 2rem;
        background: #d7cdc4;

        video {
          border-radius: 12px;
          box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  @include breakpoint($desktop) {
    padding: 3rem $desktopPadding calc(3rem + #{$frameHeightDesktop});
  }
}
</style>

<page-query>
query portfolioPost ($path: String!) {
  portfolioPost: portfolioPost (path: $path) {
    title
    content
    featuredImage
  }
}
</page-query>

<script>
export default {
  name: 'PortfolioPost',
  metaInfo() {
    return {
      title: this.$page.portfolioPost.title,
      meta: [
        {
          name: 'author',
          content: 'Tevin Rivera',
        },
        {
          name: 'og:image',
          content: this.$page.portfolioPost.featuredImage,
        },
      ],
    }
  },
}
</script>
