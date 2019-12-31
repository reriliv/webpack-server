// const WebpackHtmlPlugin = require('webpack-html-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
    host: '0.0.0.0',
  },
  devtool: 'source-map',
  /*plugins: [
    new WebpackHtmlPlugin(),
  ],*/
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          cacheDirectory: true,
          plugins: [
            ["import", {"libraryName": "antd", "style": "css"}],
          ]
        },
      },
    }],
  },
  resolve: {
    alias: {
      "components": path.resolve(__dirname, "src/components"),
      "models": path.resolve(__dirname, 'src/models'),
    },
  },
};
