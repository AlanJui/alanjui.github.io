# VuePress 部落格模版

採用 VuePress + @vuepress/plugin-blog 之部落格模版，目的在於讓人快速上手，完成個人部落格建置。

## 環境需求

> 使用 VuePress ，您需要 Node.js ，至少 8.6 以上之版本。

安裝 VuePress

### 使用 npm 安裝

```
npm install -d vuepress
```

### 使用 yarn 安裝

```
yarn add vuepress -D
```

> 若是使用 n 作為 Node.js 的版本控管／切換工具，最好不要使用 brew 安裝 yarn ，因為 brew 會自動帶入 node.js 。

## 建置與啟用

先行確認是否符合上述對於 Node.js 之安裝需求。待確認之後，依下列步驟操作，完成個人端電腦之部落格模版啟用設定。

1. 自 GitHub 下載本模版相關檔案。

   ```shell
   $ git clone git@github.com:AlanJui/my-vuepress-blog.git
   $ cd my-vuepress-blog
   ```

2. 安裝 Node.js 相關組件。

   ```shell script
   npm install
   ```

   【註】： 或用 yarn 指令：

   ```shell
   $ yarn install
   ```

3) 啟動 VuePress 編輯模式。

#### 【方法一】：

```shell script
vuepress dev docs
```

#### 【方法二】：

```shell script
npm run dev
```

#### 【方法三】：

```shell
yarn editing
```

4. 啟動 Web 瀏覽器，輸入以下網址，即可看到部落格之內容。

   ```shell script
   http://localhost:8080/
   ```

![Home Page](docs/.vuepress/public/img/HomePage/HomePage.png)

## 發佈設定作業

1.  執行 Build 組建指令。

#### 【方法一】：

    ```
    $ vuepress build docs
    ```

#### 【方法二】：

    ```
    $ yarn build
    ```

2.  要求 git 略去 dist 目錄。

    (1) 編輯 .gitignore 檔案。

    ```
    $ vim .gitignore
    ```

    (2) 新增設定，要求略去 dist 目錄。

    .gitignore

    ```
    docs/.vuepress/dist/
    ```

3.  將 git subtree，納管入 Local 端的 Git 容器。

    ```
    git add -f docs/.vuepress/dist && git commit -m "Initial dist subtree commit"
    ```

4.  將 Local 端 Git 容器內之 git subtree ，送入 GitHub 端之 Git 容器。

    ```
    git subtree push --prefix docs/.vuepress/dist origin gh-pages
    ```

5.  在 GitHub 端進行 Git Pages 設定。

    (1) 進入 GitHub 容器之管理網頁，點擊「Settings」連結。

    ![GitPages設定：起始畫面](docs/.vuepress/public/img/HomePage/GitPages-Setting-1.png)


    (2) 進入 Settings 網頁，捲動畫面至下方，找到「GitHub Pages」處。

    ![](docs/.vuepress/public/img/HomePage/GitPages-Setting-2.png)

    (3) 將 Soure 欄內的選項，改成「gh-pages branch」。

    ![](docs/.vuepress/public/img/HomePage/GitPages-Setting-3.png)
    ![](docs/.vuepress/public/img/HomePage/GitPages-Setting-4.png)

    (4) 將此 GitHub 容器改設成「個人用」。

    ![](docs/.vuepress/public/img/HomePage/GitPages-Setting-5.png)
    ![](docs/.vuepress/public/img/HomePage/GitPages-Setting-6.png)
    ![](docs/.vuepress/public/img/HomePage/GitPages-Setting-7.png)

## 發佈文章作業

透過 publish.sh 指令，將文章發佈至 https://alanjui.github.io/。

```
$ ./publish.sh
```

或

```
$ yarn release
```

## 發佈文章至 GitHub 的專案容器

透過 deploy.sh 指令，將文章發佈至 https://alanjui.github.io/my-vuepress-blog/。

```
$ ./deploy.sh
```

::: tip
記得！此種佈署方式，記得需修改 `.vuepress/config.sys` 設定，得加上 `base: '/my-vuepress-blog/',`
:::

若需手動作業，請依下列步驟執行。

1.  執行組建指令。

    ```
    $ yarn build
    ```

2)  以 git subtree 指令納管於 Local 端容器。

    ```
    git add -f docs/.vuepress/dist && git commit -m "Update commit"
    ```

3)  以 git subtree 指令送入 GitHub 端容器內的 gh-pages 分支。

    ```
    git subtree push --prefix docs/.vuepress/dist origin gh-pages
    ```

【package.json】：

```
{
  "name": "vuewpress",
  "version": "1.1.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "docs:build": "vuepress build docs",
    "fa:build": "node node_modules/vuepress-plugin-font-awesome/index.js",
    "debug": "node --nolazy --inspect-brk=9229 ./node_modules/.bin/vuepress dev docs",
    "editing": "vuepress dev docs",
    "build": "vuepress build docs",
    "build:comment": "node ./build/addCommentTag.js && vuepress build docs && node ./build/removeCommentTag.js",
    "review": "live-server docs/.vuepress/dist/",
    "release": ". publish.sh"
  },
  "devDependencies": {
    "@vssue/api-github-v3": "^1.4.7",
    "@vssue/vuepress-plugin-vssue": "^1.4.8",
    "@vuepress/theme-blog": "^2.3.3",
    "moment": "^2.29.1",
    "vuepress": "^1.8.2",
    "vuepress-plugin-container": "^2.1.5",
    "vuepress-plugin-font-awesome": "^1.90.6"
  }
}
```

## 參考

### 如何添加評論功能

[vuepress如何添加评论功能](http://www.moyundong.com/frontend/vuepress/7%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD.html#%E9%80%89%E6%8B%A9%E8%AF%84%E8%AE%BA%E6%8F%92%E4%BB%B6vssue)

因為你的頁面是“開心”的，你沒有數據庫和完整的 API 的支持。但是你讓你的頁面擁有評論功能，讓用戶可以登錄和發表評論。編碼等平台，示例選擇了github）提供了OAuth API，在他們的幫助下，Vssue 可以讓用戶通過這些平台的登錄，將在這些平台的Issue 系統中評論存儲，並在當前頁面展示。

```
npm install @vssue/vuepress-plugin-vssue
npm install @vssue/api-github-v3 或者 npm install @vssue/api-github-v4
```

> **【備註】：**
>
> @vssue/api-github-v3和@vssue/api-github-v4的區別是v3不要登錄，但是有調用次數限制，v4必須登錄但沒有次數限制v3的平台是github，v4是github-v4用是github的評論功能，所以必須有github賬號

### VuePress Blog 模版

使用 主題模版建置 Blog 網站。

 - [Official blog plugin for VuePress - GitHub](https://github.com/vuepress/vuepress-plugin-blog)

 - [@vuepress/plugin-blog](https://vuepress.vuejs.org/plugin/official/plugin-blog.html#features)

 - [Vuepress 部落格開發踩坑記](https://lucas-yang.vercel.app/post/new-vuepress-blog/)

 - [Blog theme](https://vuepress.vuejs.org/theme/blog-theme.html)

 - [Example Modern Vuepress Blog Theme](https://morioh.com/p/d486b765ea63)

 - [z3by/vuepress-blog-template](https://ithelp.ithome.com.tw/articles/10243353?sc=iThomeR)

![](https://i.imgur.com/0tExya3.jpg)

### VuePress 主題

如何使用[ VuePress 主題](https://www.vuepress.cn/theme/)。

```
.
└─ .vuepress
 └─ theme
  ├── global-components
  │   └── xxx.vue
  ├── components
  │   └── xxx.vue
  ├── layouts
  │   ├── Layout.vue (必要的)
  │   └── 404.vue
  ├── styles
  │   ├── index.styl
  │   └── palette.styl
  ├── templates
  │   ├── dev.html
  │   └── ssr.html
  ├── index.js
  ├── enhanceApp.js
  └── package.json
```

### 討論留言

[lorisleiva/vuepress-plugin-disqus](https://github.com/lorisleiva/vuepress-plugin-disqus)
