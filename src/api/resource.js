/**
 * @Author: 郑钊宇
 * @Date: 2022-03-30 08:52:27
 * @LastEditTime: 2022-06-09 10:23:27
 * @LastEditors: 郑钊宇
 * @Description: 资源相关api
 */
import request from '@/utils/request'

export function fetchDatabaseList() {
  // 获取数据库列表
  return request({
    url: '/database/databaseList',
    method: 'get'
  })
}
