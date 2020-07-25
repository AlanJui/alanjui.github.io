---
title: GeoJSON API 教學影片 
summary: 這是個 GeoJSON API 教學影片，但由於作者的 Coding 風格，這個影片不僅能讓人學「GeoJSON API 入門的 ABC」；還可以學到如何利用「dotenv」這個 Node Module 將 express, mongodb(moogose) 整合成一個 MVC 的 Web Framework:。
tags:
  - Node.JSS
  - MongoDB
  - Mongoose
  - dotnet
  - WebAPI
date: 2020/01/01
author: 居正中
location: 汐止
archived: false
---

# {{ $page.title }}
<PublishDate />

<iframe width="560" height="315" src="https://www.youtube.com/embed/9FQrFah9rnc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

這影片本是 GeoJSON API 教學示範之途，由於作者個人的 Coding 風格，因此觀看影片後，不僅能學「GeoJSON API 入門的 ABC」；還能順帶學到如何利用「dotenv」這個 Node Module 將 express, mongodb(moogose) 整合成一個符合 MVC 軟體架構的 Web Framework 來使用。

換個角度看，其實作者提供的程式碼，也可以當作是一個：「Web API 模版」；需要快速製作 Prototype ，用以展示待開發系統的雛形時，相信這個示範用的程式碼，也可以當作是一個快速塑模的好工具。

**`【專案目錄結構】：`**

```bash
alanjui@MBP-2018:~/workspace/nodeJS/store_locator_api (master)
$ tree
.
├── README.md
├── config
│   ├── config.env
│   └── db.js
├── controllers
│   └── stores.js
├── models
│   └── Store.js
├── package-lock.json
├── package.json
├── public
│   ├── add.html
│   ├── index.html
│   └── js
│       ├── add.js
│       └── map.js
├── routes
│   └── stores.js
├── server.js
└── utils
    └── geocoder.js

7 directories, 14 files
```


::: tip

程式碼範例： [bradtraversy/store_locator_api](https://github.com/bradtraversy/store_locator_api)
:::
