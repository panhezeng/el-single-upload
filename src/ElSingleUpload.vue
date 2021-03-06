<template>
  <div class="el-single-upload" :class="{ [acceptClassName]: true, input }">
    <template class="view-box" v-if="view && urlInternal">
      <video
        ref="media"
        class="view"
        controls
        :src="urlInternal"
        v-if="acceptClassName === 'video'"
      ></video>
      <audio
        ref="media"
        class="view"
        controls
        :src="urlInternal"
        v-else-if="acceptClassName === 'audio'"
      ></audio>
      <a :href="urlInternal" target="_blank" class="view" v-else
        ><img
          class="img"
          :src="urlInternal"
          v-if="acceptClassName === 'image'"
        /><span style="display:inline-block;padding: 10px 15px;" v-else>{{
          file ? file.name : urlInternal
        }}</span></a
      >
    </template>
    <el-progress :percentage="percentage" v-if="percentage !== 100" />
    <el-upload
      class="upload"
      :class="{ update: urlInternal }"
      ref="upload"
      v-bind="$attrs"
      v-if="!$attrs.disabled"
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
      <i class="re-upload-btn el-icon-upload" v-if="urlInternal"></i>
      <i class="upload-btn el-icon-upload" v-else></i>
    </el-upload>
    <el-popover-dialog
      v-bind="$attrs"
      class="icon-delete"
      :button-show="false"
      @confirm="deleteConfirm"
      v-if="urlInternal && deleteButton && !$attrs.disabled"
    >
      <i class="el-icon-delete" slot="reference"></i>
    </el-popover-dialog>
    <el-input
      v-if="input"
      v-model="urlInternal"
      :placeholder="$attrs.placeholder || '文件链接地址'"
      :disabled="$attrs.disabled"
      :readonly="readonlyInternal"
      @blur="setUrl(urlInternal)"
      v-on="$listeners"
    />
    <div class="tip" v-if="tip">{{ tip }}</div>
    <slot />
  </div>
</template>
<script>
import { Progress, Upload, Input, Message } from "element-ui";
import checkUpload from "@panhezeng/utils/dist/check-upload.js";
import getObjectItemByPath from "@panhezeng/utils/dist/get-object-item-by-path.js";
import ElPopoverDialog from "@panhezeng/el-popover-dialog";

export default {
  name: "ElSingleUpload",
  components: {
    "el-progress": Progress,
    "el-upload": Upload,
    "el-input": Input,
    ElPopoverDialog
  },
  inheritAttrs: false,
  props: {
    // 上传文件的方法
    upload: {
      required: true,
      type: Function
    },
    // 从上传方法返回对象中获取url的path
    resPathOfUrl: {
      type: String,
      default: "data.url"
    },
    // 上传文件预览地址
    url: {
      type: null,
      required: true
    },
    // 上传前检查方法，第一个参数是上传文件数据，第二个参数是内部检查结果，方法必须返回布尔值，不是必须，默认走内部checkUpload逻辑
    checkUpload: Function,
    // 上传结果错误处理，不是必须，默认走内部错误逻辑
    error: Function,
    // 是否需要显示删除按钮
    deleteButton: {
      type: Boolean,
      default: true
    },
    // 是否需要预览功能
    view: {
      type: Boolean,
      default: true
    },
    // size 单位KB，默认undefined，文件使用默认限制大小，如果不限制大小则传0
    size: {
      type: Number,
      default: undefined
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
          height: undefined
        };
      }
    },
    // 和HTML的input元素的accept属性一样，支持用逗号分隔的MIME类型或者.文件后缀名组成的字符串，默认空字符串，不限制类型
    accept: {
      validator(value) {
        return (
          value === "" || /^(image|audio|video|text|application|\.)/.test(value)
        );
      },
      type: String,
      default: ""
    },
    // 是否显示文件url的文本框，用于编辑复制粘贴等需求
    input: {
      type: Boolean,
      default: true
    },
    // 是否只读，如果只读，只能选择复制文件url地址，不能编辑
    readonly: {
      type: Boolean,
      default: false
    },
    // 拖拽上传
    drag: {
      type: Boolean,
      default: true
    },
    // 上传失败清空url
    errorUploadEmptyUrl: {
      type: Boolean,
      default: false
    },
    // 组件下方显示的提示文本内容
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
      readonlyInternal: false
    };
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
  computed: {
    acceptClassName() {
      if (
        /^\.(png|jpe?g|gif|svg|webp)/.test(this.accept) ||
        /^image/.test(this.accept)
      ) {
        return "image";
      } else if (
        /^\.(ogg|mp3|wav|flac|aac)/.test(this.accept) ||
        /^audio/.test(this.accept)
      ) {
        return "audio";
      } else if (
        /^\.(mp4|webm)/.test(this.accept) ||
        /^video/.test(this.accept)
      ) {
        return "video";
      } else {
        return "";
      }
    }
  },
  methods: {
    empty(emptyUrl = true) {
      if (emptyUrl) {
        this.urlInternal = "";
        if (this.$refs.upload) this.$refs.upload.clearFiles();
      }
      this.file = null;
      this.$emit("file", null);
      this.$emit("media-duration", "");
      this.$emit("media", null);
      this.$emit("update:url", this.urlInternal);
    },
    setUrl(val) {
      if (Object.prototype.toString.call(val) === "[object String]") {
        // 如果地址有效则赋值，否则重置为空
        if (/^https?:\/\//i.test(val)) {
          this.urlInternal = val;
        } else {
          this.empty(this.emptyUrl);
        }
        // 如果内部和外部不一样，则同步地址
        if (this.urlInternal !== this.url) {
          this.$emit("update:url", this.urlInternal);
        }
        this.$nextTick(function() {
          // 如果是媒体文件，则监听媒体数据加载完成事件
          if (this.$refs.media) {
            const emitMedia = () => {
              this.$emit("media-duration", this.$refs.media.duration);
              this.$emit("media", this.$refs.media);
              //                console.log(this.$refs.media.duration)
            };
            this.$refs.media.addEventListener(
              "loadedmetadata",
              () => {
                emitMedia();
              },
              true
            );
            if (this.$refs.media.readyState > 0) {
              emitMedia();
            }
            this.$refs.media.addEventListener(
              "error",
              event => {
                this.$emit("media-load-error", event);
              },
              true
            );
          }
        });
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
          ).then(result => {
            if (result.validation) {
              resolve();
            } else {
              if (result.message) Message.error(result.message);
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
    progressUpload(event, file) {
      this.$emit("progress-upload", event);
      //        console.log('event, file', event, file)
      let percentage = parseInt(event.percent);
      if (Object.prototype.toString.call(event.percent) === "[object Number]") {
        percentage = event.percent;
      }
      if (percentage >= 100) percentage = 99;
      this.percentage = percentage;
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
        Message.error("上传失败");
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
    }
  }
};
</script>
<style lang="less">
.el-single-upload {
  position: relative;
  width: 300px;
  display: inline-block;

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

    &:hover {
      border-color: #20a0ff;
      color: #20a0ff;
    }

    .el-icon-delete {
      margin-left: 2px;
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
}
</style>
