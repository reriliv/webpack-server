const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: 3000,
    host: '0.0.0.0',
    // writeToDisk: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
    }),
  ],
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
            ["@babel/transform-runtime"]
          ]
        },
      },
    }],
  },
  resolve: {
    alias: {
      "components": path.resolve(__dirname, "src/components"),
      "models": path.resolve(__dirname, 'src/models'),
      "react-dom": "@hot-loader/react-dom",
    },
  },
};
