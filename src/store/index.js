/**
 * @Author: 郑钊宇
 * @Date: 2022-03-27 09:55:14
 * @LastEditTime: 2022-03-29 09:05:36
 * @LastEditors: 郑钊宇
 * @Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import notification from './modules/notification'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    notification
  },
  getters
})

export default store
