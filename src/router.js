/**
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:23
 * @LastEditTime: 2022-03-20 15:47:11
 * @LastEditors: 郑钊宇
 * @Description: 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from './views/Home/Index.vue'
import Landing from './views/Landing/Landing.vue'
import Login from './views/Personal/Login.vue'
import Register from './views/Personal/Register.vue'
import Profile from './views/Personal/Profile.vue'
import MainNavbar from './layout/MainNavbar.vue'
import MainFooter from './layout/MainFooter.vue'
import Kits from './views/Kits/Kits.vue'

import Announcement from './views/News/Announcement.vue'
import AllList from './views/News/All.vue'
import NewsList from './views/News/NewsList.vue'
import NotesList from './views/News/NotesList.vue'
import TryList from './views/News/TryList.vue'
import LectureList from './views/News/LectureList.vue'
import BuyList from './views/News/BuyList.vue'

import News from './views/News/News.vue'
import Introduction from './views/Introduction/Introduction.vue'
import DatabaseList from './views/DataBaseResouce/DatabaseList.vue'

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
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
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
      path: '/kits',
      name: 'kits',
      components: { default: Kits, header: MainNavbar, footer: MainFooter },
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
        }
      ]
    },
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
    {
      path: '/databaselist',
      name: 'DatabaseList',
      components: {
        default: DatabaseList,
        header: MainNavbar,
        footer: MainFooter
      },
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
