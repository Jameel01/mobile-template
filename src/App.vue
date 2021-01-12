<!--
 * @Description: 入口页面
 * @Version: 0.1
 * @Autor: Chenyt
-->

<template>
  <div id="app">
    <!-- 页面切换容器 -->
    <keep-alive>
      <router-view v-if='$route.meta.keepAlive' />
    </keep-alive>
    <router-view v-if='!$route.meta.keepAlive' />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      loadingStatus: true //加载展示
    }
  },
  mounted(){
  },
  created() {
    this.$Loading.show(2000)
  },
  methods: {}
}
</script>

<style lang="less">
#app {
  background: #fff;
  height: 100%;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
