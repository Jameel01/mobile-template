<template>
  <div class="noticeBar">
    <span class="btitle"> 标记 Badge</span>
    <div>
      <van-icon class='mr-60' name="chat-o" color="#F56C6C;" dot />
      <van-icon class='mr-60' name="chat-o" color="#F56C6C;" badge="3" />
      <van-icon class='mr-60' name="chat-o" color="#F56C6C;" badge="28" />
      <van-icon class='mr-60' name="chat-o" color="#F56C6C;" badge="99+" />
      <van-icon class='mr-60' name="chat-o" color="#F56C6C;" badge="..." />
      <van-icon class='mr-60' name="chat-o" color="#F56C6C;" badge="new" />
    </div>
    <span class="btitle"> 标签 Tag</span>
    <div>
      <van-tag class='mr-60' plain>基础样式</van-tag>
      <van-tag class='mr-60' plain type="primary">选中样式</van-tag>
      <van-tag v-if="show.primary" plain closeable size="medium" type="primary" @close="close('primary')">
        可删除的
      </van-tag>
    </div> <span class="btitle"> 通告栏 NoticeBar</span>
    <div>
      <van-notice-bar color="#28C663" background="#DFF7E8" :scrollable="false">
        评价成功
      </van-notice-bar>
      <br />
      <van-notice-bar color="#FA3E3E" background="#FFF1F1" :scrollable="false">
        该挂号订单失败，请重新挂号
      </van-notice-bar>
      <br />
      <van-notice-bar :scrollable="false">
        通知内容通知内容通知内容通知内容通知内容通知内容通知内容
      </van-notice-bar>
      <br />
      <van-notice-bar left-icon="volume-o" :scrollable="false">
        通知内容通知内容通知内容通知内容通知内容通知内容通知内容
      </van-notice-bar>
      <br />
      <van-notice-bar left-icon="volume-o" :scrollable="false" mode="closeable">
        通知内容通知内容通知内容通知内容通知内容通知内容通知内容
      </van-notice-bar>
      <br />
      <van-notice-bar left-icon="volume-o" :scrollable="false" mode="link">
        通知内容通知内容通知内容通知内容通知内容通知内容通知内容
      </van-notice-bar>

    </div>
  </div>
</template>
<script>
export default {
  name: "noticeBar",
  data() {
    return {
      show: {
        primary: true,
        success: true
      }
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    close(type) {
      this.show[type] = false
    }
  }
}
</script>
<style lang="scss" scoped>
.noticeBar {
  padding: 20px;
}
.mr-60 {
  margin-right: 60px;
}
</style>