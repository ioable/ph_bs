"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_spEditor_utils_index = require("../../utils/index.js");
const ColorPicker = () => "./color-picker.js";
const LinkEdit = () => "./link-edit.js";
const _sfc_main = {
  components: {
    ColorPicker,
    LinkEdit
  },
  props: {
    placeholder: {
      type: String,
      default: "写点什么吧 ~"
    },
    // 是否只读
    readOnly: {
      type: Boolean,
      default: false
    },
    // 最大字数限制，-1不限
    maxlength: {
      type: Number,
      default: -1
    },
    // 工具栏配置
    toolbarConfig: {
      type: Object,
      default: () => {
        return {
          keys: [],
          // 要显示的工具，优先级最大
          excludeKeys: [],
          // 除这些指定的工具外，其他都显示
          iconSize: "20px"
          // 工具栏字体大小
        };
      }
    }
  },
  watch: {
    toolbarConfig: {
      deep: true,
      immediate: true,
      handler(newToolbar) {
        var _a, _b;
        if (((_a = newToolbar.keys) == null ? void 0 : _a.length) > 0) {
          this.toolbarList = newToolbar.keys;
        } else {
          this.toolbarList = ((_b = newToolbar.excludeKeys) == null ? void 0 : _b.length) > 0 ? this.toolbarAllList.filter((item) => !newToolbar.excludeKeys.includes(item)) : this.toolbarAllList;
        }
        this.iconSize = newToolbar.iconSize || "20px";
      }
    }
  },
  data() {
    return {
      formats: {},
      textColor: "",
      backgroundColor: "",
      curColor: "",
      defaultColor: { r: 0, g: 0, b: 0, a: 1 },
      // 调色板默认颜色
      iconSize: "20px",
      // 工具栏图标字体大小
      toolbarList: [],
      toolbarAllList: [
        "bold",
        // 加粗
        "italic",
        // 斜体
        "underline",
        // 下划线
        "strike",
        // 删除线
        "alignLeft",
        // 左对齐
        "alignCenter",
        // 居中对齐
        "alignRight",
        // 右对齐
        "alignJustify",
        // 两端对齐
        "lineHeight",
        // 行间距
        "letterSpacing",
        // 字间距
        "marginTop",
        // 段前距
        "marginBottom",
        // 段后距
        "fontFamily",
        // 字体
        "fontSize",
        // 字号
        "color",
        // 文字颜色
        "backgroundColor",
        // 背景颜色
        "date",
        // 日期
        "listCheck",
        // 待办
        "listOrdered",
        // 有序列表
        "listBullet",
        // 无序列表
        "indentInc",
        // 增加缩进
        "indentDec",
        // 减少缩进
        "divider",
        // 分割线
        "header",
        // 标题
        "scriptSub",
        // 下标
        "scriptSuper",
        // 上标
        "direction",
        // 文本方向
        "image",
        // 图片
        "link",
        // 超链接
        "undo",
        // 撤销
        "redo",
        // 重做
        "removeFormat",
        // 清除格式
        "clear",
        // 清空
        "export"
        // 导出
      ]
    };
  },
  methods: {
    onEditorReady() {
      common_vendor.index.createSelectorQuery().in(this).select("#editor").context((res) => {
        this.editorCtx = res.context;
        this.$emit("init", this.editorCtx);
      }).exec();
    },
    undo() {
      this.editorCtx.undo();
    },
    redo() {
      this.editorCtx.redo();
    },
    format(e) {
      let { name, value } = e.target.dataset;
      if (!name)
        return;
      switch (name) {
        case "color":
        case "backgroundColor":
          this.curColor = name;
          this.showPicker();
          break;
        default:
          this.editorCtx.format(name, value);
          break;
      }
    },
    showPicker() {
      switch (this.curColor) {
        case "color":
          this.defaultColor = this.textColor ? this.$refs.colorPickerRef.hex2Rgb(this.textColor) : { r: 0, g: 0, b: 0, a: 1 };
          break;
        case "backgroundColor":
          this.defaultColor = this.backgroundColor ? this.$refs.colorPickerRef.hex2Rgb(this.backgroundColor) : { r: 0, g: 0, b: 0, a: 0 };
          break;
      }
      this.$refs.colorPickerRef.open();
    },
    confirmColor(e) {
      switch (this.curColor) {
        case "color":
          this.textColor = e.hex;
          this.editorCtx.format("color", this.textColor);
          break;
        case "backgroundColor":
          this.backgroundColor = e.hex;
          this.editorCtx.format("backgroundColor", this.backgroundColor);
          break;
      }
    },
    onStatusChange(e) {
      if (e.detail.color) {
        this.textColor = e.detail.color;
      }
      if (e.detail.backgroundColor) {
        this.backgroundColor = e.detail.backgroundColor;
      }
      this.formats = e.detail;
    },
    insertDivider() {
      this.editorCtx.insertDivider();
    },
    clear() {
      common_vendor.index.showModal({
        title: "清空编辑器",
        content: "确定清空编辑器吗？",
        success: ({ confirm }) => {
          if (confirm) {
            this.editorCtx.clear();
          }
        }
      });
    },
    removeFormat() {
      common_vendor.index.showModal({
        title: "文本格式化",
        content: "确定要清除所选择部分文本块格式吗？",
        showCancel: true,
        success: ({ confirm }) => {
          if (confirm) {
            this.editorCtx.removeFormat();
          }
        }
      });
    },
    insertDate() {
      const date = /* @__PURE__ */ new Date();
      const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      this.editorCtx.insertText({ text: formatDate });
    },
    insertLink() {
      this.$refs.linkEditRef.open();
    },
    /**
     * 确认添加链接
     * @param {Object} e { text: '链接描述', href: '链接地址' }
     */
    confirmLink(e) {
      this.$refs.linkEditRef.close();
      this.$emit("addLink", e);
      uni_modules_spEditor_utils_index.addLink(this.editorCtx, e);
    },
    insertImage() {
      common_vendor.index.chooseMedia({
        // count: 1, // 默认9
        success: (res) => {
          const { tempFiles } = res;
          this.$emit("upinImage", tempFiles, this.editorCtx);
        },
        fail() {
          common_vendor.index.showToast({
            title: "未授权访问相册权限，请授权后使用",
            icon: "none"
          });
        }
      });
    },
    onEditorInput(e) {
      if (Object.keys(e.detail).length <= 0)
        return;
      const { html, text } = e.detail;
      if (text.indexOf(uni_modules_spEditor_utils_index.linkFlag) !== -1)
        return;
      const maxlength = parseInt(this.maxlength);
      const textStr = text.replace(/[ \t\r\n]/g, "");
      if (textStr.length > maxlength && maxlength != -1) {
        common_vendor.index.showModal({
          content: `超过${maxlength}字数啦~`,
          confirmText: "确定",
          showCancel: false,
          success: () => {
            this.$emit("overMax", { html, text });
          }
        });
      } else {
        this.$emit("input", { html, text });
      }
    },
    // 导出
    exportHtml() {
      this.editorCtx.getContents({
        success: (res) => {
          this.$emit("exportHtml", res.html);
        }
      });
    }
  }
};
if (!Array) {
  const _component_color_picker = common_vendor.resolveComponent("color-picker");
  const _component_link_edit = common_vendor.resolveComponent("link-edit");
  (_component_color_picker + _component_link_edit)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.toolbarList.includes("header")
  }, $data.toolbarList.includes("header") ? {
    b: common_vendor.n($data.formats.header === 1 ? "ql-active" : "")
  } : {}, {
    c: $data.toolbarList.includes("bold")
  }, $data.toolbarList.includes("bold") ? {
    d: common_vendor.n($data.formats.bold ? "ql-active" : "")
  } : {}, {
    e: $data.toolbarList.includes("italic")
  }, $data.toolbarList.includes("italic") ? {
    f: common_vendor.n($data.formats.italic ? "ql-active" : "")
  } : {}, {
    g: $data.toolbarList.includes("underline")
  }, $data.toolbarList.includes("underline") ? {
    h: common_vendor.n($data.formats.underline ? "ql-active" : "")
  } : {}, {
    i: $data.toolbarList.includes("strike")
  }, $data.toolbarList.includes("strike") ? {
    j: common_vendor.n($data.formats.strike ? "ql-active" : "")
  } : {}, {
    k: $data.toolbarList.includes("alignLeft")
  }, $data.toolbarList.includes("alignLeft") ? {
    l: common_vendor.n($data.formats.align === "left" ? "ql-active" : "")
  } : {}, {
    m: $data.toolbarList.includes("alignCenter")
  }, $data.toolbarList.includes("alignCenter") ? {
    n: common_vendor.n($data.formats.align === "center" ? "ql-active" : "")
  } : {}, {
    o: $data.toolbarList.includes("alignRight")
  }, $data.toolbarList.includes("alignRight") ? {
    p: common_vendor.n($data.formats.align === "right" ? "ql-active" : "")
  } : {}, {
    q: $data.toolbarList.includes("alignJustify")
  }, $data.toolbarList.includes("alignJustify") ? {
    r: common_vendor.n($data.formats.align === "justify" ? "ql-active" : "")
  } : {}, {
    s: $data.toolbarList.includes("lineHeight")
  }, $data.toolbarList.includes("lineHeight") ? {
    t: common_vendor.n($data.formats.lineHeight ? "ql-active" : "")
  } : {}, {
    v: $data.toolbarList.includes("letterSpacing")
  }, $data.toolbarList.includes("letterSpacing") ? {
    w: common_vendor.n($data.formats.letterSpacing ? "ql-active" : "")
  } : {}, {
    x: $data.toolbarList.includes("marginTop")
  }, $data.toolbarList.includes("marginTop") ? {
    y: common_vendor.n($data.formats.marginTop ? "ql-active" : "")
  } : {}, {
    z: $data.toolbarList.includes("marginBottom")
  }, $data.toolbarList.includes("marginBottom") ? {
    A: common_vendor.n($data.formats.marginBottom ? "ql-active" : "")
  } : {}, {
    B: $data.toolbarList.includes("fontSize")
  }, $data.toolbarList.includes("fontSize") ? {
    C: common_vendor.n($data.formats.fontFamily ? "ql-active" : "")
  } : {}, {
    D: $data.toolbarList.includes("fontSize")
  }, $data.toolbarList.includes("fontSize") ? {
    E: common_vendor.n($data.formats.fontSize === "24px" ? "ql-active" : "")
  } : {}, {
    F: $data.toolbarList.includes("color")
  }, $data.toolbarList.includes("color") ? {
    G: $data.formats.color ? $data.textColor : "initial",
    H: $data.textColor
  } : {}, {
    I: $data.toolbarList.includes("backgroundColor")
  }, $data.toolbarList.includes("backgroundColor") ? {
    J: $data.formats.backgroundColor ? $data.backgroundColor : "initial",
    K: $data.backgroundColor
  } : {}, {
    L: $data.toolbarList.includes("date")
  }, $data.toolbarList.includes("date") ? {
    M: common_vendor.o((...args) => $options.insertDate && $options.insertDate(...args))
  } : {}, {
    N: $data.toolbarList.includes("listCheck")
  }, $data.toolbarList.includes("listCheck") ? {} : {}, {
    O: $data.toolbarList.includes("listOrdered")
  }, $data.toolbarList.includes("listOrdered") ? {
    P: common_vendor.n($data.formats.list === "ordered" ? "ql-active" : "")
  } : {}, {
    Q: $data.toolbarList.includes("listBullet")
  }, $data.toolbarList.includes("listBullet") ? {
    R: common_vendor.n($data.formats.list === "bullet" ? "ql-active" : "")
  } : {}, {
    S: $data.toolbarList.includes("divider")
  }, $data.toolbarList.includes("divider") ? {
    T: common_vendor.o((...args) => $options.insertDivider && $options.insertDivider(...args))
  } : {}, {
    U: $data.toolbarList.includes("indentDec")
  }, $data.toolbarList.includes("indentDec") ? {} : {}, {
    V: $data.toolbarList.includes("indentInc")
  }, $data.toolbarList.includes("indentInc") ? {} : {}, {
    W: $data.toolbarList.includes("scriptSub")
  }, $data.toolbarList.includes("scriptSub") ? {
    X: common_vendor.n($data.formats.script === "sub" ? "ql-active" : "")
  } : {}, {
    Y: $data.toolbarList.includes("scriptSuper")
  }, $data.toolbarList.includes("scriptSuper") ? {
    Z: common_vendor.n($data.formats.script === "super" ? "ql-active" : "")
  } : {}, {
    aa: $data.toolbarList.includes("direction")
  }, $data.toolbarList.includes("direction") ? {
    ab: common_vendor.n($data.formats.direction === "rtl" ? "ql-active" : "")
  } : {}, {
    ac: $data.toolbarList.includes("image")
  }, $data.toolbarList.includes("image") ? {
    ad: common_vendor.o((...args) => $options.insertImage && $options.insertImage(...args))
  } : {}, {
    ae: $data.toolbarList.includes("link")
  }, $data.toolbarList.includes("link") ? {
    af: common_vendor.o((...args) => $options.insertLink && $options.insertLink(...args))
  } : {}, {
    ag: $data.toolbarList.includes("undo")
  }, $data.toolbarList.includes("undo") ? {
    ah: common_vendor.o((...args) => $options.undo && $options.undo(...args))
  } : {}, {
    ai: $data.toolbarList.includes("redo")
  }, $data.toolbarList.includes("redo") ? {
    aj: common_vendor.o((...args) => $options.redo && $options.redo(...args))
  } : {}, {
    ak: $data.toolbarList.includes("removeFormat")
  }, $data.toolbarList.includes("removeFormat") ? {
    al: common_vendor.o((...args) => $options.removeFormat && $options.removeFormat(...args))
  } : {}, {
    am: $data.toolbarList.includes("clear")
  }, $data.toolbarList.includes("clear") ? {
    an: common_vendor.o((...args) => $options.clear && $options.clear(...args))
  } : {}, {
    ao: $data.toolbarList.includes("export")
  }, $data.toolbarList.includes("export") ? {
    ap: common_vendor.o((...args) => $options.exportHtml && $options.exportHtml(...args))
  } : {}, {
    aq: common_vendor.o((...args) => $options.format && $options.format(...args)),
    ar: $data.toolbarList.includes("color") || $data.toolbarList.includes("backgroundColor")
  }, $data.toolbarList.includes("color") || $data.toolbarList.includes("backgroundColor") ? {
    as: common_vendor.sr("colorPickerRef", "7808ffc5-0"),
    at: common_vendor.o($options.confirmColor),
    av: common_vendor.p({
      color: $data.defaultColor
    })
  } : {}, {
    aw: $data.toolbarList.includes("link")
  }, $data.toolbarList.includes("link") ? {
    ax: common_vendor.sr("linkEditRef", "7808ffc5-1"),
    ay: common_vendor.o($options.confirmLink)
  } : {}, {
    az: $props.placeholder,
    aA: $props.readOnly,
    aB: common_vendor.o((...args) => $options.onStatusChange && $options.onStatusChange(...args)),
    aC: common_vendor.o((...args) => $options.onEditorReady && $options.onEditorReady(...args)),
    aD: common_vendor.o((...args) => $options.onEditorInput && $options.onEditorInput(...args)),
    aE: $data.iconSize
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/iyunk/Desktop/WOrk/ph_bs/bs/uni_modules/sp-editor/components/sp-editor/sp-editor.vue"]]);
wx.createComponent(Component);
