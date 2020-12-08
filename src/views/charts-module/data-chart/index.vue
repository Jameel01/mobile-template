<!--
 * @Description: 排名图表组件
 * @Version: 0.1
 * @Autor: yjm
 * @LastEditors: yjm
-->

<template>
  <div>
    <rank />
    <rank2 />
    <count />
  </div>
</template>
<script>
import rank from "./components/rank"
import rank2 from "./components/rank2"
import count from "./components/count"
export default {
  components: { rank, rank2, count }
}
</script>
<style lang="less" scoped>
</style>