<template>
  <view>
    <uni-segmented-control :current="current" :values="labels" @clickItem="()=>{current=current==1?0:1}"
      styleType="text" activeColor="#55aaff"></uni-segmented-control>
    <view class="content">
      <view class="kong-bai" />
      <!-- 资料福利 -->
      <view v-show="current == 0">
        <uni-card padding="0" spacing="0">
          <template v-slot:cover>
            <view class="custom-cover">
              <image class="cover-image" mode="aspectFill"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp">
              </image>
              <view class="cover-content">
                <view class="content-title">20T校招求职资源（2024版，独家）</view>
                <view style="font-size: 28rpx;color:#7f7f7f">立刻免费领取！</view>
              </view>
            </view>
          </template>
          <view slot="actions" class="card-actions no-border">
            <view class="card-actions-item" @click="actionsClick('分享')">
              <uni-icons type="redo" size="18" color="#55aa7f"></uni-icons>
              <text class="card-actions-item-text">分享</text>
            </view>
            <view class="card-actions-item" @click="actionsClick('点赞')">
              <uni-icons type="heart" size="18" color="#55aaff"></uni-icons>
              <text class="card-actions-item-text">点赞</text>
            </view>
            <view class="card-actions-item" @click="actionsClick('评论')">
              <uni-icons type="chatbubble" size="18" color="#ffaa00"></uni-icons>
              <text class="card-actions-item-text">评论</text>
            </view>
          </view>
        </uni-card>
        <uni-card padding="0" spacing="0">
          <template v-slot:cover>
            <view class="custom-cover">
              <image class="cover-image" mode="aspectFill"
                src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg">
              </image>
              <view class="cover-content">
                <view class="content-title">20T校招求职资源（2024版，独家）</view>
                <view style="font-size: 28rpx;color:#7f7f7f">立刻免费领取！</view>
              </view>
            </view>
          </template>
          <view slot="actions" class="card-actions no-border">
            <view class="card-actions-item" @click="actionsClick('分享')">
              <uni-icons type="redo" size="18" color="#55aa7f"></uni-icons>
              <text class="card-actions-item-text">分享</text>
            </view>
            <view class="card-actions-item" @click="actionsClick('点赞')">
              <uni-icons type="heart" size="18" color="#55aaff"></uni-icons>
              <text class="card-actions-item-text">点赞</text>
            </view>
            <view class="card-actions-item" @click="actionsClick('评论')">
              <uni-icons type="chatbubble" size="18" color="#ffaa00"></uni-icons>
              <text class="card-actions-item-text">评论</text>
            </view>
          </view>
        </uni-card>
      </view>
      <!-- 笔记福利 -->
      <view v-show="current ==1">
        <uni-card title="[笔试通知-工商银行]" sub-title="河北分行" thumbnail="/static/img/xiaoxiu-zuoxizhuangtai.png"
          @click="onClick">
          <text class="uni-body">中国工商银行河北分行2022年乡村振兴专项招聘笔面试通知。</text>
        </uni-card>
        <uni-card title="[笔试通知-招商银行]" sub-title="春季校招" thumbnail="/static/img/xiaoxitishi.png" @click="onClick">
          <text class="uni-body">中国工商银行河北分行2022年乡村振兴专项招聘笔面试通知。</text>
        </uni-card>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  const current = ref(0)
  const items = ref([{
      label: '资料福利',
      value: 0
    },
    {
      label: '笔试日历',
      value: 1
    }
  ])
  let labels = items.value.map((item) => item.label)
</script>

<style scoped lang="scss">
  .custom-cover {
    width: 100%;
    height: 360rpx;

    .cover-image {
      width: 100%;
      height: 74%;
    }
  }



  .cover-content {
    padding: 0 20rpx;

    .content-title {
      font-weight: 600;
      margin-bottom: 10rpx;
      color: #000000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .card-actions,
  .card-actions-item {
    display: flex;
    gap: 10rpx;
    align-items: center;
  }

  .card-actions {
    padding: 10rpx 20rpx;
    gap: 0 180rpx;
    align-items: center;
  }

  .uni-body {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>