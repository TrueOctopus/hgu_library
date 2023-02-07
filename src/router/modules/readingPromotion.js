/**
 * @Author: 郑钊宇
 * @Date: 2022-03-25 15:26:51
 * @LastEditTime: 2023-02-07 20:39:15
 * @LastEditors: 郑钊宇
 * @Description: 读书活动路由配置
 */
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

import Index from '@/views/ReadingPromotion/Index.vue'
import RecommendedReading from '@/views/ReadingPromotion/RecommendedReading.vue'
import BookClub from '@/views/ReadingPromotion/BookClub.vue'
import ReadingMonth from '@/views/ReadingPromotion/activity/ReadingMonth.vue'

const readingPromotion = {
  path: '/reading',
  name: 'Reading',
  redirect: '/reading/recommendedReading',
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
      path: 'recommendedReading',
      name: 'RecommendedReading',
      components: {
        default: RecommendedReading,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'bookClub',
      name: 'BookClub',
      components: {
        default: BookClub,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'readingMonth',
      name: 'ReadingMonth',
      components: {
        default: ReadingMonth,
        header: MainNavbar,
        footer: MainFooter
      }
    }
  ]
}
export default readingPromotion
