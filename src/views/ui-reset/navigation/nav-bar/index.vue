<!--
 * @Description: 导航栏 NavBar/分类导航 Tab bar
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-23 11:43:42
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-28 10:57:57
 -->
<template>
  <div class="nav-bar">
    <span class="lager-title">导航栏 NavBar</span>
    <div class="line"></div>
    <van-nav-bar title="页面标题" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="ellipsis" size="18" />
      </template>
    </van-nav-bar>
    <div class="line"></div>
    <van-nav-bar class="bg-3B71E8" title="页面标题" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #title>
        <span class="color-fff">页面标题</span>
      </template>
      <template #left>
        <van-icon class="color-fff " name="arrow-left" size="18" />
      </template>
      <template #right>
        <van-icon class="color-fff" name="ellipsis" size="18" />
      </template>
    </van-nav-bar>
    <div class="line"></div>
    <van-nav-bar title="页面标题" @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="ellipsis" size="18" />
      </template>
      <template #left>
        <van-icon name="arrow-left" size="18" />
        <van-icon class="pl-20" name="cross" size="18" />
      </template>
    </van-nav-bar>
    <div class="line"></div>
    <van-nav-bar class="bg-3B71E8" title="页面标题" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #title>
        <span class="color-fff">页面标题</span>
      </template>
      <template #left>
        <van-icon class="color-fff " name="arrow-left" size="18" />

        <van-icon class="color-fff pl-20" name="cross" size="18" />
      </template>
      <template #right>
        <van-icon class="color-fff" name="ellipsis" size="18" />
      </template>
    </van-nav-bar>
    <div class="line"></div>
    <van-nav-bar title="页面标题" right-text="文本" left-arrow>
    </van-nav-bar>
    <div class="line"></div>
    <van-nav-bar class="bg-3B71E8" @click-left="onClickLeft" @click-right="onClickRight">
      <template #title>
        <span class="color-fff">页面标题</span>
      </template>
      <template #right>
        <span class="color-fff">文本</span>
      </template>
      <template #left>
        <van-icon class="color-fff" name="arrow-left" size="18" />
      </template>
    </van-nav-bar>
    <div class="line"></div>
    <van-nav-bar title="页面标题" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-button type="primary" size="small" round>文本</van-button>
      </template>
    </van-nav-bar>
    <div class="line"></div>
    <span class="lager-title">分类导航 Tab bar</span>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue"
import { NavBar, Toast, Tabbar, TabbarItem } from "vant"
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  name: "nav-bar",
  data() {
    return {
      active: 0
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    onClickLeft() {
      Toast("返回")
    },
    onClickRight() {
      Toast("按钮")
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-bar {
}
</style>