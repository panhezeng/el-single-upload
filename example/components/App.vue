<template>
  <div id="app">
    <!--<el-single-upload :url.sync="url" :upload="upload"/>-->
    <el-single-upload :url.sync="url"/>
  </div>
</template>

<script>
  import UCloudUFile from '@panhezeng/ucloud-ufile'
  //  import '../../dist/el-single-upload.min.js'
  //  import Vue from 'vue'
  //    import ElSingleUpload from '../../dist/el-single-upload.min.js'
  //    const ElSingleUpload = require('../../dist/el-single-upload.min.js')

  const ufile = new UCloudUFile('example-ucloud', 'https://easy-mock.com/mock/5ae1806b6ad7b17bb7d2cb58/element-ui-plus/upload/example', 'https://easy-mock.com/mock/5ae1806b6ad7b17bb7d2cb58/element-ui-plus/upload/token')

  function upload (option) {
    const file = option.file
    if (Object.prototype.toString.call(file) !== '[object File]') {
      throw new Error('file参数必须为File数据类型')
    }

    return new Promise((resolve, reject) => {

      if (ufile.uploading) {
        console.log('上传中，稍等')
        return
      } else {
        ufile.uploading = true
      }

      ufile.PREFIX = `Items/11933/${file.type}`

      const success = (res) => {
        if (Object.prototype.toString.call(res) !== '[object Object]') {
          res = {Key: file.name}
        }
        res.url = `http://digital.hammacher.com/${res.Key}`
        ufile.uploading = false
        console.log('success', res)
        resolve({data: res})
      }

      const error = (res) => {
        ufile.uploading = false
        reject(new Error('上传失败'))
      }

      const progress = (res) => {
        if (Object.prototype.toString.call(res) !== '[object Object]') {
          res = {value: 0}
        }
        console.log('progress', res)
//          var tips = ''
//          if (res.status == 'init') {
//            tips = '初始化分片：'
//          } else if (res.status == 'uploading') {
//            tips = '分片上传中：'
//          } else if (res.status == 'uploaded') {
//            tips = '完成分片：'
//          }
//          var percentComplete = (res.value * 100) + '%'
        res.percent = res.value * 100
      }

      ufile.hitSliceUpload(file, success, error, progress)
    })
  }

  window.ElSingleUploadOptions = {upload: upload}
  require('../../dist/el-single-upload.min.js')

//  Vue.use(ElSingleUpload(), {upload: upload})

  //  const ElSingleUpload = () => {
  //    return import('../../dist/el-single-upload.min.js').then(res => {
  //      Object.assign(res.props.upload, {
  //        required: false,
  //        default: upload
  //      })
  //      return Promise.resolve(res)
  //    })
  //  }

  export default {
    name: 'App',
//    components: {ElSingleUpload},
    data () {
      return {
        url: ''
      }
    },
    computed: {
      upload () {
        return upload
      }
    },
    methods: {}
  }
</script>

