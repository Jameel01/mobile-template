<!--
 * @Description: 实例页面：登录页
 * @Version: 0.1
 * @Autor: Chenyt
 * @Date: 2020-07-08 15:35:42
 * @LastEditors: Chenyt
 * @LastEditTime: 2020-07-31 11:16:40
--> 
<template>
  <div class="login">
    <!-- 在此div中添加页面html -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
  </van-form>
  <div @click="resetBtn">重置按钮</div>
  </div>
</template>
<script>
import {commonApi} from "@/api"//引入api接口方法
export default {
  name: "login",
  data(){
    return {//定义本页面变量和初始化，类似js中var a=0;
      params: "你好", //声明本页面全局变量
      username: "",
      password: ""
    }
  },
  computed: {//定义计算属性
  },
  mounted() { //初始化，html加载完成后执行
  },
  created(){ //created进入页面初始化执行调用的方法
    this.params="歇息"
    commonApi.getUserInfo(this.params).then(res => {
      if (res.code === 0) { //判断接口返回code值
        //请求成功操作
      } else {
        //请求失败操作提示
      }
    })
  },
  methods: {//定义本页面会被调用的方法,例如：submitLoginForm（）。在其他js中调用这个方法：this.submitLoginForm()
    /**
     * @description: 提交登录表单
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    onSubmit(values) {
      console.log("submit", values)
      this.resetBtn()
    },
    /**
     * @description: 重置表单输入
     * @param {type} 
     * @return: 
     * @author: Chenyt
     */
    resetBtn(){

    }
  }
}
</script>
<style lang="less" scoped>
.login {//页面父级div中的类名
  //在此添加页面样式
}
</style>