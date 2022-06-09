/**
 * @Author: 郑钊宇
 * @Date: 2022-03-25 15:26:51
 * @LastEditTime: 2022-06-09 10:33:04
 * @LastEditors: 郑钊宇
 * @Description: 读者服务路由配置
 */
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

import Index from '@/views/ReaderService/Index'
import OpenTime from '@/views/ReaderService/OpenTime.vue'
import Donation from '@/views/ReaderService/Donation.vue'
import Distribution from '@/views/ReaderService/Distribution.vue'
import BorrowRules from '@/views/ReaderService/borrow/BorrowRules.vue'
import BorrowProcess from '@/views/ReaderService/borrow/BorrowProcess.vue'
import LabOrder from '@/views/ReaderService/order/LabOrder.vue'
import SeatOrder from '@/views/ReaderService/order/SeatOrder.vue'
import LectureOrder from '@/views/ReaderService/order/LectureOrder.vue'

const readerService = {
  path: '/service',
  name: 'Service',
  redirect: '/service/opentime',
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
      path: 'opentime',
      name: 'OpenTime',
      components: {
        default: OpenTime,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'distribution',
      name: 'Distribution',
      components: {
        default: Distribution,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'borrowRules',
      name: 'BorrowRules',
      components: {
        default: BorrowRules,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'borrowProcess',
      name: 'BorrowProcess',
      components: {
        default: BorrowProcess,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'labOrder',
      name: 'LabOrder',
      components: {
        default: LabOrder,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'seatOrder',
      name: 'SeatOrder',
      components: {
        default: SeatOrder,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'lectureOrder',
      name: 'LectureOrder',
      components: {
        default: LectureOrder,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'donation',
      name: 'Donation',
      components: {
        default: Donation,
        header: MainNavbar,
        footer: MainFooter
      }
    }
  ]
}
export default readerService
