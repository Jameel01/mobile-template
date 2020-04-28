<template>
  <div class="result-page">result-page组件
    <span class="btitle">失败</span>
    <van-row class="result-p" type="flex" justify="center">
      <van-col>
        <p>
          <van-icon size="80px" color="#F56C6C" name="clear" />
        </p>
        <p class="title1 color-F56C6C">标题一</p>
        <p class="title2">说明文字，最多两行</p>
      </van-col>
      <!-- <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col> -->
    </van-row>
    <span class="btitle">成功</span>
    <van-row class="result-p" type="flex" justify="center">
      <van-col>
        <p>
          <van-icon size="80px" color="#28C663" name="checked" />
        </p>
        <p class="title1 color-28C663">标题一</p>
        <p class="title2">说明文字，最多两行</p>
      </van-col>
      <!-- <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col> -->
    </van-row>
    <span class="btitle">处理中</span>
    <van-row class="result-p" type="flex" justify="center">
      <van-col>
        <p>
          <van-icon size="80px" color="#FEB70F" name="clock" />
        </p>
        <p class="title1 color-FEB70F">标题一</p>
        <p class="title2">说明文字，最多两行</p>
      </van-col>
      <!-- <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col> -->
    </van-row>
  </div>
</template>
<script>
export default {
  name: "result-page",
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
.result-page {
}
</style>