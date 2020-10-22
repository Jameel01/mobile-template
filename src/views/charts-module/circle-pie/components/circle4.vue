<!--
 * @Description: 南丁格尔玫瑰图
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 14:24:30
--> 
<template>
<div class="charts-box">
  <y-title content="南丁格尔玫瑰图" />
  <canvas id="container4" width="375" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-circle-4",
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
     * @description: 南丁格尔玫瑰图
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawPieCharts(){
      const data = [{
        year: "支付宝",
        population: 41.8
      }, {
        year: "微信",
        population: 25.8
      }, {
        year: "招行",
        population: 31.7
      }, {
        year: "国家医保app",
        population: 46
      }, {
        year: "其他",
        population: 28
      }]

      const chart = new F2.Chart({
        id: "container4",
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data)
      chart.coord("polar")
      chart.legend({
        position: "right"
      })
      chart.axis(false)
      chart.interval()
        .position("year*population")
        .color("year")
        .style({
          lineWidth: 1,
          stroke: "#fff"
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