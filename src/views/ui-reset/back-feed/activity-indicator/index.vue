<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-23 10:47:45
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-28 10:04:45
 -->
<template>
  <div class="activity-indicator">
    <span class="lager-title">一类：用于卡片或内容之中</span>
    <span class="btitle">Without text</span>
    <div class="tc">
      <van-loading color="#3B71E8" />
    </div>
    <span class="btitle">With text</span>
    <div class="tc">
      <van-loading color="#3B71E8">加载中...</van-loading>
    </div>
    <span class="btitle">With large size and customized text style</span>
    <div class="tc">
      <van-loading color="#3B71E8" size="50px" vertical>加载中...</van-loading>
    </div>
    <!-- 二类：用于整页加载 -->
    <br />
    <span class="lager-title">二类：用于整页加载</span>
    <span class="btitle">进度条</span>
    <van-progress :percentage="50" />
  </div>
</template>
<script>
import Vue from "vue"
import { Progress } from "vant"
Vue.use(Progress)
export default {
  name: "activity-indicator",
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.activity-indicator {
}
</style>