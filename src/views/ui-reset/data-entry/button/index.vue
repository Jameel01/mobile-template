<!--
 * @Description: 按钮Button
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-04-15 16:54:15
 * @LastEditors: chenyt
 * @LastEditTime: 2020-04-21 16:24:56
 -->
<template>
  <div class="button-page">
    <!-- <van-button type="primary">主按钮 Normal</van-button> -->
    <van-button type="primary" round size="large">主按钮 Normal</van-button>
    <div class="lines"></div>
    <van-button type="info" round size="large">主按钮 Tap</van-button>
    <div class="lines"></div>
    <van-button type="primary" round disabled size="large">主按钮 disabled</van-button>
    <div class="lines"></div>
    <div class="three-button">
      <van-button type="primary" round>主按钮</van-button>
      <van-button class="ml-5" type="info" round>主按钮</van-button>
      <van-button class="ml-5" type="primary" round>主按钮</van-button>
    </div>
    <div class="lines"></div>
    <van-button type="primary" size="small" round>主按钮</van-button>
    <van-button class="ml-5" type="primary" size="small" round>主按钮</van-button>
    <van-button class="ml-5" type="primary" size="small" round>主按钮</van-button>
    <div class="lines"></div>
    <van-button type="primary" round plain size="large">次按钮 Normal</van-button>
    <div class="lines"></div>
    <van-button type="primary" block round plain size="large">次按钮 Tap</van-button>
    <div class="lines"></div>
    <van-button type="primary" round disabled plain size="large">次按钮 disabled</van-button>
    <div class="lines"></div>
    <div class="three-button">
      <van-button type="primary" round plain>主按钮</van-button>
      <van-button class="ml-5" type="info" round plain>主按钮</van-button>
      <van-button class="ml-5" type="primary" disabled round plain>主按钮</van-button>
    </div>
    <div class="lines"></div>
    <van-button type="primary" size="small" round plain>主按钮</van-button>
    <van-button class="ml-5" type="primary" size="small" round plain>主按钮</van-button>
    <van-button class="ml-5" type="primary" disabled size="small" round plain>主按钮</van-button>
    <div class="lines"></div>
    <van-button type="primary" loading-text="主按钮 Normal" loading round size="large"></van-button>
    <div class="lines"></div>
    <van-button type="primary" loading-text="次按钮 Normal" loading round plain size="large"></van-button>
  </div>
</template>

<script>
</script>
<style lang='scss' scoped>
.lines {
  height: 16px;
}
.button-page {
  padding: 16px;
}
.ml-5 {
  margin-left: 10px;
}
</style>

