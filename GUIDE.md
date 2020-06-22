# 作業指引

## 編輯與發佈文件

### (1) 啟動編輯器

```
$ cd ~/workspace/MyVuePressBlog
$ cp docs/_posts/<Old Blog File Name> docs/_posts/<New Blog File Name>
$ code .
```

### (2) 編輯文件

編輯位於路徑之文件檔案。（路徑： docs/\_posts/<New Blog File Name>）

```
$ git add .
$ git commit -m "commit update"
$ git push
```

### (3) 編製待佈署文件

```
$ npm run build
$ npm run server
```

### (4) 發佈文件

```
$ npm run publish
```

## 異常處理指引

### 要求原 Git Repo 排除已納管目錄 ./docs/.vuepress/dist/

```
$ cd ~/workspace/MyVuePressBlog/

$ git rm -r --quiet --cache docs/.vuepress/dist/

$ git push
```

### 無法執行 git subtree push

```
$ git subtree push --prefix docs/.vuepress/dist origin gh-pages
git push using:  origin gh-pages
To github.com:AlanJui/my-vuepress-blog.git
 ! [rejected]        afc80e39c5072b637c55759c3997b4cff266d712 -> gh-pages (non-fast-forward)
error: failed to push some refs to 'git@github.com:AlanJui/my-vuepress-blog.git'
hint: Updates were rejected because a pushed branch tip is behind its remote
hint: counterpart. Check out this branch and integrate the remote changes
hint: (e.g. 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

$ git subtree pull --prefix=docs/.vuepress/dist origin gh-pages
From github.com:AlanJui/my-vuepress-blog
 * branch            gh-pages   -> FETCH_HEAD
fatal: refusing to merge unrelated histories

$ git push origin --delete gh-pages
To github.com:AlanJui/my-vuepress-blog.git
 - [deleted]         gh-pages

$ git subtree push --prefix dist origin gh-pages
git push using:  origin gh-pages
Enumerating objects: 1117, done.
Counting objects: 100% (1117/1117), done.
Delta compression using up to 12 threads
Compressing objects: 100% (747/747), done.
Writing objects: 100% (1116/1116), 739.14 KiB | 5.82 MiB/s, done.
Total 1116 (delta 993), reused 339 (delta 317)
remote: Resolving deltas: 100% (993/993), done.
remote:
remote: Create a pull request for 'gh-pages' on GitHub by visiting:
remote:      https://github.com/AlanJui/my-vuepress-blog/pull/new/gh-pages
```

### 透過 gh-pages 分支發佈文章

#### (1) 建分支 gh-pages

```
$ cd ~/workspace/MyVuePressBlog/
$ git branch gh-pages
```

#### (2) 編輯文件

```
$ git checkout gh-pages
$ code .
$ git add .
$ git commit -m "Commite update"
$ git push origin gh-pages
```

### 在「佈署目錄(dist)」下建置 Sub Repo (Git Subtree)

```
$ git subtree add --prefix docs/.vuepress/dist/ gh-pages master
```

```
$ cd docs/.vuepress/dist/

$ git init
Reinitialized existing Git repository in /Users/alanjui/workspace/MyVuePressBlog/docs/.vuepress/dist/.git/
```

#### 編輯文及發佈文件

```
$ code .
$ npm run build
$ git add -f docs/.vuepress/dist/
$ git commit -m "Add and commit new article"
$ git subtree push --prefix docs/.vuepress/dist/ origin gh-pages
```
