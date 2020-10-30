<!--
 * @Description: 主页面
 * @Autor: guoruliang
 * @Date: 2020-04-03 16:52:52
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-10-30 15:31:25
 -->
<template>
  <div id="app">
    <van-nav-bar
      :title="$route.name"
      :left-arrow="$route.path=='/'?false:true"
      @click-left="onClickLeft"
    />
    <!-- 页面切换容器 -->
    <keep-alive>
      <router-view v-if='$route.meta.keepAlive' />
    </keep-alive>
    <router-view v-if='!$route.meta.keepAlive' />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      loadingStatus: true //加载展示
    }
  },
  mounted(){
    window.addEventListener("hashchange", () => {
      this.$router.go(0)
    })
  },
  created() {
    this.$Loading.show(2000)
  },
  methods: {
    onClickLeft(){
      history.go(-1)
    }
  },
  watch: {
  
  }
}
</script>

<style lang="scss">
#app {
  background:#fff;
  height: 100%;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
