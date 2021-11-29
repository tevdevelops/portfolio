<template>
  <Layout>
    <section class="section">
      <div v-html="$page.blogPost.content"></div>
    </section>
  </Layout>
</template>

<style lang="scss"></style>

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
