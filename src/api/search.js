/**
 * @Author: 郑钊宇
 * @Date: 2022-04-08 08:47:12
 * @LastEditTime: 2022-06-09 10:23:39
 * @LastEditors: 郑钊宇
 * @Description: 全局搜索api
 */
import request from '@/utils/request'

export function globalSearch(keywords) {
  // 通过关键词全局搜索
  return request({
    url: '/search/globalSearch',
    method: 'get',
    params: { keywords }
  })
}
