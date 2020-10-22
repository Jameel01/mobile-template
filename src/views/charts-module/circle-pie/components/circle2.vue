<!--
 * @Description: 环图--嵌套环图点击
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 14:22:22
--> 
<template>
<div class="charts-box">
  <y-title content="环图--嵌套环图点击" />
  <canvas id="container2" width="375" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-circle-2",
  data(){
    return {
    }
  },
  computed: {
  },
  mounted() {
    // 环形基础
    this.drawPieCharts()
  },
  created(){

  },
  methods: {
    /**
     * @description: 嵌套环形-可点击
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawPieCharts(){
      const data = [
        { name: "福建", percent: 0.4, type: "1" },
        { name: "山东", percent: 0.2, type: "1" },
        { name: "广东", percent: 0.18, type: "1" },
        { name: "北京", percent: 0.15, type: "1" },
        { name: "上海", percent: 0.05, type: "1" },
        { name: "其他", percent: 0.12, type: "1" },
        { name: "福建", percent: 0.4, type: "2" },
        { name: "山东", percent: 0.2, type: "2" },
        { name: "广东", percent: 0.18, type: "2" },
        { name: "北京", percent: 0.15, type: "2" },
        { name: "上海", percent: 0.05, type: "2" },
        { name: "其他", percent: 0.12, type: "2" }
      ]

      const chart = new F2.Chart({
        id: "container2",
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data)
      chart.legend({
        position: "right"
      })
      chart.tooltip(false)
      chart.coord("polar", {
        transposed: true,
        radius: 0.8,
        inner: 0.5
      })
      chart.axis(false)
      chart.interval()
        .position("type*percent")
        .color("name", [
          "#1890FF",
          "#13C2C2",
          "#2FC25B",
          "#FACC14",
          "#F04864",
          "#8543E0"
        ])
        .adjust("stack")

      chart.interaction("pie-select", {
        startEvent: "tap",
        animate: {
          duration: 300,
          easing: "backOut"
        },
        cancelable: true
      })

      chart.render()
    }
  }
 
}
</script>
<style lang="scss" scoped>
.charts-box {
 padding:16px;
}
</style>