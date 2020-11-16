<!--
 * @Description: y-select-dict
 * @Version: 0.1
 * @Autor: yjm
 * @LastEditors: Chenyt
 * @Date: 2020-09-29 17:24:35
 * @LastEditTime: 2020-11-13 14:06:49
-->
<template>
  <y-select
    v-model="select"
    v-bind="$attrs"
    v-on="$listeners"
    :columns="columns"
    :format="format"
    :class="classType"
  >
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      v-if="filterabled"
    />
  </y-select>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex"
import isEmpty from "lodash/isEmpty"
export default {
  props: {
    // 字典类型
    dictType: String,
    value: {
      type: [Array, String, Number],
      required: true
    },
    filterabled: {
      type: Boolean,
      default: true
    },
    classType: {
      type: [Array, String, Number],
      default: "line-show"
    }
  },
  model: {
    prop: "value",
    event: "change"
  },
  name: "y-select-dict",
  data() {
    return {
      searchValue: "",
      list: []
    }
  },
  watch: {
    searchValue: {
      immediate: true,
      handler(val) {
        if (val) {
          this.filterData(val)
        } else {
          this.list = []
        }
      }
    },
    dictionaryCodeList(val) {
      // 插入请选择数据
      if (
        val[this.dictType] &&
        val[this.dictType][0][this.format.name] !== "请选择"
      ) {
        val[this.dictType].unshift({
          [this.format.name]: "请选择",
          [this.format.value]: ""
        })
      }
    }
  },
  computed: {
    ...mapGetters(["dictionaryCodeList"]),
    ...mapState("dictionary", ["format"]),

    columns() {
      return isEmpty(this.list)
        ? this.dictionaryCodeList[this.dictType] || []
        : this.list
    },
    select: {
      get() {
        return this.value
      },
      set() {
        this.$emit("change", this.select)
      }
    }
  },
  methods: {
    ...mapActions("dictionary", ["getCodeList"]),
    // 过滤字典数据，回显使用
    filterData(val) {
      const dictionaryCodeList = this.dictionaryCodeList

      if (this.dictType && !isEmpty(dictionaryCodeList)) {
        const dictData = dictionaryCodeList[this.dictType]

        this.list = dictData.filter(item => {
          if (item[this.format.name].includes(val)) {
            return true
          } else {
            this.$toast("无匹配数据")
          }
        })
      }
    }
    // 服务器搜索
    // handleSearch(query) {
    //   console.log(query)
    //   if (query !== "") {
    //     this.list = []
    //     this.loading = true
    //     // 搜索
    //     getCodeListApi({ types: this.dictType, keyword: query })
    //       .then(res => {
    //         if (res.code == 0 && !isEmpty(res.data)) {
    //           const data = res.data[this.dictType]
    //           this.list = data
    //         }
    //         this.loading = false
    //       })
    //       .catch(err => {
    //         this.loading = false
    //       })
    //   }
    // }
  },
  created() {
    this.dictType && this.getCodeList(this.dictType)
  }
}
</script>
<style lang="less" scoped>
.line-show /deep/ .van-cell:last-child::after{
  display: block !important;
}
.no-line /deep/ .van-cell:last-child::after{
  display: none !important;
}
.line-show /deep/ .van-cell::after {
  border-bottom: 1px solid @second_border_color;
}
.line-show{

}
</style>
