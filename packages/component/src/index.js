import _ElSingleUpload from "./ElSingleUpload.vue";
// 提供 app.use 注册组件方法

const ElSingleUpload = Object.assign(_ElSingleUpload, {
  install: (
    app,
    options = typeof window !== "undefined" &&
    window.ElSingleUploadOptions &&
    typeof window.ElSingleUploadOptions === "object"
      ? window.ElSingleUploadOptions
      : {}
  ) => {
    Object.assign(ElSingleUpload.props, options);
    app.component(_ElSingleUpload.name, _ElSingleUpload);
  },
});

export default ElSingleUpload;
