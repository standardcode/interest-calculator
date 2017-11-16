const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const helpers = require("./helpers");

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: {
    "app": [
      helpers.root("app/index.js")
    ]
  },

  output: {
    path: helpers.root("dist"),
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".json", ".css", ".scss", ".html"],
    alias: {
      "app": "app"
    }
  },

  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        include: helpers.root(""),
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
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),

    new HtmlWebpackPlugin({
      template: helpers.root("public/index.html"),
      inject: "body"
    })
  ]
};
