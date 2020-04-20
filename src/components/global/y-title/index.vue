<template>
  <div id="v_header_title" :style='style'>
    <div :class="border?'content':'border-none content'" :style='contStyle'>{{ content }}
      <img class="title-icon" :style='iconStyle' :src="imgIconUrl" v-if="iconUrl" alt="">
      <div class="line-flag" :style='lineStyle' v-else></div>
      <router-link class="more" v-show='more' :to='pathUrl' v-if='moreType==1'>{{more}}</router-link>
      <span class="more-flag" v-show='moreType==2' v-if='moreType==2'>
        <span class="red">*</span>为必填项</span>
    </div>
  </div>
</template>
<script>
export default {
    name: "y-title",
    props: {
        moreType: {
            type: Number, //默认不展示,默认1为链接,2为文字
            default: 1
        },
        border: {
            type: Boolean,
            default: false
        },
        // 标题内容样式
        fontContSize: {//标题字大小
            type: String,
            default: "14"
        },
        colorCont: {//标题内容颜色
            type: String,
            default: "333"
        },
        content: {//标题内容
            type: String,
            required: true,
            default: "标题2"
        },
        pleft: {//左边间距
            type: String,
            default: "30"
        },
        fontWeight: {//是否可以加粗
            type: String,
            default: "normal"
        },
        mBottom: {//标题底部间距
            type: String,
            default: "10"
        },
        // 左侧竖线样式
        lineWidth: {//线宽度
            type: String,
            default: "6"
        },
        lineHeight: {//线高度
            type: String,
            default: "16"
        },
        lineLeft: {//线左边距
            type: String,
            default: "-17"
        },
        lineTop: {//线头部边距
            type: String,
            default: "3"
        },
        more: {//更多
            type: String,
            default: ""
        },
        pathUrl: {//设置更多的链接
            type: String,
            default: "/"
        },
        backgroundColor: {
            type: String,
            default: "linear-gradient(0deg,rgba (52, 152, 219, 1) 0%,rgba (87, 186, 252, 1) 100%)"
        },
        iconUrl: {//图标的url 如：footer-icon-fault.png 标题的图标要放titleIcon底下
            type: String,
            default: ""
        },
        iconWidth: {//图标宽度
            type: String,
            default: "28"
        },
        iconHeight: {//图标高度
            type: String,
            default: "28"
        },
        iconLeft: {//图标左边距
            type: String,
            default: "-32"
        },
        iconTop: {//图标头部边距
            type: String,
            default: "7"
        }
    },
    computed: {
    // imgIconUrl: function() {
    //   // return require('@/assets/img/titleIcon/' + this.iconUrl)
    // },
        style() {
            return {
                marginBottom: (this.mBottom) + "px",
                paddingLeft: (this.pleft) + "px"
            }
        },
        lineStyle() {
            return {
                width: (this.lineWidth) + "px",
                height: (this.lineHeight) + "px",
                left: this.lineLeft + "px",
                top: this.lineTop + "px",
                background: this.backgroundColor
            }
        },
        contStyle() {
            return {
                fontSize: this.fontContSize + "px",
                color: "#" + this.colorCont,
                fontWeight: this.fontWeight
            }
        },
        iconStyle() { //前置图标
            return {
                width: (this.iconWidth) + "px",
                height: (this.iconHeight) + "px",
                left: this.iconLeft + "px",
                top: this.iconTop + "px"
            }
        }
    }
}
</script>
<style  lang="scss" scoped>
#v_header_title {
  background-color: #fff;
  position: relative;
  .border-none {
    border: 0 !important;
  }
  .content {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    position: relative;
    .title-icon {
      position: absolute;
    }
    .line-flag {
      position: absolute;
      background: linear-gradient(0deg, #1269a4 0%, #0b8ce2 100%);
    }
  }
  .more,
  .more-flag {
    position: relative;
    float: right;
    font-size: 12px;
    right: 30px;
    color: #ccc;
  }
  .more-flag {
    color: #999;
    font-size: 14px;
  }
  .red {
    color: red;
  }
}
</style>