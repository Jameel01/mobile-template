/*
 * @Description: y-form-item 表单子项
 * @Version: 0.1
 * @Autor: yjm
 * @LastEditors: Please set LastEditors
 * @Date: 2020-11-13 11:44:20
 * @LastEditTime: 2020-11-23 13:37:05
 */
import isFunction from "lodash/isFunction"
import isObject from "lodash/isObject"
import merge from "lodash/merge"
import { dayFormat } from "./dayjs"

import "./index.less"

import {
  Rate,
  Slider,
  YUploader,
  Switch,
  Stepper,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Calendar,
  Popup,
  YSelect,
  DatetimePicker
} from "@ylz/vant"

export default {
  name: "y-form-item",
  data() {
    return {
      generator: "",
      showCalendar: false,
      showDatetime: false
    }
  },
  components: {
    Rate,
    Slider,
    YUploader,
    "van-switch": Switch,
    Stepper,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Calendar,
    Popup,
    YSelect
  },

  methods: {
    genNormalInput(field, props) {
      const fieldProps = merge(props, field)
      return <van-field v-model={this.data} {...fieldProps}></van-field>
    },
    genSwitch(field, props) {
      return (
        <van-field {...field}>
          <template slot="input">
            <van-switch v-model={this.data} {...props} />
          </template>
        </van-field>
      )
    },
    genStepper(field, props) {
      return (
        <van-field {...field}>
          <template slot="input">
            <Stepper v-model={this.data} {...props} />
          </template>
        </van-field>
      )
    },
    genCheckbox(field, props) {
      const { checkboxGroup, text } = props.attrs
      const { checkboxs, ...checkboxGroupProps } = checkboxGroup || {}

      return (
        <van-field {...field}>
          <template slot="input">
            {checkboxGroup ? (
              <van-checkbox-group
                v-model={this.data}
                {...this.setDefaultValue({
                  config: checkboxGroupProps,
                  defaultAttrs: { direction: "horizontal" }
                })}
              >
                {checkboxs.map(prop => {
                  const { text, ...otherProp } = prop
                  return (
                    <van-checkbox
                      {...this.setDefaultValue({ config: otherProp })}
                    >
                      {text}
                    </van-checkbox>
                  )
                })}
              </van-checkbox-group>
            ) : (
              <van-checkbox v-model={this.data} {...props}>
                {text}
              </van-checkbox>
            )}
          </template>
        </van-field>
      )
    },
    genRadio(field, props) {
      const { radioGroup, text } = props.attrs
      const { radios, ...radioGroupProps } = radioGroup || {}

      return (
        <van-field {...field}>
          <template slot="input">
            {radioGroup ? (
              <van-radio-group
                v-model={this.data}
                {...this.setDefaultValue({
                  config: radioGroupProps,
                  defaultAttrs: { direction: "horizontal" }
                })}
              >
                {radios.map(prop => {
                  const { text, ...otherProp } = prop
                  return (
                    <van-radio {...this.setDefaultValue({ config: otherProp })}>
                      {text}
                    </van-radio>
                  )
                })}
              </van-radio-group>
            ) : (
              <van-radio v-model={this.data} {...props}>
                {text}
              </van-radio>
            )}
          </template>
        </van-field>
      )
    },
    genRate(field, props) {
      return (
        <van-field {...field}>
          <template slot="input">
            <Rate v-model={this.data} {...props} />
          </template>
        </van-field>
      )
    },
    genUploader(field, props) {
      return (
        <van-field {...field}>
          <template slot="input">
            <YUploader v-model={this.data} {...props} />
          </template>
        </van-field>
      )
    },
    genSlider(field, props) {
      return (
        <van-field {...field}>
          <template slot="input">
            <Slider v-model={this.data} {...props} />
          </template>
        </van-field>
      )
    },
    genCalendar(field, props) {
      const calendarType = props.attrs.calendarType || "single"

      const fieldProps = this.setDefaultValue({
        config: field,
        defaultAttrs: {
          isLink: true,
          readonly: true,
          inputAlign: "right",
          placeholder: "点击选择时间",
          format: "date"
        },
        defaultEvent: {
          click: () => {
            this.showCalendar = true
          }
        }
      })

      const calendarProps = this.setDefaultValue({
        config: props,
        defaultEvent: {
          confirm: data => {
            this.data = format(data, this)
            this.showCalendar = false
          }
        },
        defaultAttrs: {
          delimiter: null
        }
      })

      calendarProps.attrs.type = calendarType

      function format(data, _this) {
        const format = fieldProps.attrs.format
        const delimiter = calendarProps.attrs.delimiter
        if (calendarType == "multiple" || calendarType == "range") {
          data = data.map(item => dayFormat(item, format))
          _this.$emit("confrm", data)
          return delimiter
            ? data.join(delimiter)
            : calendarType == "multiple"
              ? data.join(",")
              : data.join("~")
        } else {
          data = dayFormat(data, format)
          _this.$emit("confrm", data)
          return data
        }
      }

      return (
        <div class="van-cell form-item">
          <van-field v-model={this.data} {...fieldProps} />
          <Calendar v-model={this.showCalendar} {...calendarProps} />
        </div>
      )
    },
    genDatetime(field, props) {
      // 时间格式化
      const dateType = {
        datetime: "YYYY-MM-DD HH:mm:ss",
        date: "YYYY-MM-DD",
        "year-month": "YYYY-MM",
        "month-day": "MM-DD",
        datehour: "YYYY-MM-DD HH"
      }

      const type = props.attrs.dateType || "time"

      const fieldProps = this.setDefaultValue({
        config: field,
        defaultAttrs: {
          isLink: true,
          readonly: true,
          inputAlign: "right",
          placeholder: "点击选择时间"
        },
        defaultEvent: {
          click: () => {
            this.showDatetime = true
          }
        }
      })

      const datetimeProps = this.setDefaultValue({
        config: props,
        defaultEvent: {
          confirm: data => {
            this.data = dateType[type] ? dayFormat(data, dateType[type]) : data
            this.showDatetime = false
          },
          cancel: () => {
            this.showDatetime = false
          }
        }
      })

      datetimeProps.attrs.type = type

      const popupProps = this.setDefaultValue({
        config: datetimeProps.attrs.popup,
        defaultAttrs: {
          position: "bottom"
        }
      })

      return (
        <div class="van-cell form-item">
          <van-field v-model={this.data} {...fieldProps} />
          <Popup v-model={this.showDatetime} {...popupProps}>
            <DatetimePicker {...datetimeProps} />
          </Popup>
        </div>
      )
    },
    genSelect(field, props) {
      let fieldProps = merge(props, field)
      fieldProps = this.setDefaultValue({
        config: fieldProps,
        defaultAttrs: {
          isLink: true
        }
      })
      return (
        <YSelect
          class="van-cell form-item"
          v-model={this.data}
          {...fieldProps}
        />
      )
    },
    genSelectDict(field, props) {
      let fieldProps = merge(props, field)
      fieldProps = this.setDefaultValue({
        config: fieldProps,
        defaultAttrs: {
          isLink: true
        }
      })
      return (
        <div class="van-cell form-item">
          <y-select-dict
            style={{ width: "100%" }}
            v-model={this.data}
            {...fieldProps}
          />
        </div>
      )
    },
    genSlots(scopedSlots, props) {
      return isFunction(scopedSlots)
        ? scopedSlots()
        : isObject(scopedSlots)
          ? Object.keys(scopedSlots).map(item => {
            return (
              <template slot={item}>
                {isFunction(scopedSlots[item]) && scopedSlots[item](props)}
              </template>
            )
          })
          : undefined
    },
    /**
     * 配置默认值
     * @param {Object} config VNode配置对象
     * @param {Object} defaultEvent 默认事件
     * @param {Object} defaultAttrs 默认属性
     * @param {Object} defaultScopedSlots 默认插槽
     */
    setDefaultValue({
      config,
      defaultEvent,
      defaultAttrs,
      defaultScopedSlots
    }) {
      if (!config) {
        config = {}
      }
      const {
        scopedSlots,
        on,
        attrs,
        style,
        props,
        domProps,
        directives,
        nativeOn,
        slot,
        key,
        ref,
        refInFor,
        ...other
      } = config

      // 关键词class字段替换
      const className = other.class
      delete other.class

      return {
        scopedSlots: merge(defaultScopedSlots, scopedSlots),
        on: merge(defaultEvent, on),
        attrs: merge(defaultAttrs, other, attrs),
        class: className,
        style,
        props,
        domProps,
        directives,
        nativeOn,
        slot,
        key,
        ref,
        refInFor
      }
    }
  },
  created() {
    const type = {
      input: this.genNormalInput, // 普通输入框
      switch: this.genSwitch, // 开关
      stepper: this.genStepper, // 进步器
      rate: this.genRate, // 评分
      slider: this.genSlider, // 滑块
      uploader: this.genUploader, // 图片上传
      calendar: this.genCalendar, // 日历
      select: this.genSelect, // 选择框
      selectDict: this.genSelectDict, // 码表编译选择框
      checkbox: this.genCheckbox, // 码表编译选择框
      radio: this.genRadio, // 码表编译选择框
      datetime: this.genDatetime // 时间选择框
    }

    // 获取生成模板函数，创建后不在变更
    this.generator = type[this.$attrs.type] || this.genNormalInput
  },

  computed: {
    data: {
      set(val) {
        this.$emit("update", val)
      },
      get() {
        return this.$attrs.__data
      }
    }
  },

  render(h) {
    // eslint-disable-next-line no-unused-vars
    const { prop, type, item, __data, ...props } = this.$attrs

    return this.generator(
      this.setDefaultValue({ config: item }),
      this.setDefaultValue({ config: props, defaultAttrs: { clearable: true } })
    )
  }
}
