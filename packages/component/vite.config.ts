import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import copy from "rollup-plugin-copy";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // copy({
    //   targets: [{ src: "static/**/*", dest: "dist" }],
    //   hook: "writeBundle",
    // }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "ElSingleUpload",
      fileName: "el-single-upload",
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: [
        "vue",
        "element-plus",
        "@panhezeng/utils/dist/check-upload.js",
        "@panhezeng/utils/dist/get-object-item-by-path.js",
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "element-plus": "ElementPlus",
          "@panhezeng/utils/dist/check-upload.js": "checkUpload",
          "@panhezeng/utils/dist/get-object-item-by-path.js":
            "getObjectItemByPath",
        },
      },
    },
  },
});
