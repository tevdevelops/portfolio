<template>
  <Layout>
    <section class="blog-single">
      <g-link to="/#blog" class="blog-single__close-btn">
        <font-awesome :icon="['fas', 'long-arrow-alt-left']" size="lg" />
        <span>Back</span>
      </g-link>
      <div v-html="$page.blogPost.content"></div>
    </section>
  </Layout>
</template>

<style lang="scss">
.blog-single {
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
    margin-bottom: 1.25rem;
  }

  p {
    margin-bottom: 1rem;
  }

  @include breakpoint($desktop) {
    padding: 3rem $desktopPadding calc(3rem + #{$frameHeightDesktop});
  }
}
</style>

<page-query>
query blogPost ($path: String!) {
  blogPost: blogPost (path: $path) {
    title
    content
    featuredImage
  }
}
</page-query>

<script>
export default {
  name: 'BlogPost',
  metaInfo() {
    return {
      title: this.$page.blogPost.title,
      meta: [
        {
          name: 'author',
          content: 'Tevin Rivera',
        },
        {
          name: 'og:image',
          content: this.$page.blogPost.featuredImage,
        },
      ],
    }
  },
}
</script>
