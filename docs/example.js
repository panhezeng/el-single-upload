!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=ELEMENT},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(11).default)("311e7b4e",r,!1,{})},function(e,t){e.exports=Vue},function(e,t){e.exports=UCloudUFile},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:NaN,r={message:"",error:0,validate:!0};if("[object File]"===Object.prototype.toString.call(e)){isNaN(n)&&(n=1024e3);var o=!0,i="",l=e.name.lastIndexOf(".");-1!==l&&(i=e.name.substring(l));var a=i?i.substring(1):e.type&&e.type.split("/")[0];e.type&&t&&(o=t.split(",").some(function(t){return(t=t.trim())&&(new RegExp("^".concat(t)).test(e.type)||new RegExp("^".concat(t)).test(i))}),isNaN(n)&&(/^\.(png|jpe?g|gif|svg|webp)/.test(i)||/^image/.test(e.type)?n=10240:(/^\.(ogg|mp3|wav|flac|aac)/.test(i)||/^audio/.test(e.type))&&(n=102400)));var s=!0;if(n&&(s=e.size/1024<n),o||(r.message="只能上传".concat(a,"!"),r.error=1,r.validate=!1),!s){var u=n>=1024?"".concat(n/1024,"M"):"".concat(n,"KB");r.message="上传".concat(a,"大小不能超过").concat(u,"!"),r.error=2,r.validate=!1}}else r.message="file参数必须为File数据类型",r.error=3,r.validate=!1;return r}}])},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}({4:function(e,t){e.exports=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e)&&"[object String]"===Object.prototype.toString.call(t)){for(var r=t.split("."),o=0,i=r.length;"[object Object]"===Object.prototype.toString.call(e)&&o<i;)e=e[r[o++]];return o&&o==i?e:n}return n}}})},function(e,t,n){var r;window,e.exports=(r=n(0),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=r},function(e,t,n){"use strict";n.r(t),n.d(t,"ElPopoverDialog",function(){return o});var r,o=n(2).default;function i(e){r?console.warn("[ElPopoverDialog] already installed. Vue.use(ElPopoverDialog) should be called only once."):(r=e).component(o.name,o)}o.install=i,"undefined"!=typeof window&&window.Vue&&i(window.Vue)},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-popover",e._g(e._b({staticClass:"popover-dialog",staticStyle:{"font-size":"0px"},attrs:{placement:e.$attrs.placement||"top"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},"el-popover",e.$attrs,!1),e.$listeners),[e.popoverContentShow?n("p",{staticClass:"popover-content"},[e._v(e._s(e.popoverContent))]):e._e(),e._v(" "),e._t("popover-content",null,{hide:e.hide}),e._v(" "),e.showConfirmButton||e.showCancelButton?n("div",{staticClass:"popover-btn",style:e.popoverBtnStyle},[e.showCancelButton?n("el-button",{staticClass:"cancel-btn",attrs:{type:"text",size:"mini"},on:{click:e.cancel}},[e._v(e._s(e.cancelButtonText)+"\n    ")]):e._e(),e._v(" "),e.showConfirmButton?n("el-button",{staticClass:"confirm-btn",attrs:{type:"primary",size:"mini"},on:{click:e.confirm}},[e._v("\n      "+e._s(e.confirmButtonText)+"\n    ")]):e._e(),e._v(" "),e._t("popover-btn",null,{hide:e.hide})],2):e._e(),e._v(" "),n("span",{staticClass:"reference",attrs:{slot:"reference"},slot:"reference"},[e.btnShow?n("el-button",e._b({staticClass:"reference-btn",style:e.btnStyle,attrs:{size:e.btnSize,type:e.btnType}},"el-button",e.$attrs,!1),[e._v(e._s(e.btnTxt)+"\n    ")]):e._e(),e._v(" "),e._t("reference",null,{hide:e.hide})],2)],2)};r._withStripped=!0;var o=n(0),i=function(e,t,n,r,o,i,l,a){var s,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=[],u._compiled=!0),s)if(u.functional){u._injectStyles=s;var p=u.render;u.render=function(e,t){return s.call(t),p(e,t)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,s):[s]}return{exports:e,options:u}}({name:"ElPopoverDialog",components:{"el-button":o.Button,"el-popover":o.Popover},inheritAttrs:!1,props:{popoverContentShow:{type:Boolean,default:!0},popoverContent:{type:String,default:"确认要删除？"},popoverBtnStyle:{type:String,default:"text-align: right; margin: 0"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0},cancelButtonText:{type:String,default:"取消"},confirmButtonText:{type:String,default:"确定"},btnShow:{type:Boolean,default:!0},btnTxt:{type:String,default:"删除"},btnType:{type:String,default:"text"},btnSize:{type:String,default:""},btnStyle:{type:String,default:"color:#f56c6c; margin-right: 0 !important;"},confirmHide:{type:Boolean,default:!0}},data:function(){return{visible:!1}},methods:{cancel:function(){this.visible=!1,this.$emit("cancel")},confirm:function(){this.confirmHide&&(this.visible=!1),this.$emit("confirm")},hide:function(e){this.visible=!1,"[object Function]"===Object.prototype.toString.call(e)&&e()}}},r);i.options.__file="src/ElPopoverDialog.vue",t.default=i.exports}]).ElPopoverDialog)},function(e,t,n){"use strict";var r=n(1);n.n(r).a},function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".el-single-upload {\n  position: relative;\n  width: 300px;\n  height: 90px;\n  display: inline-block;\n}\n.el-single-upload .view {\n  line-height: 1;\n  display: block;\n  border: 1px solid #d9d9d9;\n  width: calc(100% - 2px);\n  height: 100%;\n}\n.el-single-upload .upload {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  position: relative;\n  line-height: 1;\n}\n.el-single-upload .el-upload-dragger {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n.el-single-upload .el-upload-dragger .el-icon-upload {\n  font-size: 24px !important;\n  margin: 0 0 0 2px;\n  line-height: normal;\n}\n.el-single-upload.input .view {\n  height: calc(100% - 40px);\n}\n.el-single-upload.input .upload {\n  height: calc(100% - 40px);\n}\n.el-single-upload .el-upload__input {\n  display: none !important;\n}\n.el-single-upload .el-upload {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.el-single-upload .el-upload:hover {\n  border-color: #20a0ff;\n}\n.el-single-upload .upload.update {\n  position: absolute;\n  top: 0;\n  right: -28px;\n  z-index: 2;\n  width: auto;\n  height: auto;\n}\n.el-single-upload .upload.update .el-upload {\n  padding: 0 1px;\n  width: auto;\n  height: auto;\n  border-left: none;\n  border-radius: 0;\n}\n.el-single-upload .upload-btn {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px !important;\n}\n.el-single-upload .el-icon-upload {\n  font-size: 24px !important;\n  color: #8c939d;\n  background: #ffffff;\n}\n.el-single-upload .el-icon-upload:hover {\n  color: #20a0ff;\n}\n.el-single-upload .icon-delete {\n  position: absolute;\n  top: 28px;\n  right: -28px;\n  font-size: 24px !important;\n  cursor: pointer;\n  color: #8c939d;\n  border: 1px dashed #d9d9d9;\n  border-left: none;\n  padding: 0 1px;\n  line-height: 1;\n}\n.el-single-upload .icon-delete:hover {\n  border-color: #20a0ff;\n  color: #20a0ff;\n}\n.el-single-upload .icon-delete .el-icon-delete {\n  margin-left: 2px;\n}\n.el-single-upload .tip {\n  padding: 10px 0;\n  text-align: center;\n}\n.el-single-upload.image,\n.el-single-upload.video {\n  width: 200px;\n  height: 200px;\n}\n.el-single-upload.image .img,\n.el-single-upload.video .img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(l=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var l;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var l=e[o];null!=l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("上传的mock演示，response永远是一样的数据")]),e._v(" "),n("el-single-upload",{attrs:{url:e.url,accept:"image/*"},on:{"update:url":function(t){e.url=t},blur:function(t){return e.eventLog("blur")},"request-upload":function(t){return e.eventLog("request-upload")},del:function(t){return e.eventLog("del")}}})],1)};i._withStripped=!0;var l=n(3),a=n.n(l),s=function(){var e,t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"el-single-upload",class:(e={},e[t.acceptClassName]=!0,e.input=t.input,e)},[t.view&&t.urlInternal?["video"===t.acceptClassName?r("video",{ref:"media",staticClass:"view",attrs:{controls:"",src:t.urlInternal}}):"audio"===t.acceptClassName?r("audio",{ref:"media",staticClass:"view",attrs:{controls:"",src:t.urlInternal}}):r("a",{staticClass:"view",attrs:{href:t.urlInternal,target:"_blank"}},["image"===t.acceptClassName?r("img",{staticClass:"img",attrs:{src:t.urlInternal}}):r("span",{staticStyle:{display:"inline-block",padding:"10px 15px"}},[t._v(t._s(t.file?t.file.name:t.urlInternal))])])]:t._e(),t._v(" "),100!==t.percentage?r("el-progress",{attrs:{percentage:t.percentage}}):t._e(),t._v(" "),t.$attrs.disabled?t._e():r("el-upload",t._b({ref:"upload",staticClass:"upload",class:{update:t.urlInternal},attrs:{action:"","before-upload":t.beforeUpload,"http-request":t.requestUpload,"on-progress":t.progressUpload,"on-success":t.successUpload,"on-error":t.errorUpload,accept:t.accept,drag:t.drag,multiple:!1,"show-file-list":!1}},"el-upload",t.$attrs,!1),[t.urlInternal?r("i",{staticClass:"re-upload-btn el-icon-upload"}):r("i",{staticClass:"upload-btn el-icon-upload"})]),t._v(" "),t.urlInternal&&t.del&&!t.$attrs.disabled?r("el-popover-dialog",t._b({staticClass:"icon-delete",attrs:{"btn-show":!1},on:{confirm:t.delConfirm}},"el-popover-dialog",t.$attrs,!1),[r("i",{staticClass:"el-icon-delete",attrs:{slot:"reference"},slot:"reference"})]):t._e(),t._v(" "),t.input?r("el-input",t._g({attrs:{placeholder:t.$attrs.placeholder||"文件链接地址",disabled:t.$attrs.disabled,readonly:t.readonly},on:{blur:function(e){return t.setUrl(t.urlInternal)}},model:{value:t.urlInternal,callback:function(e){t.urlInternal=e},expression:"urlInternal"}},t.$listeners)):t._e(),t._v(" "),t.tip?r("div",{staticClass:"tip"},[t._v(t._s(t.tip))]):t._e(),t._v(" "),t._t("default")],2)};s._withStripped=!0;var u=n(0),p=n(4),c=n.n(p),d=n(5),f=n.n(d),g=n(6),h=n.n(g),v={name:"ElSingleUpload",components:{"el-progress":u.Progress,"el-upload":u.Upload,"el-input":u.Input,ElPopoverDialog:h.a},inheritAttrs:!1,props:{upload:{required:!0,type:Function},resPathOfUrl:{type:String,default:"data.url"},url:{type:null,required:!0},checkUpload:Function,error:Function,del:{type:Boolean,default:!0},view:{type:Boolean,default:!0},size:{type:Number,default:void 0},accept:{validator:function(e){return""===e||/^(image|audio|video|text|application|\.)/.test(e)},default:""},input:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},drag:{type:Boolean,default:!0},errorUploadEmptyUrl:{type:Boolean,default:!1},tip:{type:String,default:""}},data:function(){return{file:null,urlInternal:"",percentage:100}},watch:{url:{immediate:!0,handler:function(e){this.setUrl(e)}}},computed:{acceptClassName:function(){return/^\.(png|jpe?g|gif|svg|webp)/.test(this.accept)||/^image/.test(this.accept)?"image":/^\.(ogg|mp3|wav|flac|aac)/.test(this.accept)||/^audio/.test(this.accept)?"audio":/^\.(mp4|webm)/.test(this.accept)||/^video/.test(this.accept)?"video":""}},methods:{empty:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(this.urlInternal="",this.$refs.upload&&this.$refs.upload.clearFiles()),this.file=null,this.$emit("file",null),this.$emit("media-duration",""),this.$emit("media",null),this.$emit("update:url",this.urlInternal)},setUrl:function(e){"[object String]"===Object.prototype.toString.call(e)&&(/^https?:\/\//i.test(e)?this.urlInternal=e:this.empty(this.errorUploadEmptyUrl),this.urlInternal!==this.url&&this.$emit("update:url",this.urlInternal),this.$nextTick(function(){var e=this;if(this.$refs.media){var t=function(){e.$emit("media-duration",e.$refs.media.duration),e.$emit("media",e.$refs.media)};this.$refs.media.addEventListener("loadedmetadata",function(){t()},!0),this.$refs.media.readyState>0&&t(),this.$refs.media.addEventListener("error",function(t){e.$emit("media-load-error",t)},!0)}}))},beforeUpload:function(e){this.file=e,this.$emit("file",e),this.$emit("before-upload",e);var t=c()(e,this.accept,this.size);return this.checkUpload?this.checkUpload(e,t):(t.message&&u.Message.error(t.message),t.validate)},requestUpload:function(e){return this.$emit("request-upload",e),this.upload(e)},progressUpload:function(e,t){this.$emit("progress-upload",e);var n=parseInt(e.percent);"[object Number]"===Object.prototype.toString.call(e.percent)&&(n=e.percent),n>=100&&(n=99),this.percentage=n},successUpload:function(e){this.setUrl(f()(e,this.resPathOfUrl)),this.percentage=100,this.$emit("success-upload",e),this.$emit("finish-upload")},errorUpload:function(e,t){this.percentage=100,this.error?this.error(e,t):u.Message.error("上传失败"),this.empty(this.errorUploadEmptyUrl),this.$emit("error-upload",{err:e,file:t}),this.$emit("finish-upload")},delConfirm:function(){this.$emit("del"),this.empty()}}};n(7);function m(e,t,n,r,o,i,l,a){var s,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),l?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},u._ssrRegister=s):o&&(s=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var p=u.render;u.render=function(e,t){return s.call(t),p(e,t)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,s):[s]}return{exports:e,options:u}}var b=m(v,s,[],!1,null,null,null);b.options.__file="src/ElSingleUpload.vue";var y=b.exports,_=new a.a("example-ucloud","https://private-87040-publicexample.apiary-mock.com/upload","https://private-87040-publicexample.apiary-mock.com/upload/token");function x(e){var t=e.file;if("[object File]"!==Object.prototype.toString.call(t))throw new Error("file参数必须为File数据类型");return new Promise(function(n,r){_.PREFIX="example/".concat(t.type);_.hitSliceUpload(t,function(e){"[object Object]"!==Object.prototype.toString.call(e)&&(e={Key:t.name}),e.url="http://dummyimage.com/200x100/50B347/FFF&text=".concat(e.Key),console.log("success",e),n({data:e})},function(e){r(new Error("上传失败"))},function(t){"[object Object]"!==Object.prototype.toString.call(t)&&(t={value:0}),console.log("progress",t),t.percent=100*t.value,e.onProgress(t)})})}Object.assign(y.props.upload,{required:!1,default:x});var S=m({name:"App",components:{ElSingleUpload:y},data:function(){return{url:""}},computed:{upload:function(){return x}},methods:{eventLog:function(e){console.log(e)}}},i,[],!1,null,null,null);S.options.__file="example/components/App.vue";var w=S.exports;new o.a({el:"#app",render:function(e){return e(w)}})},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],l=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[l]?r[l].parts.push(a):n.push(r[l]={id:l,parts:[a]})}return n}n.r(t),n.d(t,"default",function(){return g});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},l=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,s=0,u=!1,p=function(){},c=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(e,t,n,o){u=n,c=o||{};var l=r(e,t);return h(l),function(t){for(var n=[],o=0;o<l.length;o++){var a=l[o];(s=i[a.id]).refs--,n.push(s)}t?h(l=r(e,t)):l=[];for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var l=[];for(o=0;o<n.parts.length;o++)l.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:l}}}}function v(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(u)return p;r.parentNode.removeChild(r)}if(f){var o=s++;r=a||(a=v()),t=_.bind(null,r,o,!1),n=_.bind(null,r,o,!0)}else r=v(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);c.ssrId&&e.setAttribute(d,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function _(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}}]);