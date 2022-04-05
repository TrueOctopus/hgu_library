/**
 * @Author: 郑钊宇
 * @Date: 2022-03-28 10:31:04
 * @LastEditTime: 2022-04-05 16:08:00
 * @LastEditors: 郑钊宇
 * @Description:
 */
import request from '@/utils/request'

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
