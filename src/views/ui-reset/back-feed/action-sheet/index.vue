<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-22 17:49:36
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-22 18:10:59
 -->
<template>
  <div class="action-sheet">
    <van-cell title="展示取消按钮" @click="showAction(1)" is-link />
    <van-cell title="头部描述" @click="showAction(2)" is-link />
    <van-action-sheet v-model="show1" :actions="actions" cancel-text="取消" @cancel="onCancel" />
    <van-action-sheet v-model="show2" :actions="actions" description="这是一段描述信息" />
  </div>

</template>
<script>
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
      show2: false
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    showAction(type) {
      var showType = "show" + type
      this.show1 = true
      console.log(showType)
      console.log(this.showType)
    },
    onCancel() {
      this.showType = false
    }
  }
}
</script>
<style lang="scss" scoped>
.action-sheet {
}
</style>