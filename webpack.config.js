const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./client/src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "./client/src")
        ],
        exclude: [
          path.resolve(__dirname, "./node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ["env", "react"]
        }
      }
    ]
  }
}
