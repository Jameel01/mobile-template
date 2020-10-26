<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-03-21 22:55:00
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-23 09:51:49
--> 
<template>
  <div class="page-home">
    <van-cell :title="item.name" is-link :to="item.path"  v-for="(item,index) in routes" :key="index"/>
  </div>
</template>
<script>
import routes from "@/router/charts"
export default {
  components: {},
  name: "home",
  watch: {},
  props: {},
  filters: {},
  data() {
    return { 
      routes: routes
    }
  },
  created() {},
  mounted() {},
  methods: {
  },
  destroyed() {}
}
</script>
<style lang='scss' scoped>
.page-home{
  padding:16px;
  border-radius: 60px;
}
</style>

