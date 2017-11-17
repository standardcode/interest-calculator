const merge = require("webpack-merge");

const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  devtool: "cheap-module-eval-source-map",

  output: {
    filename: "js/[name].js",
    chunkFilename: "[id].chunk.js",
    pathinfo: true
  },

  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    stats: "normal",
    hotOnly: true,
    inline: true
  }
});
