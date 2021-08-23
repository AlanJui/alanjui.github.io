// .vuepress/config.js
module.exports = {
  title: "中道部落格",
  description: "使用 VuePress 打造的部落格",
  //base: "/",
  base: '/my-vuepress-blog/',
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
  },

  plugins: [
    [
      "@vssue/vuepress-plugin-vssue",
      {
        // 设置 `platform` 而不是 `api`
        platform: "github",

        // 其他的 Vssue 配置
        owner: "AlanJui",
        repo: "my-vuepress-blog",
        clientId: "c5db97c3586af7779b57",
        clientSecret: "5301618895124721017ff8bfc2e2c2d113716b1f",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "tip",
        defaultTitle: {
          "/": "TIP",
          "/zh/": "提示",
        },
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "right",
        defaultTitle: "",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "theorem",
        before: (info) => `<div class="theorem"><p class="title">${info}</p>`,
        after: "</div>",
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
