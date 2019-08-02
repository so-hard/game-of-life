const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  //入口文件
  entry: './index.js',

  //输出文件
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // 使用本地模板
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  //分离chunks
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },


  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(css|styl)$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
    ]
  },
}