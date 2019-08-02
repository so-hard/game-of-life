const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
module.exports = merge(common,{
    //开发模式
    mode : 'development',
    // 源码映射
    devtool: 'inline-source-map',
    
  devServer: {
    contentBase: './dist',
    hot: true,
    
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ]
})