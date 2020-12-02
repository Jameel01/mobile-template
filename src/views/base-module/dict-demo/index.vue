<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-11-12 10:22:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-01 18:15:47
-->
<template>
<div class="dict-demo"> 
      <y-select-dict v-model="select" dict-type="sex" label="性别" is-link />
      <y-select-dict v-model="select" dict-type="sex"  :filterabled="false" label="性别" is-link />
      <div title="Form表单组合" card>
      <van-form validate-first @failed="onFailed">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="value1"
          name="pattern"
          placeholder="正则校验，6位数值"
          label="姓名"
          :rules="[{ pattern, message: '请输入正确内容' }]"
        />
        <y-select-dict
          v-model="value0"
          name="test"
          dict-type="sex"
          placeholder="数据字典"
          input-align="left"
          label="性别"
          is-link
          :rules="[{ required: true, message: '请选择' }]"
        />
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="value2"
          name="validator"
          placeholder="设置函数校验规则"
          label="电话"
          :rules="[{ validator:validatorFn, message: '请输入正确内容' }]"
        />
        <!-- 通过 validator 进行异步函数校验 -->
        <van-field
          v-model="value3"
          name="asyncValidator"
          placeholder="异步函数请求校验"
          label="家庭地址"
          :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
        />
          <y-select-dict
          v-model="certificate"
          name="certificate"
          dict-type="certificate"
          placeholder="选择证书类型"
          input-align="left"
          label="证书类型"
          is-link
          :rules="[{ required: true, message: '请选择' }]"
        />
         <y-select-dict
          v-model="level"
          dict-type="level"
          name="level"
          placeholder="数据字典"
          input-align="left"
          label="学历"
          is-link
          :rules="[{ required: true, message: '请选择' }]"
        />
      
        <div style="margin: 16px;">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            style="width:100%"
          >
            提交
          </van-button>
        </div>
      </van-form>
    </div>
    </div>
</template>
<script>
import {jsonToArray} from "@/utils/common"
export default {
  name: "dict-demo",
  data() {
    return {
      select: "1",
      value0: "13",
      value1: "",
      value2: "",
      value3: "",
      level: "",
      certificate: "",
      pattern: /\d{6}/,
      format: {
        name: "label",
        value: "value"
      }
      
    }
  },
  methods: {
    /**
     * @description: 校验函数返回 true 表示校验通过，false 表示不通过
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    validatorFn(val) {
      return /\d{6}/.test(val)
    },
    /**
     * @description:异步校验函数返回 Promise
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    asyncValidator(val) {
      return new Promise(resolve => {
        this.$toast.loading("验证中...")

        setTimeout(() => {
          this.$toast.clear()
          resolve(/\d{6}/.test(val))
        }, 1000)
      })
    },
    /**
     * @description:失败回调
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    onFailed(errorInfo) {
      console.log("failed", errorInfo)
    },
    /**
     * @description:字典数据格式转换
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    formatter(data, params) {
      // 数据格式转换
      data[params.types[0]] = jsonToArray(data[params.types[0]])
      return data
    }
 
  }
}
</script>
<style lang="less" scoped>
.dict-demo {

}
</style>