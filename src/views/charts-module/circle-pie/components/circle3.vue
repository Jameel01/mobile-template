<!--
 * @Description: 环形进度条
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 14:20:32
--> 
<template>
<div class="charts-box">
  <y-title content="环形进度条" />
  <canvas id="container3" width="375" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-circle-3",
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
     * @description: 环形进度条
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawPieCharts(){
      const data = [{
        x: "1",
        y: 85
      }]

      const chart = new F2.Chart({
        id: "container3",
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data, {
        y: {
          max: 100,
          min: 0
        }
      })
      chart.axis(false)
      chart.tooltip(false)
      chart.coord("polar", {
        transposed: true,
        innerRadius: 0.8,
        radius: 0.85
      })
      chart.guide().arc({
        start: [0, 0],
        end: [1, 99.98],
        top: false,
        style: {
          lineWidth: 20,
          stroke: "#ccc"
        }
      })
      chart.guide().text({
        position: ["50%", "50%"],
        content: "85%",
        style: {
          fill: "#1890FF"
        }
      })
      chart.interval()
        .position("x*y")
        .size(20)
        .animate({
          appear: {
            duration: 1200,
            easing: "cubicIn"
          }
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