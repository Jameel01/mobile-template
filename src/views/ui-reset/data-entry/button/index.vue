<!--
 * @Description: 按钮Button
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-04-15 16:54:15
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-24 15:55:42
 -->
<template>
  <div class="button-page">
    <!-- <van-button type="info">主按钮 Normal</van-button> -->
    <van-button type="info" round size="large">主按钮 Normal</van-button>
    <div class="lines"></div>
    <van-button type="primary" round size="large">主按钮 Tap</van-button>
    <div class="lines"></div>
    <van-button type="info" round disabled size="large">主按钮 disabled</van-button>
    <div class="lines"></div>
    <div class="three-button">
      <span class="middle-button">
        <van-button type="info" round>主按钮</van-button>
      </span>
      <span class="middle-button">
        <van-button class="ml-5" type="primary" round>主按钮</van-button>
      </span>
      <span class="middle-button">
        <van-button class="ml-5" type="info" round>主按钮</van-button>
      </span>
    </div>
    <div class="lines"></div>
    <van-button type="info" size="small" round>主按钮</van-button>
    <van-button class="ml-5" type="info" size="small" round>主按钮</van-button>
    <van-button class="ml-5" type="info" size="small" round>主按钮</van-button>
    <div class="lines"></div>
    <van-button type="info" round plain size="large">次按钮 Normal</van-button>
    <div class="lines"></div>
    <span class="button-tap">
      <van-button plain type="info" round size="large">次按钮 Tap</van-button>
    </span>
    <div class="lines"></div>
    <van-button type="info" round disabled plain size="large">次按钮 disabled</van-button>
    <div class="lines"></div>
    <div class="three-button">
      <span class="middle-button">
        <van-button type="info" round plain>主按钮</van-button>
      </span>
      <span class="middle-button button-tap">
        <van-button class="ml-5" type="primary" round plain>主按钮</van-button>
      </span>
      <span class="middle-button">
        <van-button class="ml-5" type="info" disabled round plain>主按钮</van-button>
      </span>
    </div>
    <div class="lines"></div>
    <van-button type="info" size="small" round plain>主按钮</van-button>
    <span class="button-tap">
      <van-button class="ml-5" type="info" size="small" round plain>次按钮</van-button>
    </span>
    <van-button class="ml-5" type="info" disabled size="small" round plain>主按钮</van-button>
    <div class="lines"></div>
    <van-button type="info" loading-text="主按钮 Normal" loading round size="large"></van-button>
    <div class="lines"></div>
    <van-button type="info" loading-text="次按钮 Normal" loading round plain size="large"></van-button>
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

