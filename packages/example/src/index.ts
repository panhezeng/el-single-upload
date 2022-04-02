import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ElSingleUpload from "@panhezeng/el-single-upload";
import "@panhezeng/el-single-upload/dist/style.css";

const app = createApp(App);

app.use(ElementPlus);

app.use(ElSingleUpload);

app.mount("#app");
