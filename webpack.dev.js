const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common,{
    //开发模式
    mode : 'development',
    // 源码映射
    devtool: 'inline-source-map',
    
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        open : true,
        port: 9000
      },
})