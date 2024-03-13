<template>
  <view>
    <uni-list style="padding: 0 20rpx;">
      <uni-list-item title="昵称" :rightText="myName"></uni-list-item>
      <uni-list-item title="手机号码" :right-text="myPhone"></uni-list-item>
      <uni-list-item title="身份证号" :right-text="myIdCard"></uni-list-item>
      <uni-list-item title="修改密码" showArrow></uni-list-item>
    </uni-list>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  const myName = ref('进简称')
  const myPhone = ref('18532223456')
  const myIdCard = ref('123456789011234567')
</script>

<style>

</style>