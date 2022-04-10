<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-25 16:01:50
 * @LastEditTime: 2022-04-10 09:48:47
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <div class="md-layout">

    <md-field class="md-layout-item md-size-70">
      <label style="font-size: 16px">留言区</label>
      <md-textarea v-model="submitForm.messagecontent" :disabled="isLogin" />
    </md-field>
    <div class="submitBtn md-layout-item md-size-20">
      <md-button class="md-info" @click="submit">留言</md-button>
    </div>

    <div class="md-layout-item md-size-100">
      <commentElement
        v-for="item in list"
        :key="item.id"
        :commenter="item.commenter"
        :message="item.messagecontent"
        :responder="item.responder"
        :replay="item.reply"
      />
    </div>

    <pagination
      v-model="pageNo"
      type="info"
      :page-count="pages"
      class="md-layout-item md-size-100"
      @input="fetchData"
    />
  </div>
</template>

<script>
import { addComment, fetchCommentList } from '@/api/comment'
import { Pagination } from '@/components'
import commentElement from './components/commentElement'
export default {
  components: {
    Pagination,
    commentElement
  },
  data() {
    return {
      list: [],
      pageNo: 1,
      pageSize: 10,
      pages: 10,
      isLogin: true,
      submitForm: {
        messagecontent: '',
        commenter: '',
        checkflag: 0
      }
    }
  },
  created() {
    this.fetchData()
    if (!this.$store.getters.username) {
      this.submitForm.messagecontent = '请登陆后留言'
    } else {
      this.isLogin = false
      this.submitForm.messagecontent = ''
      this.submitForm.commenter = this.$store.getters.username
    }
  },
  methods: {
    fetchData() {
      fetchCommentList({
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }).then(res => {
        console.log(res)
        this.list = res.data.comments.list
        this.pages = res.data.comments.pages
        document.getElementsByClassName('wrapper')[0].scrollIntoView()
        console.log(document.getElementsByClassName('wrapper')[0])
      })
    },
    submit() {
      addComment(this.submitForm).then(res => {
        console.log(res)
        this.$store.dispatch('notification/promptNotification', {
          noticeType: 'success',
          message: '留言成功,请记得查收'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.submitBtn {
  margin-top: 7vh;
}
</style>
