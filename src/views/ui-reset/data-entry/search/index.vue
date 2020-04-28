<!--
 * @Description: searchBar
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-21 11:02:28
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-28 10:15:37
 -->

<template>
  <div>
    <span class="btitle">样式一</span>
    <van-search v-model="value1" :placeholder="placeholder" :input-align="align" :show-action="cancel" @focus="focus1" @blur="blur1">
      <div slot="left-icon" class="icon" :class="cancel?'':'icon-left'">
        <img :src="require('../../../../assets/imgs/searchBar/btn_serch_grey@3x.png')" alt="" width="14px" height="14px" />
      </div>
      <span slot="action" class="text-right">取消</span>
    </van-search>
    <span class="btitle">样式二</span>
    <van-search v-model="value2" :placeholder="placeholder1" show-action>
      <span slot="action" class="text-right">搜索</span>
    </van-search>
    <span class="btitle">样式三</span>
    <div style="display:flex">
      <span slot="left">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value4" :options="option1" />
        </van-dropdown-menu>
      </span>
      <van-search v-model="value3" placeholder="搜索内容提示" show-action style="width:100%">
        <span slot="action" class="text-right">搜索</span>
      </van-search>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: 0,
      cancel: false,
      align: "center",
      placeholder: "搜索",
      placeholder1: "搜索内容提示",
      option1: [
        { text: "排序筛选", value: 0 },
        { text: "其他筛选", value: 1 }
      ]
    }
  },
  methods: {
    focus1() {
      this.cancel = true
      this.align = "left"
      this.placeholder = "输入提示性文案"
    },
    blur1() {
      this.cancel = false
      this.align = "center"
      this.placeholder = "搜索"
      this.value1 = ""
    },
    focus2() {
      this.placeholder1 = "输入提示性文案"
    },
    blur2() {
      this.placeholder1 = "搜索内容提示"
    }
  }
}
</script>
<style lang="scss" scoped>
</style>