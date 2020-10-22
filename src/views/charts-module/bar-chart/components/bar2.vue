<!--
 * @Description: 柱状图--渐变
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 15:20:27
--> 
<template>
<div class="charts-box">
   <y-title content="柱状图--渐变" />
   <canvas id="container3" width="350" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-bar-3",
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
     * @description: 柱状图-渐变
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawCharts(){
      const data = [{
        year: "2014 年",
        sales: 145
      }, {
        year: "2015 年",
        sales: 121
      }, {
        year: "2016 年",
        sales: 100
      }, {
        year: "2017 年",
        sales: 97
      }, {
        year: "2018 年",
        sales: 85
      }]
      const chart = new F2.Chart({
        id: "container3",
        pixelRatio: window.devicePixelRatio
      })

      chart.source(data, {
        sales: {
          tickCount: 5
        }
      })
      chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          const items = ev.items
          items[0].name = null
          items[0].name = items[0].title
          items[0].value = "¥ " + items[0].value
        }
      })

      chart.interval()
        .position("year*sales")
        .color("l(90) 0:#1890ff 1:#70cdd0") // 定义柱状图渐变色
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