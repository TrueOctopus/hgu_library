/**
 * @Author: 郑钊宇
 * @Date: 2022-04-08 08:47:12
 * @LastEditTime: 2022-04-08 08:49:11
 * @LastEditors: 郑钊宇
 * @Description:
 */
import request from '@/utils/request'

export function globalSearch(keywords) {
  return request({
    url: '/search/globalSearch',
    method: 'get',
    params: { keywords }
  })
}
