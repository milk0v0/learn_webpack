const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       sourceMap: true,
  //       exclude: /node_modules/,
  //       uglifyOptions: {
  //         ie8: true
  //       }
  //     })
  //   ]
  // },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  mode: 'production', // production development none
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env',
              {
                'useBuiltIns': 'usage',
                'corejs': '3'
              }
            ]
          ]
        }
      }]
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    })
  ]
}