!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e){t.exports=ELEMENT},function(t,e,n){var r=n(13);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(17).default)("311e7b4e",r,!1,{})},function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,l){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var c=s.render;s.render=function(t,e){return u.call(e),c(t,e)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:s}}n.d(e,"a",(function(){return r}))},function(t,e,n){t.exports=n(11)},function(t,e){t.exports=Vue},function(t,e){t.exports=UCloudUFile},function(t,e){function n(t,e,n,r,o,i,a){try{var l=t[i](a),u=l.value}catch(t){return void n(t)}l.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function l(t){n(a,o,i,l,u,"next",t)}function u(t){n(a,o,i,l,u,"throw",t)}l(void 0)}))}}},function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){function n(t,e,n,r,o,i,a){try{var l=t[i](a),u=l.value}catch(t){return void n(t)}l.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n,r,o,i){var a,l,u,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!/^\[object File\]$/.test(Object.prototype.toString.call(e))){t.next=31;break}if(isNaN(r)&&(r=1024e3),a="",-1!==(l=e.name.lastIndexOf("."))&&(a=e.name.substring(l)),u=a?a.substring(1):e.type&&e.type.split("/")[0],!e.type&&!a){t.next=22;break}if(isNaN(r)&&(/^\.(png|jpe?g|gif|svg|webp)/.test(a)||/^image/.test(e.type)?r=10240:(/^\.(ogg|mp3|wav|flac|aac)/.test(a)||/^audio/.test(e.type))&&(r=102400)),!/^\[object String\]$/.test(Object.prototype.toString.call(n))||n.split(",").some((function(t){return(t=t.trim())&&(new RegExp("^".concat(t)).test(e.type)||new RegExp("^".concat(t)).test(a))}))){t.next=11;break}return t.abrupt("return",{message:"只能上传".concat(n,"!"),error:1,validation:!1});case 11:if(!/^\.(png|jpe?g|gif|svg|webp)/.test(a)&&!/^image/.test(e.type)||isNaN(o)&&isNaN(i)){t.next=20;break}return t.prev=12,t.next=15,new Promise((function(t,n){var r=new Image;r.onload=function(){var e="";!isNaN(o)&&r.width>Number(o)&&(e+="图片宽度不能超过".concat(o)),!isNaN(i)&&r.height>Number(i)&&(e&&(e+="，"),e+="图片高度不能超过".concat(i)),e?n({message:e,error:4,validation:!1}):t()},r.src=URL.createObjectURL(e)}));case 15:t.next=20;break;case 17:return t.prev=17,t.t0=t.catch(12),t.abrupt("return",t.t0);case 20:t.next=24;break;case 22:if(!/^\[object String\]$/.test(Object.prototype.toString.call(n))){t.next=24;break}return t.abrupt("return",{message:"只能上传".concat(n,"!"),error:3,validation:!1});case 24:if(!r){t.next=29;break}if(r=Number(r),!(e.size/1024>r)){t.next=29;break}return s=r>=1024?"".concat(r/1024,"M"):"".concat(r,"KB"),t.abrupt("return",{message:"上传".concat(u,"大小不能超过").concat(s,"!"),error:2,validation:!1});case 29:t.next=32;break;case 31:return t.abrupt("return",{message:"file参数必须为File数据类型",error:1,validation:!1});case 32:return t.abrupt("return",{message:"",error:0,validation:!0});case 33:case"end":return t.stop()}}),t,null,[[12,17]])})),function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function l(t){n(a,o,i,l,u,"next",t)}function u(t){n(a,o,i,l,u,"throw",t)}l(void 0)}))});return function(t,n,r,o,i){return e.apply(this,arguments)}}()}])},function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}({4:function(t,e){t.exports=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t)&&"[object String]"===Object.prototype.toString.call(e)&&""!==e){for(var r=e.split("."),o=0,i=r.length;"[object Object]"===Object.prototype.toString.call(t)&&o<i;)t=t[r[o++]];return o&&o==i?t:n}return n}}})},function(t,e,n){var r;window,t.exports=(r=n(0),function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=r},function(t,e,n){"use strict";n.r(e),n.d(e,"ElPopoverDialog",(function(){return o}));var r,o=n(2).default;function i(t){r?console.warn("[ElPopoverDialog] already installed. Vue.use(ElPopoverDialog) should be called only once."):(r=t).component(o.name,o)}o.install=i,"undefined"!=typeof window&&window.Vue&&i(window.Vue)},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-popover",t._g(t._b({staticClass:"popover-dialog",staticStyle:{"font-size":"0px"},attrs:{placement:t.$attrs.placement||"top"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},"el-popover",t.$attrs,!1),t.$listeners),[t.popoverContentShow?n("p",{staticClass:"popover-content"},[t._v("\n    "+t._s(t.popoverContent)+"\n  ")]):t._e(),t._v(" "),t._t("popover-content",null,{hide:t.hide}),t._v(" "),t.showConfirmButton||t.showCancelButton?n("div",{staticClass:"popover-button",style:t.popoverButtonStyle},[t.showCancelButton?n("el-button",{staticClass:"cancel-button",attrs:{type:"text",size:"mini"},on:{click:t.cancel}},[t._v(t._s(t.cancelButtonText)+"\n    ")]):t._e(),t._v(" "),t.showConfirmButton?n("el-button",{staticClass:"confirm-button",attrs:{type:"primary",size:"mini"},on:{click:t.confirm}},[t._v("\n      "+t._s(t.confirmButtonText)+"\n    ")]):t._e(),t._v(" "),t._t("popover-button",null,{hide:t.hide})],2):t._e(),t._v(" "),n("span",{staticClass:"reference",attrs:{slot:"reference"},slot:"reference"},[t.buttonShow?n("el-button",t._b({staticClass:"reference-button",style:t.buttonStyle,attrs:{size:t.buttonSize,type:t.buttonType}},"el-button",t.$attrs,!1),[t._v(t._s(t.buttonTxt)+"\n    ")]):t._e(),t._v(" "),t._t("reference",null,{hide:t.hide})],2)],2)};r._withStripped=!0;var o=n(0),i=function(t,e,n,r,o,i,a,l){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=[],s._compiled=!0),u)if(s.functional){s._injectStyles=u;var c=s.render;s.render=function(t,e){return u.call(e),c(t,e)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:s}}({name:"ElPopoverDialog",components:{"el-button":o.Button,"el-popover":o.Popover},inheritAttrs:!1,props:{popoverContentShow:{type:Boolean,default:!0},popoverContent:{type:String,default:"确认要删除？"},popoverButtonStyle:{type:String,default:"text-align: right; margin: 0"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0},cancelButtonText:{type:String,default:"取消"},confirmButtonText:{type:String,default:"确定"},buttonShow:{type:Boolean,default:!0},buttonTxt:{type:String,default:"删除"},buttonType:{type:String,default:"text"},buttonSize:{type:String,default:""},buttonStyle:{type:String,default:"color:#f56c6c; margin-right: 0 !important;"},confirmHide:{type:Boolean,default:!0}},data:function(){return{visible:!1}},methods:{cancel:function(){this.visible=!1,this.$emit("cancel")},confirm:function(){this.confirmHide&&(this.visible=!1),this.$emit("confirm")},hide:function(t){this.visible=!1,/^\[object [^F]*Function\]$/.test(Object.prototype.toString.call(t))&&t()}}},r);i.options.__file="src/ElPopoverDialog.vue",e.default=i.exports}]).ElPopoverDialog)},function(t,e,n){"use strict";n.r(e),n.d(e,"ElSingleUpload",(function(){return o}));var r,o=n(16).default;function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"undefined"!=typeof window&&window.ElSingleUploadOptions;r?console.warn("[ElSingleUpload] already installed. Vue.use(ElSingleUpload) should be called only once."):(r=t,"[object Object]"===Object.prototype.toString.call(e)&&/^\[object [^F]*Function\]$/.test(Object.prototype.toString.call(e.upload))&&Object.assign(o.props.upload,{required:!1,default:e.upload}),r.component(o.name,o))}o.install=i,"undefined"!=typeof window&&window.Vue&&i(window.Vue)},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new C(r||[]);return i._invoke=function(t,e,n){var r=c;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw i;return $()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=S(a,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===c)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?f:p,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=f,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var c="suspendedStart",p="suspendedYield",d="executing",f="completed",h={};function g(){}function v(){}function m(){}var y={};y[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(U([])));w&&w!==n&&r.call(w,i)&&(y=w);var x=m.prototype=g.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){var e;this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,a){var l=s(t[n],t,o);if("throw"!==l.type){var u=l.arg,c=u.value;return c&&"object"==typeof c&&r.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(c).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(l.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function U(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:$}}function $(){return{value:e,done:!0}}return v.prototype=x.constructor=m,m.constructor=v,m[l]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[a]=function(){return this},t.AsyncIterator=j,t.async=function(e,n,r,o){var i=new j(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(x),x[l]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=U,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return l.type="throw",l.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:U(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";var r=n(1);n.n(r).a},function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".el-single-upload {\n  position: relative;\n  width: 300px;\n  display: inline-block;\n}\n.el-single-upload .view {\n  line-height: 1;\n  display: block;\n  border: 1px solid #d9d9d9;\n  width: calc(100% - 2px);\n  height: 100%;\n}\n.el-single-upload .upload {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  position: relative;\n  line-height: 1;\n}\n.el-single-upload .el-upload-dragger {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n}\n.el-single-upload .el-upload-dragger .el-icon-upload {\n  font-size: 24px !important;\n  margin: 0 0 0 2px;\n  line-height: normal;\n}\n.el-single-upload.input .view {\n  height: calc(100% - 40px);\n}\n.el-single-upload.input .upload {\n  height: calc(100% - 40px);\n}\n.el-single-upload .el-upload__input {\n  display: none !important;\n}\n.el-single-upload .el-upload {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.el-single-upload .el-upload:hover {\n  border-color: #20a0ff;\n}\n.el-single-upload .upload.update {\n  position: absolute;\n  top: 0;\n  right: -28px;\n  z-index: 2;\n  width: auto;\n  height: auto;\n}\n.el-single-upload .upload.update .el-upload {\n  padding: 0 1px;\n  width: auto;\n  height: auto;\n  border-left: none;\n  border-radius: 0;\n}\n.el-single-upload .upload-btn {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px !important;\n}\n.el-single-upload .el-icon-upload {\n  font-size: 24px !important;\n  color: #8c939d;\n  background: #ffffff;\n}\n.el-single-upload .el-icon-upload:hover {\n  color: #20a0ff;\n}\n.el-single-upload .icon-delete {\n  position: absolute;\n  top: 28px;\n  right: -28px;\n  font-size: 24px !important;\n  cursor: pointer;\n  color: #8c939d;\n  border: 1px dashed #d9d9d9;\n  border-left: none;\n  padding: 0 1px;\n  line-height: 1;\n}\n.el-single-upload .icon-delete:hover {\n  border-color: #20a0ff;\n  color: #20a0ff;\n}\n.el-single-upload .icon-delete .el-icon-delete {\n  margin-left: 2px;\n}\n.el-single-upload .tip {\n  padding: 10px 0;\n  text-align: center;\n}\n.el-single-upload.image,\n.el-single-upload.video {\n  width: 200px;\n  height: 200px;\n}\n.el-single-upload.image .img,\n.el-single-upload.video .img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,l,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var l=t[a];null!=l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="(".concat(l[2],") and (").concat(n,")")),e.push(l))}},e}},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("上传的mock演示，response永远是一样的数据")]),t._v(" "),n("el-single-upload",{attrs:{url:t.url,accept:"image/*","image-dimensions":{width:50,height:50}},on:{"update:url":function(e){t.url=e},blur:function(e){return t.eventLog("blur")},"request-upload":function(e){return t.eventLog("request-upload")},"delete-confirm":function(e){return t.eventLog("delete-confirm")}}})],1)};i._withStripped=!0;var a=n(5),l=new(n.n(a).a)("example-ucloud","https://private-87040-publicexample.apiary-mock.com/upload","https://private-87040-publicexample.apiary-mock.com/upload/token");function u(t){var e=t.file;if("[object File]"!==Object.prototype.toString.call(e))throw new Error("file参数必须为File数据类型");return new Promise((function(n,r){l.PREFIX="example/".concat(e.type);l.hitSliceUpload(e,(function(t){"[object Object]"!==Object.prototype.toString.call(t)&&(t={Key:e.name}),t.url="http://dummyimage.com/200x100/50B347/FFF&text=".concat(t.Key),console.log("success",t),n({data:t})}),(function(t){r(new Error("上传失败"))}),(function(e){"[object Object]"!==Object.prototype.toString.call(e)&&(e={value:0}),console.log("progress",e),e.percent=100*e.value,t.onProgress(e)}))}))}window.ElSingleUploadOptions={upload:u},n(10);var s={name:"App",data:function(){return{url:""}},computed:{upload:function(){return u}},methods:{eventLog:function(t){console.log(t)}}},c=n(2),p=Object(c.a)(s,i,[],!1,null,null,null);p.options.__file="example/components/App.vue";var d=p.exports;new o.a({el:"#app",render:function(t){return t(d)}})},function(t,e,n){"use strict";n.r(e);var r=function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"el-single-upload",class:(t={},t[e.acceptClassName]=!0,t.input=e.input,t)},[e.view&&e.urlInternal?["video"===e.acceptClassName?r("video",{ref:"media",staticClass:"view",attrs:{controls:"",src:e.urlInternal}}):"audio"===e.acceptClassName?r("audio",{ref:"media",staticClass:"view",attrs:{controls:"",src:e.urlInternal}}):r("a",{staticClass:"view",attrs:{href:e.urlInternal,target:"_blank"}},["image"===e.acceptClassName?r("img",{staticClass:"img",attrs:{src:e.urlInternal}}):r("span",{staticStyle:{display:"inline-block",padding:"10px 15px"}},[e._v(e._s(e.file?e.file.name:e.urlInternal))])])]:e._e(),e._v(" "),100!==e.percentage?r("el-progress",{attrs:{percentage:e.percentage}}):e._e(),e._v(" "),e.$attrs.disabled?e._e():r("el-upload",e._b({ref:"upload",staticClass:"upload",class:{update:e.urlInternal},attrs:{action:"","before-upload":e.beforeUpload,"http-request":e.requestUpload,"on-progress":e.progressUpload,"on-success":e.successUpload,"on-error":e.errorUpload,accept:e.accept,drag:e.drag,multiple:!1,"show-file-list":!1}},"el-upload",e.$attrs,!1),[e.urlInternal?r("i",{staticClass:"re-upload-btn el-icon-upload"}):r("i",{staticClass:"upload-btn el-icon-upload"})]),e._v(" "),e.urlInternal&&e.deleteButton&&!e.$attrs.disabled?r("el-popover-dialog",e._b({staticClass:"icon-delete",attrs:{"button-show":!1},on:{confirm:e.deleteConfirm}},"el-popover-dialog",e.$attrs,!1),[r("i",{staticClass:"el-icon-delete",attrs:{slot:"reference"},slot:"reference"})]):e._e(),e._v(" "),e.input?r("el-input",e._g({attrs:{placeholder:e.$attrs.placeholder||"文件链接地址",disabled:e.$attrs.disabled,readonly:e.readonlyInternal},on:{blur:function(t){return e.setUrl(e.urlInternal)}},model:{value:e.urlInternal,callback:function(t){e.urlInternal=t},expression:"urlInternal"}},e.$listeners)):e._e(),e._v(" "),e.tip?r("div",{staticClass:"tip"},[e._v(e._s(e.tip))]):e._e(),e._v(" "),e._t("default")],2)};r._withStripped=!0;var o=n(3),i=n.n(o),a=n(6),l=n.n(a),u=n(0),s=n(7),c=n.n(s),p=n(8),d=n.n(p),f=n(9),h=n.n(f),g={name:"ElSingleUpload",components:{"el-progress":u.Progress,"el-upload":u.Upload,"el-input":u.Input,ElPopoverDialog:h.a},inheritAttrs:!1,props:{upload:{required:!0,type:Function},resPathOfUrl:{type:String,default:"data.url"},url:{type:null,required:!0},checkUpload:Function,error:Function,deleteButton:{type:Boolean,default:!0},view:{type:Boolean,default:!0},size:{type:Number,default:void 0},imageDimensions:{validator:function(t){return/^\[object Object\]$/.test(Object.prototype.toString.call(t))&&Object.prototype.hasOwnProperty.call(t,"width")&&Object.prototype.hasOwnProperty.call(t,"height")},type:Object,default:function(){return{width:void 0,height:void 0}}},accept:{validator:function(t){return""===t||/^(image|audio|video|text|application|\.)/.test(t)},type:String,default:""},input:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},drag:{type:Boolean,default:!0},errorUploadEmptyUrl:{type:Boolean,default:!1},tip:{type:String,default:""}},data:function(){return{file:null,urlInternal:"",percentage:100,emptyUrl:!1,readonlyInternal:!1}},watch:{url:{immediate:!0,handler:function(t){this.emptyUrl=!0,this.setUrl(t),this.emptyUrl=this.errorUploadEmptyUrl}},errorUploadEmptyUrl:{immediate:!0,handler:function(t){this.emptyUrl=t}},readonly:{immediate:!0,handler:function(t){this.readonlyInternal=t}}},computed:{acceptClassName:function(){return/^\.(png|jpe?g|gif|svg|webp)/.test(this.accept)||/^image/.test(this.accept)?"image":/^\.(ogg|mp3|wav|flac|aac)/.test(this.accept)||/^audio/.test(this.accept)?"audio":/^\.(mp4|webm)/.test(this.accept)||/^video/.test(this.accept)?"video":""}},methods:{empty:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&(this.urlInternal="",this.$refs.upload&&this.$refs.upload.clearFiles()),this.file=null,this.$emit("file",null),this.$emit("media-duration",""),this.$emit("media",null),this.$emit("update:url",this.urlInternal)},setUrl:function(t){"[object String]"===Object.prototype.toString.call(t)&&(/^https?:\/\//i.test(t)?this.urlInternal=t:this.empty(this.emptyUrl),this.urlInternal!==this.url&&this.$emit("update:url",this.urlInternal),this.$nextTick((function(){var t=this;if(this.$refs.media){var e=function(){t.$emit("media-duration",t.$refs.media.duration),t.$emit("media",t.$refs.media)};this.$refs.media.addEventListener("loadedmetadata",(function(){e()}),!0),this.$refs.media.readyState>0&&e(),this.$refs.media.addEventListener("error",(function(e){t.$emit("media-load-error",e)}),!0)}})))},beforeUpload:function(t){var e=this;return this.readonlyInternal=!0,this.file=t,this.$emit("file",t),this.$emit("before-upload",t),this.checkUpload?this.checkUpload(t):new Promise(function(){var n=l()(i.a.mark((function n(r,o){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()(t,e.accept,e.size,e.imageDimensions.width,e.imageDimensions.height);case 2:(a=n.sent).validation?r():(a.message&&u.Message.error(a.message),e.readonlyInternal=e.readonly,e.$emit("validation-error"),o());case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}())},requestUpload:function(t){return this.$emit("request-upload",t),this.upload(t)},progressUpload:function(t,e){this.$emit("progress-upload",t);var n=parseInt(t.percent);"[object Number]"===Object.prototype.toString.call(t.percent)&&(n=t.percent),n>=100&&(n=99),this.percentage=n},successUpload:function(t){this.setUrl(d()(t,this.resPathOfUrl)),this.percentage=100,this.$emit("success-upload",t),this.finishUpload()},errorUpload:function(t,e){this.percentage=100,this.error?this.error(t,e):u.Message.error("上传失败"),this.empty(this.emptyUrl),this.$emit("error-upload",{err:t,file:e}),this.finishUpload()},finishUpload:function(){this.readonlyInternal=this.readonly,this.$emit("finish-upload")},deleteConfirm:function(){this.$emit("delete-confirm"),this.empty()}}},v=(n(12),n(2)),m=Object(v.a)(g,r,[],!1,null,null,null);m.options.__file="src/ElSingleUpload.vue";e.default=m.exports},function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],l={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}n.r(e),n.d(e,"default",(function(){return h}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),l=null,u=0,s=!1,c=function(){},p=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,o){s=n,p=o||{};var a=r(t,e);return g(a),function(e){for(var n=[],o=0;o<a.length;o++){var l=a[o];(u=i[l.id]).refs--,n.push(u)}e?g(a=r(t,e)):a=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete i[u.id]}}}}function g(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(s)return c;r.parentNode.removeChild(r)}if(f){var o=u++;r=l||(l=v()),e=w.bind(null,r,o,!1),n=w.bind(null,r,o,!0)}else r=v(),e=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var y,b=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function x(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),p.ssrId&&t.setAttribute(d,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}]);