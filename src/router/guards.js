/**
 * @Author: 郑钊宇
 * @Date: 2022-03-29 15:27:12
 * @LastEditTime: 2022-06-09 10:33:58
 * @LastEditors: 郑钊宇
 * @Description: 路由守卫
 */
import router from './router'
import store from '../store'
import { getToken } from '@/utils/auth'

const blackList = ['/profile']

router.beforeEach(async(to, from, next) => {
  // determine whether the user has logged in
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      const hasGetUserInfo = store.getters.username
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo')
          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          store.dispatch('notification/promptNotification', {
            message: error || '发生错误！',
            noticeType: 'danger'
          })
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    /* has no token*/
    if (blackList.indexOf(to.path) === -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})
