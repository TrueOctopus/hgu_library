/**
 * @Author: 郑钊宇
 * @Date: 2022-03-28 10:31:04
 * @LastEditTime: 2022-06-09 10:22:00
 * @LastEditors: 郑钊宇
 * @Description: 新闻公告相关api
 */
import request from '@/utils/request'

export const newsOption = ['新闻', '公告', '购买', '试用', '活动', '讲座']

export function fetchNewsByCatalog(pageNo, pageSize, catalog) {
  // 通过新闻类型获取新闻列表
  return request({
    url: '/news/newsByCatalog',
    method: 'get',
    params: { pageNo, pageSize, catalog }
  })
}
export function fetchReleaseNewsList(pageNo, pageSize) {
  // 获取发布的新闻列表
  return request({
    url: '/news/releaseNews',
    method: 'get',
    params: { pageNo, pageSize }
  })
}

export function fetchNewsDetailById(id) {
  // 通过id获取新闻详情
  return request({
    url: '/news/detailed',
    method: 'get',
    params: { id }
  })
}

export function fetchNewsList(pageNo, pageSize) {
  // 获取新闻列表
  return request({
    url: '/news/groupOne',
    method: 'get',
    params: { pageNo, pageSize }
  })
}

export function fetchResourcesList(pageNo, pageSize) {
  // 获取资源列表
  return request({
    url: '/news/groupTwo',
    method: 'get',
    params: { pageNo, pageSize }
  })
}
