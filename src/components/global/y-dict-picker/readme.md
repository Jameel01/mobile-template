<!--
 * @Description:
 * @Version: 0.1
 * @Autor: yjm
 * @LastEditors: yjm
 * @Date: 2020-07-07 15:50:33
 * @LastEditTime: 2020-07-23 14:48:40
-->

# dict-picker 选择器

### 介绍

基于 `Picker 选择器` 封装的字典编码转换选择器

新增了自动转换编码功能，继承 `Picker 选择器` 用法，区别在于 `columns` 字段中的 `values` 传入的数据格式不同，要求传入的数据必须是如下，其中的键名格式可以通过 `format` 属性配置

* 多列数据： `[{ values:[{label:'北京',value:'11'}] }]`
* 单列数据： `[{ label:'北京',value:'11' }]`
* 级联数据： `[{ label:'北京',value:'11','children:[{ label:'朝阳区',value:'12','children:[{ label:'奥运村',value:'15' }]' }]' }]`
* 单列json数据： `{ "11":"北京","12":"天津","13":"河北省" }`

## 代码演示

### 单列选择字典编码转换

``` html
<y-dict-picker show-toolbar :columns="columns" :format="format" :defaultValue="defaultValue" @onCancel="cancel" @onConfirm="confirm" />
```

``` js
export default {
  data() {
    return {
      format: {
        name: "label",
        value: "value",
      },
      defaultValue: "11",
      columns: [{
          label: "北京市",
          value: "11",
        },
        {
          label: "天津市",
          value: "12",
        },
        {
          label: "河北省",
          value: "13",
        },
      ],
    };
  },
  methods: {
    cancel() {},
    confirm(val, code) {
      console.log(val, code);
    },
  },
};
```

### 多列选择字典编码转换

``` html
<y-dict-picker show-toolbar :columns="columns" :format="format" :defaultValue="defaultValue" @onCancel="cancel" @onConfirm="confirm" />
```

``` js
export default {
  data() {
    return {
      format: {
        name: "label",
        value: "value",
      },
      defaultValue: ["11", "14"],
      columns: [{
          values: [{
              label: "北京市",
              value: "11",
            },
            {
              label: "天津市",
              value: "12",
            },
            {
              label: "河北省",
              value: "13",
            },
          ],
        },
        {
          values: [{
              label: "山西省",
              value: "14",
            },
            {
              label: "内蒙古自治区",
              value: "15",
            },
            {
              label: "辽宁省",
              value: "21",
            },
          ],
        },
      ],
    };
  },
  methods: {
    cancel() {},
    confirm(val, code) {
      console.log(val, code);
    },
  },
};
```

### 级联字典编码转换

``` html
<y-dict-picker show-toolbar :columns="columns" :format="format" :defaultValue="defaultValue" @onCancel="cancel" @onConfirm="confirm" />
```

``` js
export default {
  data() {
    return {
      format: {
        name: "label",
        value: "value",
      },
      // 第一次数据value值，第二层数据value值，第三层数据value值
      defaultValue: ["18", "21", "22"],
      columns: [{
          label: "浙江",
          value: "11",
          children: [{
              label: "杭州",
              value: "12",
              children: [{
                  label: "西湖区",
                  value: "13"
                },
                {
                  label: "余杭区",
                  value: "14"
                },
              ],
            },
            {
              label: "温州",
              value: "15",
              children: [{
                  label: "鹿城区",
                  value: "16"
                },
                {
                  label: "瓯海区",
                  value: "17"
                },
              ],
            },
          ],
        },
        {
          label: "福建",
          value: "18",
          defaultIndex: 1,
          children: [{
              label: "福州",
              value: "40",
              children: [{
                  label: "鼓楼区",
                  value: "19"
                },
                {
                  label: "台江区",
                  value: "20"
                },
              ],
            },
            {
              label: "厦门",
              value: "21",
              children: [{
                  label: "思明区",
                  value: "22"
                },
                {
                  label: "海沧区",
                  value: "23"
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    cancel() {},
    confirm(val, code) {
      console.log(val, code);
    },
  },
};
```

### 单列json数据字典格式转换

``` html
<y-dict-picker show-toolbar :columns="columns" :format="format" :defaultValue="defaultValue" @onCancel="cancel" @onConfirm="confirm" isJson />
```

``` js
export default {
  data() {
    return {
      format: {
        name: "label",
        value: "value",
      },
      defaultValue: "11",
      columns: {
        "11": "北京市",
        "12": "天津市",
        "13": "河北省"
      }
    };
  },
  methods: {
    cancel() {},
    confirm(val, code) {
      console.log(val, code);
    },
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 对象数组，配置每一列显示的数据 | _Column[]_ | `[]` |
| title | 顶部栏标题 | _string_ | - |
| confirm-button-text | 确认按钮文字 | _string_ | `确认` |
| cancel-button-text | 取消按钮文字 | _string_ | `取消` |
| value-key | 选项对象中，选项文字对应的键名 | _string_ | `text` |
| toolbar-position | 顶部栏位置，可选值为 `bottom` | _string_ | `top` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| show-toolbar | 是否显示顶部栏 | _boolean_ | `false` |
| allow-html `v2.1.8` | 是否允许选项内容中渲染 HTML | _boolean_ | `true` |
| default-index | 单列选择时，默认选中项的索引 | _number \| string_ | `0` |
| item-height `v2.8.6` | 选项高度，支持 `px` 和 `rem` 单位，默认 `px` | _number \| string_ | `44` |
| visible-item-count | 可见的选项个数 | _number \| string_ | `5` |
| swipe-duration `v2.2.10` | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `1000` |
| format | 数据键值对格式 | _Object_ | `{ name: "label", value: "value" }` |
| isJson | 开启传入columns的json数据格式转换 | _Boolean_ | `false` |
| defaultValue | 默认选中项的编码值, 单列选择时传入字符串类型的编码值，多列选择传入编码值数组，级联选择传入每层数据的默认编码值数组 | _string \| array_ | "" |

### Events

当选择器有多列时，事件回调参数会返回数组

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onConfirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的编码，选中值对应的索引<br>多列：所有列选中值，所有选中值对应的编码，所有列选中值对应的索引 |
| onCancel | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| onChange | 选项改变时触发 | 单列：Picker 实例，选中值对应的索引, 选中值，选中值对应的编码<br>多列：Picker 实例，当前列对应的索引，所有列选中值，所有选中值对应的编码 |

### Column 数据结构

当传入多列数据时， `columns` 为一个对象数组，数组中的每一个对象配置每一列，每一列有以下 `key`
| 键名              | 说明                       | 类型       |
| ----------------- | -------------------------- | ---------- |
| values            | 列中对应的备选值           | _string[]_ |
| defaultIndex      | 初始选中项的索引，默认为 0 | _number_   |
| className         | 为对应列添加额外的类名     | _any_      |

## 常见问题

### 在桌面端无法操作组件？

参见[在桌面端使用](#/zh-CN/quickstart#zai-zhuo-mian-duan-shi-yong)。
