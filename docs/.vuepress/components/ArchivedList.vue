<template>
<div>
  <table class = "blog-index-list">
    <tbody>
      <tr v-for="post in posts">
        <td>{{ formateDate(post.frontmatter.date) }}</td>
        <td><router-link :to="post.path">{{ post.frontmatter.title }}</router-link></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import moment from "moment"

export default {
  props: [
    'limit',
  ],
  methods: {
    formateDate(date, format = 'YYYY-MM-DD') {
      return moment(date).format(format)
    },
  },
  computed: {
    posts() {
      let posts = this.$site.pages
        .filter(post => post.frontmatter.archived)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

      if (this.limit > 0) {
        posts = posts.slice(0, this.limit);
      }

      return posts;
    }
  }
}
</script>