/**
 * @Author: 郑钊宇
 * @Date: 2022-04-24 15:25:07
 * @LastEditTime: 2022-06-09 10:19:48
 * @LastEditors: 郑钊宇
 * @Description: 特色资源相关api
 */

import request from '@/utils/request'

export const downloadCharacteristic = process.env.VUE_APP_BASE_API + '/literature/downloadByFileName?fileName=' // 下载特色资源地址

export function searchAcaAward(params) {
  // 查询成果奖励
  return request({
    url: '/academician/searchAcaAward',
    method: 'get',
    params
  })
}

export function searchAcaAchievement(params) {
  // 查询学术成果
  return request({
    url: '/academician/searchAcaAchievement',
    method: 'get',
    params
  })
}

export function searchAcaPatent(params) {
  // 查询专利
  return request({
    url: '/academician/searchAcaPatent',
    method: 'get',
    params
  })
}

export function searchAcaBook(params) {
  // 查询著作
  return request({
    url: '/academician/searchAcaBook',
    method: 'get',
    params
  })
}

export function searchAcaMeeting(params) {
  // 查询学术会议
  return request({
    url: '/academician/searchAcaMeeting',
    method: 'get',
    params
  })
}

export function searchAcaTechnology(params) {
  // 查询科技成果
  return request({
    url: '/academician/searchAcaTechnology',
    method: 'get',
    params
  })
}

export function searchAcaProjectReport(params) {
  // 查询课题报告
  return request({
    url: '/academician/searchAcaProjectReport',
    method: 'get',
    params
  })
}

export function searchAcaPapers(params) {
  // 查询论文
  return request({
    url: '/academician/searchAcaPapers',
    method: 'get',
    params
  })
}
