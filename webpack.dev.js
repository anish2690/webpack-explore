const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html", // handle html entry template with custom imports
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", // styles to dom
          "css-loader", // css to js
          "postcss-loader", // convert post-css to css
        ],
      },
    ],
  },
});
