/**
 * 將每篇發佈文章底端之 Vssue Tag 移除
 * <Vssue title="My Vuepress Blog" />
 */


const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'

findMarkdown(rootDir,delComponents)

function delComponents(dir){
    fs.readFile(dir,'utf-8', (err, content) => {
        if (err) throw err

        fs.writeFile(dir, content.replace(/\n \n <Vssue title="My Vuepress Blog" \/> \n /g,''), (err) => {
            if (err) throw err
            console.log(`Remove comment tag from ${dir}`)
          })
      })
}
