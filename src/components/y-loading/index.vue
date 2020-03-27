<template>
  <div>
    <!-- 加载gif -->
    <div class="project-loading" v-show='yLoading'>
      <div class="loading-block">
        <img src='@/assets/imgs/12333.gif' />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'y-loading',
  props: {
    yLoading: {//
      type: Boolean,
      default: true
    },
  },
  created () {
    // 修改加载状态
    this.$bus.$on('setLoading', (params) => {
      this.$emit('update:yLoading', params)
    })
  }
}
</script>

