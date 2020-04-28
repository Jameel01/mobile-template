<!--
 * @Description: picker
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-20 22:05:32
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-21 10:21:16
 -->
<template>
  <div class="picker">
    <van-picker confirm-button-text="确定" show-toolbar title="标题" :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
    <div class='line'></div>
    <van-picker confirm-button-text="确定" show-toolbar title="标题" :columns="columns1" />
    <div class='line'></div>
    <van-picker confirm-button-text="确定" show-toolbar title="标题标题标题" :columns="columns2" />
  </div>
</template>
<script>
export default {
  name: "picker",
  data() {
    return {
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      columns1: [
        // 第一列
        {
          values: ["周一", "周二", "周三", "周四", "周五"],
          defaultIndex: 2
        },
        // 第二列
        {
          values: ["上午", "下午", "晚上"],
          defaultIndex: 1
        }
      ],
      columns2: [
        {
          text: "浙江",
          children: [
            {
              text: "杭州",
              children: [{ text: "西湖区" }, { text: "余杭区" }]
            },
            {
              text: "温州",
              children: [{ text: "鹿城区" }, { text: "瓯海区" }]
            }
          ]
        },
        {
          text: "福建",
          children: [
            {
              text: "福州",
              children: [{ text: "鼓楼区" }, { text: "台江区" }]
            },
            {
              text: "厦门",
              children: [{ text: "思明区" }, { text: "海沧区" }]
            }
          ]
        }
      ]
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    onConfirm(value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`)
    },
    onCancel() {
      console.log("取消")
    }
  }
}
</script>
<style lang="scss" scoped>
.picker {
  // background: #eee;
}
</style>