<!--
 * @Description: tab
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-23 14:17:42
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-23 15:08:33
 -->
<template>
  <div class="tab">
    <span class="btitle">分类导航 Tabs</span>
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
    <br />
    <br />

    <span class="btitle">分段选择 SegmentedControl</span>
    <van-tabs type="card">
      <van-tab title="项目">1</van-tab>
      <van-tab title="项目">2</van-tab>
    </van-tabs>
    <van-tabs type="card">
      <van-tab title="项目">1</van-tab>
      <van-tab title="项目">2</van-tab>
      <van-tab title="项目">3</van-tab>
    </van-tabs>
    <van-tabs type="card">
      <van-tab title="项目">1</van-tab>
      <van-tab title="项目">2</van-tab>
      <van-tab title="项目">3</van-tab>
      <van-tab title="项目">4</van-tab>
    </van-tabs>
    <!-- <div class="big-radius">
      <van-tabs type="card">
        <van-tab title="项目">1</van-tab>
        <van-tab title="项目">2</van-tab>
      </van-tabs>
    </div> -->
  </div>
</template>
<script>
import Vue from "vue"
import { Tab, Tabs } from "vant"
Vue.use(Tab)
Vue.use(Tabs)
export default {
  name: "tab",
  data() {
    return {
      active: 2
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.tab {
}
</style>