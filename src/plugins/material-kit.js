/**
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:24
 * @LastEditTime: 2022-03-15 19:48:09
 * @LastEditors: 郑钊宇
 * @Description:
 */
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import '@/assets/scss/material-kit.scss'
import '@/assets/demo.css'
import globalDirectives from './globalDirectives'
import globalMixins from './globalMixins'
import globalComponents from './globalComponents'
import VueLazyload from 'vue-lazyload'
import VueCarousel from 'vue-carousel'

export default {
  install(Vue) {
    Vue.use(VueMaterial)
    Vue.use(globalDirectives)
    Vue.use(globalMixins)
    Vue.use(globalComponents)
    Vue.use(VueCarousel)
    Vue.use(VueLazyload, {
      observer: true,
      // optional
      observerOptions: {
        rootMargin: '0px',
        threshold: 0.1
      }
    })
  }
}
