/**
 * @Author: 郑钊宇
 * @Date: 2023-02-07 19:59:53
 * @LastEditTime: 2023-02-07 20:16:12
 * @LastEditors: 郑钊宇
 * @Description: 概况路由配置
 */

import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

import Index from '@/views/Introduction/Index.vue'
import libraryIntroduction from '@/views/Introduction/libraryIntroduction.vue'
import leaderIntroduction from '@/views/Introduction/leaderIntroduction.vue'
import departmentIntroduction from '@/views/Introduction/departmentIntroduction.vue'

const introduction = {
  path: '/introduction',
  name: 'Introduction',
  redirect: '/introduction/libraryIntroduction',
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
      path: 'libraryIntroduction',
      name: 'libraryIntroduction',
      components: {
        default: libraryIntroduction,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'leaderIntroduction',
      name: 'leaderIntroduction',
      components: {
        default: leaderIntroduction,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'departmentIntroduction',
      name: 'departmentIntroduction',
      components: {
        default: departmentIntroduction,
        header: MainNavbar,
        footer: MainFooter
      }
    }
  ]
}

export default introduction
