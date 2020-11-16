<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-03-21 22:23:09
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-11-16 10:08:08
 -->
<template>
  <div class='page-other'>
    <van-empty image="error" description="出错了" v-if='type=="error"' />
    <van-empty class='seat' :image="require('@/assets/imgs/common/network@2x.png')" description="当前网络异常，请稍后再试" v-else-if='type=="network"'>
      <van-button type="info" round class="bottom-button" plain>
        重新加载
      </van-button>
    </van-empty>
    <van-empty class='seat' :image="require('@/assets/imgs/common/none@2x.png')" description="很抱歉，未查询到相关信息" v-else-if='type=="none"' />
    <van-empty class='seat' :image="require('@/assets/imgs/common/defend@2x.png')" description="系统维护中" v-else-if='type=="defend"'>
    </van-empty>
    <van-empty description="页面走丢了" v-else>
      <van-button type="info" @click="clickFn" round class="bottom-button" plain>
        返回上一页
      </van-button>
    </van-empty>
  </div>
</template>
<script>
import Vue from "vue"
import { Empty } from "@ylz/vant"
Vue.use(Empty)
export default {
  data() {
    return { type: "error" }
  },
  created() {
    this.type = this.$route.query.type || "info"
  },
  methods: {
    clickFn(){
      window.history.go(-1)
    }
  }
}
</script>
<style lang='less' scoped>
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
