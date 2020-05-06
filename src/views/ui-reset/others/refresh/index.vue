<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-23 15:13:32
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-28 11:04:39
 -->
<template>
  <div class="refresh">
    <span class="lager-title">刷新 PullToRefresh</span>
    <div class="tc">
      <van-loading color="#3B71E8" vertical>松开刷新</van-loading>
    </div>
    <span class="lager-title">滑动操作 SwipeAction</span>
    <br />
    <van-swipe-cell>
      <!-- <template #left>
        <van-button square type="primary" text="选择" />
      </template> -->
      <van-cell :border="false" title="单元格" />

      <template #right>
        <!-- <van-button square type="danger" text="删除" /> -->
        <van-button square type="primary" text="Action" />
      </template>
    </van-swipe-cell>
    <van-swipe-cell>
      <van-cell :border="false" title="单元格" />
      <template #right>
        <!-- <van-button square type="danger" text="删除" /> -->
        <van-button square color="#C0C4CC" text="Action" />
        <van-button square type="danger" text="Delete" />
      </template>
    </van-swipe-cell>
    <van-swipe-cell>
      <template #left>
        <van-button square type="primary" text="选择" />
      </template>
      <van-cell :border="false" title="单元格" />
      <template #right>
        <van-button square color="#C0C4CC" text="Action1" />
        <van-button square type="primary" text="Action2" />
      </template>
    </van-swipe-cell>
  </div>
</template>
<script>
import Vue from "vue"
import { PullRefresh, SwipeCell, Toast } from "vant"
Vue.use(SwipeCell)
Vue.use(PullRefresh)
export default {
  name: "refresh",
  data() {
    return { count: 0, isLoading: false }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功")
        this.isLoading = false
        this.count++
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.refresh {
}
</style>