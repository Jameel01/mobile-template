
module.exports = {
  module: {
  },
  devServer: {
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热更新插件
  ]
};
