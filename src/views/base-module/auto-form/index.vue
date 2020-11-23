<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-11-20 13:54:34
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-11-20 14:12:08
-->
<template>
<div class="auto-form">
      <y-auto-form v-model="form" :formItemList="formItemList" ref="form">
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            style="width: 100%"
          >
            提交
          </van-button>
        </div>
      </y-auto-form>
</div>
</template>
<script>

export default {
  name: "auto-form",
  data() {
    return {
      form: {
        sex: 1,
        select: [],
        selectDict: []
      },

      formItemList: [
        {
          type: "input",
          prop: "sex",
          label: "输入框",
          scopedSlots: {
            extra: () => <van-icon name="good-job-o" />
          }
        },
        {
          type: "selectDict",
          prop: "selectDict",
          item: {
            label: "字典选择",
            dictType: "sex"
          }
        },
        {
          type: "calendar",
          prop: "calendar",
          calendarType: "range",
          on: {
            confrm: data => {
              console.log(data)
            }
          },
          item: {
            label: "日历"
          }
        },
        {
          type: "datetime",
          prop: "datetime",
          dateType: "time",
          item: {
            label: "时间选择"
          }
        },
        {
          type: "select",
          prop: "select",
          item: {
            label: "选择框",
            columns: [
              {
                label: "北京市",
                value: "11"
              },
              {
                label: "天津市",
                value: "12"
              },
              {
                label: "河北省",
                value: "13"
              }
            ],
            format: {
              name: "label",
              value: "value"
            }
          }
        },
        {
          type: "input",
          prop: "age",
          hidden: true,
          item: {
            label: "年龄"
          }
        },

        {
          type: "switch",
          prop: "switch",
          item: {
            label: "开关"
          }
        },
        {
          type: "checkbox",
          prop: "checkbox",
          item: {
            label: "复选框组"
          },
          checkboxGroup: {
            checkboxs: [
              {
                name: "01",
                text: "复选框A"
              },
              {
                name: "02",
                text: "复选框B"
              }
            ]
          }
        },
        {
          type: "checkbox",
          prop: "checkbox2",
          item: {
            label: "复选框"
          },
          text: "复选框"
        },
        {
          type: "radio",
          prop: "radio",
          item: {
            label: "单选框组"
          },
          radioGroup: {
            radios: [
              {
                name: "01",
                text: "单选框A"
              },
              {
                name: "02",
                text: "单选框B"
              }
            ]
          }
        },
        {
          type: "radio",
          prop: "radio2",
          item: {
            label: "单选框"
          },
          text: "单选框"
        },
        {
          type: "stepper",
          prop: "stepper",
          item: {
            label: "进步器"
          }
        },
        {
          type: "rate",
          prop: "rate",
          item: {
            label: "评分"
          }
        },
        {
          type: "slider",
          prop: "slider",
          item: {
            label: "滑块"
          }
        },
        {
          type: "uploader",
          prop: "uploader",
          openCompress: true,
          compressMaxSize: 500 * 1024,
          on: {
            oversize: file => {
              console.log(file)
              this.$toast("文件大小不能超过 500kb")
            }
          },
          item: {
            label: "图片上传"
          }
        }
      ]
    }
  },
  methods: {
    handleClick() {
      this.$refs.form.validate()
      console.log(this.$refs.form)
    }
  },
  watch: {
    form(val) {
      console.log("demo", val)
    }
  },
  computed: {
  },
  mounted() {
  },
  created(){

  }
 
}
</script>
<style lang="less" scoped>
.auto-form {

}
</style>