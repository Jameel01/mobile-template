<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-03-21 22:55:00
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-07-31 11:04:52
--> 
<template>
  <div class="page-home">
    {{data}}
  </div>
</template>
<script>
export default {
  components: {},
  name: "home",
  watch: {},
  props: {},
  filters: {},
  data() {
    return { 
      data: "首页"
    }
  },
  created() {},
  mounted() {},
  methods: {
  },
  destroyed() {}
}
</script>
<style lang='less' scoped>
.page-home{}
</style>

