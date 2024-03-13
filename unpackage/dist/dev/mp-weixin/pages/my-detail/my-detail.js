"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "my-detail",
  setup(__props) {
    const myName = common_vendor.ref("进简称");
    const myPhone = common_vendor.ref("18532223456");
    const myIdCard = common_vendor.ref("123456789011234567");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "昵称",
          rightText: myName.value
        }),
        b: common_vendor.p({
          title: "手机号码",
          ["right-text"]: myPhone.value
        }),
        c: common_vendor.p({
          title: "身份证号",
          ["right-text"]: myIdCard.value
        }),
        d: common_vendor.p({
          title: "修改密码",
          showArrow: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/iyunk/Desktop/WOrk/ph_bs/bs/pages/my-detail/my-detail.vue"]]);
wx.createPage(MiniProgramPage);
