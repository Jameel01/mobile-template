<!--
 * @Description: 排名图表组件
 * @Version: 0.1
 * @Autor: yjm
 * @LastEditors: yjm
-->

<template>
  <div class="rank-list">
    <div class="rank-list-item" v-for="(item, index) in list" :key="index">
      <div class="icon" :style="{ backgroundImage: `url(${item.icon})` }"></div>
      <div class="bar">
        <div class="title">{{ item.title }}{{` (${item.percentage}%)`}}</div>
        <div class="ratio-bar">
          <div
            class="ratio-content"
            :style="{ width: `${item.percentage}%` }"
          ></div>
        </div>
      </div>
      <div class="total">{{ item.count | formatThousands }}{{ unit }}</div>
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
            title: "支付宝", // 标题名称
            percentage: "50", // 百分比值
            icon: require("../img/icon-Alipay@2x.png"), // 图标
            count: 12234 // 数量
          },
          {
            title: "微信",
            percentage: "40",
            icon: require("../img/icon-WeChat@2x.png"),
            count: 11234
          },
          {
            title: "医保App",
            percentage: "39",
            icon: require("../img/icon-CHS@2x.png"),
            count: 12234
          },
          {
            title: "其他",
            percentage: "80",
            icon: require("../img/icon-other.png"),
            count: 19234
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
.rank-list {
  font-size: 12px * @ratio;
}
.rank-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px * @ratio 23px * @ratio;
}

.title {
  margin-bottom: 3px * @ratio;
}
.total {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.ratio-bar {
  border-radius: 8px * @ratio;
  height: 4px * @ratio;
  background: #e6ecf2;
  overflow: hidden;
  .ratio-content {
    height: 100%;
    background: #4a90ff;
  }
}
.bar {
  flex: 1;
  margin: 0 10px * @ratio;
}
.icon {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 24px * @ratio;
  height: 24px * @ratio;
}
</style>