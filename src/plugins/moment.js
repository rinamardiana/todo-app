import Moment from 'moment'

export default {
  install(Vue) {
    Vue.moment = Moment
    window.moment = Moment
  }
}
