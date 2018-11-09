const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack_module = require('./webpack_module.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    entry: './src/js/app.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'index.[name].css',
        chunkFilename: 'index.[id].css',
      }),
    ],
    devtool: '#inline-source-map',
    devServer: {
      contentBase: '.',
    },
    module: webpack_module.module,
    mode: 'production',
  },
];
