/**
 * @Author: 郑钊宇
 * @Date: 2022-03-28 20:07:10
 * @LastEditTime: 2022-06-09 10:36:36
 * @LastEditors: 郑钊宇
 * @Description: 警告框状态管理
 */

const state = {
  isShowNotification: false, // 是否显示警告框
  message: '', // 警告框提示信息
  notificationType: '', // 警告框类型
  duration: 3 * 1000 // 警告框持续时间
}

const mutations = {
  PROMPT_NOTIFICATION: (state, { noticeType, message, duration }) => {
    state.isShowNotification = true
    state.message = message
    state.notificationType = noticeType
    state.duration = duration || 3 * 1000
  },
  CLOSE_NOTIFICATION: state => {
    state.isShowNotification = false
    state.message = ''
  }
}

const actions = {
  promptNotification({ commit }, { noticeType, message, duration }) {
    commit('PROMPT_NOTIFICATION', { noticeType, message, duration })
  },
  closeNotification({ commit }) {
    commit('CLOSE_NOTIFICATION')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

