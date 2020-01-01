<template>
  <div class="right-align">
    <span class="publish-date">
      {{ formateDate(post.frontmatter.date) }}
    </span>
  </div>
</template>

<script>
import moment from "moment";

export default {
  methods: {
    formateDate(date, format = "YYYY-MM-DD") {
      return moment(date).format(format);
    }
  },
  computed: {
    post() {
      return this.$page;
    }
  }
};
</script>

<style scoped>
.publish-date {
  padding-top: 5px;
  color: steelblue;
  font-weight: bold;
}

.right-align {
  text-align: right;
}
</style>
