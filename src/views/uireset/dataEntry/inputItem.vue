<!--
 * @Description: inputItem
 * @Author: your name
 * @Date: 2020-04-17 14:21:25
 * @LastEditTime: 2020-04-21 10:06:48
 * @LastEditors: zhengxn
 * @Description: In User Settings Edit
 * @FilePath: \移动端ui规范\src\views\uireset\inputItem.vue
 -->
<template>

  <div class='input-page'>
    <span class="btitle">Basic</span>
    <van-cell-group>
      <van-field v-model="value1" placeholder="我是暗提示" clearable input-align="right">
        <div slot="label" class="tip-wrap">
          <span>文字标题</span>
          <div>
            <span class="ignore-tip">左侧注释</span>
          </div>
        </div>
      </van-field>
      <van-field v-model="value2" placeholder="我是暗提示" clearable input-align="right">
        <div slot="label" class="tip-wrap">
          <span>文字标题</span>
          <div>
            <span class="ignore-explain">使用说明</span>
          </div>
        </div>
      </van-field>
      <van-field v-model="value3" placeholder="提示" label="文字标题" input-align="right" />
      <van-field v-model="value4" label="文字标题" disabled class="disabled-label" input-align="right" />
      <van-form style="border-bottom: 1px solid #ebedf0;">
        <van-field error v-model="value5" placeholder="验证错误内容" label="文字标题" :rules="[{ pattern,message:' '}]" input-align="right" class="ignore-pl41" />
      </van-form>
      <van-field v-model="value6" center clearable label="文字标题" placeholder="请输入验证码" input-align="right">
        <template #button>
          <van-button size="small" class="ignore-btn-code">
            <span style="font-size: 16px;color: #62636C;">SW9F</span>
            <img src="@/assets/imgs/inputItem/Refresh@2x.png" alt="" class="icon-refresh">
          </van-button>
        </template>
      </van-field>

    </van-cell-group>
    <span class="btitle">No Label</span>
    <van-cell-group>
      <!-- <van-field v-model="value" placeholder="请输入用户名" /> -->
      <van-field v-model="sms1" clearable placeholder="我是暗提示">
        <template #button>
          <span class="ignore-explain">重新发送</span>
        </template>
      </van-field>
      <van-field error v-model="sms" clearable placeholder="验证错误内容">
        <template #button>
          <span class="ignore-explain">重新发送</span>
        </template>
      </van-field>
      <van-field v-model="sms" right-icon="eye" clearable placeholder="验证错误内容">
      </van-field>
      <van-field v-model="value4" disabled>
      </van-field>
    </van-cell-group>
    <span class="btitle">Custom title（text/image/empty)</span>
    <van-cell-group>
      <van-field v-model="value2" placeholder="我是暗提示" clearable class="ignore-pl13" input-align="right">
        <div slot="label" class="tip-wrap">
          <span>文字标题</span>
          <div>
            <span class="ignore-explain">使用说明</span>
          </div>
        </div>
      </van-field>
      <van-field v-model="value2" clearable label="文字图标标题" input-align="right" left-icon="music-o" placeholder="显示清除图标" />
    </van-cell-group>

    <span class="btitle">Format</span>
    <van-cell-group>
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="value1" type="digit" label="银行卡" placeholder="请输入银行卡" input-align="right" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="value1" type="tel" label="手机号" placeholder="请输入手机号" input-align="right" />
      <!-- 输入密码 -->
      <van-field v-model="value1" type="password" label="密码" placeholder="请输入密码" input-align="right" />
      <van-field v-model="value4" label="手机号码" disabled class="disabled-label ignore-pl41" input-align="right" />
    </van-cell-group>

    <span class="btitle">输入块 TextareaItem</span>
    <div>
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div slot="label" class="tip-wrap">
            <span>文字标题</span>
            <div>
              <span class="ignore-explain">使用说明</span>
            </div>
          </div>
        </template>
      </van-cell>
      <van-field v-model="message" rows="6" autosize type="textarea" maxlength="200" placeholder="我是暗提示" show-word-limit />
    </div>
    <div class="line"></div>
    <div>
      <van-cell title="文字图标标题" icon="shop-o" />
      <van-field v-model="message1" rows="6" autosize type="textarea" maxlength="200" clearable placeholder="我是暗提示" show-word-limit />
    </div>

  </div>

</template>
<script>
export default {
  data() {
    return {
      value1: "",
      value2: "正在输入的内容",
      value3: "已输入的内容",
      value4: "不能修改的已输入内容",
      value5: "验证错误内容",
      value6: "",
      pattern: /^[0-9]*$/,
      sms1: "",
      sms: "已输入的内容",
      message: "",
      message1:
        "容正在输入的内容正在输入的内容正在输入的内容容正在输入的内容正在输入的内容正在输入的内容正在输入的容正在输入的内容正在输入的内容正在输入的内容容正在输入的内容正在输入的内容正在输入的内容正在输入的容正在输入的内容正在输入的内容正在输入的内容容正在输入的内容正在输入的内容正在输入的内容正在输入的内容正在输入的内容正在输入的内容正在输入的内容正在输入的内容正在输入的内容正在输入的内容正在输入的内容正在输入的内容正在输入的内容"
    }
  }
}
</script>
<style lang="scss" scoped>
.input-page {
  margin-bottom: 150px;
  background-color: #f5f7fa;
}
</style>