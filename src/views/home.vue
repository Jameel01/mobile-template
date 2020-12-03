<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: chenyt
--> 
<template>
  <div class="page-home">
    <h3>字典测试</h3>
    <y-auto-form v-model="form" :formItemList="formItemList" ref="form2">
    </y-auto-form>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          @click="handleClick"
          style="width: 100%"
        >
          提交
        </van-button>
      </div>
  </div>
</template>
<script>
import Mock from "@/mock"
import jsonToArray from "@/utils/json-to-array"

export default {
  name: "home",
  data() {
    return {
      data: "测试",
      form: {
        selectDict: "",
        selectDict1: "",
        selectDict2: "",
        selectDict3: "",
        selectDict4: ""
      },

      formItemList: [
        {
          type: "selectDict",
          prop: "selectDict",
          item: {
            label: "字典选择sex",
            dictType: "sex",
            rules: [{ required: true, message: "请选择" }]
          }
        },
        {
          type: "selectDict",
          prop: "selectDict1",
          item: {
            label: "字典选择sex",
            dictType: "sex"
          }
        },
        {
          type: "selectDict",
          prop: "selectDict2",
          item: {
            label: "字典选择sex2",
            dictType: "sex2"
          }
        },
        {
          type: "selectDict",
          prop: "selectDict3",
          item: {
            label: "字典选择sex3",
            dictType: "sex3"
          }
        },
        {
          type: "selectDict",
          prop: "selectDict4",
          item: {
            label: "字典选择customApi",
            dictType: "sex4"
          },
          // 自定义请求接口
          getCodeApi: async(params) => {
            const res = await Mock(params.types, true)
            return res
          },
          // 格式化数据
          formatter(data, params) {
            // 数据格式转换
            // sex:{ '0':'男0号 Api', '1':'男1号 Api' } =>>> 
            // sex:[{ value:'0',label:'男0号 Api' },{ value:'1',label:'男1号 Api' }]
            Object.keys(data).map(item => {
              data[item] = jsonToArray(data[item])
            })
            return data
          }
        }
      ]
    }
  },
  created() {
    // 字典预加载
    this.$store.dispatch("dictionary/getCodeList", {
      // 将要预加载的字典类型通过逗号分隔拼接成字符串赋值给 types 字段
      // 如果接口不需要传参可以返回默认数据，则 types 字段可以赋值为空
      payload: { types: "sex5,sex6" } 
    })
  },
  mounted() {},
  watch: {
    form(val){
      console.log(val)
    }
  },
  methods: {
    handleClick() {
      this.$refs.form2.validate()
    }
  }
}
</script>
<style lang='less' scoped>
.page-home {
  text-align: center;
}
</style>

