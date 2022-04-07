/**
 * @Author: 郑钊宇
 * @Date: 2022-04-07 16:26:20
 * @LastEditTime: 2022-04-07 16:29:43
 * @LastEditors: 郑钊宇
 * @Description:
 */
import request from '@/utils/request'

export function fetchInfoByCatalog(catalog) {
  return request({
    url: '/text/textByCatalog',
    method: 'get',
    params: { catalog }
  })
}

export function fetchInfoById(id) {
  return request({
    url: '/text/detailed',
    method: 'get',
    params: { id }
  })
}

export function downloadFile(fileName) {
  return request({
    url: '/text/download',
    method: 'get',
    params: { fileName }
  })
}
