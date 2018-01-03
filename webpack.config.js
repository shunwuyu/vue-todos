const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: path.resolve(__dirname + "/src/main.js"),
  output: {
    path: path.resolve(__dirname + "/dist/js"),
    filename: "bundle.js"
  },
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules|dist|build|docs|css/,
    poll: 1000
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}