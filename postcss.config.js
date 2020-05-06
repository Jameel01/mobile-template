/*
 * @Description: 
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-03-20 10:55:10
 * @LastEditors: chenyt
 * @LastEditTime: 2020-04-28 09:30:57
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
