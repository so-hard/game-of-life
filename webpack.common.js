const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',


    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },


    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),

    ],


    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },


    module: {
        rules: [
          {
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