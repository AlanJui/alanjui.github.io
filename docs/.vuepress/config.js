// .vuepress/config.js
module.exports = {
  title: '中道部落格',
  description: '使用 VuePress 打造的部落格',

  theme: "@vuepress/blog",
  // theme: "thindark",
  themeConfig: {
    nav: [
      {
        text: '首頁',
        link: '/',
      },
      {
        text: '已歸檔',
        link: '/archive/',
      },
      {
        text: '標籤',
        link: '/tag/',
      },
    ]
  },

  modifyBlogPluginOptions(blogPluginOptions) {
    const sitemap = {
      hostname: 'https://alanjui.github.io'
    }

    const comment = {
      service: 'disqus',
      shortname: 'disqus-shortname',
      // service: 'vssue',
      // owner: 'You',
      // repo: 'Your repo',
      // clientId: 'Your clientId',
      // clientSecret: 'Your clientSecret',
    }

    return { ...blogPluginOptions, sitemap, comment }
  },

  markdown: {
    lineNumbers: true
  },

  thirdParttyComponents: {
    fontAwesomeIcons: {
      regular: [
        'address-card',
        'file-audio',
        'cog',
        'calendar-alt',
        'file-code'
      ],
      solid: ['battery-quarter']
    }
  }
}