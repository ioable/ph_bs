<template>
  <view class="content">
    <uni-card title="基础卡片" extra="额外信息" @click="toDetail">
      <text class="uni-body">这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
    </uni-card>
  </view>
</template>

<script setup>
  import uniCard from '@dcloudio/uni-ui/lib/uni-card/uni-card.vue'
  import {
    ref
  } from 'vue'
  const toDetail = () => {
    uni.navigateTo({
      //保留当前页面，跳转到应用内的某个页面
      url: '/pages/detail/detail'
    })

  }
</script>

<style>

</style>