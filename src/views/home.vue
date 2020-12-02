<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-03-21 22:55:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-01 17:46:54
--> 
<template>
  <div class="page-home">
    {{data}}
  </div>
</template>
<script>
import { setCodeList, getCodeListApi} from "@/store/modules/dictionary"
export default {
  components: {},
  name: "home",
  watch: {},
  props: {},
  filters: {},
  data() {
    return { 
      data: "首页"
    }
  },
  created() {
    // 方式1:本地数据,手动设置
    const data = {
      sex1: [
        {
          value: "1",
          label: "男"
        },
        {
          value: "0",
          label: "女"
        }
      ],
      sex2: [
        {
          value: "1",
          label: "男"
        },
        {
          value: "0",
          label: "女"
        }
      ]
    }
    const types={
      types: ["sex1", "sex2"]
    }
    setCodeList(data, types, "", this.$store.commit, false)
    // 方式2:本地数据,远程设置
    getCodeListApi()
  },
  mounted() {},
  methods: {
  },
  destroyed() {}
}
</script>
<style lang='less' scoped>
.page-home{}
</style>

