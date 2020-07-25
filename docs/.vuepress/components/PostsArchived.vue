<template>
<div id="base-list-layout">
  <div class="ui-posts">
    <div class="ui-post" v-for="page in pages">
      <div class="ui-post-title">
          <!-- <router-link :to="post.path">{{ page.frontmatter.frontmatter.title }}</router-link> -->
          <!-- <NavLink :link="post.path">{{ page.frontmatter.frontmatter.title }}</NavLink> -->
          <NavLink :link="page.path">{{ page.frontmatter.title }}</NavLink>
      </div>
      
      <div class="ui-post-summary">
        {{ page.frontmatter.summary || page.summary }}
      </div>

      <div class="ui-post-author" v-if="page.frontmatter.author">
        <NavigationIcon/>
        <span>{{ page.frontmatter.author }} in {{ page.frontmatter.location }}</span>
      </div>

      <div class="ui-post-date" v-if="page.frontmatter.date">
        <ClockIcon/>
        <span>{{ resovlePostDate(page.frontmatter.date) }}</span>
      </div>
    </div>
  </div>

  <!-- <component v-if="$pagination.length > 1 && paginationComponent" :is="paginationComponent"></component> -->
</div>
</template>

<script>
import Vue from 'vue'
import { NavigationIcon, ClockIcon } from 'vue-feather-icons'
import { Pagination, SimplePagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: { NavigationIcon, ClockIcon },

  data() {
    return {
      paginationComponent: null
    }
  },
  
  created() {
    this.paginationComponent = this.getPaginationComponent()
  },
    
  computed: {
    pages() {
      return this.$site.pages
          .filter(x => x.path.startsWith('/archive/') && !x.frontmatter.blog_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    }
  },

  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }

      if (n === 'SimplePagination') {
        return SimplePagination
      }

      return Vue.component(n) || Pagination
    },

    resovlePostDate(date) {
      return new Date(date.replace(/\-/g, "/").trim()).toDateString()
    }
  }
}
</script>

<style lang="stylus">
  .common-layout
    .content-wrapper
      padding-bottom 80px
  
  .ui-post
    padding-bottom 25px
    margin-bottom 25px
    border-bottom 1px solid #f1f1f1
    
    &:last-child
      border-bottom 0px
      margin-bottom 0px
    
    p
      margin 0
  
  .ui-post-title
    font-family PT Serif, Serif
    font-size 28px
    border-bottom 0
    
    a
      cursor pointer
      color #000
      transition all .2s
      text-decoration none
      
      &:hover
        text-decoration underline
  
  .ui-post-summary
    font-size 14px
    margin-bottom 15px
    color rgba(0, 0, 0, 0.54)
    font-weight 200
  
  .ui-post-author
    display flex
    align-items center
    font-size 12px
    line-height 12px
    color rgba(0, 0, 0, 0.84)
    margin-bottom 3px
    font-weight 400
    
    svg
      margin-right 5px
      width 14px
      height 14px
  
  .ui-post-date
    display flex
    align-items center
    font-size 12px
    color rgba(0, 0, 0, 0.54)
    font-weight 200
    
    svg
      margin-right 5px
      width 14px
      height 14px
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>