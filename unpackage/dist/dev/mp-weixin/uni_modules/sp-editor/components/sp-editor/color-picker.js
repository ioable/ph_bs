"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    color: {
      type: Object,
      default: () => {
        return {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        };
      }
    },
    spareColor: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      show: false,
      active: false,
      // rgba 颜色
      rgba: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      },
      // hsb 颜色
      hsb: {
        h: 0,
        s: 0,
        b: 0
      },
      site: [
        {
          top: 0,
          left: 0
        },
        {
          left: 0
        },
        {
          left: 0
        }
      ],
      index: 0,
      bgcolor: {
        r: 255,
        g: 0,
        b: 0,
        a: 1
      },
      hex: "#000000",
      mode: true,
      colorList: [
        {
          r: 244,
          g: 67,
          b: 54,
          a: 1
        },
        {
          r: 233,
          g: 30,
          b: 99,
          a: 1
        },
        {
          r: 156,
          g: 39,
          b: 176,
          a: 1
        },
        {
          r: 103,
          g: 58,
          b: 183,
          a: 1
        },
        {
          r: 63,
          g: 81,
          b: 181,
          a: 1
        },
        {
          r: 33,
          g: 150,
          b: 243,
          a: 1
        },
        {
          r: 3,
          g: 169,
          b: 244,
          a: 1
        },
        {
          r: 0,
          g: 188,
          b: 212,
          a: 1
        },
        {
          r: 0,
          g: 150,
          b: 136,
          a: 1
        },
        {
          r: 76,
          g: 175,
          b: 80,
          a: 1
        },
        {
          r: 139,
          g: 195,
          b: 74,
          a: 1
        },
        {
          r: 205,
          g: 220,
          b: 57,
          a: 1
        },
        {
          r: 255,
          g: 235,
          b: 59,
          a: 1
        },
        {
          r: 255,
          g: 193,
          b: 7,
          a: 1
        },
        {
          r: 255,
          g: 152,
          b: 0,
          a: 1
        },
        {
          r: 255,
          g: 87,
          b: 34,
          a: 1
        },
        {
          r: 121,
          g: 85,
          b: 72,
          a: 1
        },
        {
          r: 158,
          g: 158,
          b: 158,
          a: 1
        },
        {
          r: 0,
          g: 0,
          b: 0,
          a: 0.5
        },
        {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        }
      ]
    };
  },
  created() {
    this.ready();
  },
  methods: {
    ready() {
      this.rgba = this.color;
      if (this.spareColor.length !== 0) {
        this.colorList = this.spareColor;
      }
    },
    /**
     * 初始化
     */
    init() {
      this.hsb = this.rgbToHex(this.rgba);
      this.setValue(this.rgba);
    },
    moveHandle() {
    },
    open() {
      this.show = true;
      this.$nextTick(() => {
        this.init();
        setTimeout(() => {
          this.active = true;
          setTimeout(() => {
            this.getSelectorQuery();
          }, 350);
        }, 50);
      });
    },
    close() {
      this.active = false;
      this.$nextTick(() => {
        setTimeout(() => {
          this.show = false;
        }, 500);
      });
    },
    confirm() {
      this.close();
      this.$emit("confirm", {
        rgba: this.rgba,
        hex: this.hex
      });
    },
    // 选择模式
    select() {
      this.mode = !this.mode;
    },
    // 常用颜色选择
    selectColor(item) {
      this.setColorBySelect(item);
    },
    touchstart(e, index) {
      const { pageX, pageY, clientX, clientY } = e.touches[0];
      this.moveX = pageX || clientX;
      this.moveY = pageY || clientY;
      this.setPosition(this.moveX, this.moveY, index);
    },
    touchmove(e, index) {
      const { pageX, pageY, clientX, clientY } = e.touches[0];
      this.moveX = pageX || clientX;
      this.moveY = pageY || clientY;
      this.setPosition(this.moveX, this.moveY, index);
    },
    touchend(e, index) {
    },
    /**
     * 设置位置
     */
    setPosition(x, y, index) {
      this.index = index;
      const { top, left, width, height } = this.position[index];
      this.site[index].left = Math.max(0, Math.min(parseInt(x - left), width));
      if (index === 0) {
        this.site[index].top = Math.max(0, Math.min(parseInt(y - top), height));
        this.hsb.s = parseInt(100 * this.site[index].left / width);
        this.hsb.b = parseInt(100 - 100 * this.site[index].top / height);
        this.setColor();
        this.setValue(this.rgba);
      } else {
        this.setControl(index, this.site[index].left);
      }
    },
    /**
     * 设置 rgb 颜色
     */
    setColor() {
      const rgb = this.HSBToRGB(this.hsb);
      this.rgba.r = rgb.r;
      this.rgba.g = rgb.g;
      this.rgba.b = rgb.b;
    },
    /**
     * 设置二进制颜色
     * @param {Object} rgb
     */
    setValue(rgb) {
      this.hex = "#" + this.rgbToHex(rgb);
    },
    setControl(index, x) {
      const { top, left, width, height } = this.position[index];
      if (index === 1) {
        this.hsb.h = parseInt(360 * x / width);
        this.bgcolor = this.HSBToRGB({
          h: this.hsb.h,
          s: 100,
          b: 100
        });
        this.setColor();
      } else {
        this.rgba.a = (x / width).toFixed(1);
      }
      this.setValue(this.rgba);
    },
    /**
     * rgb 转 二进制 hex
     * @param {Object} rgb
     */
    rgbToHex(rgb) {
      let hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
      hex.map(function(str, i) {
        if (str.length == 1) {
          hex[i] = "0" + str;
        }
      });
      return hex.join("");
    },
    setColorBySelect(getrgb) {
      const { r, g, b, a } = getrgb;
      let rgb = {};
      rgb = {
        r: r ? parseInt(r) : 0,
        g: g ? parseInt(g) : 0,
        b: b ? parseInt(b) : 0,
        a: a ? a : 0
      };
      this.rgba = rgb;
      this.hsb = this.rgbToHsb(rgb);
      this.changeViewByHsb();
    },
    changeViewByHsb() {
      const [a, b, c] = this.position;
      this.site[0].left = parseInt(this.hsb.s * a.width / 100);
      this.site[0].top = parseInt((100 - this.hsb.b) * a.height / 100);
      this.setColor(this.hsb.h);
      this.setValue(this.rgba);
      this.bgcolor = this.HSBToRGB({
        h: this.hsb.h,
        s: 100,
        b: 100
      });
      this.site[1].left = this.hsb.h / 360 * b.width;
      this.site[2].left = this.rgba.a * c.width;
    },
    /**
     * hsb 转 rgb
     * @param {Object} 颜色模式  H(hues)表示色相，S(saturation)表示饱和度，B（brightness）表示亮度
     */
    HSBToRGB(hsb) {
      let rgb = {};
      let h = Math.round(hsb.h);
      let s = Math.round(hsb.s * 255 / 100);
      let v = Math.round(hsb.b * 255 / 100);
      if (s == 0) {
        rgb.r = rgb.g = rgb.b = v;
      } else {
        let t1 = v;
        let t2 = (255 - s) * v / 255;
        let t3 = (t1 - t2) * (h % 60) / 60;
        if (h == 360)
          h = 0;
        if (h < 60) {
          rgb.r = t1;
          rgb.b = t2;
          rgb.g = t2 + t3;
        } else if (h < 120) {
          rgb.g = t1;
          rgb.b = t2;
          rgb.r = t1 - t3;
        } else if (h < 180) {
          rgb.g = t1;
          rgb.r = t2;
          rgb.b = t2 + t3;
        } else if (h < 240) {
          rgb.b = t1;
          rgb.r = t2;
          rgb.g = t1 - t3;
        } else if (h < 300) {
          rgb.b = t1;
          rgb.g = t2;
          rgb.r = t2 + t3;
        } else if (h < 360) {
          rgb.r = t1;
          rgb.g = t2;
          rgb.b = t1 - t3;
        } else {
          rgb.r = 0;
          rgb.g = 0;
          rgb.b = 0;
        }
      }
      return {
        r: Math.round(rgb.r),
        g: Math.round(rgb.g),
        b: Math.round(rgb.b)
      };
    },
    rgbToHsb(rgb) {
      let hsb = {
        h: 0,
        s: 0,
        b: 0
      };
      let min = Math.min(rgb.r, rgb.g, rgb.b);
      let max = Math.max(rgb.r, rgb.g, rgb.b);
      let delta = max - min;
      hsb.b = max;
      hsb.s = max != 0 ? 255 * delta / max : 0;
      if (hsb.s != 0) {
        if (rgb.r == max)
          hsb.h = (rgb.g - rgb.b) / delta;
        else if (rgb.g == max)
          hsb.h = 2 + (rgb.b - rgb.r) / delta;
        else
          hsb.h = 4 + (rgb.r - rgb.g) / delta;
      } else
        hsb.h = -1;
      hsb.h *= 60;
      if (hsb.h < 0)
        hsb.h = 0;
      hsb.s *= 100 / 255;
      hsb.b *= 100 / 255;
      return hsb;
    },
    getSelectorQuery() {
      const views = common_vendor.index.createSelectorQuery().in(this);
      views.selectAll(".boxs").boundingClientRect((data) => {
        if (!data || data.length === 0) {
          setTimeout(() => this.getSelectorQuery(), 20);
          return;
        }
        this.position = data;
        this.setColorBySelect(this.rgba);
      }).exec();
    },
    hex2Rgb(hexColor, alpha = 1) {
      const color = hexColor.slice(1);
      const r = parseInt(color.slice(0, 2), 16);
      const g = parseInt(color.slice(2, 4), 16);
      const b = parseInt(color.slice(4, 6), 16);
      return {
        r,
        g,
        b,
        a: alpha
      };
    }
  },
  watch: {
    spareColor(newVal) {
      this.colorList = newVal;
    },
    color(newVal) {
      this.ready();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.show
  }, $data.show ? common_vendor.e({
    b: $data.active ? 1 : "",
    c: common_vendor.o((...args) => $options.close && $options.close(...args)),
    d: common_vendor.o((...args) => $options.close && $options.close(...args)),
    e: common_vendor.o((...args) => $options.confirm && $options.confirm(...args)),
    f: $data.site[0].top - 8 + "px",
    g: $data.site[0].left - 8 + "px",
    h: common_vendor.o(($event) => $options.touchstart($event, 0)),
    i: common_vendor.o(($event) => $options.touchmove($event, 0)),
    j: common_vendor.o(($event) => $options.touchend($event, 0)),
    k: "rgb(" + $data.bgcolor.r + "," + $data.bgcolor.g + "," + $data.bgcolor.b + ")",
    l: "rgba(" + $data.rgba.r + "," + $data.rgba.g + "," + $data.rgba.b + "," + $data.rgba.a + ")",
    m: $data.site[1].left - 12 + "px",
    n: common_vendor.o(($event) => $options.touchstart($event, 1)),
    o: common_vendor.o(($event) => $options.touchmove($event, 1)),
    p: common_vendor.o(($event) => $options.touchend($event, 1)),
    q: $data.site[2].left - 12 + "px",
    r: common_vendor.o(($event) => $options.touchstart($event, 2)),
    s: common_vendor.o(($event) => $options.touchmove($event, 2)),
    t: common_vendor.o(($event) => $options.touchend($event, 2)),
    v: $data.mode
  }, $data.mode ? {
    w: common_vendor.t($data.hex)
  } : {
    x: common_vendor.t($data.rgba.r),
    y: common_vendor.t($data.rgba.g),
    z: common_vendor.t($data.rgba.b),
    A: common_vendor.t($data.rgba.a)
  }, {
    B: common_vendor.o((...args) => $options.select && $options.select(...args)),
    C: common_vendor.f($data.colorList, (item, index, i0) => {
      return {
        a: "rgba(" + item.r + "," + item.g + "," + item.b + "," + item.a + ")",
        b: common_vendor.o(($event) => $options.selectColor(item), index),
        c: index
      };
    }),
    D: $data.active ? 1 : "",
    E: common_vendor.o((...args) => $options.moveHandle && $options.moveHandle(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/iyunk/Desktop/WOrk/ph_bs/bs/uni_modules/sp-editor/components/sp-editor/color-picker.vue"]]);
wx.createComponent(Component);
