export const ElSingleUpload = require('./ElSingleUpload.vue').default

let Vue

function install (_Vue, options = (typeof window !== 'undefined' && window.ElSingleUploadOptions)) {

  if (Vue) {
    console.warn('[ElSingleUpload] already installed. Vue.use(ElSingleUpload) should be called only once.')
    return
  }

  Vue = _Vue

  if (Object.prototype.toString.call(options) === '[object Object]') {
    if (Object.prototype.toString.call(options.upload) === '[object Function]') {
      Object.assign(ElSingleUpload.props.upload, {
        required: false,
        default: options.upload
      })
    }
  }

  Vue.component(ElSingleUpload.name, ElSingleUpload)
}

/* istanbul ignore next */
ElSingleUpload.install = install

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


