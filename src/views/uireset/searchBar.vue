<!--
 * @Author: your name
 * @Date: 2020-04-16 11:13:12
 * @LastEditTime: 2020-04-19 13:25:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \移动端ui规范\src\views\uireset\searchBar.vue
 -->
<template>
    <div>
        <div class="searchBar">
            <span>样式一</span>
        </div>
        <van-search v-model="value1" :placeholder="placeholder" :input-align="align" :show-action="cancel" @focus="focus1" @blur="blur1">
            <div slot="left-icon" class="icon" :class="cancel?'':'icon-left'">
                <img :src="require('../../assets/imgs/searchBar/btn_serch_grey@3x.png')" alt="" width="14px" height="14px"/>
            </div>
            <span slot="action" class="text-right">取消</span>
        </van-search>
        <div class="searchBar">
            <span>样式二</span>
        </div>
        <van-search v-model="value2" :placeholder="placeholder1" show-action @focus="focus2" @blur="blur2">
            <span slot="action" class="text-right">搜索</span>
        </van-search>
        <div class="searchBar">
            <span>样式三</span>
        </div>
        <div style="display:flex">
            <span slot="left" >
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value4" :options="option1" />
                </van-dropdown-menu>
            </span>
            <van-search v-model="value3" placeholder="搜索内容提示" show-action style="width:100%">
                <span slot="action" class="text-right">搜索</span>
            </van-search>
        </div>       
    </div>
</template>
<script>
export default {
    data(){
        return {
            value1: '',
            value2: '',
            value3: '',
            value4: 0,
            cancel: false,
            align: 'center',
            placeholder: '搜索',
            placeholder1: '搜索内容提示',
            option1: [
                { text: '排序筛选', value: 0 },
                { text: '其他筛选', value: 1 },
            ]
        }
    },
    methods:{
        focus1(){
            this.cancel = true
            this.align = 'left'
            this.placeholder = '输入提示性文案'
        },
        blur1(){
            this.cancel = false
            this.align = 'center'
            this.placeholder = '搜索'
            this.value1 = ''
        },
        focus2(){
            this.placeholder1 = '输入提示性文案'
        },
        blur2(){
            this.placeholder1 = '搜索内容提示'
        },
    }
}
</script>
<style lang="scss" scoped>
    .searchBar{
        text-align: center;
        padding: 30px 0px;
    }
    .icon{
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
    }
    .icon-left{
        left: 38vw;
    }
    .text-right{
        color: #3B71E8;
        letter-spacing: 0;
        text-align: right;
    }
    [class*='van-hairline']::after {
        content: none; 
    }
    /deep/ .van-search__content{
        height: 28px;
    }
</style>