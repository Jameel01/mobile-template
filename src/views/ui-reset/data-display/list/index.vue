<!--
 * @Description: list
 * @Version: 0.1
 * @Autor: zhengxn
 * @Date: 2020-04-22 10:56:32
 * @LastEditors: zhengxn
 * @LastEditTime: 2020-04-22 17:11:26
 -->
<template>
  <div class="list">
    <span class="btitle">单行列表</span>
    <van-cell-group>
      <van-cell is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">文字标题</span>
        </template>
        <template #right-icon>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <van-icon name="apps-o" style="line-height: inherit;" />
          <van-icon name="arrow" color="#CECECE" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span class="custom-title">文字标题</span>
          <span class="ignore-explain">使用说明</span>
        </template>
        <template #right-icon>
          <van-icon name="success" color="#3B71E8" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="文字图标标题" icon="location-o">
        <template #right-icon>
          <van-switch v-model="select1" size="25px" />
        </template>
      </van-cell>
      <van-cell title="文字图标标题" value="说明" icon="location-o">
        <template #right-icon>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <van-icon name="arrow" color="#CECECE" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <img :src="require('../../../../assets/imgs/searchBar/btn_serch_grey@3x.png')" alt="" width="16px" height="16px" />
          <span class="custom-title">文字图标图片</span>

        </template>

        <template #right-icon>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <van-icon name="arrow" color="#CECECE" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="文字标题" is-link arrow-direction="down">
        <template #right-icon>
          <div>已输入的内容</div>
        </template>
      </van-cell>

    </van-cell-group>
    <div class="line"></div>
    <span class="btitle">双行列表</span>
    <van-cell-group>
      <van-cell label="描述信息">
        <template #title>
          <span class="custom-title">双行一级标题</span>
          <span class="ignore-explain">使用说明</span>
        </template>
        <template #right-icon>
          <van-icon name="apps-o" style="line-height: inherit;" />
          <van-icon name="arrow" color="#CECECE" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell label="描述信息">
        <template #title>
          <span class="custom-title">双行一级标题</span>
          <span class="ignore-explain">使用说明</span>
        </template>
        <template #right-icon>
          <van-icon name="success" color="#3B71E8" style="line-height: inherit;" />
        </template>
      </van-cell>

      <van-cell label="描述信息" title="双行一级标题" icon="location-o">
        <template #right-icon>
          <van-switch v-model="select1" size="25px" />
        </template>
      </van-cell>
      <van-cell label="描述信息" title="双行一级标题" value="详细信息" icon="location-o">
        <template #right-icon>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <van-icon name="arrow" color="#CECECE" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell label="描述信息">
        <template #title>
          <img :src="require('../../../../assets/imgs/searchBar/btn_serch_grey@3x.png')" alt="" width="16px" height="16px" />
          <span class="custom-title">文字图标图片</span>

        </template>

        <template #right-icon>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <van-icon name="arrow" color="#CECECE" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell label="描述信息" title="双行一级标题" is-link arrow-direction="down">
        <template #right-icon>
          <div>已输入的内容</div>
        </template>
      </van-cell>
    </van-cell-group>

  </div>
</template>
<script>
export default {
  name: "list",
  data() {
    return {
      select1: true
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.list {
}
</style>