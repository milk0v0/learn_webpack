const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  mode: 'production', // production development none
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'] // 当多个 loader 作用与一个模块时，是有执行顺序的，自后往前
    }, {
      test: /\.less$/,
      use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new miniCssExtractPlugin({
      filename: 'index.css'
    })
  ]
}