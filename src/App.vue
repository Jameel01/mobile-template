<template>
  <div id="app">
    <y-loading :yLoading.sync='loadingStatus'></y-loading>
    <!-- 页面切换容器 -->
    <router-view />
  </div>
</template>
<script>
import YLoading from '@/components/y-loading/index.vue'
import SessionUtil from "@/utils/sessionStorage"
export default {
  name: 'app',
  components: {
    YLoading
  },
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
// 加载框样式定义
.project-loading {
  background: #fbfbfb;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100000;
}

.loading-block {
  position: absolute;
  top: 50%;
  margin-top: -42px;
  left: 50%;
  margin-left: -101px;
}
</style>
