<!--
 * @Description: card
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-22 16:45:17
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-22 17:45:03
 -->

<template>
  <div class="card-page"> <span class="btitle">卡片 Card</span>
    <!-- <y-title content="标题"></y-title> -->
    <van-panel>
      <template #header>
        <van-cell>
          <template #title>
            <y-title content="标题" lineWidth="4" lineLeft="-12" backgroundColor="#3B71E8" fontContSize="18" pleft="10"> </y-title>
          </template>
          <template #right-icon>
            <div>已输入的内容</div>
          </template>
        </van-cell>
      </template>
      <div class="van-panel-content">文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</div>
    </van-panel>
    <div class="line"></div>
    <van-panel>
      <template #header>
        <van-cell>
          <template #title>
            <y-title content="标题" lineWidth="4" lineLeft="-12" backgroundColor="#3B71E8" fontContSize="18" pleft="10"> </y-title>
          </template>
          <template #right-icon>
            <div>已输入的内容</div>
          </template>
        </van-cell>
      </template>
      <div class="van-panel-content">文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</div>
      <template #footer>
        <div class="van-panel-footer">备注</div>
      </template>
    </van-panel>
    <div class="line"></div>
    <van-panel>
      <template #header>
        <van-cell>
          <template #title>
            <y-title content="标题" lineWidth="4" lineLeft="-12" backgroundColor="#3B71E8" fontContSize="18" pleft="10"> </y-title>
          </template>
          <template #right-icon>
            <div>已输入的内容</div>
          </template>
        </van-cell>
      </template>
      <div class="pl-20">
        <van-cell title="卡片内容1">
          <template #right-icon>
            <div>辅助内容</div>
          </template>
        </van-cell>
        <van-cell title="卡片内容1">
          <template #right-icon>
            <div>辅助内容</div>
          </template>
        </van-cell>
        <van-cell title="卡片内容1">
          <template #right-icon>
            <div>辅助内容</div>
          </template>
        </van-cell>

      </div>
      <template #footer>
        <div class="tr">
          <van-button size="small" plain type="primary">次要按钮</van-button>
          <van-button size="small" type="primary">主要按钮</van-button>
        </div>
      </template>
    </van-panel>
    <div class="line"></div>

    <van-panel>
      <template #header>
        <van-cell>
          <template #title>
            <y-title content="标题" lineWidth="4" lineLeft="-12" backgroundColor="#3B71E8" fontContSize="18" pleft="10"> </y-title>
          </template>
          <template #right-icon>
            <div>已输入的内容</div>
          </template>
        </van-cell>
      </template>
      <div class="pl-20">
        <van-cell title="卡片内容1">
          <template #right-icon>
            <div>辅助内容</div>
          </template>
        </van-cell>
        <van-cell title="卡片内容1">
          <template #right-icon>
            <div>辅助内容</div>
          </template>
        </van-cell>
        <van-cell title="卡片内容1">
          <template #right-icon>
            <div>辅助内容</div>
          </template>
        </van-cell>

      </div>
      <template #footer>
        <div class="van-panel-footer">备注</div>
      </template>
    </van-panel>

    <div class="line"></div>
    <van-panel>
      <template #header>
        <van-cell>
          <template #title>
            <y-title content="标题" lineWidth="4" lineLeft="-12" backgroundColor="#3B71E8" fontContSize="18" pleft="10"> </y-title>
          </template>
          <template #right-icon>
            <div class="color-999">2019.05.09 14:54:00</div>
          </template>
        </van-cell>
      </template>
      <div class="van-panel-content">文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</div>
      <template #footer>
        <van-cell title="查看详情" is-link to="index" />
      </template>
    </van-panel>

    <div class="line"></div>
    <van-panel>
      <template #header>
        <van-cell>
          <template #title>
            <van-icon name="apps-o" style="line-height: inherit;" />
            <span>文字图标标题</span>
          </template>
          <template #right-icon>
            <span class="ignore-explain">使用说明</span>
          </template>
        </van-cell>
      </template>
      <div>
        <van-cell center is-link label="2019-08-24">
          <template #title>
            <span class="custom-title">文本文本文本文本文文本文本文本文本文</span>
          </template>
        </van-cell>
        <van-cell center is-link label="2019-08-24">
          <template #title>
            <span class="custom-title">文本文本文本文本文文本文本文本文本文</span>
          </template>
        </van-cell>
      </div>
    </van-panel>
    <div class="line"></div>

    <van-panel>
      <template #header>
        <van-cell center label="2019-08-24">
          <template #title>

            <y-title content="标题" lineWidth="4" lineLeft="-12" backgroundColor="#3B71E8" fontContSize="18" pleft="10"> </y-title>

          </template>
          <template #right-icon>
            <div class="color-red">辅助文本</div>
          </template>
        </van-cell>
      </template>
      <div class="pl-20">
        <van-cell title="卡片内容1">
          <template #right-icon>
            <div>辅助内容</div>
          </template>
        </van-cell>
        <van-cell title="卡片内容1">
          <template #right-icon>
            <div>辅助内容</div>
          </template>
        </van-cell>
        <van-cell title="卡片内容1">
          <template #right-icon>
            <div>辅助内容</div>
          </template>
        </van-cell>

      </div>
    </van-panel>

    <div class="line"></div>
    <van-panel>
      <template #header>
        <van-row>
          <van-cell center value="右侧小注释">
            <template #title>
              <van-row>
                <van-col span="8">
                  <div>
                    <van-image round width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  </div>
                </van-col>
                <van-col span="16"><span class="onetitle">双行一级标题</span>
                  <p class="color-999">2019-08-24</p>
                </van-col>
              </van-row>
            </template>
          </van-cell>
        </van-row>

      </template>
      <div class="van-panel-content">文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</div>
      <template #footer>
        <van-cell title="辅助说明1" value="辅助文本" />
        <div class="van-panel-footer-content">文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</div>
      </template>
    </van-panel>

    <div class="line"></div>
    <van-panel class="cardList">
      <template #header>
        <van-cell title="文本标题" center>

          <template #right-icon>
            <div>辅助内容</div>
          </template>
        </van-cell>
      </template>
      <div class="pl-20">
        <van-cell>
          <template #title>
            <div class="ignore-explain">卡片内容1</div>
          </template>
          <template #right-icon>
            <div class="ignore-explain">辅助内容</div>
          </template>
        </van-cell>
        <van-cell title="卡片内容1">
          <template #right-icon>
            <div>辅助内容</div>
          </template>
        </van-cell>
        <van-cell title="卡片内容1">
          <template #right-icon>
            <div>辅助内容</div>
          </template>
        </van-cell>

      </div>
    </van-panel>
  </div>

</template>
<script>
export default {
  name: "card",
  data() {
    return {}
  },

  computed: {},
  mounted() {},
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.card-page {
  background-color: #f5f7fa;
  margin-bottom: 150px;
}
</style>