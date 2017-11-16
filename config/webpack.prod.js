const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const helpers = require("./helpers");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  output: {
    filename: "js/[name].[hash].js",
    chunkFilename: "[id].[hash].chunk.js"
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: helpers.root("public")
    }])
  ]
});
