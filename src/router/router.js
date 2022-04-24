/**
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:23
 * @LastEditTime: 2022-04-23 19:55:46
 * @LastEditors: 郑钊宇
 * @Description: 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import announcementRouter from './modules/announcement'
import databaseResouce from './modules/databaseResouce'
import readerService from './modules/readerService'
import readingPromotion from './modules/readingPromotion'
import commentHub from './modules/commentHub'
import characteristic from './modules/characteristic'

import Index from '@/views/Home/Index.vue'
import Login from '@/views/Personal/Login.vue'
import Register from '@/views/Personal/Register.vue'
import Profile from '@/views/Personal/Profile.vue'
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

import News from '@/views/News/News.vue'
import Introduction from '@/views/Introduction/Introduction.vue'
import BookDetail from '@/views/ReadingPromotion/BookDetail.vue'
import LectureDetail from '@/views/Lecture/LectureDetail.vue'

import StaffNumber from '@/views/Staff/index.vue'
import SearchResult from '@/views/SearchResult/SearchResult.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/register',
      name: 'Register',
      components: { default: Register, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },

    {
      path: '/introduction',
      name: 'Introduction',
      components: {
        default: Introduction,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: 'black' }
      }
    },

    databaseResouce,
    announcementRouter,
    readerService,
    readingPromotion,
    commentHub,
    characteristic,

    {
      path: '/announcement/:newId',
      name: 'DetailNews',
      components: { default: News, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: 'black' }
      }
    },

    {
      path: '/reading/bookDetail/:bookId',
      name: 'DetailBook',
      components: { default: BookDetail, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: 'black' }
      }
    },

    {
      path: '/lecture/:lectureId',
      name: 'DetailLecture',
      components: { default: LectureDetail, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/staffnumber',
      name: 'StaffNumber',
      components: { default: StaffNumber, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/search',
      name: 'GlobalSearch',
      components: { default: SearchResult, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
