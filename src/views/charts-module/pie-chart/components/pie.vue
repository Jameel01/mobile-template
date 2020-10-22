<!--
 * @Description: 饼图基础类型
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 09:36:57
--> 
<template>
<div class="charts-box">
  <y-title content="饼图基础类型" />
  <canvas id="container" width="350" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-pie-1",
  data(){
    return {

    }
  },
  computed: {
  },
  mounted() {
    // 饼状图-类型1
    this.drawPieCharts()
  },
  created(){

  },
  methods: {
    /**
     * @description: 饼图类型一
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawPieCharts(){
      const map = {
        国家医保App: "55%",
        支付宝: "25%",
        微信: "18%",
        其他: "2%"
      }
      const data = [{
        name: "国家医保App",
        percent: 0.55,
        a: "1"
      }, {
        name: "支付宝",
        percent: 0.25,
        a: "1"
      }, {
        name: "微信",
        percent: 0.18,
        a: "1"
      }, {
        name: "其他",
        percent: 0.02,
        a: "1"
      }]
      const chart = new F2.Chart({
        id: "container",
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            return val * 100 + "%"
          }
        }
      })
      chart.legend({
        position: "right",
        itemFormatter: function itemFormatter(val) {
          return val + "  " + map[val]
        }
      })
      chart.tooltip(false)
      chart.coord("polar", {
        transposed: true,
        radius: 0.85
      })
      chart.axis(false)
      chart.interval()
        .position("a*percent")
        .color("name", ["#1890FF", "#F04864", "#2FC25B", "#FACC14", "#F04864", "#8543E0"])
        .adjust("stack")
        .style({
          lineWidth: 1,
          stroke: "#fff",
          lineJoin: "round",
          lineCap: "round"
        })
        .animate({
          appear: {
            duration: 1200,
            easing: "bounceOut"
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