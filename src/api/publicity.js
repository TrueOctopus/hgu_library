/**
 * @Author: 郑钊宇
 * @Date: 2022-04-06 19:43:45
 * @LastEditTime: 2022-04-07 10:19:02
 * @LastEditors: 郑钊宇
 * @Description:
 */
import request from '@/utils/request'

export function fetchPublicityList() {
  return request({
    url: '/recommend/recommendList',
    method: 'get'
  })
}

export function fetchPublicityBookById(id) {
  return request({
    url: '/recommend/one',
    method: 'get',
    params: { id }
  })
}
