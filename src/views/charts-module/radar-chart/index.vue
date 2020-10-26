<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-23 14:58:08
--> 
<template>
<div class="charts-box">
  <!-- 饼图基础类型 -->
  <charts-radar-1/>
  <!-- 饼图--带图例、文本 -->
  <charts-radar-2/>
</div>
</template>
<script>
import ChartsRadar1 from "./components/radar"
import ChartsRadar2 from "./components/radar2"
export default {
  name: "charts-radar",
  data(){
    return {
    }
  },
  computed: {
  },
  components: {
    "charts-radar-1": ChartsRadar1,
    "charts-radar-2": ChartsRadar2
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