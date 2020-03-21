## 一个通用的业务卡片标题

### 如何使用
```js
import GCardTitle from '@/components/g-card-title/index.vue'

<g-card-title
  title="标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
  sub-title="这是一个串副标题"
  rightText="右边文字">
  <div slot="title-after">标题右侧额外内容</div>
</g-card-title>
```

### Props

| name          | 描述                               | 默认值 |
| ------------- | ---------------------------------- | ------ |
| title         | 标题                               | ''     |
| subTitle      | 副标题                             | ''     |
| rightText     | 右侧内容                           | ''     |
| bodyStyle     | 组件外层样式，可用来覆盖外边距设置 | {}     |
| titleStyle    | 样式                               | {}     |
| subTitleStyle | 样式                               | {}     |
| rightStyle    | 样式                               | {}     |

### Slot
| 名字        | 描述                              |      |
| ----------- | --------------------------------- | ---- |
| title-after | 标题后面内容的插槽 一般用来放tag  |      |
| right       | 右侧内容插槽 文字不满足要求时使用 |      |
|             |                                   |      |