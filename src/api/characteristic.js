/**
 * @Author: 郑钊宇
 * @Date: 2022-04-24 15:25:07
 * @LastEditTime: 2022-04-24 18:52:40
 * @LastEditors: 郑钊宇
 * @Description:
 */

import request from '@/utils/request'

export const downloadCharacteristic = process.env.VUE_APP_BASE_API + '/literature/downloadByFileName?fileName='

export function searchAcaAward(params) {
  return request({
    url: '/academician/searchAcaAward',
    method: 'get',
    params
  })
}

export function searchAcaAchievement(params) {
  return request({
    url: '/academician/searchAcaAchievement',
    method: 'get',
    params
  })
}

export function searchAcaPatent(params) {
  return request({
    url: '/academician/searchAcaPatent',
    method: 'get',
    params
  })
}

export function searchAcaBook(params) {
  return request({
    url: '/academician/searchAcaBook',
    method: 'get',
    params
  })
}

export function searchAcaMeeting(params) {
  return request({
    url: '/academician/searchAcaMeeting',
    method: 'get',
    params
  })
}

export function searchAcaTechnology(params) {
  return request({
    url: '/academician/searchAcaTechnology',
    method: 'get',
    params
  })
}

export function searchAcaProjectReport(params) {
  return request({
    url: '/academician/searchAcaProjectReport',
    method: 'get',
    params
  })
}

export function searchAcaPapers(params) {
  return request({
    url: '/academician/searchAcaPapers',
    method: 'get',
    params
  })
}
