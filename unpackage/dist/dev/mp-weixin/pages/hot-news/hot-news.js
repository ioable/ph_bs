"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_segmented_control2 + _easycom_uni_icons2 + _easycom_uni_card2)();
}
const _easycom_uni_segmented_control = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.js";
const _easycom_uni_icons = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js";
const _easycom_uni_card = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_segmented_control + _easycom_uni_icons + _easycom_uni_card)();
}
const _sfc_main = {
  __name: "hot-news",
  setup(__props) {
    const current = common_vendor.ref(0);
    const items = common_vendor.ref([
      {
        label: "资料福利",
        value: 0
      },
      {
        label: "笔试日历",
        value: 1
      }
    ]);
    let labels = items.value.map((item) => item.label);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(() => {
          current.value = current.value == 1 ? 0 : 1;
        }),
        b: common_vendor.p({
          current: current.value,
          values: common_vendor.unref(labels),
          styleType: "text",
          activeColor: "#55aaff"
        }),
        c: common_vendor.p({
          type: "redo",
          size: "18",
          color: "#55aa7f"
        }),
        d: common_vendor.o(($event) => _ctx.actionsClick("分享")),
        e: common_vendor.p({
          type: "heart",
          size: "18",
          color: "#55aaff"
        }),
        f: common_vendor.o(($event) => _ctx.actionsClick("点赞")),
        g: common_vendor.p({
          type: "chatbubble",
          size: "18",
          color: "#ffaa00"
        }),
        h: common_vendor.o(($event) => _ctx.actionsClick("评论")),
        i: common_vendor.p({
          padding: "0",
          spacing: "0"
        }),
        j: common_vendor.p({
          type: "redo",
          size: "18",
          color: "#55aa7f"
        }),
        k: common_vendor.o(($event) => _ctx.actionsClick("分享")),
        l: common_vendor.p({
          type: "heart",
          size: "18",
          color: "#55aaff"
        }),
        m: common_vendor.o(($event) => _ctx.actionsClick("点赞")),
        n: common_vendor.p({
          type: "chatbubble",
          size: "18",
          color: "#ffaa00"
        }),
        o: common_vendor.o(($event) => _ctx.actionsClick("评论")),
        p: common_vendor.p({
          padding: "0",
          spacing: "0"
        }),
        q: current.value == 0,
        r: common_vendor.o(_ctx.onClick),
        s: common_vendor.p({
          title: "[笔试通知-工商银行]",
          ["sub-title"]: "河北分行",
          thumbnail: "/static/img/xiaoxiu-zuoxizhuangtai.png"
        }),
        t: common_vendor.o(_ctx.onClick),
        v: common_vendor.p({
          title: "[笔试通知-招商银行]",
          ["sub-title"]: "春季校招",
          thumbnail: "/static/img/xiaoxitishi.png"
        }),
        w: current.value == 1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1ec0a552"], ["__file", "C:/Users/iyunk/Desktop/WOrk/ph_bs/bs/pages/hot-news/hot-news.vue"]]);
wx.createPage(MiniProgramPage);
