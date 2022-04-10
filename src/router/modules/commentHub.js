/**
 * @Author: 郑钊宇
 * @Date: 2022-04-09 15:51:11
 * @LastEditTime: 2022-04-09 15:54:44
 * @LastEditors: 郑钊宇
 * @Description:
 */
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

import Index from '@/views/CommentHub/Index'

import Common from '@/views/CommentHub/Common.vue'
import Comment from '@/views/CommentHub/Comment.vue'
const commentHubService = {
  path: '/commentHub',
  name: 'CommentHub',
  redirect: '/commentHub/common',
  components: {
    default: Index,
    header: MainNavbar,
    footer: MainFooter
  },
  props: {
    header: { colorOnScroll: 100 },
    footer: { backgroundColor: 'black' }
  },
  children: [
    {
      path: 'common',
      name: 'Common',
      components: {
        default: Common,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: 'comment',
      name: 'Comment',
      components: {
        default: Comment,
        header: MainNavbar,
        footer: MainFooter
      }
    }
  ]
}
export default commentHubService
