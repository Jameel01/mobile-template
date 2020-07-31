<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-03-21 22:55:00
 * @LastEditors: chenyt
 * @LastEditTime: 2020-05-29 14:00:22
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
<style lang='less' scoped>
.page-home{}
</style>

