// .vuepress/config.js
module.exports = {
  title: '中道部落格',
  description: '使用 VuePress 打造的部落格',
  base: '/my-vuepress-blog/',

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

  // modifyBlogPluginOptions(blogPluginOptions) {
  //   const sitemap = {
  //     hostname: 'https://alanjui.github.io'
  //   }

  //   const comment = {
  //     service: 'vssue',
  //     owner: 'AlanJui',
  //     repo: 'my-vuepress-blog',
  //     clientId: 'c5db97c3586af7779b57',
  //     clientSecret: '5301618895124721017ff8bfc2e2c2d113716b1f',
  //   }

  //   return { ...blogPluginOptions, sitemap, comment }
  // },

  plugins: [
    ['@vssue/vuepress-plugin-vssue', {
      // 设置 `platform` 而不是 `api`
      platform: 'github',

      // 其他的 Vssue 配置
      owner: 'AlanJui',
      repo: 'my-vuepress-blog',
      clientId: 'c5db97c3586af7779b57',
      clientSecret: '5301618895124721017ff8bfc2e2c2d113716b1f',
    }],
  ],

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