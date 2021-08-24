// .vuepress/config.js
module.exports = {
  title: "中道部落格",
  description: "使用 VuePress 打造的部落格",
  base: "/",
  // base: '/my-vuepress-blog/',
  locale: "zh-TW",

  theme: "@vuepress/blog",
  // theme: "thindark",
  themeConfig: {
    nav: [
      {
        text: "首頁",
        link: "/",
      },
      {
        text: "歸檔",
        link: "/archive/",
      },
      {
        text: "標籤",
        link: "/tag/",
      },
    ],
    footer: {
      contact:[
        {
          type: 'github',
          link: 'https://github.com/vuejs/vuepress'
        },
        {
          type: 'twitter',
          link: 'https://github.com/vuejs/vuepress',
        },
      ],
    },
  },

  plugins: [
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github",
        locale: 'zh-TW',
        // 其他的 Vssue 配置
        owner: "AlanJui",
        repo: "alanjui.github.io",
        clientId: "c5db97c3586af7779b57",
        clientSecret: "135a484500fc183f38ec83d6cd28fa29018c2d21",
        autoCreateIssue:true
      },
    ],
    [
      "@vuepress/container",
      {
        type: "tip",
        locales: {
          '/': {
            defaultInfo: '提示',
          },
        },
      },
    ],
  ],

  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "../.vuepress/public/img",
        "@picts": "../.vuepress/public/assets/img",
      },
    },
  },

  markdown: {
    lineNumbers: true,
  },

  thirdParttyComponents: {
    fontAwesomeIcons: {
      regular: [
        "address-card",
        "file-audio",
        "cog",
        "calendar-alt",
        "file-code",
      ],
      solid: ["battery-quarter"],
    },
  },

};
