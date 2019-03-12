<template>
  <div id="app">
    <h1>上传的mock演示，response永远是一样的数据</h1>
    <!--<el-single-upload :url.sync="url" :upload="upload"/>-->
    <!--<el-single-upload :url.sync="url" :disabled="true"/>-->
    <!--<el-single-upload :url.sync="url" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>-->
    <!--<el-single-upload :url.sync="url" accept=".xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>-->
    <!--<el-single-upload :url.sync="url" accept="audio/*"/>-->
    <!--<el-single-upload :url.sync="url" accept="image/*"/>-->
    <el-single-upload :url.sync="url" />
  </div>
</template>

<script>
import UCloudUFile from "@panhezeng/ucloud-ufile";
//  import '../../dist/el-single-upload.min.js'
//  import Vue from 'vue'
//    import ElSingleUpload from '../../dist/el-single-upload.min.js'
//    const ElSingleUpload = require('../../dist/el-single-upload.min.js')

const ufile = new UCloudUFile(
  "example-ucloud",
  "https://private-87040-publicexample.apiary-mock.com/upload",
  "https://private-87040-publicexample.apiary-mock.com/upload/token"
);

function upload(option) {
  const file = option.file;
  if (Object.prototype.toString.call(file) !== "[object File]") {
    throw new Error("file参数必须为File数据类型");
  }

  return new Promise((resolve, reject) => {
    ufile.PREFIX = `example/${file.type}`;

    const success = res => {
      if (Object.prototype.toString.call(res) !== "[object Object]") {
        res = { Key: file.name };
      }
      res.url = `http://dummyimage.com/200x100/50B347/FFF&text=${res.Key}`;
      console.log("success", res);
      resolve({ data: res });
    };

    const error = res => {
      reject(new Error("上传失败"));
    };

    const progress = res => {
      if (Object.prototype.toString.call(res) !== "[object Object]") {
        res = { value: 0 };
      }
      console.log("progress", res);
      //          var tips = ''
      //          if (res.status == 'init') {
      //            tips = '初始化分片：'
      //          } else if (res.status == 'uploading') {
      //            tips = '分片上传中：'
      //          } else if (res.status == 'uploaded') {
      //            tips = '完成分片：'
      //          }
      //          var percentComplete = (res.value * 100) + '%'
      res.percent = res.value * 100;
      option.onProgress(res);
    };

    ufile.hitSliceUpload(file, success, error, progress);
  });
}

window.ElSingleUploadOptions = { upload: upload };
require("../../dist/el-single-upload.min.js");

//  const ElSingleUpload = () => {
//    return import('../../dist/el-single-upload.min.js').then(res => {
//      Object.assign(res.props.upload, {
//        required: false,
//        default: upload
//      })
//      return Promise.resolve(res)
//    })
//  }

//  Vue.use(ElSingleUpload(), {upload: upload})

export default {
  name: "App",
  //    components: {ElSingleUpload},
  data() {
    return {
      url: ""
    };
  },
  computed: {
    upload() {
      return upload;
    }
  },
  methods: {}
};
</script>
