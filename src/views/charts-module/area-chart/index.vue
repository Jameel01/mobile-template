<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 15:02:13
--> 
<template>
<div class="charts-box">
  <!-- 面积图-基础-->
  <charts-area-1/>
  <!-- 面积图-叠加 -->
  <charts-area-2/>
</div>
</template>
<script>
import ChartsArea1 from "./components/area"
import ChartsArea2 from "./components/area1"
export default {
  name: "charts-area",
  data(){
    return {
    }
  },
  computed: {
  },
  components: {
    "charts-area-1": ChartsArea1,
    "charts-area-2": ChartsArea2
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