import polyfill from './util/poly-fill.js'
import Editor from './editor/index.js'

// 检验是否浏览器环境
try {
    document
} catch (ex) {
    throw new Error('请在浏览器环境下运行')
} 

// polyfill
polyfill()

// 这里的 `inlinecss` 将被替换成 css 代码的内容，详情可去 ./gulpfile.js 中搜索 `inlinecss` 关键字
// const inlinecss = '__INLINE_CSS__'

// 将 css 代码添加到 <style> 中
// let style = document.createElement('style')
let link = document.createElement('link')
link.setAttribute('rel', 'stylesheet')
link.setAttribute('href', './wangEditor.min.css')
link.setAttribute('type', 'text/css')
// style.type = 'text/css'
// style.innerHTML= inlinecss
document.getElementsByTagName('HEAD').item(0).appendChild(link)

// 返回
export default (window.wangEditor || Editor)