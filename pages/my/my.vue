<template>
  <view class="my">
    <view class="navbar">
      <view class="custom-image-box">
        <uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles" return-type="object"
          file-mediatype="image"><uni-icons type="person" size="30"></uni-icons></uni-file-picker>
        <view class="title">
          <view class="my-name">{{myName}}</view>
          <view>{{myPhone}}</view>
        </view>
      </view>
      <uni-icons type="right" size="30" color="#7f7f7f" @click="toMyDetail"></uni-icons>
    </view>

    <view class="my-list">
      <uni-list>
        <uni-list-item title="我的收藏" :show-extra-icon="true" showArrow :extra-icon=" {
      	color: '#55aaff',
      	size: '22',
      	type: 'star-filled'
      }"></uni-list-item>
        <uni-list-item title="设置" :show-extra-icon="true" showArrow :extra-icon=" {
					color: '#55aaff',
					size: '22',
					type: 'gear-filled'
				}"></uni-list-item>
        <uni-list-item title="意见反馈" :show-extra-icon="true" showArrow :extra-icon=" {
        	color: '#55aaff',
        	size: '22',
        	type: 'chat'
        }"></uni-list-item>
        <uni-list-item title="关于我们" :show-extra-icon="true" showArrow :extra-icon=" {
        	color: '#55aaff',
        	size: '22',
        	type: 'auth-filled'
        }"></uni-list-item>
      </uni-list>
    </view>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  const imageStyles = ref({
    width: 90,
    height: 90,
    border: {
      radius: '50%'
    }
  })
  const myName = ref('进简称')
  const myPhone = ref('18532223456')
  const toMyDetail = () => {
    uni.navigateTo({
      //保留当前页面，跳转到应用内的某个页面
      url: '/pages/my-detail/my-detail'
    })
  }
</script>

<style scoped>
  .my {
    margin: 20rpx;
  }

  .my-list {
    margin-top: 40rpx;
  }

  ::v-deep .uni-file-picker {
    flex: none;
    width: 180rpx;
  }

  .custom-image-box {
    display: flex;
    gap: 20rpx;
    align-items: center;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .my-name {
    font-weight: 600;
    font-size: 36rpx;
    margin-bottom: 10rpx;
  }
</style>