/**
 * @Author: 郑钊宇
 * @Date: 2022-03-27 09:53:53
 * @LastEditTime: 2022-03-27 09:59:33
 * @LastEditors: 郑钊宇
 * @Description:
 */
import Cookies from 'js-cookie'

const TokenKey = 'library_user_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
