<template>
  <div id="app">
    <!-- 加载gif -->
    <div class="project-loading" v-show='loadingBox'>
      <div class="loading-block">
        <img src='@/assets/imgs/12333.gif' />
      </div>
    </div>
    <!-- 页面切换容器 -->
    <router-view />
  </div>
</template>
<script>
import SessionUtil from "@/utils/sessionStorage"
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      loadingBox: true//加载展示
    }
  },
  created () {
    // 修改加载状态
    this.$bus.$on('setLoading', (params) => {
      this.loadingBox = params
    })
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
@import url("@/styles/common.scss");
#app {
  /* font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC',
    'Helvetica Neue', STHeiti, 'Microsoft Yahei', Tahoma, Simsun, sans-serif; */
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
