/**
 * @Author: 郑钊宇
 * @Date: 2022-04-09 16:31:53
 * @LastEditTime: 2022-06-09 10:20:33
 * @LastEditors: 郑钊宇
 * @Description: 留言板相关api
 */

import request from '@/utils/request'

export function fetchCommentList({ pageNo, pageSize }) {
  // 获取留言板列表
  return request({
    url: '/comment/commentList',
    method: 'get',
    params: { pageNo, pageSize }
  })
}

export function addComment(data) {
  // 添加留言
  return request({
    url: '/comment/commentList/insert',
    method: 'post',
    data
  })
}
