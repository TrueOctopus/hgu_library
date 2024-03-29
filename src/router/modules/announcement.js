/**
 * @Author: 郑钊宇
 * @Date: 2022-03-25 08:29:01
 * @LastEditTime: 2022-06-09 10:32:17
 * @LastEditors: 郑钊宇
 * @Description: 新闻公告相关路由配置
 */
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

import Announcement from '@/views/News/Index.vue'
import AllList from '@/views/News/NewsType/All.vue'
import NewsList from '@/views/News/NewsType/NewsList.vue'
import NotesList from '@/views/News/NewsType/NotesList.vue'
import TryList from '@/views/News/NewsType/TryList.vue'
import LectureList from '@/views/News/NewsType/LectureList.vue'
import BuyList from '@/views/News/NewsType/BuyList.vue'
import ActivityList from '@/views/News/NewsType/ActivityList.vue'

const announcementRouter = {
  path: '/announcement',
  name: 'Announcement',
  redirect: '/announcement/all',
  components: {
    default: Announcement,
    header: MainNavbar,
    footer: MainFooter
  },
  props: {
    header: { colorOnScroll: 100 },
    footer: { backgroundColor: 'black' }
  },
  children: [
    {
      path: 'all',
      name: 'allNews',
      components: {
        default: AllList,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'news',
      name: 'newsList',
      components: {
        default: NewsList,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'notes',
      name: 'notesList',
      components: {
        default: NotesList,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'buy',
      name: 'buyList',
      components: {
        default: BuyList,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'try',
      name: 'tryList',
      components: {
        default: TryList,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'lecture',
      name: 'lectureList',
      components: {
        default: LectureList,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'activity',
      name: 'activityList',
      components: {
        default: ActivityList,
        header: MainNavbar,
        footer: MainFooter
      }
    }
  ]
}

export default announcementRouter
