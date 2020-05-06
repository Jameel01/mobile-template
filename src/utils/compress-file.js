/*
 * @Description: 压缩文件
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-03-21 21:50:35
 * @LastEditors: chenyt
 * @LastEditTime: 2020-05-06 14:09:18
 */

import EXIF from 'exif-js'

export default function compressFileToBase64(file) {
	return new Promise(resolve => {
		const fd = new FileReader()
		const mimeType = file.type
		fd.readAsDataURL(file)
		fd.onloadend = e => {
			const image = new Image()
			image.onload = () => {
				let width = image.width
				let height = image.height
				const maxLength = 1500
				let rate = 1
				if (Math.max(width, height) > maxLength) {
					if (width > height) {
						rate = maxLength / width
					} else {
						rate = maxLength / height
					}
				}
				if (rate < 1 || file.size >= 1 * 1024 * 1024) {
					width = width * rate
					height = height * rate
					const canvas = document.createElement('canvas')
					const ctx = canvas.getContext('2d')
					canvas.width = width
					canvas.height = height
					getFileExif(file).then(orientation => {
						if (orientation !== '' && orientation !== 1 && orientation !== undefined && orientation !== 0) {
							switch (orientation) {
								// 需要顺时针（向左）90度旋转
								case 6:
									canvas.width = height
									canvas.height = width
									ctx.rotate(Math.PI / 2)
									ctx.drawImage(image, 0, -height, width, height)
									break
								// 需要逆时针（向右）90度旋转
								case 8:
									canvas.width = height
									canvas.height = width
									ctx.rotate(-90 * Math.PI / 180)
									ctx.drawImage(image, -width, 0, width, height)
									break
								// 需要180度旋转
								case 3:
									ctx.rotate(Math.PI)
									ctx.drawImage(image, -width, -height, width, height)
									break
								default: ctx.drawImage(image, 0, 0, width, height)
							}
						} else {
							ctx.drawImage(image, 0, 0, width, height)
						}
						resolve(canvas.toDataURL(mimeType, 0.9))
					})
				} else {
					fileToBase64(file).then(base64Str => {
						resolve(base64Str)
					})
				}
			}
			image.src = e.target.result
		}
	})
}

function fileToBase64(file) {
	return new Promise(resolve => {
		const fd = new FileReader()
		fd.readAsDataURL(file)
		fd.onloadend = e => {
			const base64Str = e.target.result
			resolve(base64Str)
		}
	})
}

function getFileExif(file) {
	return new Promise(resolve => {
		EXIF.getData(file, function () {
			resolve(EXIF.getTag(this, 'Orientation'))
		})
	})
}
