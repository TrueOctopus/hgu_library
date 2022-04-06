/**
 * @Author: 郑钊宇
 * @Date: 2022-03-28 10:31:04
 * @LastEditTime: 2022-04-06 15:15:10
 * @LastEditors: 郑钊宇
 * @Description:
 */
import request from '@/utils/request'

export const newsOption = ['新闻', '公告', '购买', '试用', '活动', '讲座']

export function fetchNewsByCatalog(pageNo, pageSize, catalog) {
  return request({
    url: '/news/textByCatalog',
    method: 'get',
    params: { pageNo, pageSize, catalog }
  })
}
export function fetchReleaseNewsList(pageNo, pageSize) {
  return request({
    url: '/news/releaseNews',
    method: 'get',
    params: { pageNo, pageSize }
  })
}

export function fetchNewsDetailById(id) {
  return request({
    url: '/news/detailed',
    method: 'get',
    params: { id }
  })
}

export function fetchAllNewsList(pageNo, pageSize) {
  return request({
    url: '/news/releaseNews',
    method: 'get',
    params: { pageNo, pageSize }
  })
}

export function fetchNewsList(pageNo, pageSize) {
  return request({
    url: '/news/groupOne',
    method: 'get',
    params: { pageNo, pageSize }
  })
}

export function fetchResourcesList(pageNo, pageSize) {
  return request({
    url: '/news/groupTwo',
    method: 'get',
    params: { pageNo, pageSize }
  })
}
