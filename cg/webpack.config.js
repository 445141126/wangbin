var path = require("path")
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ],
  devServer: {
    port: 10001
  }
}