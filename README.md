# el-single-upload

## 示例

[点击预览](https://panhezeng.github.io/el-single-upload/)

示例代码目录 /example

示例使用的 apiary mock 服务每次 Request 获得的 Response 都是不变的。免费服务可能会出现无响应等错误。免费又稳定，限制少，支持 https 的 mock 也就 apiary。getsandbox 也不错就是每个月限制 5000 次请求。

## 说明

基于 element-ui 的 el-upload 组件的进一步封装，功能更单一，就是上传单个文件，增加常用功能，比如，检查校验，预览，删除，编辑等

首先请按 element-ui 官方文档安装 element-ui，确保能正常使用 element-ui

修改了 output 方式，通过 require 或 window 方式使用，不需要加.default

事件 this.$emit('request-upload', option)  this.$emit('success-upload', response) this.$emit('error-upload', {err, file}) this.$emit('finish-upload')

```vue
<script>
export default {
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
    // 和HTML的input元素的accept属性一样，支持用逗号分隔的MIME类型或者.文件后缀名组成的字符串，默认空字符串，不限制类型
    accept: {
      validator(value) {
        return (
          value === "" || /^(image|audio|video|text|application|\.)/.test(value)
        );
      },
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
    // 组件下方显示的提示文本内容
    tip: String
  }
};
</script>
```

## 用法

如果不希望每次使用组件时都显式传入 upload prop，则可以在全局注册组件前，通过 Vue.use 方式安装组件，给 use 传第二个参数，或者直接赋值 window.ElSingleUploadOptions，数据结构要求{upload:foo}。upload 是上传接口方法，这样后面多处使用该组件实例时就不需要显式传入 upload prop 了。
还有一种方法，就是再包一层，在包裹 js 里，直接修改此组件的 props，其他地方使用修改后的组件

`<el-single-upload :url.sync="url"/>`

### internal vue element-ui 方式

`npm i vue element-ui @panhezeng/el-single-upload -S`

#### 异步

```vue
<script>
const ElSingleUpload = () => import("@panhezeng/el-single-upload");

export default {
  components: { ElSingleUpload }
};
</script>
```

#### 同步

##### export default components

```vue
<script>
import ElSingleUpload from "@panhezeng/el-single-upload";

export default {
  components: { ElSingleUpload }
};
</script>
```

##### Vue.use

```vue
<script>
import Vue from "vue";
import ElSingleUpload from "@panhezeng/el-single-upload";

Vue.use(ElSingleUpload, { upload: upload });
</script>
```

### external vue element-ui 方式

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/element-ui@latest/lib/theme-chalk/index.css"
/>
<script src="https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/element-ui@latest/lib/index.js"></script>
```

`npm i @panhezeng/el-single-upload -S`

```javascript
// auto install
window.ElSingleUploadOptions = { upload: upload };
require("@panhezeng/el-single-upload");
```

or

```html
<!--auto install-->
<script>
  window.ElSingleUploadOptions = { upload: upload };
</script>
<script src="https://cdn.jsdelivr.net/npm/@panhezeng/el-single-upload@latest/dist/el-single-upload.min.js"></script>
```

## 编译

```bash
# install dependencies
npm install

# 运行插件使用示例
npm run dev:example

# 编译插件
npm run build

# 发版
npm version patch && npm publish --access public

```
