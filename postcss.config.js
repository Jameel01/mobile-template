module.exports = {
  plugins: {
    "autoprefixer": {
      // browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      unitPrecision: 3,
      minPixelValue: 1,
      selectorBlackList: [
        ".van-"
      ]
    }
  }
}
