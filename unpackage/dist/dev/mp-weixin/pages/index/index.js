"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  uniCard();
}
const uniCard = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const toDetail = () => {
      common_vendor.index.navigateTo({
        //保留当前页面，跳转到应用内的某个页面
        url: "/pages/detail/detail"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toDetail),
        b: common_vendor.p({
          title: "基础卡片",
          extra: "额外信息"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/iyunk/Desktop/WOrk/ph_bs/bs/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
