<!--
 * @Author: your name
 * @Date: 2020-04-17 14:21:25
 * @LastEditTime: 2020-04-19 15:32:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \移动端ui规范\src\views\uireset\inputItem.vue
 -->
<template>
    <div style="background-color:#F5F7FA;height:100%">
        <van-cell-group>
            <van-field v-model="value1" placeholder="我是暗提示" clearable class="ignore-pl41">
                <div slot="label" class="tip-wrap">
                    <span>文字标题</span>
                    <div>
                        <span class="ignore-tip">左侧注释</span>
                    </div>
                </div>
            </van-field>
            <van-field v-model="value2" placeholder="我是暗提示" clearable class="ignore-pl13">
                <div slot="label" class="tip-wrap">
                    <span>文字标题</span>
                    <div>
                        <span class="ignore-explain">使用说明</span>
                    </div>
                </div>
            </van-field>
            <van-field v-model="value3" placeholder="提示" label="文字标题" class="ignore-pl41"/>
            <van-field v-model="value4" label="文字标题" disabled class="disabled-label ignore-pl41"/>
            <van-form style="border-bottom: 1px solid #ebedf0;">
                <van-field v-model="value5"  placeholder="请输入数字" label="文字标题"  :rules="[{ pattern,message:' '}]" class="ignore-pl41"/>
            </van-form>
            <van-field v-model="value6"  center clearable label="文字标题" placeholder="请输入验证码">
                <template #button>
                    <van-button size="small" class="ignore-btn-code">
                        <span style="font-size: 16px;color: #62636C;">SW9F</span>
                        <img src="@/assets/imgs/inputItem/Refresh@2x.png" alt="" class="icon-refresh">        
                    </van-button>
                </template>
            </van-field>
            
        </van-cell-group>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value1:'',
            value2:'正在输入的内容',
            value3:'已输入的内容',
            value4:'不可修改的内容',
            value5:'',
            value6:'',
            pattern: /^[0-9]*$/
        }
    }
}
</script>
<style lang="scss" scoped>
    .tip-wrap{
        display: flex;
        align-items: center;
        .ignore-tip{
            display: inline-block;
            font-size: 14px;
            color: #90949E;
            line-height: 1;
            margin-left:8px;
            word-break: keep-all;
        }
    }
    
    .ignore-explain{
        display: inline-block;
        font-size: 14px;
        color: #3B71E8;
        line-height: 1;
        margin-left:8px;
    }
    /deep/ .van-field__body{
        display: flex;
        align-items: center;
    }
    /deep/ .van-field__control{
        text-align: right;
        margin-left: 66px;
    }
    /deep/ .van-cell{
        word-break: keep-all;
        font-size: 16px;
        height: 48px;
    }
    .disabled-label{
        color: #90949E;
    }
    .ignore-pl41{
        padding-right:41px;
    }
    .ignore-pl13{
        padding-right:20px;
    }
    .ignore-btn-code{
        width:84px;
        background: #F5F7FA;
        border-radius: 2px;
        display: flex;
        align-items: center;
        .icon-refresh{
            width:14px;
            height:14px;
            margin-top:0px;
            margin-left: 7px;
            display:inline-block;
            margin-bottom: -3px;
        }
    }
</style>