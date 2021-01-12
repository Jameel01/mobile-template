<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: Chenyt
-->
<template>
  <div class="page-home">
    <y-title content="首页" titleDes="案例展示，本地环境走的是mock，开发时记得修改文件.env.proxy中的变量VUE_APP_MOCK_SERVER=false，走真实接口"/>
    <van-cell title="字典案例" is-link to="/base-module/dict-demo" />
    <van-cell title="表单案例" is-link to="/base-module/auto-form" />
  </div>
</template>
<script>

</script>
<style lang='less' scoped>
.page-home {
  padding:10px;
}
</style>

