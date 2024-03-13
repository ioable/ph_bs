"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  (_easycom_uni_notice_bar2 + _easycom_uni_swiper_dot2)();
}
const _easycom_uni_notice_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_swiper_dot = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  (_easycom_uni_notice_bar + _easycom_uni_swiper_dot + uniCard)();
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
    const info = common_vendor.ref([
      {
        colorClass: "uni-bg-red",
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
        content: "内容 A"
      },
      {
        colorClass: "uni-bg-green",
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
        content: "内容 B"
      },
      {
        colorClass: "uni-bg-blue",
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
        content: "内容 C"
      }
    ]);
    const dotStyle = common_vendor.ref({
      backgroundColor: "rgba(83, 200, 249,0.3)",
      border: "1px rgba(83, 200, 249,0.3) solid",
      color: "#fff",
      selectedBackgroundColor: "rgba(83, 200, 249,0.9)",
      selectedBorder: "1px rgba(83, 200, 249,0.9) solid"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["show-icon"]: true,
          scrollable: true,
          text: "想去更大的平台嘛~~~ 关注一下笔试日历吆~ ~ ~"
        }),
        b: common_vendor.f(info.value, (item, index, i0) => {
          return {
            a: item.url,
            b: index
          };
        }),
        c: common_vendor.o((...args) => _ctx.change && _ctx.change(...args)),
        d: common_vendor.p({
          info: info.value,
          current: _ctx.current,
          mode: "round",
          dotsStyles: dotStyle.value,
          field: "content"
        }),
        e: common_vendor.o(toDetail),
        f: common_vendor.p({
          title: "笔记1",
          extra: "额外信息"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/iyunk/Desktop/WOrk/ph_bs/bs/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
