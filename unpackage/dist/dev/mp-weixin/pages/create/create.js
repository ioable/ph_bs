"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_sp_editor2 = common_vendor.resolveComponent("sp-editor");
  _easycom_sp_editor2();
}
const _easycom_sp_editor = () => "../../uni_modules/sp-editor/components/sp-editor/sp-editor.js";
if (!Math) {
  _easycom_sp_editor();
}
const _sfc_main = {
  __name: "create",
  props: {
    // 空白占位字样
    placeholder: {
      type: String,
      default: "写点什么吧 ~"
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
          keys: [],
          // 要显示的工具，优先级最大
          excludeKeys: [],
          // 除这些指定的工具外，其他都显示 // 默认两者皆为空，即为全工具
          iconSize: "20px"
          // 工具栏字体大小
        };
      }
    }
  },
  setup(__props) {
    const title = common_vendor.ref("");
    const subTitle = common_vendor.ref("");
    const inputOver = (e) => {
      console.log("e是富文本输入内容");
    };
    const overMax = (e) => {
      console.log(e);
    };
    const editorIns = common_vendor.ref(null);
    const initEditor = (editor) => {
      editorIns.value = editor;
      preRender();
    };
    const preRender = () => {
      setTimeout(() => {
        editorIns.value.setContents({
          html: ``
        });
      }, 1e3);
    };
    const upinImage = (tempFiles, editorCtx) => {
      editorCtx.insertImage({
        src: tempFiles[0].tempFilePath,
        width: "80%",
        // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
        success: function() {
        }
      });
    };
    const exportHtml = (e) => {
      common_vendor.index.navigateTo({
        url: "/pages/index/index",
        success(res) {
          res.eventChannel.emit("e-transmit-html", {
            data: e
          });
        }
      });
    };
    const addLink = (e) => {
      console.log("==== addLink :", e);
    };
    const onSubmit = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: title.value,
        b: common_vendor.o(($event) => title.value = $event.detail.value),
        c: subTitle.value,
        d: common_vendor.o(($event) => subTitle.value = $event.detail.value),
        e: common_vendor.o(initEditor),
        f: common_vendor.o(inputOver),
        g: common_vendor.o(upinImage),
        h: common_vendor.o(overMax),
        i: common_vendor.o(addLink),
        j: common_vendor.o(exportHtml),
        k: common_vendor.p({
          ["toolbar-config"]: {
            excludeKeys: ["direction", "date", "lineHeight", "letterSpacing", "listCheck"],
            iconSize: "18px"
          }
        }),
        l: common_vendor.o(onSubmit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-98f0e4ec"], ["__file", "C:/Users/iyunk/Desktop/WOrk/ph_bs/bs/pages/create/create.vue"]]);
wx.createPage(MiniProgramPage);
