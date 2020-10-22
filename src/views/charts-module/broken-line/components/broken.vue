<!--
 * @Description: 折线--基础类型
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 14:35:41
--> 
<template>
<div class="charts-box">
   <y-title content="折线--基础类型" />
   <canvas id="container" width="350" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-broken-1",
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
     * @description: 折线--基础类型
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawCharts(){
      const data = [{
        day: "周一",
        value: 300
      }, {
        day: "周二",
        value: 400
      }, {
        day: "周三",
        value: 350
      }, {
        day: "周四",
        value: 500
      }, {
        day: "周五",
        value: 490
      }, {
        day: "周六",
        value: 600
      }, {
        day: "周日",
        value: 900
      }]

      const chart = new F2.Chart({
        id: "container",
        pixelRatio: window.devicePixelRatio
      })

      chart.source(data, {
        value: {
          tickCount: 5,
          min: 0
        },
        day: {
          range: [0, 1]
        }
      })
      chart.tooltip({
        showCrosshairs: true,
        showItemMarker: false,
        onShow: function onShow(ev) {
          const items = ev.items
          items[0].name = null
          items[0].value = "$ " + items[0].value
        }
      })
      chart.axis("day", {
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
      chart.line().position("day*value")
      chart.point().position("day*value").style({
        stroke: "#fff",
        lineWidth: 1
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