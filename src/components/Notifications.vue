<!--
 * @Author: 郑钊宇
 * @Date: 2022-03-28 19:53:37
 * @LastEditTime: 2022-03-29 14:54:21
 * @LastEditors: 郑钊宇
 * @Description: 提示框
-->
<template>
  <div v-if="isShowNotification" id="notifications">
    <div class="alert" :class="`alert-${notificationType}`">
      <div class="container">
        <button type="button" aria-hidden="true" class="close" @click="removeNotify">
          <md-icon>clear</md-icon>
        </button>
        <div class="alert-icon">
          <md-icon>{{ icon }}</md-icon>
        </div>
        <b> {{ noticeType }} 提示 </b> : {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const notice = ['info', 'success', 'warning', 'danger']

export default {
  computed: {
    ...mapGetters([
      'isShowNotification',
      'message',
      'notificationType',
      'duration'
    ]),
    icon() {
      const icons = ['info_outline', 'check', 'warning', 'error']
      return icons[notice.indexOf(this.notificationType)]
    },
    noticeType() {
      const text = ['信息', '成功', '警告', '错误']
      return text[notice.indexOf(this.notificationType)]
    }
  },
  watch: {
    isShowNotification(val) {
      if (val) {
        this.noticeTimer = setTimeout(() => {
          this.$store.dispatch('notification/closeNotification')
        }, this.duration)
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.noticeTimer)
  },
  methods: {
    removeNotify() {
      this.$store.dispatch('notification/closeNotification')
    }
  }
}
</script>

<style lang="scss" scoped>
#notifications {
  position: fixed;
  z-index: 10000;
  .alert .container{
    width: 80%;
    font-family: "Microsoft Yahei", Times, serif;
  }
}
</style>
