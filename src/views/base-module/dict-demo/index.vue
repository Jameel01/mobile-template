<!--
 * @Description: 字典使用案例
 * @Version: 0.1
 * @Autor: chenyt
--> 
<template>
  <div class="page-home">
    <y-auto-form center  input-align="right" error-message-align="right" label-width="180px" v-model="form" :formItemList="formItemList" ref="form2">
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
export default {
  name: "home",
  data() {
    return {
      data: "测试",
      form: {//表单数据
        selectDict: "",
        selectDict1: "",
        selectDict2: "",
        selectDict3: "",
        selectDict4: ""
      },

      formItemList: [//表单定义渲染
        {
          type: "title",
          content: "基础信息",
          lineTop: "12",
          titleDes: "案例展示，项目开发时删除，去除mock"
        },
        {
          type: "input",
          prop: "username",
          placeholder: "请输入姓名",
          item: {
            required: true,
            rules: [{ required: true, message: "请输入姓名" }],
            label: "姓名"
          }
        },
        {
          type: "selectDict",
          prop: "selectDict",
          item: {
            label: "地区字典选择(必填)",
            dictType: "test",
            required: true,
            rules: [{ required: true, message: "请选择" }]
          }
        },
        {
          type: "selectDict",
          prop: "selectDict1",
          item: {
            label: "地区字典选择(初始化)",
            dictType: "test",
            filterabled: false 
          }
        }
      ]
    }
  },
  created() {
    /**
     * @description:字典初始化加载
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
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
    /**
     * @description:表单提交
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    handleClick() {
      this.$refs.form2.validate()
    }
  }
}
</script>
<style lang='less' scoped>
.page-home {
  padding:10px;
}
</style>

