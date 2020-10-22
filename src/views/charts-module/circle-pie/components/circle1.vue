<!--
 * @Description: 环形基础
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 14:24:23
--> 
<template>
<div class="charts-box">
   <y-title content="环图--基础环形图" />
   <canvas id="container" width="350" height="260"></canvas>
  
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-circle-1",
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
     * @description: 环形基础
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawPieCharts(){
      const data = [{
        name: "国家医保app",
        percent: 83.59,
        a: "1"
      }, {
        name: "支付宝",
        percent: 2.17,
        a: "1"
      }, {
        name: "微信",
        percent: 14.24,
        a: "1"
      }]

      const map = {}
      data.forEach(function(obj) {
        map[obj.name] = obj.percent + "%"
      })

      const chart = new F2.Chart({
        id: "container",
        pixelRatio: window.devicePixelRatio,
        padding: [20, "auto"]
      })
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            return val + "%"
          }
        }
      })
      chart.tooltip(false)
      chart.legend({
        position: "right",
        itemFormatter: function itemFormatter(val) {
          return val + "    " + map[val]
        }
      })
      chart.coord("polar", {
        transposed: true,
        innerRadius: 0.7,
        radius: 0.85
      })
      chart.axis(false)
      chart.interval()
        .position("a*percent")
        .color("name", ["#FE5D4D", "#3BA4FF", "#737DDE"])
        .adjust("stack")

      chart.guide().html({
        position: ["50%", "45%"],
        html: `<div style="width: 250px;height: 40px;text-align: center;">
      <div style="font-size: 16px">总用户量</div>
      <div style="font-size: 24px">133.08 w</div>
    </div>`
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