<!--
 * @Description: 条形图
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 16:19:14
--> 
<template>
<div class="charts-box">
  <!-- 条形图-基础-->
  <charts-horiz-bar-1/>
  <!-- 条形图-区间 -->
  <charts-horiz-bar-2/>
   <!-- 条形图--分组 -->
  <charts-horiz-bar-3/>
   <!-- 条形图--分组负数 -->
  <charts-horiz-bar-4/>
   <!-- 条形图-叠加 -->
  <charts-horiz-bar-5/>
</div>
</template>
<script>
import ChartsHorizBar1 from "./components/horiz-bar"
import ChartsHorizBar2 from "./components/horiz-bar2"
import ChartsHorizBar3 from "./components/horiz-bar3"
import ChartsHorizBar4 from "./components/horiz-bar4"
import ChartsHorizBar5 from "./components/horiz-bar5"
export default {
  name: "charts-horiz-bar",
  data(){
    return {
    }
  },
  computed: {
  },
  components: {
    "charts-horiz-bar-1": ChartsHorizBar1,
    "charts-horiz-bar-2": ChartsHorizBar2,
    "charts-horiz-bar-3": ChartsHorizBar3,
    "charts-horiz-bar-4": ChartsHorizBar4,
    "charts-horiz-bar-5": ChartsHorizBar5
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