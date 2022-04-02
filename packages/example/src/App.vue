<template>
  <h1>上传的mock演示，response永远是一样的数据</h1>
  <!--<el-single-upload v-model:url="data.url" :upload="upload"/>-->
  <!--<el-single-upload v-model:url="data.url" :disabled="true"/>-->
  <!--<el-single-upload v-model:url="data.url" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>-->
  <!--    <el-single-upload-->
  <!--      v-model:url="data.url"-->
  <!--      :view="false"-->
  <!--      accept=".xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"-->
  <!--    />-->
  <!--  <el-single-upload v-model:url="data.url" accept="audio/*"/>-->
  <!--        <el-single-upload v-model:url="data.url" accept="image/*" />-->
  <!--    <el-single-upload-->
  <!--      v-model:url="data.url"-->
  <!--      accept="image/*"-->
  <!--      :image-dimensions="{ width: 50, height: 50 }"-->
  <!--      @blur="eventLog('blur')"-->
  <!--      @request-upload="eventLog('request-upload')"-->
  <!--      @delete-confirm="eventLog('delete-confirm')"-->
  <!--    />-->
  <el-single-upload v-model:url="data.url" :upload="upload" />
  <!--  <el-single-upload v-model:url="data.url" accept=".mp4" />-->
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

// import ElSingleUpload from "@panhezeng/el-single-upload";

export default defineComponent({
  name: "App",
  components: {
    // ElSingleUpload,
  },
  setup() {
    const data = reactive({ url: "" });

    function upload(option: any) {
      const file = option.file;
      if (Object.prototype.toString.call(file) !== "[object File]") {
        throw new Error("file参数必须为File数据类型");
      }

      return new Promise((resolve) => {
        const success = (res: any) => {
          if (Object.prototype.toString.call(res) !== "[object Object]") {
            res = { Key: file.name };
          }
          // res.url = `http://dummyimage.com/200x100/50B347/FFF&text=${res.Key}`;
          res.url =
            "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
          // console.log("success", res);
          resolve({ data: res });
        };

        setTimeout(success, 300);
      });
    }

    return { data, upload };
  },
});
</script>

<style></style>
