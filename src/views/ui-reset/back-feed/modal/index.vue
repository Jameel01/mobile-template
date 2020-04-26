<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-23 11:03:10
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-24 17:57:02
 -->
<template>
  <div class="modal">modal组件
    <br />
    <br />
    <div>
      <van-button type="info" round @click="showPopup">弹窗一</van-button>
      <van-popup v-model="show" closeable class="modalPop">
        <div class="popDiv">
          <p class="title">一级文字内容</p>
          <div class="p2">
            请在光线充足的地方重新尝试请在光线充足的地方重新尝试
          </div>
          <van-button type="info" round size="large">主要操作</van-button>
        </div>
      </van-popup>

      <van-button type="info" round @click="showPopup2">弹窗二</van-button>
      <van-popup v-model="show2" closeable class="modalPop">
        <div class="popDiv">
          <van-row class="result-p" type="flex" justify="center">
            <van-col>
              <p>
                <van-icon size="80px" color="#FEB70F" name="clock" />
              </p>
              <p class="title">一级文字内容</p>
            </van-col>
            <!-- <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col> -->
          </van-row>
          <div class="p2">
            请在光线充足的地方重新尝试请在光线充足的地方重新尝试
          </div>
          <van-button type="info" round size="large">主要操作</van-button>
        </div>

      </van-popup>

      <van-button type="info" round @click="showPopup3">弹窗三</van-button>
      <van-popup v-model="show3" closeable class="modalPop">
        <div class="popDiv">
          <div class="p2">
            请在光线充足的地方重新尝试请在光线充足的地方重新尝试
          </div>
          <van-button type="info" round size="large">主要操作</van-button>
        </div>
      </van-popup>

      <van-button type="info" round @click="showPopup4">弹窗四</van-button>
      <van-popup v-model="show4" closeable class="modalPop">
        <div class="popDiv">
          <p class="title">一级文字内容</p>
          <div class="p2">
            请在光线充足的地方重新尝试请在光线充足的地方重新尝试
          </div>
          <van-button type="info" round size="large">主要操作</van-button>
          <van-button type="info" plain round size="large">次要操作</van-button>
        </div>

      </van-popup>

      <van-button type="info" round @click="showPopup5">弹窗五</van-button>
      <van-popup v-model="show5" closeable class="modalPop">
        <div class="popDiv">
          <van-row class="result-p" type="flex" justify="center">
            <van-col>
              <p>
                <van-icon size="80px" color="#FEB70F" name="clock" />
              </p>
              <p class="title">一级文字内容</p>
            </van-col>
            <!-- <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col> -->
          </van-row>
          <div class="p2">
            请在光线充足的地方重新尝试请在光线充足的地方重新尝试
          </div>
          <van-button type="info" round size="large">主要操作</van-button>
          <van-button type="info" plain round size="large">次要操作</van-button>
        </div>

      </van-popup>

      <van-button type="info" round @click="showPopup6">弹窗六</van-button>
      <van-popup v-model="show6" closeable class="modalPop">
        <div class="popDiv">
          <p class="title">一级文字内容</p>
          <div class="p2">
            请在光线充足的地方重新尝试请在光线充足的地方重新尝试
            请在光线充足的地方重新尝试请在光线充足的地方重新尝试
            请在光线充足的地方重新尝试请在光线充足的地方重新尝试请在光线充足的地方重新尝试请在光线充足的地方重新尝试请在光线充足的地方重新尝试请在光线充足的地方重新尝试
          </div>
          <van-button type="info" round size="large">主要操作</van-button>
        </div>

      </van-popup>
    </div>

  </div>

  </div>
</template>
<script>
export default {
  name: "modal",
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    showPopup() {
      this.show = true
    },
    showPopup2() {
      this.show2 = true
    },
    showPopup3() {
      this.show3 = true
    },
    showPopup4() {
      this.show4 = true
    },
    showPopup5() {
      this.show5 = true
    },
    showPopup6() {
      this.show6 = true
    },
    closePopup() {
      this.show = false
    }
  }
}
</script>
<style lang="scss" scoped>
.modal {
}
</style>