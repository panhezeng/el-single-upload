!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports=ELEMENT},function(e,t,n){var o=n(10);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(14).default)("2c9a9a71",o,!1,{})},function(e,t,n){"use strict";function o(e,t,n,o,r,i,a,l){var s,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=s):r&&(s=l?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(u.functional){u._injectStyles=s;var c=u.render;u.render=function(e,t){return s.call(t),c(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,s):[s]}return{exports:e,options:u}}n.d(t,"a",(function(){return o}))},function(e,t){e.exports=Vue},function(e,t){e.exports=UCloudUFile},function(e,t,n){window,e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){e.exports=function(e,t,n,o,r){return new Promise((function(i){if(/^\[object File]$/.test(Object.prototype.toString.call(e))){isNaN(n)&&(n=1024e3);var a="",l=e.name.lastIndexOf(".");-1!==l&&(a=e.name.substring(l));var s=a?a.substring(1):e.type&&e.type.split("/")[0];if(!s&&/^\[object String]$/.test(Object.prototype.toString.call(t))&&""!==t)i({message:"只能上传".concat(t,"!"),error:2,validation:!1});else if(isNaN(n)&&(/^\.(png|jpe?g|gif|svg|webp)/i.test(a)||/^image/.test(e.type)?n=10240:(/^\.(ogg|mp3|wav|flac|aac)/i.test(a)||/^audio/.test(e.type))&&(n=102400)),n&&e.size/1024>Number(n)){var u=n>=1024?"".concat(n/1024,"M"):"".concat(n,"KB");i({message:"上传".concat(s,"大小不能超过").concat(u,"!"),error:3,validation:!1})}else if(/^\[object String]$/.test(Object.prototype.toString.call(t))&&""!==t&&!t.split(",").some((function(t){return(t=t.trim())&&(new RegExp("^".concat(t)).test(e.type)||new RegExp("^".concat(t)).test(a))})))i({message:"只能上传".concat(t,"!"),error:4,validation:!1});else if(!/^\.(png|jpe?g|gif|svg|webp)/i.test(a)&&!/^image/.test(e.type)||isNaN(o)&&isNaN(r))i({message:"",error:0,validation:!0});else{var c=new Image;c.onload=function(){var e="";!isNaN(o)&&c.width>Number(o)&&(e+="图片宽度不能超过".concat(o)),!isNaN(r)&&c.height>Number(r)&&(e&&(e+="，"),e+="图片高度不能超过".concat(r)),i(e?{message:e,error:5,validation:!1}:{message:"",error:0,validation:!0})},c.onerror=function(){i({message:"无法获取图片宽度高度",error:6,validation:!1})},c.src=URL.createObjectURL(e)}}else i({message:"file参数必须为File数据类型",error:1,validation:!1})}))}}])},function(e,t,n){window,e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}({4:function(e,t){e.exports=function(e,t,n){if(/^\[object Object\]$/.test(Object.prototype.toString.call(e))&&/^\[object String\]$/.test(Object.prototype.toString.call(t))&&""!==t){for(var o=t.split("."),r=0,i=o.length;/^\[object Object\]$/.test(Object.prototype.toString.call(e))&&r<i;)e=e[o[r++]];return r&&r==i?e:n}return n}}})},function(e,t,n){var o;window,e.exports=(o=n(0),function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=o},function(e,t,n){"use strict";n.r(t),n.d(t,"ElPopoverDialog",(function(){return r}));var o,r=n(2).default;function i(e){o?console.warn("[ElPopoverDialog] already installed. Vue.use(ElPopoverDialog) should be called only once."):(o=e).component(r.name,r)}r.install=i,"undefined"!=typeof window&&window.Vue&&i(window.Vue)},function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-popover",e._g(e._b({staticClass:"popover-dialog",staticStyle:{"font-size":"0px"},attrs:{placement:e.$attrs.placement||"top"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},"el-popover",e.$attrs,!1),e.$listeners),[e.popoverContentShow?n("p",{staticClass:"popover-content"},[e._v("\n    "+e._s(e.popoverContent)+"\n  ")]):e._e(),e._v(" "),e._t("popover-content",null,{hide:e.hide}),e._v(" "),e.showConfirmButton||e.showCancelButton?n("div",{staticClass:"popover-button",style:e.popoverButtonStyle},[e.showCancelButton?n("el-button",{staticClass:"cancel-button",attrs:{type:"text",size:"mini"},on:{click:e.cancel}},[e._v(e._s(e.cancelButtonText)+"\n    ")]):e._e(),e._v(" "),e.showConfirmButton?n("el-button",{staticClass:"confirm-button",attrs:{type:"primary",size:"mini"},on:{click:e.confirm}},[e._v("\n      "+e._s(e.confirmButtonText)+"\n    ")]):e._e(),e._v(" "),e._t("popover-button",null,{hide:e.hide})],2):e._e(),e._v(" "),n("span",{staticClass:"reference",attrs:{slot:"reference"},slot:"reference"},[e.buttonShow?n("el-button",e._b({staticClass:"reference-button",style:e.buttonStyle,attrs:{size:e.buttonSize,type:e.buttonType}},"el-button",e.$attrs,!1),[e._v(e._s(e.buttonText)+"\n    ")]):e._e(),e._v(" "),e._t("reference",null,{hide:e.hide})],2)],2)};o._withStripped=!0;var r=n(0),i=function(e,t,n,o,r,i,a,l){var s,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=[],u._compiled=!0),s)if(u.functional){u._injectStyles=s;var c=u.render;u.render=function(e,t){return s.call(t),c(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,s):[s]}return{exports:e,options:u}}({name:"ElPopoverDialog",components:{"el-button":r.Button,"el-popover":r.Popover},inheritAttrs:!1,props:{popoverContentShow:{type:Boolean,default:!0},popoverContent:{type:String,default:"确认要删除？"},popoverButtonStyle:{type:String,default:"text-align: right; margin: 0"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0},cancelButtonText:{type:String,default:"取消"},confirmButtonText:{type:String,default:"确定"},buttonShow:{type:Boolean,default:!0},buttonText:{type:String,default:"删除"},buttonType:{type:String,default:"text"},buttonSize:{type:String,default:""},buttonStyle:{type:String,default:"color:#f56c6c; margin-right: 0 !important;"},confirmHide:{type:Boolean,default:!0}},data:function(){return{visible:!1}},methods:{cancel:function(){this.visible=!1,this.$emit("cancel")},confirm:function(){this.confirmHide&&(this.visible=!1),this.$emit("confirm")},hide:function(e){this.visible=!1,/^\[object [^F]*Function\]$/.test(Object.prototype.toString.call(e))&&e()}}},o);i.options.__file="src/ElPopoverDialog.vue",t.default=i.exports}]).ElPopoverDialog)},function(e,t,n){"use strict";n.r(t),n.d(t,"ElSingleUpload",(function(){return r}));var o,r=n(13).default;function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"undefined"!=typeof window&&window.ElSingleUploadOptions;o?console.warn("[ElSingleUpload] already installed. Vue.use(ElSingleUpload) should be called only once."):(o=e,"[object Object]"===Object.prototype.toString.call(t)&&/^\[object [^F]*Function\]$/.test(Object.prototype.toString.call(t.upload))&&Object.assign(r.props.upload,{required:!1,default:t.upload}),o.component(r.name,r))}r.install=i,"undefined"!=typeof window&&window.Vue&&i(window.Vue)},function(e,t,n){"use strict";var o=n(1);n.n(o).a},function(e,t,n){var o=n(11)(!1);o.push([e.i,".el-single-upload {\n  position: relative;\n  width: 300px;\n  display: inline-block;\n}\n.el-single-upload .check-can-play {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.el-single-upload .view {\n  line-height: 1;\n  display: block;\n  border: 1px solid #d9d9d9;\n  width: calc(100% - 2px);\n  height: 100%;\n}\n.el-single-upload .upload {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  position: relative;\n  line-height: 1;\n}\n.el-single-upload .el-upload-dragger {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n.el-single-upload .el-upload-dragger .el-icon-upload {\n  font-size: 24px !important;\n  margin: 0 0 0 2px;\n  line-height: normal;\n}\n.el-single-upload.input .view {\n  height: calc(100% - 40px);\n}\n.el-single-upload.input .upload {\n  height: calc(100% - 40px);\n}\n.el-single-upload .el-upload__input {\n  display: none !important;\n}\n.el-single-upload .el-upload {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.el-single-upload .el-upload:hover {\n  border-color: #20a0ff;\n}\n.el-single-upload .upload.update {\n  position: absolute;\n  top: 0;\n  right: -28px;\n  z-index: 2;\n  width: auto;\n  height: auto;\n}\n.el-single-upload .upload.update .el-upload {\n  padding: 0 1px;\n  width: auto;\n  height: auto;\n  border-left: none;\n  border-radius: 0;\n}\n.el-single-upload .upload-btn {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px !important;\n}\n.el-single-upload .el-icon-upload {\n  font-size: 24px !important;\n  color: #8c939d;\n  background: #ffffff;\n}\n.el-single-upload .el-icon-upload:hover {\n  color: #20a0ff;\n}\n.el-single-upload .icon-delete {\n  position: absolute;\n  top: 28px;\n  right: -28px;\n  font-size: 24px !important;\n  cursor: pointer;\n  color: #8c939d;\n  border: 1px dashed #d9d9d9;\n  border-left: none;\n  padding: 0 1px;\n  line-height: 1;\n}\n.el-single-upload .icon-delete:hover {\n  border-color: #20a0ff;\n  color: #20a0ff;\n}\n.el-single-upload .icon-delete .el-icon-delete {\n  margin-left: 2px;\n}\n.el-single-upload .tip {\n  padding: 10px 0;\n  text-align: center;\n}\n.el-single-upload.image,\n.el-single-upload.video {\n  width: 200px;\n  height: 200px;\n}\n.el-single-upload.image .img,\n.el-single-upload.video .img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n",""]),e.exports=o},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,l,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);var o=n(3),r=n.n(o),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("上传的mock演示，response永远是一样的数据")]),e._v(" "),n("el-single-upload",{attrs:{url:e.url,accept:"image/*","image-dimensions":{width:50,height:50}},on:{"update:url":function(t){e.url=t},blur:function(t){return e.eventLog("blur")},"request-upload":function(t){return e.eventLog("request-upload")},"delete-confirm":function(t){return e.eventLog("delete-confirm")}}})],1)};i._withStripped=!0;var a=n(4),l=new(n.n(a).a)("example-ucloud","https://private-87040-publicexample.apiary-mock.com/upload","https://private-87040-publicexample.apiary-mock.com/upload/token");function s(e){var t=e.file;if("[object File]"!==Object.prototype.toString.call(t))throw new Error("file参数必须为File数据类型");return new Promise((function(n,o){l.PREFIX="example/".concat(t.type);l.hitSliceUpload(t,(function(e){"[object Object]"!==Object.prototype.toString.call(e)&&(e={Key:t.name}),e.url="http://dummyimage.com/200x100/50B347/FFF&text=".concat(e.Key),console.log("success",e),n({data:e})}),(function(e){o(new Error("上传失败"))}),(function(t){"[object Object]"!==Object.prototype.toString.call(t)&&(t={value:0}),console.log("progress",t),t.percent=100*t.value,e.onProgress(t)}))}))}window.ElSingleUploadOptions={upload:s},n(8);var u={name:"App",data:function(){return{url:""}},computed:{upload:function(){return s}},methods:{eventLog:function(e){console.log(e)}}},c=n(2),p=Object(c.a)(u,i,[],!1,null,null,null);p.options.__file="example/components/App.vue";var d=p.exports;new r.a({el:"#app",render:function(e){return e(d)}})},function(e,t,n){"use strict";n.r(t);var o=function(){var e,t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"el-single-upload",class:(e={},e[t.acceptClassName]=!0,e.input=t.input,e)},[t.view&&t.urlInternal?["video"!==t.acceptClassName&&"audio"!==t.acceptClassName||t.canPlay?t._e():o("div",{staticClass:"check-can-play"},[t._v("\n      检测能否播放中...\n    ")]),t._v(" "),"video"===t.acceptClassName?o("video",{ref:"media",staticClass:"view",attrs:{controls:"",preload:"metadata",src:t.urlInternal}}):"audio"===t.acceptClassName?o("audio",{ref:"media",staticClass:"view",attrs:{controls:"",preload:"metadata",src:t.urlInternal}}):o("a",{staticClass:"view",attrs:{href:t.urlInternal,target:"_blank"}},["image"===t.acceptClassName?o("img",{staticClass:"img",attrs:{src:t.urlInternal}}):o("span",{staticStyle:{display:"inline-block",padding:"10px 15px"}},[t._v(t._s(t.file?t.file.name:t.urlInternal))])])]:t._e(),t._v(" "),100!==t.percentage?o("el-progress",{attrs:{percentage:t.percentage}}):t._e(),t._v(" "),t.$attrs.disabled?t._e():o("el-upload",t._b({ref:"upload",staticClass:"upload",class:{update:t.urlInternal},attrs:{action:"","before-upload":t.beforeUpload,"http-request":t.requestUpload,"on-progress":t.progressUpload,"on-success":t.successUpload,"on-error":t.errorUpload,accept:t.accept,drag:t.drag,multiple:!1,"show-file-list":!1}},"el-upload",t.$attrs,!1),[t.urlInternal?o("i",{staticClass:"re-upload-btn el-icon-upload"}):o("i",{staticClass:"upload-btn el-icon-upload"})]),t._v(" "),t.urlInternal&&t.deleteButton&&!t.$attrs.disabled?o("el-popover-dialog",t._b({staticClass:"icon-delete",attrs:{"button-show":!1},on:{confirm:t.deleteConfirm}},"el-popover-dialog",t.$attrs,!1),[o("i",{staticClass:"el-icon-delete",attrs:{slot:"reference"},slot:"reference"})]):t._e(),t._v(" "),t.input?o("el-input",t._g({attrs:{placeholder:t.$attrs.placeholder||"文件链接地址",disabled:t.$attrs.disabled,readonly:t.readonlyInternal},on:{blur:function(e){return t.setUrl(t.urlInternal)}},model:{value:t.urlInternal,callback:function(e){t.urlInternal=e},expression:"urlInternal"}},t.$listeners)):t._e(),t._v(" "),t.tip?o("div",{staticClass:"tip"},[t._v(t._s(t.tip))]):t._e(),t._v(" "),t._t("default")],2)};o._withStripped=!0;var r=n(0),i=n(5),a=n.n(i),l=n(6),s=n.n(l),u=n(7),c=n.n(u),p={name:"ElSingleUpload",components:{"el-progress":r.Progress,"el-upload":r.Upload,"el-input":r.Input,ElPopoverDialog:c.a},inheritAttrs:!1,props:{upload:{required:!0,type:Function},resPathOfUrl:{type:String,default:"data.url"},url:{type:null,required:!0},checkUpload:Function,error:Function,deleteButton:{type:Boolean,default:!0},view:{type:Boolean,default:!0},size:{type:Number,default:void 0},imageDimensions:{validator:function(e){return/^\[object Object\]$/.test(Object.prototype.toString.call(e))&&Object.prototype.hasOwnProperty.call(e,"width")&&Object.prototype.hasOwnProperty.call(e,"height")},type:Object,default:function(){return{width:void 0,height:void 0}}},accept:{validator:function(e){return""===e||/^(image|audio|video|text|application|\.)/.test(e)},type:String,default:""},input:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},drag:{type:Boolean,default:!0},errorUploadEmptyUrl:{type:Boolean,default:!1},tip:{type:String,default:""}},data:function(){return{file:null,urlInternal:"",percentage:100,emptyUrl:!1,readonlyInternal:!1,canPlay:!1,timeoutId:0}},watch:{url:{immediate:!0,handler:function(e){this.emptyUrl=!0,this.setUrl(e),this.emptyUrl=this.errorUploadEmptyUrl}},errorUploadEmptyUrl:{immediate:!0,handler:function(e){this.emptyUrl=e}},readonly:{immediate:!0,handler:function(e){this.readonlyInternal=e}}},computed:{acceptClassName:function(){return/^\.(png|jpe?g|gif|svg|webp)/.test(this.accept)||/^image/.test(this.accept)?"image":/^\.(ogg|mp3|wav|flac|aac)/.test(this.accept)||/^audio/.test(this.accept)?"audio":/^\.(mp4|webm)/.test(this.accept)||/^video/.test(this.accept)?"video":""}},beforeDestroy:function(){this.timeoutId&&(window.clearTimeout(this.timeoutId),this.timeoutId=0),this.$refs.media&&(this.$refs.media.removeEventListener("canplay",this.emitMedia),this.$refs.media.removeEventListener("error",this.emitMediaError))},methods:{empty:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&(this.urlInternal="",this.$refs.upload&&this.$refs.upload.clearFiles()),this.file=null,this.$emit("file",null),this.$emit("media-duration",""),this.$emit("media",null),this.$emit("update:url",this.urlInternal)},emitMedia:function(){this.timeoutId&&(window.clearTimeout(this.timeoutId),this.timeoutId=0),this.canPlay=!0,this.$refs.media&&(this.$emit("media-duration",this.$refs.media.duration),this.$emit("media",this.$refs.media))},emitMediaError:function(){this.timeoutId&&(window.clearTimeout(this.timeoutId),this.timeoutId=0),this.empty(),this.canPlay=!1,this.$refs.media&&(this.$emit("media-load-error"),r.Message.error("不能正常播放，请重新上传"))},canplayHandler:function(){var e=this;"video"!==this.acceptClassName&&"audio"!==this.acceptClassName||(this.canPlay=!1,this.$nextTick().then((function(){e.$refs.media&&(e.$refs.media.addEventListener("canplay",e.emitMedia.bind(e)),e.$refs.media.readyState>2&&e.emitMedia(),e.$refs.media.addEventListener("error",e.emitMediaError.bind(e)),e.timeoutId=window.setTimeout((function(){e.emitMediaError()}),6e4))})))},setUrl:function(e){"[object String]"===Object.prototype.toString.call(e)&&(/^https?:\/\//i.test(e)?(this.urlInternal=e,this.canplayHandler()):this.empty(this.emptyUrl),this.urlInternal!==this.url&&this.$emit("update:url",this.urlInternal))},beforeUpload:function(e){var t=this;return this.readonlyInternal=!0,this.file=e,this.$emit("file",e),this.$emit("before-upload",e),this.checkUpload?this.checkUpload(e):new Promise((function(n,o){a()(e,t.accept,t.size,t.imageDimensions.width,t.imageDimensions.height).then((function(e){e.validation?n():(e.message&&r.Message.error(e.message),t.readonlyInternal=t.readonly,t.$emit("validation-error"),o())}))}))},requestUpload:function(e){return this.$emit("request-upload",e),this.upload(e)},progressUpload:function(e,t){this.$emit("progress-upload",e);var n=parseInt(e.percent);"[object Number]"===Object.prototype.toString.call(e.percent)&&(n=e.percent),n>=100&&(n=99),this.percentage=n},successUpload:function(e){this.setUrl(s()(e,this.resPathOfUrl)),this.percentage=100,this.$emit("success-upload",e),this.finishUpload()},errorUpload:function(e,t){this.percentage=100,this.error?this.error(e,t):r.Message.error("上传失败"),this.empty(this.emptyUrl),this.$emit("error-upload",{err:e,file:t}),this.finishUpload()},finishUpload:function(){this.readonlyInternal=this.readonly,this.$emit("finish-upload")},deleteConfirm:function(){this.$emit("delete-confirm"),this.empty()}}},d=(n(9),n(2)),f=Object(d.a)(p,o,[],!1,null,null,null);f.options.__file="src/ElSingleUpload.vue";t.default=f.exports},function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],l={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(l):n.push(o[a]={id:a,parts:[l]})}return n}n.r(t),n.d(t,"default",(function(){return f}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),l=null,s=0,u=!1,c=function(){},p=null,d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,r){u=n,p=r||{};var a=o(e,t);return h(a),function(t){for(var n=[],r=0;r<a.length;r++){var l=a[r];(s=i[l.id]).refs--,n.push(s)}t?h(a=o(e,t)):a=[];for(r=0;r<n.length;r++){var s;if(0===(s=n[r]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(g(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(g(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:a}}}}function m(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function g(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(u)return c;o.parentNode.removeChild(o)}if(d){var r=s++;o=l||(l=m()),t=y.bind(null,o,r,!1),n=y.bind(null,o,r,!0)}else o=m(),t=_.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var v,b=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function y(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function _(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),p.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}]);