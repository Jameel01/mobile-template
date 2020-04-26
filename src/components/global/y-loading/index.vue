<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-24 13:57:10
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-26 17:33:25
 -->
<template>
  <div>
    <!-- 加载gif -->
    <div class="project-loading" v-show="yLoading">
      <div class="loading-block">
        <img src="@/assets/imgs/loading.gif" width="101px" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "y-loading",
  props: {
    yLoading: {
      // 加载状态
      type: Boolean,
      default: true
    }
  },
  created() {
    // 修改加载状态
    this.$bus.$on("setLoading", params => {
      this.$emit("update:yLoading", params)
    })
  }
}
</script>
<style lang='scss' scoped>
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
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

