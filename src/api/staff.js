/**
 * @Author: 郑钊宇
 * @Date: 2022-04-11 15:31:52
 * @LastEditTime: 2022-06-09 10:23:59
 * @LastEditors: 郑钊宇
 * @Description: 教职工读者证相关api
 */
import request from '@/utils/request'

export function readerIdNumberSearch({ workNumber, worker }) {
  // 教职工读者证查询
  return request({
    url: '/workerTable/inquire',
    method: 'get',
    params: { workNumber, worker }
  })
}
