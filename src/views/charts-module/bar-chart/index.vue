<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 15:46:45
--> 
<template>
<div class="charts-box">
  <!-- 柱状图-基础-->
  <charts-bar-1/>
  <!-- 柱状图-选中 -->
  <charts-bar-2/>
   <!-- 柱状图-区间 -->
  <charts-bar-3/>
  <!-- 柱状图-渐变 -->
  <charts-bar-4/>
   <!-- 柱状图-分组 -->
  <charts-bar-5/>
  <!-- 柱状图-带负值 -->
  <charts-bar-6/>
   <!-- 柱状图-层叠 -->
  <charts-bar-7/>
</div>
</template>
<script>
import ChartsBar1 from "./components/bar"
import ChartsBar2 from "./components/bar1"
import ChartsBar3 from "./components/bar2"
import ChartsBar4 from "./components/bar3"
import ChartsBar5 from "./components/bar4"
import ChartsBar6 from "./components/bar5"
import ChartsBar7 from "./components/bar6"
export default {
  name: "charts-bar",
  data(){
    return {
    }
  },
  computed: {
  },
  components: {
    "charts-bar-1": ChartsBar1,
    "charts-bar-2": ChartsBar2,
    "charts-bar-3": ChartsBar3,
    "charts-bar-4": ChartsBar4,
    "charts-bar-5": ChartsBar5,
    "charts-bar-6": ChartsBar6,
    "charts-bar-7": ChartsBar7
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