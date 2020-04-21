<!--
 * @Description: 
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-03-21 22:55:00
 * @LastEditors: chenyt
 * @LastEditTime: 2020-04-21 16:26:34
 -->
<template>
  <div class="test">
    <div class="demo-home">
      <h1 class="demo-home__title"><span>移动端框架UI规范</span></h1>
      <h2 class="demo-home__desc">
        移动端框架UI规范
      </h2>
      <div class="demo-home-nav">
        <div class="demo-home-nav__title">数据录入 Data Entry</div>
        <div class="demo-home-nav__group"><a href="#/button" class="demo-home-nav__block">
            按钮 Button
            <van-icon class="demo-home-nav__icon" name="arrow" />
          </a>
          <a href="#/checkbox" class="demo-home-nav__block">
            开关 Checkbox、Radio、Switch
            <van-icon class="demo-home-nav__icon" name="arrow" /></a>
          <a href="#/searchBar" class="demo-home-nav__block">
            搜索 SearchBar
            <van-icon class="demo-home-nav__icon" name="arrow" /></a>
          <a href="#/inputItem" class="demo-home-nav__block">
            输入 InputItem
            <van-icon class="demo-home-nav__icon" name="arrow" /></a>
          <a href="#/inputItem" class="demo-home-nav__block">
            输入块 TextareaItem
            <van-icon class="demo-home-nav__icon" name="arrow" /></a>
          <a href="#/uploader" class="demo-home-nav__block">
            图片选择 ImagePicker
            <van-icon class="demo-home-nav__icon" name="arrow" /></a>
          <a href="#/uploader" class="demo-home-nav__block">
            滑动 Slidder
            <van-icon class="demo-home-nav__icon" name="arrow" /></a>
          <a href="#/uploader" class="demo-home-nav__block">
            步进器 Stepper
            <van-icon class="demo-home-nav__icon" name="arrow" /></a>
          <a href="#/picker" class="demo-home-nav__block">
            选择器 Picker
            <van-icon class="demo-home-nav__icon" name="arrow" /></a>
          <!-- <a href="#/cell" class="demo-home-nav__block">
            Cell 单元格
            <van-icon class="demo-home-nav__icon" name="arrow" />
          </a>
          <a href="#/icon" class="demo-home-nav__block">
            Icon 图标
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/image" class="demo-home-nav__block">
            Image 图片
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/col" class="demo-home-nav__block">
            Layout 布局
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/popup" class="demo-home-nav__block">
            Popup 弹出层
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/style" class="demo-home-nav__block">
            Style 内置样式
            <van-icon class="demo-home-nav__icon" name="arrow" /></a> -->
        </div>
      </div>
      <div class="demo-home-nav">
        <div class="demo-home-nav__title">数据展示 Data Display</div>
        <div class="demo-home-nav__group"><a href="#/calendar" class="demo-home-nav__block">
            Calendar 日历
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/checkbox" class="demo-home-nav__block">
            Checkbox 复选框
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/datetime-picker" class="demo-home-nav__block">
            DatetimePicker 时间选择
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/inputItem" class="demo-home-nav__block">
            Field 输入框
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/form" class="demo-home-nav__block">
            Form 表单
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/number-keyboard" class="demo-home-nav__block">
            NumberKeyboard 数字键盘
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/password-input" class="demo-home-nav__block">
            PasswordInput 密码输入框
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/picker" class="demo-home-nav__block">
            Picker 选择器
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/radio" class="demo-home-nav__block">
            Radio 单选框
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/rate" class="demo-home-nav__block">
            Rate 评分
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/searchBar" class="demo-home-nav__block">
            Search 搜索
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/uploader" class="demo-home-nav__block">
            Slider 滑块
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/uploader" class="demo-home-nav__block">
            Stepper 步进器
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/switch" class="demo-home-nav__block">
            Switch 开关
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/uploader" class="demo-home-nav__block">
            Uploader 文件上传
            <van-icon class="demo-home-nav__icon" name="arrow" /></a></div>
      </div>
      <div class="demo-home-nav">
        <div class="demo-home-nav__title">反馈组件</div>
        <div class="demo-home-nav__group"><a href="#/action-sheet" class="demo-home-nav__block">
            ActionSheet 动作面板
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/dialog" class="demo-home-nav__block">
            Dialog 弹出框
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/dropdown-menu" class="demo-home-nav__block">
            DropdownMenu 下拉菜单
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/loading" class="demo-home-nav__block">
            Loading 加载
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/notify" class="demo-home-nav__block">
            Notify 消息通知
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/overlay" class="demo-home-nav__block">
            Overlay 遮罩层
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/pull-refresh" class="demo-home-nav__block">
            PullRefresh 下拉刷新
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/share-sheet" class="demo-home-nav__block">
            ShareSheet 分享面板
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/swipe-cell" class="demo-home-nav__block">
            SwipeCell 滑动单元格
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/toast" class="demo-home-nav__block">
            Toast 轻提示
            <van-icon class="demo-home-nav__icon" name="arrow" /></a></div>
      </div>
      <div class="demo-home-nav">
        <div class="demo-home-nav__title">展示组件</div>
        <div class="demo-home-nav__group"><a href="#/circle" class="demo-home-nav__block">
            Circle 环形进度条
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/collapse" class="demo-home-nav__block">
            Collapse 折叠面板
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/count-down" class="demo-home-nav__block">
            CountDown 倒计时
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/divider" class="demo-home-nav__block">
            Divider 分割线
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/empty" class="demo-home-nav__block">
            Empty 空状态
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/image-preview" class="demo-home-nav__block">
            ImagePreview 图片预览
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/lazyload" class="demo-home-nav__block">
            Lazyload 懒加载
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/list" class="demo-home-nav__block">
            List 列表
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/notice-bar" class="demo-home-nav__block">
            NoticeBar 通知栏
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/panel" class="demo-home-nav__block">
            Panel 面板
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/progress" class="demo-home-nav__block">
            Progress 进度条
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/skeleton" class="demo-home-nav__block">
            Skeleton 骨架屏
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/steps" class="demo-home-nav__block">
            Steps 步骤条
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/sticky" class="demo-home-nav__block">
            Sticky 粘性布局
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/swipe" class="demo-home-nav__block">
            Swipe 轮播
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/tag" class="demo-home-nav__block">
            Tag 标记
            <van-icon class="demo-home-nav__icon" name="arrow" /></a></div>
      </div>
      <div class="demo-home-nav">
        <div class="demo-home-nav__title">导航组件</div>
        <div class="demo-home-nav__group"><a href="#/grid" class="demo-home-nav__block">
            Grid 宫格
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/index-bar" class="demo-home-nav__block">
            IndexBar 索引栏
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/nav-bar" class="demo-home-nav__block">
            NavBar 导航栏
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/pagination" class="demo-home-nav__block">
            Pagination 分页
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/sidebar" class="demo-home-nav__block">
            Sidebar 侧边导航
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/tab" class="demo-home-nav__block">
            Tab 标签页
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/tabbar" class="demo-home-nav__block">
            Tabbar 标签栏
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/tree-select" class="demo-home-nav__block">
            TreeSelect 分类选择
            <van-icon class="demo-home-nav__icon" name="arrow" /></a></div>
      </div>
      <div class="demo-home-nav">
        <div class="demo-home-nav__title">业务组件</div>
        <div class="demo-home-nav__group"><a href="#/address-edit" class="demo-home-nav__block">
            AddressEdit 地址编辑
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/address-list" class="demo-home-nav__block">
            AddressList 地址列表
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/area" class="demo-home-nav__block">
            Area 省市区选择
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/card" class="demo-home-nav__block">
            Card 商品卡片
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/contact-card" class="demo-home-nav__block">
            Contact 联系人
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/coupon-list" class="demo-home-nav__block">
            Coupon 优惠券
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/goods-action" class="demo-home-nav__block">
            GoodsAction 商品导航
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/submit-bar" class="demo-home-nav__block">
            SubmitBar 提交订单栏
            <van-icon class="demo-home-nav__icon" name="arrow" /></a><a href="#/sku" class="demo-home-nav__block">
            Sku 商品规格
            <van-icon class="demo-home-nav__icon" name="arrow" /></a></div>
      </div>

    </div>
  </div>
</template>

<script>
// import SessionUtil from "@/utils/sessionStorage";
export default {
  components: {},
  name: "",
  watch: {},
  props: {},
  filters: {},
  data() {
    return { data: "" }
  },
  created() {},
  mounted() {},
  methods: {},
  destroyed() {}
}
</script>
<style lang='scss' scoped>
.test {
  p {
    font-size: 32px;
    padding: 34px 54px;
    color: #333;
    font-weight: bold;
  }

  .demo-home__title img {
    width: 32px;
  }
  .demo-home__title img,
  .demo-home__title span {
    display: inline-block;
    vertical-align: middle;
  }
  .demo-home {
    box-sizing: border-box;
    width: 100%;
    min-height: 100px;
    padding: 46px 40px 40px;
    background: #fff;
  }
  .demo-home__desc {
    margin: 0 0 40px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 18px;
  }

  .demo-home__title {
    margin: 0 0 16px;
    font-size: 32px;
  }
  .demo-home__title,
  .demo-home__desc {
    padding-left: 16px;
    font-weight: normal;
    line-height: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  .demo-home-nav__title {
    margin: 24px 0 8px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
  }
  .demo-home-nav__block {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    margin: 0 0 24px;
    padding-left: 40px;
    color: #323233;
    font-weight: 500;
    font-size: 28px;
    line-height: 90px;
    background: #f7f8fa;
    border-radius: 99px;
    -webkit-transition: background 0.3s;
    transition: background 0.3s;
  }
  .demo-home-nav__icon {
    position: absolute;
    top: 50%;
    right: 32px;
    width: 32px;
    height: 32px;
    margin-top: -16px;
  }
}
</style>

