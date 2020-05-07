/*
 * @Description: 
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-03-20 10:55:10
 * @LastEditors: chenyt
 * @LastEditTime: 2020-05-07 16:29:27
 */

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
				".van-", ".ignore-"
			]
		}
	}
}
