<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-23 11:03:10
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-23 18:27:12
 -->
<template>
  <div class="modal">modal组件
    <br />
    <br />
    <div>
      <van-button type="primary" @click="showPopup">弹窗一</van-button>
      <van-popup v-model="show" closeable class="modalPop">
        <div class="popDiv">
          <p class="title">一级文字内容</p>
          <div class="p2">
            请在光线充足的地方重新尝试请在光线充足的地方重新尝试
          </div>
          <van-button type="primary" round size="large">主要操作</van-button>
        </div>
      </van-popup>

      <van-button type="primary" @click="showPopup">弹窗二</van-button>
      <van-popup v-model="show" closeable class="modalPop">
        <div class="popDiv">
          <p class="title">一级文字内容</p>
          <div class="p2">
            请在光线充足的地方重新尝试请在光线充足的地方重新尝试
          </div>
          <van-button type="primary" round size="large">主要操作</van-button>
        </div>
      </van-popup>
    </div>

  </div>
</template>
<script>
export default {
  name: "modal",
  data() {
    return {
      show: false
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    showPopup() {
      this.show = true
    },
    closePopup() {
      this.show = false
    }
  }
}
</script>
<style lang="scss" scoped>
.modal {
  .modalPop {
    padding: 20px 10px 0 10px;
    width: 90%;
    color: #333;
    border-radius: 10px;
  }
  .popDiv {
    padding: 60px 20px 30px 20px;
    .title {
      font-size: 40px;
      line-height: 80px;
      text-align: center;
    }
    .p2 {
      font-size: 32px;
      line-height: 60px;
      //text-align: center;
    }
  }
}
</style>