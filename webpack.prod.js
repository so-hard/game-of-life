const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// console.log(new CleanWebpackPlugin())

module.exports = merge(common, {
    mode: "production",

    plugins: [
        new CleanWebpackPlugin(),
    ],
})