<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 14:38:35
--> 
<template>
<div class="charts-box">
  <!-- 折线基础 -->
  <charts-broken-1/>
  <!-- 饼图--带图例、文本 -->
  <charts-broken-2/>
  <!-- 饼图--可点击 -->
  <charts-broken-3/>
</div>
</template>
<script>
import ChartsBroken1 from "./components/broken"
import ChartsBroken2 from "./components/broken1"
import ChartsBroken3 from "./components/broken2"
export default {
  name: "charts-broken",
  data(){
    return {
    }
  },
  computed: {
  },
  components: {
    "charts-broken-1": ChartsBroken1,
    "charts-broken-2": ChartsBroken2,
    "charts-broken-3": ChartsBroken3
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