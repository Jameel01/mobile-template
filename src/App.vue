<!--
 * @Description: 主页面
 * @Autor: guoruliang
 * @Date: 2020-04-03 16:52:52
 * @LastEditors: chenyt
 * @LastEditTime: 2020-05-29 15:29:23
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
  created() {
    this.$Loading.show(2000)
  },
  methods: {}
}
</script>

<style lang="scss">
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
