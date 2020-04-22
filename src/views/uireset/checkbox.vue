<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: lzx
 * @Date: 2020-04-16 09:25:18
 * @LastEditors: lzx
 * @LastEditTime: 2020-04-21 18:51:26
 -->

<template>
  <div class="checkbox">
    <van-checkbox v-model="checked" class="check">
      自定义图标
      <template #icon="props">
        <img class="img-icon1" :src="props.checked ? activeIcon1 : inactiveIcon1" />
      </template>
    </van-checkbox>
    <div class="line"></div>
    <van-radio-group v-model="radio">
      <van-radio name="1" class="radio">
        单选框 1
        <template #icon="props">
          <img class="img-icon2" :src="props.checked ? activeIcon2 : inactiveIcon2" />
        </template>
      </van-radio>
      <van-radio name="2" class="radio">
        单选框 2
        <template #icon="props">
          <img class="img-icon2" :src="props.checked ? activeIcon2 : inactiveIcon2" />
        </template>
      </van-radio>
    </van-radio-group>
    <div class="line"></div>
    <van-switch v-model="select1" size="25px" />
    <div class="line"></div>
    <van-switch v-model="select2" size="25px" />
    <div class="line"></div>
    <van-switch v-model="select1" size="25px" disabled />
    <div class="line"></div>
    <van-switch v-model="select2" size="25px" disabled />
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true,
      radio: "1",
      select1: true,
      select2: false,
      activeIcon1: require("@/assets/imgs/checkbox/selected+normal@2x.png"),
      inactiveIcon1: require("@/assets/imgs/checkbox/selected+normal copy 2@2x.png"),
      activeIcon2: require("@/assets/imgs/checkbox/selected+dagou@2x.png"),
      inactiveIcon2: require("@/assets/imgs/checkbox/selected+disabled@2x.png")
    }
  }
}
</script>
<style lang="scss" scoped>
.checkbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.check {
  height: 60px;
}
.img-icon1 {
  height: 24px;
  width: 24px;
}
.img-icon2 {
  height: 34px;
  width: 36px;
}
.radio {
  height: 60px;
}
.line {
  height: 10vh;
}
</style>