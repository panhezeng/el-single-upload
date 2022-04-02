import {
  d as F,
  r as C,
  c as n,
  a as k,
  F as B,
  b as d,
  e as c,
  o as l,
  E as O,
  f as M,
  g as j,
  h as S,
  i as $,
  j as y,
  k as N,
  t as v,
  l as u,
  m as p,
  w as b,
  n as U,
  p as _,
  q as A,
  s as L,
  u as V,
} from "./vendor.60a81573.js";
const P = function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) s(t);
  new MutationObserver((t) => {
    for (const i of t)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(t) {
    const i = {};
    return (
      t.integrity && (i.integrity = t.integrity),
      t.referrerpolicy && (i.referrerPolicy = t.referrerpolicy),
      t.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : t.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function s(t) {
    if (t.ep) return;
    t.ep = !0;
    const i = a(t);
    fetch(t.href, i);
  }
};
P();
var q = (e, r) => {
  const a = e.__vccOpts || e;
  for (const [s, t] of r) a[s] = t;
  return a;
};
const z = F({
    name: "App",
    components: {},
    setup() {
      const e = C({ url: "" });
      function r(a) {
        const s = a.file;
        if (Object.prototype.toString.call(s) !== "[object File]")
          throw new Error(
            "file\u53C2\u6570\u5FC5\u987B\u4E3AFile\u6570\u636E\u7C7B\u578B"
          );
        return new Promise((t) => {
          setTimeout((o) => {
            Object.prototype.toString.call(o) !== "[object Object]" &&
              (o = { Key: s.name }),
              (o.url =
                "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"),
              t({ data: o });
          }, 300);
        });
      }
      return { data: e, upload: r };
    },
  }),
  T = d(
    "h1",
    null,
    "\u4E0A\u4F20\u7684mock\u6F14\u793A\uFF0Cresponse\u6C38\u8FDC\u662F\u4E00\u6837\u7684\u6570\u636E",
    -1
  );
function D(e, r, a, s, t, i) {
  const o = c("el-single-upload");
  return (
    l(),
    n(
      B,
      null,
      [
        T,
        k(
          o,
          {
            url: e.data.url,
            "onUpdate:url": r[0] || (r[0] = (m) => (e.data.url = m)),
            upload: e.upload,
          },
          null,
          8,
          ["url", "upload"]
        ),
      ],
      64
    )
  );
}
var H = q(z, [["render", D]]);
var x = (e, r) => {
  const a = e.__vccOpts || e;
  for (const [s, t] of r) a[s] = t;
  return a;
};
const K = {
    name: "ElSingleUpload",
    components: { ElProgress: O, ElUpload: M, ElInput: j, ElPopconfirm: S },
    inheritAttrs: !1,
    props: {
      upload: { required: !0, type: Function },
      resPathOfUrl: { type: String, default: "data.url" },
      url: { type: null, required: !0 },
      checkUpload: { type: Function, default: null },
      error: { type: Function, default: null },
      deleteButton: { type: Boolean, default: !0 },
      view: { type: Boolean, default: !0 },
      size: { type: Number, default: void 0 },
      imageDimensions: {
        validator(e) {
          return (
            /^\[object Object\]$/.test(Object.prototype.toString.call(e)) &&
            Object.prototype.hasOwnProperty.call(e, "width") &&
            Object.prototype.hasOwnProperty.call(e, "height")
          );
        },
        type: Object,
        default() {
          return { width: void 0, height: void 0 };
        },
      },
      accept: {
        validator(e) {
          return e === "" || /^(image|audio|video|text|application|\.)/.test(e);
        },
        type: String,
        default: "",
      },
      input: { type: Boolean, default: !0 },
      readonly: { type: Boolean, default: !1 },
      drag: { type: Boolean, default: !0 },
      errorUploadEmptyUrl: { type: Boolean, default: !1 },
      tip: { type: String, default: "" },
    },
    data() {
      return {
        file: null,
        urlInternal: "",
        percentage: 100,
        emptyUrl: !1,
        readonlyInternal: !1,
        timeoutId: 0,
        localMedia: { url: "", duration: 0, el: null },
      };
    },
    computed: {
      acceptClassName() {
        return /^\.(png|jpe?g|gif|svg|webp)/i.test(this.accept) ||
          /^image/i.test(this.accept)
          ? "image"
          : /^\.(ogg|mp3|wav|flac|aac)/i.test(this.accept) ||
            /^audio/i.test(this.accept)
          ? "audio"
          : /^\.(mp4|webm)/i.test(this.accept) || /^video/i.test(this.accept)
          ? "video"
          : "";
      },
    },
    watch: {
      url: {
        immediate: !0,
        handler(e) {
          (this.emptyUrl = !0),
            this.setUrl(e),
            (this.emptyUrl = this.errorUploadEmptyUrl);
        },
      },
      errorUploadEmptyUrl: {
        immediate: !0,
        handler(e) {
          this.emptyUrl = e;
        },
      },
      readonly: {
        immediate: !0,
        handler(e) {
          this.readonlyInternal = e;
        },
      },
    },
    beforeUnmount() {
      this.timeoutId &&
        (window.clearTimeout(this.timeoutId), (this.timeoutId = 0)),
        this.$refs.media &&
          (this.$refs.media.removeEventListener(
            "loadedmetadata",
            this.emitMedia
          ),
          this.$refs.media.removeEventListener("error", this.emitMediaError));
    },
    methods: {
      empty(e = !0) {
        e &&
          ((this.urlInternal = ""),
          this.$refs.upload && this.$refs.upload.clearFiles()),
          (this.file = null),
          this.$emit("file", null),
          this.$emit("media-duration", ""),
          this.$emit("media", null),
          this.$emit("update:url", this.urlInternal);
      },
      clearUploadTimeout() {
        this.timeoutId &&
          (window.clearTimeout(this.timeoutId), (this.timeoutId = 0));
      },
      emitMedia(e = !1) {
        this.clearUploadTimeout(),
          e === !0
            ? (this.$emit("media-duration", this.localMedia.duration),
              this.$emit("media", this.localMedia.el))
            : this.$refs.media &&
              (this.$emit("media-duration", this.$refs.media.duration),
              this.$emit("media", this.$refs.media));
      },
      emitMediaError() {
        this.clearUploadTimeout(), this.$emit("media-load-error");
      },
      loadedmetadataHandler() {
        (this.acceptClassName === "video" ||
          this.acceptClassName === "audio") &&
          (this.localMedia.duration
            ? this.emitMedia(!0)
            : this.$nextTick().then(() => {
                this.$refs.media &&
                  (this.$refs.media.addEventListener("loadedmetadata", () =>
                    this.emitMedia()
                  ),
                  this.$refs.media.readyState > 2 && this.emitMedia(),
                  this.$refs.media.addEventListener(
                    "error",
                    this.emitMediaError.bind(this)
                  ),
                  this.clearUploadTimeout(),
                  (this.timeoutId = window.setTimeout(() => {
                    this.emitMediaError();
                  }, 6e4)));
              }));
      },
      setUrl(e) {
        Object.prototype.toString.call(e) === "[object String]" &&
          (/^https?:\/\//i.test(e)
            ? ((this.urlInternal = e), this.loadedmetadataHandler())
            : this.empty(this.emptyUrl),
          this.urlInternal !== this.url &&
            this.$emit("update:url", this.urlInternal));
      },
      beforeUpload(e) {
        return (
          (this.readonlyInternal = !0),
          (this.file = e),
          this.$emit("file", e),
          this.$emit("before-upload", e),
          this.checkUpload
            ? this.checkUpload(e)
            : new Promise((r, a) => {
                $(
                  e,
                  this.accept,
                  this.size,
                  this.imageDimensions.width,
                  this.imageDimensions.height
                ).then((s) => {
                  if (s.validation) {
                    if (
                      this.acceptClassName === "video" ||
                      this.acceptClassName === "audio"
                    ) {
                      this.localMedia.url = URL.createObjectURL(e);
                      const t = (this.localMedia.el = document.createElement(
                        this.acceptClassName
                      ));
                      (t.preload = "metadata"),
                        t.addEventListener("loadedmetadata", () => {
                          this.localMedia.duration = t.duration;
                        }),
                        t.addEventListener("error", () => {
                          this.localMedia.duration = 0;
                        }),
                        (t.src = this.localMedia.url);
                    }
                    r(!0);
                  } else
                    s.message && y.error(s.message),
                      (this.readonlyInternal = this.readonly),
                      this.$emit("validation-error"),
                      a();
                });
              })
        );
      },
      requestUpload(e) {
        return this.$emit("request-upload", e), this.upload(e);
      },
      progressUpload(e) {
        this.$emit("progress-upload", e);
        let r = 0;
        typeof e.percent == "number" && (r = e.percent),
          r >= 100 && (r = 99),
          (this.percentage = Math.floor(r));
      },
      successUpload(e) {
        this.setUrl(N(e, this.resPathOfUrl)),
          (this.percentage = 100),
          this.$emit("success-upload", e),
          this.finishUpload();
      },
      errorUpload(e, r) {
        (this.percentage = 100),
          this.error ? this.error(e, r) : y.error("\u4E0A\u4F20\u5931\u8D25"),
          this.empty(this.emptyUrl),
          this.$emit("error-upload", { err: e, file: r }),
          this.finishUpload();
      },
      finishUpload() {
        (this.readonlyInternal = this.readonly), this.$emit("finish-upload");
      },
      deleteConfirm() {
        this.$emit("delete-confirm"), this.empty();
      },
      progressFormat() {
        return this.percentage === 99
          ? "\u6587\u4EF6\u4E0A\u4F20\u4E2D..."
          : this.percentage > 99
          ? "\u6587\u4EF6\u4E0A\u4F20\u5B8C\u6210"
          : `\u6587\u4EF6\u8BFB\u53D6${this.percentage}%`;
      },
    },
  },
  R = { key: 0, class: "view-box" },
  G = ["src"],
  J = ["src"],
  Q = ["href"],
  W = ["src"],
  X = { key: 1, style: { display: "inline-block", padding: "10px 15px" } },
  Y = d(
    "svg",
    {
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg",
      "data-v-ba633cb8": "",
    },
    [
      d("path", {
        fill: "currentColor",
        d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z",
      }),
    ],
    -1
  ),
  Z = [Y],
  ee = d(
    "div",
    { class: "icon-delete" },
    [
      d(
        "svg",
        {
          viewBox: "0 0 1024 1024",
          xmlns: "http://www.w3.org/2000/svg",
          "data-v-ba633cb8": "",
        },
        [
          d("path", {
            fill: "currentColor",
            d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z",
          }),
        ]
      ),
    ],
    -1
  ),
  te = { key: 5, class: "tip" };
function re(e, r, a, s, t, i) {
  const o = c("el-progress"),
    m = c("el-upload"),
    E = c("el-popconfirm"),
    I = c("el-input");
  return (
    l(),
    n(
      "div",
      {
        class: U([
          "el-single-upload",
          { [i.acceptClassName]: !0, input: a.input },
        ]),
      },
      [
        a.view && t.urlInternal
          ? (l(),
            n("div", R, [
              i.acceptClassName === "video"
                ? (l(),
                  n(
                    "video",
                    {
                      key: 0,
                      ref: "media",
                      class: "view",
                      controls: "",
                      preload: "metadata",
                      src: t.urlInternal,
                    },
                    null,
                    8,
                    G
                  ))
                : i.acceptClassName === "audio"
                ? (l(),
                  n(
                    "audio",
                    {
                      key: 1,
                      ref: "media",
                      class: "view",
                      controls: "",
                      preload: "metadata",
                      src: t.urlInternal,
                    },
                    null,
                    8,
                    J
                  ))
                : (l(),
                  n(
                    "a",
                    {
                      key: 2,
                      href: t.urlInternal,
                      target: "_blank",
                      class: "view",
                    },
                    [
                      i.acceptClassName === "image"
                        ? (l(),
                          n(
                            "img",
                            { key: 0, class: "img", src: t.urlInternal },
                            null,
                            8,
                            W
                          ))
                        : (l(),
                          n(
                            "span",
                            X,
                            v(t.file ? t.file.name : t.urlInternal),
                            1
                          )),
                    ],
                    8,
                    Q
                  )),
            ]))
          : u("", !0),
        t.percentage !== 100
          ? (l(),
            p(
              o,
              {
                key: 1,
                percentage: t.percentage,
                "text-inside": !0,
                "stroke-width": 20,
                format: i.progressFormat,
              },
              null,
              8,
              ["percentage", "format"]
            ))
          : u("", !0),
        e.$attrs.disabled
          ? u("", !0)
          : (l(),
            p(
              m,
              _(
                {
                  key: 2,
                  ref: "upload",
                  class: ["upload", { update: t.urlInternal }],
                },
                e.$attrs,
                {
                  action: "",
                  "before-upload": i.beforeUpload,
                  "http-request": i.requestUpload,
                  "on-progress": i.progressUpload,
                  "on-success": i.successUpload,
                  "on-error": i.errorUpload,
                  accept: a.accept,
                  drag: a.drag,
                  multiple: !1,
                  "show-file-list": !1,
                }
              ),
              {
                default: b(() => [
                  d(
                    "div",
                    {
                      class: U(
                        `el-icon-upload ${
                          t.urlInternal ? "re-upload-btn" : "upload-btn"
                        }`
                      ),
                    },
                    Z,
                    2
                  ),
                ]),
                _: 1,
              },
              16,
              [
                "class",
                "before-upload",
                "http-request",
                "on-progress",
                "on-success",
                "on-error",
                "accept",
                "drag",
              ]
            )),
        t.urlInternal && a.deleteButton && !e.$attrs.disabled
          ? (l(),
            p(
              E,
              _(
                { key: 3, title: "\u60A8\u786E\u8BA4\u5220\u9664\uFF1F" },
                e.$attrs,
                { "button-show": !1, onConfirm: i.deleteConfirm }
              ),
              { reference: b(() => [ee]), _: 1 },
              16,
              ["onConfirm"]
            ))
          : u("", !0),
        a.input
          ? (l(),
            p(
              I,
              {
                key: 4,
                modelValue: t.urlInternal,
                "onUpdate:modelValue":
                  r[0] || (r[0] = (g) => (t.urlInternal = g)),
                placeholder:
                  e.$attrs.placeholder ||
                  "\u6587\u4EF6\u94FE\u63A5\u5730\u5740",
                disabled: e.$attrs.disabled,
                readonly: t.readonlyInternal,
                onBlur: r[1] || (r[1] = (g) => i.setUrl(t.urlInternal)),
              },
              null,
              8,
              ["modelValue", "placeholder", "disabled", "readonly"]
            ))
          : u("", !0),
        a.tip ? (l(), n("div", te, v(a.tip), 1)) : u("", !0),
        A(e.$slots, "default"),
      ],
      2
    )
  );
}
var h = x(K, [["render", re]]);
const w = Object.assign(h, {
  install: (
    e,
    r = typeof window != "undefined" &&
    window.ElSingleUploadOptions &&
    typeof window.ElSingleUploadOptions == "object"
      ? window.ElSingleUploadOptions
      : {}
  ) => {
    Object.assign(w.props, r), e.component(h.name, h);
  },
});
const f = L(H);
f.use(V);
f.use(w);
f.mount("#app");
