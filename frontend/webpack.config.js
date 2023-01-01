const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { main: path.join(__dirname, "src/index.js") },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [{ test: /\.js/, exclude: /(node_modules)/ }],
  },
};
