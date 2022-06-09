/**
 * @Author: 郑钊宇
 * @Date: 2022-04-06 19:43:45
 * @LastEditTime: 2022-06-09 10:23:16
 * @LastEditors: 郑钊宇
 * @Description: 推广书籍相关api
 */
import request from '@/utils/request'

export function fetchPublicityList() {
  // 获取推广书籍列表
  return request({
    url: '/recommend/recommendList',
    method: 'get'
  })
}

export function fetchPublicityBookById(id) {
  // 通过id获取推广书籍信息
  return request({
    url: '/recommend/one',
    method: 'get',
    params: { id }
  })
}
