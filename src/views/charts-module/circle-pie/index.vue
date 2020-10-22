<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 14:24:02
--> 
<template>
<div class="charts-box">
  <!-- 环图--基础环形图 -->
  <charts-circle-1/>
  <!-- 环图--嵌套环图点击 -->
  <charts-circle-2/>
  <!-- 环形进度条 -->
  <charts-circle-3/>
  <!-- 南丁格尔玫瑰图 -->
  <charts-circle-4/>
</div>
</template>
<script>
// 环图--基础环形图
import ChartsCircle1 from "./components/circle1"
// 环图--嵌套环图点击 
import ChartsCircle2 from "./components/circle2"
// 环形进度条
import ChartsCircle3 from "./components/circle3"
// 南丁格尔玫瑰图
import ChartsCircle4 from "./components/circle4"
export default {
  name: "charts-circle",
  data(){
    return {

    }
  },
  computed: {
  },
  components: {
    "charts-circle-1": ChartsCircle1,
    "charts-circle-2": ChartsCircle2,
    "charts-circle-3": ChartsCircle3,
    "charts-circle-4": ChartsCircle4
  },
  mounted() {
  },
  created(){

  },
  methods: {
   
  }
 
}
</script>
<style lang="scss" scoped>
.charts-box {
 padding:16px;
}
</style>