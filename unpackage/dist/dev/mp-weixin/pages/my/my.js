"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_icons2 + _easycom_uni_file_picker2 + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_icons = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js";
const _easycom_uni_file_picker = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-file-picker/uni-file-picker.js";
const _easycom_uni_list_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_file_picker + _easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const imageStyles = common_vendor.ref({
      width: 90,
      height: 90,
      border: {
        radius: "50%"
      }
    });
    const myName = common_vendor.ref("进简称");
    const myPhone = common_vendor.ref("18532223456");
    const toMyDetail = () => {
      common_vendor.index.navigateTo({
        //保留当前页面，跳转到应用内的某个页面
        url: "/pages/my-detail/my-detail"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "person",
          size: "30"
        }),
        b: common_vendor.p({
          limit: "1",
          ["del-icon"]: false,
          ["disable-preview"]: true,
          imageStyles: imageStyles.value,
          ["return-type"]: "object",
          ["file-mediatype"]: "image"
        }),
        c: common_vendor.t(myName.value),
        d: common_vendor.t(myPhone.value),
        e: common_vendor.o(toMyDetail),
        f: common_vendor.p({
          type: "right",
          size: "30",
          color: "#7f7f7f"
        }),
        g: common_vendor.p({
          title: "我的收藏",
          ["show-extra-icon"]: true,
          showArrow: true,
          ["extra-icon"]: {
            color: "#55aaff",
            size: "22",
            type: "star-filled"
          }
        }),
        h: common_vendor.p({
          title: "设置",
          ["show-extra-icon"]: true,
          showArrow: true,
          ["extra-icon"]: {
            color: "#55aaff",
            size: "22",
            type: "gear-filled"
          }
        }),
        i: common_vendor.p({
          title: "意见反馈",
          ["show-extra-icon"]: true,
          showArrow: true,
          ["extra-icon"]: {
            color: "#55aaff",
            size: "22",
            type: "chat"
          }
        }),
        j: common_vendor.p({
          title: "关于我们",
          ["show-extra-icon"]: true,
          showArrow: true,
          ["extra-icon"]: {
            color: "#55aaff",
            size: "22",
            type: "auth-filled"
          }
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f1ef635"], ["__file", "C:/Users/iyunk/Desktop/WOrk/ph_bs/bs/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
