const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// 什么是配置 -> 对象

// 入口 但入口spa 多入口mpa

module.exports = {
  // entry: 打包入口 字符串 数组 对象
  // entry: './src/index.js', // -> 转成对象结构
  entry: {
    // chunk: 代码片段
    // chunks chunkName chunk
    // chunk组
    // index === chunkName
    // index组 有两个模块 index(chunk) a(chunk)
    // list组 有一个模块 list.js(chunk)
    // detail组 有一个模块 detail.js(chunk)
    list: './src/list.js', // 两个模块的代码片段（index a）
    detail: './src/detail.js',
    index: './src/index.js'
  },
  // output: 产品输出，产品的存放位置，产品的名称
  output: {
    // 产品的存放位置，绝对路径
    path: path.resolve('./dist'),
    filename: '[name].js' // 占位符[]
  },
  mode: 'development', // production development none
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new htmlWebpackPlugin({
      template: './src/list.html',
      filename: 'list.html',
      chunks: ['list']
    }),
    new htmlWebpackPlugin({
      template: './src/detail.html',
      filename: 'detail.html',
      chunks: ['detail']
    })
  ]
}