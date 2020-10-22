<!--
 * @Description: 条形图--基础类型
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 16:12:57
--> 
<template>
<div class="charts-box">
   <y-title content="条形图--基础类型" />
   <canvas id="container" width="350" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-horiz-bar-1",
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
     * @description: 条形图-基础
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
        id: "container",
        pixelRatio: window.devicePixelRatio
      })

      chart.source(data, {
        sales: {
          tickCount: 5
        }
      })
      chart.coord({
        transposed: true
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
      chart.interval().position("year*sales")
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