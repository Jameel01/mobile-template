<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-03-21 22:23:09
 * @LastEditors: chenyt
 * @LastEditTime: 2020-04-28 16:33:28
 -->
<template>
  <div class='page-other'>
    <van-empty image="error" description="出错了" v-if='type=="error"' />
    <van-empty class='seat' :image="require('@/assets/common/network@2x.png')" description="当前网络异常，请稍后再试" v-else-if='type=="network"'>
      <van-button type="info" round plain class="bottom-button">
        重新加载
      </van-button>
    </van-empty>
    <van-empty class='seat' :image="require('@/assets/common/none@2x.png')" description="很抱歉，未查询到相关信息" v-else-if='type=="none"' />
    <van-empty class='seat' :image="require('@/assets/common/defend@2x.png')" description="系统维护中" v-else-if='type=="defend"'>
    </van-empty>
    <van-empty description="描述文字" v-else>
      <van-button type="info" round plain class="bottom-button">
        重新加载
      </van-button>
    </van-empty>

  </div>
</template>
<script>
import Vue from "vue"
import { Empty } from "vant"
Vue.use(Empty)
export default {
  data() {
    return { type: "error" }
  },
  created() {
    this.type = this.$route.query.type
  },
  methods: {}
}
</script>
<style lang='scss' scoped>
.bottom-button {
  width: 320px;
}
.page-other {
  margin-top: 160px;
}
.seat {
  /deep/ .van-empty__image {
    width: 242px;
    height: auto;
    margin-bottom: 16px;
  }
}
</style>
