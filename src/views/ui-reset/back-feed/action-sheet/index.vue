<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-22 17:49:36
 * @LastEditors: guoruliang
 * @LastEditTime: 2020-04-26 17:44:18
 -->
<template>

  <div class="action-sheet">
    弹框 ActionSheet
    <van-cell title="展示取消按钮" @click="showAction1" is-link />
    <van-cell title="头部描述" @click="showAction2" is-link />
    <van-action-sheet v-model="show1" :actions="actions" cancel-text="取消" @cancel="onCancel" />
    <van-action-sheet v-model="show2" :actions="actions" cancel-text="取消" description="温馨提示：温馨提示温馨提示温馨提示温馨提示" />
    <span class="btitle">分享弹框 ShareActionSheet</span>
    <van-cell title="显示分享面板" is-link @click="showShare = true" />
    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
    <br />
    <br />
    消息提示 Toast
    <span class="btitle">text only</span>
    <van-button round type="primary" @click="tip()">示一行</van-button>
    <van-button round type="primary" @click="tip2()">长文字提示</van-button>
    <van-button round type="primary" @click="tip3()">自定义图标</van-button>
  </div>

</template>
<script>
import Vue from "vue"
import { ShareSheet, Toast } from "vant"
Vue.use(ShareSheet)
Vue.use(Toast)
export default {
  name: "action-sheet",
  data() {
    return {
      actions: [
        { name: "内容一" },
        { name: "内容二" }
        // { loading: true },
        // { name: "禁用选项", disabled: true }
      ],
      show1: false,
      show2: false,
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" }
      ]
    }
  },

  computed: {},
  mounted() {},
  created() {},
  methods: {
    showAction1() {
      this.show1 = true
    },
    showAction2() {
      this.show2 = true
    },
    onCancel() {
      this.show1 = false
    },
    onSelect(option) {
      // Toast(option.name)
      this.showShare = false
    },
    tip() {
      Toast("纯文字提示一行")
    },
    tip2() {
      Toast("纯文字清提示两行纯文字清提示两行纯文字清提示两行纯文字清")
    },
    tip3() {
      Toast({
        message: "自定义图标",
        icon: "like-o"
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.action-sheet {
}
</style>