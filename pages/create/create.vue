<template>
  <view class="home">
    <input class="uni-input" placeholder="请输入标题" v-model="title" placeholder-class="placeholder" />
    <textarea placeholder="请输入副标题" v-model="subTitle" class="sub-title" />
    <view class="editor-box">
      <sp-editor :toolbar-config="{
          excludeKeys: ['direction', 'date', 'lineHeight', 'letterSpacing', 'listCheck'],
          iconSize: '18px'
        }" @init="initEditor" @input="inputOver" @upinImage="upinImage" @overMax="overMax" @addLink="addLink"
        @exportHtml="exportHtml"></sp-editor>
    </view>
  </view>
  <view class="button">
    <!--   <button size="default" type="default" style="color:#ffffff;backgroundColor:#1AAD19;borderColor:#1AAD19"
        hover-class="is-hover">存草稿</button> -->
    <button size="default" type="default"
      style="color:#ffffff;backgroundColor:#55aaff;borderColor:#55aaff;padding:0rpx 40rpx;" hover-class="is-hover"
      @click="onSubmit">保存</button>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'

  const title = ref('') //标题
  const subTitle = ref('') //副标题
  const props = defineProps({
    // 空白占位字样
    placeholder: {
      type: String,
      default: '写点什么吧 ~'
    },
    // 是否只读
    readOnly: {
      type: Boolean,
      default: false
    },
    // 最大字数限制，默认-1不限
    maxlength: {
      type: Number,
      default: -1
    },
    // 工具栏配置 - 默认全工具栏 keys与excludeKeys两者皆为空，即为全工具
    toolbarConfig: {
      type: Object,
      default: () => {
        return {
          keys: [], // 要显示的工具，优先级最大
          excludeKeys: [], // 除这些指定的工具外，其他都显示 // 默认两者皆为空，即为全工具
          iconSize: '20px' // 工具栏字体大小
        }
      }
    }
  })
  const inputOver = (e) => { //获取输入内容
    console.log('e是富文本输入内容');
  }
  const overMax = (e) => { //超出最大内容限制
    console.log(e);
  }
  const editorIns = ref(null)
  const initEditor = (editor) => {
    editorIns.value = editor // 保存编辑器实例
    // 保存编辑器实例后，可以在此处获取后端数据，并赋值给编辑器初始化内容
    preRender()
  }
  const preRender = () => {
    setTimeout(() => {
      // 异步获取后端数据后，初始化编辑器内容
      editorIns.value.setContents({
        html: ``
      })
    }, 1000)
  }

  const upinImage = (tempFiles, editorCtx) => {
    // #ifdef MP-WEIXIN
    // 注意微信小程序的图片路径是在tempFilePath字段中
    editorCtx.insertImage({
      src: tempFiles[0].tempFilePath,
      width: '80%', // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
      success: function() {}
    })
    // #endif

    // #ifndef MP-WEIXIN
    editorCtx.insertImage({
      src: tempFiles[0].path,
      width: '80%', // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
      success: function() {}
    })
    // #endif

    /**
     * 使用 uniCloud.uploadFile 上传图片的示例方法（可适用多选上传）
     * 正式开发环境中，请将上面 本地临时插入图片预览 注释后，模仿以下写法
     */
    // tempFiles.forEach(async (item) => {
    //   uni.showLoading({
    //     title: '上传中请稍后',
    //     mask: true
    //   })
    //   let upfile = await uniCloud.uploadFile({
    //     filePath: item.path,
    //     // 同名会导致报错 policy_does_not_allow_file_overwrite
    //     // cloudPath可由 想要存储的文件夹/文件名 拼接，若不拼文件夹名则默认存储在cloudstorage文件夹中
    //     cloudPath: `cloudstorage/${item.name}`,
    //     cloudPathAsRealPath: true
    //   })
    //   editorCtx.insertImage({
    //     src: upfile.fileID,
    //     width: '80%', // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
    //     success: function () {
    //       uni.hideLoading()
    //     }
    //   })
    // })
  }

  const exportHtml = (e) => {
    uni.navigateTo({
      url: '/pages/index/index',
      success(res) {
        // 传至导出页面解析即可
        res.eventChannel.emit('e-transmit-html', {
          data: e
        })
      }
    })
  }
  const addLink = (e) => {
    console.log('==== addLink :', e)
  }
  const onSubmit = () => {
    // 走接口  预设接口
  }
</script>

<style scoped lang="scss">
  .home {
    margin: 20rpx;
    position: relative;

    ::v-deep .placeholder {
      color: #55aaff
    }

    .uni-input {
      margin: -20rpx 0 20rpx 0rpx;
      padding: 20rpx;
      font-size: 38rpx;
      color: #55aaff !important;
      border-bottom: 1px solid #7f7f7f;
    }

    .sub-title {
      height: 100rpx;
      width: 94%;
      margin-bottom: 20rpx;
      padding: 20rpx;
      border: 1px solid #7f7f7f;
    }

  }

  .button {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10rpx;
  }
</style>