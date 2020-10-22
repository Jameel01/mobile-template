<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 14:29:38
--> 
<template>
<div class="charts-box">
  <!-- 饼图基础类型 -->
  <charts-pie-1/>
  <!-- 饼图--带图例、文本 -->
  <charts-pie-2/>
  <!-- 饼图--可点击 -->
  <charts-pie-3/>
</div>
</template>
<script>
import ChartsPie1 from "./components/pie"
import ChartsPie2 from "./components/pie2"
import ChartsPie3 from "./components/pie3"
export default {
  name: "charts-pie",
  data(){
    return {
    }
  },
  computed: {
  },
  components: {
    "charts-pie-1": ChartsPie1,
    "charts-pie-2": ChartsPie2,
    "charts-pie-3": ChartsPie3
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