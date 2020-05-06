<!--
 * @Description: loading插件
 * @Autor: guoruliang
 * @Date: 2020-04-27 13:32:17
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-27 14:49:28
 -->
<template>
  <div>
    <!-- 加载gif -->
    <div class="project-loading" v-show="isShow">
      <div class="loading-block">
        <img src="@/assets/imgs/12333.gif" width="101px" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "y-loading-plus",
  props: {},
  data() {
    return {
      isShow: false
    }
  },
  created() {},
  methods: {
    /**
     * @description: 展示
     * @param {Number} duration 延迟关闭时间
     * @return: \
     * @author: guoruliang
     */
    show(duration = 0) {
      this.isShow = true
      if (!duration) { return }
      setTimeout(() => {
        this.isShow = false
      }, duration) 
    },
    /**
     * @description: 隐藏
     * @param \
     * @return: \
     * @author: guoruliang
     */
    hide() {
      this.isShow = false
    }
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

