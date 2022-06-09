/**
 * @Author: 郑钊宇
 * @Date: 2022-04-07 16:26:20
 * @LastEditTime: 2022-06-09 10:22:24
 * @LastEditors: 郑钊宇
 * @Description: 页面相关api
 */
import request from '@/utils/request'

export function fetchInfoByCatalog(catalog) {
  // 通过页面类型获取页面信息
  return request({
    url: '/text/textByCatalog',
    method: 'get',
    params: { catalog }
  })
}

export function fetchInfoById(id) {
  // 通过id获取页面信息
  return request({
    url: '/text/detailed',
    method: 'get',
    params: { id }
  })
}

export function downloadFile(fileName) {
  // 下载附件
  return request({
    url: '/text/download',
    method: 'get',
    params: { fileName }
  })
}
