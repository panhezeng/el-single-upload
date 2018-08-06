export const ElSingleUpload = require('./ElSingleUpload.vue').default

let Vue

function install (_Vue) {

  if (Vue) {
    console.warn('[ElSingleUpload] already installed. Vue.use(ElSingleUpload) should be called only once.')
    return
  }

  Vue = _Vue

  Vue.component(ElSingleUpload.name, ElSingleUpload)
}

/* istanbul ignore next */
ElSingleUpload.install = install

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


