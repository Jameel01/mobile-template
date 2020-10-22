<!--
 * @Description: 折线--基础类型
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 14:57:01
--> 
<template>
<div class="charts-box">
   <y-title content="面积图--基础类型" />
   <canvas id="container" width="350" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-area-1",
  data(){
    return {
    }
  },
  computed: {
  },
  mounted() {
    // 环形基础
    this.drawCharts()
  },
  created(){

  },
  methods: {
    /**
     * @description: 面积图-基础
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawCharts(){
      const data = [{
        time: "Jan.",
        tem: 1000
      }, {
        time: "Feb.",
        tem: 2200
      }, {
        time: "Mar.",
        tem: 2000
      }, {
        time: "Apr.",
        tem: 2600
      }, {
        time: "May.",
        tem: 2000
      }, {
        time: "Jun.",
        tem: 2600
      }, {
        time: "Jul.",
        tem: 2800
      }, {
        time: "Aug.",
        tem: 2000
      }]
      const chart = new F2.Chart({
        id: "container",
        pixelRatio: window.devicePixelRatio
      })

      chart.source(data)
      chart.tooltip({
        showCrosshairs: true
      })
      chart.scale({
        time: {
          range: [0, 1]
        },
        tem: {
          tickCount: 5,
          min: 0
        }
      })
      chart.axis("time", {
        label: function label(text, index, total) {
          const textCfg = {}
          if (index === 0) {
            textCfg.textAlign = "left"
          } else if (index === total - 1) {
            textCfg.textAlign = "right"
          }
          return textCfg
        }
      })
      chart.area().position("time*tem")
      chart.line().position("time*tem")
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