/**
 * @Author: 郑钊宇
 * @Date: 2022-04-23 19:50:56
 * @LastEditTime: 2022-06-09 10:32:31
 * @LastEditors: 郑钊宇
 * @Description: 特色资源相关路由配置
 */
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

import Characteristic from '@/views/Characteristic/index.vue'

import Achievement from '@/views/Characteristic/CharacteristicType/Achievement.vue'
import Award from '@/views/Characteristic/CharacteristicType/Award.vue'
import Book from '@/views/Characteristic/CharacteristicType/Book.vue'
import Meeting from '@/views/Characteristic/CharacteristicType/Meeting.vue'
import Papers from '@/views/Characteristic/CharacteristicType/Papers.vue'
import Patent from '@/views/Characteristic/CharacteristicType/Patent.vue'
import ProjectReport from '@/views/Characteristic/CharacteristicType/ProjectReport.vue'
import Technology from '@/views/Characteristic/CharacteristicType/Technology.vue'
import Introduction from '@/views/Characteristic/Introduction.vue'

const announcementRouter = {
  path: '/characteristic',
  name: 'CharacteristicInfo',
  redirect: '/characteristic/introduction',
  components: {
    default: Characteristic,
    header: MainNavbar,
    footer: MainFooter
  },
  props: {
    header: { colorOnScroll: 100 },
    footer: { backgroundColor: 'black' }
  },
  children: [
    {
      path: 'achievement',
      name: 'AchievementList',
      components: {
        default: Achievement,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'award',
      name: 'Award',
      components: {
        default: Award,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'book',
      name: 'Book',
      components: {
        default: Book,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'meeting',
      name: 'Meeting',
      components: {
        default: Meeting,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'papers',
      name: 'Papers',
      components: {
        default: Papers,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'patent',
      name: 'Patent',
      components: {
        default: Patent,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'projectReport',
      name: 'ProjectReport',
      components: {
        default: ProjectReport,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'technology',
      name: 'Technology',
      components: {
        default: Technology,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'introduction',
      name: 'PersonIntroduction',
      components: {
        default: Introduction,
        header: MainNavbar,
        footer: MainFooter
      }
    }
  ]
}

export default announcementRouter
