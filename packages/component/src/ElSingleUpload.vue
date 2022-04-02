<template>
  <div class="el-single-upload" :class="{ [acceptClassName]: true, input }">
    <div v-if="view && urlInternal" class="view-box">
      <video
        v-if="acceptClassName === 'video'"
        ref="media"
        class="view"
        controls
        preload="metadata"
        :src="urlInternal"
      ></video>
      <audio
        v-else-if="acceptClassName === 'audio'"
        ref="media"
        class="view"
        controls
        preload="metadata"
        :src="urlInternal"
      ></audio>
      <a v-else :href="urlInternal" target="_blank" class="view"
        ><img
          v-if="acceptClassName === 'image'"
          class="img"
          :src="urlInternal"
        /><span v-else style="display: inline-block; padding: 10px 15px">{{
          file ? file.name : urlInternal
        }}</span></a
      >
    </div>
    <el-progress
      v-if="percentage !== 100"
      :percentage="percentage"
      :text-inside="true"
      :stroke-width="20"
      :format="progressFormat"
    />
    <el-upload
      v-if="!$attrs.disabled"
      ref="upload"
      class="upload"
      :class="{ update: urlInternal }"
      v-bind="$attrs"
      action=""
      :before-upload="beforeUpload"
      :http-request="requestUpload"
      :on-progress="progressUpload"
      :on-success="successUpload"
      :on-error="errorUpload"
      :accept="accept"
      :drag="drag"
      :multiple="false"
      :show-file-list="false"
    >
      <div
        :class="`el-icon-upload ${
          urlInternal ? 're-upload-btn' : 'upload-btn'
        }`"
      >
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          data-v-ba633cb8=""
        >
          <path
            fill="currentColor"
            d="M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
          ></path>
        </svg>
      </div>
    </el-upload>
    <el-popconfirm
      v-if="urlInternal && deleteButton && !$attrs.disabled"
      title="您确认删除？"
      v-bind="$attrs"
      :button-show="false"
      @confirm="deleteConfirm"
    >
      <template #reference>
        <div class="icon-delete">
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-ba633cb8=""
          >
            <path
              fill="currentColor"
              d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
            ></path>
          </svg>
        </div>
      </template>
    </el-popconfirm>
    <el-input
      v-if="input"
      v-model="urlInternal"
      :placeholder="$attrs.placeholder || '文件链接地址'"
      :disabled="$attrs.disabled"
      :readonly="readonlyInternal"
      @blur="setUrl(urlInternal)"
    />
    <div v-if="tip" class="tip">{{ tip }}</div>
    <slot />
  </div>
</template>
<script>
import {
  ElProgress,
  ElUpload,
  ElInput,
  ElPopconfirm,
  ElMessage,
} from "element-plus";
import checkUpload from "@panhezeng/utils/dist/check-upload.js";
import getObjectItemByPath from "@panhezeng/utils/dist/get-object-item-by-path.js";

export default {
  name: "ElSingleUpload",
  components: {
    ElProgress,
    ElUpload,
    ElInput,
    ElPopconfirm,
  },
  inheritAttrs: false,
  props: {
    // 上传文件的方法
    upload: {
      required: true,
      type: Function,
    },
    // 从上传方法返回对象中获取url的path
    resPathOfUrl: {
      type: String,
      default: "data.url",
    },
    // 上传文件预览地址
    url: {
      type: null,
      required: true,
    },
    // 上传前检查方法，第一个参数是上传文件数据，第二个参数是内部检查结果，方法必须返回布尔值，不是必须，默认走内部checkUpload逻辑
    checkUpload: {
      type: Function,
      default: null,
    },
    // 上传结果错误处理，不是必须，默认走内部错误逻辑
    error: {
      type: Function,
      default: null,
    },
    // 是否需要显示删除按钮
    deleteButton: {
      type: Boolean,
      default: true,
    },
    // 是否需要预览功能
    view: {
      type: Boolean,
      default: true,
    },
    // size 单位KB，默认undefined，文件使用默认限制大小，如果不限制大小则传0
    size: {
      type: Number,
      default: undefined,
    },
    // 图片类型宽度高度限制，默认不限制
    imageDimensions: {
      validator(value) {
        return (
          /^\[object Object\]$/.test(Object.prototype.toString.call(value)) &&
          Object.prototype.hasOwnProperty.call(value, "width") &&
          Object.prototype.hasOwnProperty.call(value, "height")
        );
      },
      type: Object,
      default() {
        return {
          width: undefined,
          height: undefined,
        };
      },
    },
    // 和HTML的input元素的accept属性一样，支持用逗号分隔的MIME类型或者.文件后缀名组成的字符串，默认空字符串，不限制类型
    accept: {
      validator(value) {
        return (
          value === "" || /^(image|audio|video|text|application|\.)/.test(value)
        );
      },
      type: String,
      default: "",
    },
    // 是否显示文件url的文本框，用于编辑复制粘贴等需求
    input: {
      type: Boolean,
      default: true,
    },
    // 是否只读，如果只读，只能选择复制文件url地址，不能编辑
    readonly: {
      type: Boolean,
      default: false,
    },
    // 拖拽上传
    drag: {
      type: Boolean,
      default: true,
    },
    // 上传失败清空url
    errorUploadEmptyUrl: {
      type: Boolean,
      default: false,
    },
    // 组件下方显示的提示文本内容
    tip: {
      type: String,
      default: "",
    },
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
        el: null,
      },
    };
  },
  computed: {
    acceptClassName() {
      if (
        /^\.(png|jpe?g|gif|svg|webp)/i.test(this.accept) ||
        /^image/i.test(this.accept)
      ) {
        return "image";
      } else if (
        /^\.(ogg|mp3|wav|flac|aac)/i.test(this.accept) ||
        /^audio/i.test(this.accept)
      ) {
        return "audio";
      } else if (
        /^\.(mp4|webm)/i.test(this.accept) ||
        /^video/i.test(this.accept)
      ) {
        return "video";
      } else {
        return "";
      }
    },
  },
  watch: {
    url: {
      immediate: true,
      handler(val) {
        this.emptyUrl = true;
        this.setUrl(val);
        this.emptyUrl = this.errorUploadEmptyUrl;
      },
    },
    errorUploadEmptyUrl: {
      immediate: true,
      handler(val) {
        this.emptyUrl = val;
      },
    },
    readonly: {
      immediate: true,
      handler(val) {
        this.readonlyInternal = val;
      },
    },
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
    // reload() {
    //   if (this.$refs.media) {
    //     this.$refs.media.load();
    //   }
    // },
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
      // this.empty();
      // if (this.$refs.media) {
      this.$emit("media-load-error");
      // }
    },
    loadedmetadataHandler() {
      if (
        this.acceptClassName === "video" ||
        this.acceptClassName === "audio"
      ) {
        if (this.localMedia.duration) {
          this.emitMedia(true);
        } else {
          this.$nextTick().then(() => {
            // 如果是媒体文件，则监听媒体数据加载完成事件
            if (this.$refs.media) {
              this.$refs.media.addEventListener("loadedmetadata", () =>
                this.emitMedia()
              );
              if (this.$refs.media.readyState > 2) {
                this.emitMedia();
              }
              this.$refs.media.addEventListener(
                "error",
                this.emitMediaError.bind(this)
              );
              this.clearUploadTimeout();
              this.timeoutId = window.setTimeout(() => {
                this.emitMediaError();
              }, 60000);
            }
          });
        }
      }
    },
    setUrl(val) {
      if (Object.prototype.toString.call(val) === "[object String]") {
        // 如果地址有效则赋值，否则重置为空
        if (/^https?:\/\//i.test(val)) {
          this.urlInternal = val;
          this.loadedmetadataHandler();
        } else {
          this.empty(this.emptyUrl);
        }
        // 如果内部和外部不一样，则同步地址
        if (this.urlInternal !== this.url) {
          this.$emit("update:url", this.urlInternal);
        }
      }
    },
    beforeUpload(file) {
      // 开始上传后，不让编辑
      this.readonlyInternal = true;
      this.file = file;
      this.$emit("file", file);
      this.$emit("before-upload", file);
      if (this.checkUpload) {
        return this.checkUpload(file);
      } else {
        return new Promise((resolve, reject) => {
          checkUpload(
            file,
            this.accept,
            this.size,
            this.imageDimensions.width,
            this.imageDimensions.height
          ).then((result) => {
            if (result.validation) {
              if (
                this.acceptClassName === "video" ||
                this.acceptClassName === "audio"
              ) {
                this.localMedia.url = URL.createObjectURL(file);
                const mediaElement = (this.localMedia.el =
                  document.createElement(this.acceptClassName));
                mediaElement.preload = "metadata";
                mediaElement.addEventListener("loadedmetadata", () => {
                  this.localMedia.duration = mediaElement.duration;
                });
                mediaElement.addEventListener("error", () => {
                  this.localMedia.duration = 0;
                });
                mediaElement.src = this.localMedia.url;
              }
              // ElMessage.info("文件读取中...");
              resolve(true);
            } else {
              if (result.message) ElMessage.error(result.message);
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
      //        console.log('option.data', option.data)
      return this.upload(option);
    },
    progressUpload(event) {
      this.$emit("progress-upload", event);
      //        console.log('event, file', event, file)
      let percentage = 0;
      if (typeof event.percent === "number") {
        percentage = event.percent;
      }
      if (percentage >= 100) percentage = 99;
      this.percentage = Math.floor(percentage);
    },
    successUpload(response) {
      //        console.log('response', response)
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
        ElMessage.error("上传失败");
      }
      this.empty(this.emptyUrl);
      this.$emit("error-upload", { err, file });
      this.finishUpload();
    },
    finishUpload() {
      // 上传完成恢复
      this.readonlyInternal = this.readonly;
      this.$emit("finish-upload");
    },
    deleteConfirm() {
      this.$emit("delete-confirm");
      this.empty();
    },
    progressFormat() {
      if (this.percentage === 99) {
        return `文件上传中...`;
      } else if (this.percentage > 99) {
        return `文件上传完成`;
      } else {
        return `文件读取${this.percentage}%`;
      }
    },
  },
};
</script>
<style lang="less">
.el-single-upload {
  position: relative;
  width: 300px;
  display: inline-block;

  .check-can-play {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(#000, 0.6);
    color: #fff;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      padding: 10px;
    }
  }

  .view {
    line-height: 1;
    display: block;
    border: 1px solid #d9d9d9;
    width: calc(100% - 2px);
    height: 100%;
  }

  .upload {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    line-height: 1;
  }

  .el-upload-dragger {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    .el-icon-upload {
      font-size: 24px !important;
      margin: 0 0 0 2px;
      line-height: normal;
    }
  }

  &.input {
    .view {
      height: calc(100% - 40px);
    }

    .upload {
      height: calc(100% - 40px);
    }
  }

  .el-upload__input {
    display: none !important;
  }

  .el-upload {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .el-upload:hover {
    border-color: #20a0ff;
  }

  .upload.update {
    position: absolute;
    top: 0;
    right: -28px;
    z-index: 2;
    width: auto;
    height: auto;

    .el-upload {
      padding: 0 1px;
      width: auto;
      height: auto;
      border-left: none;
      border-radius: 0;
    }
  }

  .upload-btn {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px !important;
  }

  .el-icon-upload {
    font-size: 24px !important;
    color: #8c939d;
    background: #ffffff;
    width: 30px;
    height: 30px;
    &:hover {
      color: #20a0ff;
    }
  }

  .icon-delete {
    position: absolute;
    top: 28px;
    right: -28px;
    font-size: 24px !important;
    cursor: pointer;
    color: #8c939d;
    border: 1px dashed #d9d9d9;
    border-left: none;
    padding: 0 1px;
    line-height: 1;
    width: 30px;
    height: 30px;
    &:hover {
      border-color: #20a0ff;
      color: #20a0ff;
    }
  }

  .tip {
    padding: 10px 0;
    text-align: center;
  }

  &.image,
  &.video {
    width: 200px;
    height: 200px;

    .img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .el-progress-bar__innerText {
    color: #000;
  }
}
</style>
