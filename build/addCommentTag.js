/**
 * 將 Vssue Tag 添加到每篇待發佈文章的底端
 * <Vssue title="My Vuepress Blog" />
 */

const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'

findMarkdown(rootDir, writeComponents)

function writeComponents(dir) {
  fs.appendFile(dir, `\n \n <Vssue title="My Vuepress Blog" /> \n `, (err) => {
    if (err) throw err
    console.log(`Add comment tag to ${dir}`)
  })
}
