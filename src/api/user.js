/**
 * @Author: 郑钊宇
 * @Date: 2022-03-16 08:44:06
 * @LastEditTime: 2022-06-09 10:24:22
 * @LastEditors: 郑钊宇
 * @Description: 用户相关api
 */
import request from '@/utils/request'

export function login(data) {
  // 登录
  return request({
    url: '/userAction/login',
    method: 'post',
    data
  })
}

export function register(data) {
  // 注册
  return request({
    url: '/userAction/register',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  // 获取用户信息
  return request({
    url: '/token/parseToken',
    method: 'post',
    data: {
      'tokenStr': token
    }
  })
}

export function userUpdate(data) {
  // 更新用户信息
  return request({
    url: '/userAction/userUpdate',
    method: 'post',
    data
  })
}
