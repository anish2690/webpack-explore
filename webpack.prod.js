const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), // minify html
      new TerserPlugin(), // minify js (default js package)
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, // extract css to new files
          "css-loader", // css to js
          "postcss-loader", // convert post-css to css
        ],
      },
    ],
  },
  plugins: [
    // minify html and added extra options to optimize
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new CleanWebpackPlugin(), // clean older js files
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css", // extract css to different files
    }),
  ],
});
