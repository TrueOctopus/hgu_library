/**
 * @Author: 郑钊宇
 * @Date: 2022-03-27 09:53:53
 * @LastEditTime: 2022-06-09 10:38:24
 * @LastEditors: 郑钊宇
 * @Description: token管理
 */
import Cookies from 'js-cookie'

const TokenKey = 'library_user_token' // token保存关键词

export function getToken() {
  // 获取token
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  // 设置token
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  // 删除token
  return Cookies.remove(TokenKey)
}
