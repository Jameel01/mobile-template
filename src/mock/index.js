/*
 * @Description: 模拟数据
 * @Version: 0.1
 * @Autor: Chenyt
 */
import Mock from "mockjs"

export const RandomNormalData = function() {
  const data = []
  const length = Math.floor(Math.random() * 100)
  for (let i = 0; i < length; i++) {
    data.push({
      label: Mock.Random.province(),
      value: `${i}`
    })
  }
  return data
}
export const RandomJsonData = function() {
  const data = {}
  const length = Math.floor(Math.random() * 100)
  for (let i = 0; i < length; i++) {
    data[`${i}`] = Mock.Random.province()
  }

  return data
}

export default function request(type, isJson) {
  type = Array.isArray(type) ? type : type.split(",")
  console.log(type)

  const data = {}
  type.map(item => {
    data[item] = isJson ? RandomJsonData() : RandomNormalData()
  })
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 0,
        data
      })
    }, 2000)
  })
}
