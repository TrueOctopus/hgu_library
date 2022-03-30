/**
 * @Author: 郑钊宇
 * @Date: 2022-03-28 20:07:10
 * @LastEditTime: 2022-03-29 11:33:14
 * @LastEditors: 郑钊宇
 * @Description:
 */

const state = {
  isShowNotification: false,
  message: '',
  notificationType: '',
  duration: 3 * 1000
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

