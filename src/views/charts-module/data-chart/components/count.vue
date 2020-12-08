<!--
 * @Description: 数据展示
 * @Version: 0.1
 * @Autor: yjm
 * @LastEditors: yjm
-->
<template>
  <div class="wrapper">
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index" :style="{width:`${100 / list.length}%`}">
        <div class="count">
          {{ item.count | formatThousands }}
          <span class="unit">{{ unit }}</span>
        </div>
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 显示单位，数量后拼接的单位
    unit: {
      type: String,
      default: "人"
    },
    // 图表数据列表
    list: {
      type: Array,
      default: () => {
        return [
          {
            title: "新增注册用户", // 标题名称
            count: 12234 // 数量
          },
          {
            title: "新增实名用户",
            count: 11234
          },
          {
            title: "活跃用户",
            count: 12234
          }
        ]
      }
    }
  },
  filters: {
    formatThousands(num) {
      if (num) {
        return num.toLocaleString()
      }
      return num
    }
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  background: #f5f7fa;
  padding: 16px * @ratio;
  margin: 16px * @ratio;
}
.list {

}
.item {
  text-align: center;
  position: relative;
  display: inline-block;
  padding: 0 5px * @ratio;
  &::after {
    content: "";
    width: 1px * @ratio;
    height: 100%;
    display: block;
    background: #ebeef5;
    border-radius: 3px * @ratio;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
  &:last-child::after {
    display: none;
  }
}
.count {
  font-size: 18px * @ratio;
  margin-bottom: 10px * @ratio;
  .unit {
    font-size: 12px * @ratio;
    color: #606266;
  }
}
.title {
  font-size: 14px * @ratio;
  color: #606266;
}
</style>