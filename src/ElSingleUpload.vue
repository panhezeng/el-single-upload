<template>
  <div
    class="el-single-upload"
    :class="{ [typeClassName]: true, input: input }"
  >
    <template class="view-box" v-if="view && urlInternal">
      <video
        ref="media"
        class="view"
        controls
        :src="urlInternal"
        v-if="typeClassName === 'video'"
      ></video>
      <audio
        ref="media"
        class="view"
        controls
        :src="urlInternal"
        v-else-if="typeClassName === 'audio'"
      ></audio>
      <a :href="urlInternal" target="_blank" class="view" v-else
        ><img
          class="img"
          :src="urlInternal"
          v-if="typeClassName === 'image'"
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
      :btn-show="false"
      @confirm="delConfirm"
      v-if="urlInternal && del && !$attrs.disabled"
    >
      <i class="el-icon-delete" slot="reference"></i>
    </el-popover-dialog>
    <el-input
      :placeholder="$attrs.placeholder || '文件链接地址'"
      v-model="urlInternal"
      @blur="setUrl(urlInternal)"
      :disabled="$attrs.disabled"
      :readonly="readonly"
      v-if="input"
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
      required: true
    },
    // 上传前检查方法，第一个参数是上传文件数据，第二个参数是内部检查结果，方法必须返回布尔值，不是必须，默认走内部checkUpload逻辑
    checkUpload: Function,
    // 上传结果错误处理，不是必须，默认走内部错误逻辑
    error: Function,
    // 是否需要删除功能
    del: {
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
      type: Number
    },
    // 上传文件类型，和HTML的input元素的accept属性一样，支持用逗号分隔的MIME类型或者.文件后缀名组成的字符串，默认只能传图片，如果传空字符串，则不限制类型
    type: {
      validator(value) {
        return (
          value === "" || /^(image|audio|video|text|application|\.)/.test(value)
        );
      },
      default: "image"
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
    // 组件下方显示的提示文本内容
    tip: String
  },
  data() {
    return {
      file: null,
      urlInternal: "",
      percentage: 100
    };
  },
  watch: {
    url: {
      immediate: true,
      handler(val, oldVal) {
        this.setUrl(val);
      }
    }
  },
  computed: {
    accept() {
      if (/^(image|audio|video|text)$/.test(this.type)) {
        return `${this.type}/*`;
      } else {
        return this.type;
      }
    },
    typeClassName() {
      if (
        /^\.(png|jpe?g|gif|svg|webp)/.test(this.type) ||
        /^image/.test(this.type)
      ) {
        return "image";
      } else if (
        /^\.(ogg|mp3|wav|flac|aac)/.test(this.type) ||
        /^audio/.test(this.type)
      ) {
        return "audio";
      } else if (/^\.(mp4|webm)/.test(this.type) || /^video/.test(this.type)) {
        return "video";
      } else {
        return "";
      }
    }
  },
  methods: {
    setUrl(val) {
      // 如果地址有效则赋值，否则重置为空
      let checkUrl = Object.prototype.toString.call(val) === "[object String]";
      if (checkUrl) {
        checkUrl = /^https?:\/\//i.test(val);
        //          if (this.type === 'image') {
        //            checkUrl = /^https?:\/\/.*\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(val)
        //          } else if (this.type === 'audio' || this.type === 'video') {
        //            checkUrl = /^https?:\/\/.*\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(val)
        //          }
      }
      if (checkUrl) {
        this.urlInternal = val;
        this.$nextTick(function() {
          if (this.$refs.media) {
            this.$refs.media.addEventListener(
              "loadedmetadata",
              event => {
                this.$emit("media-duration", this.$refs.media.duration);
                this.$emit("media", this.$refs.media);
                //                console.log(this.$refs.media.duration)
              },
              true
            );
            this.$refs.media.addEventListener(
              "error",
              event => {
                this.$emit("media-load-error", event);
                //                this.setUrl()
              },
              true
            );
          }
        });
      } else {
        this.file = null;
        this.$emit("file", this.file);
        this.urlInternal = "";
        if (this.$refs.upload) this.$refs.upload.clearFiles();
        this.$emit("media-duration", "");
        this.$emit("media", null);
      }
      // 如果内部和外部不一样，则同步地址
      if (this.urlInternal !== this.url) {
        this.$emit("update:url", this.urlInternal);
      }
    },
    beforeUpload(file) {
      this.file = file;
      this.$emit("file", this.file);
      const result = checkUpload(file, this.type, this.size);
      if (this.checkUpload) {
        return this.checkUpload(file, result);
      } else {
        if (result.message) Message.error(result.message);
        return result.validate;
      }
    },
    requestUpload(option) {
      this.$emit("request-upload", option);
      //        console.log('option.data', option.data)
      return this.upload(option);
    },
    progressUpload(event, file) {
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
      this.$emit("finish-upload");
    },
    errorUpload(err, file) {
      this.percentage = 100;
      if (this.error) {
        this.error(err, file);
      } else {
        Message.error("上传失败");
      }
      this.setUrl();
      this.$emit("error-upload", { err, file });
      this.$emit("finish-upload");
    },
    delConfirm() {
      this.setUrl();
    }
  }
};
</script>
<style lang="less">
.el-single-upload {
  position: relative;
  width: 300px;
  height: 90px;
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
