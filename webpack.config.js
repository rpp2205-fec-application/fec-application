var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var SRC_DIR = path.join(__dirname, "./client/src");
var DIST_DIR = path.join(__dirname, "./client/dist");
var BrotliPlugin = require('brotli-webpack-plugin');
module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/src/index.html", // to import index.html file inside index.js
    }),
    new BrotliPlugin({
			asset: '[path].br[query]',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8
		})
  ],
  module : {
    rules : [
      {
        test : /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader","css-loader", "sass-loader"],
      }
    ]
  },

};
