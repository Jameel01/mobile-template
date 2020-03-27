
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      }
    ],
  },
};
