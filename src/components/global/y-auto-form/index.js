/*
 * @Description: y-auto-form 自动表单
 * @Version: 0.1
 * @Autor: yjm
 * @LastEditors: yjm
 */
import FormItem from "./y-form-item"

export default {
  props: {
    value: Object,
    formItemList: {
      type: Array,
      required: true
    }
  },

  name: "y-auto-form",

  model: {
    event: "change",
    prop: "value"
  },

  components: { FormItem },

  data() {
    return {
      rawFormItemList: [],
      rawFormItem: {}
    }
  },

  methods: {
    genFormItem(props) {
      const { on, prop, hidden, ...attrs } = props

      props = {
        attrs: {
          __data: this.form[prop], // form item 绑定值
          on,
          ...attrs
        },
        on: {
          // 更新form item绑定值
          update: val => {
            this.form[prop] = val
            this.$emit("change", this.form)
          }
        }
      }
      return props.attrs.type == "title" ? <y-title {...props} v-show={!hidden}></y-title> : <FormItem {...props} v-show={!hidden}></FormItem>
    },
    parseFormItemList(formItemList) {
      const isArrayValue = ["uploader", "region", "area"]
      // 原始配置对象
      this.rawFormItemList = formItemList
        .map(item => {
          // 提取id
          if (item.item && item.item.prop) {
            item.prop = item.item.prop
          }

          return item
        })
        .filter(item => {
          if (!item.prop && item.type != "title") {
            console.log(`缺少prop字段，掉该项配置将被过滤`, item)
            return false
          }
          return true
        })
      // 原始form item 的 v-model 绑定值对象

      this.rawFormItemList.map(item => {
        if (item.prop) {
          this.rawFormItem[item.prop] =
            isArrayValue.includes(item.type) || item.checkboxGroup || item.radioGroup ? [] : null
        }
      })
    },
    genDefaultSlots() {
      return (
        this.$scopedSlots.default && this.$scopedSlots.default(this.$children)
      )
    }
  },
  watch: {
    formItemList: {
      immediate: true,
      deep: true,
      handler(val) {
        this.parseFormItemList(val)
      }
    }
  },
  mounted() {
    // 复制van-form的方法,合并到this
    const { submit, validate, resetValidation, scrollToField } = this.$refs.form

    Object.assign(this, { submit, validate, resetValidation, scrollToField })
  },
  computed: {
    form() {
      return Object.assign({}, this.rawFormItem, this.value)
    }
  },

  render(h) {
    const props = {
      attrs: this.$attrs,
      on: this.$listeners
    }

    return (
      <van-form ref="form" {...props}>
        {this.rawFormItemList.map(item => {
          return this.genFormItem(item)
        })}
        {this.genDefaultSlots()}
      </van-form>
    )
  }
}
