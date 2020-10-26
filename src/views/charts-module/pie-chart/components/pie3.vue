<!--
 * @Description: 饼图--可点击
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-23 16:35:11
--> 
<template>
<div class="charts-box">
  <y-title content="饼图--可点击" />
  <canvas id="container3" width="350" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-pie-3",
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
     * @description: 饼图--可点击
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawPieCharts(){
      const data = [{
        const: "const",
        type: "微信",
        money: 51.39
      }, {
        const: "const",
        type: "国家医保app",
        money: 356.68
      }, {
        const: "const",
        type: "支付宝",
        money: 20.00
      }, {
        const: "const",
        type: "其他",
        money: 116.53
      }]
      const chart = new F2.Chart({
        id: "container3",
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data)
      chart.coord("polar", {
        transposed: true,
        radius: 0.9,
        innerRadius: 0.5
      })
      chart.axis(false)
      chart.legend(false)
      chart.tooltip(false)
      chart.guide()
        .html({
          position: ["50%", "50%"],
          html: '<div style="text-align: center;width:150px;height: 50px;">\n      <p style="font-size: 12px;color: #999;margin: 0" id="title"></p>\n      <p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" id="money"></p>\n      </div>'
        })
      chart.interval()
        .position("const*money")
        .adjust("stack")
        .color("type", ["#1890FF", "#13C2C2", "#2FC25B", "#FACC14"])
      chart.pieLabel({
        sidePadding: 30,
        activeShape: true,
        label1: function label1(data) {
          return {
            text: "累计：" + data.money+"w",
            fill: "#343434",
            fontWeight: "bold"
          }
        },
        label2: function label2(data) {
          return {
            text: data.type,
            fill: "#999"
          }
        },
        onClick(ev) {
          const data = ev.data
          if (data) {
            document.getElementById("title").innerHTML=data.type
            document.getElementById("money").innerHTML=data.money
          }
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