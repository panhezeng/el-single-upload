import { ElProgress, ElUpload, ElInput, ElPopconfirm, ElMessage } from "element-plus";
import checkUpload from "@panhezeng/utils/dist/check-upload.js";
import getObjectItemByPath from "@panhezeng/utils/dist/get-object-item-by-path.js";
import { resolveComponent, openBlock, createElementBlock, normalizeClass, toDisplayString, createCommentVNode, createBlock, mergeProps, withCtx, createElementVNode, renderSlot } from "vue";
var ElSingleUpload_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "ElSingleUpload",
  components: {
    ElProgress,
    ElUpload,
    ElInput,
    ElPopconfirm
  },
  inheritAttrs: false,
  props: {
    upload: {
      required: true,
      type: Function
    },
    resPathOfUrl: {
      type: String,
      default: "data.url"
    },
    url: {
      type: null,
      required: true
    },
    checkUpload: {
      type: Function,
      default: null
    },
    error: {
      type: Function,
      default: null
    },
    deleteButton: {
      type: Boolean,
      default: true
    },
    view: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: void 0
    },
    imageDimensions: {
      validator(value) {
        return /^\[object Object\]$/.test(Object.prototype.toString.call(value)) && Object.prototype.hasOwnProperty.call(value, "width") && Object.prototype.hasOwnProperty.call(value, "height");
      },
      type: Object,
      default() {
        return {
          width: void 0,
          height: void 0
        };
      }
    },
    accept: {
      validator(value) {
        return value === "" || /^(image|audio|video|text|application|\.)/.test(value);
      },
      type: String,
      default: ""
    },
    input: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    drag: {
      type: Boolean,
      default: true
    },
    errorUploadEmptyUrl: {
      type: Boolean,
      default: false
    },
    tip: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      file: null,
      urlInternal: "",
      percentage: 100,
      emptyUrl: false,
      readonlyInternal: false,
      timeoutId: 0,
      localMedia: {
        url: "",
        duration: 0,
        el: null
      }
    };
  },
  computed: {
    acceptClassName() {
      if (/^\.(png|jpe?g|gif|svg|webp)/i.test(this.accept) || /^image/i.test(this.accept)) {
        return "image";
      } else if (/^\.(ogg|mp3|wav|flac|aac)/i.test(this.accept) || /^audio/i.test(this.accept)) {
        return "audio";
      } else if (/^\.(mp4|webm)/i.test(this.accept) || /^video/i.test(this.accept)) {
        return "video";
      } else {
        return "";
      }
    }
  },
  watch: {
    url: {
      immediate: true,
      handler(val) {
        this.emptyUrl = true;
        this.setUrl(val);
        this.emptyUrl = this.errorUploadEmptyUrl;
      }
    },
    errorUploadEmptyUrl: {
      immediate: true,
      handler(val) {
        this.emptyUrl = val;
      }
    },
    readonly: {
      immediate: true,
      handler(val) {
        this.readonlyInternal = val;
      }
    }
  },
  beforeUnmount() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
    if (this.$refs.media) {
      this.$refs.media.removeEventListener("loadedmetadata", this.emitMedia);
      this.$refs.media.removeEventListener("error", this.emitMediaError);
    }
  },
  methods: {
    empty(emptyUrl = true) {
      if (emptyUrl) {
        this.urlInternal = "";
        if (this.$refs.upload) {
          this.$refs.upload.clearFiles();
        }
      }
      this.file = null;
      this.$emit("file", null);
      this.$emit("media-duration", "");
      this.$emit("media", null);
      this.$emit("update:url", this.urlInternal);
    },
    clearUploadTimeout() {
      if (this.timeoutId) {
        window.clearTimeout(this.timeoutId);
        this.timeoutId = 0;
      }
    },
    emitMedia(local = false) {
      this.clearUploadTimeout();
      if (local === true) {
        this.$emit("media-duration", this.localMedia.duration);
        this.$emit("media", this.localMedia.el);
      } else if (this.$refs.media) {
        this.$emit("media-duration", this.$refs.media.duration);
        this.$emit("media", this.$refs.media);
      }
    },
    emitMediaError() {
      this.clearUploadTimeout();
      this.$emit("media-load-error");
    },
    loadedmetadataHandler() {
      if (this.acceptClassName === "video" || this.acceptClassName === "audio") {
        if (this.localMedia.duration) {
          this.emitMedia(true);
        } else {
          this.$nextTick().then(() => {
            if (this.$refs.media) {
              this.$refs.media.addEventListener("loadedmetadata", () => this.emitMedia());
              if (this.$refs.media.readyState > 2) {
                this.emitMedia();
              }
              this.$refs.media.addEventListener("error", this.emitMediaError.bind(this));
              this.clearUploadTimeout();
              this.timeoutId = window.setTimeout(() => {
                this.emitMediaError();
              }, 6e4);
            }
          });
        }
      }
    },
    setUrl(val) {
      if (Object.prototype.toString.call(val) === "[object String]") {
        if (/^https?:\/\//i.test(val)) {
          this.urlInternal = val;
          this.loadedmetadataHandler();
        } else {
          this.empty(this.emptyUrl);
        }
        if (this.urlInternal !== this.url) {
          this.$emit("update:url", this.urlInternal);
        }
      }
    },
    beforeUpload(file) {
      this.readonlyInternal = true;
      this.file = file;
      this.$emit("file", file);
      this.$emit("before-upload", file);
      if (this.checkUpload) {
        return this.checkUpload(file);
      } else {
        return new Promise((resolve, reject) => {
          checkUpload(file, this.accept, this.size, this.imageDimensions.width, this.imageDimensions.height).then((result) => {
            if (result.validation) {
              if (this.acceptClassName === "video" || this.acceptClassName === "audio") {
                this.localMedia.url = URL.createObjectURL(file);
                const mediaElement = this.localMedia.el = document.createElement(this.acceptClassName);
                mediaElement.preload = "metadata";
                mediaElement.addEventListener("loadedmetadata", () => {
                  this.localMedia.duration = mediaElement.duration;
                });
                mediaElement.addEventListener("error", () => {
                  this.localMedia.duration = 0;
                });
                mediaElement.src = this.localMedia.url;
              }
              resolve(true);
            } else {
              if (result.message)
                ElMessage.error(result.message);
              this.readonlyInternal = this.readonly;
              this.$emit("validation-error");
              reject();
            }
          });
        });
      }
    },
    requestUpload(option) {
      this.$emit("request-upload", option);
      return this.upload(option);
    },
    progressUpload(event) {
      this.$emit("progress-upload", event);
      let percentage = 0;
      if (typeof event.percent === "number") {
        percentage = event.percent;
      }
      if (percentage >= 100)
        percentage = 99;
      this.percentage = Math.floor(percentage);
    },
    successUpload(response) {
      this.setUrl(getObjectItemByPath(response, this.resPathOfUrl));
      this.percentage = 100;
      this.$emit("success-upload", response);
      this.finishUpload();
    },
    errorUpload(err, file) {
      this.percentage = 100;
      if (this.error) {
        this.error(err, file);
      } else {
        ElMessage.error("\u4E0A\u4F20\u5931\u8D25");
      }
      this.empty(this.emptyUrl);
      this.$emit("error-upload", { err, file });
      this.finishUpload();
    },
    finishUpload() {
      this.readonlyInternal = this.readonly;
      this.$emit("finish-upload");
    },
    deleteConfirm() {
      this.$emit("delete-confirm");
      this.empty();
    },
    progressFormat() {
      if (this.percentage === 99) {
        return `\u6587\u4EF6\u4E0A\u4F20\u4E2D...`;
      } else if (this.percentage > 99) {
        return `\u6587\u4EF6\u4E0A\u4F20\u5B8C\u6210`;
      } else {
        return `\u6587\u4EF6\u8BFB\u53D6${this.percentage}%`;
      }
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "view-box"
};
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
const _hoisted_4 = ["href"];
const _hoisted_5 = ["src"];
const _hoisted_6 = {
  key: 1,
  style: { "display": "inline-block", "padding": "10px 15px" }
};
const _hoisted_7 = /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-ba633cb8": ""
}, [
  /* @__PURE__ */ createElementVNode("path", {
    fill: "currentColor",
    d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
  })
], -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createElementVNode("div", { class: "icon-delete" }, [
  /* @__PURE__ */ createElementVNode("svg", {
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg",
    "data-v-ba633cb8": ""
  }, [
    /* @__PURE__ */ createElementVNode("path", {
      fill: "currentColor",
      d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
    })
  ])
], -1);
const _hoisted_10 = {
  key: 5,
  class: "tip"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_progress = resolveComponent("el-progress");
  const _component_el_upload = resolveComponent("el-upload");
  const _component_el_popconfirm = resolveComponent("el-popconfirm");
  const _component_el_input = resolveComponent("el-input");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-single-upload", { [$options.acceptClassName]: true, input: $props.input }])
  }, [
    $props.view && $data.urlInternal ? (openBlock(), createElementBlock("div", _hoisted_1, [
      $options.acceptClassName === "video" ? (openBlock(), createElementBlock("video", {
        key: 0,
        ref: "media",
        class: "view",
        controls: "",
        preload: "metadata",
        src: $data.urlInternal
      }, null, 8, _hoisted_2)) : $options.acceptClassName === "audio" ? (openBlock(), createElementBlock("audio", {
        key: 1,
        ref: "media",
        class: "view",
        controls: "",
        preload: "metadata",
        src: $data.urlInternal
      }, null, 8, _hoisted_3)) : (openBlock(), createElementBlock("a", {
        key: 2,
        href: $data.urlInternal,
        target: "_blank",
        class: "view"
      }, [
        $options.acceptClassName === "image" ? (openBlock(), createElementBlock("img", {
          key: 0,
          class: "img",
          src: $data.urlInternal
        }, null, 8, _hoisted_5)) : (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString($data.file ? $data.file.name : $data.urlInternal), 1))
      ], 8, _hoisted_4))
    ])) : createCommentVNode("", true),
    $data.percentage !== 100 ? (openBlock(), createBlock(_component_el_progress, {
      key: 1,
      percentage: $data.percentage,
      "text-inside": true,
      "stroke-width": 20,
      format: $options.progressFormat
    }, null, 8, ["percentage", "format"])) : createCommentVNode("", true),
    !_ctx.$attrs.disabled ? (openBlock(), createBlock(_component_el_upload, mergeProps({
      key: 2,
      ref: "upload",
      class: ["upload", { update: $data.urlInternal }]
    }, _ctx.$attrs, {
      action: "",
      "before-upload": $options.beforeUpload,
      "http-request": $options.requestUpload,
      "on-progress": $options.progressUpload,
      "on-success": $options.successUpload,
      "on-error": $options.errorUpload,
      accept: $props.accept,
      drag: $props.drag,
      multiple: false,
      "show-file-list": false
    }), {
      default: withCtx(() => [
        createElementVNode("div", {
          class: normalizeClass(`el-icon-upload ${$data.urlInternal ? "re-upload-btn" : "upload-btn"}`)
        }, _hoisted_8, 2)
      ]),
      _: 1
    }, 16, ["class", "before-upload", "http-request", "on-progress", "on-success", "on-error", "accept", "drag"])) : createCommentVNode("", true),
    $data.urlInternal && $props.deleteButton && !_ctx.$attrs.disabled ? (openBlock(), createBlock(_component_el_popconfirm, mergeProps({
      key: 3,
      title: "\u60A8\u786E\u8BA4\u5220\u9664\uFF1F"
    }, _ctx.$attrs, {
      "button-show": false,
      onConfirm: $options.deleteConfirm
    }), {
      reference: withCtx(() => [
        _hoisted_9
      ]),
      _: 1
    }, 16, ["onConfirm"])) : createCommentVNode("", true),
    $props.input ? (openBlock(), createBlock(_component_el_input, {
      key: 4,
      modelValue: $data.urlInternal,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.urlInternal = $event),
      placeholder: _ctx.$attrs.placeholder || "\u6587\u4EF6\u94FE\u63A5\u5730\u5740",
      disabled: _ctx.$attrs.disabled,
      readonly: $data.readonlyInternal,
      onBlur: _cache[1] || (_cache[1] = ($event) => $options.setUrl($data.urlInternal))
    }, null, 8, ["modelValue", "placeholder", "disabled", "readonly"])) : createCommentVNode("", true),
    $props.tip ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString($props.tip), 1)) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var _ElSingleUpload = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const ElSingleUpload = Object.assign(_ElSingleUpload, {
  install: (app, options = typeof window !== "undefined" && window.ElSingleUploadOptions && typeof window.ElSingleUploadOptions === "object" ? window.ElSingleUploadOptions : {}) => {
    Object.assign(ElSingleUpload.props, options);
    app.component(_ElSingleUpload.name, _ElSingleUpload);
  }
});
export { ElSingleUpload as default };
