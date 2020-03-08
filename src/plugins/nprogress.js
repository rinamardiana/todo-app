import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  install(Vue) {
    Vue.progress = NProgress
    window.progress = NProgress
    Vue.mixin({
      mounted() {
        NProgress.done()
      }
    })
  }
}