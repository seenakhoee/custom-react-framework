const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      "react-native": path.resolve(__dirname, "../react-zeolite/src/components/"),
      "react-zeolite": path.resolve(__dirname, "../react-zeolite/src/components/"),
      "react-insureon": path.resolve(__dirname, "../react-insureon/src/components/"),
      "react-zeolite-styles": path.resolve(__dirname, "../react-zeolite/src/styles/"),
      "react-insureon-styles": path.resolve(__dirname, "../react-insureon/src/styles/"),
      "global-styles$": path.resolve(__dirname, "./src/styles/Global.css"),
      //'react': 'preact-compat',
      //'react-dom': 'preact-compat',
    },
    extensions: [".js", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { }
          },
          {
            loader: "eslint-loader",
            options: { }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]_[local]"
            }
          }
        ]
      }
    ]
  }
};
