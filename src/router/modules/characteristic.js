/**
 * @Author: 郑钊宇
 * @Date: 2022-04-23 19:50:56
 * @LastEditTime: 2022-04-24 09:49:07
 * @LastEditors: 郑钊宇
 * @Description:
 */
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

import Characteristic from '@/views/Characteristic/index.vue'

import Achievement from '@/views/Characteristic/CharacteristicType/Achievement.vue'

const announcementRouter = {
  path: '/characteristic',
  name: 'CharacteristicInfo',
  redirect: '/characteristic/achievement',
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
    }
  ]
}

export default announcementRouter
