const path = require("path");

module.exports = {
  entry: { main: "./src/main.js", vendor: "./src/vendor.js" },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(jpeg|jpg|svg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
};
