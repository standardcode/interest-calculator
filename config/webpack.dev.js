const merge = require("webpack-merge");

const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  devtool: "eval-source-map",

  entry: {
    "app": []
  },

  output: {
    filename: "js/[name].js",
    chunkFilename: "[id].chunk.js"
  },

  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    stats: "normal",
    hotOnly: true,
    inline: true
  }
});
