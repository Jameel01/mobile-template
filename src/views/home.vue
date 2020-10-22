<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-03-21 22:55:00
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-22 09:22:56
--> 
<template>
  <div class="page-home">
    {{data | name}}
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
      data: "上i市零零落落"
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
.page-home{}
</style>

