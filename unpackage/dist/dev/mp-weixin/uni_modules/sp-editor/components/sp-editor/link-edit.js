"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      showPopup: false,
      descVal: "",
      addrVal: ""
    };
  },
  methods: {
    open() {
      this.showPopup = true;
      this.$emit("open");
    },
    close() {
      this.showPopup = false;
      this.descVal = "";
      this.addrVal = "";
      this.$emit("close");
    },
    onConfirm() {
      if (!this.descVal) {
        common_vendor.index.showToast({
          title: "请输入链接描述",
          icon: "none"
        });
        return;
      }
      if (!this.addrVal) {
        common_vendor.index.showToast({
          title: "请输入链接地址",
          icon: "none"
        });
        return;
      }
      this.$emit("confirm", {
        text: this.descVal,
        href: this.addrVal
      });
      this.close();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.showPopup
  }, $data.showPopup ? {
    b: $data.descVal,
    c: common_vendor.o(($event) => $data.descVal = $event.detail.value),
    d: $data.addrVal,
    e: common_vendor.o(($event) => $data.addrVal = $event.detail.value),
    f: common_vendor.o((...args) => $options.close && $options.close(...args)),
    g: common_vendor.o((...args) => $options.onConfirm && $options.onConfirm(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/iyunk/Desktop/WOrk/ph_bs/bs/uni_modules/sp-editor/components/sp-editor/link-edit.vue"]]);
wx.createComponent(Component);
