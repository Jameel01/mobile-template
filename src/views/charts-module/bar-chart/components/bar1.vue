<!--
 * @Description: 柱状图--选中
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 15:19:26
--> 
<template>
<div class="charts-box">
   <y-title content="柱状图--选中" />
   <canvas id="container1" width="350" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-bar-2",
  data(){
    return {
    }
  },
  computed: {
  },
  mounted() {
    // 柱状图
    this.drawCharts()
  },
  created(){

  },
  methods: {
    /**
     * @description: 柱状图-选中
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawCharts(){
      const data = [{
        year: "1951 年",
        sales: 38
      }, {
        year: "1952 年",
        sales: 52
      }, {
        year: "1956 年",
        sales: 61
      }, {
        year: "1957 年",
        sales: 145
      }, {
        year: "1958 年",
        sales: 48
      }, {
        year: "1959 年",
        sales: 38
      }, {
        year: "1960 年",
        sales: 38
      }, {
        year: "1962 年",
        sales: 38
      }]
      const chart = new F2.Chart({
        id: "container1",
        pixelRatio: window.devicePixelRatio
      })

      chart.source(data, {
        sales: {
          tickCount: 5
        }
      })
      chart.tooltip(false)
      chart.interval().position("year*sales")
      chart.render()

      // 绘制柱状图文本
      const offset = -5
      const canvas = chart.get("canvas")
      const group = canvas.addGroup()
      const shapes = {}
      data.forEach(function(obj) {
        const point = chart.getPosition(obj)
        const text = group.addShape("text", {
          attrs: {
            x: point.x,
            y: point.y + offset,
            text: obj.sales,
            textAlign: "center",
            textBaseline: "bottom",
            fill: "#808080"
          }
        })

        shapes[obj.year] = text // 缓存该 shape, 便于后续查找
      })

      let lastTextShape // 上一个被选中的 text
      // 配置柱状图点击交互
      chart.interaction("interval-select", {
        selectAxisStyle: {
          fill: "#000",
          fontWeight: "bold"
        },
        mode: "range",
        defaultSelected: {
          year: "1962 年",
          sales: 38
        },
        onEnd: function onEnd(ev) {
          const data = ev.data,
            selected = ev.selected

          lastTextShape && lastTextShape.attr({
            fill: "#808080",
            fontWeight: "normal"
          })
          if (selected) {
            const textShape = shapes[data.year]
            textShape.attr({
              fill: "#000",
              fontWeight: "bold"
            })
            lastTextShape = textShape
          }
          canvas.draw()
        }
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