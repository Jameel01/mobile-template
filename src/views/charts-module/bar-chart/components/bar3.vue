<!--
 * @Description: 柱状图--区间
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 15:22:56
--> 
<template>
<div class="charts-box">
   <y-title content="柱状图--区间" />
   <canvas id="container4" width="350" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-bar-4",
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
     * @description: 柱状图-区间
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawCharts(){
      const data = [{
        x: "分类一",
        y: [76, 100]
      }, {
        x: "分类二",
        y: [56, 108]
      }, {
        x: "分类三",
        y: [38, 129]
      }, {
        x: "分类四",
        y: [58, 155]
      }, {
        x: "分类五",
        y: [45, 120]
      }, {
        x: "分类六",
        y: [23, 99]
      }, {
        x: "分类七",
        y: [18, 56]
      }, {
        x: "分类八",
        y: [18, 34]
      }]
      const chart = new F2.Chart({
        id: "container4",
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data, {
        y: {
          tickCount: 5
        }
      })
      chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          const items = ev.items
          items[0].name = "范围"
          const value = items[0].value
          items[0].value = value[0] + " 至 " + value[1]
        }
      })
      chart.interval().position("x*y").animate({
        appear: {
          animation: "shapesScaleInY"
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