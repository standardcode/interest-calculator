const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const relative = (dir = "") => path.resolve(__dirname, "../", dir);

module.exports = {
  context: relative(),

  entry: {
    app: [
      "./app/index.js"
    ]
  },

  output: {
    path: relative("dist"),
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".json", ".css", ".scss", ".html"],
    alias: {
      app: "app"
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: relative(),
        exclude: /(node_modules|bower_compontents)/,
        loader: "babel-loader"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body"
    })
  ]
};
