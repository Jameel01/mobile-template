<!--
 * @Description: 折线--对比
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 14:43:24
--> 
<template>
<div class="charts-box">
   <y-title content="折线--对比" />
   <canvas id="container1" width="350" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
import _ from "lodash"
export default {
  name: "charts-broken-2",
  data(){
    return {
    }
  },
  computed: {
  },
  mounted() {
    //折线--对比
    this.drawCharts()
  },
  created(){

  },
  methods: {
    /**
     * @description: 折线--对比
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawCharts(){
      fetch("https://gw.alipayobjects.com/os/antfincdn/OVMtvjbnut/series-line.json")
        .then(res => res.json())
        .then(data => {
          const chart = new F2.Chart({
            id: "container1",
            pixelRatio: window.devicePixelRatio
          })
          chart.source(data)
          chart.scale("date", {
            type: "timeCat",
            tickCount: 3
          })
          chart.scale("value", {
            tickCount: 5
          })
          chart.axis("date", {
            label: function label(text, index, total) {
              // 只显示每一年的第一天
              const textCfg = {}
              if (index === 0) {
                textCfg.textAlign = "left"
              } else if (index === total - 1) {
                textCfg.textAlign = "right"
              }
              return textCfg
            }
          })
          chart.tooltip({
            custom: true, // 自定义 tooltip 内容框
            onChange: function onChange(obj) {
              const legend = chart.get("legendController").legends.top[0]
              const tooltipItems = obj.items
              const legendItems = legend.items
              const map = {}
              legendItems.forEach(function(item) {
                map[item.name] = _.clone(item)
              })
              tooltipItems.forEach(function(item) {
                const name = item.name
                const value = item.value
                if (map[name]) {
                  map[name].value = value
                }
              })
              legend.setItems(_.values(map))
            },
            onHide: function onHide() {
              const legend = chart.get("legendController").legends.top[0]
              legend.setItems(chart.getLegendItems().country)
            }
          })
          chart.line().position("date*value").color("type")
          chart.render()
        })

    }
  
  }
 
}
</script>
<style lang="scss" scoped>
.charts-box {
 padding:16px;
}
</style>