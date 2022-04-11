/**
 * @Author: 郑钊宇
 * @Date: 2022-04-11 15:31:52
 * @LastEditTime: 2022-04-11 15:33:00
 * @LastEditors: 郑钊宇
 * @Description:
 */
import request from '@/utils/request'

export function readerIdNumberSearch({ workNumber, worker }) {
  return request({
    url: '/workerTable/inquire',
    method: 'get',
    params: { workNumber, worker }
  })
}
