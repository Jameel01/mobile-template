// 上传图片
import commonApi from '../common-axios'
export const uploadFile = formData => {
  const res = commonApi.request({
    method: 'post',
    url: '/upload',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return res
}
// 调用
// async uploadFile (e) {
//   const file = document.getElementById('file').files[0]
//   const formdata = new FormData()
//   formdata.append('file', file)
//   await uploadFile(formdata)
// }
