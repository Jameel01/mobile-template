<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: lzx
 * @LastEditors: lzx
 * @Date: 2020-07-07 15:50:33
 * @LastEditTime: 2020-07-29 16:44:21
--> 

# y-area 三级地区选择组件

### 介绍

固定三级的地区选择组件

### 引入

```js
import Vue from 'vue';
import { YArea } from '@ylz/vant';

Vue.use(YArea);
```

## 代码演示

### 省市区数据固定

``` html
<template>
  <div>
    <van-field v-model="value" input-align="right" label="地区" placeholder="请选择" readonly is-link @click="show = true" />
    <y-area :show="show" @cancel="show = false" @confirm="handleConfirm" :plist="provinceList" :clist="cityList" :alist="areaList"></y-area>
  </div>
</template>
```

``` js
import provinceList from "@/assets/data/province"
import cityList from "@/assets/data/city"
import areaList from "@/assets/data/area"
export default {
  name: "area-demo",
  data() {
    return {
      value: "",
      show: false, //弹窗显示
      provinceList, //地区数据
      cityList,
      areaList
    }
  },
  methods: {
    /**
     * 地区组件点击确定(根据需求取数据)
     */
    handleConfirm(e) {
      let value = ""
      e.forEach((item, index) => {
        const name = item.province || item.city || item.area
        if (index > 0) {
          value = value + "-" + name
        } else {
          value = item.province
        }
      })
      this.value = value
      this.show = false
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示 | _boolean_ | `false` |
| position | 窗口弹出位置 | _string_ | `bottom/center/top` |
| title | 中间的标题 | _string_ | - |
| cancelText | 取消按钮文本 | _string_ | `取消` |
| confirmText | 确定按钮的值 | _string_ | `确定` |
| tip1 | 1列的默认文本内容 | _string_ | `请选择（必选）` |
| tip2 | 2列的默认文本内容 | _string_ | `请选择（非必选）` |
| tip3 | 3列的默认文本内容 | _string_ | `请选择（非必选）` |
| plist | 第一行数组 | _array_ | - |
| clist | 第二行数组 | _array_ | - |
| alist | 第三行数组 | _array_ | - |
| height | 内容高度 | _string_ | `350` |
| maskClose | 是否点击遮罩层关闭 | _boolean_ | `false` |
| themeColor | 主题颜色 | _string_ | - |

### Event

| 事件名 | 说明                 | 回调参数                       |
| ------ | -------------------- | ------------------------------ |
| onColumnChange | 点击选项时触发       | _item:object(当前选中的值)_ |
| onCancel  | 点击取消按钮时触发 | _null_ |
| onConfirm  | 点击确认按钮时触发 |  _item:object(当前选中的值)_  |
