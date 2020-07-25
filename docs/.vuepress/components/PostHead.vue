<template>
  {{ post.frontmatter.date }}
  {{ post.frontmatter.title }}
</template>

<script>
export default {
  computed: {
    post() {
      return this.$page;
    }
  }
};
</script>
