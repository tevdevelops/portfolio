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
  query blog($path: String){
    blogPost: blogPost(path: $path){
      id
      title
      slug
      excerpt
      featuredImage
      content
      tags
    }
  }
</page-query>
