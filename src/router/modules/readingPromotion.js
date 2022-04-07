/**
 * @Author: 郑钊宇
 * @Date: 2022-03-25 15:26:51
 * @LastEditTime: 2022-04-07 10:12:09
 * @LastEditors: 郑钊宇
 * @Description:
 */
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

import Index from '@/views/ReadingPromotion/Index.vue'
import RecommendedReading from '@/views/ReadingPromotion/RecommendedReading.vue'
import BookReport from '@/views/ReadingPromotion/BookReport.vue'
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
      path: 'bookReport',
      name: 'BookReport',
      components: {
        default: BookReport,
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
