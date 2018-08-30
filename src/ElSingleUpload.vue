<template>
  <div class="el-single-upload" :class="{[type]:true, 'input':input}">
    <template class="view-box" v-if="urlInternal">
      <video ref="media" class="view" controls :src="urlInternal" v-if="type==='video'"></video>
      <audio ref="media" class="view" controls :src="urlInternal" v-else-if="type==='audio'"></audio>
      <a :href="urlInternal" target="_blank" class="view" v-else><img class="img" :src="urlInternal"
                                                                      v-if="type==='image'"/><span
        style="display:inline-block;padding: 10px 15px;" v-else>{{file?file.name:urlInternal}}</span></a>
    </template>
    <el-progress :percentage="percentage" v-if="percentage!==100"/>
    <el-upload class="upload" :class="{update:urlInternal}" ref="upload" v-bind="$attrs"
               action=""
               :before-upload="beforeUpload"
               :http-request="requestUpload"
               :on-progress="progressUpload"
               :on-success="successUpload"
               :on-error="errorUpload"
               :accept="type&&`${type}/*`"
               :drag="drag"
               :multiple="false"
               :show-file-list="false"
    >
      <i class="re-upload-btn el-icon-upload" v-if="urlInternal && !disabled"></i>
      <i class="upload-btn el-icon-upload" v-else-if="!disabled"></i>
    </el-upload>
    <el-popover-dialog v-bind="$attrs"
                       class="icon-delete" :btn-show="false" @confirm="delConfirm"
                       v-if="urlInternal && del && !disabled">
      <i class="el-icon-delete" slot="reference"></i>
    </el-popover-dialog>
    <el-input v-model="urlInternal" @blur="setUrl(urlInternal)" :disabled="disabled" :readonly="readonly" v-if="input"/>
    <div class="tip" v-if="tip">{{tip}}</div>
    <slot/>
  </div>
</template>
<script>
  import { Progress, Upload, Input, Message } from 'element-ui'
  import checkUpload from '@panhezeng/utils/dist/check-upload.js'
  import getObjectItemByPath from '@panhezeng/utils/dist/get-object-item-by-path.js'
  import ElPopoverDialog from '@panhezeng/el-popover-dialog'

  export default {
    name: 'ElSingleUpload',
    components: {'el-progress': Progress, 'el-upload': Upload, 'el-input': Input, ElPopoverDialog},
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
        default: 'data.url'
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
      // 限制大小，单位KB
      size: {
        type: Number,
        default: 2048
      },
      // 上传文件类型
      type: {
        validator (value) {
          return ['image', 'audio', 'video', 'text', 'application', ''].includes(value)
        },
        default: 'image'
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
    data () {
      return {
        file: null,
        urlInternal: '',
        percentage: 100
      }
    },
    watch: {
      url: {
        immediate: true,
        handler (val, oldVal) { this.setUrl(val) }
      }
    },
    methods: {
      setUrl (val) {
        // 如果地址有效则赋值，否则重置为空
        let checkUrl = Object.prototype.toString.call(val) === '[object String]'
        if (checkUrl) {
          checkUrl = /^https?:\/\//i.test(val)
//          if (this.type === 'image') {
//            checkUrl = /^https?:\/\/.*\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(val)
//          } else if (this.type === 'audio' || this.type === 'video') {
//            checkUrl = /^https?:\/\/.*\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(val)
//          }
        }
        if (checkUrl) {
          this.urlInternal = val
          this.$nextTick(function () {
            if (this.$refs.media) {
              this.$refs.media.addEventListener('loadedmetadata', event => {
                this.$emit('media-duration', this.$refs.media.duration)
                console.log(this.$refs.media.duration)
              }, true)
              this.$refs.media.addEventListener('error', event => {
                this.$emit('media-load-error', event)
//                this.setUrl()
              }, true)
            }
          })
        } else {
          this.file = null
          this.urlInternal = ''
          if (this.$refs.upload) this.$refs.upload.clearFiles()
          this.$emit('media-duration', '')
        }
        // 如果内部和外部不一样，则同步地址
        if (this.urlInternal !== this.url) {
          this.$emit('update:url', this.urlInternal)
        }
      },
      beforeUpload (file) {
        this.file = file
        const result = checkUpload(file, this.type, this.size)
        if (this.checkUpload) {
          return this.checkUpload(file, result)
        } else {
          if (result.message) Message.error(result.message)
          return result.validate
        }
      },
      requestUpload (option) {
        console.log('option.data', option.data)
        return this.upload(option)
      },
      progressUpload (event, file) {
        console.log('event, file', event, file)
        let percentage = parseInt(event.percent)
        if (percentage >= 100) percentage = 99
        this.percentage = percentage
      },
      successUpload (response) {
        console.log('response', response)
        this.setUrl(getObjectItemByPath(response, this.resPathOfUrl))
        this.percentage = 100
      },
      errorUpload (err, file) {
        this.percentage = 100
        if (this.error) {
          this.error(err, file)
        } else {
          Message.error('上传失败')
        }
      },
      delConfirm () {
        this.setUrl()
      }
    }
  }
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
        margin: 0;
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
      right: -25px;
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
      font-size: 28px;
    }

    .el-icon-upload {
      font-size: 22px;
      color: #8c939d;
      background: #ffffff;
      &:hover {
        color: #20a0ff;
      }
    }

    .icon-delete {
      position: absolute;
      top: 26px;
      right: -25px;
      font-size: 23px;
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
    }

    .tip {
      padding: 10px 0;
      text-align: center;
    }

    &.image, &.video {
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
