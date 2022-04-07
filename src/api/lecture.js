/**
 * @Author: 郑钊宇
 * @Date: 2022-04-07 14:51:06
 * @LastEditTime: 2022-04-07 14:54:05
 * @LastEditors: 郑钊宇
 * @Description:
 */

import request from '@/utils/request'

export function fetchLectureList(pageNo, pageSize) {
  return request({
    url: '/lecture/lectureList',
    method: 'get',
    params: { pageNo, pageSize }
  })
}

export function fetchLectureById(id) {
  return request({
    url: '/lecture/lectureList/one',
    method: 'get',
    params: { id }
  })
}

export function getAllDate() {
  return request({
    url: '/lecture/lectureList/allDate',
    method: 'get'
  })
}

export function fetchLectureByDate(date) {
  return request({
    url: '/lecture/lectureList/dateSelectLecture',
    method: 'get',
    params: { date }
  })
}
