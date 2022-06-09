/**
 * @Author: 郑钊宇
 * @Date: 2022-04-07 14:51:06
 * @LastEditTime: 2022-06-09 10:21:26
 * @LastEditors: 郑钊宇
 * @Description: 讲座相关api
 */

import request from '@/utils/request'

export function fetchLectureList(pageNo, pageSize) {
  // 获取讲座列表
  return request({
    url: '/lecture/lectureList',
    method: 'get',
    params: { pageNo, pageSize }
  })
}

export function fetchLectureById(id) {
  // 通过id获取讲座详情
  return request({
    url: '/lecture/lectureList/one',
    method: 'get',
    params: { id }
  })
}

export function getAllDate() {
  // 获取所有讲座日期
  return request({
    url: '/lecture/lectureList/allDate',
    method: 'get'
  })
}

export function fetchLectureByDate(date) {
  // 通过日期获取讲座列表
  return request({
    url: '/lecture/lectureList/dateSelectLecture',
    method: 'get',
    params: { date }
  })
}
