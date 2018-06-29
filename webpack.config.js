const path = require('path');

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
        loader: "babel-loader",
        options: {
          presets: [
            "env",
            "react",
          ],
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: "9000",
  },
};
