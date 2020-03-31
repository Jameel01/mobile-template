<template>
  <div id="app">
    <y-loading :yLoading.sync='loadingStatus'></y-loading>
    <!-- 页面切换容器 -->
    <router-view />
  </div>
</template>
<script>
import SessionUtil from "@/utils/sessionStorage"
export default {
  name: 'app',
  data () {
    return {
      loadingStatus: true//加载展示
    }
  },
  created () {

    // 隐藏加载
    setTimeout(() => {
      this.$bus.$emit('setLoading', false)
    }, 2000);
  },
  methods: {
  },
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
