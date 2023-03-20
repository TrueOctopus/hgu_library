<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-25 16:01:50
 * @LastEditTime: 2023-02-07 19:53:06
 * @LastEditors: 郑钊宇
 * @Description:
-->
<template>
  <div class="md-layout">

    <md-field class="md-layout-item md-size-70" :class="commentMessageClass">
      <label class="label">留言区</label>
      <p v-if="showErrorMeg" style="margin-top: 1rem;">请<router-link to="/login">登录</router-link>后留言</p>
      <span class="md-error">{{ commentErrorMessage }}</span>
      <md-textarea v-model="submitForm.messagecontent" :disabled="isLogin" @blur="commentVerify" />

    </md-field>
    <div class="submitBtn md-layout-item md-size-20">
      <md-button class="md-info" @click="submit">留言</md-button>
    </div>

    <div class="md-layout-item md-size-100 list">
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
      },
      showErrorMeg: false,
      hasCommentErrorMessage: false,
      commentErrorMessage: ''
    }
  },
  computed: {
    commentMessageClass() {
      return {
        'md-invalid': this.hasCommentErrorMessage
      }
    }
  },
  created() {
    this.fetchData()
    if (!this.$store.getters.username) {
      this.showErrorMeg = true
    } else {
      this.showErrorMeg = false
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
        // console.log(res)
        this.list = res.data.comments.list
        this.pages = res.data.comments.pages
        document.getElementsByClassName('wrapper')[0].scrollIntoView()
        // console.log(document.getElementsByClassName('wrapper')[0])
      })
    },
    commentVerify() {
      if (this.submitForm.messagecontent.length < 1) {
        this.hasCommentErrorMessage = true
        this.commentErrorMessage = '请输入留言内容'
      } else if (this.submitForm.messagecontent.length < 16) {
        this.hasCommentErrorMessage = true
        this.commentErrorMessage = '留言内容不能少于15个字'
      } else {
        this.hasCommentErrorMessage = false
        this.commentErrorMessage = ''
      }
    },
    submit() {
      this.commentVerify()
      if (!this.hasCommentErrorMessage) {
        addComment(this.submitForm).then(res => {
        // console.log(res)
          this.$store.dispatch('notification/promptNotification', {
            noticeType: 'success',
            message: '留言成功,请记得查收哦'
          })
          this.submitForm.messagecontent = ''
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.submitBtn {
  margin-top: 7vh;
}
.label {
  font-size: 16px;
  top: -1vh !important;
}
.list {
  margin-top: 2vh;
}
.md-error {
  margin-top: -6.4vh;
  margin-left: 60px;
}
</style>
