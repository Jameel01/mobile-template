<!--
 * @Description: 条形图--层叠柱状
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 16:19:05
--> 
<template>
<div class="charts-box">
   <y-title content="条形图--层叠柱状" />
   <canvas id="container4" width="350" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-horiz-bar-5",
  data(){
    return {
    }
  },
  computed: {
  },
  mounted() {
    this.drawCharts()
  },
  created(){

  },
  methods: {
    /**
     * @description: 条形图-层叠柱状
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawCharts(){
      const data = [{
        name: "London",
        月份: "Jan.",
        月均降雨量: 18.9
      }, {
        name: "London",
        月份: "Feb.",
        月均降雨量: 28.8
      }, {
        name: "London",
        月份: "Mar.",
        月均降雨量: 39.3
      }, {
        name: "London",
        月份: "Apr.",
        月均降雨量: 81.4
      }, {
        name: "London",
        月份: "May.",
        月均降雨量: 47
      }, {
        name: "London",
        月份: "Jun.",
        月均降雨量: 20.3
      }, {
        name: "London",
        月份: "Jul.",
        月均降雨量: 24
      }, {
        name: "London",
        月份: "Aug.",
        月均降雨量: 35.6
      }, {
        name: "Berlin",
        月份: "Jan.",
        月均降雨量: 12.4
      }, {
        name: "Berlin",
        月份: "Feb.",
        月均降雨量: 23.2
      }, {
        name: "Berlin",
        月份: "Mar.",
        月均降雨量: 34.5
      }, {
        name: "Berlin",
        月份: "Apr.",
        月均降雨量: 99.7
      }, {
        name: "Berlin",
        月份: "May.",
        月均降雨量: 52.6
      }, {
        name: "Berlin",
        月份: "Jun.",
        月均降雨量: 35.5
      }, {
        name: "Berlin",
        月份: "Jul.",
        月均降雨量: 37.4
      }, {
        name: "Berlin",
        月份: "Aug.",
        月均降雨量: 42.4
      }]
      const chart = new F2.Chart({
        id: "container4",
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data, {
        月均降雨量: {
          tickCount: 5
        }
      })
      chart.coord({
        transposed: true
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
      chart.interval()
        .position("月份*月均降雨量")
        .color("name")
        .adjust("stack")
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