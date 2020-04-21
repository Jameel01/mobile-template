<!--
 * @Description: uploder\slidder\stepper
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-20 15:38:26
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-20 21:59:15
 -->
<template>
  <div class="uploader">
    <span class="btitle">图片选择 ImagePicker</span>
    <div>
      <van-uploader v-model="fileList" multiple />
    </div>
    <span class="btitle">滑动 Slidder</span>
    <div>
      <van-slider v-model="value" @change="onChange" />
    </div>
    <br />
    <span class="btitle">步进器 Stepper</span>
    <div>
      <van-stepper class="pluid" v-model="value" />
      <van-stepper v-model="value" />
      <van-stepper class="pluid round" v-model="value" />
      <van-stepper class="round" v-model="value" />
    </div>
  </div>
</template>
<script>
import { Slider } from "vant"
import { Stepper } from "vant"
export default {
  name: "uploader",

  data() {
    return {
      fileList: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
      value: 50
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    onChange(value) {
      console.log("当前值：" + value)
    }
  }
}
</script>
<style lang="scss" scoped>
.uploader {
  padding: 20px;
}
</style>
