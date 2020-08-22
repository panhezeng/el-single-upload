const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  output: {
    filename: "el-single-upload.min.js",
    libraryTarget: "umd",
    umdNamedDefine: true,
    library: "ElSingleUpload",
    libraryExport: "ElSingleUpload",
  },
  externals: {
    "@panhezeng/utils/dist/check-upload.js": {
      commonjs: "@panhezeng/utils/dist/check-upload.js",
      commonjs2: "@panhezeng/utils/dist/check-upload.js",
      amd: "@panhezeng/utils/dist/check-upload.js",
      root: "checkUpload",
    },
    "@panhezeng/utils/dist/get-object-item-by-path.js": {
      commonjs: "@panhezeng/utils/dist/get-object-item-by-path.js",
      commonjs2: "@panhezeng/utils/dist/get-object-item-by-path.js",
      amd: "@panhezeng/utils/dist/get-object-item-by-path.js",
      root: "getObjectItemByPath",
    },
    "@panhezeng/el-popover-dialog": {
      commonjs: "@panhezeng/el-popover-dialog",
      commonjs2: "@panhezeng/el-popover-dialog",
      amd: "@panhezeng/el-popover-dialog",
      root: "ElPopoverDialog",
    },
    vue: {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue",
    },
    "element-ui": {
      commonjs: "element-ui",
      commonjs2: "element-ui",
      amd: "element-ui",
      root: "ELEMENT",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.((c|le)ss)$/i,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "media/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:7].[ext]",
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
