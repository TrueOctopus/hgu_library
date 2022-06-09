/**
 * @Author: 郑钊宇
 * @Date: 2022-04-29 10:07:47
 * @LastEditTime: 2022-06-09 10:33:35
 * @LastEditors: 郑钊宇
 * @Description: 学习支持路由配置
 */
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

import Index from '@/views/StudySupport/Index.vue'
import AdmissionEducation from '@/views/StudySupport/AdmissionEducation.vue'
import ReaderTraining from '@/views/StudySupport/ReaderTraining.vue'
import VPNusage from '@/views/StudySupport/VPNusage.vue'

const announcementRouter = {
  path: '/studysupport',
  name: 'StudySupport',
  redirect: '/studysupport/admissionEducation',
  components: {
    default: Index,
    header: MainNavbar,
    footer: MainFooter
  },
  props: {
    header: { colorOnScroll: 100 },
    footer: { backgroundColor: 'black' }
  },
  children: [
    {
      path: 'admissionEducation',
      name: 'admissionEducation',
      components: {
        default: AdmissionEducation,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'readerTraining',
      name: 'readerTraining',
      components: {
        default: ReaderTraining,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'VPNusage',
      name: 'VPNusage',
      components: {
        default: VPNusage,
        header: MainNavbar,
        footer: MainFooter
      }
    }
  ]
}

export default announcementRouter
