/**
 * @Author: 郑钊宇
 * @Date: 2022-04-09 16:31:53
 * @LastEditTime: 2022-04-09 16:38:50
 * @LastEditors: 郑钊宇
 * @Description:
 */

import request from '@/utils/request'

export function fetchCommentList({ pageNo, pageSize }) {
  return request({
    url: '/comment/commentList',
    method: 'get',
    params: { pageNo, pageSize }
  })
}

export function addComment(data) {
  return request({
    url: '/comment/commentList/insert',
    method: 'post',
    data
  })
}
