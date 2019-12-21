# VuePress 部落格模版

採用 VuePress + @vuepress/plugin-blog 之部落格模版，目的在於讓人快速上手，完成個人部落格建置。

## 立即啟用

> 使用 VuePress ，您需要 Node.js ，至少 8.0 以上之版本。

先行確認是否符合上述對於 Node.js 之安裝需求。待確認之後，依下列步驟操作，完成個人端電腦之部落格模版啟用設定。

1. 自 GitHub 下載本模版相關檔案。
    ```shell
    git clone git@github.com:AlanJui/vuepress-blog.git
    cd vuepress-blog
    ```

2. 安裝 Node.js 相關組件。
    ```shell
    yarn install
    ```
    
    【註】： 或用 npm 指令：

    ```shell script
    npm install
    ```

3. 啟動 VuePress 編輯模式。
    ```shell
    yarn dev 
    ```
    
    【註】： 或用 npm 指令：
    
    ```shell script
    npm run dev
    ```

4. 啟動 Web 瀏覽器，輸入以下網址，應可看到如下所示之網頁內容。

    ```shell script
    http://localhost:8080/
    ```

![Home Page](./images/HomePage.png)


## 發佈設定作業

 1. 執行 Build 組建指令。

    ```
    $ yarn build
    ```

 2. 要求 git 略去 dist 目錄。

    (1) 編輯 .gitignore 檔案。

    ```
    $ vim .gitignore
    ```

    (2) 新增設定，要求略去 dist 目錄。

    .gitignore
    ```
    docs/.vuepress/dist/
    ```

 3. 將 git subtree，納管入 Local 端的 Git 容器。

    ```
    git add -f docs/.vuepress/dist && git commit -m "Initial dist subtree commit"
    ```

 4. 將 Local 端 Git 容器內之 git subtree ，送入 GitHub 端之 Git 容器。

    ```
    git subtree push --prefix docs/.vuepress/dist origin gh-pages
    ```

 5. 在 GitHub 端進行 Git Pages 設定。


## 發佈文章作業

可執行 deploy.sh 指令，完成文章之自動發佈作業。

```
$ ./deploy.sh
```

若需手動作業，請依下列步驟執行。

 1. 執行組建指令。

    ```
    $ yarn build
    ```


 2. 以 git subtree 指令納管於 Local 端容器。
   
    ```
    git add -f docs/.vuepress/dist && git commit -m "Update commit"
    ```

 3. 以 git subtree 指令送入 GitHub 端容器內的 gh-pages 分支。

    ```
    git subtree push --prefix docs/.vuepress/dist origin gh-pages
    ```

