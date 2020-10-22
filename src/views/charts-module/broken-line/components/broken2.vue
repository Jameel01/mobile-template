<!--
 * @Description: 折线--基础类型
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 17:59:19
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 14:45:05
--> 
<template>
<div class="charts-box">
   <y-title content="折线--实时动态" />
   <canvas id="container2" width="350" height="260"></canvas>
</div>
</template>
<script>
import F2 from "@antv/f2/lib/index-all"
export default {
  name: "charts-broken-2",
  data(){
    return {
    }
  },
  computed: {
  },
  mounted() {
    // 环形基础
    this.drawCharts()
  },
  created(){

  },
  methods: {
    /**
     * @description: 折线--基础类型
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    drawCharts(){
      // 自定义线图变更动画
      F2.Animate.registerAnimation("lineUpdate", function(updateShape, animateCfg) {
        const cacheShape = updateShape.get("cacheShape") // 该动画 shape 的前一个状态
        const cacheAttrs = cacheShape.attrs // 上一个 shape 属性
        const oldPoints = cacheAttrs.points // 上一个状态的关键点
        const newPoints = updateShape.attr("points") // 当前 shape 的关键点

        const oldLength = oldPoints.length
        const newLength = newPoints.length
        const deltaLength = newLength - oldLength

        const lastPoint = newPoints[newPoints.length - 1]
        for (let i = 0; i < deltaLength; i++) {
          oldPoints.push(lastPoint)
        }

        updateShape.attr(cacheAttrs)
        updateShape.animate().to({
          attrs: {
            points: newPoints
          },
          duration: 800,
          easing: animateCfg.easing
        })
      })

      const data = []
      // 添加数据，模拟数据，可以指定当前时间的偏移的秒
      function getRecord(offset) {
        offset = offset || 0
        return {
          time: new Date().getTime() + offset * 1000,
          value: Math.random() + 10
        }
      }

      data.push(getRecord(-2))
      data.push(getRecord(-1))
      data.push(getRecord())

      const chart = new F2.Chart({
        id: "container2",
        pixelRatio: window.devicePixelRatio
      })

      const defs = {
        time: {
          type: "timeCat",
          mask: "HH:mm:ss",
          range: [0, 1]
        },
        value: {
          tickCount: 5,
          min: 8
        }
      }
      chart.source(data, defs)
      chart.axis("time", {
        label: function label(text, index, total) {
          const textCfg = {
            text: ""
          }
          if (index === 0) {
            textCfg.textAlign = "left"
            textCfg.text = text
          } else if (index === total - 1) {
            textCfg.textAlign = "right"
            textCfg.text = text
          }
          return textCfg
        }
      })

      chart.line().position("time*value").animate({
        update: {
          animation: "lineUpdate"
        }
      })

      chart.render()

      setInterval(function() {
        data.push(getRecord())
        chart.changeData(data)
      }, 1000)

    }
  
  }
 
}
</script>
<style lang="scss" scoped>
.charts-box {
 padding:16px;
}
</style>