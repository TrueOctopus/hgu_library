/**
 * @Author: 郑钊宇
 * @Date: 2022-02-16 14:19:23
 * @LastEditTime: 2022-03-25 09:39:51
 * @LastEditors: 郑钊宇
 * @Description: 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import announcementRouter from './modules/announcement'
import databaseResouce from './modules/databaseResouce'

import Index from '@/views/Home/Index.vue'
import Landing from '@/views/Landing/Landing.vue'
import Login from '@/views/Personal/Login.vue'
import Register from '@/views/Personal/Register.vue'
import Profile from '@/views/Personal/Profile.vue'
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'
import Kits from '@/views/Kits/Kits.vue'

import News from '@/views/News/News.vue'
import Introduction from '@/views/Introduction/Introduction.vue'

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
    databaseResouce,
    announcementRouter,

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
