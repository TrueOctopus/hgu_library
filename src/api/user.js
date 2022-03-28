/**
 * @Author: 郑钊宇
 * @Date: 2022-03-16 08:44:06
 * @LastEditTime: 2022-03-27 16:11:18
 * @LastEditors: 郑钊宇
 * @Description:
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/userAction/login',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: '/userAction/register',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/userAction/userinfo',
    method: 'get',
    params: { token }
  })
}

export function userUpdate(data) {
  return request({
    url: '/userAction/userUpdate',
    method: 'post',
    data
  })
}
