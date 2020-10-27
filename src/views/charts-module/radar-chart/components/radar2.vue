<!--
 * @Description: 雷达图
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-27 17:20:28
--> 
<template>
<div class="charts-box">
  <y-title content="雷达图基础类型" />
  <canvas id="container2" width="350" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
import _ from "lodash"
export default {
  name: "charts-radar-2",
  data(){
    return {

    }
  },
  computed: {
  },
  mounted() {
    // 雷达图
    this.drawCharts()
  },
  created(){

  },
  methods: {
    /**
     * @description: 雷达图
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawCharts(){
      var data = [{
        item: "Design",
        user: "用户 A",
        score: 70
      }, {
        item: "Design",
        user: "用户 B",
        score: 30
      }, {
        item: "Development",
        user: "用户 A",
        score: 60
      }, {
        item: "Development",
        user: "用户 B",
        score: 70
      }, {
        item: "Marketing",
        user: "用户 A",
        score: 50
      }, {
        item: "Marketing",
        user: "用户 B",
        score: 60
      }, {
        item: "Users",
        user: "用户 A",
        score: 40
      }, {
        item: "Users",
        user: "用户 B",
        score: 50
      }, {
        item: "Test",
        user: "用户 A",
        score: 60
      }, {
        item: "Test",
        user: "用户 B",
        score: 70
      }, {
        item: "Language",
        user: "用户 A",
        score: 70
      }, {
        item: "Language",
        user: "用户 B",
        score: 50
      }, {
        item: "Technology",
        user: "用户 A",
        score: 70
      }, {
        item: "Technology",
        user: "用户 B",
        score: 40
      }, {
        item: "Support",
        user: "用户 A",
        score: 60
      }, {
        item: "Support",
        user: "用户 B",
        score: 40
      }]
      var chart = new F2.Chart({
        id: "container2",
        pixelRatio: window.devicePixelRatio
      })

      chart.coord("polar")
      chart.source(data, {
        score: {
          min: 0,
          max: 120,
          nice: false,
          tickCount: 4
        }
      })
      chart.tooltip({
        custom: true, // 自定义 tooltip 内容框
        onChange: function onChange(obj) {
          var legend = chart.get("legendController").legends.top[0]
          var tooltipItems = obj.items
          var legendItems = legend.items
          var map = {}
          legendItems.map(function(item) {
            map[item.name] = _.clone(item)
          })
          tooltipItems.map(function(item) {
            var name = item.name
            var value = item.value
            if (map[name]) {
              map[name].value = value
            }
          })
          legend.setItems(_.values(map))
        },
        onHide: function onHide() {
          var legend = chart.get("legendController").legends.top[0]
          legend.setItems(chart.getLegendItems().country)
        }
      })
      chart.axis("score", {
        label: function label(text, index, total) {
          if (index === total - 1) {
            return null
          }
          return {
            top: true
          }
        },
        grid: {
          lineDash: null,
          type: "arc" // 弧线网格
        }
      })
      chart.axis("item", {
        grid: {
          lineDash: null
        }
      })
      chart.line().position("item*score").color("user")
      chart.point().position("item*score").color("user").style({
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