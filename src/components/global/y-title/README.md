## 面包屑组件

### 如何使用
```js
import Title from '@/components/Title'

<Title content="标题" />
```

### Props

| name          | 描述                               | 默认值 |
| ------------- | ---------------------------------- | ------ |
| content       | 标题内容                           | '标题2' |
| moreType  | 默认不展示,默认1为链接,2为文字          | 1   |
| border     | 是否带边框                             | false   |
| fontContSize     | 标题字大小                       | '14'   |
| colorCont     | 标题内容颜色                        | '333'   |
| pleft     | 左边间距                                | '30'   |
| mBottom     | 标题底部间距                          | '10'   |
| lineWidth     | 左侧竖线样式线宽度                  | '6'   |
| lineLeft     | 左侧竖线样式线左边距                 | '-17'   |
| lineTop     | 左侧竖线样式线头部边距                | '13'   |
| more     | 更多                                     | ''   |
| pathUrl     | 跳转链接                              | '/'   |
| backgroundColor     | 背景色                        | 'linear-gradient(0deg,rgba (52, 152, 219, 1) 0%,rgba (87, 186, 252, 1) 100%)'   |
| iconUrl     | 图标的url 如：footer-icon-fault.png 标题的图标要放titleIcon底下| ''   |
| more     | 更多                                      | ''   |
| iconWidth     | 图标宽度                             | '28'   |
| iconHeight     | 图标高度                           | '28'   |
| iconLeft     | 图标左边距                            | '-32'   |
| iconTop     | 图标头部边距                            | '7'   |

