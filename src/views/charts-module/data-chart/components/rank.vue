<!--
 * @Description: 排名图表组件
 * @Version: 0.1
 * @Autor: yjm
 * @LastEditors: yjm
-->

<template>
  <div class="rank-list">
    <div class="rank-list-item" v-for="(item, index) in list" :key="index">
      <div class="serial-number">{{ index + 1 }}</div>
      <div class="title">{{ item.title }}</div>
      <div class="ratio-bar">
        <div
          class="ratio-content"
          :style="{ width: `${item.percentage}%` }"
        ></div>
      </div>
      <div class="total">{{ item.count | formatThousands}}{{ unit }}</div>
    </div>
    <div class="more-box" v-if="showMore">
      <div class="more">查看更多</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showMore: {
      type: Boolean,
      default: false
    },
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
            title: "厦门市", // 标题名称
            percentage: "50", // 百分比值
            count: 12234 // 数量
          },
          {
            title: "福州市",
            percentage: "40",
            count: 11234
          },
          {
            title: "泉州市",
            percentage: "39",
            count: 12234
          },
          {
            title: "三明市",
            percentage: "80",
            count: 19234
          }
        ]
      }
    }
  },
  filters: {
    formatThousands(num){
      if (num){
        return num.toLocaleString()
      }
      return num 
    }
    
  }
}
</script>
<style lang="less" scoped>
.rank-list {
  font-size: 12px * @ratio;
}
.rank-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px * @ratio 23px * @ratio;
}
.serial-number {
  background: #d7edff;
  color: #1b65b9;
  width: 18px * @ratio;
  height: 18px * @ratio;
  line-height: 18px * @ratio;
  border-radius: 50%;
  text-align: center;
}
.title {
  margin-left: 13px * @ratio;
  width: 74px * @ratio;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.total {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.ratio-bar {
  width: 163px * @ratio;
  height: 6px * @ratio;
  background: #e6ecf2;
  margin: 0 5px * @ratio;
  overflow: hidden;
  .ratio-content {
    height: 100%;
    background: #4a90ff;
  }
}
.more-box {
  text-align: center;
  margin-top: 25px * @ratio;
}
.more {
  font-size: 14px * @ratio;
  color: #fff;
  background: #4a90ff;
  line-height: 28px * @ratio;
  display: inline-block;
  width: 82px * @ratio;
  text-align: center;
  border-radius: 14px * @ratio;
}
</style>