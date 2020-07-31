<!--
 * @Description: 字典转换piker
 * @Version: 0.1
 * @Autor: yjm
 * @LastEditors: yjm
 * @Date: 2020-07-07 15:20:08
 * @LastEditTime: 2020-07-20 11:19:35
--> 
<template>
  <van-picker
    ref="picker"
    @cancel="cancel"
    @confirm="confirm"
    @change="change"
    :columns="formattedColumns"
    :default-index="defaultIndex"
    :value-key="format.name"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>
<script>
import { jsonToArray } from "@/utils"
export default {
  name: "y-dict-picker",
  props: {
    defaultValue: {
      type: [Array, String],
      default: ""
    },
    columns: {
      type: [Array, Object],
      required: true
    },
    format: {
      type: Object,
      default: function() {
        return { name: "label", value: "value" }
      }
    },
    defaultIndex: {
      type: [Number, String],
      default: 0
    },
    isJson: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formattedColumns: []
    }
  },
  computed: {
    dataType() {
      const { columns } = this

      const firstColumn = columns[0] || {}
      if (firstColumn.children) {
        return "cascade"
      }
      if (firstColumn.values) {
        return "object"
      }
      return "text"
    }
  },

  methods: {
    cancel(columnIndex) {
      this.$emit("onCancel", columnIndex)
    },
    confirm(columnValue, columnIndex) {
      const result = this.getCodes(columnValue, columnIndex)
      this.$emit(
        "onConfirm",
        result.columnValue,
        result.columnCode,
        columnIndex
      )
    },
    change(picker, columnValue, columnIndex) {
      if (this.dataType === "cascade") {
        this.onCascadeChange(columnIndex)
      }
      const result = this.getCodes(columnValue, columnIndex)
      this.$emit(
        "onChange",
        picker,
        columnIndex,
        result.columnValue,
        result.columnCode
      )
    },
    // 获取code数据
    getCodes(columnValue, columnIndex) {
      let columnCode = []
      if (this.dataType == "cascade") {
        return this.getCascadeCodes()
      } else {
        columnValue.forEach((item, index) => {
          const { values, codes } = this.formattedColumns[index]
          const valueIndex = values.indexOf(item)
          columnCode.push(codes[valueIndex])
        })
      }
      if (columnCode.length === 1) {
        columnCode = columnCode[0]
      }
      return { columnValue, columnCode }
    },
    // 获取级联编码
    getCascadeCodes() {
      const columnCode = []

      let columnValue = this.$refs.picker.getValues()
      const columnIndex = this.$refs.picker.getIndexes()

      // 获取全部列表选中值
      columnValue = columnValue.map(item => {
        if (typeof item == "string") {
          return item
        } else {
          return item[this.format.name]
        }
      })

      let cursor = { children: this.columns }
      let index = 0

      while (cursor && cursor.children) {
        const columnIndexValue = columnIndex[index]
        const column = cursor.children[columnIndexValue]

        columnCode.push(column[this.format.value])
        index++

        cursor = { children: column.children }
      }

      return { columnValue, columnCode }
    },
    // 格式化数据
    formatFn() {
      const { dataType } = this

      if (dataType === "text") {
        this.formatText()
      } else if (dataType === "cascade") {
        this.formatCascade()
      } else {
        this.formatObject()
      }
    },
    // 格式化单列数据
    formatText() {
      let { columns } = this

      // json数据格式转换
      if (this.isJson) {
        columns = jsonToArray(columns, this.format.value, this.format.name)
      }
      const values = columns.map(item => item[this.format.name])
      const codes = columns.map(item => item[this.format.value])
      this.formattedColumns = [
        { values, codes, defaultIndex: codes.indexOf(this.defaultValue) }
      ]
    },
    // 格式化多列数据
    formatObject() {
      const { columns } = this

      this.formattedColumns = columns.map((item, index) => {
        let { values, defaultIndex } = item

        const codes = values.map(item => item[this.format.value])
        values = values.map(item => item[this.format.name])

        defaultIndex = defaultIndex || (Array.isArray(this.defaultValue)
          ? this.defaultValue.map(item => codes.indexOf(item))[index]
          : 0)

        return {
          codes,
          values,
          defaultIndex
        }
      })
    },
    // 格式化级联数据
    formatCascade() {
      const formatted = []

      let cursor = { children: this.columns }
      let index = 0
      while (cursor && cursor.children) {
        const codes = cursor.children.map(item => item[this.format.value])

        const defaultIndex = cursor.defaultIndex
          ? cursor.defaultIndex
          : Array.isArray(this.defaultValue) && this.defaultValue.length
            ? codes.indexOf(this.defaultValue[index])
            : 0

        formatted.push({
          values: cursor.children.map(item => item[this.format.name]),
          className: cursor.className,
          codes,
          defaultIndex
        })

        index++
        cursor = cursor.children[defaultIndex]
      }

      this.formattedColumns = formatted
    },
    // 动态设置级联数据
    onCascadeChange(columnIndex) {
      let cursor = { children: this.columns }
      const indexes = this.$refs.picker.getIndexes()

      for (let i = 0; i <= columnIndex; i++) {
        cursor = cursor.children[indexes[i]]
      }

      while (cursor && cursor.children) {
        columnIndex++
        this.$refs.picker.setColumnValues(columnIndex, cursor.children)
        cursor = cursor.children[cursor.defaultIndex || 0]
      }
    }
  },
  watch: {
    columns: {
      handler: "formatFn",
      immediate: true
    }
  }
}
</script>