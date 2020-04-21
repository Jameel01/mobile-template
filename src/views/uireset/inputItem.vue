<!--
 * @Author: lzx
 * @Date: 2020-04-17 14:21:25
 * @LastEditTime: 2020-04-21 18:50:41
 * @LastEditors: lzx
 * @Description: In User Settings Edit
 * @FilePath: \移动端ui规范\src\views\uireset\inputItem.vue
 --> 
 
<template>
  <div style="background-color:#F5F7FA;height:100%">
    <span>Basic</span>
    <van-cell-group>
      <van-field v-model="value1" placeholder="我是暗提示" clearable class="pl41">
        <div slot="label" class="tip-wrap">
          <span>文字标题</span>
          <div>
            <span class="tip">左侧注释</span>
          </div>
        </div>
      </van-field>
      <van-field v-model="value2" placeholder="我是暗提示" clearable class="pl13">
        <div slot="label" class="tip-wrap">
          <span>文字标题</span>
          <div>
            <span class="explain">使用说明</span>
          </div>
        </div>
      </van-field>
      <van-field v-model="value3" placeholder="提示" label="文字标题" class="pl41" />
      <van-field v-model="value4" label="文字标题" disabled class="disabled-label pl41" />
      <van-form style="border-bottom: 1px solid #ebedf0;">
        <van-field v-model="value5" placeholder="请输入数字" label="文字标题" :rules="[{ pattern,message:' '}]" class="pl41" />
      </van-form>
      <van-field v-model="value6" center clearable label="文字标题" placeholder="请输入验证码">
        <template #button>
          <van-button size="small" class="ignore-btn-code">
            <span style="font-size: 16px;color: #62636C;">SW9F</span>
            <img src="@/assets/imgs/inputItem/Refresh@2x.png" alt="" class="icon-refresh">
          </van-button>
        </template>
      </van-field>
    </van-cell-group>
    <span>No label</span>
    <van-cell-group>
      <van-field v-model="value7" placeholder="我是暗提示" class="no-lable1" />
      <span class="resend">重新发送</span>

    </van-cell-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: '',
      value2: '正在输入的内容',
      value3: '已输入的内容',
      value4: '不可修改的内容',
      value5: '',
      value6: '',
      pattern: /^[0-9]*$/,
      value7: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.tip-wrap {
  display: flex;
  align-items: center;
  .tip {
    display: inline-block;
    font-size: 14px;
    color: #90949e;
    line-height: 1;
    margin-left: 8px;
    word-break: keep-all;
  }
}

.explain {
  display: inline-block;
  font-size: 14px;
  color: #3b71e8;
  line-height: 1;
  margin-left: 8px;
}
/deep/ .van-field__body {
  display: flex;
  align-items: center;
}
/deep/ .van-field__control {
  text-align: right;
  margin-left: 28px;
}
/deep/ .van-cell {
  word-break: keep-all;
  font-size: 16px;
  height: 48px;
}
.disabled-label {
  color: #90949e;
}
.pl41 {
  padding-right: 41px;
}
.pl13 {
  padding-right: 20px;
}
.ignore-btn-code {
  width: 84px;
  background: #f5f7fa;
  border-radius: 2px;
  display: flex;
  align-items: center;
  .icon-refresh {
    width: 14px;
    height: 14px;
    margin-top: 0px;
    margin-left: 7px;
    display: inline-block;
    margin-bottom: -3px;
  }
}
.no-lable1 {
  display: inline-flex;
  width: 80%;
  /deep/ .van-field__control {
    text-align: left;
    margin-left: 0;
  }
}
.resend {
  font-size: 14px;
  color: #3b71e8;
  letter-spacing: 0;
  display: inline-block;
  width: 20%;
  text-align: right;
  padding-right: 16px;
}
</style>