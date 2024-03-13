<template>
  <view class="content">
    <uni-notice-bar show-icon scrollable text="想去更大的平台嘛~~~ 关注一下笔试日历吆~ ~ ~" />
    <uni-swiper-dot class="uni-swiper-dot-box" :info="info" :current="current" mode="round" :dotsStyles="dotStyle"
      field="content">
      <swiper class="swiper-box" @change="change">
        <swiper-item v-for="(item, index) in info" :key="index" style="border-radius: 38rpx;">
          <view style="width: 95%;height: 400rpx;margin: 0 20rpx;background-color: pink;">
            <image style="width: 100%; height: 100%; background-color: #eeeeee;" :src="item.url" />
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>
    <uni-card title="笔记1" extra="额外信息" @click="toDetail">
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
  const info = ref([{
      colorClass: 'uni-bg-red',
      url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
      content: '内容 A'
    },
    {
      colorClass: 'uni-bg-green',
      url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
      content: '内容 B'
    },
    {
      colorClass: 'uni-bg-blue',
      url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
      content: '内容 C'
    }
  ])
  const dotStyle = ref({
    backgroundColor: 'rgba(83, 200, 249,0.3)',
    border: '1px rgba(83, 200, 249,0.3) solid',
    color: '#fff',
    selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
    selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
  })
</script>

<style scoped>

</style>