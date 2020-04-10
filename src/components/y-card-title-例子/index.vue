<template>
  <section class='g-component-card-title' :style="bodyStyle">
    <div class="card-left">
      <div class="title-box">
        <slot name="title-before"></slot>
        <h4
          v-if="title"
          class="card-title"
          :style="titleStyle">{{ title }}</h4>
        <slot name="title-after"></slot>
      </div>
      <p
        v-if="subTitle"
        class="card-sub-title"
        :style="subTitleStyle">
        {{ subTitle }}
      </p>
    </div>
    <div class="card-right">
      <slot name="right">
        <span
          v-if="rightText"
          class="card-right-text"
          :style="rightStyle">
          {{ rightText }}
        </span>
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "g-component-card-title",
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    bodyStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    titleStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    subTitleStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    rightStyle: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang='less'>
@import '~@/styles/functions.less';
.g-component-card-title {
  display: flex;
  font-size: 14 * @ratio;
  padding: 16 * @ratio;
  .card-left {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
  }
  .card-right {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    color: #606266;
    margin-left: 40 * @ratio;
  }
  .title-box {
    display: flex;
  }
  .card-title {
    font-size: 18 * @ratio;
    line-height: 1.1;
    font-weight: bold;
    overflow: hidden;
    .fn_ellipsis();
    &::before {
      display: inline-block;
      content: '';
      width: 3 * @ratio;
      height: 12 * @ratio;
      background: #1B65B9;
      margin-right: 7 * @ratio;
    }
  }
  .card-sub-title {
    color: #606266;
    margin: 8 * @ratio 0 0 10 * @ratio;
    line-height: 1;
  }
}
</style>
